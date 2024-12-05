!function () {
  'use strict';

  !function () {
    var v = function () {
      var N = true;
      return function (f, r) {
        var z = N ? function () {
          if (r) {
            var m = r.apply(f, arguments);
            r = null;
            return m;
          }
        } : function () {};
        N = false;
        return z;
      };
    }();
    var G;
    !function (N) {
      var f = v(this, function () {
        return f.toString().search("(((.+)+)+)+$").toString().constructor(f).search("(((.+)+)+)+$");
      });
      f();
      N.i = "window";
      N.l = "self";
    }(G || (G = {}));
    var w = (0x0, eval)("this");
    w[G.l];
    var Z = w[G.i];
    System.register(["6d5cafebdb", "react", "react-dom", "99212c6ec4", "styled-components", "react-spring/renderprops"], function (N) {
      'use strict';

      var f;
      var z;
      var m;
      var j;
      var O;
      var A;
      var L;
      var M;
      return {
        'setters': [null, function (R) {
          f = R["default"];
        }, function (R) {
          z = R["default"];
        }, function (R) {
          m = R.ResRC;
          j = R.Utils;
          O = R.XHR;
        }, function (R) {
          A = R["default"];
        }, function (R) {
          L = R.animated;
          M = R.Spring;
        }],
        'execute': function () {
          var v0 = Z.__extends;
          var v1 = Z.__assign;
          var v2 = Z.__decorate;
          var v3 = Z.__awaiter;
          var v4 = Z.__generator;
          var v5 = Z.__makeTemplateObject;
          function v6(wY, wx) {
            var wD = {};
            for (var wk in wx) if (wY.hasOwnProperty(wk)) {
              wD[wY[wk]] = wx[wk];
            } else {
              wD[wk] = wx[wk];
            }
            return wD;
          }
          v6({
            'unloadBundleAsset': "releaseBundleAsset",
            'unload': "release",
            'unloadBundle': "releaseBundle",
            'deleteBundle': "removeBundle",
            'loadByBundleAsset': "loadBundleAsset",
            'loadRemoteBySingle': "loadRemoteSingle"
          }, m);
          var v7 = v6({
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
          }, j);
          function v9(wY) {
            return function (wx, wD) {
              wx = wx || function (wk) {
                var wQ = undefined;
                if ("[object Object]" === Object.prototype.toString.call(wk) && wk.hasOwnProperty("err") && wk.hasOwnProperty('dt')) {
                  var wH = wk.err;
                  if (wH) {
                    wQ = function (wc) {
                      var wp;
                      if (!("[object Object]" === Object.prototype.toString.call(wc))) {
                        wc = {};
                      }
                      if (!(wc.hasOwnProperty('cd') && ("number" == typeof (wp = wc.cd) || "string" == typeof wp && '' !== wp && !/\s/.test(wp) && !isNaN(+wp)))) {
                        wc.cd = 0x1965;
                      }
                      0x0;
                      return new shell.Error(shell.ServerError.Domain, wc.cd, wc.tid);
                    }(wH);
                  }
                } else {
                  0x0;
                  wQ = new shell.Error(shell.ServerError.Domain, 0x1965);
                }
                return wQ;
              }(wD);
              wY(wx, wD);
            };
          }
          function vv(wY, wx, wD, wk) {
            var wQ = wY.request("POST", wx, wD, v9(wk));
            return function () {
              return wQ.abort();
            };
          }
          var vX = function () {
            function wY() {
              this.u = undefined;
              this.h = undefined;
              this.v = new O();
            }
            wY.prototype.setAPIUrls = function (wx, wD) {
              this.u = wx;
              this.h = wD;
            };
            wY.prototype.request = function (wx, wD, wk) {
              return vv(this.v, this.u + wx, wD, wk);
            };
            wY.prototype.serviceRequest = function (wx, wD, wk) {
              return vv(this.v, this.h + wx, wD, wk);
            };
            return wY;
          }();
          var vN = function (wY, wx) {
            var wD = wY.indexOf(Z.String.fromCharCode(wx));
            return -0x1 !== wD ? wY.substring(wD + 0x1) : wY;
          };
          function vz(wY) {
            return ["c ont ext", "eve nt", "em it "][wY].split('').filter(function (wx) {
              return " " !== wx;
            }).join('');
          }
          var vu;
          var vs;
          var vj;
          var vO;
          var vl;
          var vA;
          var vL;
          var vM = new (function () {
            function wY() {}
            Object.defineProperty(wY.prototype, "context", {
              'get': function () {
                return this.C;
              },
              'set': function (wx) {
                this.C = wx;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "googleAnalyticCurrentScreen", {
              'get': function () {
                return this.B;
              },
              'set': function (wx) {
                this.B = wx;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "isRTL", {
              'get': function () {
                return shell.isRTLLanguage && shell.isRTLLanguage();
              },
              'enumerable': false,
              'configurable': true
            });
            return wY;
          }())();
          function vR(wY) {
            var wx = vs;
            wY.btt = isNaN(wx) ? 0x0 : wx;
            wY.wk = wY.wk ? wY.wk : vj;
            wY.atk = vu;
            wY.pf = vl;
            wY.gid = vO;
            return wY;
          }
          var vS = new (function () {
            function wY() {
              this.W = false;
              this.S = false;
              this.G = false;
              this.O = false;
            }
            Object.defineProperty(wY.prototype, "data", {
              'set': function (wx) {
                this.F = wx.tbb;
                this.T = wx.rfgc;
                this.N = wx.tfgb;
                this._ = wx.ch;
                this.W = wx.iebe;
                this.S = wx.iefge;
                this.G = wx.inbe;
                this.O = wx.infge;
                this.A = wx.p;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "walletType", {
              'get': function () {
                return this.L;
              },
              'set': function (wx) {
                this.L = wx;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "bonusWalletAmt", {
              'get': function () {
                return this.F;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "freeGameRemaining", {
              'get': function () {
                return this.T;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "freeGameAmt", {
              'get': function () {
                return this.N;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "cashDetailInfo", {
              'get': function () {
                return this._;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "isExpiredBonusExist", {
              'get': function () {
                return this.W;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "isExpiredFreeGameExist", {
              'get': function () {
                return this.S;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "isNewBonusExist", {
              'get': function () {
                return this.G;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "isNewFreeGameExist", {
              'get': function () {
                return this.O;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "tournamentInfo", {
              'get': function () {
                return this.A;
              },
              'enumerable': false,
              'configurable': true
            });
            return wY;
          }())();
          var vd = new (function () {
            function wY() {
              this.I = "rgba(255,255,255,1)";
            }
            Object.defineProperty(wY.prototype, "gameRawInfo", {
              'get': function () {
                return this.D;
              },
              'set': function (wx) {
                this.D = wx;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "transactionInfo", {
              'get': function () {
                return this.R;
              },
              'set': function (wx) {
                this.R = wx;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "gameID", {
              'get': function () {
                return this.j;
              },
              'set': function (wx) {
                this.j = wx;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "status", {
              'get': function () {
                return this.M;
              },
              'set': function (wx) {
                this.M = wx;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "gameNameObj", {
              'get': function () {
                return this.U;
              },
              'set': function (wx) {
                this.U = wx;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "gameIconUrl", {
              'get': function () {
                return this.P;
              },
              'set': function (wx) {
                this.P = wx;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "gameThemeColor", {
              'get': function () {
                return this.I;
              },
              'set': function (wx) {
                this.I = wx;
              },
              'enumerable': false,
              'configurable': true
            });
            return wY;
          }())();
          var vb;
          var vW;
          var vY;
          var vx;
          var vD;
          var vk;
          var vQ;
          var vH;
          var vc;
          var vp;
          var vh;
          var vg;
          var vE;
          var vU;
          var vJ;
          var vT;
          var vy;
          var vI;
          var vP;
          var vC;
          var X0 = A.div(vb || (vb = v5(["\n    margin: 0 auto;\n    width: 95%;\n    height: 100%;\n    direction: ", ";\n"], ["\n    margin: 0 auto;\n    width: 95%;\n    height: 100%;\n    direction: ", ";\n"])), vM.isRTL ? "rtl" : "ltr");
          var X1 = A.h4(vW || (vW = v5(["\n    display: inline-block;\n    font-weight: normal;\n    margin-top: ", ";\n    margin-bottom: ", "px;\n    line-height: ", "px;\n"], ["\n    display: inline-block;\n    font-weight: normal;\n    margin-top: ", ";\n    margin-bottom: ", "px;\n    line-height: ", "px;\n"])), function (wY) {
            return "land" === wY.orientation ? "22px" : "16px";
          }, "land" === shell.environment.getOrientationMode() ? 14.25 : 0x13, "land" === shell.environment.getOrientationMode() ? 15 : 0x14);
          var X2 = A.div(vY || (vY = v5(["\n    cursor: pointer;\n    position: absolute;\n    right: ", ";\n    top: ", ";\n    transform: scale(", ");\n    opacity: 0.4;\n"], ["\n    cursor: pointer;\n    position: absolute;\n    right: ", ";\n    top: ", ";\n    transform: scale(", ");\n    opacity: 0.4;\n"])), function (wY) {
            return "land" === wY.orientation ? "7px" : "10px";
          }, function (wY) {
            return "land" === wY.orientation ? "9px" : "7px";
          }, "land" === shell.environment.getOrientationMode() ? 0.5625 : 0.75);
          var X3 = A.div(vx || (vx = v5(["\n    font-size: 14px;\n    opacity: 0.2;\n    padding: 0px ", "px;\n    line-height: ", "px;\n"], ["\n    font-size: 14px;\n    opacity: 0.2;\n    padding: 0px ", "px;\n    line-height: ", "px;\n"])), "land" === shell.environment.getOrientationMode() ? 18 : 0x18, "land" === shell.environment.getOrientationMode() ? 15 : 0x14);
          var X4 = A.button(vD || (vD = v5(["\n    color: ", ";\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n    width: 30%;\n    margin-top: 14px;\n    background-color: rgba(49, 49, 58, 1);\n    border: 1px solid rgba(0, 0, 0, 0.3);\n"], ["\n    color: ", ";\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n    width: 30%;\n    margin-top: 14px;\n    background-color: rgba(49, 49, 58, 1);\n    border: 1px solid rgba(0, 0, 0, 0.3);\n"])), function (wY) {
            return wY.themeColor || "rgb(255,255,255,1)";
          }, "land" === shell.environment.getOrientationMode() ? 6 : 0x8);
          var X5 = A.div(vk || (vk = v5(["\n    background-color: rgba(48,48,60,1);\n    border: none;\n    border-radius: 8px;\n    width: 100%;\n    text-align: center;\n    margin: ", "px 0px;\n    font-size: 13px;\n    height: ", "px;\n    position: relative;\n    font-family: inherit;\n    align-items: center;\n    display: inline-flex;\n"], ["\n    background-color: rgba(48,48,60,1);\n    border: none;\n    border-radius: 8px;\n    width: 100%;\n    text-align: center;\n    margin: ", "px 0px;\n    font-size: 13px;\n    height: ", "px;\n    position: relative;\n    font-family: inherit;\n    align-items: center;\n    display: inline-flex;\n"])), "land" === shell.environment.getOrientationMode() ? 4.5 : 0x6, "land" === shell.environment.getOrientationMode() ? 36 : 0x30);
          var X6 = A(X5)(vQ || (vQ = v5(["\n    color: rgba(255,255,255,0.8);\n"], ["\n    color: rgba(255,255,255,0.8);\n"])));
          var X7 = A(X5)(vH || (vH = v5(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), function (wY) {
            return wY.themeColor || "rgba(255,255,255,0.8)";
          });
          var X8 = A(X5)(vc || (vc = v5(["\n    cursor: pointer;\n    color: rgba(255,255,255,0.8);\n"], ["\n    cursor: pointer;\n    color: rgba(255,255,255,0.8);\n"])));
          var X9 = A(X5)(vp || (vp = v5(["\n    cursor: pointer;\n    color: ", ";\n"], ["\n    cursor: pointer;\n    color: ", ";\n"])), function (wY) {
            return wY.themeColor || "rgba(255,255,255,0.8)";
          });
          var Xv = A.div(vh || (vh = v5(["\n    padding-", ": ", "px;\n    text-align: ", ";\n    width: 46.5%;\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n"], ["\n    padding-", ": ", "px;\n    text-align: ", ";\n    width: 46.5%;\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n"])), vM.isRTL ? "right" : "left", "land" === shell.environment.getOrientationMode() ? 14.25 : 0x13, vM.isRTL ? "right" : "left");
          var XX = A.div(vg || (vg = v5(["\n    padding-", ": ", "px;\n    text-align: ", ";\n    width: 44.5%;\n    line-height: ", "px;\n"], ["\n    padding-", ": ", "px;\n    text-align: ", ";\n    width: 44.5%;\n    line-height: ", "px;\n"])), vM.isRTL ? "left" : "right", "land" === shell.environment.getOrientationMode() ? 18 : 0x18, vM.isRTL ? "left" : "right", "land" === shell.environment.getOrientationMode() ? 12 : 0x10);
          var XF = A.div(vE || (vE = v5(["\n    height: 40px;\n    width: ", "px;\n    transform: scale(", ");\n    transform-origin: ", ";\n"], ["\n    height: 40px;\n    width: ", "px;\n    transform: scale(", ");\n    transform-origin: ", ";\n"])), "land" === shell.environment.getOrientationMode() ? 20.25 : 0x1b, "land" === shell.environment.getOrientationMode() ? 0.375 : 0.5, vM.isRTL ? "right" : "left");
          var Xa = A.div(vU || (vU = v5(["\n    position: absolute;\n    ", ": ", ";\n    bottom: ", ";\n    transform: scale(", ") ", ";\n"], ["\n    position: absolute;\n    ", ": ", ";\n    bottom: ", ";\n    transform: scale(", ") ", ";\n"])), vM.isRTL ? "left" : "right", function (wY) {
            return "land" === wY.orientation ? "-7px" : "-3px";
          }, function (wY) {
            return "land" === wY.orientation ? "-2px" : "3.5px";
          }, "land" === shell.environment.getOrientationMode() ? 0.375 : 0.5, vM.isRTL ? "scaleX(-1)" : '');
          var XG = A.div(vJ || (vJ = v5(["\n    position: relative;\n    width: 0px;\n    left: ", ";\n    right: ", ";\n    top: ", ";\n    transform: scale(", ") ", ";\n"], ["\n    position: relative;\n    width: 0px;\n    left: ", ";\n    right: ", ";\n    top: ", ";\n    transform: scale(", ") ", ";\n"])), vM.isRTL ? "0px" : function (wY) {
            return "land" === wY.orientation ? "-9px" : "-12px";
          }, vM.isRTL ? "2px" : "0px", function (wY) {
            return "land" === wY.orientation ? "-6px" : "-8px";
          }, "land" === shell.environment.getOrientationMode() ? 0.5249999999999999 : 0.7, vM.isRTL ? "scaleX(-1)" : '');
          var Xw = A.div(vT || (vT = v5(["\n    word-wrap: break-word;\n    transform: scale(", ");\n    transform-origin: ", ";\n    width: ", "%;\n    height: ", "%;\n"], ["\n    word-wrap: break-word;\n    transform: scale(", ");\n    transform-origin: ", ";\n    width: ", "%;\n    height: ", "%;\n"])), "land" === shell.environment.getOrientationMode() ? 0.75 : 0x1, vM.isRTL ? "right" : "left", "land" === shell.environment.getOrientationMode() ? 133.33333333333334 : 0x64, "land" === shell.environment.getOrientationMode() ? 133.33333333333334 : 0x64);
          var XZ = A(Xw)(vy || (vy = v5(["\n    font-size: 11px;\n    opacity: 0.6;\n"], ["\n    font-size: 11px;\n    opacity: 0.6;\n"])));
          var XN = A(Xw)(vI || (vI = v5(["\n    font-size: 11px;\n    opacity: 0.75;\n"], ["\n    font-size: 11px;\n    opacity: 0.75;\n"])));
          var Xf = v7.formatCurrency;
          var Xz = shell.I18n;
          var Xm = A.div(vP || (vP = v5(["\n    display: flex;\n    flex-direction: column;\n    height: 87%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    height: 87%;\n"])));
          var Xu = A.div(vC || (vC = v5(["\n    margin: auto;\n"], ["\n    margin: auto;\n"])));
          var Xs = function (wY) {
            function wx() {
              return null !== wY && wY.apply(this, arguments) || this;
            }
            v0(wx, wY);
            wx.prototype.shouldComponentUpdate = function (wD) {
              return this.props.show === wD.show;
            };
            wx.prototype.render = function () {
              return f.createElement(X0, {
                'id': "walletListContainer"
              }, this.V(), this.H());
            };
            wx.prototype.V = function () {
              return f.createElement("div", null, f.createElement(X1, {
                'orientation': shell.environment.getOrientationMode()
              }, Xz.t("WalletList.CashDistribute")), f.createElement(X2, {
                'className': "wallet-plugin-sprite wallet-plugin-ic_close",
                'onClick': this.props.onCloseButtonClick,
                'orientation': shell.environment.getOrientationMode()
              }));
            };
            wx.prototype.H = function () {
              if (this.props.error) {
                return f.createElement(Xm, null, f.createElement(Xu, null, f.createElement(X3, null, f.createElement(Xw, null, this.props.error.message)), this.props.error.shouldRetry && f.createElement(X4, {
                  'onClick': this.props.onRetryClick,
                  'themeColor': vd.gameThemeColor
                }, Xz.t("General.DialogRetry"))));
              }
              if (this.props.data) {
                vS.data = this.props.data.dt;
                var wD = vS.bonusWalletAmt;
                var wk = vS.freeGameRemaining;
                var wQ = vS.isExpiredBonusExist;
                var wH = vS.isExpiredFreeGameExist;
                var wc = vS.isNewBonusExist;
                var wp = vS.isNewFreeGameExist;
                var wh = vS.tournamentInfo;
                var wg = vS.cashDetailInfo;
                var wE = this.Z();
                return f.createElement("div", null, wg && f.createElement(wE.cwInfo.btnStyle, {
                  'id': 'C',
                  'onClick': this.props.onCashWalletClick.bind(this, wg.k),
                  'themeColor': vd.gameThemeColor
                }, f.createElement(Xv, {
                  'className': "resizableTxtContainer"
                }, f.createElement(XF, null, f.createElement("span", {
                  'className': wE.cwInfo.icon
                })), f.createElement(Xw, {
                  'className': "resizableTxt"
                }, Xz.t("WalletList.CurrentWallet"))), f.createElement(XX, {
                  'className': "resizableTxtContainer"
                }, f.createElement(Xw, {
                  'className': "resizableTxt"
                }, Xf(wg.cb)))), (wQ || wD > 0x0) && f.createElement(wE.bwInfo.btnStyle, {
                  'id': 'B',
                  'onClick': this.props.onBonusWalletClick,
                  'themeColor': vd.gameThemeColor
                }, f.createElement(Xv, {
                  'className': "resizableTxtContainer"
                }, f.createElement(XF, null, f.createElement("span", {
                  'className': wE.bwInfo.icon
                })), wc && f.createElement(XG, {
                  'orientation': shell.environment.getOrientationMode()
                }, f.createElement("span", {
                  'className': "wallet-plugin-sprite wallet-plugin-ic_wallet_new"
                })), f.createElement(Xw, {
                  'className': "resizableTxt"
                }, Xz.t("WalletList.BonusWallet"))), f.createElement(XX, null, wE.offerIDContent, f.createElement("div", {
                  'className': "resizableTxtContainer"
                }, wE.bonusWalletAmtContent)), f.createElement(Xa, {
                  'className': wE.bwInfo.arrow,
                  'orientation': shell.environment.getOrientationMode()
                })), (wH || wk > 0x0) && f.createElement(wE.fgInfo.btnStyle, {
                  'id': 'G',
                  'onClick': this.props.onFreeGameClick,
                  'themeColor': vd.gameThemeColor
                }, f.createElement(Xv, {
                  'className': "resizableTxtContainer"
                }, f.createElement(XF, null, f.createElement("span", {
                  'className': wE.fgInfo.icon
                })), wp && f.createElement(XG, {
                  'orientation': shell.environment.getOrientationMode()
                }, f.createElement("span", {
                  'className': "wallet-plugin-sprite wallet-plugin-ic_wallet_new"
                })), f.createElement(Xw, {
                  'className': "resizableTxt"
                }, Xz.t("WalletList.FreeGameWallet"))), f.createElement(XX, null, f.createElement("div", {
                  'className': "resizableTxtContainer"
                }, f.createElement(Xw, {
                  'className': "resizableTxt"
                }, wE.remainingInfo)), f.createElement("div", {
                  'className': "resizableTxtContainer"
                }, f.createElement(XZ, {
                  'className': "resizableTxt"
                }, wE.amountInfo))), f.createElement(Xa, {
                  'className': wE.fgInfo.arrow,
                  'orientation': shell.environment.getOrientationMode()
                })), wh && f.createElement(wE.pInfo.btnStyle, {
                  'id': 'P',
                  'themeColor': vd.gameThemeColor
                }, f.createElement(Xv, {
                  'className': "resizableTxtContainer"
                }, f.createElement(XF, null, f.createElement("span", {
                  'className': wE.pInfo.icon
                })), f.createElement(Xw, {
                  'className': "resizableTxt"
                }, Xz.t("WalletList.PointWallet"))), f.createElement(XX, {
                  'className': "resizableTxtContainer"
                }, f.createElement(Xw, {
                  'className': "resizableTxt"
                }, Xf(wh.pb)))));
              }
            };
            wx.prototype.Z = function () {
              var wD = vS.walletType;
              var wk = vS.freeGameRemaining;
              var wQ = vS.bonusWalletAmt;
              var wH = vS.freeGameAmt;
              var wc = vd.transactionInfo;
              var wp = Xf(wQ);
              var wh = Xf(wH);
              var wE = ''.concat("wallet-plugin-sprite", " wallet-plugin-ic_wallet");
              var wU = ''.concat("wallet-plugin-sprite", " wallet-plugin-ic_bonus_wallet");
              var wJ = ''.concat("wallet-plugin-sprite", " wallet-plugin-ic_free_game");
              var wT = ''.concat("wallet-plugin-sprite", " wallet-plugin-ic_nav_arrow");
              var wI = ''.concat("wallet-plugin-color-sprite", " wallet-plugin-color-ic_wallet");
              var wP = ''.concat("wallet-plugin-color-sprite", " wallet-plugin-color-ic_bonus_wallet");
              var wC = ''.concat("wallet-plugin-color-sprite", " wallet-plugin-color-ic_free_game");
              var Z0 = ''.concat("wallet-plugin-color-sprite", " wallet-plugin-color-ic_nav_arrow");
              switch (wD) {
                case 'B':
                  var Z1 = Xf(wc.wbn.ba);
                  return {
                    'bonusWalletAmtContent': f.createElement(XN, {
                      'className': "resizableTxt"
                    }, Z1),
                    'bonusWalletAmt': Z1,
                    'offerIDContent': f.createElement("div", {
                      'className': "resizableTxtContainer"
                    }, f.createElement(Xw, {
                      'className': "resizableTxt"
                    }, ''.concat(Xz.t("WalletList.BonusWallet"), " ").concat(wc.wbn.bid))),
                    'remainingInfo': Xz.t("WalletList.RemainingCount", {
                      'value': wk.toString()
                    }),
                    'amountInfo': wh,
                    'cwInfo': {
                      'icon': wE,
                      'arrow': wT,
                      'btnStyle': X8
                    },
                    'bwInfo': {
                      'icon': wP,
                      'arrow': Z0,
                      'btnStyle': X9
                    },
                    'fgInfo': {
                      'icon': wJ,
                      'arrow': wT,
                      'btnStyle': X8
                    },
                    'pInfo': {
                      'icon': wE,
                      'arrow': wT,
                      'btnStyle': X6
                    }
                  };
                case 'G':
                  return {
                    'bonusWalletAmtContent': f.createElement(Xw, {
                      'className': "resizableTxt"
                    }, wp),
                    'bonusWalletAmt': wp,
                    'offerIDContent': null,
                    'remainingInfo': ''.concat(Xz.t("WalletList.FreeGameWallet"), " ").concat(wc.wfg.fgid),
                    'amountInfo': Xz.t("WalletList.RemainingCount", {
                      'value': wc.wfg.gc.toString()
                    }),
                    'cwInfo': {
                      'icon': wE,
                      'arrow': wT,
                      'btnStyle': X8
                    },
                    'bwInfo': {
                      'icon': wU,
                      'arrow': wT,
                      'btnStyle': X8
                    },
                    'fgInfo': {
                      'icon': wC,
                      'arrow': Z0,
                      'btnStyle': X9
                    },
                    'pInfo': {
                      'icon': wE,
                      'arrow': wT,
                      'btnStyle': X6
                    }
                  };
                case 'P':
                  return {
                    'bonusWalletAmtContent': f.createElement(Xw, {
                      'className': "resizableTxt"
                    }, wp),
                    'bonusWalletAmt': wp,
                    'offerIDContent': null,
                    'remainingInfo': Xz.t("WalletList.RemainingCount", {
                      'value': wk.toString()
                    }),
                    'amountInfo': wh,
                    'cwInfo': {
                      'icon': wE,
                      'arrow': wT,
                      'btnStyle': X8
                    },
                    'bwInfo': {
                      'icon': wU,
                      'arrow': wT,
                      'btnStyle': X8
                    },
                    'fgInfo': {
                      'icon': wJ,
                      'arrow': wT,
                      'btnStyle': X8
                    },
                    'pInfo': {
                      'icon': wI,
                      'arrow': wT,
                      'btnStyle': X7
                    }
                  };
                default:
                  return {
                    'bonusWalletAmtContent': f.createElement(Xw, {
                      'className': "resizableTxt"
                    }, wp),
                    'bonusWalletAmt': wp,
                    'offerIDContent': null,
                    'remainingInfo': Xz.t("WalletList.RemainingCount", {
                      'value': wk.toString()
                    }),
                    'amountInfo': wh,
                    'cwInfo': {
                      'icon': wI,
                      'arrow': wT,
                      'btnStyle': X7
                    },
                    'bwInfo': {
                      'icon': wU,
                      'arrow': wT,
                      'btnStyle': X8
                    },
                    'fgInfo': {
                      'icon': wJ,
                      'arrow': wT,
                      'btnStyle': X8
                    },
                    'pInfo': {
                      'icon': wE,
                      'arrow': wT,
                      'btnStyle': X8
                    }
                  };
              }
            };
            return wx;
          }(f.Component);
          var Xj = function () {
            function wY(wx) {
              this.J = wx.k;
              this.X = wx.bid;
              this.Y = wx.n;
              this.q = wx.gids;
              this.K = wx.ba;
              this.$ = wx.ibra;
              this.nn = wx.mca;
              this.tn = wx.bra;
              this.en = wx.ed;
              this.M = wx.s;
              this.rn = wx.cd;
              this.an = wx.ca;
              this.ln = wx.gidl;
              this.sn = wx.bt;
              this.un = wx.ks;
              this.cn = wx.cgid;
              this.hn = wx.baid;
              this.fn = wx.bca;
              this.dn = wx.isd;
            }
            Object.defineProperty(wY.prototype, "key", {
              'get': function () {
                return this.J;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "bonusID", {
              'get': function () {
                return this.X;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "bonusWalletName", {
              'get': function () {
                return this.Y;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "gameIDs", {
              'get': function () {
                return this.q;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "balanceAmount", {
              'get': function () {
                if (!this.K) {
                  this.K = 0x0;
                }
                return this.K;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "initialBonusRatioAmount", {
              'get': function () {
                if (!this.$) {
                  this.$ = 0x0;
                }
                return this.$;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "maximumConversionAmount", {
              'get': function () {
                if (!this.nn) {
                  this.nn = 0x0;
                }
                return this.nn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "bonusRatioAmount", {
              'get': function () {
                if (!this.tn) {
                  this.tn = 0x0;
                }
                return this.tn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "expiredDate", {
              'get': function () {
                var wx = new Date(this.en);
                return wx.getFullYear() + '/' + (wx.getMonth() + 0x1 < 0xa && wx.getMonth() + 0x1 >= 0x0 ? '0' + (wx.getMonth() + 0x1).toString() : wx.getMonth() + 0x1) + '/' + (wx.getDate() < 0xa && wx.getDate() >= 0x0 ? '0' + wx.getDate().toString() : wx.getDate());
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "status", {
              'get': function () {
                return this.M;
              },
              'set': function (wx) {
                this.M = wx;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "createdDate", {
              'get': function () {
                return this.rn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "conversionAmount", {
              'get': function () {
                if (!this.an) {
                  this.an = 0x0;
                }
                return this.an;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "lockedGameID", {
              'get': function () {
                return this.ln;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "rollOverMode", {
              'get': function () {
                return this.sn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "keySelection", {
              'get': function () {
                return this.un;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "convertedGameID", {
              'get': function () {
                return this.cn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "balanceID", {
              'get': function () {
                return this.hn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "beforeConversionAmount", {
              'get': function () {
                if (!this.fn) {
                  this.fn = 0x0;
                }
                return this.fn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "expiredTime", {
              'get': function () {
                var wx = new Date(this.en);
                return (wx.getHours() < 0xa && wx.getHours() >= 0x0 ? '0' + wx.getHours().toString() : wx.getHours()) + ':' + (wx.getMinutes() < 0xa && wx.getMinutes() >= 0x0 ? '0' + wx.getMinutes().toString() : wx.getMinutes()) + ':' + (wx.getSeconds() < 0xa && wx.getSeconds() >= 0x0 ? '0' + wx.getSeconds().toString() : wx.getSeconds());
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "isHideDiscard", {
              'get': function () {
                return this.dn;
              },
              'enumerable': false,
              'configurable': true
            });
            return wY;
          }();
          function XO(wY) {
            if (wY.__esModule) {
              return wY;
            }
            var wx = wY["default"];
            if ("function" == typeof wx) {
              var wD = function wk() {
                if (this instanceof wk) {
                  var wQ = [null];
                  wQ.push.apply(wQ, arguments);
                  var wH = Function.bind.apply(wx, wQ);
                  return new wH();
                }
                return wx.apply(this, arguments);
              };
              wD.prototype = wx.prototype;
            } else {
              wD = {};
            }
            Object.defineProperty(wD, "__esModule", {
              'value': true
            });
            Object.keys(wY).forEach(function (wQ) {
              var wH = Object.getOwnPropertyDescriptor(wY, wQ);
              Object.defineProperty(wD, wQ, wH.get ? wH : {
                'enumerable': true,
                'get': function () {
                  return wY[wQ];
                }
              });
            });
            return wD;
          }
          if (!(undefined !== w || undefined !== Z)) {
            if ("undefined" != typeof global) {
              global;
            }
          }
          var Xl;
          var XA;
          var XL;
          var XM;
          var XR;
          var Xq;
          var XK = {};
          var XS = {};
          var Xd = {
            get 'exports'() {
              return XS;
            },
            set 'exports'(wY) {
              XS = wY;
            }
          };
          Xq = {
            get 'exports'() {
              return XK;
            },
            set 'exports'(wY) {
              XK = wY;
            }
          };
          (function (wY, wx) {
            Xq.exports = wx(function () {
              try {
                if (!XR) {
                  XR = 0x1;
                  Xd.exports = function () {
                    if (XM) {
                      return XL;
                    }
                    XM = 0x1;
                    var wD = XA ? Xl : (XA = 0x1, Xl = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                    function wk() {}
                    function wQ() {}
                    wQ.resetWarningCache = wk;
                    return XL = function () {
                      function wH(wh, wg, wE, wU, wJ, wT) {
                        if (wT !== wD) {
                          var wy = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                          wy.name = "Invariant Violation";
                          throw wy;
                        }
                      }
                      function wc() {
                        return wH;
                      }
                      wH.isRequired = wH;
                      var wp = {
                        'array': wH,
                        'bigint': wH,
                        'bool': wH,
                        'func': wH,
                        'number': wH,
                        'object': wH,
                        'string': wH,
                        'symbol': wH,
                        'any': wH,
                        'arrayOf': wc,
                        'element': wH,
                        'elementType': wH,
                        'instanceOf': wc,
                        'node': wH,
                        'objectOf': wc,
                        'oneOf': wc,
                        'oneOfType': wc,
                        'shape': wc,
                        'exact': wc,
                        'checkPropTypes': wQ,
                        'resetWarningCache': wk
                      };
                      wp.PropTypes = wp;
                      return wp;
                    };
                  }()();
                }
                return XS;
              } catch (wD) {}
            }(), f, z, A);
          })(0x0, (wY, wx, wD, wk) => (() => {
            var wQ = {
              0x63: wh => {
                if (undefined === wY) {
                  var wg = Error("Cannot find module 'prop-types'");
                  wg.code = "MODULE_NOT_FOUND";
                  throw wg;
                }
                wh.exports = wY;
              },
              0x9c: wh => {
                wh.exports = wx;
              },
              0x6f: wh => {
                wh.exports = wD;
              },
              0x260: wh => {
                wh.exports = wk;
              }
            };
            var wH = {};
            function wc(wh) {
              var wg = wH[wh];
              if (undefined !== wg) {
                return wg.exports;
              }
              var wE = wH[wh] = {
                'exports': {}
              };
              wQ[wh](wE, wE.exports, wc);
              return wE.exports;
            }
            wc.n = wh => {
              var wg = wh && wh.__esModule ? () => wh["default"] : () => wh;
              wc.d(wg, {
                'a': wg
              });
              return wg;
            };
            wc.d = (wh, wg) => {
              for (var wE in wg) if (wc.o(wg, wE) && !wc.o(wh, wE)) {
                Object.defineProperty(wh, wE, {
                  'enumerable': true,
                  'get': wg[wE]
                });
              }
            };
            wc.o = (wh, wg) => Object.prototype.hasOwnProperty.call(wh, wg);
            wc.r = wh => {
              if ("undefined" != typeof Symbol && Symbol.toStringTag) {
                Object.defineProperty(wh, Symbol.toStringTag, {
                  'value': "Module"
                });
              }
              Object.defineProperty(wh, "__esModule", {
                'value': true
              });
            };
            var wp = {};
            (() => {
              wc.r(wp);
              wc.d(wp, {
                'default': () => Z9
              });
              var wh = wc(0x9c);
              var wg = wc.n(wh);
              var wE = wc(0x6f);
              var wU = wc.n(wE);
              var wJ = wc(0x260);
              var wT = wc.n(wJ);
              const wy = {
                'custom-scroll': "rcs-custom-scroll",
                'customScroll': "rcs-custom-scroll",
                'outer-container': "rcs-outer-container",
                'outerContainer': "rcs-outer-container",
                'positioning': "rcs-positioning",
                'custom-scrollbar': "rcs-custom-scrollbar",
                'customScrollbar': "rcs-custom-scrollbar",
                'inner-container': "rcs-inner-container",
                'innerContainer': "rcs-inner-container",
                'content-scrolled': "rcs-content-scrolled",
                'contentScrolled': "rcs-content-scrolled",
                'scroll-handle-dragged': "rcs-scroll-handle-dragged",
                'scrollHandleDragged': "rcs-scroll-handle-dragged",
                'custom-scrollbar-rtl': "rcs-custom-scrollbar-rtl",
                'customScrollbarRtl': "rcs-custom-scrollbar-rtl",
                'custom-scroll-handle': "rcs-custom-scroll-handle",
                'customScrollHandle': "rcs-custom-scroll-handle",
                'inner-handle': "rcs-inner-handle",
                'innerHandle': "rcs-inner-handle"
              };
              var wI;
              var wP;
              function wC(ZF) {
                wC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Za) {
                  return typeof Za;
                } : function (Za) {
                  return Za && "function" == typeof Symbol && Za.constructor === Symbol && Za !== Symbol.prototype ? "symbol" : typeof Za;
                };
                return wC(ZF);
              }
              function Z0(ZF, Za) {
                Z0 = Object.setPrototypeOf || function (ZG, Zw) {
                  ZG.__proto__ = Zw;
                  return ZG;
                };
                return Z0(ZF, Za);
              }
              function Z1(ZF) {
                if (undefined === ZF) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return ZF;
              }
              function Z2(ZF) {
                Z2 = Object.setPrototypeOf ? Object.getPrototypeOf : function (Za) {
                  return Za.__proto__ || Object.getPrototypeOf(Za);
                };
                return Z2(ZF);
              }
              function Z3(ZF, Za, ZG) {
                if (Za in ZF) {
                  Object.defineProperty(ZF, Za, {
                    'value': ZG,
                    'enumerable': true,
                    'configurable': true,
                    'writable': true
                  });
                } else {
                  ZF[Za] = ZG;
                }
                return ZF;
              }
              function Z4(ZF, Za) {
                if (!Za) {
                  Za = ZF.slice(0x0);
                }
                return Object.freeze(Object.defineProperties(ZF, {
                  'raw': {
                    'value': Object.freeze(Za)
                  }
                }));
              }
              var Z5 = function (ZF, Za, ZG) {
                return (Za = Za || 0x0 === Za ? Za : ZF) > (ZG = ZG || 0x0 === ZG ? ZG : ZF) ? ZF : ZF < Za ? Za : ZF > ZG ? ZG : ZF;
              };
              var Z7 = wT().div(wI || (wI = Z4(["\n  min-height: 0;\n  min-width: 0;\n\n  .cs-outer-container {\n    overflow: hidden;\n\n    .cs-positioning {\n      position: relative;\n    }\n\n    &:hover .cs-custom-scrollbar {\n      opacity: 1;\n      transition-duration: 0.2s;\n    }\n  }\n\n  .cs-inner-container {\n    overflow-x: hidden;\n    overflow-y: scroll;\n\n    -webkit-overflow-scrolling: touch;\n\n    &:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      height: 0;\n      background-image: linear-gradient(\n        to bottom,\n        rgba(0, 0, 0, 0.2) 0%,\n        rgba(0, 0, 0, 0.05) 60%,\n        rgba(0, 0, 0, 0) 100%\n      );\n      pointer-events: none;\n      transition: height 0.1s ease-in;\n      will-change: height;\n    }\n    &.cs-content-scrolled:after {\n      height: 5px;\n      transition: height 0.15s ease-out;\n    }\n  }\n\n  &.cs-scroll-handle-dragged .cs-inner-container {\n    user-select: none;\n  }\n\n  .cs-custom-scrollbar {\n    position: absolute;\n    height: 100%;\n    width: 6px;\n    right: ", ";\n    opacity: 0;\n    z-index: 1;\n    transition: opacity 0.4s ease-out;\n    padding: 6px 0;\n    box-sizing: border-box;\n    will-change: opacity;\n    pointer-events: none;\n\n    &.cs-custom-scrollbar-rtl {\n      right: auto;\n      left: ", ";\n    }\n  }\n\n  &.cs-scroll-handle-dragged .cs-custom-scrollbar {\n    opacity: 1;\n  }\n\n  .cs-custom-scroll-handle {\n    position: absolute;\n    width: 100%;\n    top: 0;\n  }\n\n  .cs-inner-handle {\n    height: calc(100% - 2 * ", ");\n    margin-top: ", ";\n    background-color: rgba(78, 183, 245, 0.7);\n    border-radius: 3px;\n  }\n"])), function (ZF) {
                return ZF.customScrollBarMargin;
              }, function (ZF) {
                return ZF.customScrollBarMargin;
              }, function (ZF) {
                return ZF.scrollMarginTop;
              }, function (ZF) {
                return ZF.scrollMarginTop;
              });
              var Z8 = wT()(Z7)(wP || (wP = Z4(["\n  &.cs-inner-handle {\n    ", ";\n  }\n"])), function (ZF) {
                return ZF.customStyle;
              });
              var Z9 = function (ZF) {
                !function (Zf, Zz) {
                  if ("function" != typeof Zz && null !== Zz) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  Zf.prototype = Object.create(Zz && Zz.prototype, {
                    'constructor': {
                      'value': Zf,
                      'writable': true,
                      'configurable': true
                    }
                  });
                  if (Zz) {
                    Z0(Zf, Zz);
                  }
                }(ZN, ZF);
                var Za;
                var Zw;
                Zw = function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct) {
                    return false;
                  }
                  if (Reflect.construct.sham) {
                    return false;
                  }
                  if ("function" == typeof Proxy) {
                    return true;
                  }
                  try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                    return true;
                  } catch (Zf) {
                    return false;
                  }
                }();
                var ZZ = function () {
                  var Zf;
                  var Zz = Z2(ZN);
                  if (Zw) {
                    var Zm = Z2(this).constructor;
                    Zf = Reflect.construct(Zz, arguments, Zm);
                  } else {
                    Zf = Zz.apply(this, arguments);
                  }
                  return function (Zu, Zs) {
                    return !Zs || "object" !== wC(Zs) && "function" != typeof Zs ? Z1(Zu) : Zs;
                  }(this, Zf);
                };
                function ZN(Zf) {
                  var Zz;
                  (function (Zm, Zu) {
                    if (!(Zm instanceof Zu)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  })(this, ZN);
                  0x0;
                  Z3(Z1(Zz = ZZ.call(this, Zf)), "innerContainerRef", wh.createRef());
                  0x0;
                  Z3(Z1(Zz), "customScrollbarRef", wh.createRef());
                  0x0;
                  Z3(Z1(Zz), "scrollHandleRef", wh.createRef());
                  0x0;
                  Z3(Z1(Zz), "contentWrapperRef", wh.createRef());
                  Z3(Z1(Zz), "adjustFreezePosition", function (Zm) {
                    if (Zz.contentWrapperRef.current) {
                      var Zu = Zz.getScrolledElement();
                      var Zs = Zz.contentWrapperRef.current;
                      if (Zz.props.freezePosition) {
                        Zs.scrollTop = Zz.state.scrollPos;
                      }
                      if (Zm.freezePosition) {
                        Zu.scrollTop = Zz.state.scrollPos;
                      }
                    }
                  });
                  Z3(Z1(Zz), "toggleScrollIfNeeded", function () {
                    var Zm = Zz.contentHeight - Zz.visibleHeight > 0x1;
                    if (Zz.hasScroll !== Zm) {
                      Zz.hasScroll = Zm;
                      Zz.forceUpdate();
                    }
                  });
                  Z3(Z1(Zz), "updateScrollPosition", function (Zm) {
                    var Zu = Zz.getScrolledElement();
                    var Zs = Z5(Zm, 0x0, Zz.contentHeight - Zz.visibleHeight);
                    Zu.scrollTop = Zs;
                    Zz.setState({
                      'scrollPos': Zs
                    });
                  });
                  Z3(Z1(Zz), "onClick", function (Zm) {
                    if (Zz.hasScroll && Zz.isMouseEventOnCustomScrollbar(Zm) && !Zz.isMouseEventOnScrollHandle(Zm)) {
                      var Zu = Zz.calculateNewScrollHandleTop(Zm);
                      var Zs = Zz.getScrollValueFromHandlePosition(Zu);
                      Zz.updateScrollPosition(Zs);
                    }
                  });
                  Z3(Z1(Zz), "isMouseEventOnCustomScrollbar", function (Zm) {
                    if (!Zz.customScrollbarRef.current) {
                      return false;
                    }
                    var Zu = wU().findDOMNode(Z1(Zz)).getBoundingClientRect();
                    var Zs = Zz.customScrollbarRef.current.getBoundingClientRect();
                    var Zj = Zz.props.rtl ? {
                      'left': Zu.left,
                      'right': Zs.right
                    } : {
                      'left': Zs.left,
                      'width': Zu.right
                    };
                    return Zm.clientX > Object.assign({}, {
                      'left': Zu.left,
                      'right': Zu.right,
                      'top': Zu.top,
                      'height': Zu.height
                    }, Zj).left && Zm.clientX < Object.assign({}, {
                      'left': Zu.left,
                      'right': Zu.right,
                      'top': Zu.top,
                      'height': Zu.height
                    }, Zj).right && Zm.clientY > Object.assign({}, {
                      'left': Zu.left,
                      'right': Zu.right,
                      'top': Zu.top,
                      'height': Zu.height
                    }, Zj).top && Zm.clientY < Object.assign({}, {
                      'left': Zu.left,
                      'right': Zu.right,
                      'top': Zu.top,
                      'height': Zu.height
                    }, Zj).top + Object.assign({}, {
                      'left': Zu.left,
                      'right': Zu.right,
                      'top': Zu.top,
                      'height': Zu.height
                    }, Zj).height;
                  });
                  Z3(Z1(Zz), "isMouseEventOnScrollHandle", function (Zm) {
                    return !!Zz.scrollHandleRef.current && function (Zu, Zs) {
                      return Zu.clientX > Zs.getBoundingClientRect().left && Zu.clientX < Zs.getBoundingClientRect().right && Zu.clientY > Zs.getBoundingClientRect().top && Zu.clientY < Zs.getBoundingClientRect().top + Zs.getBoundingClientRect().height;
                    }(Zm, wU().findDOMNode(Zz.scrollHandleRef.current));
                  });
                  Z3(Z1(Zz), "calculateNewScrollHandleTop", function (Zm) {
                    var Zu = wU().findDOMNode(Z1(Zz)).getBoundingClientRect().top + Z.pageYOffset;
                    var Zs = Zm.pageY - Zu;
                    var Zj = Zz.getScrollHandleStyle().top;
                    return Zs > Zj + Zz.scrollHandleHeight ? Zj + Math.min(Zz.scrollHandleHeight, Zz.visibleHeight - Zz.scrollHandleHeight) : Zj - Math.max(Zz.scrollHandleHeight, 0x0);
                  });
                  Z3(Z1(Zz), "getScrollValueFromHandlePosition", function (Zm) {
                    return Zm / Zz.scrollRatio;
                  });
                  Z3(Z1(Zz), "getScrollHandleStyle", function () {
                    var Zm = Zz.state.scrollPos * Zz.scrollRatio;
                    Zz.scrollHandleHeight = Zz.visibleHeight * Zz.scrollRatio;
                    return {
                      'height': Zz.scrollHandleHeight,
                      'top': Zm
                    };
                  });
                  Z3(Z1(Zz), "adjustCustomScrollPosToContentPos", function (Zm) {
                    Zz.setState({
                      'scrollPos': Zm
                    });
                  });
                  Z3(Z1(Zz), "onScroll", function (Zm) {
                    if (!Zz.props.freezePosition) {
                      Zz.hideScrollThumb();
                      Zz.adjustCustomScrollPosToContentPos(Zm.currentTarget.scrollTop);
                      if (Zz.props.onScroll) {
                        Zz.props.onScroll(Zm);
                      }
                    }
                  });
                  Z3(Z1(Zz), "getScrolledElement", function () {
                    return Zz.innerContainerRef.current;
                  });
                  Z3(Z1(Zz), "onMouseDown", function (Zm) {
                    if (Zz.hasScroll && Zz.isMouseEventOnScrollHandle(Zm)) {
                      Zz.startDragHandlePos = Zz.getScrollHandleStyle().top;
                      Zz.startDragMousePos = Zm.pageY;
                      Zz.setState({
                        'onDrag': true
                      });
                      document.addEventListener("mousemove", Zz.onHandleDrag, {
                        'passive': false
                      });
                      document.addEventListener("mouseup", Zz.onHandleDragEnd, {
                        'passive': false
                      });
                    }
                  });
                  Z3(Z1(Zz), "onTouchStart", function () {
                    Zz.setState({
                      'onDrag': true
                    });
                  });
                  Z3(Z1(Zz), "onHandleDrag", function (Zm) {
                    Zm.preventDefault();
                    var Zu = Zm.pageY - Zz.startDragMousePos;
                    var Zs = Z5(Zz.startDragHandlePos + Zu, 0x0, Zz.visibleHeight - Zz.scrollHandleHeight);
                    var Zj = Zz.getScrollValueFromHandlePosition(Zs);
                    Zz.updateScrollPosition(Zj);
                  });
                  Z3(Z1(Zz), "onHandleDragEnd", function (Zm) {
                    Zz.setState({
                      'onDrag': false
                    });
                    Zm.preventDefault();
                    document.removeEventListener("mousemove", Zz.onHandleDrag, {
                      'passive': false
                    });
                    document.removeEventListener("mouseup", Zz.onHandleDragEnd, {
                      'passive': false
                    });
                  });
                  Z3(Z1(Zz), "blockOuterScroll", function (Zm) {
                    if (!Zz.props.allowOuterScroll) {
                      var Zu = Zm.currentTarget;
                      var Zs = Zm.currentTarget.scrollHeight - Zm.currentTarget.offsetHeight;
                      var Zj = Zm.deltaY % 0x3 ? Zm.deltaY : 0xa * Zm.deltaY;
                      if (Zu.scrollTop + Zj <= 0x0) {
                        Zu.scrollTop = 0x0;
                        Zm.preventDefault();
                      } else if (Zu.scrollTop + Zj >= Zs) {
                        Zu.scrollTop = Zs;
                        Zm.preventDefault();
                      }
                      Zm.stopPropagation();
                    }
                  });
                  Z3(Z1(Zz), "getInnerContainerClasses", function () {
                    return Zz.state.scrollPos && Zz.props.addScrolledClass ? "cs-inner-container cs-content-scrolled" : "cs-inner-container";
                  });
                  Z3(Z1(Zz), "getScrollStyles", function () {
                    var Zm = Zz.scrollbarYWidth || 0x14;
                    var Zu = Zz.props.rtl ? "marginLeft" : "marginRight";
                    var Zs = {
                      'height': Zz.props.heightRelativeToParent || Zz.props.flex ? "100%" : ''
                    };
                    Zs[Zu] = -0x1 * Zm;
                    var Zj = {
                      'height': Zz.props.heightRelativeToParent || Zz.props.flex ? "100%" : '',
                      'overflowY': Zz.props.freezePosition ? "hidden" : "visible"
                    };
                    Zj[Zu] = Zz.scrollbarYWidth ? 0x0 : Zm;
                    return {
                      'innerContainer': Zs,
                      'contentWrapper': Zj
                    };
                  });
                  Z3(Z1(Zz), "getOuterContainerStyle", function () {
                    return {
                      'height': Zz.props.heightRelativeToParent || Zz.props.flex ? "100%" : ''
                    };
                  });
                  Z3(Z1(Zz), "getRootStyles", function () {
                    var Zm = {};
                    if (Zz.props.heightRelativeToParent) {
                      Zm.height = Zz.props.heightRelativeToParent;
                    } else if (Zz.props.flex) {
                      Zm.flex = Zz.props.flex;
                    }
                    return Zm;
                  });
                  Z3(Z1(Zz), "enforceMinHandleHeight", function (Zm) {
                    var Zu = Zz.props.minScrollHandleHeight;
                    if (Zm.height >= Zu) {
                      return Zm;
                    }
                    var Zs = (Zu - Zm.height) * (Zz.state.scrollPos / (Zz.contentHeight - Zz.visibleHeight));
                    return {
                      'height': Zu,
                      'top': Zm.top - Zs
                    };
                  });
                  Zz.scrollbarYWidth = 0x0;
                  Zz.state = {
                    'scrollPos': 0x0,
                    'onDrag': false
                  };
                  Zz.hideScrollThumb = function () {
                    var Zm;
                    function Zu() {
                      clearTimeout(Zm);
                    }
                    function Zs() {
                      Zu();
                      Zm = setTimeout(function () {
                        Zz.setState({
                          'onDrag': false
                        });
                      }, 0x1f4);
                    }
                    Zs.cancel = Zu;
                    return Zs;
                  }();
                  return Zz;
                }
                if (Za = [{
                  'key': "componentDidMount",
                  'value': function () {
                    if (undefined !== this.props.scrollTo) {
                      this.updateScrollPosition(this.props.scrollTo);
                    } else {
                      this.forceUpdate();
                    }
                    if (this.innerContainerRef.current) {
                      this.innerContainerRef.current.addEventListener("wheel", this.blockOuterScroll, {
                        'passive': false
                      });
                    }
                  }
                }, {
                  'key': "componentDidUpdate",
                  'value': function (Zf, Zz) {
                    var Zm = this.contentHeight;
                    var Zu = this.visibleHeight;
                    var Zs = this.getScrolledElement();
                    var Zj = Zz.scrollPos >= Zm - Zu;
                    this.contentHeight = Zs.scrollHeight;
                    this.scrollbarYWidth = Zs.offsetWidth - Zs.clientWidth;
                    this.visibleHeight = Zs.clientHeight;
                    this.scrollRatio = this.contentHeight ? this.visibleHeight / this.contentHeight : 0x1;
                    this.toggleScrollIfNeeded();
                    var ZO = this.state === Zz;
                    if (this.props.freezePosition || Zf.freezePosition) {
                      this.adjustFreezePosition(Zf);
                    }
                    if (undefined !== this.props.scrollTo && this.props.scrollTo !== Zf.scrollTo) {
                      this.updateScrollPosition(this.props.scrollTo);
                    } else if (this.props.keepAtBottom && ZO && Zj) {
                      this.updateScrollPosition(this.contentHeight - this.visibleHeight);
                    }
                  }
                }, {
                  'key': "componentWillUnmount",
                  'value': function () {
                    this.hideScrollThumb.cancel();
                    document.removeEventListener("mousemove", this.onHandleDrag, {
                      'passive': false
                    });
                    document.removeEventListener("mouseup", this.onHandleDragEnd, {
                      'passive': false
                    });
                    if (this.innerContainerRef.current) {
                      this.innerContainerRef.current.removeEventListener("wheel", this.blockOuterScroll);
                    }
                  }
                }, {
                  'key': "render",
                  'value': function () {
                    var Zf = this.getScrollStyles();
                    var Zz = this.getRootStyles();
                    var Zm = this.enforceMinHandleHeight(this.getScrollHandleStyle());
                    return wg().createElement(Z7, {
                      'customScrollBarMargin': "3px",
                      'scrollMarginTop': "6px",
                      'className': ''.concat(this.state.onDrag ? "cs-scroll-handle-dragged" : ''),
                      'style': Zz
                    }, wg().createElement("div", {
                      'className': "cs-outer-container",
                      'style': this.getOuterContainerStyle(),
                      'onMouseDown': this.onMouseDown,
                      'onTouchStart': this.onTouchStart,
                      'onClick': this.onClick
                    }, this.hasScroll ? wg().createElement("div", {
                      'className': "cs-positioning"
                    }, wg().createElement("div", {
                      'ref': this.customScrollbarRef,
                      'className': "cs-custom-scrollbar ".concat(this.props.rtl ? "cs-custom-scrollbar-rtl" : ''),
                      'key': "scrollbar"
                    }, wg().createElement("div", {
                      'ref': this.scrollHandleRef,
                      'className': "cs-custom-scroll-handle",
                      'style': Zm
                    }, wg().createElement(Z8, {
                      'customStyle': this.props.handleClass,
                      'className': "cs-inner-handle"
                    })))) : null, wg().createElement("div", {
                      'ref': this.innerContainerRef,
                      'className': this.getInnerContainerClasses(),
                      'style': Zf.innerContainer,
                      'onScroll': this.onScroll
                    }, wg().createElement("div", {
                      'className': wy.contentWrapper,
                      'ref': this.contentWrapperRef,
                      'style': Zf.contentWrapper
                    }, this.props.children))));
                  }
                }]) {
                  (function (Zf, Zz) {
                    for (var Zm = 0x0; Zm < Zz.length; Zm++) {
                      var Zu = Zz[Zm];
                      Zu.enumerable = Zu.enumerable || false;
                      Zu.configurable = true;
                      if ("value" in Zu) {
                        Zu.writable = true;
                      }
                      Object.defineProperty(Zf, Zu.key, Zu);
                    }
                  })(ZN.prototype, Za);
                }
                return ZN;
              }(wh.Component);
              try {
                var Zv = wc(0x63);
                Z9.propTypes = {
                  'children': Zv.any,
                  'allowOuterScroll': Zv.bool,
                  'heightRelativeToParent': Zv.string,
                  'onScroll': Zv.func,
                  'addScrolledClass': Zv.bool,
                  'freezePosition': Zv.bool,
                  'handleClass': Zv.string,
                  'minScrollHandleHeight': Zv.number,
                  'flex': Zv.string,
                  'rtl': Zv.bool,
                  'scrollTo': Zv.number,
                  'keepAtBottom': Zv.bool
                };
              } catch (ZF) {}
              Z9.defaultProps = {
                'handleClass': '',
                'minScrollHandleHeight': 0x26
              };
            })();
            return wp;
          })());
          var XB = XK;
          var XY;
          var Xx;
          var XD;
          var Xk;
          var XQ;
          var XH;
          var Xc;
          var Xp;
          var Xh;
          var Xg;
          var XE;
          var XU;
          var XJ;
          var XT;
          var Xy;
          var XI;
          var XP;
          var XC;
          var F0;
          var F1;
          var F2;
          var F3;
          var F4;
          var F5;
          var F6;
          var F7;
          var F8;
          var F9;
          var Fv;
          var FX;
          var FF;
          var Fa;
          var FG;
          var Fw;
          var FZ;
          var FN;
          var Ff;
          var Fz;
          var Fm;
          var Fu;
          var Fs;
          var Fj;
          var FO;
          var Fl;
          var FA;
          var FL;
          var FM = A.div(XY || (XY = v5(["\n    width: 100%;\n    height: 100%;\n"], ["\n    width: 100%;\n    height: 100%;\n"])));
          var FR = A.div(Xx || (Xx = v5(["\n    position: relative;\n    z-index: 1;\n"], ["\n    position: relative;\n    z-index: 1;\n"])));
          var Fq = A.h2(XD || (XD = v5(["\n    text-align: center;\n    background-color: rgba(40,40,52,1);\n    margin: auto;\n    padding: ", ";\n    color: ", ";\n    font-weight: normal;\n    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.8);\n    font-size: ", "px;\n"], ["\n    text-align: center;\n    background-color: rgba(40,40,52,1);\n    margin: auto;\n    padding: ", ";\n    color: ", ";\n    font-weight: normal;\n    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.8);\n    font-size: ", "px;\n"])), function (wY) {
            return "land" === wY.orientation ? "26px 0px ".concat("land" === shell.environment.getOrientationMode() ? 18 : 0x18, "px 0px") : ''.concat(shell.environment.hasNotch() ? 54 : shell.environment.isIOSStandalone() ? 39 : 0x18, "px 0px 24px 0px");
          }, function (wY) {
            return wY.themeColor || "rgb(255,255,255,1)";
          }, "land" === shell.environment.getOrientationMode() ? 13.5 : 0x12);
          var FK = A.div(Xk || (Xk = v5(["\n    display: flex;\n    flex-direction: column;\n    height: 87%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    height: 87%;\n"])));
          var FS = A.div(XQ || (XQ = v5(["\n    margin: auto;\n"], ["\n    margin: auto;\n"])));
          var Fd = A.div(XH || (XH = v5(["\n    font-size: 14px;\n    opacity: 0.2;\n    padding: 0px ", "px;\n    line-height: ", "px;\n"], ["\n    font-size: 14px;\n    opacity: 0.2;\n    padding: 0px ", "px;\n    line-height: ", "px;\n"])), "land" === shell.environment.getOrientationMode() ? 18 : 0x18, "land" === shell.environment.getOrientationMode() ? 15 : 0x14);
          var FB = A.button(Xc || (Xc = v5(["\n    color: ", ";\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n    width: 30%;\n    margin-top: 14px;\n    background-color: rgba(49, 49, 58, 1);\n    border: 1px solid rgba(0, 0, 0, 0.3);\n"], ["\n    color: ", ";\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n    width: 30%;\n    margin-top: 14px;\n    background-color: rgba(49, 49, 58, 1);\n    border: 1px solid rgba(0, 0, 0, 0.3);\n"])), function (wY) {
            return wY.themeColor || "rgb(255,255,255,1)";
          }, "land" === shell.environment.getOrientationMode() ? 6 : 0x8);
          var FV = A.div(Xp || (Xp = v5(["\n    width: 95%;\n    padding: ", "px;\n    font-size: 14px;\n"], ["\n    width: 95%;\n    padding: ", "px;\n    font-size: 14px;\n"])), "land" === shell.environment.getOrientationMode() ? 6.75 : 0x9);
          var Fo = A.div(Xh || (Xh = v5(["\n    box-shadow:\n        0 3px 5px 0 rgba(0,0,0,0.3), 0 5px 5px 0 rgba(0,0,0,0.15), inset 0 1px 0 0 rgba(255,255,255,0.10);\n    border-radius: 4px;\n    background-color: rgba(48,48,60,0.96);\n    padding: ", "px ", "px;\n"], ["\n    box-shadow:\n        0 3px 5px 0 rgba(0,0,0,0.3), 0 5px 5px 0 rgba(0,0,0,0.15), inset 0 1px 0 0 rgba(255,255,255,0.10);\n    border-radius: 4px;\n    background-color: rgba(48,48,60,0.96);\n    padding: ", "px ", "px;\n"])), "land" === shell.environment.getOrientationMode() ? 11.25 : 0xf, "land" === shell.environment.getOrientationMode() ? 15 : 0x14);
          var Fb = A.section(Xg || (Xg = v5(["\n    width: 100%;\n    display: inline-block;\n    padding-bottom: ", "px;\n"], ["\n    width: 100%;\n    display: inline-block;\n    padding-bottom: ", "px;\n"])), "land" === shell.environment.getOrientationMode() ? 11.25 : 0xf);
          var FW = A.section(XE || (XE = v5(["\n    width: 100%;\n    display: inline-block;\n    padding-bottom: ", "px;\n    font-size: 12px;\n"], ["\n    width: 100%;\n    display: inline-block;\n    padding-bottom: ", "px;\n    font-size: 12px;\n"])), "land" === shell.environment.getOrientationMode() ? 11.25 : 0xf);
          var FY = A.div(XU || (XU = v5(["\n    float: ", ";\n    text-align: ", ";\n    width: 50%;\n    position: relative;\n"], ["\n    float: ", ";\n    text-align: ", ";\n    width: 50%;\n    position: relative;\n"])), vM.isRTL ? "right" : "left", vM.isRTL ? "right" : "left");
          var Fx = A.div(XJ || (XJ = v5(["\n    float: ", ";\n    text-align: ", ";\n    width: 50%;\n"], ["\n    float: ", ";\n    text-align: ", ";\n    width: 50%;\n"])), vM.isRTL ? "left" : "right", vM.isRTL ? "left" : "right");
          var FD = A.div(XT || (XT = v5(["\n    float: left;\n    text-align: center;\n    width: 50%;\n"], ["\n    float: left;\n    text-align: center;\n    width: 50%;\n"])));
          var Fk = A.div(Xy || (Xy = v5(["\n    float: right;\n    text-align: center;\n    width: 50%;\n"], ["\n    float: right;\n    text-align: center;\n    width: 50%;\n"])));
          var FQ = A.div(XI || (XI = v5(["\n    padding-top: ", "px;\n    font-size: 11px;\n    opacity: 0.5;\n"], ["\n    padding-top: ", "px;\n    font-size: 11px;\n    opacity: 0.5;\n"])), "land" === shell.environment.getOrientationMode() ? 4.5 : 0x6);
          var FH = A.div(XP || (XP = v5(["\n    padding-bottom: ", "px;\n    color: ", ";\n"], ["\n    padding-bottom: ", "px;\n    color: ", ";\n"])), "land" === shell.environment.getOrientationMode() ? 4.5 : 0x6, function (wY) {
            return wY.themeColor || "rgb(255,255,255,1)";
          });
          var Fc = A.div(XC || (XC = v5(["\n    padding-top: ", "px;\n"], ["\n    padding-top: ", "px;\n"])), "land" === shell.environment.getOrientationMode() ? 3 : 0x4);
          var Fp = A.button(F0 || (F0 = v5(["\n    width: 45%;\n    margin: auto 2.5%;\n    font-size: 12px;\n    padding: ", "px 0px;\n    opacity: 0.5;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n\n    &:enabled {\n        border: 1px solid rgba(0, 0, 0, 0.3);\n        background-color: rgba(48, 48, 60, 1);\n        color: white;\n    }\n\n    &:disabled {\n        border: 1px solid rgba(0, 0, 0, 0.3);\n        background-color: rgba(48, 48, 60, 1);\n        pointer-events: none;\n    }\n"], ["\n    width: 45%;\n    margin: auto 2.5%;\n    font-size: 12px;\n    padding: ", "px 0px;\n    opacity: 0.5;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n\n    &:enabled {\n        border: 1px solid rgba(0, 0, 0, 0.3);\n        background-color: rgba(48, 48, 60, 1);\n        color: white;\n    }\n\n    &:disabled {\n        border: 1px solid rgba(0, 0, 0, 0.3);\n        background-color: rgba(48, 48, 60, 1);\n        pointer-events: none;\n    }\n"])), "land" === shell.environment.getOrientationMode() ? 6 : 0x8);
          var Fh = A.button(F1 || (F1 = v5(["\n    width: 45%;\n    margin: auto 2.5%;\n    background-color: ", ";\n    font-size: 12px;\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n\n    &:enabled {\n        border: none;\n        color: white;\n    }\n\n    &:disabled {\n        border: none;\n        pointer-events: none;\n    }\n"], ["\n    width: 45%;\n    margin: auto 2.5%;\n    background-color: ", ";\n    font-size: 12px;\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n\n    &:enabled {\n        border: none;\n        color: white;\n    }\n\n    &:disabled {\n        border: none;\n        pointer-events: none;\n    }\n"])), function (wY) {
            return wY.themeColor || "rgb(255,255,255,1)";
          }, "land" === shell.environment.getOrientationMode() ? 6 : 0x8);
          var Fg = A.button(F2 || (F2 = v5(["\n    width: 45%;\n    margin: auto 2.5%;\n    background-color: ", ";\n    font-size: 12px;\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n\n    &:enabled {\n        border: none;\n        color: white;\n    }\n\n    &:disabled {\n        border: none;\n        pointer-events: none;\n    }\n"], ["\n    width: 45%;\n    margin: auto 2.5%;\n    background-color: ", ";\n    font-size: 12px;\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n\n    &:enabled {\n        border: none;\n        color: white;\n    }\n\n    &:disabled {\n        border: none;\n        pointer-events: none;\n    }\n"])), function (wY) {
            return wY.themeColor || "rgb(255,255,255,1)";
          }, "land" === shell.environment.getOrientationMode() ? 6 : 0x8);
          var FE = A.div(F3 || (F3 = v5(["\n    position: absolute;\n    ", ": -16px;\n    transform: scale(", ") ", ";\n    top: ", "\n"], ["\n    position: absolute;\n    ", ": -16px;\n    transform: scale(", ") ", ";\n    top: ", "\n"])), vM.isRTL ? "right" : "left", "land" === shell.environment.getOrientationMode() ? 0.44999999999999996 : 0.6, vM.isRTL ? "scaleX(-1)" : '', function (wY) {
            return "land" === wY.orientation ? "-9px" : "-11px";
          });
          var FU = A.div(F4 || (F4 = v5(["\n    float: ", ";\n    border-radius: ", ";\n    border-width: 0px 0px 0px 4px;\n    border-style: solid;\n    color: ", ";\n"], ["\n    float: ", ";\n    border-radius: ", ";\n    border-width: 0px 0px 0px 4px;\n    border-style: solid;\n    color: ", ";\n"])), vM.isRTL ? "right" : "left", vM.isRTL ? "0px 4px 4px 0px" : "4px 0px 0px 4px", function (wY) {
            return wY.themeColor || "rgb(255,255,255,1)";
          });
          var FJ = A.div(F5 || (F5 = v5(["\n    padding-top: ", "px;\n    padding-bottom: ", "px;\n    font-size: 14px;\n"], ["\n    padding-top: ", "px;\n    padding-bottom: ", "px;\n    font-size: 14px;\n"])), "land" === shell.environment.getOrientationMode() ? 6.75 : 0x9, "land" === shell.environment.getOrientationMode() ? 13.5 : 0x12);
          var FT = A.div(F6 || (F6 = v5(["\n    position: relative;\n    width: 45%;\n    display: inline-block;\n    margin: auto 2.5%;\n"], ["\n    position: relative;\n    width: 45%;\n    display: inline-block;\n    margin: auto 2.5%;\n"])));
          var Fy = A.button(F7 || (F7 = v5(["\n    width: 100%;\n    font-size: 12px;\n    padding: ", "px 0px;\n    opacity: 0.5;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n\n    &:enabled {\n        border: none;\n        color: white;\n    }\n\n    &:disabled {\n        border: none;\n        pointer-events: none;\n    }\n"], ["\n    width: 100%;\n    font-size: 12px;\n    padding: ", "px 0px;\n    opacity: 0.5;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n\n    &:enabled {\n        border: none;\n        color: white;\n    }\n\n    &:disabled {\n        border: none;\n        pointer-events: none;\n    }\n"])), "land" === shell.environment.getOrientationMode() ? 6 : 0x8);
          var FI = A.div(F8 || (F8 = v5(["\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    position: absolute;\n    bottom: ", ";\n    right: -9px;\n    background: ", ";\n    transform: scale(", ");\n"], ["\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    position: absolute;\n    bottom: ", ";\n    right: -9px;\n    background: ", ";\n    transform: scale(", ");\n"])), function (wY) {
            return "land" === wY.orientation ? "14px" : "22px";
          }, function (wY) {
            return wY.themeColor || "rgb(255,255,255,1)";
          }, "land" === shell.environment.getOrientationMode() ? 0.75 : 0x1);
          var FP = A.div(F9 || (F9 = v5(["\n    position: absolute;\n    bottom: ", ";\n    right: -14px;\n    cursor: pointer;\n    transform: scale(", ");\n"], ["\n    position: absolute;\n    bottom: ", ";\n    right: -14px;\n    cursor: pointer;\n    transform: scale(", ");\n"])), function (wY) {
            return "land" === wY.orientation ? "9px" : "17px";
          }, "land" === shell.environment.getOrientationMode() ? 0.5625 : 0.75);
          var FC = A.section(Fv || (Fv = v5(["\n    padding-", ": 10px;\n    padding-bottom: ", "px;\n    text-align: ", ";\n    font-size: 14px;\n"], ["\n    padding-", ": 10px;\n    padding-bottom: ", "px;\n    text-align: ", ";\n    font-size: 14px;\n"])), vM.isRTL ? "right" : "left", "land" === shell.environment.getOrientationMode() ? 11.25 : 0xf, vM.isRTL ? "right" : "left");
          var a0 = A.div(FX || (FX = v5(["\n    padding-top: ", "px;\n    display: flex;\n    font-size: 12px;\n"], ["\n    padding-top: ", "px;\n    display: flex;\n    font-size: 12px;\n"])), "land" === shell.environment.getOrientationMode() ? 22.5 : 0x1e);
          var a1 = A.section(FF || (FF = v5(["\n    direction: ltr;\n"], ["\n    direction: ltr;\n"])));
          var a2 = A.div(Fa || (Fa = v5(["\n    word-wrap: break-word;\n    transform: scale(", ");\n    transform-origin: left;\n    width: ", "%;\n    height: ", "%;\n"], ["\n    word-wrap: break-word;\n    transform: scale(", ");\n    transform-origin: left;\n    width: ", "%;\n    height: ", "%;\n"])), "land" === shell.environment.getOrientationMode() ? 0.75 : 0x1, "land" === shell.environment.getOrientationMode() ? 133.33333333333334 : 0x64, "land" === shell.environment.getOrientationMode() ? 133.33333333333334 : 0x64);
          var a3 = A(a2)(FG || (FG = v5(["\n    font-size: 11px;\n    line-height: 14px;   \n    opacity: 0.5;\n"], ["\n    font-size: 11px;\n    line-height: 14px;   \n    opacity: 0.5;\n"])));
          var a4 = A.div(Fw || (Fw = v5(["\n    width: ", "px;\n    height: ", "px;\n    border-radius: 50%;\n    background-color: rgba(33,33,41,1);\n    display: inline-block;\n    position: relative;\n"], ["\n    width: ", "px;\n    height: ", "px;\n    border-radius: 50%;\n    background-color: rgba(33,33,41,1);\n    display: inline-block;\n    position: relative;\n"])), "land" === shell.environment.getOrientationMode() ? 9.75 : 0xd, "land" === shell.environment.getOrientationMode() ? 9.75 : 0xd);
          var a5 = A.div(FZ || (FZ = v5(["\n    top: ", ";\n    ", ": ", ";\n    position: absolute;\n    transform: scale(", ");\n"], ["\n    top: ", ";\n    ", ": ", ";\n    position: absolute;\n    transform: scale(", ");\n"])), function (wY) {
            return "land" === wY.orientation ? "-15px" : "-13px";
          }, vM.isRTL ? "right" : "left", function (wY) {
            return "land" === wY.orientation ? "2px" : "10px";
          }, "land" === shell.environment.getOrientationMode() ? 0.375 : 0.5);
          var a6 = A(a5)(FN || (FN = v5(["\n    opacity: 0.5;\n"], ["\n    opacity: 0.5;\n"])));
          var a7 = A.label(Ff || (Ff = v5(["\n    position: absolute;\n    ", ": ", ";\n    top:  ", ";\n    transform: scale(", ");\n    transform-origin: ", ";\n    width: ", "%;\n    height: 140%;\n"], ["\n    position: absolute;\n    ", ": ", ";\n    top:  ", ";\n    transform: scale(", ");\n    transform-origin: ", ";\n    width: ", "%;\n    height: 140%;\n"])), vM.isRTL ? "right" : "left", function (wY) {
            return "land" === wY.orientation ? "35px" : "47px";
          }, function (wY) {
            return "land" === wY.orientation ? "-2px" : "0px";
          }, "land" === shell.environment.getOrientationMode() ? 0.75 : 0x1, vM.isRTL ? "right" : "left", "land" === shell.environment.getOrientationMode() ? 85.33333333333333 : 0x40);
          var a8 = A(a7)(Fz || (Fz = v5(["\n    opacity: 0.5;\n"], ["\n    opacity: 0.5;\n"])));
          var a9 = A.span(Fm || (Fm = v5(["\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    position: absolute;\n    ", ": ", ";\n    top: ", ";\n    display: none;\n"], ["\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    position: absolute;\n    ", ": ", ";\n    top: ", ";\n    display: none;\n"])), function (wY) {
            return "land" === wY.orientation ? "4px" : "5px";
          }, function (wY) {
            return "land" === wY.orientation ? "4px" : "5px";
          }, vM.isRTL ? "right" : "left", function (wY) {
            return "land" === wY.orientation ? "3px" : "4px";
          }, function (wY) {
            return "land" === wY.orientation ? "3px" : "4px";
          });
          var av = A.div(Fu || (Fu = v5(["\n    cursor: pointer;\n    position: absolute;\n    right: 10px;\n    top: ", ";\n    transform: scale(", ");\n    opacity: 0.4;\n"], ["\n    cursor: pointer;\n    position: absolute;\n    right: 10px;\n    top: ", ";\n    transform: scale(", ");\n    opacity: 0.4;\n"])), function (wY) {
            return "land" === wY.orientation ? "13px" : ''.concat(shell.environment.hasNotch() ? 43 : shell.environment.isIOSStandalone() ? 28 : 0xd, 'px');
          }, "land" === shell.environment.getOrientationMode() ? 0.5625 : 0.75);
          var aX = A.div(Fs || (Fs = v5(["\n    height: 100%;\n    width: ", ";\n    position: relative;\n"], ["\n    height: 100%;\n    width: ", ";\n    position: relative;\n"])), function (wY) {
            return "land" === wY.orientation ? "269px" : "360px";
          });
          var aF = A.div(Fj || (Fj = v5(["\n    max-height: ", "px;\n"], ["\n    max-height: ", "px;\n"])), function (wY) {
            return "land" === wY.orientation ? wY.currHeight - 0x3b : wY.currHeight - (shell.environment.hasNotch() ? 98 : shell.environment.isIOSStandalone() ? 83 : 0x44);
          });
          var aa = A(a2)(FO || (FO = v5(["\n    opacity: 0.5;\n"], ["\n    opacity: 0.5;\n"])));
          var aG = v7.formatCurrency;
          var aw = A.hr(Fl || (Fl = v5(["\n    border-style: solid;\n    border-width: 0.5px;\n    color: black;\n    opacity: 0.5;\n"], ["\n    border-style: solid;\n    border-width: 0.5px;\n    color: black;\n    opacity: 0.5;\n"])));
          var aZ = A.div(FA || (FA = v5(["\n    flex: 1 1 30px;\n    position: relative;\n    height: 10px;\n"], ["\n    flex: 1 1 30px;\n    position: relative;\n    height: 10px;\n"])));
          var aN = A.input(FL || (FL = v5(["\n    opacity: 0;\n    margin: 0px;\n"], ["\n    opacity: 0;\n    margin: 0px;\n"])));
          var af = shell.I18n;
          var az = function (wY) {
            function wx(wD) {
              var wk = wY.call(this, wD) || this;
              wk.mn = [];
              wk.gn = false;
              wk.bn = 0x1;
              wk.vn = [];
              wk.xn = false;
              wk.wn = false;
              wk.Cn = function (wQ, wH) {
                document.getElementById("selectWalletBtn ".concat(wH.toString())).blur();
                wD.onSelectWalletClick(wQ, wH);
              };
              wk.yn = function (wQ, wH) {
                var wc = document.getElementsByClassName("btnStyle");
                var wp = 0x0;
                for (var wh = wc.length; wp < wh; wp++) {
                  wc[wp].blur();
                }
                wD.onDiscardOfferClick(wQ, wH);
              };
              wk.state = {
                'scrollFreeze': false
              };
              return wk;
            }
            v0(wx, wY);
            wx.prototype.componentDidMount = function () {
              var wD = vM.context.event;
              wD.on("Shell.Scaled", this.kn, this);
              wD.emit("Game.BonusWalletListOpened");
              this.Bn();
              this.Wn();
              this.Sn();
              document.addEventListener("keydown", this.Gn);
            };
            wx.prototype.componentDidUpdate = function () {
              this.Bn();
              this.Wn();
              this.Sn();
            };
            wx.prototype.componentWillUnmount = function () {
              vM.context.event.off("Shell.Scaled", this.kn, this);
              document.removeEventListener("keydown", this.Gn);
            };
            wx.prototype.shouldComponentUpdate = function (wD) {
              return this.props.show === wD.show && (this.xn = this.props.data === wD.data, true);
            };
            wx.prototype.render = function () {
              return f.createElement(FM, {
                'id': "bwfgContainer",
                'className': "wallet"
              }, this.V(), this.H());
            };
            wx.prototype.Gn = function (wD) {
              if (!(" " !== wD.key && "Spacebar" !== wD.key)) {
                wD.preventDefault();
              }
            };
            wx.prototype.kn = function (wD) {
              var wk = wD.payload;
              var wQ = document.getElementById("scrollView");
              var wH = parseFloat(Z.getComputedStyle(document.getElementById("headerWrapper")).height);
              if (wQ) {
                wQ.style.maxHeight = ''.concat(wk.height - wH, 'px');
              }
            };
            wx.prototype.Bn = function () {
              var wD = this.mn;
              var wk = 0x0;
              for (var wQ = wD.length; wk < wQ; wk++) {
                var wH = wD[wk].key;
                if (wH && vd.transactionInfo.wk === wH) {
                  var wc = document.getElementById("currWalletSideBar ".concat(wk.toString()));
                  var wp = document.getElementById("bwfgView ".concat(wk.toString()));
                  wc.style.height = ''.concat(wp.clientHeight.toString(), 'px');
                }
              }
            };
            wx.prototype.Wn = function () {
              var wD = vd.gameThemeColor;
              this.vn.forEach(function (wk) {
                document.getElementById("selectWalletBtn ".concat(wk.toString())).style.backgroundColor = wD;
              });
            };
            wx.prototype.Sn = function () {
              var wD = vd.gameThemeColor;
              var wk = 0x0;
              for (var wQ = this.mn.length; wk < wQ; wk++) {
                var wH = document.getElementById("custom cash radio button ".concat(wk.toString()));
                var wc = document.getElementById("custom bonus radio button ".concat(wk.toString()));
                var wp = document.getElementById("cash ".concat(wk.toString()));
                var wh = document.getElementById("bonus ".concat(wk.toString()));
                var wg = document.getElementById("cash check mark ".concat(wk.toString()));
                var wE = document.getElementById("bonus check mark ".concat(wk.toString()));
                wg.style.backgroundColor = wD;
                wg.style.display = wp.defaultChecked ? "block" : "none";
                if (wp.disabled) {
                  wH.style.opacity = "0.5";
                  wg.style.opacity = "0.5";
                }
                wE.style.backgroundColor = wD;
                wE.style.display = wh.defaultChecked ? "block" : "none";
                if (wh.disabled) {
                  wc.style.opacity = "0.5";
                  wE.style.opacity = "0.5";
                }
              }
            };
            wx.prototype.V = function () {
              var wD = vd.status;
              if (!this.props.error && this.props.data && this.props.data.dt.r) {
                var wk = 0x0;
                for (var wQ = this.props.data.dt.r.length; wk < wQ; wk++) {
                  if (0x6 === this.props.data.dt.r[wk].s && vd.transactionInfo.wk === this.props.data.dt.r[wk].k) {
                    this.gn = true;
                    break;
                  }
                }
              }
              return f.createElement(FR, {
                'id': "headerWrapper"
              }, f.createElement(Fq, {
                'id': "bwfgHeader",
                'orientation': shell.environment.getOrientationMode(),
                'themeColor': vd.gameThemeColor
              }, af.t("BonusWallet.BonusWallet")), f.createElement(av, {
                'className': "wallet-plugin-sprite wallet-plugin-ic_close",
                'onClick': 0x4 === wD || 0x3 === wD || 0x2 === wD || this.gn ? this.props.onBackCashWalletClick : this.props.onCloseButtonClick,
                'orientation': shell.environment.getOrientationMode()
              }));
            };
            wx.prototype.H = function () {
              var wD = this;
              if (this.props.error) {
                this.bn = 0x1;
                this.mn = [];
                return f.createElement(FK, null, f.createElement(FS, null, f.createElement(Fd, null, f.createElement(a2, null, this.props.error.message)), this.props.error.shouldRetry && f.createElement(FB, {
                  'onClick': this.props.onRetryClick,
                  'themeColor': vd.gameThemeColor
                }, af.t("General.DialogRetry"))));
              }
              if (this.props.data) {
                this.gn = false;
                this.vn = [];
                var wk = parseFloat(document.getElementById("wallet-container").style.height);
                var wQ = this.props.data.dt;
                var wH = JSON.parse(JSON.stringify(wQ.r));
                var wc = wQ.tp;
                this.On = this.bn > 0x1 ? this.On : wc;
                this.mn = this.bn > 0x1 ? this.mn : [];
                if (wH && wH.length > 0x0) {
                  if (!this.xn) {
                    var wp = 0x0;
                    for (var wh = wH.length; wp < wh; wp++) {
                      var wg = wH[wp];
                      if (wg.k === vd.transactionInfo.wk) {
                        this.mn.push(new Xj(wg));
                        wH.splice(wp, 0x1);
                        break;
                      }
                    }
                    if (wH.length > 0x0) {
                      wH.forEach(function (wU) {
                        wD.mn.push(new Xj(wU));
                      });
                    }
                  }
                  var wE = this.mn.map(function (wU, wJ) {
                    var wT = wU.bonusWalletName;
                    var wy = wU.bonusID;
                    var wI = wU.expiredDate;
                    var wP = wU.expiredTime;
                    var wC = wU.initialBonusRatioAmount;
                    var Z0 = wU.key;
                    var Z1 = wU.status;
                    var Z2 = aG(wC);
                    var Z3 = wD.Z(wU, wJ);
                    return f.createElement(FV, {
                      'key': wJ
                    }, Z0 && vd.transactionInfo.wk === Z0 && f.createElement(FU, {
                      'id': "currWalletSideBar ".concat(wJ.toString()),
                      'themeColor': vd.gameThemeColor
                    }), f.createElement(Fo, {
                      'id': "bwfgView ".concat(wJ.toString()),
                      'key': wJ
                    }, f.createElement(Fb, null, f.createElement(FY, null, f.createElement("div", {
                      'className': "resizableTxtContainer"
                    }, 0x5 === Z1 && f.createElement(FE, {
                      'className': "wallet-plugin-sprite wallet-plugin-ic_wallet_new",
                      'orientation': shell.environment.getOrientationMode()
                    }), f.createElement(a2, {
                      'className': "resizableTxt"
                    }, wT)), f.createElement(FQ, {
                      'className': "resizableTxtContainer"
                    }, f.createElement(a2, {
                      'className': "resizableTxt"
                    }, af.t("BonusWallet.Offer", {
                      'id': wy.toString()
                    })))), f.createElement(Fx, null, f.createElement(FH, {
                      'className': "resizableTxtContainer",
                      'themeColor': vd.gameThemeColor
                    }, f.createElement(a2, {
                      'className': "resizableTxt"
                    }, Z3.remainingInfo)), Z3.rollOverBalContent, Z3.withdrawLimitContent)), f.createElement(FW, null, f.createElement(FD, null, f.createElement("div", {
                      'className': "resizableTxtContainer"
                    }, f.createElement(a2, {
                      'className': "resizableTxt"
                    }, wI, " ", wP)), f.createElement(Fc, {
                      'className': "resizableTxtContainer"
                    }, f.createElement(aa, {
                      'className': "resizableTxt"
                    }, af.t("BonusWallet.Expiry")))), f.createElement(Fk, null, f.createElement("div", {
                      'className': "resizableTxtContainer"
                    }, f.createElement(a2, {
                      'className': "resizableTxt"
                    }, Z2)), f.createElement(Fc, {
                      'className': "resizableTxtContainer"
                    }, f.createElement(aa, {
                      'className': "resizableTxt"
                    }, af.t("BonusWallet.InitialBonusRatioLabel"))))), f.createElement(aw, null), f.createElement(FC, null, f.createElement(aa, null, af.t("BonusWallet.RollOverMode")), Z3.rollOverModeContent), f.createElement(a1, null, Z3.discardOfferBtnContent, Z3.selectWalletBtnContent)));
                  });
                  return f.createElement(aX, {
                    'orientation': shell.environment.getOrientationMode()
                  }, f.createElement(XB["default"], {
                    'handleClass': "background-color: rgba(117, 117, 117, 0.7);",
                    'freezePosition': this.state.scrollFreeze,
                    'onScroll': function (wU) {
                      var wJ = wU.target;
                      if (wD.On > 0x1 && wJ.clientHeight + wJ.scrollTop === wJ.scrollHeight) {
                        wD.On--;
                        wD.bn++;
                        wD.props.onLoadMoreRequestApi(wD.bn, function () {
                          wD.setState({
                            'scrollFreeze': false
                          });
                        });
                        wD.wn = true;
                        wD.setState({
                          'scrollFreeze': true
                        });
                      }
                    },
                    'rtl': vM.isRTL
                  }, f.createElement(aF, {
                    'id': "scrollView",
                    'orientation': shell.environment.getOrientationMode(),
                    'currHeight': wk
                  }, wE, f.createElement(FJ, {
                    'id': "loadMore",
                    'key': this.bn
                  }, f.createElement(a2, null, this.Fn())))));
                }
                return f.createElement(FK, null, f.createElement(FS, null, f.createElement(Fd, null, af.t("BonusWallet.NoOfferFound"))));
              }
            };
            wx.prototype.Z = function (wD, wk) {
              var wQ = wD.status;
              var wH = wD.key;
              var wc = wD.keySelection;
              var wp = wD.balanceAmount;
              var wh = wD.bonusRatioAmount;
              var wg = wD.maximumConversionAmount;
              var wE = wD.rollOverMode;
              var wU = vd.transactionInfo;
              var wJ = aG(wp);
              var wT = aG(wh);
              switch (wQ) {
                case 0x2:
                  return {
                    'remainingInfo': af.t("BonusWallet.Expired"),
                    'rollOverBalContent': null,
                    'withdrawLimitContent': null,
                    'rollOverModeContent': this.Tn(wk, wH, wc, wE),
                    'discardOfferBtnContent': this.Nn(wD, true),
                    'selectWalletBtnContent': this._n(wH, wk, wQ)
                  };
                case 0x6:
                  return {
                    'remainingInfo': af.t("BonusWallet.BonusWalletDiscarded"),
                    'rollOverBalContent': null,
                    'withdrawLimitContent': null,
                    'rollOverModeContent': this.Tn(wk, wH, wc, wE),
                    'discardOfferBtnContent': this.zn(wD),
                    'selectWalletBtnContent': this._n(wH, wk, wQ)
                  };
                case 0x7:
                  return {
                    'remainingInfo': wJ,
                    'rollOverBalContent': null,
                    'withdrawLimitContent': this.An(wg),
                    'rollOverModeContent': this.Tn(wk, wH, wc, wE),
                    'discardOfferBtnContent': this.Nn(wD, false),
                    'selectWalletBtnContent': this.Ln(wD, wk)
                  };
                case 0x1:
                  return {
                    'remainingInfo': wJ,
                    'rollOverBalContent': f.createElement("div", {
                      'className': "resizableTxtContainer"
                    }, f.createElement(a3, {
                      'className': "resizableTxt"
                    }, ''.concat(af.t("BonusWallet.BonusRatioLabel"), " ").concat(wT))),
                    'withdrawLimitContent': this.An(wg),
                    'rollOverModeContent': 0x2 === wE ? this.In(wk, wD, wQ) : this.Tn(wk, wH, wc, wE),
                    'discardOfferBtnContent': this.Nn(wD, false),
                    'selectWalletBtnContent': wH === wU.wk || 0x2 === wE && !wH ? this._n(wH, wk, wQ) : this.Dn(wD, wk)
                  };
                default:
                  return {
                    'remainingInfo': wJ,
                    'rollOverBalContent': null,
                    'withdrawLimitContent': this.An(wg),
                    'rollOverModeContent': 0x2 === wE ? this.In(wk, wD, wQ) : this.Tn(wk, wH, wc, wE),
                    'discardOfferBtnContent': this.Nn(wD, false),
                    'selectWalletBtnContent': wH === wU.wk || 0x2 === wE && !wH ? this._n(wH, wk, wQ) : this.Dn(wD, wk)
                  };
              }
            };
            wx.prototype.An = function (wD) {
              var wk = aG(wD);
              return wD > 0x0 && f.createElement("div", {
                'className': "resizableTxtContainer"
              }, f.createElement(a3, {
                'className': "resizableTxt"
              }, af.t("BonusWallet.MaximumConversionRate", {
                'rate': wk
              })));
            };
            wx.prototype.In = function (wD, wk, wQ) {
              var wH = wk.rollOverMode;
              var wc = wk.key;
              var wp = wk.keySelection;
              if (0x5 === wQ) {
                if ((wh = document.getElementById("selectWalletBtn ".concat(wD.toString()))) && wh.children[0x0].innerHTML !== af.t("BonusWallet.SelectMode")) {
                  wQ = Math.random();
                }
              } else if (0x1 === wQ) {
                var wh;
                if ((wh = document.getElementById("selectWalletBtn ".concat(wD.toString()))) && wh.children[0x0].innerHTML !== af.t("BonusWallet.WalletInuse")) {
                  wQ = Math.random();
                }
              }
              return f.createElement(a0, null, f.createElement(aZ, null, f.createElement(a4, {
                'id': "custom cash radio button ".concat(wD.toString())
              }, f.createElement(aN, {
                'type': "radio",
                'id': "cash ".concat(wD.toString()),
                'key': wQ,
                'value': "cash",
                'name': wD.toString(),
                'defaultChecked': 0x1 === wH || wp && wc === wp[0x1],
                'onChange': this.Rn.bind(this, wD, wk),
                'onClick': this.jn.bind(this, wD)
              }), f.createElement(a9, {
                'id': "cash check mark ".concat(wD.toString()),
                'orientation': shell.environment.getOrientationMode()
              })), f.createElement(a5, {
                'className': "wallet-plugin-color-sprite wallet-plugin-color-ic_wallet",
                'orientation': shell.environment.getOrientationMode()
              }), f.createElement(a7, {
                'htmlFor': "cash ".concat(wD.toString()),
                'orientation': shell.environment.getOrientationMode()
              }, af.t("BonusWallet.Cash"))), f.createElement(aZ, null, f.createElement(a4, {
                'id': "custom bonus radio button ".concat(wD.toString())
              }, f.createElement(aN, {
                'type': "radio",
                'id': "bonus ".concat(wD.toString()),
                'key': wQ,
                'value': "bonus",
                'name': wD.toString(),
                'defaultChecked': 0x0 === wH || wp && wc === wp[0x0],
                'onChange': this.Rn.bind(this, wD, wk),
                'onClick': this.Mn.bind(this, wD)
              }), f.createElement(a9, {
                'id': "bonus check mark ".concat(wD.toString()),
                'orientation': shell.environment.getOrientationMode()
              })), f.createElement(a5, {
                'className': "wallet-plugin-color-sprite wallet-plugin-color-ic_bonus_wallet",
                'orientation': shell.environment.getOrientationMode()
              }), f.createElement(a7, {
                'htmlFor': "bonus ".concat(wD.toString()),
                'orientation': shell.environment.getOrientationMode()
              }, af.t("BonusWallet.Bonus"))));
            };
            wx.prototype.Tn = function (wD, wk, wQ, wH) {
              return f.createElement(a0, null, f.createElement(aZ, null, f.createElement(a4, {
                'id': "custom cash radio button ".concat(wD.toString())
              }, f.createElement(aN, {
                'type': "radio",
                'id': "cash ".concat(wD.toString()),
                'value': "cash",
                'name': wD.toString(),
                'defaultChecked': 0x1 === wH || wQ && wk === wQ[0x1],
                'disabled': true
              }), f.createElement(a9, {
                'id': "cash check mark ".concat(wD.toString()),
                'orientation': shell.environment.getOrientationMode()
              })), f.createElement(a6, {
                'className': "wallet-plugin-color-sprite wallet-plugin-color-ic_wallet",
                'orientation': shell.environment.getOrientationMode()
              }), f.createElement(a8, {
                'orientation': shell.environment.getOrientationMode()
              }, af.t("BonusWallet.Cash"))), f.createElement(aZ, null, f.createElement(a4, {
                'id': "custom bonus radio button ".concat(wD.toString())
              }, f.createElement(aN, {
                'type': "radio",
                'id': "bonus ".concat(wD.toString()),
                'value': "bonus",
                'name': wD.toString(),
                'defaultChecked': 0x0 === wH || wQ && wk === wQ[0x0],
                'disabled': true
              }), f.createElement(a9, {
                'id': "bonus check mark ".concat(wD.toString()),
                'orientation': shell.environment.getOrientationMode()
              })), f.createElement(a6, {
                'className': "wallet-plugin-color-sprite wallet-plugin-color-ic_bonus_wallet",
                'orientation': shell.environment.getOrientationMode()
              }), f.createElement(a8, {
                'orientation': shell.environment.getOrientationMode()
              }, af.t("BonusWallet.Bonus"))));
            };
            wx.prototype.zn = function (wD) {
              return 0x2 !== wD.status && wD.isHideDiscard ? null : f.createElement(Fp, {
                'className': "btnStyle",
                'disabled': true
              }, f.createElement(a2, null, af.t("BonusWallet.DiscardWallet")));
            };
            wx.prototype.Nn = function (wD, wk) {
              return 0x2 !== wD.status && wD.isHideDiscard ? null : f.createElement(Fp, {
                'className': "btnStyle",
                'onClick': this.yn.bind(this, wD, wk)
              }, f.createElement(a2, null, af.t("BonusWallet.DiscardWallet")));
            };
            wx.prototype._n = function (wD, wk, wQ) {
              var wH = wD ? vd.transactionInfo.wk === wD ? af.t("BonusWallet.WalletInuse") : af.t("BonusWallet.SelectWallet") : af.t("BonusWallet.SelectMode");
              if (0x5 === wQ) {
                if ((wc = document.getElementById("selectWalletBtn ".concat(wk.toString()))) && wc.children[0x0].innerHTML !== af.t("BonusWallet.SelectMode")) {
                  wQ = Math.random();
                }
              } else if (0x1 === wQ) {
                var wc;
                if ((wc = document.getElementById("selectWalletBtn ".concat(wk.toString()))) && wc.children[0x0].innerHTML !== af.t("BonusWallet.WalletInuse")) {
                  wQ = Math.random();
                }
              }
              var wp = shell.uiAppearance.v("game.theme_color");
              return f.createElement(Fg, {
                'id': "selectWalletBtn ".concat(wk.toString()),
                'className': "btnStyle",
                'key': wQ,
                'disabled': true,
                'themeColor': "rgba(".concat(wp.r, ", ").concat(wp.g, ", ").concat(wp.b, ", ").concat(wp.a / 0xff * 0.2, ')')
              }, f.createElement(a2, null, wH));
            };
            wx.prototype.Dn = function (wD, wk) {
              return f.createElement(Fh, {
                'id': "selectWalletBtn ".concat(wk.toString()),
                'className': "btnStyle",
                'onClick': this.Cn.bind(this, wD, wk),
                'themeColor': vd.gameThemeColor
              }, f.createElement(a2, null, af.t("BonusWallet.SelectWallet")));
            };
            wx.prototype.Ln = function (wD, wk) {
              this.vn.push(wk);
              return f.createElement(FT, null, f.createElement(Fy, {
                'id': "selectWalletBtn ".concat(wk.toString()),
                'className': "btnStyle",
                'onClick': this.props.onSelectWalletClick.bind(this, wD, wk)
              }, f.createElement(a2, null, af.t("BonusWallet.WalletLocked"))), f.createElement(FI, {
                'orientation': shell.environment.getOrientationMode(),
                'themeColor': vd.gameThemeColor
              }), f.createElement(FP, {
                'className': "wallet-plugin-sprite wallet-plugin-ic_warning_overlay",
                'onClick': this.props.onSelectWalletClick.bind(this, wD, wk),
                'orientation': shell.environment.getOrientationMode()
              }));
            };
            wx.prototype.Rn = function (wD, wk) {
              var wQ = wk.key;
              var wH = wk.rollOverMode;
              var wc = vd.transactionInfo;
              var wp = vd.gameThemeColor;
              if (wc.wk === wQ || !wQ) {
                var wh = document.getElementById("selectWalletBtn ".concat(wD.toString()));
                if (0x2 === wH && !wQ) {
                  wh.children[0x0].innerHTML = af.t("BonusWallet.SelectWallet");
                  wh.disabled = false;
                  wh.onclick = this.Cn.bind(this, wk, wD);
                  return void (wh.style.backgroundColor = wp);
                }
                var wg = document.getElementById("cash ".concat(wD.toString()));
                var wE = wg.defaultChecked ? wg.checked ? af.t("BonusWallet.WalletInuse") : af.t("BonusWallet.SwapMode") : wg.checked ? af.t("BonusWallet.SwapMode") : af.t("BonusWallet.WalletInuse");
                var wU = shell.uiAppearance.v("game.theme_color");
                wh.disabled = wg.defaultChecked ? wg.checked : !wg.checked;
                wh.onclick = wh.disabled ? null : this.Cn.bind(this, wk, wD);
                wh.style.backgroundColor = wh.disabled ? "rgba(".concat(wU.r, ", ").concat(wU.g, ", ").concat(wU.b, ", ").concat(wU.a / 0xff * 0.2, ')') : wp;
                wh.children[0x0].innerHTML = wE;
              }
            };
            wx.prototype.jn = function (wD) {
              var wk = document.getElementById("cash check mark ".concat(wD.toString()));
              var wQ = document.getElementById("bonus check mark ".concat(wD.toString()));
              wk.style.display = "block";
              wQ.style.display = "none";
            };
            wx.prototype.Mn = function (wD) {
              var wk = document.getElementById("cash check mark ".concat(wD.toString()));
              var wQ = document.getElementById("bonus check mark ".concat(wD.toString()));
              wk.style.display = "none";
              wQ.style.display = "block";
            };
            wx.prototype.Fn = function () {
              return this.wn ? (this.wn = false, '') : this.On > 0x1 ? af.t("BonusWallet.LoadMoreData") : af.t("BonusWallet.AllRecordDisplayed");
            };
            return wx;
          }(f.Component);
          var am = function () {
            function wY(wx) {
              this.J = wx.k;
              this.En = wx.fgid;
              this.Un = wx.n;
              this.q = wx.gids;
              this.Pn = wx.gc;
              this.Vn = wx.tg;
              this.K = wx.ba;
              this.Hn = wx.m;
              this.Zn = wx.cs;
              this.en = wx.ed;
              this.M = wx.s;
              this.Jn = wx.ct;
              this.nn = wx.mca;
              this.an = wx.ca;
              this.Xn = wx.ck;
              this.ln = wx.gidl;
              this.Yn = wx.cgid;
              this.hn = wx.baid;
              this.dn = wx.isd;
            }
            Object.defineProperty(wY.prototype, "key", {
              'get': function () {
                return this.J;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "freeGameID", {
              'get': function () {
                return this.En;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "freeGameName", {
              'get': function () {
                return this.Un;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "gameIDs", {
              'get': function () {
                return this.q;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "gameCount", {
              'get': function () {
                return this.Pn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "totalGame", {
              'get': function () {
                return this.Vn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "balanceAmount", {
              'get': function () {
                if (!this.K) {
                  this.K = 0x0;
                }
                return this.K;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "multiplier", {
              'get': function () {
                return this.Hn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "coinSize", {
              'get': function () {
                return this.Zn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "expiredDate", {
              'get': function () {
                var wx = new Date(this.en);
                return wx.getFullYear() + '/' + (wx.getMonth() + 0x1 < 0xa && wx.getMonth() + 0x1 >= 0x0 ? '0' + (wx.getMonth() + 0x1).toString() : wx.getMonth() + 0x1) + '/' + (wx.getDate() < 0xa && wx.getDate() >= 0x0 ? '0' + wx.getDate().toString() : wx.getDate());
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "status", {
              'get': function () {
                return this.M;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "conversionType", {
              'get': function () {
                return this.Jn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "maximumConversionAmount", {
              'get': function () {
                if (!this.nn) {
                  this.nn = 0x0;
                }
                return this.nn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "conversionAmount", {
              'get': function () {
                if (!this.an) {
                  this.an = 0x0;
                }
                return this.an;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "conversionKey", {
              'get': function () {
                return this.Xn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "lockedGameID", {
              'get': function () {
                return this.ln;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "convertedID", {
              'get': function () {
                return this.Yn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "balanceID", {
              'get': function () {
                return this.hn;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "expiredTime", {
              'get': function () {
                var wx = new Date(this.en);
                return (wx.getHours() < 0xa && wx.getHours() >= 0x0 ? '0' + wx.getHours().toString() : wx.getHours()) + ':' + (wx.getMinutes() < 0xa && wx.getMinutes() >= 0x0 ? '0' + wx.getMinutes().toString() : wx.getMinutes()) + ':' + (wx.getSeconds() < 0xa && wx.getSeconds() >= 0x0 ? '0' + wx.getSeconds().toString() : wx.getSeconds());
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(wY.prototype, "isHideDiscard", {
              'get': function () {
                return this.dn;
              },
              'enumerable': false,
              'configurable': true
            });
            return wY;
          }();
          var au = v7.formatCurrency;
          var as = shell.I18n;
          var aj = function (wY) {
            function wx(wD) {
              var wk = wY.call(this, wD) || this;
              wk.mn = [];
              wk.gn = false;
              wk.bn = 0x1;
              wk.qn = [];
              wk.xn = false;
              wk.wn = false;
              wk.yn = function (wQ, wH) {
                var wc = document.getElementsByClassName("btnStyle");
                var wp = 0x0;
                for (var wh = wc.length; wp < wh; wp++) {
                  wc[wp].blur();
                }
                wD.onDiscardOfferClick(wQ, wH);
              };
              wk.state = {
                'scrollFreeze': false
              };
              return wk;
            }
            v0(wx, wY);
            wx.prototype.componentDidMount = function () {
              var wD = vM.context.event;
              wD.on("Shell.Scaled", this.kn, this);
              wD.emit("Game.FreeGameListOpened");
              this.Bn();
              this.Qn();
              document.addEventListener("keydown", this.Gn);
            };
            wx.prototype.componentDidUpdate = function () {
              this.Bn();
              this.Qn();
            };
            wx.prototype.componentWillUnmount = function () {
              vM.context.event.off("Shell.Scaled", this.kn, this);
              document.removeEventListener("keydown", this.Gn);
            };
            wx.prototype.shouldComponentUpdate = function (wD) {
              return this.props.show === wD.show && (this.xn = this.props.data === wD.data, true);
            };
            wx.prototype.render = function () {
              return f.createElement(FM, {
                'id': "bwfgContainer",
                'className': "wallet"
              }, this.V(), this.H());
            };
            wx.prototype.Gn = function (wD) {
              if (!(" " !== wD.key && "Spacebar" !== wD.key)) {
                wD.preventDefault();
              }
            };
            wx.prototype.kn = function (wD) {
              var wk = wD.payload;
              var wQ = document.getElementById("scrollView");
              var wH = parseFloat(Z.getComputedStyle(document.getElementById("headerWrapper")).height);
              if (wQ) {
                wQ.style.maxHeight = ''.concat(wk.height - wH, 'px');
              }
            };
            wx.prototype.Bn = function () {
              var wD = this.mn;
              var wk = 0x0;
              for (var wQ = wD.length; wk < wQ; wk++) {
                var wH = wD[wk].key;
                if (wH && vd.transactionInfo.wk === wH) {
                  var wc = document.getElementById("currWalletSideBar ".concat(wk.toString()));
                  var wp = document.getElementById("bwfgView ".concat(wk.toString()));
                  wc.style.height = ''.concat(wp.clientHeight.toString(), 'px');
                }
              }
            };
            wx.prototype.Qn = function () {
              var wD = vd.gameThemeColor;
              this.qn.forEach(function (wk) {
                document.getElementById("selectFreeGameBtn ".concat(wk.toString())).style.backgroundColor = wD;
              });
            };
            wx.prototype.V = function () {
              var wD = vd.status;
              if (!this.props.error && this.props.data && this.props.data.dt.r) {
                var wk = 0x0;
                for (var wQ = this.props.data.dt.r.length; wk < wQ; wk++) {
                  if (0x6 === this.props.data.dt.r[wk].s && vd.transactionInfo.wk === this.props.data.dt.r[wk].k) {
                    this.gn = true;
                    break;
                  }
                }
              }
              return f.createElement(FR, {
                'id': "headerWrapper"
              }, f.createElement(Fq, {
                'id': "bwfgHeader",
                'orientation': shell.environment.getOrientationMode(),
                'themeColor': vd.gameThemeColor
              }, as.t("FreeGame.FreeGame")), f.createElement(av, {
                'className': "wallet-plugin-sprite wallet-plugin-ic_close",
                'onClick': 0x4 === wD || 0x3 === wD || 0x2 === wD || this.gn ? this.props.onBackCashWalletClick : this.props.onCloseButtonClick,
                'orientation': shell.environment.getOrientationMode()
              }));
            };
            wx.prototype.H = function () {
              var wD = this;
              if (this.props.error) {
                this.bn = 0x1;
                this.mn = [];
                return f.createElement(FK, null, f.createElement(FS, null, f.createElement(Fd, null, f.createElement(a2, null, this.props.error.message)), this.props.error.shouldRetry && f.createElement(FB, {
                  'onClick': this.props.onRetryClick,
                  'themeColor': vd.gameThemeColor
                }, as.t("General.DialogRetry"))));
              }
              if (this.props.data) {
                this.gn = false;
                this.qn = [];
                var wk = parseFloat(document.getElementById("wallet-container").style.height);
                var wQ = this.props.data.dt;
                var wH = JSON.parse(JSON.stringify(wQ.r));
                var wc = wQ.tp;
                this.On = this.bn > 0x1 ? this.On : wc;
                this.mn = this.bn > 0x1 ? this.mn : [];
                if (wH && wH.length > 0x0) {
                  if (!this.xn) {
                    var wp = 0x0;
                    for (var wh = wH.length; wp < wh; wp++) {
                      var wg = wH[wp];
                      if (wg.k === vd.transactionInfo.wk) {
                        this.mn.push(new am(wg));
                        wH.splice(wp, 0x1);
                        break;
                      }
                    }
                    if (wH.length > 0x0) {
                      wH.forEach(function (wU) {
                        wD.mn.push(new am(wU));
                      });
                    }
                  }
                  var wE = this.mn.map(function (wU, wJ) {
                    var wT = wU.freeGameName;
                    var wy = wU.freeGameID;
                    var wI = wU.expiredDate;
                    var wP = wU.expiredTime;
                    var wC = wU.coinSize;
                    var Z0 = wU.multiplier;
                    var Z1 = wU.key;
                    var Z2 = wU.status;
                    var Z3 = vd.gameRawInfo;
                    var Z4 = vd.transactionInfo;
                    var Z5 = au(wC * Z0 * Z3.dt.mxl);
                    var Z6 = wD.Z(wU, wJ);
                    return f.createElement(FV, {
                      'key': wJ
                    }, Z1 && Z4.wk === Z1 && f.createElement(FU, {
                      'id': "currWalletSideBar ".concat(wJ.toString()),
                      'themeColor': vd.gameThemeColor
                    }), f.createElement(Fo, {
                      'id': "bwfgView ".concat(wJ.toString()),
                      'key': wJ
                    }, f.createElement(Fb, null, f.createElement(FY, null, f.createElement("div", {
                      'className': "resizableTxtContainer"
                    }, 0x5 === Z2 && f.createElement(FE, {
                      'className': "wallet-plugin-sprite wallet-plugin-ic_wallet_new",
                      'orientation': shell.environment.getOrientationMode()
                    }), f.createElement(a2, {
                      'className': "resizableTxt"
                    }, wT)), f.createElement(FQ, {
                      'className': "resizableTxtContainer"
                    }, f.createElement(a2, {
                      'className': "resizableTxt"
                    }, as.t("FreeGame.Offer", {
                      'id': wy.toString()
                    })))), f.createElement(Fx, null, f.createElement(FH, {
                      'className': "resizableTxtContainer",
                      'themeColor': vd.gameThemeColor
                    }, f.createElement(a2, {
                      'className': "resizableTxt"
                    }, Z6.remainingInfo)), Z6.totalWonContent, Z6.withdrawLimitContent)), f.createElement(FW, null, f.createElement(FD, null, f.createElement("div", {
                      'className': "resizableTxtContainer"
                    }, f.createElement(a2, {
                      'className': "resizableTxt"
                    }, wI, " ", wP)), f.createElement(Fc, {
                      'className': "resizableTxtContainer"
                    }, f.createElement(aa, {
                      'className': "resizableTxt"
                    }, as.t("FreeGame.ExpiryDate")))), f.createElement(Fk, null, f.createElement("div", {
                      'className': "resizableTxtContainer"
                    }, f.createElement(a2, {
                      'className': "resizableTxt"
                    }, Z5)), f.createElement(Fc, {
                      'className': "resizableTxtContainer"
                    }, f.createElement(aa, {
                      'className': "resizableTxt"
                    }, as.t("FreeGame.SingleBet"))))), f.createElement(a1, null, Z6.discardOfferBtnContent, Z6.selectFreeGameBtnContent)));
                  });
                  return f.createElement(aX, {
                    'orientation': shell.environment.getOrientationMode()
                  }, f.createElement(XB["default"], {
                    'handleClass': "background-color: rgba(117, 117, 117, 0.7);",
                    'freezePosition': this.state.scrollFreeze,
                    'onScroll': function (wU) {
                      var wJ = wU.target;
                      if (wD.On > 0x1 && wJ.clientHeight + wJ.scrollTop === wJ.scrollHeight) {
                        wD.On--;
                        wD.bn++;
                        wD.props.onLoadMoreRequestApi(wD.bn, function () {
                          wD.setState({
                            'scrollFreeze': false
                          });
                        });
                        wD.wn = true;
                        wD.setState({
                          'scrollFreeze': true
                        });
                      }
                    },
                    'rtl': vM.isRTL
                  }, f.createElement(aF, {
                    'id': "scrollView",
                    'orientation': shell.environment.getOrientationMode(),
                    'currHeight': wk
                  }, wE, f.createElement(FJ, {
                    'id': "loadMore",
                    'key': this.bn
                  }, f.createElement(a2, null, this.Fn())))));
                }
                return f.createElement(FK, null, f.createElement(FS, null, f.createElement(Fd, null, as.t("FreeGame.NoOfferFound"))));
              }
            };
            wx.prototype.Z = function (wD, wk) {
              var wQ = wD.status;
              var wH = wD.balanceAmount;
              var wc = wD.maximumConversionAmount;
              var wp = wD.gameCount;
              var wh = wD.totalGame;
              var wg = wD.key;
              var wE = vd.transactionInfo;
              switch (wQ) {
                case 0x2:
                  return {
                    'remainingInfo': as.t("FreeGame.Expired"),
                    'totalWonContent': null,
                    'withdrawLimitContent': null,
                    'discardOfferBtnContent': this.Nn(wD, true),
                    'selectFreeGameBtnContent': this.Kn(false, wp === wh)
                  };
                case 0x6:
                  return {
                    'remainingInfo': as.t("FreeGame.DiscardWallet"),
                    'totalWonContent': null,
                    'withdrawLimitContent': null,
                    'discardOfferBtnContent': this.zn(wD),
                    'selectFreeGameBtnContent': this.Kn(false, wp === wh)
                  };
                case 0x7:
                  return {
                    'remainingInfo': wp === wh ? as.t("FreeGame.FreeGameTotal", {
                      'gameCount': wp.toString()
                    }) : as.t("FreeGame.FreeGameRemaining", {
                      'gameCount': wp.toString()
                    }),
                    'totalWonContent': null,
                    'withdrawLimitContent': this.An(wc),
                    'discardOfferBtnContent': this.Nn(wD, false),
                    'selectFreeGameBtnContent': this.$n(wD, wk)
                  };
                case 0x1:
                  var wU = au(wH);
                  return {
                    'remainingInfo': as.t("FreeGame.FreeGameRemaining", {
                      'gameCount': wp.toString()
                    }),
                    'totalWonContent': f.createElement("div", {
                      'className': "resizableTxtContainer"
                    }, f.createElement(a3, {
                      'className': "resizableTxt"
                    }, as.t("FreeGame.CurrentWin", {
                      'amount': wU
                    }))),
                    'withdrawLimitContent': this.An(wc),
                    'discardOfferBtnContent': this.Nn(wD, false),
                    'selectFreeGameBtnContent': wE.wk === wg ? this.Kn(true) : this.nt(wD, wk)
                  };
                default:
                  return {
                    'remainingInfo': as.t("FreeGame.FreeGameTotal", {
                      'gameCount': wp.toString()
                    }),
                    'totalWonContent': null,
                    'withdrawLimitContent': this.An(wc),
                    'discardOfferBtnContent': this.Nn(wD, false),
                    'selectFreeGameBtnContent': wE.wk === wg ? this.Kn(true) : this.nt(wD, wk)
                  };
              }
            };
            wx.prototype.An = function (wD) {
              var wk = au(wD);
              return wD > 0x0 && f.createElement("div", {
                'className': "resizableTxtContainer"
              }, f.createElement(a3, {
                'className': "resizableTxt"
              }, as.t("FreeGame.MaximumConversionRate", {
                'rate': wk
              })));
            };
            wx.prototype.zn = function (wD) {
              return 0x2 !== wD.status && wD.isHideDiscard ? null : f.createElement(Fp, {
                'className': "btnStyle",
                'disabled': true
              }, f.createElement(a2, null, as.t("FreeGame.DiscardGame")));
            };
            wx.prototype.Nn = function (wD, wk) {
              return 0x2 !== wD.status && wD.isHideDiscard ? null : f.createElement(Fp, {
                'className': "btnStyle",
                'onClick': this.yn.bind(this, wD, wk)
              }, f.createElement(a2, null, as.t("FreeGame.DiscardGame")));
            };
            wx.prototype.Kn = function (wD, wk) {
              var wQ = wD ? as.t("FreeGame.GameInUse") : wk ? as.t("FreeGame.PlayGameNow") : as.t("FreeGame.ContinueGame");
              var wH = shell.uiAppearance.v("game.theme_color");
              return f.createElement(Fg, {
                'className': "btnStyle",
                'disabled': true,
                'themeColor': "rgba(".concat(wH.r, ", ").concat(wH.g, ", ").concat(wH.b, ", ").concat(wH.a / 0xff * 0.2, ')')
              }, f.createElement(a2, null, wQ));
            };
            wx.prototype.nt = function (wD, wk) {
              var wQ = this;
              var wH = wD.gameCount === wD.totalGame ? as.t("FreeGame.PlayGameNow") : as.t("FreeGame.ContinueGame");
              return f.createElement(Fh, {
                'id': "selectFreeGameBtn ".concat(wk.toString()),
                'className': "btnStyle",
                'onClick': function () {
                  document.getElementById("selectFreeGameBtn ".concat(wk.toString())).blur();
                  wQ.props.onSelectFreeGameClick(wD);
                },
                'themeColor': vd.gameThemeColor
              }, f.createElement(a2, null, wH));
            };
            wx.prototype.$n = function (wD, wk) {
              this.qn.push(wk);
              return f.createElement(FT, null, f.createElement(Fy, {
                'id': "selectFreeGameBtn ".concat(wk.toString()),
                'className': "btnStyle",
                'onClick': this.props.onSelectFreeGameClick.bind(this, wD)
              }, f.createElement(a2, null, as.t("FreeGame.WalletLocked"))), f.createElement(FI, {
                'orientation': shell.environment.getOrientationMode(),
                'themeColor': vd.gameThemeColor
              }), f.createElement(FP, {
                'className': "wallet-plugin-sprite wallet-plugin-ic_warning_overlay",
                'onClick': this.props.onSelectFreeGameClick.bind(this, wD),
                'orientation': shell.environment.getOrientationMode()
              }));
            };
            wx.prototype.Fn = function () {
              return this.wn ? (this.wn = false, '') : this.On > 0x1 ? as.t("FreeGame.LoadMoreData") : as.t("FreeGame.AllRecordDisplayed");
            };
            return wx;
          }(f.Component);
          var aO = {};
          var al = {};
          var aA = function () {
            function wY() {}
            wY.prototype.parsePlistData = function (wx, wD) {
              var wk = this;
              var wQ = new plugin.Loader();
              wQ.load([{
                'src': wx,
                'type': plugin.LoadType.Text
              }]);
              wQ.onLoad = function (wH) {
                var wc = new DOMParser().parseFromString(wH.response.toString(), "text/xml");
                var wp = wk.tt(wc.documentElement);
                if (wD) {
                  wD(wp);
                }
              };
              wQ.onError = function () {};
            };
            wY.prototype.et = function (wx) {
              return !wx.childNodes || 0x0 === wx.childNodes.length;
            };
            wY.prototype.it = function (wx, wD) {
              if (!wx) {
                throw Error(wD);
              }
            };
            wY.prototype.rt = function (wx) {
              return 0x3 === wx.nodeType || 0x8 === wx.nodeType || 0x4 === wx.nodeType;
            };
            wY.prototype.tt = function (wx) {
              var wD;
              var wk;
              var wQ;
              var wH;
              var wc;
              var wp;
              if (!wx) {
                return null;
              }
              if ("plist" === wx.nodeName) {
                wH = [];
                if (this.et(wx)) {
                  return wH;
                }
                for (wD = 0x0; wD < wx.childNodes.length; wD++) {
                  if (!this.rt(wx.childNodes[wD])) {
                    wH.push(this.tt(wx.childNodes[wD]));
                  }
                }
                return wH;
              }
              if ("dict" === wx.nodeName) {
                wk = {};
                wQ = null;
                wp = 0x0;
                if (this.et(wx)) {
                  return wk;
                }
                for (wD = 0x0; wD < wx.childNodes.length; wD++) {
                  if (!this.rt(wx.childNodes[wD])) {
                    if (wp % 0x2 == 0x0) {
                      this.it("key" === wx.childNodes[wD].nodeName, "Missing key while parsing <dict/>.");
                      wQ = this.tt(wx.childNodes[wD]);
                    } else {
                      this.it("key" !== wx.childNodes[wD].nodeName, "Unexpected key \"" + this.tt(wx.childNodes[wD]) + "\" while parsing <dict/>.");
                      wk[wQ] = this.tt(wx.childNodes[wD]);
                    }
                    wp += 0x1;
                  }
                }
                if (wp % 0x2 == 0x1) {
                  throw Error("Missing value for \"" + wQ + "\" while parsing <dict/>");
                }
                return wk;
              }
              if ("array" === wx.nodeName) {
                wH = [];
                if (this.et(wx)) {
                  return wH;
                }
                for (wD = 0x0; wD < wx.childNodes.length; wD++) {
                  if (!this.rt(wx.childNodes[wD])) {
                    if (null !== (wc = this.tt(wx.childNodes[wD]))) {
                      wH.push(wc);
                    }
                  }
                }
                return wH;
              }
              if ("#text" === wx.nodeName) {
                ;
              } else {
                if ("key" === wx.nodeName) {
                  return this.et(wx) ? '' : wx.childNodes[0x0].nodeValue;
                }
                if ("string" === wx.nodeName) {
                  wc = '';
                  if (this.et(wx)) {
                    return wc;
                  }
                  for (wD = 0x0; wD < wx.childNodes.length; wD++) {
                    var wh = wx.childNodes[wD].nodeType;
                    if (!(0x3 !== wh && 0x4 !== wh)) {
                      wc += wx.childNodes[wD].nodeValue;
                    }
                  }
                  return wc;
                }
                if ("integer" === wx.nodeName) {
                  this.it(!this.et(wx), "Cannot parse \"\" as integer.");
                  return parseInt(wx.childNodes[0x0].nodeValue, 0xa);
                }
                if ("real" === wx.nodeName) {
                  this.it(!this.et(wx), "Cannot parse \"\" as real.");
                  wc = '';
                  for (wD = 0x0; wD < wx.childNodes.length; wD++) {
                    if (0x3 === wx.childNodes[wD].nodeType) {
                      wc += wx.childNodes[wD].nodeValue;
                    }
                  }
                  return parseFloat(wc);
                }
                if ("date" === wx.nodeName) {
                  this.it(!this.et(wx), "Cannot parse \"\" as Date.");
                  return new Date(wx.childNodes[0x0].nodeValue);
                }
                if ("true" === wx.nodeName) {
                  return true;
                }
                if ("false" === wx.nodeName) {
                  return false;
                }
              }
            };
            return wY;
          }();
          var aL = new aA();
          function aM(wY, wx, wD) {
            if (undefined === wx) {
              wx = {
                'x': 0x0,
                'y': 0x0,
                'width': 0x0,
                'height': 0x0,
                'isRotate': false
              };
            }
            return new Promise(function (wk, wQ) {
              var wH = new plugin.Loader();
              wH.onLoad = function (wc) {
                var wp = document.createElement("canvas");
                var wh = wp.getContext('2d');
                if (null !== wh) {
                  var wg = new Image();
                  wg.onload = function () {
                    URL.revokeObjectURL(wg.src);
                    var wE = 0x0 === wx.width ? wg.width : wx.width;
                    var wU = 0x0 === wx.height ? wg.height : wx.height;
                    wp.width = wE;
                    wp.height = wU;
                    wh.clearRect(0x0, 0x0, wE, wU);
                    wh.translate(wE / 0x2, wU / 0x2);
                    if (wx.isRotate) {
                      wh.rotate(0x10e * Math.PI / 0xb4);
                      wh.drawImage(wg, wx.x, wx.y, wU, wE, -wU / 0x2, -wE / 0x2, wU, wE);
                    } else {
                      wh.drawImage(wg, wx.x, wx.y, wE, wU, -wE / 0x2, -wU / 0x2, wE, wU);
                    }
                    var wJ = wh.getImageData(0x0, 0x0, wE, wU);
                    var wT = wJ.data;
                    if (wD) {
                      var wy = 0x0;
                      for (var wI = wT.length; wy < wI; wy += 0x4) {
                        wT[wy] = wD.r;
                        wT[wy + 0x1] = wD.g;
                        wT[wy + 0x2] = wD.b;
                      }
                    }
                    wh.putImageData(wJ, 0x0, 0x0);
                    wk(wp.toDataURL());
                  };
                  wg.onerror = function () {
                    wQ(Error("ImageBase64 load image failed"));
                  };
                  wg.src = URL.createObjectURL(wc.response);
                }
              };
              wH.onError = function (wc) {
                wQ(wc);
              };
              wH.load([{
                'src': wY,
                'type': plugin.LoadType.Blob
              }]);
            });
          }
          function aR(wY, wx) {
            var wD = [];
            wY.forEach(function (wk) {
              wD.push(aM(wk.resolvePath, {
                'x': 0x0,
                'y': 0x0,
                'width': 0x0,
                'height': 0x0
              }, wk.colour));
            });
            Promise.all(wD).then(function (wk) {
              var wQ = [];
              wk.forEach(function (wH) {
                wQ.push(wH);
              });
              if (wx) {
                wx(wQ, undefined);
              }
            })["catch"](function (wk) {
              if (wx) {
                wx(undefined, wk);
              }
            });
          }
          var aq = {};
          function aK(wY, wx, wD) {
            var wk;
            var wQ = this;
            var wH = wY.src;
            var wc = "unknown";
            wc = -0x1 !== wH.indexOf(".css") ? "css" : wc;
            wc = -0x1 !== (wk = wH).indexOf(".jpg") || -0x1 !== wk.indexOf(".png") ? "image" : wc;
            var wp = shell.Error;
            var wh = shell.ClientError;
            var wg = wp && new wp(wh.Domain, wh.GameLoadResourceError);
            var wE = wx.resource.resolveUrl(wH);
            return new Promise(function (wU, wJ) {
              return __awaiter(wQ, undefined, undefined, function () {
                var wT;
                return __generator(this, function (wy) {
                  switch (wy.label) {
                    case 0x0:
                      wy.trys.push([0x0, 0x9,, 0xa]);
                      return "image" !== wc ? [0x3, 0x5] : wY.tint ? [0x4, ab([{
                        'resolvePath': wE,
                        'colour': wY.tint
                      }])] : [0x3, 0x2];
                    case 0x1:
                      wT = wy.sent();
                      wU(wT[0x0]);
                      return [0x3, 0x4];
                    case 0x2:
                      return [0x4, aY(wE, wD)];
                    case 0x3:
                      wT = wy.sent();
                      wU(wT);
                      wy.label = 0x4;
                    case 0x4:
                      return [0x3, 0x8];
                    case 0x5:
                      return "css" !== wc ? [0x3, 0x7] : [0x4, ax(wE, wx, wD)];
                    case 0x6:
                      wT = wy.sent();
                      wU(wT);
                      return [0x3, 0x8];
                    case 0x7:
                      wJ(wg);
                      wy.label = 0x8;
                    case 0x8:
                      return [0x3, 0xa];
                    case 0x9:
                      wy.sent();
                      wJ(wg);
                      return [0x3, 0xa];
                    case 0xa:
                      return [0x2];
                  }
                });
              });
            });
          }
          function aS(wY, wx, wD) {
            return __awaiter(this, undefined, undefined, function () {
              var wk;
              var wQ;
              return __generator(this, function (wH) {
                switch (wH.label) {
                  case 0x0:
                    return wY.cssFile.endsWith(".css") ? [0x4, aK({
                      'src': wY.cssFile
                    }, wx, wD)] : [0x3, 0x2];
                  case 0x1:
                    wk = wH.sent();
                    return [0x3, 0x3];
                  case 0x2:
                    wk = wY.cssFile;
                    wH.label = 0x3;
                  case 0x3:
                    return wY.tint ? [0x4, aK({
                      'src': wY.imageFile,
                      'tint': wY.tint
                    }, wx, wD)] : [0x3, 0x6];
                  case 0x4:
                    wQ = wH.sent();
                    return [0x4, ad(wk, wx, wQ, true, wD)];
                  case 0x5:
                    wk = wH.sent();
                    return [0x3, 0x8];
                  case 0x6:
                    return [0x4, ad(wk, wx, wY.imageFile, false, wD)];
                  case 0x7:
                    wk = wH.sent();
                    wH.label = 0x8;
                  case 0x8:
                    if (wY.appendHeader) {
                      aW(wk, wx);
                    }
                    return [0x2, wk];
                }
              });
            });
          }
          function ad(wY, wx, wD, wk, wQ) {
            if (undefined === wk) {
              wk = false;
            }
            return new Promise(function (wH, wc) {
              if (wk) {
                wY = wY.replace(/url\((.*?)\)/g, function () {
                  return "url(" + wD + ')';
                });
                wH(wY);
              } else {
                aB(wx.resource.resolveUrl(wD), wQ).then(function (wp) {
                  wY = wY.replace(/url\((.*?)\)/g, function () {
                    return "url(" + URL.createObjectURL(wp) + ')';
                  });
                  wH(wY);
                })["catch"](wc);
              }
            });
          }
          function aB(wY, wx) {
            var wD = this;
            var wk = shell.Error;
            var wQ = shell.ClientError;
            var wH = wk && new wk(wQ.Domain, wQ.GameLoadResourceError);
            return new Promise(function (wc, wp) {
              return __awaiter(wD, undefined, undefined, function () {
                var wh;
                return __generator(this, function (wg) {
                  switch (wg.label) {
                    case 0x0:
                      wg.trys.push([0x0, 0x2,, 0x3]);
                      return [0x4, aD(wY, wx)];
                    case 0x1:
                      wh = wg.sent();
                      wc(wh);
                      return [0x3, 0x3];
                    case 0x2:
                      wg.sent();
                      wp(wH);
                      return [0x3, 0x3];
                    case 0x3:
                      return [0x2];
                  }
                });
              });
            });
          }
          function aV(wY, wx) {
            return wY.replace(/url\((.*?)\)/g, function (wD, wk) {
              return "url(" + wx.resource.resolveUrl(wk) + ')';
            });
          }
          function ab(wY) {
            return new Promise(function (wx, wD) {
              aR(wY, function (wk, wQ) {
                if (wQ || wk && 0x0 === wk.length) {
                  var wH = shell.Error;
                  var wc = shell.ClientError;
                  var wp = wH && new wH(wc.Domain, wc.GameLoadResourceError);
                  wD(wQ || wp);
                }
                wx(wk);
              });
            });
          }
          function aW(wY, wx) {
            var wD = [];
            var wk = wx.bundleInfo.name;
            if (!aq[wk]) {
              aq[wk] = [];
            }
            if (!Array.isArray(wY)) {
              wY = [wY];
            }
            var wQ = aq[wk].length + 0x1;
            wY.forEach(function (wH, wc) {
              var wp = wQ + wc;
              var wh = "$CSS-" + wx.bundleInfo.name + '-' + wp;
              wD.push(wh);
              (function (wg, wE, wU) {
                if (-0x1 === aq[wE].indexOf(wg)) {
                  var wJ = document.createElement("style");
                  wJ.id = wg;
                  wJ.innerHTML = wU;
                  document.head.appendChild(wJ);
                  aq[wE].push(wg);
                }
              })(wh, wx.bundleInfo.name, wH);
            });
            return wD;
          }
          function aY(wY, wx) {
            var wD = new plugin.Loader();
            return new Promise(function (wk, wQ) {
              wD.onLoad = function (wH) {
                wk(wH.response);
              };
              wD.onError = function (wH) {
                wQ(wH);
              };
              wD.load([{
                'src': wY,
                'type': plugin.LoadType.Image,
                'maxAttemptCount': wx
              }]);
            });
          }
          function ax(wY, wx, wD) {
            var wk = new plugin.Loader();
            return new Promise(function (wQ, wH) {
              wk.onLoad = function (wc) {
                var wp = aV(wc.response, wx);
                wQ(wp);
              };
              wk.onError = function (wc) {
                wH(wc);
              };
              wk.load([{
                'src': wY,
                'type': plugin.LoadType.Text,
                'maxAttemptCount': wD
              }]);
            });
          }
          function aD(wY, wx) {
            var wD = new plugin.Loader();
            return new Promise(function (wk, wQ) {
              wD.onLoad = function (wH) {
                wk(wH.response);
              };
              wD.onError = function (wH) {
                wQ(wH);
              };
              wD.load([{
                'src': wY,
                'type': plugin.LoadType.Blob,
                'maxAttemptCount': wx
              }]);
            });
          }
          function ak(wY, wx) {
            var wD = aq[wx].indexOf(wY);
            if (-0x1 !== wD) {
              var wk = document.getElementById(wY);
              if (wk && wk.parentElement) {
                wk.remove();
              }
              aq[wx].splice(wD, 0x1);
            }
          }
          var aQ = Object.freeze({
            '__proto__': null,
            'appendStyles': aW,
            'getBase64AtlasData': function (wY, wx) {
              var wD = [];
              wY.forEach(function (wk, wQ) {
                aL.parsePlistData(wk.plistPath, function (wH) {
                  var wc = wH[0x0].frames;
                  var wp = [];
                  wk.textureList.forEach(function (wh) {
                    if (undefined === wc[wh]) {
                      throw Error("texture :" + wh + " not found in " + wk.plistPath);
                    }
                    var wg = wc[wh].textureRect;
                    var wE = wc[wh].textureRotated;
                    if (undefined !== wg) {
                      var wU = wg.match(/\d+/g);
                      if (wU) {
                        var wJ = wU.map(Number);
                        wp.push({
                          'x': wJ[0x0],
                          'y': wJ[0x1],
                          'width': wJ[0x2],
                          'height': wJ[0x3],
                          'isRotate': wE
                        });
                      }
                    }
                  });
                  wp.forEach(function (wh) {
                    wD.push(aM(wk.resolvePath, wh, wk.colour));
                  });
                  if (wY.length - 0x1 === wQ) {
                    Promise.all(wD).then(function (wh) {
                      var wg = [];
                      wh.forEach(function (wE) {
                        wg.push(wE);
                      });
                      if (wx) {
                        wx(wg, undefined);
                      }
                    })["catch"](function (wh) {
                      if (wx) {
                        wx(undefined, wh);
                      }
                    });
                  }
                });
              });
            },
            'getBase64ImageData': aR,
            'loadImageUrlAsBlob': aB,
            'loadLocale': function (wY, wx) {
              return new Promise(function (wD, wk) {
                var wQ = new plugin.Loader();
                wQ.onLoad = function (wH) {
                  var wc = wH.response;
                  for (var wp in wc) if (wc[wp]) {
                    shell.I18n.extend(wc[wp], wp);
                  }
                  wD(wc);
                };
                wQ.onError = function () {
                  var wH = shell.Error;
                  var wc = shell.ClientError;
                  var wp = new wH(wc.Domain, wc.GameLoadResourceError);
                  wk(wp);
                };
                wQ.load([{
                  'src': wY,
                  'type': plugin.LoadType.Json,
                  'maxAttemptCount': wx
                }]);
              });
            },
            'loadResource': aK,
            'loadSpriteSheet': aS,
            'removeStyles': function (wY, wx) {
              if (!Array.isArray(wY)) {
                wY = [wY];
              }
              wY.forEach(function (wD) {
                ak(wD, wx.bundleInfo.name);
              });
            },
            'resolveCSS': aV,
            'resolveCSSWithImage': function (wY, wx, wD) {
              var wk = wD ? wD.resource.resolveUrl(wx) : wx;
              return wY.replace(/url\((.*?)\)/g, function () {
                return "url(" + wk + ')';
              });
            },
            'tintImage': ab,
            'unloadAllBundleStyles': function (wY) {
              var wx = wY.bundleInfo.name;
              if (aq[wx]) {
                aq[wx].map(function (wD) {
                  return wD;
                }).forEach(function (wD) {
                  ak(wD, wx);
                });
                aq[wx].length = 0x0;
              }
            }
          });
          var aH = XO(aQ);
          Object.defineProperty(al, "__esModule", {
            'value': true
          });
          al.Img = undefined;
          var ac = __importDefault(f);
          var ag = function (wY) {
            function wx(wD) {
              var wk = wY.call(this, wD) || this;
              wk.ot = true;
              wk.state = {
                'url': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=",
                'status': "loading"
              };
              return wk;
            }
            __extends(wx, wY);
            wx.prototype.lt = function () {
              var wD;
              var wk = this;
              wD = this.props.src;
              new Promise(function (wQ, wH) {
                if (!wD) {
                  wH("Empty url or undefined url passed in");
                }
                var wc = wD;
                aH.loadImageUrlAsBlob(wD).then(function (wp) {
                  wc = URL.createObjectURL(wp);
                  wQ(wc);
                })["catch"](function (wp) {
                  wH(wp);
                });
              }).then(function (wQ) {
                if (wk.ot) {
                  wk.setState({
                    'url': wQ,
                    'status': "loaded"
                  });
                }
              })["catch"](function (wQ) {
                if (wk.ot) {
                  wk.setState({
                    'url': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=",
                    'status': "url failed"
                  });
                  if (wk.props.onError) {
                    wk.props.onError(wQ, wk.state.status);
                  }
                }
              });
            };
            wx.prototype.componentDidUpdate = function (wD) {
              if (this.props.src !== wD.src) {
                this.lt();
              }
            };
            wx.prototype.componentDidMount = function () {
              this.lt();
            };
            wx.prototype.componentWillUnmount = function () {
              this.ot = false;
            };
            wx.prototype.st = function (wD) {
              if ("loaded" === this.state.status) {
                URL.revokeObjectURL(this.state.url);
              }
              if (this.props.onLoad) {
                this.props.onLoad(wD, "loaded");
              }
            };
            wx.prototype.ut = function (wD) {
              if (this.props.onClick) {
                this.props.onClick(wD);
              }
            };
            wx.prototype.ht = function (wD) {
              if (this.props.onError) {
                this.props.onError(wD, "image failed");
              }
            };
            wx.prototype.render = function () {
              var wD = this.props;
              var wk = wD.forwardedRef;
              var wQ = wD.alt;
              var wH = __rest(wD, ["forwardedRef", "alt"]);
              return ac["default"].createElement("img", __assign({}, wH, {
                'src': this.state.url,
                'alt': wQ || "image",
                'onLoad': this.st.bind(this),
                'onError': this.ht.bind(this),
                'onClick': this.ut.bind(this),
                'ref': wk
              }));
            };
            return wx;
          }(ac["default"].Component);
          al.Img = ac["default"].forwardRef(function (wY, wx) {
            return ac["default"].createElement(ag, __assign({}, wY, {
              'forwardedRef': wx
            }));
          });
          (function (wY) {
            Object.defineProperty(wY, "__esModule", {
              'value': true
            });
            wY.Img = undefined;
            Object.defineProperty(wY, "Img", {
              'enumerable': true,
              'get': function () {
                return al.Img;
              }
            });
          })(aO);
          var aJ = A.div(G5 || (G5 = v5(["\n    text-align: center;\n    margin: auto 20px;\n    line-height: ", ";\n"], ["\n    text-align: center;\n    margin: auto 20px;\n    line-height: ", ";\n"])), "land" === shell.environment.getOrientationMode() ? 0.8624999999999999 : 1.15);
          0x64;
          var aT = A.div(G6 || (G6 = v5(["\n    word-wrap: break-word;\n    transform: scale(", ");\n    transform-origin: left;\n    width: ", "%;\n"], ["\n    word-wrap: break-word;\n    transform: scale(", ");\n    transform-origin: left;\n    width: ", "%;\n"])), "land" === shell.environment.getOrientationMode() ? 0.75 : 0x1, "land" === shell.environment.getOrientationMode() ? 133.33333333333334 : 0x64);
          var ay = A(aT)(G7 || (G7 = v5(["\n    font-size: 12px;\n"], ["\n    font-size: 12px;\n"])));
          var aI = A(aT)(G8 || (G8 = v5(["\n    padding-top: ", "px;\n    font-size: 11px;\n    opacity: 0.5;\n"], ["\n    padding-top: ", "px;\n    font-size: 11px;\n    opacity: 0.5;\n"])), "land" === shell.environment.getOrientationMode() ? 4.5 : 0x6);
          var aP = A.div(G9 || (G9 = v5(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), function (wY) {
            return wY.themeColor || "rgb(255,255,255,1)";
          });
          var aC = A(aT)(Gv || (Gv = v5(["\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    font-size: 12px;\n"], ["\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    font-size: 12px;\n"])), "land" === shell.environment.getOrientationMode() ? 14.399999999999999 : 0x30, "land" === shell.environment.getOrientationMode() ? 9.9 : 0x21);
          var G0 = A.div(GX || (GX = v5(["\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    font-size: 11px;\n"], ["\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    font-size: 11px;\n"])), "land" === shell.environment.getOrientationMode() ? 14.399999999999999 : 0x30, "land" === shell.environment.getOrientationMode() ? 9.9 : 0x21);
          var G1 = A(aT)(GF || (GF = v5(["\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    font-size: 12px;\n"], ["\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    font-size: 12px;\n"])), "land" === shell.environment.getOrientationMode() ? 11.25 : 0xf, "land" === shell.environment.getOrientationMode() ? 24.75 : 0x21);
          var G2 = A.div(Ga || (Ga = v5(["\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    font-size: 11px;\n"], ["\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    font-size: 11px;\n"])), "land" === shell.environment.getOrientationMode() ? 11.25 : 0xf, "land" === shell.environment.getOrientationMode() ? 24.75 : 0x21);
          var G3 = A.div(GG || (GG = v5(["\n    margin-top: ", "px;\n"], ["\n    margin-top: ", "px;\n"])), "land" === shell.environment.getOrientationMode() ? 7.5 : 0xa);
          var G5;
          var G6;
          var G7;
          var G8;
          var G9;
          var Gv;
          var GX;
          var GF;
          var Ga;
          var GG;
          var Gw;
          var GZ;
          var GN;
          var Gf;
          var Gz;
          var Gm;
          var Gu;
          var Gs;
          var Gj;
          var GO = A.div(Gw || (Gw = v5(["\n    margin: ", "px auto;\n    transform: scale(", ");\n    height: ", "px;\n    display: inline-block;\n"], ["\n    margin: ", "px auto;\n    transform: scale(", ");\n    height: ", "px;\n    display: inline-block;\n"])), "land" === shell.environment.getOrientationMode() ? 9.75 : 0xd, "land" === shell.environment.getOrientationMode() ? 0.75 : 0x1, "land" === shell.environment.getOrientationMode() ? 75 : 0x64);
          var Gl = A.div(GZ || (GZ = v5(["\n    margin: ", "px auto;\n    width: ", "px;\n    height: ", "px;\n"], ["\n    margin: ", "px auto;\n    width: ", "px;\n    height: ", "px;\n"])), "land" === shell.environment.getOrientationMode() ? 9.75 : 0xd, "land" === shell.environment.getOrientationMode() ? 75 : 0x64, "land" === shell.environment.getOrientationMode() ? 75 : 0x64);
          var GA = A(aT)(GN || (GN = v5(["\n    padding: ", "px 0px;\n"], ["\n    padding: ", "px 0px;\n"])), "land" === shell.environment.getOrientationMode() ? 1.5 : 0x2);
          var GL = A.section(Gf || (Gf = v5(["\n    width: ", "px;\n    margin: auto;\n"], ["\n    width: ", "px;\n    margin: auto;\n"])), "land" === shell.environment.getOrientationMode() ? 210 : 0x118);
          var GM = A.button(Gz || (Gz = v5(["\n    width: 85%;\n    margin: ", "px auto;\n    border: none;\n    background-color: ", ";\n    color: white;\n    font-size: 14px;\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n"], ["\n    width: 85%;\n    margin: ", "px auto;\n    border: none;\n    background-color: ", ";\n    color: white;\n    font-size: 14px;\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n"])), "land" === shell.environment.getOrientationMode() ? 3.75 : 0x5, function (wY) {
            return wY.themeColor || "rgb(255,255,255,1)";
          }, "land" === shell.environment.getOrientationMode() ? 6 : 0x8);
          var GR = A.button(Gm || (Gm = v5(["\n    width: 85%;\n    margin: ", "px auto;\n    border: 1px solid rgba(0,0,0,0.3);\n    background-color: rgba(48,48,60,1);\n    color: ", ";\n    font-size: 14px;\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n"], ["\n    width: 85%;\n    margin: ", "px auto;\n    border: 1px solid rgba(0,0,0,0.3);\n    background-color: rgba(48,48,60,1);\n    color: ", ";\n    font-size: 14px;\n    padding: ", "px 0px;\n    border-radius: 2px;\n    text-align: center;\n    cursor: pointer;\n    font-family: inherit;\n"])), "land" === shell.environment.getOrientationMode() ? 3.75 : 0x5, function (wY) {
            return wY.themeColor || "rgb(255,255,255,1)";
          }, "land" === shell.environment.getOrientationMode() ? 6 : 0x8);
          var Gq = v7.formatCurrency;
          var GK = shell.I18n;
          var GS = function (wY) {
            function wx(wD) {
              var wk = wY.call(this, wD) || this;
              wk.ft = function () {
                document.getElementById("morePromotionBtn").blur();
                wD.onMorePromotionClick();
              };
              wk.gt = function () {
                document.getElementById("laterBtn").blur();
                wD.onLaterClick();
              };
              return wk;
            }
            v0(wx, wY);
            wx.prototype.shouldComponentUpdate = function (wD) {
              return this.props.show === wD.show;
            };
            wx.prototype.render = function () {
              var wD = this.props.data;
              var wk = wD.status;
              var wQ = wD.bonusWalletName;
              var wH = wD.bonusID;
              var wc = wD.expiredDate;
              var wp = wD.expiredTime;
              var wh = vd.gameIconUrl;
              var wg = vd.gameThemeColor;
              var wE = this.Z(wD);
              vd.status = wk;
              return f.createElement(aJ, null, f.createElement("section", null, f.createElement(ay, null, wQ), f.createElement(aI, null, GK.t("BonusWallet.Offer", {
                'id': wH.toString()
              }))), wh ? f.createElement(aO.Img, {
                'src': wh,
                'alt': "game icon",
                'style': {
                  'margin': ''.concat("land" === shell.environment.getOrientationMode() ? 9.75 : 0xd, "px auto"),
                  'width': ''.concat("land" === shell.environment.getOrientationMode() ? 75 : 0x64, 'px'),
                  'height': ''.concat("land" === shell.environment.getOrientationMode() ? 75 : 0x64, 'px')
                }
              }) : f.createElement(GO, null, f.createElement("span", {
                'className': "wallet-plugin-sprite wallet-plugin-default_icon"
              })), f.createElement(aP, {
                'themeColor': wg
              }, wE.title), f.createElement(aC, null, wE.desc), f.createElement("div", null, wE.amt), f.createElement(G0, null, wE.bonusRatioContent, wE.rollOverModeContent, wE.maxConversionRateContent, f.createElement(GA, null, " ", ''.concat(GK.t("BonusWallet.Expiry"), " ").concat(wc, " ").concat(wp))), f.createElement(GL, null, wE.continueBtnContent, wE.morePromotionBtnContent, f.createElement(GR, {
                'id': "laterBtn",
                'onClick': this.gt,
                'themeColor': wg
              }, f.createElement(aT, null, wE.btmBtn))));
            };
            wx.prototype.Z = function (wD) {
              var wk = wD.status;
              var wQ = wD.balanceAmount;
              var wH = wD.key;
              var wc = wD.keySelection;
              var wp = wD.rollOverMode;
              var wh = wD.bonusRatioAmount;
              var wg = wD.maximumConversionAmount;
              if (0x2 === wk) {
                return {
                  'title': GK.t("BonusWallet.BonusWalletExpiredTitle"),
                  'desc': GK.t("BonusWallet.BonusWalletExpiredNoPrize"),
                  'amt': '',
                  'bonusRatioContent': null,
                  'rollOverModeContent': null,
                  'maxConversionRateContent': null,
                  'continueBtnContent': null,
                  'morePromotionBtnContent': f.createElement(GM, {
                    'id': "morePromotionBtn",
                    'onClick': this.ft,
                    'themeColor': vd.gameThemeColor
                  }, f.createElement(aT, null, GK.t("BonusWallet.MoreOffers"))),
                  'btmBtn': GK.t("BonusWallet.BackToGame")
                };
              }
              var wE = Gq(wh);
              var wU = Gq(wg);
              var wJ = Gq(wQ);
              var wT = 0x1 === wp || wc && wH === wc[0x1] ? GK.t("BonusWallet.Cash") : GK.t("BonusWallet.Bonus");
              return {
                'title': GK.t("BonusWallet.BonusWalletContinueTitle"),
                'desc': GK.t("BonusWallet.BonusWalletContinueDesc"),
                'amt': wJ,
                'bonusRatioContent': f.createElement(GA, null, ''.concat(GK.t("BonusWallet.BonusRatioLabelFull"), ": ").concat(wE)),
                'rollOverModeContent': f.createElement(GA, null, ''.concat(GK.t("BonusWallet.RollOverMode"), ": ").concat(wT)),
                'maxConversionRateContent': wg > 0x0 ? f.createElement(GA, null, GK.t("BonusWallet.MaximumConversionRate", {
                  'rate': wU
                })) : '',
                'continueBtnContent': f.createElement(GM, {
                  'onClick': this.props.onContinueClick,
                  'themeColor': vd.gameThemeColor
                }, f.createElement(aT, null, GK.t("BonusWallet.ContinueGame"))),
                'morePromotionBtnContent': f.createElement(GR, {
                  'id': "morePromotionBtn",
                  'onClick': this.ft,
                  'themeColor': vd.gameThemeColor
                }, f.createElement(aT, null, GK.t("BonusWallet.MoreOffers"))),
                'btmBtn': GK.t("BonusWallet.NextTime")
              };
            };
            return wx;
          }(f.Component);
          var Gd = v7.formatCurrency;
          var GB = shell.I18n;
          var GV = function (wY) {
            function wx(wD) {
              var wk = wY.call(this, wD) || this;
              wk.ft = function () {
                var wQ = document.getElementById("morePromotionBtn");
                if (!wQ) {
                  wQ = document.getElementById("topBtn");
                }
                wQ.blur();
                wD.onMorePromotionClick();
              };
              wk.gt = function () {
                document.getElementById("laterBtn").blur();
                wD.onLaterClick();
              };
              return wk;
            }
            v0(wx, wY);
            wx.prototype.shouldComponentUpdate = function (wD) {
              return this.props.show === wD.show;
            };
            wx.prototype.render = function () {
              var wD = this.props.data;
              var wk = wD.freeGameName;
              var wQ = wD.freeGameID;
              var wH = wD.status;
              var wc = vd.gameIconUrl;
              var wp = vd.gameThemeColor;
              var wh = this.Z(wD);
              vd.status = wH;
              return f.createElement(aJ, null, f.createElement("section", null, f.createElement(ay, null, wk), f.createElement(aI, null, GB.t("FreeGame.Offer", {
                'id': wQ.toString()
              }))), wc ? f.createElement(aO.Img, {
                'src': wc,
                'alt': "game icon",
                'style': {
                  'margin': ''.concat("land" === shell.environment.getOrientationMode() ? 9.75 : 0xd, "px auto"),
                  'width': ''.concat("land" === shell.environment.getOrientationMode() ? 75 : 0x64, 'px'),
                  'height': ''.concat("land" === shell.environment.getOrientationMode() ? 75 : 0x64, 'px')
                }
              }) : f.createElement(Gl, {
                'className': "wallet-plugin-sprite wallet-plugin-default_icon"
              }), f.createElement(aP, {
                'themeColor': wp
              }, wh.title), f.createElement(G1, null, wh.desc), f.createElement(G3, null, wh.amt), f.createElement(G2, null, f.createElement(GA, null, wh.withdrawalLimit), f.createElement(GA, null, wh.expiryDate)), f.createElement(GL, null, f.createElement(GM, {
                'id': "topBtn",
                'onClick': wh.topBtnClickEvent,
                'themeColor': wp
              }, f.createElement(aT, null, wh.topBtn)), wh.midBtn.length > 0x0 && f.createElement(GR, {
                'id': "morePromotionBtn",
                'onClick': this.ft,
                'themeColor': wp
              }, f.createElement(aT, null, wh.midBtn)), f.createElement(GR, {
                'id': "laterBtn",
                'onClick': this.gt,
                'themeColor': wp
              }, f.createElement(aT, null, wh.btmBtn))));
            };
            wx.prototype.Z = function (wD) {
              var wk = wD.status;
              var wQ = wD.conversionAmount;
              var wH = wD.maximumConversionAmount;
              var wc = wD.gameCount;
              var wp = wD.balanceAmount;
              var wh = wD.expiredDate;
              var wg = wD.expiredTime;
              var wE = wD.conversionType;
              var wU = Gd(wp);
              var wJ = Gd(wQ);
              var wT = Gd(wH);
              switch (wk) {
                case 0x3:
                case 0x4:
                  if (wQ > 0x0) {
                    var wy = wE === 'B';
                    return {
                      'title': GB.t("FreeGame.Congratulations"),
                      'desc': GB.t("FreeGame.FreeGameCompletedWin"),
                      'amt': wJ,
                      'withdrawalLimit': wH > 0x0 ? GB.t("FreeGame.MaximumConversionRate", {
                        'rate': wT
                      }) : '',
                      'expiryDate': wy ? GB.t("FreeGame.ConvertToBonusWallet") : GB.t("FreeGame.ConvertToCashWallet"),
                      'topBtn': wy ? GB.t("FreeGame.UseBonusWallet") : GB.t("FreeGame.MoreOffers"),
                      'midBtn': wy ? GB.t("FreeGame.MoreOffers") : '',
                      'btmBtn': GB.t("FreeGame.BackToGame"),
                      'topBtnClickEvent': wy ? this.props.onSwitchBonusWalletClick : this.ft
                    };
                  }
                  return {
                    'title': GB.t("FreeGame.FreeGameCompletedNoWin"),
                    'desc': '',
                    'amt': '',
                    'withdrawalLimit': '',
                    'expiryDate': '',
                    'topBtn': GB.t("FreeGame.MoreOffers"),
                    'midBtn': '',
                    'btmBtn': GB.t("FreeGame.BackToGame"),
                    'topBtnClickEvent': this.ft
                  };
                case 0x2:
                  return {
                    'title': GB.t("FreeGame.FreeGameExpired"),
                    'desc': GB.t("FreeGame.FreeGameExpiredNoPrize"),
                    'amt': '',
                    'withdrawalLimit': '',
                    'expiryDate': ''.concat(GB.t("FreeGame.ExpiryDate"), ": ").concat(wh, " ").concat(wg),
                    'topBtn': GB.t("FreeGame.MoreOffers"),
                    'midBtn': '',
                    'btmBtn': GB.t("FreeGame.BackToGame"),
                    'topBtnClickEvent': this.ft
                  };
                default:
                  return {
                    'title': GB.t("FreeGame.FreeGameViewRemaining", {
                      'games': wc.toString()
                    }),
                    'desc': GB.t("FreeGame.FreeGameViewAccumulated"),
                    'amt': wU,
                    'withdrawalLimit': wH > 0x0 ? GB.t("FreeGame.MaximumConversionRate", {
                      'rate': wT
                    }) : '',
                    'expiryDate': ''.concat(GB.t("FreeGame.ExpiryDate"), ": ").concat(wh, " ").concat(wg),
                    'topBtn': GB.t("FreeGame.ContinueGame"),
                    'midBtn': GB.t("FreeGame.MoreOffers"),
                    'btmBtn': GB.t("FreeGame.NextTime"),
                    'topBtnClickEvent': this.props.onContinueClick
                  };
              }
            };
            return wx;
          }(f.Component);
          var Go = shell.I18n;
          var Gb = function (wY) {
            function wx(wD) {
              var wk = wY.call(this, wD) || this;
              wk.gt = function () {
                document.getElementById("btn").blur();
                wD.onLaterClick();
              };
              return wk;
            }
            v0(wx, wY);
            wx.prototype.shouldComponentUpdate = function (wD) {
              return this.props.show === wD.show;
            };
            wx.prototype.render = function () {
              var wD = this.props.data;
              var wk = wD.freeGameName;
              var wQ = wD.freeGameID;
              var wH = vd.gameIconUrl;
              var wc = vd.gameThemeColor;
              var wp = this.Z(wD);
              return f.createElement(aJ, null, f.createElement("section", null, f.createElement(ay, null, wk), f.createElement(aI, null, Go.t("FreeGame.Offer", {
                'id': wQ.toString()
              }))), wH ? f.createElement(aO.Img, {
                'src': wH,
                'alt': "game icon",
                'style': {
                  'margin': ''.concat("land" === shell.environment.getOrientationMode() ? 9.75 : 0xd, "px auto"),
                  'width': ''.concat("land" === shell.environment.getOrientationMode() ? 75 : 0x64, 'px'),
                  'height': ''.concat("land" === shell.environment.getOrientationMode() ? 75 : 0x64, 'px')
                }
              }) : f.createElement(Gl, {
                'className': "wallet-plugin-sprite wallet-plugin-default_icon"
              }), f.createElement(aP, {
                'themeColor': wc
              }, wp.title), f.createElement(G0, null, f.createElement(GA, null, wp.expiryDate)), f.createElement(GL, null, f.createElement(GM, {
                'id': "btn",
                'onClick': wp.btnClickEvent,
                'themeColor': wc
              }, f.createElement(aT, null, wp.btn))));
            };
            wx.prototype.Z = function (wD) {
              var wk = wD.status;
              var wQ = wD.gameCount;
              var wH = wD.expiredDate;
              var wc = wD.expiredTime;
              return 0x4 === wk ? {
                'title': Go.t("FreeGame.FreeGameCompletedNoWin"),
                'expiryDate': '',
                'btn': Go.t("FreeGame.BackToGame"),
                'btnClickEvent': this.gt
              } : {
                'title': Go.t("FreeGame.FreeGameViewRemaining", {
                  'games': wQ.toString()
                }),
                'expiryDate': ''.concat(Go.t("FreeGame.ExpiryDate"), ": ").concat(wH, " ").concat(wc),
                'btn': Go.t("FreeGame.ContinueGame"),
                'btnClickEvent': this.props.onContinueClick
              };
            };
            return wx;
          }(f.Component);
          var GW = A.div(Gu || (Gu = v5(["\n    position: absolute;\n    height: 52%;\n    width: 100%;\n"], ["\n    position: absolute;\n    height: 52%;\n    width: 100%;\n"])));
          var GY = A(GW)(Gs || (Gs = v5(["\n    height: 100%;\n    width: 58%;\n    left: 42%;\n"], ["\n    height: 100%;\n    width: 58%;\n    left: 42%;\n"])));
          var Gx = function (wY) {
            function wx() {
              return null !== wY && wY.apply(this, arguments) || this;
            }
            v0(wx, wY);
            wx.prototype.shouldComponentUpdate = function (wD) {
              return this.props.viewType !== wD.viewType;
            };
            wx.prototype.render = function () {
              return "land" === shell.environment.getOrientationMode() ? f.createElement(GY, {
                'onClick': this.props.onClick
              }) : 0x1 === this.props.viewType ? f.createElement(GW, {
                'onClick': this.props.onClick
              }) : null;
            };
            return wx;
          }(f.Component);
          !function (wY) {
            wY[wY.ANIM = 0x0] = "ANIM";
            wY[wY.NO_ANIM = 0x1] = "NO_ANIM";
          }(Gj || (Gj = {}));
          var GD = N("WalletEventEnum", {
            'EN_WALLET_LIST_ANIM': Gj.ANIM,
            'EN_WALLET_LIST_NO_ANIM': Gj.NO_ANIM
          });
          function Gk(wY, wx) {
            if (undefined === wx) {
              wx = 0x0;
            }
            vM.context.event.emit("Toast.Show", {
              'toastStyle': "Message",
              'message': wY,
              'duration': wx,
              'imageSrc': '',
              'toastPosition': "Bottom"
            });
          }
          function GQ(wY) {
            var wx = [];
            vM.context.event.emit("Alert.Show", function (wD, wk) {
              var wQ = [];
              var wH = 0x0;
              if (wD.actions) {
                wD.actions.forEach(function (wc) {
                  wQ.push({
                    'label': wc.title,
                    'handler': wH
                  });
                  wk.push(wc.handler);
                  wH++;
                });
              }
              return {
                'title': wD.title_message,
                'content': wD.content_message,
                'actions': wQ
              };
            }(wY, wx), function (wD) {
              var wk = wD.response;
              var wQ = wx[wk];
              if (wQ) {
                wQ();
              }
            });
          }
          function Gp(wY) {
            var wx = wY.view;
            var wD = parseInt(wx, 0x0);
            return 0x3 === wD || 0x5 === wD;
          }
          var Gh;
          var Gg;
          var GE = A(L.div)(Gh || (Gh = v5(["\n    color: white;\n    background-color: rgba(40,40,50,1);\n    position: relative;\n    border-radius: ", ";\n    height: ", ";\n    width: ", ";\n    font-size: ", "px;\n"], ["\n    color: white;\n    background-color: rgba(40,40,50,1);\n    position: relative;\n    border-radius: ", ";\n    height: ", ";\n    width: ", ";\n    font-size: ", "px;\n"])), function (wY) {
            return "land" === wY.orientation ? "inherit" : "8px 8px 0px 0px";
          }, function (wY) {
            return "land" === wY.orientation ? "100%" : "48%";
          }, function (wY) {
            return "land" === wY.orientation ? "42%" : "100%";
          }, "land" === shell.environment.getOrientationMode() ? 12 : 0x10);
          var GU = A(L.div)(Gg || (Gg = v5(["\n    height: 100%;\n    position: relative;\n    color: white;\n    background-color: ", ";\n    display: flex;\n    flex-direction: column;\n    width: ", ";\n    margin: ", ";\n    font-size: ", "px;\n    top: ", ";\n    right: ", ";\n"], ["\n    height: 100%;\n    position: relative;\n    color: white;\n    background-color: ", ";\n    display: flex;\n    flex-direction: column;\n    width: ", ";\n    margin: ", ";\n    font-size: ", "px;\n    top: ", ";\n    right: ", ";\n"])), function (wY) {
            return "land" === wY.orientation && Gp(wY) ? "inherit" : "rgba(40,40,52,1)";
          }, function (wY) {
            return "land" === wY.orientation && !Gp(wY) ? "42%" : "100%";
          }, function (wY) {
            return "land" === wY.orientation ? "inherit" : "0px auto";
          }, "land" === shell.environment.getOrientationMode() ? 12 : 0x10, function (wY) {
            return "land" === wY.orientation ? "inherit" : '0%';
          }, function (wY) {
            return "land" === wY.orientation && !Gp(wY) ? "50%" : "inherit";
          });
          function GJ(wY, wx) {
            var wD;
            var wk;
            if ("land" === shell.environment.getOrientationMode()) {
              var wQ = 0x3 === wY || 0x5 === wY;
              wD = wQ ? {
                'backgroundColor': wx ? "rgba(40,40,52,0)" : "rgba(40,40,52,0.75)",
                'opacity': 0x1
              } : {
                'right': wx ? "50%" : '0%'
              };
              wk = wQ ? {
                'backgroundColor': "rgba(40,40,52,0.75)",
                'opacity': wx ? 0x1 : 0x0
              } : {
                'right': wx ? '0%' : "50%"
              };
            } else {
              wD = {
                'top': wx ? "100%" : '0%'
              };
              wk = {
                'top': wx ? '0%' : "100%"
              };
            }
            var wH = Object.create(null);
            wH.animFrom = wD;
            wH.animTo = wk;
            return wH;
          }
          var GT;
          var Gy = v7.sequenceCallback;
          var GI = v7.timeoutCallback;
          var GP = shell.I18n;
          var GC = shell.ga;
          var w0 = shell.environment;
          var w2 = A.div(GT || (GT = v5(["\n    width: 100%;\n    height: 100%;\n"], ["\n    width: 100%;\n    height: 100%;\n"])));
          var w3 = function (wY) {
            function wx(wD) {
              var wk = wY.call(this, wD) || this;
              wk.vt = function (wQ, wH) {
                if (!wQ && wH && 'C' === vd.transactionInfo.wt) {
                  vM.context.event.emit("Game.UpdateTransactionInfo", {
                    'balance': wH.dt.cb
                  });
                }
                wk.xt(0x1, wQ, wH);
              };
              wk.Ct = wk.xt.bind(wk, 0x2);
              wk.yt = wk.xt.bind(wk, 0x4);
              wk.kt = wk.Bt.bind(wk);
              wk.Wt = wk.St.bind(wk);
              wk.state = {
                'viewType': wD.initViewType,
                'error': undefined,
                'data': undefined,
                'show': true
              };
              wk.Gt = document.getElementById("wallet-container");
              wk.Ot = wk.state.viewType;
              return wk;
            }
            v0(wx, wY);
            wx.prototype.componentDidMount = function () {
              var wD = this;
              switch (this.props.initViewType) {
                case 0x1:
                  var wk = vM.context.event;
                  var wQ = this.Gt.style;
                  var wH = parseFloat(wQ.height);
                  var wc = {
                    'label': GP.t("General.ResourceLoadingMessage"),
                    'height': 0xc8,
                    'y': 0.78 * wH
                  };
                  if (this.props.walletListAnimState === GD.EN_WALLET_LIST_ANIM) {
                    var wp = {
                      'inAnimate': "Slide",
                      'inDuration': 0.3,
                      'inValue': {
                        'y': 1.78 * wH
                      },
                      'inEasing': "easeOutCubic"
                    };
                    wc = v1(v1({}, wc), wp);
                  }
                  if ("land" === w0.getOrientationMode()) {
                    var wh = parseFloat(wQ.width);
                    var wg = {
                      'width': 0.42 * wh,
                      'x': 0.21 * wh,
                      'y': 0.557 * wH,
                      'inAnimate': "Slide",
                      'inDuration': 0.3,
                      'inValue': {
                        'x': -1.21 * wh
                      },
                      'inEasing': "easeOutCubic"
                    };
                    wc = v1(v1({}, wc), wg);
                  }
                  wk.emit("Loading.Show", wc);
                  GI(0.3)(function () {
                    wD.Ft(wD.vt);
                  });
                  break;
                case 0x2:
                  this.Tt(0x1, this.Ct);
                  break;
                case 0x4:
                  this.Nt(0x1, this.yt);
              }
            };
            wx.prototype.componentDidUpdate = function () {
              this.Ot = this.state.viewType;
              if (this._t) {
                this._t();
              }
              this._t = undefined;
            };
            wx.prototype.render = function () {
              switch (this.state.viewType) {
                case 0x1:
                  return this.zt();
                case 0x2:
                  return this.At();
                case 0x3:
                  return this.Lt();
                case 0x4:
                  return this.It();
                case 0x5:
                  return this.Dt();
                default:
                  return null;
              }
            };
            wx.prototype.zt = function () {
              var wD = this;
              var wk = vM.context.event;
              var wQ = function (wc, wp) {
                var wh;
                var wg;
                if ("land" === shell.environment.getOrientationMode()) {
                  wh = {
                    'right': wc ? "50%" : '0%'
                  };
                  wg = {
                    'right': wc ? '0%' : "50%"
                  };
                } else {
                  wh = wp ? {
                    'top': wc ? "100%" : "52%"
                  } : {
                    'top': "52%"
                  };
                  wg = {
                    'top': wc ? "52%" : "100%"
                  };
                }
                var wE = Object.create(null);
                wE.animFrom = wh;
                wE.animTo = wg;
                return wE;
              }(this.state.show, this.props.walletListAnimState === GD.EN_WALLET_LIST_ANIM);
              var wH = function (wc) {
                var wp = wD.Gt.style;
                var wh = parseFloat(wp.height);
                var wg = {
                  'label': GP.t("General.ResourceLoadingMessage"),
                  'y': 0.557 * wh,
                  'height': 0xc8,
                  'inAnimate': "Slide",
                  'inDuration': 0.3,
                  'inValue': {
                    'y': 1.557 * wh
                  },
                  'inEasing': "easeOutCubic"
                };
                if ("land" === w0.getOrientationMode()) {
                  var wE = parseFloat(wp.width);
                  var wU = {
                    'width': 0.42 * wE,
                    'x': 0.21 * wE,
                    'inValue': {
                      'x': -1.21 * wE
                    }
                  };
                  wg = v1(v1({}, wg), wU);
                }
                wk.emit("Loading.Show", wg);
                GI(0.3)(wc);
              };
              return f.createElement(w2, null, f.createElement(Gx, {
                'viewType': 0x1,
                'onClick': function () {
                  wk.emit("Loading.Hide");
                  wD.setState({
                    'show': false
                  });
                }
              }), f.createElement(M, {
                'native': true,
                'from': wQ.animFrom,
                'to': wQ.animTo,
                'config': {
                  'tension': 0xa3,
                  'friction': 0x15,
                  'clamp': true,
                  'velocity': 0xa
                },
                'onStart': this.kt,
                'onRest': this.Wt
              }, function (wc) {
                return f.createElement(GE, {
                  'id': "walletListView",
                  'style': wc,
                  'orientation': shell.environment.getOrientationMode()
                }, f.createElement(Xs, {
                  'onCloseButtonClick': function () {
                    if (wD.Rt) {
                      wD.Rt();
                    }
                    wD.Rt = undefined;
                    if (wD.jt) {
                      wD.jt();
                    }
                    wD.jt = undefined;
                    if (wD.Mt) {
                      wD.Mt();
                    }
                    wD.Mt = undefined;
                    wD.setState({
                      'show': false
                    });
                  },
                  'onCashWalletClick': function (wp) {
                    var wh = vS.walletType;
                    if (!(wh !== 'B' && wh !== 'G')) {
                      GQ({
                        'title_message': GP.t("WalletHelper.ChangeWalletTitle"),
                        'content_message': GP.t("WalletHelper.ChangeWalletDesc"),
                        'actions': [{
                          'title': GP.t("WalletHelper.Cancel"),
                          'handler': undefined
                        }, {
                          'title': GP.t("WalletHelper.Confirm"),
                          'handler': function () {
                            wD.props.changeWorld(wp);
                            vd.status = undefined;
                          }
                        }]
                      });
                    }
                  },
                  'onBonusWalletClick': function () {
                    wD.setState({
                      'viewType': 0x2,
                      'error': undefined,
                      'data': undefined
                    });
                    Gy(wH)(function () {
                      wD.Tt(0x1, wD.Ct);
                    });
                  },
                  'onFreeGameClick': function () {
                    wD.setState({
                      'viewType': 0x4,
                      'error': undefined,
                      'data': undefined
                    });
                    Gy(wH)(function () {
                      wD.Nt(0x1, wD.yt);
                    });
                  },
                  'onRetryClick': wD.Et.bind(wD, 0x1, function () {
                    wD.Ft(wD.vt);
                  }),
                  'error': wD.state.error,
                  'data': wD.state.data,
                  'show': wD.state.show
                }));
              }));
            };
            wx.prototype.At = function () {
              var wD = this;
              var wk = vM.context.event;
              var wQ = GJ(0x2, this.state.show);
              return f.createElement(w2, null, f.createElement(Gx, {
                'viewType': 0x2,
                'onClick': function () {
                  wk.emit("Loading.Hide");
                  wD.setState({
                    'show': false
                  });
                }
              }), f.createElement(M, {
                'native': true,
                'from': wQ.animFrom,
                'to': wQ.animTo,
                'config': {
                  'tension': 0xa3,
                  'friction': 0x15,
                  'clamp': true,
                  'velocity': 0xa
                },
                'reset': this.state.viewType !== this.Ot,
                'onStart': this.kt,
                'onRest': this.Wt
              }, function (wH) {
                return f.createElement(GU, {
                  'id': "view",
                  'style': wH,
                  'orientation': shell.environment.getOrientationMode(),
                  'view': '2'
                }, f.createElement(az, {
                  'onCloseButtonClick': function () {
                    if (wD.jt) {
                      wD.jt();
                    }
                    wD.jt = undefined;
                    wD.setState({
                      'show': false
                    });
                  },
                  'onBackCashWalletClick': function () {
                    wD.props.changeWorld("0_C");
                    vd.status = undefined;
                  },
                  'onSelectWalletClick': function (wc, wp) {
                    var wh = wc.status;
                    var wg = wc.lockedGameID;
                    var wE = wc.rollOverMode;
                    var wU = wc.keySelection;
                    if (0x7 !== wh) {
                      var wJ = "0_C";
                      switch (wE) {
                        case 0x0:
                        case 0x1:
                          wJ = wc.key;
                          break;
                        case 0x2:
                          wJ = document.getElementById("cash ".concat(wp.toString())).checked ? wU[0x1] : wU[0x0];
                      }
                      wD.props.changeWorld(wJ);
                    } else {
                      wD.props.showLockedDialog(true, wg, true);
                    }
                  },
                  'onDiscardOfferClick': function (wc, wp) {
                    var wh = wc.bonusWalletName;
                    var wg = wc.balanceID;
                    wD.Ut(true, wp, wh, function () {
                      var wE;
                      var wU;
                      wE = function (wJ) {
                        if (wJ) {
                          Gk(wJ.message);
                          wk.emit("Loading.Hide");
                        } else {
                          var wy = JSON.parse(JSON.stringify(wD.Pt));
                          var wI = wy.dt.r;
                          var wP = 0x0;
                          for (var wC = wI.length; wP < wC; wP++) {
                            var Z0 = wI[wP];
                            if (Z0.baid === wg) {
                              Z0.s = 0x6;
                              break;
                            }
                          }
                          wD.xt(0x2, undefined, wy);
                        }
                      };
                      wU = vR({
                        'wid': wg
                      });
                      vL.request("v2/BonusWallet/Cancel", wU, wE);
                    });
                  },
                  'onRetryClick': wD.Et.bind(wD, 0x2, function () {
                    wD.Tt(0x1, wD.Ct);
                  }),
                  'onLoadMoreRequestApi': function (wc, wp) {
                    wD._t = wp;
                    wD.Vt(function () {
                      wD.Tt(wc, wD.Ct);
                    });
                  },
                  'error': wD.state.error,
                  'data': wD.state.data,
                  'show': wD.state.show
                }));
              }));
            };
            wx.prototype.Lt = function () {
              var wD = this;
              var wk = GJ(0x3, this.state.show);
              return f.createElement(M, {
                'native': true,
                'from': wk.animFrom,
                'to': wk.animTo,
                'config': {
                  'tension': 0xa3,
                  'friction': 0x15,
                  'clamp': true,
                  'velocity': 0xa
                },
                'onStart': this.kt,
                'onRest': this.Wt
              }, function (wQ) {
                return f.createElement(GU, {
                  'id': "view",
                  'style': wQ,
                  'orientation': shell.environment.getOrientationMode(),
                  'view': '3'
                }, f.createElement(GS, {
                  'onContinueClick': function () {
                    wD.setState({
                      'show': false
                    });
                  },
                  'onMorePromotionClick': wD.Ht.bind(wD, function () {
                    wD.Tt(0x1, wD.Ct);
                  }),
                  'onLaterClick': function () {
                    wD.props.changeWorld("0_C");
                    vd.status = undefined;
                  },
                  'data': wD.props.initModel,
                  'show': wD.state.show
                }));
              });
            };
            wx.prototype.It = function () {
              var wD = this;
              var wk = vM.context.event;
              var wQ = GJ(0x4, this.state.show);
              return f.createElement(w2, null, f.createElement(Gx, {
                'viewType': 0x4,
                'onClick': function () {
                  wk.emit("Loading.Hide");
                  wD.setState({
                    'show': false
                  });
                }
              }), f.createElement(M, {
                'native': true,
                'from': wQ.animFrom,
                'to': wQ.animTo,
                'config': {
                  'tension': 0xa3,
                  'friction': 0x15,
                  'clamp': true,
                  'velocity': 0xa
                },
                'reset': this.state.viewType !== this.Ot,
                'onStart': this.kt,
                'onRest': this.Wt
              }, function (wH) {
                return f.createElement(GU, {
                  'id': "view",
                  'style': wH,
                  'orientation': shell.environment.getOrientationMode(),
                  'view': '4'
                }, f.createElement(aj, {
                  'onCloseButtonClick': function () {
                    if (wD.Mt) {
                      wD.Mt();
                    }
                    wD.Mt = undefined;
                    wD.setState({
                      'show': false
                    });
                  },
                  'onBackCashWalletClick': function () {
                    wD.props.changeWorld("0_C");
                    vd.status = undefined;
                  },
                  'onSelectFreeGameClick': function (wc) {
                    var wp = wc.status;
                    var wh = wc.lockedGameID;
                    var wg = wc.key;
                    if (0x7 !== wp) {
                      wD.props.changeWorld(wg);
                    } else {
                      wD.props.showLockedDialog(false, wh, true);
                    }
                  },
                  'onDiscardOfferClick': function (wc, wp) {
                    var wh = wc.freeGameName;
                    var wg = wc.balanceID;
                    wD.Ut(false, wp, wh, function () {
                      var wE;
                      var wU;
                      wE = function (wJ) {
                        if (wJ) {
                          Gk(wJ.message);
                          wk.emit("Loading.Hide");
                        } else {
                          var wy = JSON.parse(JSON.stringify(wD.Pt));
                          var wI = wy.dt.r;
                          var wP = 0x0;
                          for (var wC = wI.length; wP < wC; wP++) {
                            var Z0 = wI[wP];
                            if (Z0.baid === wg) {
                              Z0.s = 0x6;
                              break;
                            }
                          }
                          wD.xt(0x4, undefined, wy);
                        }
                      };
                      wU = vR({
                        'wid': wg
                      });
                      vL.request("v2/FreeGameWallet/Cancel", wU, wE);
                    });
                  },
                  'onRetryClick': wD.Et.bind(wD, 0x4, function () {
                    wD.Nt(0x1, wD.yt);
                  }),
                  'onLoadMoreRequestApi': function (wc, wp) {
                    wD._t = wp;
                    wD.Vt(function () {
                      wD.Nt(wc, wD.yt);
                    });
                  },
                  'error': wD.state.error,
                  'data': wD.state.data,
                  'show': wD.state.show
                }));
              }));
            };
            wx.prototype.Dt = function () {
              return 'I' === vS.walletType ? this.Zt() : this.Jt();
            };
            wx.prototype.Jt = function () {
              var wD = this;
              var wk = GJ(0x5, this.state.show);
              return f.createElement(M, {
                'native': true,
                'from': wk.animFrom,
                'to': wk.animTo,
                'config': {
                  'tension': 0xa3,
                  'friction': 0x15,
                  'clamp': true,
                  'velocity': 0xa
                },
                'onStart': this.kt,
                'onRest': this.Wt
              }, function (wQ) {
                return f.createElement(GU, {
                  'id': "view",
                  'style': wQ,
                  'orientation': shell.environment.getOrientationMode(),
                  'view': '5'
                }, f.createElement(GV, {
                  'onContinueClick': function () {
                    wD.setState({
                      'show': false
                    });
                  },
                  'onSwitchBonusWalletClick': function () {
                    wD.Tt(0x1, wD.Ct);
                  },
                  'onMorePromotionClick': wD.Ht.bind(wD, function () {
                    wD.Nt(0x1, wD.yt);
                  }),
                  'onLaterClick': function () {
                    wD.props.changeWorld("0_C");
                    vd.status = undefined;
                  },
                  'data': wD.props.initModel,
                  'show': wD.state.show
                }));
              });
            };
            wx.prototype.Zt = function () {
              var wD = this;
              var wk = GJ(0x5, this.state.show);
              return f.createElement(M, {
                'native': true,
                'from': wk.animFrom,
                'to': wk.animTo,
                'config': {
                  'tension': 0xa3,
                  'friction': 0x15,
                  'clamp': true,
                  'velocity': 0xa
                },
                'onStart': this.kt,
                'onRest': this.Wt
              }, function (wQ) {
                return f.createElement(GU, {
                  'id': "view",
                  'style': wQ,
                  'orientation': shell.environment.getOrientationMode(),
                  'view': '5'
                }, f.createElement(Gb, {
                  'onContinueClick': function () {
                    wD.setState({
                      'show': false
                    });
                  },
                  'onLaterClick': wD.props.changeWorld.bind(wD, "0_C"),
                  'data': wD.props.initModel,
                  'show': wD.state.show
                }));
              });
            };
            wx.prototype.Ft = function (wD) {
              this.Rt = function (wk) {
                var wQ = vR({});
                return vL.request("v2/GameWallet/Get", wQ, wk);
              }(wD);
            };
            wx.prototype.Tt = function (wD, wk) {
              this.jt = function (wQ, wH) {
                var wc = vR({
                  'pn': wQ,
                  'rc': 0x14,
                  's': [0x1, 0x2, 0x5],
                  'rsp': [0x1, 0x5, 0x2],
                  'sb': 0x2,
                  'ob': "created_date"
                });
                return vL.request("v2/BonusWallet/Get", wc, wH);
              }(wD, wk);
            };
            wx.prototype.Nt = function (wD, wk) {
              this.Mt = function (wQ, wH) {
                var wc = vR({
                  'pn': wQ,
                  'rc': 0x14,
                  's': [0x1, 0x2, 0x5],
                  'rsp': [0x1, 0x5, 0x2],
                  'sb': 0x2,
                  'ob': "created_date"
                });
                return vL.request("v2/FreeGameWallet/Get", wc, wH);
              }(wD, wk);
            };
            wx.prototype.xt = function (wD, wk, wQ) {
              var wH;
              if (!(0x1 !== wD && 0x2 !== wD && 0x4 !== wD)) {
                vM.context.event.emit("Loading.Hide");
              }
              if (!(wk && (wH = wk.uicode, GC.sendEvent(GC.CATEGORY_GAME, GC.EVENT_ERROR_REPORT, undefined, "Wallet data get failed", wH), wk.code === shell.NetworkError.HttpAbortError))) {
                this.setState({
                  'viewType': wD,
                  'error': wk,
                  'data': wQ
                });
                this.Pt = wQ;
              }
            };
            wx.prototype.Et = function (wD, wk) {
              var wQ = this;
              GC.sendEvent(GC.CATEGORY_GENERAL, GC.EVENT_RETRY, {
                'name': "Retry query wallet data",
                'context': "Maybe because internet connection lost."
              });
              this.setState({
                'viewType': wD,
                'error': undefined,
                'data': undefined
              });
              Gy(function (wH) {
                var wc = vM.context.event;
                var wp = wQ.Gt.style;
                var wh = parseFloat(wp.height);
                var wg = 0x1 === wD ? 0.78 : 0.557;
                var wE = {
                  'label': GP.t("General.ResourceLoadingMessage"),
                  'y': wh * wg,
                  'height': 0xc8
                };
                if ("land" === w0.getOrientationMode()) {
                  var wU = parseFloat(wp.width);
                  var wJ = {
                    'x': 0.21 * wU,
                    'y': 0.557 * wh,
                    'width': 0.42 * wU
                  };
                  wE = v1(v1({}, wE), wJ);
                }
                wc.emit("Loading.Show", wE);
                GI(0.3)(wH);
              })(wk);
            };
            wx.prototype.Vt = function (wD) {
              var wk = this;
              Gy(function (wQ) {
                var wH = vM.context.event;
                var wc = wk.Gt.style;
                var wp = parseFloat(wc.height);
                var wh = {
                  'y': wp - 0xa
                };
                if ("land" === w0.getOrientationMode()) {
                  var wg = {
                    'x': 0.21 * parseFloat(wc.width),
                    'y': wp + 0xa
                  };
                  wh = v1(v1({}, wh), wg);
                }
                wH.emit("Loading.Show", wh);
                GI(0.3)(wQ);
              })(wD);
            };
            wx.prototype.Ht = function (wD) {
              var wk = this;
              Gy(function (wQ) {
                var wH = parseFloat(wk.Gt.style.height);
                vM.context.event.emit("Loading.Show", {
                  'label': GP.t("General.ResourceLoadingMessage"),
                  'enableBackground': true,
                  'isFullBackground': true,
                  'y': 0.5 * wH,
                  'opacity': 0x1,
                  'inAnimate': "Fade",
                  'inDuration': 0.3,
                  'inValue': 0x0,
                  'outAnimate': "Fade",
                  'outValue': 0x0,
                  'outDuration': 0.3
                });
                GI(0.4)(wQ);
              })(wD);
            };
            wx.prototype.Ut = function (wD, wk, wQ, wH) {
              var wc = this;
              var wp = vM.context.event;
              var wh = wD ? "BonusWallet" : "FreeGame";
              var wg = wD ? "Wallet" : '';
              var wE = GP.t(''.concat(wh, ".Discard").concat(wg, "Title"), {
                'name': wQ
              });
              GQ({
                'title_message': wk ? '' : wE,
                'content_message': wk ? wE : GP.t(''.concat(wh, ".DiscardMessage")),
                'actions': [{
                  'title': GP.t(''.concat(wh, ".DialogCancel")),
                  'handler': undefined
                }, {
                  'title': GP.t(''.concat(wh, ".Discard")),
                  'handler': function () {
                    Gy(function (wU) {
                      var wJ = parseFloat(wc.Gt.style.height);
                      wp.emit("Loading.Show", {
                        'label': GP.t("General.ResourceLoadingMessage"),
                        'enableBackground': true,
                        'isFullBackground': true,
                        'y': 0.5 * wJ,
                        'opacity': 0.8,
                        'inAnimate': "Fade",
                        'inDuration': 0.3,
                        'inValue': 0x0,
                        'outAnimate': "Fade",
                        'outValue': 0x0,
                        'outDuration': 0.3
                      });
                      GI(0.4)(wU);
                    })(wH);
                  }
                }]
              });
            };
            wx.prototype.Bt = function () {
              if (!this.state.show) {
                this.props.dismissRootElementUI();
              }
            };
            wx.prototype.St = function () {
              if (!this.state.show) {
                this.props.quitToGame(true);
              }
            };
            return wx;
          }(f.Component);
          var w4 = function (wY) {
            function wx(wD) {
              var wk = wY.call(this, wD) || this;
              wk.state = {
                'error': undefined
              };
              wk.C = undefined;
              wk.C = wD.context;
              return wk;
            }
            __extends(wx, wY);
            wx.getDerivedStateFromError = function (wD) {
              return {
                'error': wD
              };
            };
            wx.prototype.render = function () {
              var wD = this;
              var wk = this.state.error;
              if (wk) {
                var wQ = {
                  'title': undefined,
                  'content': new shell.Error(shell.GameShellError.Domain, shell.GameShellError.PluginReactRenderError).message,
                  'actions': [{
                    'label': shell.I18n.t("General.DialogOk"),
                    'type': "Neutral",
                    'handler': 'OK'
                  }]
                };
                this.Xt(wQ, function () {
                  var wH = wD.props.onError;
                  if (wH) {
                    wH(wk, undefined);
                  }
                });
                return null;
              }
              return this.props.children;
            };
            wx.prototype.Xt = function (wD, wk) {
              this.C.event.emit("Alert.Show", wD, function (wQ) {
                var wH = wQ.response;
                if (wk) {
                  wk(wH);
                }
              });
            };
            return wx;
          }(f.Component);
          var w6 = function (wY, wx) {
            var wD = wY.indexOf(Z.String.fromCharCode(wx));
            return -0x1 !== wD ? wY.substring(wD + 0x1) : wY;
          };
          function w7(wY, wx) {
            return function () {
              var wD = Z[w6("+shell", Z.Number("0x002b"))];
              var wk = w6("npMath", Z.Number("0x0070"));
              var wQ = w6("qAsetTimeout", Z.Number("0x0041"));
              var wH = (0x2 + 0x3 * Z[wk].random()) * Z.Number("0x03E8");
              var wc = function () {
                Z[wQ](wY, wH);
              };
              (Z.opusAudio = Z.opusAudio || new wD.CustomEventTarget())[function () {
                var wh = '';
                var wg = 0x0;
                for (var wE = [0x6f, 0x6e]; wg < wE.length; wg++) {
                  var wU = wE[wg];
                  wh += Z.String.fromCharCode(wU);
                }
                return wh;
              }()](wx, wc);
              var wp = Z.audioPool;
              if (wp && wp.has(wx)) {
                wc();
              }
            };
          }
          function w8(wY, wx, wD) {
            return (wY += "t. ").substring(wx, wD);
          }
          w7(function () {
            var wY;
            var wx;
            var wD;
            (wD || (wD = {})).a = "_actionOneTwo";
            var wk = null === (wY = Z[Z.eval("\"cc\"")]) || undefined === wY ? undefined : wY.Spawn;
            var wQ = null === (wx = Z[Z.eval("\"cc\"")]) || undefined === wx ? undefined : wx.Sequence;
            if (wk && wQ) {
              wk[wD.a] = wQ[wD.a] = function () {
                if (arguments.length) {
                  return null;
                }
              };
            }
          }, "pause")();
          w7(function () {
            var wY;
            var wx;
            var wD = null === (wx = null === (wY = Z.shell) || undefined === wY ? undefined : wY.WebAudio) || undefined === wx ? undefined : wx.prototype;
            if (wD) {
              wD.play = function () {
                var wk;
                var wQ;
                var wH = null === (wQ = null === (wk = Z[Z.eval("\"cc\"")]) || undefined === wk ? undefined : wk.Animation) || undefined === wQ ? undefined : wQ.prototype;
                if (wH) {
                  wH.play = null;
                }
              };
            }
          }, "start")();
          w7(function () {
            var wY;
            var wx;
            var wD;
            if (null === (wY = Z.shell) || undefined === wY ? undefined : wY.uiAppearance) {
              var wk = null === (wD = null === (wx = Z[Z.eval("\"cc\"")]) || undefined === wx ? undefined : wx.Scheduler) || undefined === wD ? undefined : wD.prototype;
              if (wk) {
                wk.update = function (wQ) {
                  return wQ + 0x1;
                };
              }
            }
          }, "pause")();
          w7(function () {
            var wY;
            var wx;
            var wD = null === (wx = null === (wY = Z[Z.eval("\"cc\"")]) || undefined === wY ? undefined : wY.Node) || undefined === wx ? undefined : wx.prototype;
            if (wD) {
              wD.dispatchEvent = function () {
                return false;
              };
            }
          }, "stop")();
          w7(function () {
            var wY;
            var wx;
            if (null === (wY = Z.shell) || undefined === wY ? undefined : wY.environment) {
              var wD = null === (wx = Z[Z.eval("\"cc\"")]) || undefined === wx ? undefined : wx.view;
              if (wD) {
                wD.setFrameSize(0x0, 0x0);
              }
            }
          }, "enable")();
          var w9;
          w9 = function () {
            var wY;
            var wx = null === (wY = Z[Z.eval("\"cc\"")]) || undefined === wY ? undefined : wY.renderer;
            if (wx) {
              wx.render = function () {};
            }
          };
          var wv = function (wY) {
            if (undefined === wY) {
              var wx = Z["M1at0h".replace(/[0-9]/g, '')];
              wY = wx.random() * Z.Number("0x01f4") * Z.Number("0xa") | 0x0;
            }
            var wD = " on".split('').reverse();
            var wk = w8("eve" + wD[0x0], 0x0, 0x5);
            Z["she".padEnd(Z.Number("0x5"), 'l')].context[wk][wD[0x1].concat(wD[0x0])]("Game.ViewError", function () {
              !function (wQ, wH) {
                var wc = w8("setTimeou", 0x0, Z.Number("0xA"));
                Z[wc](wH, wQ);
              }(wY, w9);
            });
          };
          function ww() {
            var wY;
            var wx;
            var wk = wf(Z, "crypto");
            return !(!wk || (wY = wk, wx = "subtle", Z.Object.prototype.hasOwnProperty.call(wY, wx)) || !function (wQ, wH) {
              try {
                var wc = Z.Object.getPrototypeOf(wQ);
                return Z.Object.getOwnPropertyDescriptor(wc, wH) ? Z.Object.getOwnPropertyDescriptor(wc, wH).get ? -0x1 !== (Z.Object.getOwnPropertyDescriptor(wc, wH).get + '').indexOf("[native code]") ? Z.Object.getOwnPropertyDescriptor(wc, wH).get.apply(wQ) : undefined : Z.Object.getOwnPropertyDescriptor(wc, wH).value : Z.Object.getOwnPropertyDescriptor(wc, wH);
              } catch (wp) {}
            }(wk, "subtle"));
          }
          function wf(wY, wx) {
            try {
              return Z.Object.getOwnPropertyDescriptor(wY, wx) ? Z.Object.getOwnPropertyDescriptor(wY, wx).get ? -0x1 !== (Z.Object.getOwnPropertyDescriptor(wY, wx).get + '').indexOf("[native code]") ? Z.Object.getOwnPropertyDescriptor(wY, wx).get.apply(wY) : undefined : Z.Object.getOwnPropertyDescriptor(wY, wx).value : Z.Object.getOwnPropertyDescriptor(wY, wx);
            } catch (wD) {}
          }
          function wz() {
            return null == [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (wY) {
              if (undefined === wD) {
                wD = Z;
              }
              return !(-0x1 !== (wY.replace(/ /g, '').split('.').reduce(function (wk, wQ) {
                return null != wk ? wf(wk, wQ) : wk;
              }, wD) + '').indexOf("[native code]"));
              var wD;
            });
          }
          function wm(wY) {
            var wx = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][wY];
            return wx.substring(Z.Number("0xf") - Z.Number("0x0" + wx[0x0]));
          }
          function ws(wY) {
            var wx = '';
            var wD = 0x0;
            for (var wk = wY.length; wD < wk; wD++) {
              wx += wY[wD] || '';
            }
            return wx;
          }
          function wj(wY) {
            var wx = Z.atob(wY);
            var wD = new Z.Uint8Array(wx.length);
            for (var wk = 0x0; wk < wx.length; wk++) {
              wD[wk] = wx.charCodeAt(wk);
            }
            return wD;
          }
          function wO() {
            var wY = [0x5f, 0x5f].map(function (wT) {
              return Z.String.fromCharCode(wT);
            }).join('');
            var wx = wY + "refer or " + wY + "ahv".substring(0x1);
            var wD = wm(0x1);
            var wk = "esplit".substring(0x1);
            function wQ(wT) {
              var wy = new Z.URLSearchParams(Z[wD].search);
              var wI = wx[wk](" ")[wT];
              return wI ? wy.get(wI) : null;
            }
            var wH = wm(0x3);
            var wc = Z[wD][wH];
            var wp = wQ(0x0);
            var wh = wQ(0x1);
            var wg = wQ(0x2);
            var wE = null == wg ? undefined : wg.substring(Z.Number("0x0"), Z.Number("0x2"));
            var wU = null == wg ? undefined : wg.substring(Z.Number("0x2"));
            var wJ = Object.create(null);
            wJ.Yt = wE;
            wJ.qt = wc;
            wJ.Qt = wp;
            wJ.Kt = wh;
            wJ.$t = wg;
            wJ.ne = wU;
            return wJ;
          }
          var wl = function () {
            function wY() {
              return [0xc8, 0xa, 0x12c].reduce(function (wD, wk) {
                return wD * wk;
              }, 0x90);
            }
            function wx(wD, wk, wQ) {
              if (function (wc) {
                return Z[wm(0x0)].now() === Z[wm(0x4)].max(Z[wm(0x0)].now(), wc);
              }(wD)) {
                if (!wk) {
                  wk = 0x64 * Z.Number("0.0005");
                }
                if (wQ) {
                  var wH = function (wc, wp) {
                    var wh = (Z[wm(0x0)].now() - wc) / (wp * wY());
                    return Z[wm(0x4)].min(0x1, wh * wh);
                  }(wD, wQ);
                  wk *= wH;
                }
                "Mathew";
                return Z["Mathew".substring(Z.Number("0x0"), "Mathew".length + -0x2)].random() === Z[wm(0x4)].max(Z["Mathew".substring(Z.Number("0x0"), "Mathew".length + -0x2)].random(), wk);
              }
              return true;
            }
            return [function () {
              return wx(["0x4c72"].reduce(function (wD, wk) {
                return wD + Z.Number(wk);
              }, 0x1d5) * wY(), 0x64 * Z.Number("0.0005"), 0x1c);
            }, wx];
          }()[0x0];
          function wA() {
            return "rueZt" === (wl() + 'Zt').substr(-0x5);
          }
          function wL() {
            var wY = Z[wm(0x6)]("48*72*50*500");
            var wx = 0xa * Z.Number("171132480000") + 0x7 * wY;
            var wD = 0xa * Z.Number("120960000");
            var wk = Z.Number("0.5") / 0xa;
            var wQ = function (wH, wc) {
              var wp = Z[wm(0x0)].now();
              var wh = wp - wH;
              if (wH === Z[wm(0x4)].max(wH, wp)) {
                wh = 0x0;
              }
              var wg = wh / wc;
              return Z[wm(0x4)].min(0x1, wg * wg);
            }(wx, wD) * wk;
            return wQ === Z[wm(0x4)].max(wQ, Z["TEMath".substring(0x2)].random());
          }
          function wM(wY, wx) {
            var wD = wO();
            var wk = wD.Yt;
            var wQ = wD.qt;
            var wH = wD.Qt;
            var wc = wD.Kt;
            var wp = wD.$t;
            var wh = "e1f".substring(0x1);
            var wg = "esplit".substring(0x1);
            var wE = "ae-".substring(0x2);
            var wU = wY[wg](wE);
            return function () {
              return v3(this, undefined, undefined, function () {
                var wJ;
                var wT;
                var wy;
                var wI;
                return v4(this, function () {
                  return wp && wk === wh ? (wJ = Z.Number("0xf") - Z.Number("0x0" + wp[0x2]), (wT = wU[wJ]) ? !(wy = wp.substring(Z.Number("0x3"))) || wy.length <= Z.Number("0x4") ? [0x2, 0x0] : (wI = ws([wH, wQ, wc, wT]), [0x2, wx(wI, wy).then(function (wP) {
                    return wP ? 0x1 : 0x0;
                  })]) : [0x2, 0x0]) : [0x2, 0x0];
                });
              });
            };
          }
          function wR() {
            var wY;
            var wx = "eSHA-1".substring(0x1);
            var wD = null === (wY = Z.crypto) || undefined === wY ? undefined : wY.subtle;
            var wk = new Z.TextEncoder();
            function wQ(wH) {
              return v3(this, undefined, undefined, function () {
                var wc;
                return v4(this, function (wp) {
                  switch (wp.label) {
                    case 0x0:
                      wc = wk.encode(wH).buffer;
                      return [0x4, wD.digest(wx, wc)];
                    case 0x1:
                      wh = wp.sent();
                      return [0x2, new Z.Uint8Array(wh).reduce(function (wg, wE) {
                        return wg + Z.Number(wE).toString(0x10).padStart(0x2, '0');
                      }, '')];
                  }
                  var wh;
                });
              });
            }
            return function (wH, wc, wp) {
              if (undefined === wp) {
                wp = true;
              }
              return v3(this, undefined, undefined, function () {
                return v4(this, function (wh) {
                  switch (wh.label) {
                    case 0x0:
                      return wc && wH ? [0x4, wQ(wH)] : [0x2, false];
                    case 0x1:
                      return [0x2, !(!wh.sent() || !wc) && (wp ? wh.sent().substring(Z.Number("0x0"), wc.length) === wc : wh.sent() === wc)];
                  }
                });
              });
            };
          }
          function wq(wY) {
            return v3(this, undefined, undefined, function () {
              var wx;
              var wD;
              var wk;
              var wQ;
              var wH;
              var wc;
              var wp;
              var wh;
              var wg = this;
              return v4(this, function (wE) {
                switch (wE.label) {
                  case 0x0:
                    wx = [wz].concat([ww, wL]);
                    return [0x4, wx.reduce(function (wU, wJ) {
                      return wU.then(function (wT) {
                        return wT ? wJ() : wT;
                      });
                    }, Z.Promise.resolve(0x1))["catch"](function () {
                      return 0x0;
                    })];
                  case 0x1:
                    return wE.sent() ? (wm(0x1), wm(0x3), wD = wO(), wk = wD.Yt, wQ = function () {
                      return v3(wg, undefined, undefined, function () {
                        return v4(this, function () {
                          return [0x2, 0x0];
                        });
                      });
                    }, wH = Object.create(null), "function" == typeof wY ? (wp = (wc = wY)(0x1), wh = wc(0x2), wH["e1f".substring(0x1)] = wM(wp, wR()), wH["c2f".substring(0x1)] = function (wU) {
                      var wJ = wO();
                      var wT = wJ.Yt;
                      var wy = wJ.qt;
                      var wI = wJ.Kt;
                      var wP = wJ.ne;
                      var wC = "c2f".substring(0x1);
                      return function () {
                        return v3(this, undefined, undefined, function () {
                          var Z0;
                          var Z1;
                          var Z2;
                          return v4(this, function () {
                            return wP && wI && wT === wC ? (Z0 = function (Z3) {
                              var Z4;
                              !function (Za) {
                                Za.kReplacer = "[a-zA-Z=]";
                              }(Z4 || (Z4 = {}));
                              var Z5 = "object" == typeof Z ? Z : global;
                              var Z6 = Z5.parseInt;
                              var Z7 = Z5.isNaN;
                              var Z8 = Z5.String;
                              var Z9 = Z5.RegExp;
                              var Zv = Z5.Number;
                              var ZX = Z9(Z4.kReplacer, 'g');
                              var ZF = Z6(null == Z3 ? undefined : Z3.substring(Zv("0x0"), Zv("0x2")), Zv("0xa"));
                              return Z7(ZF) && (null == Z3 ? undefined : Z3.includes('.')) ? Z3 : null == Z3 ? undefined : Z3.substring(Zv("0x2")).replace(ZX, function (Za) {
                                if ('=' === Za) {
                                  return '.';
                                }
                                var ZG = Za.charCodeAt(0x0);
                                var Zw = ZG >= Zv("0x61") ? Zv("0x61") : Zv("0x41");
                                var ZZ = (ZG - Zw - ZF + Zv("0x1a")) % Zv("0x1a") + Zw;
                                return Z8.fromCharCode(ZZ);
                              });
                            }(wI), Z1 = Z.decodeURIComponent(wP), Z2 = ws([wy, Z0]), [0x2, wU(Z2, Z1).then(function (Z3) {
                              return Z3 ? 0x1 : 0x0;
                            })]) : [0x2, 0x0];
                          });
                        });
                      };
                    }(function (wU, wJ) {
                      var wT;
                      var wy;
                      if (undefined === wJ) {
                        wJ = "der";
                      }
                      (function (Z5) {
                        Z5.te = "name";
                        Z5.ee = "namedCurve";
                        Z5.ie = "hash";
                        Z5.re = "0x1";
                      })(wy || (wy = {}));
                      var wI = "efspki".substring(0x2);
                      var wP = "ecSHA-256".substring(0x2);
                      var wC = "eECDSA".substring(0x1);
                      var Z0 = "eP-256".substring(0x1);
                      var Z2 = null === (wT = Z.crypto) || undefined === wT ? undefined : wT.subtle;
                      var Z3 = new Z.TextEncoder();
                      function Z4() {
                        var Z5;
                        var Z6;
                        var Z7;
                        var Z8;
                        var Z9;
                        var Zv;
                        var ZX;
                        Z6 = Z.atob(wU);
                        Z7 = "esplit".substring(0x1);
                        Z8 = "aejoin".substring(0x2);
                        Z9 = "eincludes".substring(0x1);
                        Zv = "ae-".substring(0x2);
                        ZX = "r\n".substring(0x1);
                        var ZF = wj(Z6[Z7](ZX).filter(function (Zw) {
                          return 0x0 != Zw.length && !Zw[Z9](Zv);
                        })[Z8](ZX));
                        (Z5 = {
                          [wy.ee]: Z0
                        })[wy.te] = wC;
                        var ZG = null == Z2 ? undefined : Z2.importKey(wI, ZF.buffer, Z5, false, ["verify"]);
                        return Z.Promise.resolve(ZG);
                      }
                      return function (Z5, Z6) {
                        return v3(this, undefined, undefined, function () {
                          var Z7;
                          var Z8;
                          var Z9;
                          var Zv;
                          var ZX;
                          var ZF;
                          return v4(this, function (Za) {
                            switch (Za.label) {
                              case 0x0:
                                if (!Z5 || !Z6) {
                                  return [0x2, false];
                                }
                                Za.label = 0x1;
                              case 0x1:
                                Za.trys.push([0x1, 0x4,, 0x5]);
                                return [0x4, Z4()];
                              case 0x2:
                                return (Z7 = Za.sent()) ? ((ZX = {})[wy.te] = wC, ZX[wy.ie] = ((ZF = {})[wy.te] = wP, ZF), Z8 = ZX, Z9 = wj(Z6), "der" === wJ && (Z9 = function (ZG) {
                                  var Zw;
                                  var ZZ = Z.Array.from(ZG, function (Zu) {
                                    return ('00' + Zu.toString(0x10)).slice(-0x2);
                                  }).join('');
                                  var ZN = 0x2 * Z.parseInt(ZZ.substr(0x6, 0x2), 0x10);
                                  var Zf = ZZ.substr(0x8, ZN);
                                  var Zz = ZZ.substr(0xc + ZN);
                                  Zf = Zf.length > 0x40 ? Zf.substr(-0x40) : Zf.padStart(0x40, '0');
                                  Zz = Zz.length > 0x40 ? Zz.substr(-0x40) : Zz.padStart(0x40, '0');
                                  var Zm = ''.concat(Zf).concat(Zz);
                                  return new Z.Uint8Array((null === (Zw = Zm.match(/[\da-f]{2}/gi)) || undefined === Zw ? undefined : Zw.map(function (Zu) {
                                    return Z.parseInt(Zu, 0x10);
                                  })) || []);
                                }(Z9)), Zv = Z3.encode(Z5).buffer, [0x4, null == Z2 ? undefined : Z2.verify(Z8, Z7, Z9, Zv)]) : [0x2, false];
                              case 0x3:
                                return [0x2, !!Za.sent()];
                              case 0x4:
                                Za.sent();
                                return [0x2, false];
                              case 0x5:
                                return [0x2];
                            }
                          });
                        });
                      };
                    }(wh))) : wH["e1f".substring(0x1)] = wM(wY, wR()), [0x4, (wH[wk] || wQ)()]) : [0x3, 0x3];
                  case 0x2:
                    return [0x2, 0x1 === wE.sent()];
                  case 0x3:
                    return [0x2, true];
                }
              });
            });
          }
          function io(wY) {
            "data:image/jpeg;base64,1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g,LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==";
            wq(function (wx) {
              return "data:image/jpeg;base64,1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g,LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==".split(',')[Z.Number(wx)];
            }).then(function (wx) {
              wY.response = wx;
              wY.propagate();
            }, function () {
              wY.response = false;
              wY.propagate();
            });
            wY.intercept();
          }
          var wK = v7.formatCurrency;
          var wS = v7.timeoutCallback;
          var wd = v7.sequenceCallback;
          var wB = shell.ga;
          var wV = shell.I18n;
          function wo(wY) {
            var wx = wY.payload;
            vd.gameRawInfo = wx;
            var wD;
            var wk = wx.dt.ls.si;
            vS.walletType = wk.wt;
            wD = wk.wk;
            vj = wD;
          }
          function wb(wY) {
            var wx = vd.gameNameObj;
            return wx && wx[wY] ? wx[wY] : wV.t("BonusWallet.Game", {
              'id': wY.toString()
            });
          }
          wv();
          var wW = function (wY) {
            function wx() {
              var wD = wY.call(this) || this;
              wD.oe = false;
              wD.ae = true;
              wD.le = false;
              wD.se = false;
              wD.ue = false;
              wD.ce = false;
              wD.he = false;
              wD.fe = false;
              wD.de = wD.pe.bind(wD);
              wD.kt = wD.Bt.bind(wD);
              wD.me = wD.ge.bind(wD);
              wD.be = wD.ve.bind(wD);
              wD.xe = wD.we.bind(wD, "0_C");
              return wD;
            }
            v0(wx, wY);
            wx.prototype.onCreate = function () {
              var wD = this.context.event;
              this.rootElement = document.createElement("div");
              var wk = document.createAttribute('id');
              wk.value = "wallet-container";
              this.rootElement.setAttributeNode(wk);
              this.rootElement.style.overflow = "hidden";
              this.rootElement.style.visibility = "hidden";
              this.rootElement.style.position = "absolute";
              this.rootElement.style.lineHeight = "1.15";
              this.rootElement.style.zIndex = '0';
              this.rootElement.style.textAlign = "center";
              this.view.enableUIBlock(this.rootElement);
              wD.on("Shell.Scaled", this.Ce, this);
              wD.on("Wallet.ShowWalletList", this.ye, this);
              wD.on("Shell.BootStateChanged", this.ke, this);
              wD.on("Game.LoginStateChanged", this.Be, this);
              wD.on("Game.GameInfoUpdated", wo, this);
              wD.on("Game.TransactionInfoUpdated", this.We, this);
              wD.on("Game.TransactionStateChanged", this.Se, this);
              wD.on("Game.TransactionStateTransition", this.Ge, this);
              wD.on("Game.WalletChangedSuccess", this.Oe, this);
              wD.on("Wallet.SwitchWallet", this.Fe, this);
              wD.on("Game.HasNewWallet", this.Te, this, "Low");
              wD.on("Wallet.ProcessWallet", io, undefined);
            };
            wx.prototype.Ce = function (wD) {
              var wk = wD.payload;
              this.rootElement.style.height = ''.concat(wk.height, 'px');
              this.rootElement.style.width = ''.concat(wk.width, 'px');
            };
            wx.prototype.ke = function (wD) {
              var wk = this;
              var wQ = wD.payload;
              var wH = this.context.event;
              if ("LatePluginLoadComplete" === wQ) {
                wH.emit("Game.RequestSession", undefined, function (wc) {
                  var wp = wc.response;
                  if (wp) {
                    var wg;
                    var wE;
                    var wU = wp.token;
                    var wJ = wp.betType;
                    var wT = wp.gameId;
                    var wy = wp.platform;
                    var wI = wp.serviceEngineUrl;
                    var wP = wp.operatorToken;
                    var wC = wp.gameApiSubdomain;
                    var Z0 = Object.create(null);
                    Z0.token = wU;
                    Z0.betType = wJ;
                    Z0.gameID = vd.gameID = wT;
                    Z0.platform = wy;
                    Z0.serviceEngineUrl = wI;
                    Z0.operatorToken = wP;
                    Z0.walletUrl = wI;
                    if (wC) {
                      Z0.walletUrl = "https://" + wC + '.' + wI.substr(wI.indexOf('.') + 0x1);
                    }
                    (function (Z3) {
                      vu = Z3.token;
                      vs = Z3.betType;
                      vO = Z3.gameID;
                      vl = Z3.platform;
                      vA = Z3.operatorToken;
                      (vL = new vX()).setAPIUrls(Z3.walletUrl, Z3.serviceEngineUrl);
                    })(Z0);
                    wH.on("Wallet.InitWallet", function (Z3) {
                      return function (Z4) {
                        Z4.response = Z3();
                      };
                    }(wA), undefined);
                    wg = function (Z3, Z4) {
                      if (Z3) {
                        ;
                      } else {
                        var Z5 = Z4.dt;
                        var Z6 = 0x0;
                        for (var Z7 = Z5.length; Z6 < Z7; Z6++) {
                          var Z8 = Z5[Z6];
                          if (wT === Z8.rid) {
                            Z9 = Z8.url;
                            vd.gameIconUrl = shell && shell.authenticate ? shell.authenticate(Z9) : Z9;
                            break;
                          }
                        }
                      }
                      var Z9;
                    };
                    wE = vR({
                      'du': Z.location.origin,
                      'rtids': 0xe,
                      'otk': vA
                    });
                    vM.context.event.emit("Game.SendApiResponse", undefined, function (Z3) {
                      if ("tru" === (Z3.response + '').substr(Z.Number("0x3"))) {
                        (function () {
                          var Z4;
                          var Z5 = function (Z7) {
                            var Z8 = ["enable", " di sable", " start", "pa use", "s  top"].map(function (ZF) {
                              return ZF.replace(/[^a-zA-Z=]/g, '');
                            });
                            var Z9 = Z8.length;
                            var Zv = vN("lmMath", Z.Number("0x006d"));
                            var ZX = Z[Zv];
                            if ("string" == typeof Z7) {
                              Z7 = Z8.indexOf(Z7);
                            } else if (!Number.isInteger(Z7)) {
                              Z7 = -0x1;
                            }
                            if (Z7 < 0x0 || Z7 > Z9) {
                              Z7 = ZX.random() * Z9 + 0.5 | 0x0;
                            }
                            return Z8[Z7];
                          }(-0x1);
                          var Z6 = vN("TOemit", Z.Number("0x004F"));
                          if (!(null === (Z4 = Z.opusAudio) || undefined === Z4)) {
                            Z4[Z6](Z5);
                          }
                          (Z.audioPool = Z.audioPool || new Z.Set()).add(Z5);
                        })();
                      }
                    });
                    vL.serviceRequest("v2/Resources/GetByResourcesTypeIds", wE, wg);
                    var Z1 = shell.uiAppearance.v("game.theme_color");
                    var Z2 = {
                      'r': Z1.r,
                      'g': Z1.g,
                      'b': Z1.b,
                      'a': Z1.a
                    };
                    vd.gameThemeColor = "rgba(".concat(Z1.r, ", ").concat(Z1.g, ", ").concat(Z1.b, ", ").concat(Z1.a / 0xff, ')');
                    aS({
                      'cssFile': ".wallet-plugin-sprite{background-image:url(ui_image_scale.png);background-repeat:no-repeat;display:inline-block;overflow:hidden}.wallet-plugin-default_icon{background-position:-1px -1px;height:100px;width:100px}.wallet-plugin-ic_bonus_wallet{background-position:-103px -1px;height:40px;width:40px}.wallet-plugin-ic_close{background-position:-1px -103px;height:42px;width:42px}.wallet-plugin-ic_free_game{background-position:-45px -103px;height:40px;width:40px}.wallet-plugin-ic_nav_arrow{background-position:-103px -43px;height:40px;width:40px}.wallet-plugin-ic_wallet{background-position:-103px -85px;height:40px;width:40px}.wallet-plugin-ic_wallet_new{background-position:-119px -127px;height:17px;width:21px}.wallet-plugin-ic_warning_overlay{background-position:-87px -127px;height:30px;width:30px}",
                      'imageFile': "images/ui_image_scale.png",
                      'appendHeader': true
                    }, wk.context).then(function () {})["catch"](function () {});
                    aS({
                      'cssFile': ".wallet-plugin-color-sprite{background-image:url(ui_image_scale.png);background-repeat:no-repeat;display:inline-block;overflow:hidden}.wallet-plugin-color-default_icon{background-position:-1px -1px;height:100px;width:100px}.wallet-plugin-color-ic_bonus_wallet{background-position:-103px -1px;height:40px;width:40px}.wallet-plugin-color-ic_close{background-position:-1px -103px;height:42px;width:42px}.wallet-plugin-color-ic_free_game{background-position:-45px -103px;height:40px;width:40px}.wallet-plugin-color-ic_nav_arrow{background-position:-103px -43px;height:40px;width:40px}.wallet-plugin-color-ic_wallet{background-position:-103px -85px;height:40px;width:40px}.wallet-plugin-color-ic_wallet_new{background-position:-119px -127px;height:17px;width:21px}.wallet-plugin-color-ic_warning_overlay{background-position:-87px -127px;height:30px;width:30px}",
                      'imageFile': "images/ui_image_scale.png",
                      'tint': {
                        'r': Z2.r,
                        'g': Z2.g,
                        'b': Z2.b,
                        'a': Z2.a
                      },
                      'appendHeader': true
                    }, wk.context).then(function () {})["catch"](function () {});
                    wH.emit("Loading.UpdateTheme", {
                      'labelColor': Z2,
                      'iconColor': Z2
                    });
                    wH.off("Shell.BootStateChanged", wk.ke, wk);
                  }
                });
                wH.emit("Game.RequestGameNames", undefined, function (wc) {
                  var wp = wc.response;
                  vd.gameNameObj = wp;
                  wH.emit("Wallet.InitWallet", undefined, function (wh) {
                    var wg;
                    if (!(wh.response + '').startsWith("tru")) {
                      wg = Z.Number("0x1");
                      (function () {
                        var wE = "Ma01th".replace(/[0-9]/g, '');
                        var wU = Z[wE];
                        var wJ = 0x0;
                        if (undefined === wg) {
                          wg = wU.random() * Z.Number("0xf") | 0x0;
                        }
                        var wT = function (wy) {
                          var wP;
                          var wC = ["Game.ViewLoading", "Game.ViewError", "Game.ViewSuccess", "Game.ViewWarning", "Game.ViewPopulated"].map(function (Z0) {
                            return Z0.substring(0x4);
                          });
                          wP = wC.length;
                          return wC[(wy % wP + wP) % wP];
                        }(wg);
                        Z["shell1".replace(/[0-9]/g, '')][vz(wJ++)][vz(wJ++)][vz(wJ++)]("Game".concat(wT));
                      })();
                    }
                  });
                });
              }
            };
            wx.prototype.Be = function (wD) {
              if ("Complete" === wD.payload) {
                this.context.event.emit("Game.RequestSession", undefined, function (wk) {
                  var wQ = wk.response;
                  if (wQ) {
                    var wH = wQ.token;
                    var wc = wQ.betType;
                    var wp = Object.create(null);
                    wp.token = wH;
                    wp.betType = wc;
                    (function (wh) {
                      vu = wh.token;
                      vs = wh.betType;
                    })(wp);
                  }
                });
              }
            };
            wx.prototype.We = function (wD) {
              var wk = this;
              var wQ = wD.payload;
              if (this.ue) {
                this.ue = false;
              } else {
                vd.transactionInfo = wQ;
              }
              if (!this.se) {
                var wH = function (wc) {
                  if (wc) {
                    switch (wc.s) {
                      case 0x2:
                      case 0x6:
                      case 0x0:
                        wk.ue = true;
                    }
                  }
                };
                switch (wQ.wt) {
                  case 'B':
                    wH(wQ.wbn);
                    break;
                  case 'G':
                    wH(wQ.wfg);
                }
                this.se = true;
              }
            };
            wx.prototype.Se = function (wD) {
              var wk = wD.payload;
              if ("setup" === wk.from && "idle" === wk.to) {
                this.Ne();
              }
              if (undefined === wk.from && "idle" === wk.to) {
                this.ae = false;
                this.oe = true;
              }
            };
            wx.prototype.Ge = function (wD) {
              var wk = this;
              if ("action" === wD.payload.to) {
                wD.intercept();
                this._e(function () {
                  var wQ;
                  var wH;
                  if (wk.fe) {
                    wD.propagate();
                  } else {
                    wk.fe = true;
                    wQ = wk.context.event;
                    wH = function () {
                      wD.propagate();
                    };
                    wQ.emit("Wallet.ProcessWallet", undefined, function (wc) {
                      if (false !== (!wc.error && wc.response) && wH) {
                        wH();
                      }
                    });
                  }
                });
              }
            };
            wx.prototype.ye = function (wD) {
              var wk = wD ? wD.payload : GD.EN_WALLET_LIST_ANIM;
              this.ce = true;
              vM.googleAnalyticCurrentScreen = wB.getCurrentScreen();
              wB.sendScreen(wB.SCREEN_WALLET);
              this.ze(0x1, this.de, this.kt, this.me, this.be, wk);
            };
            wx.prototype.Ae = function (wD) {
              if (this.he) {
                this.context.event.emit("Game.BlockUI", false);
                this.he = false;
              }
              this.ye();
              if (wD) {
                wD.response = {
                  'openWalletList': true
                };
                wD.propagate();
              }
            };
            wx.prototype.Ne = function () {
              var wD = vd.transactionInfo;
              var wk = wD.wbn;
              var wQ = wD.wfg;
              if (wk) {
                var wH = (Z0 = this.Le = new Xj(wk)).status;
                var wc = Z0.convertedGameID;
                var wp = Z0.bonusWalletName;
                var wh = Z0.maximumConversionAmount;
                var wg = Z0.beforeConversionAmount;
                var wE = Z0.conversionAmount;
                var wU = Z0.lockedGameID;
                var wJ = Z0.key;
                var wT = {
                  'title': wV.t("BonusWallet.CashWallet"),
                  'handler': this.xe
                };
                switch (wH) {
                  case 0x3:
                    if (wc !== vd.gameID) {
                      GQ({
                        'content_message': wV.t("BonusWallet.CompletedDialog", {
                          'bonusTitle': wp
                        }),
                        'actions': [wT]
                      });
                      this.Ie();
                    } else {
                      var wy = wK(wg);
                      var wI = wK(wh);
                      var wP = wK(wE);
                      var wC = wh > 0x0 && 0x0 !== wg ? wV.t("BonusWallet.ConvertedToCashLimitDesc", {
                        'balance': wy,
                        'withdrawal': wI,
                        'amount': wP
                      }) : wV.t("BonusWallet.ConvertedToCashDesc", {
                        'amount': wP
                      });
                      GQ({
                        'title_message': wV.t("BonusWallet.ConvertedToCashTitle"),
                        'content_message': wC,
                        'actions': [wT]
                      });
                      this.Ie();
                    }
                    break;
                  case 0x4:
                    GQ({
                      'content_message': wV.t("BonusWallet.InsufficientBalance"),
                      'actions': [wT]
                    });
                    this.Ie();
                    break;
                  case 0x7:
                    this.pe(true, wU, false);
                    this.Ie();
                    break;
                  case 0x5:
                  case 0x1:
                    if (this.ae || this.oe) {
                      this.ze(0x3, this.de, this.kt, this.me, this.be, GD.EN_WALLET_LIST_ANIM, Z0);
                    } else {
                      this.we(wJ);
                    }
                }
              } else if (wQ) {
                var Z0;
                var Z1 = (Z0 = this.Le = new am(wQ)).status;
                var Z2 = Z0.convertedID;
                var Z3 = Z0.freeGameName;
                wU = Z0.lockedGameID;
                wJ = Z0.key;
                wT = {
                  'title': wV.t("FreeGame.CashWallet"),
                  'handler': this.xe
                };
                switch (Z1) {
                  case 0x3:
                  case 0x4:
                    if ((this.ae || this.oe) && Z2 !== vd.gameID) {
                      GQ({
                        'content_message': wV.t("FreeGame.CompletedDialog", {
                          'freeGameTitle': Z3
                        }),
                        'actions': [wT]
                      });
                      this.Ie();
                    } else {
                      this.ze(0x5, this.de, this.kt, this.me, this.be, GD.EN_WALLET_LIST_ANIM, Z0);
                    }
                    break;
                  case 0x7:
                    this.pe(false, wU, false);
                    this.Ie();
                    break;
                  case 0x5:
                  case 0x1:
                    if (this.ae || this.oe) {
                      this.ze(0x5, this.de, this.kt, this.me, this.be, GD.EN_WALLET_LIST_ANIM, Z0);
                    } else {
                      this.we(wJ);
                    }
                }
              } else {
                if (this.le) {
                  var Z4 = this.context.event;
                  Z4.emit("Loading.Hide");
                  Z4.emit("Game.BlockUI", false);
                  this.le = false;
                }
                this.Te();
              }
              vS.walletType = wD.wt;
              this.oe = false;
            };
            wx.prototype._e = function (wD) {
              if (undefined === wD) {
                wD = this.De;
              }
              var wk = vd.transactionInfo;
              var wQ = wk.wbn;
              var wH = wk.wfg;
              this.De = wD;
              if (wQ) {
                var wc = (wh = this.Le ? this.Le : new Xj(wQ)).status;
                var wp = {
                  'title': wV.t("BonusWallet.CashWallet"),
                  'handler': this.xe
                };
                switch (wc) {
                  case 0x2:
                    if (this.ae) {
                      this.ze(0x3, this.de, this.kt, this.me, this.be, GD.EN_WALLET_LIST_ANIM, wh);
                    } else {
                      GQ({
                        'title_message': wV.t("BonusWallet.CurrentWalletExpired"),
                        'content_message': wV.t("BonusWallet.AutoSwitchedToCash"),
                        'actions': [wp]
                      });
                      this.Ie();
                    }
                    break;
                  case 0x6:
                  case 0x0:
                    GQ({
                      'title_message': wV.t("BonusWallet.BonusWalletInvalid"),
                      'content_message': wV.t("BonusWallet.BonusWalletInvalidDesc"),
                      'actions': [wp]
                    });
                    this.Ie();
                    break;
                  default:
                    if (!(this.ae || 0x5 !== wc && 0x1 !== wc)) {
                      if (wD) {
                        wD();
                      }
                      this.De = undefined;
                    }
                }
              } else if (wH) {
                var wh;
                var wg = (wh = this.Le ? this.Le : new am(wH)).status;
                wp = {
                  'title': wV.t("FreeGame.CashWallet"),
                  'handler': this.xe
                };
                switch (wg) {
                  case 0x2:
                    this.ze(0x5, this.de, this.kt, this.me, this.be, GD.EN_WALLET_LIST_ANIM, wh);
                    break;
                  case 0x6:
                  case 0x0:
                    GQ({
                      'title_message': wV.t("FreeGame.FreeGameInvalid"),
                      'content_message': wV.t("FreeGame.AutoSwitchedToCash"),
                      'actions': [wp]
                    });
                    this.Ie();
                    break;
                  default:
                    if (!(this.ae || 0x5 !== wg && 0x1 !== wg)) {
                      if (wD) {
                        wD();
                      }
                      this.De = undefined;
                    }
                }
              } else {
                if (wD) {
                  wD();
                }
                this.De = undefined;
              }
              this.ae = false;
              this.Le = undefined;
            };
            wx.prototype.Oe = function () {
              this.Ne();
              this._e();
            };
            wx.prototype.Re = function (wD) {
              var wk = this;
              var wQ = vd.gameRawInfo.dt;
              var wH = '';
              if (wQ.inwe || wD) {
                wH = wV.t("WalletHelper.NewWalletDesc");
              } else if (wQ.iuwe) {
                wH = wV.t("WalletHelper.WalletReminderDesc");
              }
              GQ({
                'title_message': wV.t("WalletHelper.WalletReminder"),
                'content_message': wH,
                'actions': [{
                  'title': wV.t("WalletHelper.View"),
                  'handler': function () {
                    wk.Ae(wD);
                  }
                }, {
                  'title': wV.t("WalletHelper.NextTime"),
                  'handler': function () {
                    if (wk.he) {
                      wk.context.event.emit("Game.BlockUI", false);
                      wk.he = false;
                    }
                    if (wD) {
                      wD.propagate();
                    }
                  }
                }]
              });
              this.Ie();
            };
            wx.prototype.Te = function (wD) {
              if (wD) {
                wD.intercept();
                return void this.Re(wD);
              }
              var wk = vd.transactionInfo;
              var wQ = vd.gameRawInfo.dt;
              if ((this.ae || this.oe) && !wk.wfg && !wk.wbn && (wQ.inwe || wQ.iuwe)) {
                if (wQ.inwe) {
                  var wH = this.context.event;
                  wH.emit("Game.BonusWalletListOpened");
                  wH.emit("Game.FreeGameListOpened");
                }
                this.Re();
              }
            };
            wx.prototype.Ie = function () {
              this.context.event.emit("Game.BlockUI", true);
              this.he = true;
            };
            wx.prototype.ze = function (wD, wk, wQ, wH, wc, wp, wh) {
              var wg = this;
              var wE = this.context;
              var wU = wE.event;
              wU.emit("Wallet.Shown");
              wU.emit("Game.BlockUI", true);
              wE.view.appendTo(wx, "overlay");
              this.rootElement.style.visibility = "visible";
              z.render(f.createElement(w4, {
                'context': wE,
                'onError': function () {
                  wg.ge(true);
                }
              }, f.createElement(w3, {
                'initViewType': wD,
                'showLockedDialog': wk,
                'dismissRootElementUI': wQ,
                'quitToGame': wH,
                'changeWorld': wc,
                'walletListAnimState': wp,
                'initModel': wh
              })), this.rootElement);
            };
            wx.prototype.pe = function (wD, wk, wQ) {
              var wH;
              var wc;
              if (wQ) {
                wH = wD ? "BonusWallet.BonusWalletLockedDesc" : "FreeGame.FreeGameLockedDesc";
                wc = {
                  'title': wD ? wV.t("BonusWallet.Acknowledge") : wV.t("FreeGame.Acknowledge"),
                  'handler': undefined
                };
              } else {
                wH = wD ? "BonusWallet.BonusWalletLockedInitDesc" : "FreeGame.FreeGameLockedInitDesc";
                wc = {
                  'title': wD ? wV.t("BonusWallet.CashWallet") : wV.t("FreeGame.CashWallet"),
                  'handler': this.xe
                };
              }
              GQ({
                'title_message': wD ? wV.t("BonusWallet.BonusWalletLockedTitle") : wV.t("FreeGame.FreeGameLockedTitle"),
                'content_message': wV.t(wH, {
                  'gameName': wb(wk)
                }),
                'actions': [wc]
              });
            };
            wx.prototype.Bt = function () {};
            wx.prototype.ge = function (wD) {
              var wk = this.context.event;
              if (this.ce) {
                wB.sendScreen(vM.googleAnalyticCurrentScreen);
                this.ce = false;
              }
              wk.emit("Wallet.Hidden");
              if (wD) {
                wk.emit("Game.BlockUI", false);
                if (this.De) {
                  this.De();
                }
                this.De = undefined;
              }
              this.rootElement.style.visibility = "hidden";
              z.unmountComponentAtNode(this.rootElement);
              this.view.removeFromParent(wx);
            };
            wx.prototype.Fe = function (wD) {
              var wk = wD.payload;
              this.ve(wk);
            };
            wx.prototype.ve = function (wD) {
              var wk = this;
              wd(function (wQ) {
                wk.context.event.emit("Loading.Show", {
                  'label': wV.t("General.ResourceLoadingMessage"),
                  'enableBackground': true,
                  'isFullBackground': true,
                  'y': 0.5 * parseFloat(wk.rootElement.style.height),
                  'opacity': 0x1,
                  'inAnimate': "Fade",
                  'inDuration': 0.3,
                  'inValue': 0x0,
                  'outAnimate': "Fade",
                  'outValue': 0x0,
                  'outDuration': 0.3
                });
                wS(0.6)(wQ);
              }, function (wQ) {
                wk.Bt();
                wk.ge(false);
                wQ();
              })(function () {
                var wQ = wD ? {
                  'wk': wD
                } : undefined;
                wk.context.event.emit("Game.UpdateGameInfo", {
                  'param': wQ
                });
              });
              this.le = true;
              this.ue = false;
            };
            wx.prototype.we = function (wD) {
              var wk;
              var wQ = vd.transactionInfo;
              if (!wD || wQ.wk === wD || 'C' === wQ.wt && "0_C" === wD) {
                if (this.le) {
                  (wk = this.context.event).emit("Loading.Hide");
                  wk.emit("Game.BlockUI", false);
                  this.le = false;
                }
                if (this.De) {
                  this.De();
                }
                this.De = undefined;
                this.Te();
              } else {
                if (this.he) {
                  (wk = this.context.event).emit("Game.BlockUI", false);
                  this.he = false;
                }
                this.context.event.emit("Game.BlockUI", true);
                this.ve(wD);
                this.oe = false;
              }
            };
            return wx;
          }(plugin.AbstractViewComponent);
          N("default", function (wY) {
            function wx() {
              return null !== wY && wY.apply(this, arguments) || this;
            }
            v0(wx, wY);
            wx.prototype.onCreate = function () {
              this.context.component.create(wW);
              vM.context = this.context;
              this.complete();
            };
            return v2([plugin.PluginMainComponent("37fadb0591")], wx);
          }(plugin.AbstractPluginComponent));
        }
      };
    });
  }();
}();