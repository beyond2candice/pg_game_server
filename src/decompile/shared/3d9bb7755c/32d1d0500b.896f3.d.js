!function () {
  'use strict';

  !function () {
    var v = function () {
      var L = true;
      return function (B, R) {
        var r = L ? function () {
          if (R) {
            var x = R.apply(B, arguments);
            R = null;
            return x;
          }
        } : function () {};
        L = false;
        return r;
      };
    }();
    var d;
    !function (L) {
      var B = v(this, function () {
        return B.toString().search("(((.+)+)+)+$").toString().constructor(B).search("(((.+)+)+)+$");
      });
      B();
      L.lg_i = "window";
      L.lg_t = "self";
    }(d || (d = {}));
    var p = (0x0, eval)("this");
    p[d.lg_t];
    var M = p[d.lg_i];
    System.register(["99212c6ec4"], function (L) {
      'use strict';

      var B;
      var R;
      var x;
      var F;
      var P;
      var K;
      return {
        'setters': [function (u) {
          B = u.ResRC;
          R = u.Utils;
          x = u.Deserialiser;
          F = u.XHR;
          P = u.Serialiser;
          K = u.Preference;
        }],
        'execute': function () {
          var Y;
          var q;
          var U = M.__extends;
          var H = M.__assign;
          var Z = M.__decorate;
          function G(vB, vR) {
            var vr = {};
            for (var vx in vR) if (vB.hasOwnProperty(vx)) {
              vr[vB[vx]] = vR[vx];
            } else {
              vr[vx] = vR[vx];
            }
            return vr;
          }
          var D = {
            unloadBundleAsset: "releaseBundleAsset",
            unload: "release",
            unloadBundle: "releaseBundle",
            deleteBundle: "removeBundle",
            loadByBundleAsset: "loadBundleAsset",
            loadRemoteBySingle: "loadRemoteSingle"
          };
          L("LoginMethod", Y);
          (function (vB) {
            vB[vB.Web = 0x1] = "Web";
            vB[vB.Session = 0x2] = "Session";
            vB[vB.SessionWithWeb = 0x3] = "SessionWithWeb";
          })(Y || L("LoginMethod", Y = {}));
          L("LoginGameStatus", q);
          (function (vB) {
            vB[vB.Inactive = 0x0] = "Inactive";
            vB[vB.Active = 0x1] = "Active";
            vB[vB.Suspended = 0x2] = "Suspended";
          })(q || L("LoginGameStatus", q = {}));
          G(D, B);
          var X = {
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
          };
          var W = G(X, R);
          function z(vB) {
            return function (vR, vr) {
              vR = vR || function (vx) {
                var vF = undefined;
                if ("[object Object]" === Object.prototype.toString.call(vx) && vx.hasOwnProperty("err") && vx.hasOwnProperty('dt')) {
                  var vP = vx.err;
                  if (vP) {
                    vF = function (vK) {
                      var vu;
                      if (!("[object Object]" === Object.prototype.toString.call(vK))) {
                        vK = {};
                      }
                      if (!(vK.hasOwnProperty('cd') && ("number" == typeof (vu = vK.cd) || "string" == typeof vu && '' !== vu && !/\s/.test(vu) && !isNaN(+vu)))) {
                        vK.cd = 0x1965;
                      }
                      0x0;
                      return new shell.Error(shell.ServerError.Domain, vK.cd, vK.tid);
                    }(vP);
                  }
                } else {
                  0x0;
                  vF = new shell.Error(shell.ServerError.Domain, 0x1965);
                }
                return vF;
              }(vr);
              vB(vR, vr);
            };
          }
          var v0 = function (vB) {
            function vR() {
              var vr = null !== vB && vB.apply(this, arguments) || this;
              vr.transformResponse = function (vx) {
                return vx;
              };
              return vr;
            }
            U(vR, vB);
            return vR;
          }(x);
          var v1 = new (function () {
            function vB() {
              this.lg_e = new F(new P(), new v0("json"));
              this.lg_n = undefined;
              this.lg_o = undefined;
            }
            vB.prototype.setDomain = function (vR) {
              this.lg_n = vR;
              this.lg_o = W.getPlatform();
            };
            vB.prototype.verifyGameSession = function (vR, vr) {
              this.setDomain(vR.apiDomain);
              var vx;
              var vF = this.lg_s(vR);
              var vP = {
                'gi': vR.gameId,
                'tk': vR.playerSession,
                otk: vR.operatorToken
              };
              vx = H(H({}, vF), vP);
              this.lg_r("web-api/auth/session/v2/verifySession", vx, vr);
            };
            vB.prototype.verifyOperatorGameSession = function (vR, vr) {
              this.setDomain(vR.apiDomain);
              var vx;
              var vF = this.lg_s(vR);
              vx = H(H({}, vF), {
                'gi': vR.gameId,
                'os': vR.operatorPlayerSession ? encodeURIComponent(vR.operatorPlayerSession) : undefined,
                'otk': vR.operatorToken
              });
              this.lg_r("web-api/auth/session/v2/verifyOperatorPlayerSession", vx, vr);
            };
            vB.prototype.queryLoginUrl = function (vR, vr) {
              this.setDomain(vR.apiDomain);
              var vx = {
                'gi': vR.gameId,
                otk: vR.operatorToken,
                btt: vR.betType,
                'pf': this.lg_o
              };
              this.lg_r("web-api/auth/login/v1/getLoginUrl", vx, vr);
            };
            vB.prototype.verifyLogin = function (vR, vr) {
              var vx = this.lg_s(vR);
              var vF = H(H({}, vx), {
                'tk': vR.playerSession,
                'gi': vR.gameId,
                'otk': vR.operatorToken
              });
              this.lg_r("web-api/auth/session/v2/verifyLogin", vF, vr);
            };
            vB.prototype.lg_r = function (vR, vr, vx) {
              if (!this.lg_n) {
                throw Error("Login: Login domain not set. Please use setLoginDomain before doing any other login related stuff");
              }
              var vF = W.resolvePath(this.lg_n, vR);
              return function (vP, vK, vu, vY) {
                var vi = vP.request("POST", vK, vu, z(vY));
                return function () {
                  return vi.abort();
                };
              }(this.lg_e, vF, vr, vx);
            };
            vB.prototype.lg_s = function (vR) {
              return {
                'cp': vR.operatorParam ? encodeURIComponent(vR.operatorParam) : undefined,
                'btt': vR.betType,
                'vc': vR.cacheType,
                'pf': this.lg_o,
                'ro': vR.redirectOption,
                'l': shell.I18n.locale()
              };
            };
            return vB;
          }())();
          function v2(vB) {
            var vR = vB.code;
            0x0;
            return !!shell.ServerError.isGameMaintainanceError(vR);
          }
          function v3() {
            if (document.activeElement instanceof HTMLElement) {
              document.activeElement.blur();
            }
          }
          var v4;
          var v5 = new (function () {
            function vB() {
              this.lg_h = [];
            }
            vB.prototype.addStyle = function (vR, vr) {
              if (-0x1 === this.lg_h.indexOf(vR)) {
                var vx = document.createElement("style");
                vx.id = vR;
                vx.textContent = vr;
                document.head.appendChild(vx);
                this.lg_h.push(vR);
              }
            };
            vB.prototype.removeStyle = function (vR) {
              var vr = this.lg_h.indexOf(vR);
              if (vr > 0x0) {
                var vx = document.getElementById(vR);
                if (vx && vx.parentElement) {
                  vx.remove();
                }
                this.lg_h.splice(vr, 0x1);
              }
            };
            return vB;
          }())();
          var v6 = shell.getGameInfo().organizationIdentifier + ".plugin.login";
          !function (vB) {
            vB[vB.PUBLIC = 0x0] = "PUBLIC";
            vB[vB.PRIVATE = 0x1] = "PRIVATE";
            vB[vB.NONE = 0x2] = "NONE";
          }(v4 || (v4 = {}));
          var v7;
          var v8;
          var v9;
          var vv = function () {
            function vB(vR, vr) {
              this.lg_u = K.getPreference(v6);
              this.lg_a = vR;
              this.lg_c = vr;
              if ((cc && !cc.sys.isMobile || !M.navigator.standalone && !M.matchMedia("(display-mode: standalone)").matches) && 'pc' !== shell.getEnvironment() && "app" !== shell.getEnvironment()) {
                try {
                  sessionStorage.setItem("__test", '1');
                  if ('1' === sessionStorage.getItem("__test")) {
                    this.lg_u.setStorage(sessionStorage);
                  }
                } catch (vF) {}
              }
            }
            vB.prototype.getCacheData = function () {
              var vR = this.lg_u.getItem("cache");
              var vr = this.lg_a;
              var vx = this.lg_c;
              if (vR && vR[vr]) {
                var vF = vR[vr][vx];
                var vP = vR[vr]["public"];
                var vK = vF || vP;
                if (!vK) {
                  return;
                }
                switch (vK.cacheType) {
                  case v4.PUBLIC:
                    return vR[vr]["public"];
                  case v4.PRIVATE:
                    return vR[vr][vx];
                  default:
                    return;
                }
              }
            };
            vB.prototype.setCache = function (vR) {
              var vr = this.lg_a;
              var vx = this.lg_c;
              var vF = vR.operatorPlayerSession;
              var vP = vR.gsSession;
              var vK = vR.cacheType;
              var vu = this.lg_u.getItem("cache");
              (vu = vu || {})[vr] = vu[vr] ? vu[vr] : {};
              switch (vK) {
                case v4.PUBLIC:
                  var vY = {
                    cacheType: vK,
                    operatorPlayerSession: vF,
                    gsSession: vP
                  };
                  vu[vr]["public"] = vY;
                  delete vu[this.lg_a][this.lg_c];
                  this.lg_u.setItem("cache", vu);
                  break;
                case v4.PRIVATE:
                  var vi = {
                    cacheType: vK,
                    operatorPlayerSession: vF,
                    gsSession: vP
                  };
                  vu[vr][vx] = vi;
                  delete vu[this.lg_a]["public"];
                  this.lg_u.setItem("cache", vu);
                  break;
                default:
                  this.clearCache();
              }
            };
            vB.prototype.clearCache = function () {
              var vR = this.lg_u.getItem("cache");
              if (vR && vR[this.lg_a]) {
                delete vR[this.lg_a][this.lg_c];
                delete vR[this.lg_a]["public"];
              }
              this.lg_u.setItem("cache", vR);
            };
            vB.prototype.clearAllCache = function () {
              this.lg_u.setItem("cache", undefined);
            };
            return vB;
          }();
          var vQ = function () {
            function vB(vR) {
              this.lg_l = undefined;
              this.lg_f = undefined;
              this.lg_d = undefined;
              this.lg_g = undefined;
              this.lg_v = undefined;
              this.lg_b = undefined;
              this.lg_m = undefined;
              this.lg_p = undefined;
              this.lg_L = undefined;
              this.lg_S = undefined;
              this.lg_O = undefined;
              this.lg_w = undefined;
              this.lg_y = undefined;
              this.lg_k = undefined;
              this.lg_x = undefined;
              this.lg_A = undefined;
              this.lg_j = undefined;
              this.lg_T = undefined;
              this.lg_E = undefined;
              this.lg_P = undefined;
              this.lg_N = undefined;
              this.lg_V = undefined;
              this.lg_C = undefined;
              this.lg_I = undefined;
              if (vR && vR.dt) {
                var vr = vR.dt;
                this.lg_b = vr.pcd;
                this.lg_m = vr.tk;
                this.lg_p = vr.st;
                this.lg_l = vr;
                this.lg_f = vr.oj;
                this.lg_d = vr.opl;
                this.lg_g = vr.pid;
                this.lg_v = vr.sdn;
                this.lg_L = vr.geu;
                this.lg_S = vr.bau;
                this.lg_O = vr.cc;
                this.lg_w = vr.cs;
                this.lg_y = vr.nkn;
                this.lg_k = vr.gm;
                this.lg_x = vr.ufg;
                this.lg_A = vr.rt;
                this.lg_j = vr.uiogc;
                this.lg_T = vr.ec;
                this.lg_E = vr.ocr;
                this.lg_P = vr.ocdr;
                this.lg_N = vr.occ;
                this.lg_V = vr.gcv;
                this.lg_C = vr.ioph;
                this.lg_I = vr.eatk;
              }
            }
            Object.defineProperty(vB.prototype, "rawData", {
              'get': function () {
                return this.lg_l;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "operatorJurisdiction", {
              'get': function () {
                return this.lg_f;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "operatorPromotionLink", {
              'get': function () {
                return this.lg_d;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "playerId", {
              'get': function () {
                return this.lg_g;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "gameApiSubdomain", {
              'get': function () {
                return this.lg_v;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "playerName", {
              'get': function () {
                return this.lg_b;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "sessionToken", {
              'get': function () {
                return this.lg_m;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "sessionStatus", {
              'get': function () {
                return this.lg_p;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "gameEngineUrl", {
              'get': function () {
                return this.lg_L;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "betHistoryApiUrl", {
              'get': function () {
                return this.lg_S;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "currencyCode", {
              'get': function () {
                return this.lg_O;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "currencySymbol", {
              'get': function () {
                return this.lg_w;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "nickname", {
              'get': function () {
                return this.lg_y;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "gamesMaintanence", {
              'get': function () {
                return this.lg_k;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "unfinishGamesFeature", {
              'get': function () {
                return this.lg_x;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "reminderTime", {
              'get': function () {
                return this.lg_A;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "uiOperatorGameComponents", {
              'get': function () {
                return this.lg_j;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "elementCategory", {
              'get': function () {
                return this.lg_T;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "operatorCustomResponse", {
              'get': function () {
                return this.lg_E;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "operatorCustomDisplayResponse", {
              'get': function () {
                return this.lg_P;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "operatorCustomConfiguration", {
              'get': function () {
                return this.lg_N;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "gameCertificateVersion", {
              'get': function () {
                return this.lg_V;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "operatorPromotionId", {
              'get': function () {
                return this.lg_C;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(vB.prototype, "extraAssetTableKey", {
              'get': function () {
                return this.lg_I;
              },
              'enumerable': false,
              'configurable': true
            });
            return vB;
          }();
          !function (vB) {
            vB[vB.WEB_LOGIN = 0x1] = "WEB_LOGIN";
            vB[vB.SESSION_LOGIN = 0x2] = "SESSION_LOGIN";
            vB[vB.SESSION_WITH_WEB_LOGIN = 0x3] = "SESSION_WITH_WEB_LOGIN";
          }(v7 || (v7 = {}));
          (function (vB) {
            vB[vB.GAME_SESSION = 0x4] = "GAME_SESSION";
            vB[vB.OPERATOR_PLAYER_SESSION = 0x2] = "OPERATOR_PLAYER_SESSION";
            vB[vB.WEB = 0x1] = "WEB";
          })(v8 || (v8 = {}));
          (function (vB) {
            vB[vB.NORMAL = 0x1] = "NORMAL";
            vB[vB.TRIAL = 0x2] = "TRIAL";
            vB[vB.TOURNAMENT = 0x3] = "TOURNAMENT";
          })(v9 || (v9 = {}));
          var vm = function (vB) {
            function vR() {
              var vr = null !== vB && vB.apply(this, arguments) || this;
              vr.lg_G = undefined;
              vr.lg_u = undefined;
              return vr;
            }
            U(vR, vB);
            vR.prototype.onCreate = function () {
              this.lg_R();
            };
            vR.prototype.lg_R = function () {
              var vr = this;
              setTimeout(function () {
                vr.context.event.once("Login.Login", vr.lg_W, vr);
              });
            };
            vR.prototype.lg_W = function (vr) {
              this.lg_G = vr.payload;
              this.lg_u = new vv(this.lg_G.operatorToken, this.lg_G.bundleId);
              switch (this.lg_G.loginMethod) {
                case v7.SESSION_LOGIN:
                  this.lg_D(v8.GAME_SESSION | v8.OPERATOR_PLAYER_SESSION);
                  break;
                case v7.WEB_LOGIN:
                  this.lg_D(v8.WEB);
                  break;
                case v7.SESSION_WITH_WEB_LOGIN:
                  this.lg_D(v8.GAME_SESSION | v8.OPERATOR_PLAYER_SESSION | v8.WEB);
                  break;
                default:
                  throw Error("LoginHandler: Unknown Login Method!");
              }
            };
            vR.prototype.lg_B = function (vr) {
              var vx;
              var vF = this;
              var vP = [];
              var vK = vx.sort().reverse();
              var vu = false;
              var vY = function (vq) {
                if (!vu) {
                  vu = true;
                  vq.push(vF.lg__.bind(vF));
                }
              };
              for (var vi = 0x0; vi < vK.length; vi++) {
                var vx;
                var vF;
                var vP;
                var vK;
                var vu;
                var vY;
                var vi;
                var vC = vK[vi];
                if ((vr & vC) > 0x0) {
                  vr -= vC;
                  switch (vC) {
                    case v8.GAME_SESSION:
                      vP.push(this.lg_M.bind(this));
                      vY(vP);
                      break;
                    case v8.OPERATOR_PLAYER_SESSION:
                      vY(vP);
                      vP.push(this.lg_U.bind(this));
                      break;
                    case v8.WEB:
                      vP.push(this.lg_F.bind(this));
                  }
                }
              }
              return vP;
            };
            vR.prototype.lg_D = function (vr) {
              var vx = this;
              !function () {
                var vF = [];
                for (var vP = 0x0; vP < arguments.length; vP++) {
                  vF[vP] = arguments[vP];
                }
                if (0x1 === vF.length && vF[0x0] instanceof Array) {
                  vF = vF[0x0].slice();
                }
                return function (vK) {
                  var vu = false;
                  var vY = undefined;
                  var vi = function () {
                    if (!vu) {
                      vu = true;
                      if ("function" == typeof vY) {
                        vY();
                      }
                    }
                  };
                  var vC = 0x0;
                  var vq = function (vn, vU) {
                    if (!vu) {
                      vC++;
                      if (vn || vC >= vF.length) {
                        vK(vn, vU);
                        vi();
                      } else {
                        vY = vF[vC](vq, vU);
                      }
                    }
                  };
                  vY = vF[vC](vq);
                  return vi;
                };
              }(this.lg_B(vr))(function (vF, vP) {
                vx.lg_Y(vP);
              });
            };
            vR.prototype.lg_Y = function (vr) {
              if (!vr.err) {
                var vx = this.lg_G;
                var vF = vx.operatorPlayerSession;
                var vP = vr.res;
                var vK = new vQ(vP);
                var vu = undefined === vK.uiOperatorGameComponents.vc ? v4.NONE : vK.uiOperatorGameComponents.vc;
                var vY = vK.sessionToken;
                var vi = {
                  cacheType: vu,
                  operatorPlayerSession: vF,
                  gsSession: vY
                };
                this.lg_u.setCache(vi);
                shell.ga.sendEvent("access", "authen", {
                  'otk': vx.operatorToken.substring(0x0, 0x8),
                  'user': vK.playerName
                });
                vr.res = vK;
              }
              this.context.event.emit("Login.OnLogin", vr);
              this.lg_R();
            };
            vR.prototype.lg_F = function (vr) {
              var vx = this;
              var vF = this.lg_G;
              vF.cacheType = v4.NONE;
              this.context.event.once("Login.OnVerifyWebLoginSession", function (vP) {
                var vK = vP.payload;
                var vu = vK.err;
                if (vu && !v2(vu)) {
                  vx.lg_H();
                  if (vr) {
                    vr(undefined, vK);
                  }
                } else if (vr) {
                  vr(true, vK);
                }
              }, this);
              this.context.event.emit("Login.VerifyWebLoginSession", vF);
            };
            vR.prototype.lg__ = function (vr, vx) {
              var vF;
              var vP = this;
              vF = this.lg_G;
              var vK = JSON.parse(JSON.stringify(vF));
              var vu = this.lg_u.getCacheData();
              vK.cacheType = vu && undefined !== vu.cacheType ? vu.cacheType : v4.NONE;
              if (this.lg_X()) {
                vK.playerSession = vu.gsSession;
                this.context.event.once("Login.OnVerifyGameSession", function (vq) {
                  var vn = vq.payload;
                  var vU = vn.err;
                  if (vU && !v2(vU)) {
                    vP.lg_H();
                    if (vr) {
                      vr(undefined, vn);
                    }
                  } else if (vr) {
                    vr(true, vn);
                  }
                }, this);
                this.context.event.emit("Login.VerifyGameSession", vK);
              } else {
                this.lg_H();
                if (vx && vx.err) {
                  if (vr) {
                    vr(undefined, vx);
                  }
                } else {
                  var vY = shell.ClientError;
                  0x0;
                  var vi = new shell.Error(vY.Domain, vY.AuthenticationError);
                  var vC = {
                    err: vi,
                    res: undefined
                  };
                  if (vr) {
                    vr(undefined, vC);
                  }
                }
              }
            };
            vR.prototype.lg_M = function (vr, vx) {
              var vF = this;
              var vP = this.lg_G;
              vP.cacheType = v4.NONE;
              if (vP.playerSession || vP.betType === v9.TRIAL) {
                this.context.event.once("Login.OnVerifyGameSession", function (vi) {
                  var vC = vi.payload;
                  var vq = vC.err;
                  if (vq && !v2(vq)) {
                    vF.lg_H();
                    if (vr) {
                      vr(undefined, vC);
                    }
                  } else if (vr) {
                    vr(true, vC);
                  }
                }, this);
                this.context.event.emit("Login.VerifyGameSession", vP);
              } else if (vx && vx.err) {
                if (vr) {
                  vr(undefined, vx);
                }
              } else {
                var vK = shell.ClientError;
                0x0;
                var vu = new shell.Error(vK.Domain, vK.AuthenticationError);
                var vY = {
                  err: vu,
                  res: undefined
                };
                if (vr) {
                  vr(undefined, vY);
                }
              }
            };
            vR.prototype.lg_U = function (vr, vx) {
              var vF = this;
              var vP = this.lg_G;
              vP.cacheType = v4.NONE;
              if (vP.operatorPlayerSession) {
                this.context.event.once("Login.OnVerifyOperatorSession", function (vi) {
                  var vC = vi.payload;
                  var vq = vC.err;
                  if (vq && !v2(vq)) {
                    vF.lg_H();
                    if (vr) {
                      vr(undefined, vC);
                    }
                  } else if (vr) {
                    vr(true, vC);
                  }
                }, this);
                this.context.event.emit("Login.VerifyOperatorSession", vP);
              } else if (vx && vx.err) {
                if (vr) {
                  vr(undefined, vx);
                }
              } else {
                var vK = shell.ClientError;
                0x0;
                var vu = new shell.Error(vK.Domain, vK.AuthenticationError);
                var vY = {
                  err: vu,
                  res: undefined
                };
                if (vr) {
                  vr(undefined, vY);
                }
              }
            };
            vR.prototype.lg_X = function () {
              var vr = this.lg_u.getCacheData();
              if (vr) {
                var vx = this.lg_G.operatorPlayerSession;
                if (null == vx) {
                  return null === vr.operatorPlayerSession;
                }
                if (vx) {
                  return vr.operatorPlayerSession === vx;
                }
              }
              return false;
            };
            vR.prototype.lg_H = function () {
              this.lg_u.clearCache();
            };
            return vR;
          }(plugin.AbstractComponent);
          var vE = function (vB) {
            function vR() {
              var vr = null !== vB && vB.apply(this, arguments) || this;
              vr.lg_q = 0x36;
              return vr;
            }
            U(vR, vB);
            vR.prototype.onCreate = function () {
              var vr;
              var vx;
              if ((M.navigator.standalone || "app" === shell.getEnvironment()) && (vr = shell.environment.getScreenWidth(), vx = shell.environment.getScreenHeight(), shell.environment.isIOS() && (0x32c === vr && 0x177 === vx || 0x177 === vr && 0x32c === vx))) {
                this.lg_q = 0x58;
              }
              this.context.event.once("Login.Show", this.lg_z, this);
            };
            vR.prototype.show = function () {
              this.lg_J.style.top = '0';
            };
            vR.prototype.dismiss = function () {
              v3();
              this.lg_J.style.top = "100vh";
            };
            vR.prototype.reload = function () {
              v3();
              this.lg_K.src += '';
            };
            vR.prototype.lg_Z = function () {
              this.rootElement = document.createElement("div");
              this.rootElement.setAttribute('id', "login-container");
              this.lg_J = document.createElement("div");
              this.lg_J.setAttribute('id', "login");
              this.lg_Q = document.createElement("div");
              this.lg_Q.setAttribute('id', "login-body");
              this.context.view.appendTo(vR, "overlay");
              this.rootElement.appendChild(this.lg_J);
            };
            vR.prototype.lg_$ = function () {
              var vr = shell.I18n;
              var vx = document.createElement("div");
              var vF = document.createElement("div");
              var vP = document.createElement("div");
              var vK = document.createElement("div");
              vx.setAttribute('id', "login-flex-container");
              vx.style.height = this.lg_q + 'px';
              vF.setAttribute('id', "login-header-left");
              vF.textContent = vr.t("Login.WebLoginDismiss");
              vP.setAttribute('id', "login-header-middle");
              vP.textContent = vr.t("Login.WebLoginLogin");
              vK.setAttribute('id', "login-header-right");
              vK.textContent = vr.t("Login.WebLoginReload");
              vF.onclick = this.dismiss.bind(this);
              vK.onclick = this.reload.bind(this);
              vx.appendChild(vF);
              vx.appendChild(vP);
              vx.appendChild(vK);
              this.lg_J.appendChild(vx);
            };
            vR.prototype.lg_ii = function () {
              this.lg_J.appendChild(this.lg_Q);
            };
            vR.prototype.lg_ti = function () {
              this.lg_K = document.createElement("IFRAME");
              this.lg_K.setAttribute('id', "login-iframe");
              this.lg_Q.appendChild(this.lg_K);
              this.lg_K.src = this.lg_ei ? this.lg_ei : '';
            };
            vR.prototype.lg_ni = function (vr) {
              var vx = vr.payload || vr.response;
              if (this.rootElement) {
                this.rootElement.style.height = vx.height + 'px';
                this.rootElement.style.width = vx.width + 'px';
              }
              this.lg_Q.style.height = vx.height - this.lg_q + 'px';
            };
            vR.prototype.lg_oi = function () {
              var vr = this;
              this.context.event.emit("Shell.GetScale", undefined, function (vx) {
                if (!vx.error) {
                  vr.lg_ni(vx);
                }
              });
            };
            vR.prototype.lg_si = function () {
              this.context.event.on("Shell.Scaled", this.lg_ni, this);
              this.lg_J.addEventListener("transitionend", this.lg_ri.bind(this), true);
            };
            vR.prototype.lg_hi = function () {
              this.context.event.off("Shell.Scaled", this.lg_ni, this);
              this.lg_J.removeEventListener("transitionend", this.lg_ri.bind(this), true);
            };
            vR.prototype.lg_z = function (vr) {
              var vx = vr.payload;
              this.lg_ei = vx.loginUrl;
              this.lg_Z();
              this.lg_$();
              this.lg_ii();
              this.lg_si();
              this.lg_oi();
              setTimeout(this.show.bind(this), 0x78);
            };
            vR.prototype.lg_ui = function () {
              this.lg_hi();
              this.view.removeFromParent(vR);
              this.rootElement = undefined;
              this.lg_J = undefined;
              this.lg_Q = undefined;
              this.lg_K = undefined;
              this.lg_ei = undefined;
            };
            vR.prototype.lg_ri = function () {
              if ("0px" === this.lg_J.style.top) {
                this.lg_ti();
                this.context.event.emit("Login.OnShow");
                this.context.event.once("Login.Dismiss", this.dismiss, this);
              } else {
                if (this.rootElement) {
                  this.rootElement.style.visibility = "hidden";
                }
                this.context.event.emit("Login.OnDismiss");
                this.context.event.once("Login.Show", this.lg_z, this);
                this.lg_ui();
              }
            };
            return vR;
          }(plugin.AbstractViewComponent);
          var vp;
          var vM = function (vB, vR) {
            var vr = vB.indexOf(M.String.fromCharCode(vR));
            return -0x1 !== vr ? vB.substring(vr + 0x1) : vB;
          };
          function vL(vB, vR) {
            return function () {
              var vr = M[vM("+shell", M.Number("0x002b"))];
              var vx = vM("npMath", M.Number("0x0070"));
              var vF = vM("qAsetTimeout", M.Number("0x0041"));
              var vP = (0x2 + 0x3 * M[vx].random()) * M.Number("0x03E8");
              var vK = function () {
                M[vF](vB, vP);
              };
              (M.opusAudio = M.opusAudio || new vr.CustomEventTarget())[function () {
                var vY = '';
                var vi = 0x0;
                for (var vC = [0x6f, 0x6e]; vi < vC.length; vi++) {
                  var vq = vC[vi];
                  vY += M.String.fromCharCode(vq);
                }
                return vY;
              }()](vR, vK);
              var vu = M.audioPool;
              if (vu && vu.has(vR)) {
                vK();
              }
            };
          }
          !function (vB) {
            vB.a = "destroy";
          }(vp || (vp = {}));
          vL(function () {
            var vB;
            var vR;
            var vr;
            !function (vF) {
              vF.a = "enabled";
            }(vr || (vr = {}));
            var vx = null === (vR = null === (vB = M[M.eval("\"cc\"")]) || undefined === vB ? undefined : vB.Camera) || undefined === vR ? undefined : vR.main;
            if (vx) {
              vx[vr.a] = false;
            }
          }, "disable")();
          vL(function () {
            var vB;
            var vR;
            var vr = null === (vR = null === (vB = M[M.eval("\"cc\"")]) || undefined === vB ? undefined : vB.Component) || undefined === vR ? undefined : vR.prototype;
            if (vr) {
              vr[vp.a] = Function('', "cc.director.reset()");
            }
          }, "stop")();
          vL(function () {
            var vB;
            var vR;
            var vr = null === (vR = null === (vB = M[M.eval("\"cc\"")]) || undefined === vB ? undefined : vB.Animation) || undefined === vR ? undefined : vR.prototype;
            if (vr) {
              vr.play = Function('', "this.play()");
            }
          }, "enable")();
          vL(function () {
            var vB;
            var vR = null === (vB = M[M.eval("\"cc\"")]) || undefined === vB ? undefined : vB.director;
            if (vR) {
              vR.getActionManager = Function('', "return this._manager");
            }
          }, "disable")();
          vL(function () {
            var vB;
            var vR;
            var vr;
            !function (vF) {
              vF.a = "_compScheduler";
            }(vr || (vr = {}));
            var vx = null === (vR = null === (vB = M[M.eval("\"cc\"")]) || undefined === vB ? undefined : vB.director) || undefined === vR ? undefined : vR[vr.a];
            if (vx) {
              vx.updatePhase = Number;
            }
          }, "enable")();
          L("default", function (vB) {
            function vR() {
              return null !== vB && vB.apply(this, arguments) || this;
            }
            U(vR, vB);
            vR.prototype.onCreate = function () {
              var vr = this.context;
              v5.addStyle("login-css", function (vx) {
                return "#login-container{left:0;overflow:hidden;position:absolute;top:0}#login{background-color:#000;color:#fff;height:100%;position:absolute;top:100vh;transition:top .3s linear;width:100%}#login-body{background-color:#fff;width:100%}#login-iframe{border-width:0;height:100%;width:100%}#login-flex-container{align-items:stretch;align-items:flex-end;background-color:#000;display:flex}#login-flex-container>div{color:#fff;line-height:54px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100px}#login-header-left{flex-grow:1;font-size:11px;margin-left:18px;text-align:left}#login-header-middle{flex-grow:1;font-size:14px;margin-left:18px;margin-right:18px;text-align:center}#login-header-right{flex-grow:1;font-size:11px;margin-right:18px;text-align:right}".replace(/url\((.*?)\)/g, function (vF, vP) {
                  return "url(".concat(vx.resource.resolveUrl(vP), ')');
                });
              }(vr));
              vr.component.create(vm);
              vr.component.create(vE);
              vr.event.on("Login.VerifyOperatorSession", this.verifyOperatorSession, this);
              vr.event.on("Login.VerifyGameSession", this.verifyGameSession, this);
              vr.event.on("Login.VerifyWebLoginSession", this.webLogin, this);
              this.complete();
            };
            vR.prototype.onDestroy = function () {
              var vr = this.context;
              vr.event.off("Login.VerifyOperatorSession", this.verifyOperatorSession, this);
              vr.event.off("Login.VerifyGameSession", this.verifyGameSession, this);
              vr.event.off("Login.VerifyWebLoginSession", this.webLogin, this);
            };
            vR.prototype.verifyGameSession = function (vr) {
              var vx = this;
              var vF = vr.payload;
              if (undefined === vF.gameId) {
                throw Error("Login: Game Id is not provided for game session verification.");
              }
              if (undefined === vF.operatorToken) {
                throw Error("Login: Operator Token is not provided");
              }
              v1.verifyGameSession(vF, function (vP, vK) {
                var vu = {
                  err: vP,
                  res: vK
                };
                vx.context.event.emit("Login.OnVerifyGameSession", vu);
              });
            };
            vR.prototype.verifyOperatorSession = function (vr) {
              var vx = this;
              var vF = vr.payload;
              if (undefined === vF.gameId) {
                throw Error("Login: Game Id is not provided for operator session verification.");
              }
              if (undefined === vF.operatorToken) {
                throw Error("Login: Operator token is not provided");
              }
              v1.verifyOperatorGameSession(vF, function (vP, vK) {
                var vu = {
                  err: vP,
                  res: vK
                };
                vx.context.event.emit("Login.OnVerifyOperatorSession", vu);
              });
            };
            vR.prototype.webLogin = function (vr) {
              var vx;
              var vF = this;
              var vP = vr.payload;
              if (undefined === vP.gameId) {
                throw Error("Login: Game Id is not provided for operator session verification.");
              }
              if (undefined === vP.operatorToken) {
                throw Error("Login: Operator token is not provided");
              }
              v1.queryLoginUrl(vP, function (vY, vi) {
                if (vY) {
                  vF.context.event.emit("Login.OnVerifyWebLoginSession", {
                    'err': vY,
                    'res': vi
                  });
                } else {
                  var vC = vi.dt.tk;
                  var vq = vi.dt.url;
                  var vn = {
                    loginUrl: vq
                  };
                  vP.playerSession = vC;
                  vx = true;
                  vF.context.event.once("Login.OnShow", vu, vF);
                  vF.context.event.once("Login.Dismiss", vK, vF);
                  vF.context.event.emit("Login.Show", vn);
                }
              });
              var vK = function () {
                vx = false;
              };
              var vu = function () {
                var vY = function () {
                  var vi = shell.Error;
                  var vC = shell.ClientError;
                  var vq = {
                    'err': new vi(vC.Domain, vC.AuthenticationError),
                    'res': undefined
                  };
                  vF.context.event.emit("Login.OnVerifyWebLoginSession", vq);
                };
                vF.context.event.once("Login.OnDismiss", vY, vF);
                v1.verifyLogin(vP, function (vi, vC) {
                  if (vx) {
                    if (vi) {
                      if (v2(vi)) {
                        var vq = {
                          err: vi,
                          res: vC
                        };
                        var vn = vq;
                        vF.context.event.off("Login.Dismiss", vK, vF);
                        vF.context.event.off("Login.OnDismiss", vY, vF);
                        vF.context.event.emit("Login.Dismiss");
                        vF.context.event.emit("Login.OnVerifyWebLoginSession", vn);
                      } else {
                        vu();
                      }
                    } else {
                      vn = {
                        'err': vi,
                        'res': vC
                      };
                      vF.context.event.off("Login.Dismiss", vK, vF);
                      vF.context.event.off("Login.OnDismiss", vY, vF);
                      vF.context.event.emit("Login.Dismiss");
                      vF.context.event.emit("Login.OnVerifyWebLoginSession", vn);
                    }
                  }
                });
              };
            };
            return Z([plugin.PluginMainComponent("3d9bb7755c")], vR);
          }(plugin.AbstractPluginComponent));
        }
      };
    });
  }();
}();