!function () {
  'use strict';

  !function () {
    var H = function () {
      var c = true;
      return function (f, S) {
        var C = c ? function () {
          if (S) {
            var o = S.apply(f, arguments);
            S = null;
            return o;
          }
        } : function () {};
        c = false;
        return C;
      };
    }();
    var E;
    !function (c) {
      var f = H(this, function () {
        return f.toString().search("(((.+)+)+)+$").toString().constructor(f).search("(((.+)+)+)+$");
      });
      f();
      c.t = "window";
      c.i = "self";
    }(E || (E = {}));
    var u = (0x0, eval)("this");
    u[E.i];
    var b = u[E.t];
    System.register(["6d5cafebdb", "99212c6ec4", "react", "react-dom"], function (S) {
      'use strict';

      var C;
      var J;
      var P;
      var z;
      var W;
      var q;
      var w;
      var F;
      var Q;
      var L;
      var X;
      var I;
      var D;
      var k;
      var K;
      return {
        'setters': [null, function (O) {
          C = O.ResRC;
          J = O.Utils;
          P = O.XHR;
        }, function (O) {
          z = O.useState;
          W = O.memo;
          q = O.forwardRef;
          w = O.useRef;
          F = O.useDebugValue;
          Q = O.useEffect;
          L = O.useCallback;
          X = O["default"];
          I = O.Component;
          D = O.PureComponent;
        }, function (O) {
          k = O.unstable_batchedUpdates;
          K = O["default"];
        }],
        'execute': function () {
          var HO = b.__extends;
          var HV = b.__assign;
          var HG = b.__decorate;
          var HY = function () {
            function bD() {}
            bD.prototype.parsePlistData = function (bk, bK) {
              var bs = this;
              var bO = new plugin.Loader();
              var bV = {
                src: bk,
                type: plugin.LoadType.Text
              };
              bO.load([bV]);
              bO.onLoad = function (bG) {
                var bY = new DOMParser().parseFromString(bG.response.toString(), "text/xml");
                var bZ = bs.o(bY.documentElement);
                if (bK) {
                  bK(bZ);
                }
              };
              bO.onError = function () {};
            };
            bD.prototype.u = function (bk) {
              return !bk.childNodes || 0x0 === bk.childNodes.length;
            };
            bD.prototype.h = function (bk, bK) {
              if (!bk) {
                throw Error(bK);
              }
            };
            bD.prototype.v = function (bk) {
              return 0x3 === bk.nodeType || 0x8 === bk.nodeType || 0x4 === bk.nodeType;
            };
            bD.prototype.o = function (bk) {
              var bK;
              var bs;
              var bO;
              var bV;
              var bG;
              var bY;
              if (!bk) {
                return null;
              }
              if ("plist" === bk.nodeName) {
                bV = [];
                if (this.u(bk)) {
                  return bV;
                }
                for (bK = 0x0; bK < bk.childNodes.length; bK++) {
                  if (!this.v(bk.childNodes[bK])) {
                    bV.push(this.o(bk.childNodes[bK]));
                  }
                }
                return bV;
              }
              if ("dict" === bk.nodeName) {
                bs = {};
                bO = null;
                bY = 0x0;
                if (this.u(bk)) {
                  return bs;
                }
                for (bK = 0x0; bK < bk.childNodes.length; bK++) {
                  if (!this.v(bk.childNodes[bK])) {
                    if (bY % 0x2 == 0x0) {
                      this.h("key" === bk.childNodes[bK].nodeName, "Missing key while parsing <dict/>.");
                      bO = this.o(bk.childNodes[bK]);
                    } else {
                      this.h("key" !== bk.childNodes[bK].nodeName, "Unexpected key \"" + this.o(bk.childNodes[bK]) + "\" while parsing <dict/>.");
                      bs[bO] = this.o(bk.childNodes[bK]);
                    }
                    bY += 0x1;
                  }
                }
                if (bY % 0x2 == 0x1) {
                  throw Error("Missing value for \"" + bO + "\" while parsing <dict/>");
                }
                return bs;
              }
              if ("array" === bk.nodeName) {
                bV = [];
                if (this.u(bk)) {
                  return bV;
                }
                for (bK = 0x0; bK < bk.childNodes.length; bK++) {
                  if (!this.v(bk.childNodes[bK])) {
                    if (null !== (bG = this.o(bk.childNodes[bK]))) {
                      bV.push(bG);
                    }
                  }
                }
                return bV;
              }
              if ("#text" === bk.nodeName) {
                ;
              } else {
                if ("key" === bk.nodeName) {
                  return this.u(bk) ? '' : bk.childNodes[0x0].nodeValue;
                }
                if ("string" === bk.nodeName) {
                  bG = '';
                  if (this.u(bk)) {
                    return bG;
                  }
                  for (bK = 0x0; bK < bk.childNodes.length; bK++) {
                    var bZ = bk.childNodes[bK].nodeType;
                    if (!(0x3 !== bZ && 0x4 !== bZ)) {
                      bG += bk.childNodes[bK].nodeValue;
                    }
                  }
                  return bG;
                }
                if ("integer" === bk.nodeName) {
                  this.h(!this.u(bk), "Cannot parse \"\" as integer.");
                  return parseInt(bk.childNodes[0x0].nodeValue, 0xa);
                }
                if ("real" === bk.nodeName) {
                  this.h(!this.u(bk), "Cannot parse \"\" as real.");
                  bG = '';
                  for (bK = 0x0; bK < bk.childNodes.length; bK++) {
                    if (0x3 === bk.childNodes[bK].nodeType) {
                      bG += bk.childNodes[bK].nodeValue;
                    }
                  }
                  return parseFloat(bG);
                }
                if ("date" === bk.nodeName) {
                  this.h(!this.u(bk), "Cannot parse \"\" as Date.");
                  return new Date(bk.childNodes[0x0].nodeValue);
                }
                if ("true" === bk.nodeName) {
                  return true;
                }
                if ("false" === bk.nodeName) {
                  return false;
                }
              }
            };
            return bD;
          }();
          var HZ = new HY();
          function HU(bD, bk, bK) {
            var bs = {
              'x': 0x0,
              'y': 0x0,
              width: 0x0,
              height: 0x0,
              isRotate: false
            };
            if (undefined === bk) {
              bk = bs;
            }
            return new Promise(function (bO, bV) {
              var bG = new plugin.Loader();
              bG.onLoad = function (bY) {
                var bZ = document.createElement("canvas");
                var bU = bZ.getContext('2d');
                if (null !== bU) {
                  var bM = new Image();
                  bM.onload = function () {
                    URL.revokeObjectURL(bM.src);
                    var by = 0x0 === bk.width ? bM.width : bk.width;
                    var bT = 0x0 === bk.height ? bM.height : bk.height;
                    bZ.width = by;
                    bZ.height = bT;
                    bU.clearRect(0x0, 0x0, by, bT);
                    bU.translate(by / 0x2, bT / 0x2);
                    if (bk.isRotate) {
                      bU.rotate(0x10e * Math.PI / 0xb4);
                      bU.drawImage(bM, bk.x, bk.y, bT, by, -bT / 0x2, -by / 0x2, bT, by);
                    } else {
                      bU.drawImage(bM, bk.x, bk.y, by, bT, -by / 0x2, -bT / 0x2, by, bT);
                    }
                    var bh = bU.getImageData(0x0, 0x0, by, bT);
                    var bj = bh.data;
                    if (bK) {
                      var bl = 0x0;
                      for (var bR = bj.length; bl < bR; bl += 0x4) {
                        bj[bl] = bK.r;
                        bj[bl + 0x1] = bK.g;
                        bj[bl + 0x2] = bK.b;
                      }
                    }
                    bU.putImageData(bh, 0x0, 0x0);
                    bO(bZ.toDataURL());
                  };
                  bM.onerror = function () {
                    bV(Error("ImageBase64 load image failed"));
                  };
                  bM.src = URL.createObjectURL(bY.response);
                }
              };
              bG.onError = function (bY) {
                bV(bY);
              };
              bG.load([{
                'src': bD,
                'type': plugin.LoadType.Blob
              }]);
            });
          }
          function HM(bD, bk) {
            var bK = [];
            bD.forEach(function (bs) {
              var bO = {
                'x': 0x0,
                'y': 0x0,
                width: 0x0,
                height: 0x0
              };
              bK.push(HU(bs.resolvePath, bO, bs.colour));
            });
            Promise.all(bK).then(function (bs) {
              var bO = [];
              bs.forEach(function (bV) {
                bO.push(bV);
              });
              if (bk) {
                bk(bO, undefined);
              }
            })["catch"](function (bs) {
              if (bk) {
                bk(undefined, bs);
              }
            });
          }
          var Hy = {};
          function HT(bD, bk, bK) {
            var bs;
            var bO = this;
            var bV = bD.src;
            var bG = "unknown";
            bG = -0x1 !== bV.indexOf(".css") ? "css" : bG;
            bG = -0x1 !== (bs = bV).indexOf(".jpg") || -0x1 !== bs.indexOf(".png") ? "image" : bG;
            var bY = shell.Error;
            var bZ = shell.ClientError;
            var bU = bY && new bY(bZ.Domain, bZ.GameLoadResourceError);
            var bM = bk.resource.resolveUrl(bV);
            return new Promise(function (by, bT) {
              return __awaiter(bO, undefined, undefined, function () {
                var bh;
                return __generator(this, function (bj) {
                  switch (bj.label) {
                    case 0x0:
                      bj.trys.push([0x0, 0x9,, 0xa]);
                      return "image" !== bG ? [0x3, 0x5] : bD.tint ? [0x4, Hm([{
                        'resolvePath': bM,
                        'colour': bD.tint
                      }])] : [0x3, 0x2];
                    case 0x1:
                      bh = bj.sent();
                      by(bh[0x0]);
                      return [0x3, 0x4];
                    case 0x2:
                      return [0x4, Hg(bM, bK)];
                    case 0x3:
                      bh = bj.sent();
                      by(bh);
                      bj.label = 0x4;
                    case 0x4:
                      return [0x3, 0x8];
                    case 0x5:
                      return "css" !== bG ? [0x3, 0x7] : [0x4, HN(bM, bk, bK)];
                    case 0x6:
                      bh = bj.sent();
                      by(bh);
                      return [0x3, 0x8];
                    case 0x7:
                      bT(bU);
                      bj.label = 0x8;
                    case 0x8:
                      return [0x3, 0xa];
                    case 0x9:
                      bj.sent();
                      bT(bU);
                      return [0x3, 0xa];
                    case 0xa:
                      return [0x2];
                  }
                });
              });
            });
          }
          function Hh(bD, bk, bK) {
            return __awaiter(this, undefined, undefined, function () {
              var bs;
              var bO;
              return __generator(this, function (bV) {
                switch (bV.label) {
                  case 0x0:
                    return bD.cssFile.endsWith(".css") ? [0x4, HT({
                      'src': bD.cssFile
                    }, bk, bK)] : [0x3, 0x2];
                  case 0x1:
                    bs = bV.sent();
                    return [0x3, 0x3];
                  case 0x2:
                    bs = bD.cssFile;
                    bV.label = 0x3;
                  case 0x3:
                    return bD.tint ? [0x4, HT({
                      'src': bD.imageFile,
                      'tint': bD.tint
                    }, bk, bK)] : [0x3, 0x6];
                  case 0x4:
                    bO = bV.sent();
                    return [0x4, Hj(bs, bk, bO, true, bK)];
                  case 0x5:
                    bs = bV.sent();
                    return [0x3, 0x8];
                  case 0x6:
                    return [0x4, Hj(bs, bk, bD.imageFile, false, bK)];
                  case 0x7:
                    bs = bV.sent();
                    bV.label = 0x8;
                  case 0x8:
                    if (bD.appendHeader) {
                      Hd(bs, bk);
                    }
                    return [0x2, bs];
                }
              });
            });
          }
          function Hj(bD, bk, bK, bs, bO) {
            if (undefined === bs) {
              bs = false;
            }
            return new Promise(function (bV, bG) {
              if (bs) {
                bD = bD.replace(/url\((.*?)\)/g, function () {
                  return "url(" + bK + ')';
                });
                bV(bD);
              } else {
                Hl(bk.resource.resolveUrl(bK), bO).then(function (bY) {
                  bD = bD.replace(/url\((.*?)\)/g, function () {
                    return "url(" + URL.createObjectURL(bY) + ')';
                  });
                  bV(bD);
                })["catch"](bG);
              }
            });
          }
          function Hl(bD, bk) {
            var bK = this;
            var bs = shell.Error;
            var bO = shell.ClientError;
            var bV = bs && new bs(bO.Domain, bO.GameLoadResourceError);
            return new Promise(function (bG, bY) {
              return __awaiter(bK, undefined, undefined, function () {
                var bZ;
                return __generator(this, function (bU) {
                  switch (bU.label) {
                    case 0x0:
                      bU.trys.push([0x0, 0x2,, 0x3]);
                      return [0x4, HA(bD, bk)];
                    case 0x1:
                      bZ = bU.sent();
                      bG(bZ);
                      return [0x3, 0x3];
                    case 0x2:
                      bU.sent();
                      bY(bV);
                      return [0x3, 0x3];
                    case 0x3:
                      return [0x2];
                  }
                });
              });
            });
          }
          function HR(bD, bk) {
            return bD.replace(/url\((.*?)\)/g, function (bK, bs) {
              return "url(" + bk.resource.resolveUrl(bs) + ')';
            });
          }
          function Hm(bD) {
            return new Promise(function (bk, bK) {
              HM(bD, function (bs, bO) {
                if (bO || bs && 0x0 === bs.length) {
                  var bV = shell.Error;
                  var bG = shell.ClientError;
                  var bY = bV && new bV(bG.Domain, bG.GameLoadResourceError);
                  bK(bO || bY);
                }
                bk(bs);
              });
            });
          }
          function Hd(bD, bk) {
            var bK = [];
            var bs = bk.bundleInfo.name;
            if (!Hy[bs]) {
              Hy[bs] = [];
            }
            if (!Array.isArray(bD)) {
              bD = [bD];
            }
            var bO = Hy[bs].length + 0x1;
            bD.forEach(function (bV, bG) {
              var bY = bO + bG;
              var bZ = "$CSS-" + bk.bundleInfo.name + '-' + bY;
              bK.push(bZ);
              (function (bU, bM, by) {
                if (-0x1 === Hy[bM].indexOf(bU)) {
                  var bT = document.createElement("style");
                  bT.id = bU;
                  bT.innerHTML = by;
                  document.head.appendChild(bT);
                  Hy[bM].push(bU);
                }
              })(bZ, bk.bundleInfo.name, bV);
            });
            return bK;
          }
          function Hg(bD, bk) {
            var bK = new plugin.Loader();
            return new Promise(function (bs, bO) {
              bK.onLoad = function (bV) {
                bs(bV.response);
              };
              bK.onError = function (bV) {
                bO(bV);
              };
              bK.load([{
                'src': bD,
                'type': plugin.LoadType.Image,
                'maxAttemptCount': bk
              }]);
            });
          }
          function HN(bD, bk, bK) {
            var bs = new plugin.Loader();
            return new Promise(function (bO, bV) {
              bs.onLoad = function (bG) {
                var bY = HR(bG.response, bk);
                bO(bY);
              };
              bs.onError = function (bG) {
                bV(bG);
              };
              bs.load([{
                'src': bD,
                'type': plugin.LoadType.Text,
                'maxAttemptCount': bK
              }]);
            });
          }
          function HA(bD, bk) {
            var bK = new plugin.Loader();
            return new Promise(function (bs, bO) {
              bK.onLoad = function (bV) {
                bs(bV.response);
              };
              bK.onError = function (bV) {
                bO(bV);
              };
              bK.load([{
                'src': bD,
                'type': plugin.LoadType.Blob,
                'maxAttemptCount': bk
              }]);
            });
          }
          function v0(bD, bk) {
            var bK = Hy[bk].indexOf(bD);
            if (-0x1 !== bK) {
              var bs = document.getElementById(bD);
              if (bs && bs.parentElement) {
                bs.remove();
              }
              Hy[bk].splice(bK, 0x1);
            }
          }
          function v1(bD, bk) {
            var bK = {};
            for (var bs in bk) if (bD.hasOwnProperty(bs)) {
              bK[bD[bs]] = bk[bs];
            } else {
              bK[bs] = bk[bs];
            }
            return bK;
          }
          var v2 = {
            unloadBundleAsset: "releaseBundleAsset",
            unload: "release",
            unloadBundle: "releaseBundle",
            deleteBundle: "removeBundle",
            loadByBundleAsset: "loadBundleAsset",
            loadRemoteBySingle: "loadRemoteSingle"
          };
          v1(v2, C);
          var v3 = {
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
          var v4 = {
            DIRECTORY: 'bs',
            PATH: "/socket/message-hub/v2/socket.io"
          };
          var v5;
          var v6;
          var v7;
          var v8;
          var v9 = v1(v3, J);
          var vH = Object.freeze(v4);
          !function (bD) {
            bD[bD.NORMAL = 0x1] = "NORMAL";
            bD[bD.NORMAL_FREE_SPIN = 0x2] = "NORMAL_FREE_SPIN";
            bD[bD.COLLAPSE_FREE_SPIN = 0x15] = "COLLAPSE_FREE_SPIN";
            bD[bD.FREE_SPIN_RESPIN = 0x16] = "FREE_SPIN_RESPIN";
            bD[bD.RESPIN = 0x4] = "RESPIN";
          }(v6 || (v6 = {}));
          (function (bD) {
            bD[bD.SHARE = 0x0] = "SHARE";
            bD[bD.REPLAY = 0x1] = "REPLAY";
          })(v7 || (v7 = {}));
          (function (bD) {
            bD[bD.GOLD = 0x0] = "GOLD";
            bD[bD.SILVER = 0x1] = "SILVER";
            bD[bD.BRONZE = 0x2] = "BRONZE";
          })(v8 || (v8 = {}));
          var vv = {
            SOCIAL_WIDGET_BUTTON: "social_widget-button",
            SOCIAL_NOTIFICATION__DOT: "social_notification-dot",
            SOCIAL_BIG_SCALE_BUTTON: "social_big-scale-button",
            LEADERBOARD_BUTTON: "social_leaderboard-button",
            FAVOURITE_BUTTON_YELLOW: "fav_icon_yellow btn_favourite",
            FAVOURITE_BUTTON_WHITE: "widget_icon_img btn_favourite",
            FAVOURITE_ANIMATED: "social_animated-fav-button",
            GAME_ICON_HIGHLIGHT: "widget_icon_img ic_game_highlight",
            GAME_ICON_PLACEHOLDER: "widget_icon_img ic_game_placeholder",
            CASH_TOURNAMENT: "social_button-image widget_icon_img btn_trophy  social_small-scale-button",
            PLAYER_PROFILE: "social_button-image widget_icon_img btn_profile social_profile-button",
            MEDIA_SHARE: "social_button-image widget_icon_img btn_share social_small-scale-button",
            REPLAY: "social_button-image widget_icon_img btn_replay social_replay-button",
            REPLAY_RIPPLE_EFFECT: "social_button-image widget_icon_img btn_replay social_replay-ripple-effect"
          };
          var vx = {
            SOCIAL_GAME_ICON: "social_game-icon",
            SOCIAL_GAME_ICON_FRAME: "social_game-icon-frame",
            SOCIAL_GAME_ICON_CONTAINER: "social_game-icon-container",
            SOCIAL_GAME_ICON_PLACEHOLDER: "social_game-icon-placeholder"
          };
          var vB;
          var vE;
          (v5 = {
            [v8.SILVER]: "leaderboard_icon_img ic_user_silver",
            [v8.BRONZE]: "leaderboard_icon_img ic_user_bronze"
          })[v8.GOLD] = "leaderboard_icon_img ic_user_gold";
          var vu = Object.freeze(v5);
          var vb = Object.freeze(vv);
          var vc = Object.freeze(vx);
          !function (bD) {
            bD.ONLINE_PLAYER_COUNT = 'op';
            bD.LEADER_BOARD_RANKING = "lbr";
            bD.PUSH_PROFILE_BADGE = "gpnr";
            bD.GET_PLAYER_PROFILE_RESPONSE = "gppr";
          }(vB || (vB = {}));
          (function (bD) {
            bD.SHOW_PROFILE = "SocialPage.ShowProfile";
            bD.SHOW_GAMES = "SocialPage.ShowGames";
            bD.SHOW_LEADERBOARD = "SocialPage.ShowLeaderboards";
            bD.SHOW_TOURNAMENT = "Tournament.ShowTournament";
            bD.SHOW_MEDIA_SHARE = "MediaShare.Show";
            bD.SEND_ANALYTICS_EVENT = "Analytics.Event";
          })(vE || (vE = {}));
          var vf = function () {
            function bD(bk) {
              this.updateInfo(bk);
            }
            bD.prototype.updateInfo = function (bk) {
              this.p = bk;
              var bK = bk.portId;
              var bs = bk.g;
              var bO = bk.hrsId;
              var bV = bk.li;
              var bG = bk.lvl;
              var bY = bk.lctn;
              var bZ = bk.a;
              this.m = bK || 0x0;
              this._ = bs;
              this.O = bO;
              this.A = bV;
              this.S = bG;
              this.j = bY;
              this.k = bZ;
            };
            Object.defineProperty(bD.prototype, "portaitId", {
              'get': function () {
                return this.m;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "gender", {
              'get': function () {
                return this._;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "horoscopeId", {
              'get': function () {
                return this.O;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "luckyIndex", {
              'get': function () {
                return this.A;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "level", {
              'get': function () {
                return this.S;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "levelString", {
              'get': function () {
                return this.S + '';
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "location", {
              'get': function () {
                return this.j;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "age", {
              'get': function () {
                return this.k;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "rawData", {
              'get': function () {
                return this.p;
              },
              'enumerable': false,
              'configurable': true
            });
            return bD;
          }();
          var vS = function () {
            function bD() {}
            bD.prototype.updatePlayerInfo = function (bk) {
              var bK = bk.pid;
              var bs = bk.pnm;
              var bO = bk.spp;
              this.C = bK;
              this.I = bs;
              this.R = new vf(bO);
            };
            bD.prototype.updateGameInfo = function (bk) {
              var bK = bk.gameId;
              var bs = bk.operatorToken;
              var bO = bk.token;
              var bV = bk.betType;
              var bG = bk.platform;
              var bY = bk.apiDomain;
              this.P = bO;
              this.N = bK;
              this.T = bV;
              this.L = bG;
              this.M = bY;
              this.B = bs;
            };
            Object.defineProperty(bD.prototype, "operatorToken", {
              'get': function () {
                return this.B;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "language", {
              'get': function () {
                if (!this.D) {
                  this.D = shell.I18n.locale();
                }
                return this.D;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "domainURL", {
              'get': function () {
                if (!this.G) {
                  this.G = b.location.origin;
                }
                return this.G;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "platform", {
              'get': function () {
                return this.L;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "betType", {
              'get': function () {
                return this.T;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "apiDomain", {
              'get': function () {
                return this.M;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "socketServerName", {
              'get': function () {
                return this.M + vH.DIRECTORY;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "socketPath", {
              'get': function () {
                return vH.PATH;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "gameId", {
              'get': function () {
                return this.N;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "playerName", {
              'get': function () {
                return this.I;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "playerId", {
              'get': function () {
                return this.C;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "token", {
              'get': function () {
                return this.P;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(bD.prototype, "socialPlayerProfile", {
              'get': function () {
                return this.R;
              },
              'enumerable': false,
              'configurable': true
            });
            return bD;
          }();
          var vC = function (bD, bk) {
            var bK = {
              __proto__: []
            };
            vC = Object.setPrototypeOf || bK instanceof Array && function (bs, bO) {
              bs.__proto__ = bO;
            } || function (bs, bO) {
              for (var bV in bO) if (bO.hasOwnProperty(bV)) {
                bs[bV] = bO[bV];
              }
            };
            return vC(bD, bk);
          };
          function vo(bD, bk) {
            function bK() {
              this.constructor = bD;
            }
            vC(bD, bk);
            bD.prototype = null === bk ? Object.create(bk) : (bK.prototype = bk.prototype, new bK());
          }
          var va = function () {
            va = Object.assign || function (bD) {
              var bk;
              var bK = 0x1;
              for (var bs = arguments.length; bK < bs; bK++) {
                for (var bO in bk = arguments[bK]) if (Object.prototype.hasOwnProperty.call(bk, bO)) {
                  bD[bO] = bk[bO];
                }
              }
              return bD;
            };
            return va.apply(this, arguments);
          };
          function vJ(bD, bk) {
            var bK = "function" == typeof Symbol && bD[Symbol.iterator];
            if (!bK) {
              return bD;
            }
            var bs;
            var bO;
            var bV = bK.call(bD);
            var bG = [];
            try {
              for (; (undefined === bk || bk-- > 0x0) && !(bs = bV.next()).done;) {
                bG.push(bs.value);
              }
            } catch (bZ) {
              var bY = {
                error: bZ
              };
              bO = bY;
            } finally {
              try {
                if (bs && !bs.done && (bK = bV["return"])) {
                  bK.call(bV);
                }
              } finally {
                if (bO) {
                  throw bO.error;
                }
              }
            }
            return bG;
          }
          function vP() {
            var bD = [];
            for (var bk = 0x0; bk < arguments.length; bk++) {
              bD = bD.concat(vJ(arguments[bk]));
            }
            return bD;
          }
          var vz = [];
          Object.freeze(vz);
          var vW = {};
          function vF(bD) {
            vQ(false, bD);
            throw 'X';
          }
          function vQ(bD, bk) {
            if (!bD) {
              throw Error("[mobx] " + (bk || "An invariant failed, however the error is obfuscated because this is an production build."));
            }
          }
          function vL(bD) {
            var bk = false;
            return function () {
              if (!bk) {
                bk = true;
                return bD.apply(this, arguments);
              }
            };
          }
          Object.freeze(vW);
          var vX = function () {};
          function vI(bD) {
            if (null === bD || "object" != typeof bD) {
              return false;
            }
            var bk = Object.getPrototypeOf(bD);
            return bk === Object.prototype || null === bk;
          }
          function vD(bD, bk, bK) {
            var bs = {
              enumerable: false,
              writable: true,
              configurable: true,
              value: bK
            };
            Object.defineProperty(bD, bk, bs);
          }
          function vk(bD, bk, bK) {
            var bs = {
              enumerable: false,
              writable: false,
              configurable: true,
              value: bK
            };
            Object.defineProperty(bD, bk, bs);
          }
          function vK(bD, bk) {
            var bK = "isMobX" + bD;
            bk.prototype[bK] = true;
            return function (bs) {
              return null !== bs && "object" == typeof bs && true === bs[bK];
            };
          }
          function vV(bD) {
            for (var bk = [];;) {
              var bK = bD.next();
              if (bK.done) {
                break;
              }
              bk.push(bK.value);
            }
            return bk;
          }
          function vU(bD, bk) {
            vk(bD, "function" == typeof Symbol && Symbol.iterator || "@@iterator", bk);
          }
          function vM(bD) {
            bD["function" == typeof Symbol && Symbol.iterator || "@@iterator"] = vT;
            return bD;
          }
          function vT() {
            return this;
          }
          var vh = function () {
            function bD(bk) {
              if (undefined === bk) {
                bk = "Atom@" + ++xG.mobxGuid;
              }
              this.name = bk;
              this.isPendingUnobservation = false;
              this.isBeingObserved = false;
              this.observers = [];
              this.observersIndexes = {};
              this.diffValue = 0x0;
              this.lastAccessedBy = 0x0;
              this.lowestObserverState = xz.NOT_TRACKING;
            }
            bD.prototype.onBecomeUnobserved = function () {};
            bD.prototype.onBecomeObserved = function () {};
            bD.prototype.reportObserved = function () {
              return xT(this);
            };
            bD.prototype.reportChanged = function () {
              xM();
              (function (bk) {
                if (bk.lowestObserverState !== xz.STALE) {
                  bk.lowestObserverState = xz.STALE;
                  var bK = bk.observers;
                  for (var bs = bK.length; bs--;) {
                    var bO = bK[bs];
                    if (bO.dependenciesState === xz.UP_TO_DATE) {
                      if (bO.isTracing !== xW.NONE) {
                        xh(bO, bk);
                      }
                      bO.onBecomeStale();
                    }
                    bO.dependenciesState = xz.STALE;
                  }
                }
              })(this);
              xy();
            };
            bD.prototype.toString = function () {
              return this.name;
            };
            return bD;
          }();
          var vj = vK("Atom", vh);
          function vl(bD, bk, bK) {
            if (undefined === bk) {
              bk = vX;
            }
            if (undefined === bK) {
              bK = vX;
            }
            var bs = new vh(bD);
            BB("onBecomeObserved", bs, bk, undefined);
            BB("onBecomeUnobserved", bs, bK, undefined);
            return bs;
          }
          function vR(bD, bk) {
            return bD === bk;
          }
          var vm = {
            'identity': vR,
            'structural': function (bD, bk) {
              return E3(bD, bk);
            },
            'default': function (bD, bk) {
              return function (bK, bs) {
                return "number" == typeof bK && "number" == typeof bs && isNaN(bK) && isNaN(bs);
              }(bD, bk) || bD === bk;
            }
          };
          var vd = {};
          var vg = {};
          function vN(bD, bk) {
            var bK = bk ? vd : vg;
            return bK[bD] || (bK[bD] = {
              'configurable': true,
              'enumerable': bk,
              'get': function () {
                vA(this);
                return this[bD];
              },
              'set': function (bs) {
                vA(this);
                this[bD] = bs;
              }
            });
          }
          function vA(bD) {
            if (true !== bD.__mobxDidRunLazyInitializers) {
              var bk = bD.__mobxDecorators;
              if (bk) {
                vD(bD, "__mobxDidRunLazyInitializers", true);
                for (var bK in bk) {
                  var bs = bk[bK];
                  bs.propertyCreator(bD, bs.prop, bs.descriptor, bs.decoratorTarget, bs.decoratorArguments);
                }
              }
            }
          }
          function x0(bD, bk) {
            return function () {
              var bK;
              var bs = function (bO, bV, bG, bY) {
                if (true === bY) {
                  bk(bO, bV, bG, bO, bK);
                  return null;
                }
                if (!Object.prototype.hasOwnProperty.call(bO, "__mobxDecorators")) {
                  var bZ = bO.__mobxDecorators;
                  vD(bO, "__mobxDecorators", va({}, bZ));
                }
                bO.__mobxDecorators[bV] = {
                  'prop': bV,
                  'propertyCreator': bk,
                  'descriptor': bG,
                  'decoratorTarget': bO,
                  'decoratorArguments': bK
                };
                return vN(bV, bD);
              };
              return (0x2 === arguments.length || 0x3 === arguments.length) && "string" == typeof arguments[0x1] || 0x4 === arguments.length && true === arguments[0x3] ? (bK = vz, bs.apply(null, arguments)) : (bK = Array.prototype.slice.call(arguments), bs);
            };
          }
          function x2(bD, bk, bK) {
            var bs = {
              name: bK
            };
            var bO = {
              name: bK
            };
            var bV = {
              name: bK
            };
            var bG = {
              name: bK
            };
            return Bf(bD) ? bD : Array.isArray(bD) ? xE.array(bD, bs) : vI(bD) ? xE.object(bD, undefined, bO) : undefined !== (undefined !== b ? b : global).Map && bD instanceof (undefined !== b ? b : global).Map ? xE.map(bD, bV) : bD instanceof Set ? xE.set(bD, bG) : bD;
          }
          function x3(bD) {
            return bD;
          }
          function x4(bD) {
            var bk = x0(true, function (bs, bO, bV) {
              !function (bG, bY, bZ, bU) {
                var bM = Bl(bG);
                if (undefined !== bM.interceptors && bM.interceptors.length > 0x0) {
                  var by = {
                    object: bG,
                    name: bY,
                    type: "add",
                    newValue: bZ
                  };
                  var bT = BJ(bM, by);
                  if (!bT) {
                    return;
                  }
                  bZ = bT.newValue;
                }
                bZ = (bM.values[bY] = new xJ(bZ, bU, bM.name + '.' + bY, false)).value;
                Object.defineProperty(bG, bY, function (bh) {
                  return BR[bh] || (BR[bh] = {
                    'configurable': true,
                    'enumerable': true,
                    'get': function () {
                      return this.$mobx.read(this, bh);
                    },
                    'set': function (bj) {
                      this.$mobx.write(this, bh, bj);
                    }
                  });
                }(bY));
                if (bM.keys) {
                  bM.keys.push(bY);
                }
                (function (bh, bj, bl, bR) {
                  var bm = {
                    type: "add",
                    object: bj,
                    name: bl,
                    newValue: bR
                  };
                  var bd = undefined !== bh.changeListeners && bh.changeListeners.length > 0x0;
                  var bg = !!xG.spyListeners.length;
                  var bN = bd || bg ? bm : null;
                  var bA = {
                    name: bh.name,
                    key: bl
                  };
                  if (bg) {
                    B1(va({}, bN, bA));
                  }
                  if (bd) {
                    BW(bh, bN);
                  }
                  if (bg) {
                    B4();
                  }
                })(bM, bG, bY, bZ);
              }(bs, bO, bV ? bV.initializer ? bV.initializer.call(bs) : bV.value : undefined, bD);
            });
            if ("undefined" != typeof process) {
              process.env;
            }
            bk.enhancer = bD;
            return bk;
          }
          var x5 = {
            deep: true,
            name: undefined,
            defaultDecorator: undefined
          };
          Object.freeze(x5);
          var x9 = x4(x2);
          var xH = x4(function (bD, bk, bK) {
            var bs = {
              name: bK,
              deep: false
            };
            var bO = {
              name: bK,
              deep: false
            };
            var bV = {
              name: bK,
              deep: false
            };
            var bG = {
              name: bK,
              deep: false
            };
            return null == bD || BN(bD) || null !== bD && "object" == typeof bD && BV(bD.$mobx) || BM(bD) || Bh(bD) ? bD : Array.isArray(bD) ? xE.array(bD, bs) : vI(bD) ? xE.object(bD, undefined, bO) : undefined !== (undefined !== b ? b : global).Map && bD instanceof (undefined !== b ? b : global).Map ? xE.map(bD, bV) : bD instanceof Set ? xE.set(bD, bG) : vF(false);
          });
          var xv = x4(x3);
          var xx = x4(function (bD, bk) {
            return E3(bD, bk) ? bk : bD;
          });
          var xB = {
            'box': function (bD, bk) {
              if (arguments.length > 0x2) {
                xu("box");
              }
              var bK = null == bk ? x5 : "string" == typeof bk ? {
                'name': bk,
                'deep': true
              } : bk;
              return new xJ(bD, bK.defaultDecorator ? bK.defaultDecorator.enhancer : false === bK.deep ? x3 : x2, bK.name, true, bK.equals);
            },
            'shallowBox': function (bD, bk) {
              var bK = {
                name: bk,
                deep: false
              };
              if (arguments.length > 0x2) {
                xu("shallowBox");
              }
              return xE.box(bD, bK);
            },
            'array': function (bD, bk) {
              if (arguments.length > 0x2) {
                xu("array");
              }
              var bK = null == bk ? x5 : "string" == typeof bk ? {
                'name': bk,
                'deep': true
              } : bk;
              return new BD(bD, bK.defaultDecorator ? bK.defaultDecorator.enhancer : false === bK.deep ? x3 : x2, bK.name);
            },
            'shallowArray': function (bD, bk) {
              var bK = {
                name: bk,
                deep: false
              };
              if (arguments.length > 0x2) {
                xu("shallowArray");
              }
              return xE.array(bD, bK);
            },
            'map': function (bD, bk) {
              if (arguments.length > 0x2) {
                xu("map");
              }
              var bK = null == bk ? x5 : "string" == typeof bk ? {
                'name': bk,
                'deep': true
              } : bk;
              return new BZ(bD, bK.defaultDecorator ? bK.defaultDecorator.enhancer : false === bK.deep ? x3 : x2, bK.name);
            },
            'shallowMap': function (bD, bk) {
              var bK = {
                name: bk,
                deep: false
              };
              if (arguments.length > 0x2) {
                xu("shallowMap");
              }
              return xE.map(bD, bK);
            },
            'set': function (bD, bk) {
              if (arguments.length > 0x2) {
                xu("set");
              }
              var bK = null == bk ? x5 : "string" == typeof bk ? {
                'name': bk,
                'deep': true
              } : bk;
              return new BT(bD, bK.defaultDecorator ? bK.defaultDecorator.enhancer : false === bK.deep ? x3 : x2, bK.name);
            },
            'object': function (bD, bk, bK) {
              if ("string" == typeof arguments[0x1]) {
                xu("object");
              }
              var bs = null == bK ? x5 : "string" == typeof bK ? {
                'name': bK,
                'deep': true
              } : bK;
              return BE({}, bD, bk, bs);
            },
            'shallowObject': function (bD, bk) {
              var bK = {
                name: bk,
                deep: false
              };
              if ("string" == typeof arguments[0x1]) {
                xu("shallowObject");
              }
              return xE.object(bD, {}, bK);
            },
            'ref': xv,
            'shallow': xH,
            'deep': x9,
            'struct': xx
          };
          var xE = function (bD, bk, bK) {
            if ("string" == typeof arguments[0x1]) {
              return x9.apply(null, arguments);
            }
            if (Bf(bD)) {
              return bD;
            }
            var bs = vI(bD) ? xE.object(bD, bk, bK) : Array.isArray(bD) ? xE.array(bD, bk) : undefined !== (undefined !== b ? b : global).Map && bD instanceof (undefined !== b ? b : global).Map ? xE.map(bD, bk) : bD instanceof Set ? xE.set(bD, bk) : bD;
            if (bs !== bD) {
              return bs;
            }
            vF(false);
          };
          function xu(bD) {
            vF("Expected one or two arguments to observable." + bD + ". Did you accidentally try to use observable." + bD + " as decorator?");
          }
          Object.keys(xB).forEach(function (bD) {
            return xE[bD] = xB[bD];
          });
          var xb = x0(false, function (bD, bk, bK, bs, bO) {
            var bV = bK.get;
            var bG = bK.set;
            var bY = bO[0x0] || {};
            !function (bZ, bU, bM) {
              var by = Bl(bZ);
              bM.name = by.name + '.' + bU;
              bM.context = bZ;
              by.values[bU] = new xP(bM);
              Object.defineProperty(bZ, bU, function (bT) {
                return Bm[bT] || (Bm[bT] = {
                  'configurable': xG.computedConfigurable,
                  'enumerable': false,
                  'get': function () {
                    return Bd(this).read(this, bT);
                  },
                  'set': function (bh) {
                    Bd(this).write(this, bT, bh);
                  }
                });
              }(bU));
            }(bD, bk, va({
              'get': bV,
              'set': bG
            }, bY));
          });
          function xc(bD, bk) {
            var bK = function () {
              return xf(bD, bk, this, arguments);
            };
            bK.isMobxAction = true;
            return bK;
          }
          function xf(bD, bk, bK, bs) {
            var bO = function (bY, bZ, bU, bM) {
              var by = !!xG.spyListeners.length && !!bY;
              var bT = 0x0;
              if (by) {
                bT = Date.now();
                var bh = bM && bM.length || 0x0;
                var bj = Array(bh);
                if (bh > 0x0) {
                  for (var bl = 0x0; bl < bh; bl++) {
                    bj[bl] = bM[bl];
                  }
                }
                var bR = {
                  type: "action",
                  name: bY,
                  object: bU,
                  arguments: bj
                };
                B1(bR);
              }
              var bm = xD();
              xM();
              return {
                'prevDerivation': bm,
                'prevAllowStateChanges': xC(true),
                'notifySpy': by,
                'startTime': bT
              };
            }(bD, 0x0, bK, bs);
            var bV = true;
            try {
              var bG = bk.apply(bK, bs);
              bV = false;
              return bG;
            } finally {
              if (bV) {
                xG.suppressReactionErrors = bV;
                xS(bO);
                xG.suppressReactionErrors = false;
              } else {
                xS(bO);
              }
            }
          }
          function xS(bD) {
            xo(bD.prevAllowStateChanges);
            xy();
            xk(bD.prevDerivation);
            if (bD.notifySpy) {
              B4({
                'time': Date.now() - bD.startTime
              });
            }
          }
          function xC(bD) {
            var bk = xG.allowStateChanges;
            xG.allowStateChanges = bD;
            return bk;
          }
          function xo(bD) {
            xG.allowStateChanges = bD;
          }
          var xa = {
            equals: vm.structural
          };
          xb(xa);
          var xJ = function (bD) {
            function bk(bK, bs, bO, bV, bG) {
              if (undefined === bO) {
                bO = "ObservableValue@" + ++xG.mobxGuid;
              }
              if (undefined === bV) {
                bV = true;
              }
              if (undefined === bG) {
                bG = vm["default"];
              }
              var bY = bD.call(this, bO) || this;
              bY.enhancer = bs;
              bY.name = bO;
              bY.equals = bG;
              bY.hasUnreportedChange = false;
              bY.value = bs(bK, undefined, bO);
              if (bV && !!xG.spyListeners.length) {
                B0({
                  'type': "create",
                  'name': bY.name,
                  'newValue': '' + bY.value
                });
              }
              return bY;
            }
            vo(bk, bD);
            bk.prototype.dehanceValue = function (bK) {
              return undefined !== this.dehancer ? this.dehancer(bK) : bK;
            };
            bk.prototype.set = function (bK) {
              var bs = this.value;
              if ((bK = this.prepareNewValue(bK)) !== xG.UNCHANGED) {
                var bO = !!xG.spyListeners.length;
                var bV = {
                  type: "update",
                  name: this.name,
                  newValue: bK,
                  oldValue: bs
                };
                if (bO) {
                  B1(bV);
                }
                this.setNewValue(bK);
                if (bO) {
                  B4();
                }
              }
            };
            bk.prototype.prepareNewValue = function (bK) {
              xL(this);
              if (undefined !== this.interceptors && this.interceptors.length > 0x0) {
                var bs = BJ(this, {
                  'object': this,
                  'type': "update",
                  'newValue': bK
                });
                if (!bs) {
                  return xG.UNCHANGED;
                }
                bK = bs.newValue;
              }
              bK = this.enhancer(bK, this.value, this.name);
              return this.equals(this.value, bK) ? xG.UNCHANGED : bK;
            };
            bk.prototype.setNewValue = function (bK) {
              var bs = this.value;
              this.value = bK;
              this.reportChanged();
              if (undefined !== this.changeListeners && this.changeListeners.length > 0x0) {
                BW(this, {
                  'type': "update",
                  'object': this,
                  'newValue': bK,
                  'oldValue': bs
                });
              }
            };
            bk.prototype.get = function () {
              this.reportObserved();
              return this.dehanceValue(this.value);
            };
            bk.prototype.intercept = function (bK) {
              return Ba(this, bK);
            };
            bk.prototype.observe = function (bK, bs) {
              var bO = {
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
              };
              if (bs) {
                bK(bO);
              }
              return Bz(this, bK);
            };
            bk.prototype.toJSON = function () {
              return this.get();
            };
            bk.prototype.toString = function () {
              return this.name + '[' + this.value + ']';
            };
            bk.prototype.valueOf = function () {
              return null === this.get() ? null : "object" == typeof this.get() ? '' + this.get() : this.get();
            };
            return bk;
          }(vh);
          xJ.prototype["function" == typeof Symbol && Symbol.toPrimitive || "@@toPrimitive"] = xJ.prototype.valueOf;
          vK("ObservableValue", xJ);
          var xP = function () {
            function bD(bk) {
              this.dependenciesState = xz.NOT_TRACKING;
              this.observing = [];
              this.newObserving = null;
              this.isBeingObserved = false;
              this.isPendingUnobservation = false;
              this.observers = [];
              this.observersIndexes = {};
              this.diffValue = 0x0;
              this.runId = 0x0;
              this.lastAccessedBy = 0x0;
              this.lowestObserverState = xz.UP_TO_DATE;
              this.unboundDepsCount = 0x0;
              this.__mapid = '#' + ++xG.mobxGuid;
              this.value = new xw(null);
              this.isComputing = false;
              this.isRunningSetter = false;
              this.isTracing = xW.NONE;
              this.derivation = bk.get;
              this.name = bk.name || "ComputedValue@" + ++xG.mobxGuid;
              if (bk.set) {
                this.setter = xc(this.name + "-setter", bk.set);
              }
              this.equals = bk.equals || (bk.compareStructural || bk.struct ? vm.structural : vm["default"]);
              this.scope = bk.context;
              this.requiresReaction = !!bk.requiresReaction;
              this.keepAlive = !!bk.keepAlive;
            }
            bD.prototype.onBecomeStale = function () {
              !function (bk) {
                if (bk.lowestObserverState === xz.UP_TO_DATE) {
                  bk.lowestObserverState = xz.POSSIBLY_STALE;
                  var bK = bk.observers;
                  for (var bs = bK.length; bs--;) {
                    var bO = bK[bs];
                    if (bO.dependenciesState === xz.UP_TO_DATE) {
                      bO.dependenciesState = xz.POSSIBLY_STALE;
                      if (bO.isTracing !== xW.NONE) {
                        xh(bO, bk);
                      }
                      bO.onBecomeStale();
                    }
                  }
                }
              }(this);
            };
            bD.prototype.onBecomeUnobserved = function () {};
            bD.prototype.onBecomeObserved = function () {};
            bD.prototype.get = function () {
              if (this.isComputing) {
                vF("Cycle detected in computation " + this.name + ": " + this.derivation);
              }
              if (0x0 !== xG.inBatch || 0x0 !== this.observers.length || this.keepAlive) {
                xT(this);
                if (xQ(this) && this.trackAndCompute()) {
                  (function (bK) {
                    if (bK.lowestObserverState !== xz.STALE) {
                      bK.lowestObserverState = xz.STALE;
                      var bs = bK.observers;
                      for (var bO = bs.length; bO--;) {
                        var bV = bs[bO];
                        if (bV.dependenciesState === xz.POSSIBLY_STALE) {
                          bV.dependenciesState = xz.STALE;
                        } else if (bV.dependenciesState === xz.UP_TO_DATE) {
                          bK.lowestObserverState = xz.UP_TO_DATE;
                        }
                      }
                    }
                  })(this);
                }
              } else if (xQ(this)) {
                this.warnAboutUntrackedRead();
                xM();
                this.value = this.computeValue(false);
                xy();
              }
              var bk = this.value;
              if (bk instanceof xw) {
                throw bk.cause;
              }
              return bk;
            };
            bD.prototype.peek = function () {
              var bk = this.computeValue(false);
              if (bk instanceof xw) {
                throw bk.cause;
              }
              return bk;
            };
            bD.prototype.set = function (bk) {
              if (this.setter) {
                vQ(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
                this.isRunningSetter = true;
                try {
                  this.setter.call(this.scope, bk);
                } finally {
                  this.isRunningSetter = false;
                }
              } else {
                vQ(false, false);
              }
            };
            bD.prototype.trackAndCompute = function () {
              var bk = {
                object: this.scope,
                type: "compute",
                name: this.name
              };
              if (!!xG.spyListeners.length) {
                B0(bk);
              }
              var bK = this.value;
              var bs = this.dependenciesState === xz.NOT_TRACKING;
              var bO = this.computeValue(true);
              var bV = bs || bK instanceof xw || bO instanceof xw || !this.equals(bK, bO);
              if (bV) {
                this.value = bO;
              }
              return bV;
            };
            bD.prototype.computeValue = function (bk) {
              var bK;
              this.isComputing = true;
              xG.computationDepth++;
              if (bk) {
                bK = xX(this, this.derivation, this.scope);
              } else if (true === xG.disableErrorBoundaries) {
                bK = this.derivation.call(this.scope);
              } else {
                try {
                  bK = this.derivation.call(this.scope);
                } catch (bs) {
                  bK = new xw(bs);
                }
              }
              xG.computationDepth--;
              this.isComputing = false;
              return bK;
            };
            bD.prototype.suspend = function () {
              if (!this.keepAlive) {
                xp(this);
                this.value = undefined;
              }
            };
            bD.prototype.observe = function (bk, bK) {
              var bs = this;
              var bO = true;
              var bV = undefined;
              return function (bG, bY) {
                if (undefined === bY) {
                  bY = vW;
                }
                var bZ;
                var bU = bY && bY.name || "Autorun@" + ++xG.mobxGuid;
                if (bY.scheduler || bY.delay) {
                  var bM = function (bh) {
                    return bh.scheduler ? bh.scheduler : bh.delay ? function (bj) {
                      return setTimeout(bj, bh.delay);
                    } : Bv;
                  }(bY);
                  var by = false;
                  bZ = new xl(bU, function () {
                    if (!by) {
                      by = true;
                      bM(function () {
                        by = false;
                        if (!bZ.isDisposed) {
                          bZ.track(bT);
                        }
                      });
                    }
                  }, bY.onError);
                } else {
                  bZ = new xl(bU, function () {
                    this.track(bT);
                  }, bY.onError);
                }
                function bT() {
                  bG();
                }
                bZ.schedule();
                return bZ.getDisposer();
              }(function () {
                var bG = bs.get();
                if (!bO || bK) {
                  var bY = xD();
                  var bZ = {
                    type: "update",
                    object: bs,
                    newValue: bG,
                    oldValue: bV
                  };
                  bk(bZ);
                  xk(bY);
                }
                bO = false;
                bV = bG;
              });
            };
            bD.prototype.warnAboutUntrackedRead = function () {};
            bD.prototype.toJSON = function () {
              return this.get();
            };
            bD.prototype.toString = function () {
              return this.name + '[' + this.derivation.toString() + ']';
            };
            bD.prototype.valueOf = function () {
              return null === this.get() ? null : "object" == typeof this.get() ? '' + this.get() : this.get();
            };
            return bD;
          }();
          xP.prototype["function" == typeof Symbol && Symbol.toPrimitive || "@@toPrimitive"] = xP.prototype.valueOf;
          var xz;
          var xW;
          var xq = vK("ComputedValue", xP);
          !function (bD) {
            bD[bD.NOT_TRACKING = -0x1] = "NOT_TRACKING";
            bD[bD.UP_TO_DATE = 0x0] = "UP_TO_DATE";
            bD[bD.POSSIBLY_STALE = 0x1] = "POSSIBLY_STALE";
            bD[bD.STALE = 0x2] = "STALE";
          }(xz || (xz = {}));
          (function (bD) {
            bD[bD.NONE = 0x0] = "NONE";
            bD[bD.LOG = 0x1] = "LOG";
            bD[bD.BREAK = 0x2] = "BREAK";
          })(xW || (xW = {}));
          var xw = function (bD) {
            this.cause = bD;
          };
          function xQ(bD) {
            switch (bD.dependenciesState) {
              case xz.UP_TO_DATE:
                return false;
              case xz.NOT_TRACKING:
              case xz.STALE:
                return true;
              case xz.POSSIBLY_STALE:
                var bk = xD();
                var bK = bD.observing;
                var bs = bK.length;
                for (var bO = 0x0; bO < bs; bO++) {
                  var bV = bK[bO];
                  if (xq(bV)) {
                    if (xG.disableErrorBoundaries) {
                      bV.get();
                    } else {
                      try {
                        bV.get();
                      } catch (bG) {
                        xk(bk);
                        return true;
                      }
                    }
                    if (bD.dependenciesState === xz.STALE) {
                      xk(bk);
                      return true;
                    }
                  }
                }
                xK(bD);
                xk(bk);
                return false;
            }
          }
          function xL(bD) {
            var bk = bD.observers.length > 0x0;
            if (xG.computationDepth > 0x0 && bk) {
              vF(false);
            }
            if (!(xG.allowStateChanges || !bk && "strict" !== xG.enforceActions)) {
              vF(false);
            }
          }
          function xX(bD, bk, bK) {
            xK(bD);
            bD.newObserving = Array(bD.observing.length + 0x64);
            bD.unboundDepsCount = 0x0;
            bD.runId = ++xG.runId;
            var bs;
            var bO = xG.trackingDerivation;
            xG.trackingDerivation = bD;
            if (true === xG.disableErrorBoundaries) {
              bs = bk.call(bK);
            } else {
              try {
                bs = bk.call(bK);
              } catch (bV) {
                bs = new xw(bV);
              }
            }
            xG.trackingDerivation = bO;
            (function (bG) {
              var bY = bG.observing;
              var bZ = bG.observing = bG.newObserving;
              var bU = xz.UP_TO_DATE;
              var bM = 0x0;
              var by = bG.unboundDepsCount;
              for (var bT = 0x0; bT < by; bT++) {
                if (0x0 === (bh = bZ[bT]).diffValue) {
                  bh.diffValue = 0x1;
                  if (bM !== bT) {
                    bZ[bM] = bh;
                  }
                  bM++;
                }
                if (bh.dependenciesState > bU) {
                  bU = bh.dependenciesState;
                }
              }
              bZ.length = bM;
              bG.newObserving = null;
              for (by = bY.length; by--;) {
                if (0x0 === (bh = bY[by]).diffValue) {
                  xZ(bh, bG);
                }
                bh.diffValue = 0x0;
              }
              for (; bM--;) {
                var bh;
                if (0x1 === (bh = bZ[bM]).diffValue) {
                  bh.diffValue = 0x0;
                  xY(bh, bG);
                }
              }
              if (bU !== xz.UP_TO_DATE) {
                bG.dependenciesState = bU;
                bG.onBecomeStale();
              }
            })(bD);
            return bs;
          }
          function xp(bD) {
            var bk = bD.observing;
            bD.observing = [];
            for (var bK = bk.length; bK--;) {
              xZ(bk[bK], bD);
            }
            bD.dependenciesState = xz.NOT_TRACKING;
          }
          function xI(bD) {
            var bk = xD();
            var bK = bD();
            xk(bk);
            return bK;
          }
          function xD() {
            var bD = xG.trackingDerivation;
            xG.trackingDerivation = null;
            return bD;
          }
          function xk(bD) {
            xG.trackingDerivation = bD;
          }
          function xK(bD) {
            if (bD.dependenciesState !== xz.UP_TO_DATE) {
              bD.dependenciesState = xz.UP_TO_DATE;
              var bk = bD.observing;
              for (var bK = bk.length; bK--;) {
                bk[bK].lowestObserverState = xz.UP_TO_DATE;
              }
            }
          }
          var xs = function () {
            this.version = 0x5;
            this.UNCHANGED = {};
            this.trackingDerivation = null;
            this.computationDepth = 0x0;
            this.runId = 0x0;
            this.mobxGuid = 0x0;
            this.inBatch = 0x0;
            this.pendingUnobservations = [];
            this.pendingReactions = [];
            this.isRunningReactions = false;
            this.allowStateChanges = true;
            this.enforceActions = false;
            this.spyListeners = [];
            this.globalReactionErrorHandlers = [];
            this.computedRequiresReaction = false;
            this.computedConfigurable = false;
            this.disableErrorBoundaries = false;
            this.suppressReactionErrors = false;
          };
          var xO = true;
          var xV = false;
          var xG = function () {
            var bD = undefined !== b ? b : global;
            if (bD.__mobxInstanceCount > 0x0 && !bD.__mobxGlobals) {
              xO = false;
            }
            if (bD.__mobxGlobals && bD.__mobxGlobals.version !== new xs().version) {
              xO = false;
            }
            return xO ? bD.__mobxGlobals ? (bD.__mobxInstanceCount += 0x1, bD.__mobxGlobals.UNCHANGED || (bD.__mobxGlobals.UNCHANGED = {}), bD.__mobxGlobals) : (bD.__mobxInstanceCount = 0x1, bD.__mobxGlobals = new xs()) : (setTimeout(function () {
              if (!xV) {
                vF("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
              }
            }, 0x1), new xs());
          }();
          function xY(bD, bk) {
            var bK = bD.observers.length;
            if (bK) {
              bD.observersIndexes[bk.__mapid] = bK;
            }
            bD.observers[bK] = bk;
            if (bD.lowestObserverState > bk.dependenciesState) {
              bD.lowestObserverState = bk.dependenciesState;
            }
          }
          function xZ(bD, bk) {
            if (0x1 === bD.observers.length) {
              bD.observers.length = 0x0;
              xU(bD);
            } else {
              var bK = bD.observers;
              var bs = bD.observersIndexes;
              var bO = bK.pop();
              if (bO !== bk) {
                var bV = bs[bk.__mapid] || 0x0;
                if (bV) {
                  bs[bO.__mapid] = bV;
                } else {
                  delete bs[bO.__mapid];
                }
                bK[bV] = bO;
              }
              delete bs[bk.__mapid];
            }
          }
          function xU(bD) {
            if (false === bD.isPendingUnobservation) {
              bD.isPendingUnobservation = true;
              xG.pendingUnobservations.push(bD);
            }
          }
          function xM() {
            xG.inBatch++;
          }
          function xy() {
            if (0x0 == --xG.inBatch) {
              xm();
              var bD = xG.pendingUnobservations;
              for (var bk = 0x0; bk < bD.length; bk++) {
                var bK = bD[bk];
                bK.isPendingUnobservation = false;
                if (0x0 === bK.observers.length) {
                  if (bK.isBeingObserved) {
                    bK.isBeingObserved = false;
                    bK.onBecomeUnobserved();
                  }
                  if (bK instanceof xP) {
                    bK.suspend();
                  }
                }
              }
              xG.pendingUnobservations = [];
            }
          }
          function xT(bD) {
            var bk = xG.trackingDerivation;
            return null !== bk ? (bk.runId !== bD.lastAccessedBy && (bD.lastAccessedBy = bk.runId, bk.newObserving[bk.unboundDepsCount++] = bD, bD.isBeingObserved || (bD.isBeingObserved = true, bD.onBecomeObserved())), true) : (0x0 === bD.observers.length && xG.inBatch > 0x0 && xU(bD), false);
          }
          function xh(bD, bk) {
            if (bD.isTracing === xW.BREAK) {
              var bK = [];
              xj(Bb(BA(bD, undefined)), bK, 0x1);
              Function("debugger;\n/*\nTracing '" + bD.name + "'\n\nYou are entering this break point because derivation '" + bD.name + "' is being traced and '" + bk.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (bD instanceof xP ? bD.derivation.toString().replace(/[*]\//g, '/') : '') + "\n\nThe dependencies for this derivation are:\n\n" + bK.join("\n") + "\n*/\n    ")();
            }
          }
          function xj(bD, bk, bK) {
            if (bk.length >= 0x3e8) {
              bk.push("(and many more)");
            } else {
              bk.push('' + Array(bK).join("\t") + bD.name);
              if (bD.dependencies) {
                bD.dependencies.forEach(function (bs) {
                  return xj(bs, bk, bK + 0x1);
                });
              }
            }
          }
          var xl = function () {
            function bD(bk, bK, bs) {
              if (undefined === bk) {
                bk = "Reaction@" + ++xG.mobxGuid;
              }
              this.name = bk;
              this.onInvalidate = bK;
              this.errorHandler = bs;
              this.observing = [];
              this.newObserving = [];
              this.dependenciesState = xz.NOT_TRACKING;
              this.diffValue = 0x0;
              this.runId = 0x0;
              this.unboundDepsCount = 0x0;
              this.__mapid = '#' + ++xG.mobxGuid;
              this.isDisposed = false;
              this.U = false;
              this.V = false;
              this.F = false;
              this.isTracing = xW.NONE;
            }
            bD.prototype.onBecomeStale = function () {
              this.schedule();
            };
            bD.prototype.schedule = function () {
              if (!this.U) {
                this.U = true;
                xG.pendingReactions.push(this);
                xm();
              }
            };
            bD.prototype.isScheduled = function () {
              return this.U;
            };
            bD.prototype.runReaction = function () {
              if (!this.isDisposed) {
                xM();
                this.U = false;
                if (xQ(this)) {
                  this.V = true;
                  try {
                    this.onInvalidate();
                    if (this.V && !!xG.spyListeners.length) {
                      B0({
                        'name': this.name,
                        'type': "scheduled-reaction"
                      });
                    }
                  } catch (bk) {
                    this.reportExceptionInDerivation(bk);
                  }
                }
                xy();
              }
            };
            bD.prototype.track = function (bk) {
              xM();
              var bK;
              var bs = !!xG.spyListeners.length;
              var bO = {
                name: this.name,
                type: "reaction"
              };
              if (bs) {
                bK = Date.now();
                B1(bO);
              }
              this.F = true;
              var bV = xX(this, bk, undefined);
              this.F = false;
              this.V = false;
              if (this.isDisposed) {
                xp(this);
              }
              if (bV instanceof xw) {
                this.reportExceptionInDerivation(bV.cause);
              }
              if (bs) {
                B4({
                  'time': Date.now() - bK
                });
              }
              xy();
            };
            bD.prototype.reportExceptionInDerivation = function (bk) {
              var bK = this;
              if (this.errorHandler) {
                this.errorHandler(bk, this);
              } else {
                if (xG.disableErrorBoundaries) {
                  throw bk;
                }
                var bs = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
                var bO = {
                  type: "error",
                  name: this.name,
                  message: bs,
                  error: '' + bk
                };
                xG.suppressReactionErrors;
                if (!!xG.spyListeners.length) {
                  B0(bO);
                }
                xG.globalReactionErrorHandlers.forEach(function (bV) {
                  return bV(bk, bK);
                });
              }
            };
            bD.prototype.dispose = function () {
              if (!this.isDisposed) {
                this.isDisposed = true;
                if (!this.F) {
                  xM();
                  xp(this);
                  xy();
                }
              }
            };
            bD.prototype.getDisposer = function () {
              var bk = this.dispose.bind(this);
              bk.$mobx = this;
              return bk;
            };
            bD.prototype.toString = function () {
              return "Reaction[" + this.name + ']';
            };
            bD.prototype.trace = function (bk) {
              if (undefined === bk) {
                bk = false;
              }
              (function () {
                var bK = [];
                for (var bs = 0x0; bs < arguments.length; bs++) {
                  bK[bs] = arguments[bs];
                }
                var bO = false;
                if ("boolean" == typeof bK[bK.length - 0x1]) {
                  bO = bK.pop();
                }
                var bV = BS(bK);
                if (!bV) {
                  return vF(false);
                }
                bV.isTracing;
                xW.NONE;
                bV.isTracing = bO ? xW.BREAK : xW.LOG;
              })(this, bk);
            };
            return bD;
          }();
          var xR = function (bD) {
            return bD();
          };
          function xm() {
            if (!(xG.inBatch > 0x0 || xG.isRunningReactions)) {
              xR(xd);
            }
          }
          function xd() {
            xG.isRunningReactions = true;
            var bD = xG.pendingReactions;
            for (var bk = 0x0; bD.length > 0x0;) {
              if (0x64 == ++bk) {
                bD.splice(0x0);
              }
              var bK = bD.splice(0x0);
              var bs = 0x0;
              for (var bO = bK.length; bs < bO; bs++) {
                bK[bs].runReaction();
              }
            }
            xG.isRunningReactions = false;
          }
          var xg = vK("Reaction", xl);
          function xN(bD) {
            var bk = xR;
            xR = function (bK) {
              return bD(function () {
                return bk(bK);
              });
            };
          }
          function B0(bD) {
            if (xG.spyListeners.length) {
              var bk = xG.spyListeners;
              var bK = 0x0;
              for (var bs = bk.length; bK < bs; bK++) {
                bk[bK](bD);
              }
            }
          }
          function B1(bD) {
            var bk = {
              spyReportStart: true
            };
            B0(va({}, bD, bk));
          }
          var B2 = {
            spyReportEnd: true
          };
          function B4(bD) {
            var bk = {
              spyReportEnd: true
            };
            B0(bD ? va({}, bD, bk) : B2);
          }
          function B5(bD) {
            xG.spyListeners.push(bD);
            return vL(function () {
              xG.spyListeners = xG.spyListeners.filter(function (bk) {
                return bk !== bD;
              });
            });
          }
          function B6() {
            vF(false);
          }
          function B7(bD) {
            return function (bk, bK, bs) {
              if (bs) {
                if (bs.value) {
                  return {
                    'value': xc(bD, bs.value),
                    'enumerable': false,
                    'configurable': true,
                    'writable': true
                  };
                }
                var bO = bs.initializer;
                return {
                  'enumerable': false,
                  'configurable': true,
                  'writable': true,
                  'initializer': function () {
                    return xc(bD, bO.call(this));
                  }
                };
              }
              return B8(bD).apply(this, arguments);
            };
          }
          function B8(bD) {
            return function (bk, bK) {
              Object.defineProperty(bk, bK, {
                'configurable': true,
                'enumerable': false,
                'get': function () {},
                'set': function (bs) {
                  vD(this, bK, B9(bD, bs));
                }
              });
            };
          }
          var B9 = function (bD, bk, bK, bs) {
            return 0x1 === arguments.length && "function" == typeof bD ? xc(bD.name || "<unnamed action>", bD) : 0x2 === arguments.length && "function" == typeof bk ? xc(bD, bk) : 0x1 === arguments.length && "string" == typeof bD ? B7(bD) : true !== bs ? B7(bk).apply(null, arguments) : void (bD[bk] = xc(bD.name || bk, bK.value));
          };
          function BH(bD, bk, bK) {
            vD(bD, bk, xc(bk, bK.bind(bD)));
          }
          B9.bound = function (bD, bk, bK, bs) {
            return true === bs ? (BH(bD, bk, bK.value), null) : bK ? {
              'configurable': true,
              'enumerable': false,
              'get': function () {
                BH(this, bk, bK.value || bK.initializer.call(this));
                return this[bk];
              },
              'set': B6
            } : {
              'enumerable': false,
              'configurable': true,
              'set': function (bO) {
                BH(this, bk, bO);
              },
              'get': function () {}
            };
          };
          var Bv = function (bD) {
            return bD();
          };
          function BB(bD, bk, bK, bs) {
            var bO = "string" == typeof bK ? BA(bk, bK) : BA(bk);
            var bV = "string" == typeof bK ? bs : bK;
            var bG = bO[bD];
            return "function" != typeof bG ? vF(false) : (bO[bD] = function () {
              bG.call(this);
              bV.call(this);
            }, function () {
              bO[bD] = bG;
            });
          }
          function BE(bD, bk, bK, bs) {
            var bO = (bs = null == bs ? x5 : "string" == typeof bs ? {
              'name': bs,
              'deep': true
            } : bs).defaultDecorator || (false === bs.deep ? xv : x9);
            vA(bD);
            Bl(bD, bs.name, bO.enhancer);
            xM();
            try {
              for (var bV in bk) {
                var bG = Object.getOwnPropertyDescriptor(bk, bV);
                var bY = (bK && bV in bK ? bK[bV] : bG.get ? xb : bO)(bD, bV, bG, true);
                if (bY) {
                  Object.defineProperty(bD, bV, bY);
                }
              }
            } finally {
              xy();
            }
            return bD;
          }
          function Bb(bD) {
            var bk = {
              name: bD.name
            };
            var bK;
            var bs;
            if (bD.observing && bD.observing.length > 0x0) {
              bK = bD.observing;
              bs = [];
              bK.forEach(function (bV) {
                if (-0x1 === bs.indexOf(bV)) {
                  bs.push(bV);
                }
              });
              bk.dependencies = bs.map(Bb);
            }
            return bk;
          }
          function Bc(bD, bk) {
            if (null == bD) {
              return false;
            }
            if (undefined !== bk) {
              if (BN(bD)) {
                var bK = bD.$mobx;
                return bK.values && !!bK.values[bk];
              }
              return false;
            }
            return BN(bD) || !!bD.$mobx || vj(bD) || xg(bD) || xq(bD);
          }
          function Bf(bD) {
            if (0x1 !== arguments.length) {
              vF(false);
            }
            return Bc(bD);
          }
          function BS(bD) {
            switch (bD.length) {
              case 0x0:
                return xG.trackingDerivation;
              case 0x1:
                return BA(bD[0x0]);
              case 0x2:
                return BA(bD[0x0], bD[0x1]);
            }
          }
          function BC(bD, bk) {
            if (undefined === bk) {
              bk = undefined;
            }
            xM();
            try {
              return bD.apply(bk);
            } finally {
              xy();
            }
          }
          function Ba(bD, bk) {
            var bK = bD.interceptors || (bD.interceptors = []);
            bK.push(bk);
            return vL(function () {
              var bs = bK.indexOf(bk);
              if (-0x1 !== bs) {
                bK.splice(bs, 0x1);
              }
            });
          }
          function BJ(bD, bk) {
            var bK = xD();
            try {
              var bs = bD.interceptors;
              if (bs) {
                var bO = 0x0;
                for (var bV = bs.length; bO < bV && (vQ(!(bk = bs[bO](bk)) || bk.type, "Intercept handlers should return nothing or a change object"), bk); bO++) {
                  ;
                }
              }
              return bk;
            } finally {
              xk(bK);
            }
          }
          function Bz(bD, bk) {
            var bK = bD.changeListeners || (bD.changeListeners = []);
            bK.push(bk);
            return vL(function () {
              var bs = bK.indexOf(bk);
              if (-0x1 !== bs) {
                bK.splice(bs, 0x1);
              }
            });
          }
          function BW(bD, bk) {
            var bK = xD();
            var bs = bD.changeListeners;
            if (bs) {
              var bO = 0x0;
              for (var bV = (bs = bs.slice()).length; bO < bV; bO++) {
                bs[bO](bk);
              }
              xk(bK);
            }
          }
          var Bq;
          var Bw;
          var BQ;
          Bq = false;
          Object.defineProperty(Bw = {}, '0', {
            'set': function () {
              Bq = true;
            }
          });
          Object.create(Bw)[0x0] = 0x1;
          var BL = false === Bq;
          var BX = 0x0;
          var Bp = function () {};
          BQ = Array.prototype;
          if (undefined !== Object.setPrototypeOf) {
            Object.setPrototypeOf(Bp.prototype, BQ);
          } else if (undefined !== Bp.prototype.__proto__) {
            Bp.prototype.__proto__ = BQ;
          } else {
            Bp.prototype = BQ;
          }
          if (Object.isFrozen(Array)) {
            ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function (bD) {
              Object.defineProperty(Bp.prototype, bD, {
                'configurable': true,
                'writable': true,
                'value': Array.prototype[bD]
              });
            });
          }
          var BI = function () {
            function bD(bk, bK, bs, bO) {
              this.array = bs;
              this.owned = bO;
              this.values = [];
              this.lastKnownLength = 0x0;
              this.atom = new vh(bk || "ObservableArray@" + ++xG.mobxGuid);
              this.enhancer = function (bV, bG) {
                return bK(bV, bG, bk + "[..]");
              };
            }
            bD.prototype.dehanceValue = function (bk) {
              return undefined !== this.dehancer ? this.dehancer(bk) : bk;
            };
            bD.prototype.dehanceValues = function (bk) {
              return undefined !== this.dehancer && bk.length > 0x0 ? bk.map(this.dehancer) : bk;
            };
            bD.prototype.intercept = function (bk) {
              return Ba(this, bk);
            };
            bD.prototype.observe = function (bk, bK) {
              if (undefined === bK) {
                bK = false;
              }
              if (bK) {
                bk({
                  'object': this.array,
                  'type': "splice",
                  'index': 0x0,
                  'added': this.values.slice(),
                  'addedCount': this.values.length,
                  'removed': [],
                  'removedCount': 0x0
                });
              }
              return Bz(this, bk);
            };
            bD.prototype.getArrayLength = function () {
              this.atom.reportObserved();
              return this.values.length;
            };
            bD.prototype.setArrayLength = function (bk) {
              if ("number" != typeof bk || bk < 0x0) {
                throw Error("[mobx.array] Out of range: " + bk);
              }
              var bK = this.values.length;
              if (bk !== bK) {
                if (bk > bK) {
                  var bs = Array(bk - bK);
                  for (var bO = 0x0; bO < bk - bK; bO++) {
                    bs[bO] = undefined;
                  }
                  this.spliceWithArray(bK, 0x0, bs);
                } else {
                  this.spliceWithArray(bk, bK - bk);
                }
              }
            };
            bD.prototype.updateArrayLength = function (bk, bK) {
              if (bk !== this.lastKnownLength) {
                throw Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
              }
              this.lastKnownLength += bK;
              if (bK > 0x0 && bk + bK + 0x1 > BX) {
                BO(bk + bK + 0x1);
              }
            };
            bD.prototype.spliceWithArray = function (bk, bK, bs) {
              var bO = this;
              xL(this.atom);
              var bV = this.values.length;
              if (undefined === bk) {
                bk = 0x0;
              } else if (bk > bV) {
                bk = bV;
              } else if (bk < 0x0) {
                bk = Math.max(0x0, bV + bk);
              }
              bK = 0x1 === arguments.length ? bV - bk : null == bK ? 0x0 : Math.max(0x0, Math.min(bK, bV - bk));
              if (undefined === bs) {
                bs = vz;
              }
              if (undefined !== this.interceptors && this.interceptors.length > 0x0) {
                var bG = BJ(this, {
                  'object': this.array,
                  'type': "splice",
                  'index': bk,
                  'removedCount': bK,
                  'added': bs
                });
                if (!bG) {
                  return vz;
                }
                bK = bG.removedCount;
                bs = bG.added;
              }
              bs = 0x0 === bs.length ? bs : bs.map(function (bU) {
                return bO.enhancer(bU, undefined);
              });
              var bY = bs.length - bK;
              this.updateArrayLength(bV, bY);
              var bZ = this.spliceItemsIntoValues(bk, bK, bs);
              if (!(0x0 === bK && 0x0 === bs.length)) {
                this.notifyArraySplice(bk, bs, bZ);
              }
              return this.dehanceValues(bZ);
            };
            bD.prototype.spliceItemsIntoValues = function (bk, bK, bs) {
              var bO;
              if (bs.length < 0x2710) {
                return (bO = this.values).splice.apply(bO, vP([bk, bK], bs));
              }
              var bV = this.values.slice(bk, bk + bK);
              this.values = this.values.slice(0x0, bk).concat(bs, this.values.slice(bk + bK));
              return bV;
            };
            bD.prototype.notifyArrayChildUpdate = function (bk, bK, bs) {
              var bO = !this.owned && !!xG.spyListeners.length;
              var bV = undefined !== this.changeListeners && this.changeListeners.length > 0x0;
              var bG = bV || bO ? {
                'object': this.array,
                'type': "update",
                'index': bk,
                'newValue': bK,
                'oldValue': bs
              } : null;
              var bY = {
                name: this.atom.name
              };
              if (bO) {
                B1(va({}, bG, bY));
              }
              this.atom.reportChanged();
              if (bV) {
                BW(this, bG);
              }
              if (bO) {
                B4();
              }
            };
            bD.prototype.notifyArraySplice = function (bk, bK, bs) {
              var bO = !this.owned && !!xG.spyListeners.length;
              var bV = undefined !== this.changeListeners && this.changeListeners.length > 0x0;
              var bG = bV || bO ? {
                'object': this.array,
                'type': "splice",
                'index': bk,
                'removed': bs,
                'added': bK,
                'removedCount': bs.length,
                'addedCount': bK.length
              } : null;
              var bY = {
                name: this.atom.name
              };
              if (bO) {
                B1(va({}, bG, bY));
              }
              this.atom.reportChanged();
              if (bV) {
                BW(this, bG);
              }
              if (bO) {
                B4();
              }
            };
            return bD;
          }();
          var BD = function (bD) {
            function bk(bK, bs, bO, bV) {
              if (undefined === bO) {
                bO = "ObservableArray@" + ++xG.mobxGuid;
              }
              if (undefined === bV) {
                bV = false;
              }
              var bG = bD.call(this) || this;
              var bY = new BI(bO, bs, bG, bV);
              vk(bG, "$mobx", bY);
              if (bK && bK.length) {
                var bZ = xC(true);
                bG.spliceWithArray(0x0, 0x0, bK);
                xo(bZ);
              }
              if (BL) {
                Object.defineProperty(bY.array, '0', Bk);
              }
              return bG;
            }
            vo(bk, bD);
            bk.prototype.intercept = function (bK) {
              return this.$mobx.intercept(bK);
            };
            bk.prototype.observe = function (bK, bs) {
              if (undefined === bs) {
                bs = false;
              }
              return this.$mobx.observe(bK, bs);
            };
            bk.prototype.clear = function () {
              return this.splice(0x0);
            };
            bk.prototype.concat = function () {
              var bK = [];
              for (var bs = 0x0; bs < arguments.length; bs++) {
                bK[bs] = arguments[bs];
              }
              this.$mobx.atom.reportObserved();
              return Array.prototype.concat.apply(this.peek(), bK.map(function (bO) {
                return null !== bO && "object" == typeof bO && BV(bO.$mobx) ? bO.peek() : bO;
              }));
            };
            bk.prototype.replace = function (bK) {
              return this.$mobx.spliceWithArray(0x0, this.$mobx.values.length, bK);
            };
            bk.prototype.toJS = function () {
              return this.slice();
            };
            bk.prototype.toJSON = function () {
              return this.toJS();
            };
            bk.prototype.peek = function () {
              this.$mobx.atom.reportObserved();
              return this.$mobx.dehanceValues(this.$mobx.values);
            };
            bk.prototype.find = function (bK, bs, bO) {
              if (undefined === bO) {
                bO = 0x0;
              }
              var bV = this.findIndex.apply(this, arguments);
              return -0x1 === bV ? undefined : this.get(bV);
            };
            bk.prototype.findIndex = function (bK, bs, bO) {
              if (undefined === bO) {
                bO = 0x0;
              }
              var bV = this.peek();
              var bG = bV.length;
              for (var bY = bO; bY < bG; bY++) {
                if (bK.call(bs, bV[bY], bY, this)) {
                  return bY;
                }
              }
              return -0x1;
            };
            bk.prototype.splice = function (bK, bs) {
              var bO = [];
              for (var bV = 0x2; bV < arguments.length; bV++) {
                bO[bV - 0x2] = arguments[bV];
              }
              switch (arguments.length) {
                case 0x0:
                  return [];
                case 0x1:
                  return this.$mobx.spliceWithArray(bK);
                case 0x2:
                  return this.$mobx.spliceWithArray(bK, bs);
              }
              return this.$mobx.spliceWithArray(bK, bs, bO);
            };
            bk.prototype.spliceWithArray = function (bK, bs, bO) {
              return this.$mobx.spliceWithArray(bK, bs, bO);
            };
            bk.prototype.push = function () {
              var bK = [];
              for (var bs = 0x0; bs < arguments.length; bs++) {
                bK[bs] = arguments[bs];
              }
              var bO = this.$mobx;
              bO.spliceWithArray(bO.values.length, 0x0, bK);
              return bO.values.length;
            };
            bk.prototype.pop = function () {
              return this.splice(Math.max(this.$mobx.values.length - 0x1, 0x0), 0x1)[0x0];
            };
            bk.prototype.shift = function () {
              return this.splice(0x0, 0x1)[0x0];
            };
            bk.prototype.unshift = function () {
              var bK = [];
              for (var bs = 0x0; bs < arguments.length; bs++) {
                bK[bs] = arguments[bs];
              }
              var bO = this.$mobx;
              bO.spliceWithArray(0x0, 0x0, bK);
              return bO.values.length;
            };
            bk.prototype.reverse = function () {
              var bK = this.slice();
              return bK.reverse.apply(bK, arguments);
            };
            bk.prototype.sort = function (bK) {
              var bs = this.slice();
              return bs.sort.apply(bs, arguments);
            };
            bk.prototype.remove = function (bK) {
              var bs = this.$mobx.dehanceValues(this.$mobx.values).indexOf(bK);
              return bs > -0x1 && (this.splice(bs, 0x1), true);
            };
            bk.prototype.move = function (bK, bs) {
              function bG(bY) {
                if (bY < 0x0) {
                  throw Error("[mobx.array] Index out of bounds: " + bY + " is negative");
                }
                var bZ = this.$mobx.values.length;
                if (bY >= bZ) {
                  throw Error("[mobx.array] Index out of bounds: " + bY + " is not smaller than " + bZ);
                }
              }
              bG.call(this, bK);
              bG.call(this, bs);
              if (bK !== bs) {
                var bO;
                var bV = this.$mobx.values;
                bO = bK < bs ? vP(bV.slice(0x0, bK), bV.slice(bK + 0x1, bs + 0x1), [bV[bK]], bV.slice(bs + 0x1)) : vP(bV.slice(0x0, bs), [bV[bK]], bV.slice(bs, bK), bV.slice(bK + 0x1));
                this.replace(bO);
              }
            };
            bk.prototype.get = function (bK) {
              var bs = this.$mobx;
              if (bs && bK < bs.values.length) {
                bs.atom.reportObserved();
                return bs.dehanceValue(bs.values[bK]);
              }
            };
            bk.prototype.set = function (bK, bs) {
              var bO = this.$mobx;
              var bV = bO.values;
              if (bK < bV.length) {
                xL(bO.atom);
                var bG = bV[bK];
                if (undefined !== bO.interceptors && bO.interceptors.length > 0x0) {
                  var bY = {
                    type: "update",
                    object: this,
                    index: bK,
                    newValue: bs
                  };
                  var bZ = BJ(bO, bY);
                  if (!bZ) {
                    return;
                  }
                  bs = bZ.newValue;
                }
                if ((bs = bO.enhancer(bs, bG)) !== bG) {
                  bV[bK] = bs;
                  bO.notifyArrayChildUpdate(bK, bs, bG);
                }
              } else {
                if (bK !== bV.length) {
                  throw Error("[mobx.array] Index out of bounds, " + bK + " is larger than " + bV.length);
                }
                bO.spliceWithArray(bK, 0x0, [bs]);
              }
            };
            return bk;
          }(Bp);
          vU(BD.prototype, function () {
            this.$mobx.atom.reportObserved();
            var bD = this;
            var bk = 0x0;
            return vM({
              'next': function () {
                var bK = {
                  done: true,
                  value: undefined
                };
                return bk < bD.length ? {
                  'value': bD[bk++],
                  'done': false
                } : bK;
              }
            });
          });
          Object.defineProperty(BD.prototype, "length", {
            'enumerable': false,
            'configurable': true,
            'get': function () {
              return this.$mobx.getArrayLength();
            },
            'set': function (bD) {
              this.$mobx.setArrayLength(bD);
            }
          });
          vD(BD.prototype, "function" == typeof Symbol && Symbol.toStringTag || "@@toStringTag", "Array");
          ["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (bD) {
            var bk = Array.prototype[bD];
            vQ("function" == typeof bk, "Base function not defined on Array prototype: '" + bD + "'");
            vD(BD.prototype, bD, function () {
              return bk.apply(this.peek(), arguments);
            });
          });
          (function (bD, bk) {
            for (var bK = 0x0; bK < bk.length; bK++) {
              vD(bD, bk[bK], bD[bk[bK]]);
            }
          })(BD.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]);
          var Bk = BK(0x0);
          function BK(bD) {
            return {
              'enumerable': false,
              'configurable': false,
              'get': function () {
                return this.get(bD);
              },
              'set': function (bk) {
                this.set(bD, bk);
              }
            };
          }
          function Bs(bD) {
            Object.defineProperty(BD.prototype, '' + bD, BK(bD));
          }
          function BO(bD) {
            for (var bk = BX; bk < bD; bk++) {
              Bs(bk);
            }
            BX = bD;
          }
          BO(0x3e8);
          var BV = vK("ObservableArrayAdministration", BI);
          function BG(bD) {
            return null !== bD && "object" == typeof bD && BV(bD.$mobx);
          }
          var BY = {};
          var BZ = function () {
            function bD(bk, bK, bs) {
              if (undefined === bK) {
                bK = x2;
              }
              if (undefined === bs) {
                bs = "ObservableMap@" + ++xG.mobxGuid;
              }
              this.enhancer = bK;
              this.name = bs;
              this.$mobx = BY;
              this.H = new BD(undefined, x3, this.name + ".keys()", true);
              if ("function" != typeof Map) {
                throw Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
              }
              this.W = new Map();
              this.q = new Map();
              this.merge(bk);
            }
            bD.prototype.Y = function (bk) {
              return this.W.has(bk);
            };
            bD.prototype.has = function (bk) {
              var bK = this;
              if (!xG.trackingDerivation) {
                return this.Y(bk);
              }
              var bs = this.q.get(bk);
              if (!bs) {
                var bO = bs = new xJ(this.Y(bk), x3, this.name + '.' + (bk && bk.toString ? bk.toString() : new String(bk).toString()) + '?', false);
                this.q.set(bk, bO);
                BB("onBecomeUnobserved", bO, function () {
                  return bK.q["delete"](bk);
                }, undefined);
              }
              return bs.get();
            };
            bD.prototype.set = function (bk, bK) {
              var bs = this.Y(bk);
              if (undefined !== this.interceptors && this.interceptors.length > 0x0) {
                var bO = BJ(this, {
                  'type': bs ? "update" : "add",
                  'object': this,
                  'newValue': bK,
                  'name': bk
                });
                if (!bO) {
                  return this;
                }
                bK = bO.newValue;
              }
              if (bs) {
                this.X(bk, bK);
              } else {
                this.K(bk, bK);
              }
              return this;
            };
            bD.prototype["delete"] = function (bk) {
              var bK = this;
              if (undefined !== this.interceptors && this.interceptors.length > 0x0 && !(bV = BJ(this, {
                'type': "delete",
                'object': this,
                'name': bk
              }))) {
                return false;
              }
              if (this.Y(bk)) {
                var bs = !!xG.spyListeners.length;
                var bO = undefined !== this.changeListeners && this.changeListeners.length > 0x0;
                var bV = bO || bs ? {
                  'type': "delete",
                  'object': this,
                  'oldValue': this.W.get(bk).value,
                  'name': bk
                } : null;
                var bG = {
                  name: this.name,
                  key: bk
                };
                if (bs) {
                  B1(va({}, bV, bG));
                }
                BC(function () {
                  bK.H.remove(bk);
                  bK.$(bk, false);
                  bK.W.get(bk).setNewValue(undefined);
                  bK.W["delete"](bk);
                });
                if (bO) {
                  BW(this, bV);
                }
                if (bs) {
                  B4();
                }
                return true;
              }
              return false;
            };
            bD.prototype.$ = function (bk, bK) {
              var bs = this.q.get(bk);
              if (bs) {
                bs.setNewValue(bK);
              }
            };
            bD.prototype.X = function (bk, bK) {
              var bs = this.W.get(bk);
              if ((bK = bs.prepareNewValue(bK)) !== xG.UNCHANGED) {
                var bO = !!xG.spyListeners.length;
                var bV = undefined !== this.changeListeners && this.changeListeners.length > 0x0;
                var bG = bV || bO ? {
                  'type': "update",
                  'object': this,
                  'oldValue': bs.value,
                  'name': bk,
                  'newValue': bK
                } : null;
                var bY = {
                  name: this.name,
                  key: bk
                };
                if (bO) {
                  B1(va({}, bG, bY));
                }
                bs.setNewValue(bK);
                if (bV) {
                  BW(this, bG);
                }
                if (bO) {
                  B4();
                }
              }
            };
            bD.prototype.K = function (bk, bK) {
              var bs = this;
              BC(function () {
                var bZ = new xJ(bK, bs.enhancer, bs.name + '.' + (bk && bk.toString ? bk.toString() : new String(bk).toString()), false);
                bs.W.set(bk, bZ);
                bK = bZ.value;
                bs.$(bk, true);
                bs.H.push(bk);
              });
              var bO = !!xG.spyListeners.length;
              var bV = undefined !== this.changeListeners && this.changeListeners.length > 0x0;
              var bG = bV || bO ? {
                'type': "add",
                'object': this,
                'name': bk,
                'newValue': bK
              } : null;
              var bY = {
                name: this.name,
                key: bk
              };
              if (bO) {
                B1(va({}, bG, bY));
              }
              if (bV) {
                BW(this, bG);
              }
              if (bO) {
                B4();
              }
            };
            bD.prototype.get = function (bk) {
              return this.has(bk) ? this.dehanceValue(this.W.get(bk).get()) : this.dehanceValue(undefined);
            };
            bD.prototype.dehanceValue = function (bk) {
              return undefined !== this.dehancer ? this.dehancer(bk) : bk;
            };
            bD.prototype.keys = function () {
              return this.H["function" == typeof Symbol && Symbol.iterator || "@@iterator"]();
            };
            bD.prototype.values = function () {
              var bk = this;
              var bK = 0x0;
              return vM({
                'next': function () {
                  var bs = {
                    value: undefined,
                    done: true
                  };
                  return bK < bk.H.length ? {
                    'value': bk.get(bk.H[bK++]),
                    'done': false
                  } : bs;
                }
              });
            };
            bD.prototype.entries = function () {
              var bk = this;
              var bK = 0x0;
              return vM({
                'next': function () {
                  if (bK < bk.H.length) {
                    var bs = bk.H[bK++];
                    return {
                      'value': [bs, bk.get(bs)],
                      'done': false
                    };
                  }
                  var bO = {
                    done: true
                  };
                  return bO;
                }
              });
            };
            bD.prototype.forEach = function (bk, bK) {
              var bs = this;
              this.H.forEach(function (bO) {
                return bk.call(bK, bs.get(bO), bO, bs);
              });
            };
            bD.prototype.merge = function (bk) {
              var bK = this;
              if (BM(bk)) {
                bk = bk.toJS();
              }
              BC(function () {
                if (vI(bk)) {
                  Object.keys(bk).forEach(function (bs) {
                    return bK.set(bs, bk[bs]);
                  });
                } else if (Array.isArray(bk)) {
                  bk.forEach(function (bs) {
                    var bO = vJ(bs, 0x2);
                    var bV = bO[0x0];
                    var bG = bO[0x1];
                    return bK.set(bV, bG);
                  });
                } else if (undefined !== (undefined !== b ? b : global).Map && bk instanceof (undefined !== b ? b : global).Map) {
                  if (bk.constructor !== Map) {
                    vF("Cannot initialize from classes that inherit from Map: " + bk.constructor.name);
                  } else {
                    bk.forEach(function (bs, bO) {
                      return bK.set(bO, bs);
                    });
                  }
                } else if (null != bk) {
                  vF("Cannot initialize map from " + bk);
                }
              });
              return this;
            };
            bD.prototype.clear = function () {
              var bk = this;
              BC(function () {
                xI(function () {
                  bk.H.slice().forEach(function (bK) {
                    return bk["delete"](bK);
                  });
                });
              });
            };
            bD.prototype.replace = function (bk) {
              var bK = this;
              BC(function () {
                var bs;
                var bO = vI(bs = bk) ? Object.keys(bs) : Array.isArray(bs) ? bs.map(function (bG) {
                  return vJ(bG, 0x1)[0x0];
                }) : undefined !== (undefined !== b ? b : global).Map && bs instanceof (undefined !== b ? b : global).Map || BM(bs) ? vV(bs.keys()) : vF("Cannot get keys from '" + bs + "'");
                var bV = bK.H.filter(function (bG) {
                  return -0x1 === bO.indexOf(bG);
                });
                bV.forEach(function (bG) {
                  return bK["delete"](bG);
                });
                bK.merge(bk);
              });
              return this;
            };
            Object.defineProperty(bD.prototype, "size", {
              'get': function () {
                return this.H.length;
              },
              'enumerable': true,
              'configurable': true
            });
            bD.prototype.toPOJO = function () {
              var bk = this;
              var bK = {};
              this.H.forEach(function (bs) {
                return bK["symbol" == typeof bs ? bs : bs && bs.toString ? bs.toString() : new String(bs).toString()] = bk.get(bs);
              });
              return bK;
            };
            bD.prototype.toJS = function () {
              var bk = this;
              var bK = new Map();
              this.H.forEach(function (bs) {
                return bK.set(bs, bk.get(bs));
              });
              return bK;
            };
            bD.prototype.toJSON = function () {
              return this.toPOJO();
            };
            bD.prototype.toString = function () {
              var bk = this;
              return this.name + "[{ " + this.H.map(function (bK) {
                return (bK && bK.toString ? bK.toString() : new String(bK).toString()) + ": " + bk.get(bK);
              }).join(", ") + " }]";
            };
            bD.prototype.observe = function (bk) {
              return Bz(this, bk);
            };
            bD.prototype.intercept = function (bk) {
              return Ba(this, bk);
            };
            return bD;
          }();
          vU(BZ.prototype, function () {
            return this.entries();
          });
          vk(BZ.prototype, "function" == typeof Symbol && Symbol.toStringTag || "@@toStringTag", "Map");
          var BM = vK("ObservableMap", BZ);
          var By = {};
          var BT = function () {
            function bD(bk, bK, bs) {
              if (undefined === bK) {
                bK = x2;
              }
              if (undefined === bs) {
                bs = "ObservableSet@" + ++xG.mobxGuid;
              }
              this.name = bs;
              this.$mobx = By;
              this.W = new Set();
              this.J = vl(this.name);
              if ("function" != typeof Set) {
                throw Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
              }
              this.enhancer = function (bO, bV) {
                return bK(bO, bV, bs);
              };
              if (bk) {
                this.replace(bk);
              }
            }
            bD.prototype.dehanceValue = function (bk) {
              return undefined !== this.dehancer ? this.dehancer(bk) : bk;
            };
            bD.prototype.clear = function () {
              var bk = this;
              BC(function () {
                xI(function () {
                  bk.W.forEach(function (bK) {
                    bk["delete"](bK);
                  });
                });
              });
            };
            bD.prototype.forEach = function (bk, bK) {
              var bs = this;
              this.W.forEach(function (bO) {
                bk.call(bK, bO, bO, bs);
              });
            };
            Object.defineProperty(bD.prototype, "size", {
              'get': function () {
                this.J.reportObserved();
                return this.W.size;
              },
              'enumerable': true,
              'configurable': true
            });
            bD.prototype.add = function (bk) {
              var bK = this;
              xL(this.J);
              if (undefined !== this.interceptors && this.interceptors.length > 0x0 && !(bV = BJ(this, {
                'type': "add",
                'object': this,
                'newValue': bk
              }))) {
                return this;
              }
              if (!this.has(bk)) {
                BC(function () {
                  bK.W.add(bK.enhancer(bk, undefined));
                  bK.J.reportChanged();
                });
                var bs = !!xG.spyListeners.length;
                var bO = undefined !== this.changeListeners && this.changeListeners.length > 0x0;
                var bV = bO || bs ? {
                  'type': "add",
                  'object': this,
                  'newValue': bk
                } : null;
                if (bO) {
                  BW(this, bV);
                }
              }
              return this;
            };
            bD.prototype["delete"] = function (bk) {
              var bK = this;
              if (undefined !== this.interceptors && this.interceptors.length > 0x0 && !(bV = BJ(this, {
                'type': "delete",
                'object': this,
                'oldValue': bk
              }))) {
                return false;
              }
              if (this.has(bk)) {
                var bs = !!xG.spyListeners.length;
                var bO = undefined !== this.changeListeners && this.changeListeners.length > 0x0;
                var bV = bO || bs ? {
                  'type': "delete",
                  'object': this,
                  'oldValue': bk
                } : null;
                BC(function () {
                  bK.J.reportChanged();
                  bK.W["delete"](bk);
                });
                if (bO) {
                  BW(this, bV);
                }
                return true;
              }
              return false;
            };
            bD.prototype.has = function (bk) {
              this.J.reportObserved();
              return this.W.has(this.dehanceValue(bk));
            };
            bD.prototype.entries = function () {
              var bk = 0x0;
              var bK = vV(this.keys());
              var bs = vV(this.values());
              return vM({
                'next': function () {
                  var bO = bk;
                  var bV = {
                    done: true
                  };
                  bk += 0x1;
                  return bO < bs.length ? {
                    'value': [bK[bO], bs[bO]],
                    'done': false
                  } : bV;
                }
              });
            };
            bD.prototype.keys = function () {
              return this.values();
            };
            bD.prototype.values = function () {
              this.J.reportObserved();
              var bk;
              var bK = this;
              var bs = 0x0;
              if (undefined !== this.W.values) {
                bk = vV(this.W.values());
              } else {
                bk = [];
                this.W.forEach(function (bO) {
                  return bk.push(bO);
                });
              }
              return vM({
                'next': function () {
                  var bO = {
                    done: true
                  };
                  return bs < bk.length ? {
                    'value': bK.dehanceValue(bk[bs++]),
                    'done': false
                  } : bO;
                }
              });
            };
            bD.prototype.replace = function (bk) {
              var bK = this;
              if (Bh(bk)) {
                bk = bk.toJS();
              }
              BC(function () {
                if (Array.isArray(bk) || bk instanceof Set) {
                  bK.clear();
                  bk.forEach(function (bs) {
                    return bK.add(bs);
                  });
                } else if (null != bk) {
                  vF("Cannot initialize set from " + bk);
                }
              });
              return this;
            };
            bD.prototype.observe = function (bk) {
              return Bz(this, bk);
            };
            bD.prototype.intercept = function (bk) {
              return Ba(this, bk);
            };
            bD.prototype.toJS = function () {
              return new Set(this);
            };
            bD.prototype.toString = function () {
              return this.name + "[ " + vV(this.keys()).join(", ") + " ]";
            };
            return bD;
          }();
          vU(BT.prototype, function () {
            return this.values();
          });
          vk(BT.prototype, "function" == typeof Symbol && Symbol.toStringTag || "@@toStringTag", "Set");
          var Bh = vK("ObservableSet", BT);
          var Bj = function () {
            function bD(bk, bK, bs) {
              this.target = bk;
              this.name = bK;
              this.defaultEnhancer = bs;
              this.values = {};
            }
            bD.prototype.read = function (bk, bK) {
              if (this.target === bk || (this.illegalAccess(bk, bK), this.values[bK])) {
                return this.values[bK].get();
              }
            };
            bD.prototype.write = function (bk, bK, bs) {
              var bO = this.target;
              if (bO !== bk) {
                this.illegalAccess(bk, bK);
              }
              var bV = this.values[bK];
              if (bV instanceof xP) {
                bV.set(bs);
              } else {
                if (undefined !== this.interceptors && this.interceptors.length > 0x0) {
                  var bG = {
                    type: "update",
                    object: bO,
                    name: bK,
                    newValue: bs
                  };
                  if (!(bM = BJ(this, bG))) {
                    return;
                  }
                  bs = bM.newValue;
                }
                if ((bs = bV.prepareNewValue(bs)) !== xG.UNCHANGED) {
                  var bY = {
                    type: "update",
                    object: bO,
                    oldValue: bV.value,
                    name: bK,
                    newValue: bs
                  };
                  var bZ = undefined !== this.changeListeners && this.changeListeners.length > 0x0;
                  var bU = !!xG.spyListeners.length;
                  var bM = bZ || bU ? bY : null;
                  var by = {
                    name: this.name,
                    key: bK
                  };
                  if (bU) {
                    B1(va({}, bM, by));
                  }
                  bV.setNewValue(bs);
                  if (bZ) {
                    BW(this, bM);
                  }
                  if (bU) {
                    B4();
                  }
                }
              }
            };
            bD.prototype.remove = function (bk) {
              if (this.values[bk]) {
                var bK = this.target;
                var bs = {
                  object: bK,
                  name: bk,
                  type: "remove"
                };
                if (undefined !== this.interceptors && this.interceptors.length > 0x0 && !(bZ = BJ(this, bs))) {
                  return;
                }
                try {
                  xM();
                  var bO = undefined !== this.changeListeners && this.changeListeners.length > 0x0;
                  var bV = !!xG.spyListeners.length;
                  var bG = this.values[bk].get();
                  if (this.keys) {
                    this.keys.remove(bk);
                  }
                  delete this.values[bk];
                  delete this.target[bk];
                  var bY = {
                    type: "remove",
                    object: bK,
                    oldValue: bG,
                    name: bk
                  };
                  var bZ = bO || bV ? bY : null;
                  var bU = {
                    name: this.name,
                    key: bk
                  };
                  if (bV) {
                    B1(va({}, bZ, bU));
                  }
                  if (bO) {
                    BW(this, bZ);
                  }
                  if (bV) {
                    B4();
                  }
                } finally {
                  xy();
                }
              }
            };
            bD.prototype.illegalAccess = function () {};
            bD.prototype.observe = function (bk) {
              return Bz(this, bk);
            };
            bD.prototype.intercept = function (bk) {
              return Ba(this, bk);
            };
            bD.prototype.getKeys = function () {
              var bk = this;
              if (undefined === this.keys) {
                this.keys = new BD(Object.keys(this.values).filter(function (bK) {
                  return bk.values[bK] instanceof xJ;
                }), x3, "keys(" + this.name + ')', true);
              }
              return this.keys.slice();
            };
            return bD;
          }();
          function Bl(bD, bk, bK) {
            if (undefined === bk) {
              bk = '';
            }
            if (undefined === bK) {
              bK = x2;
            }
            var bs = bD.$mobx;
            return bs || (vI(bD) || (bk = (bD.constructor.name || "ObservableObject") + '@' + ++xG.mobxGuid), bk || (bk = "ObservableObject@" + ++xG.mobxGuid), vk(bD, "$mobx", bs = new Bj(bD, bk, bK)), bs);
          }
          var BR = Object.create(null);
          var Bm = Object.create(null);
          function Bd(bD) {
            return bD.$mobx || (vA(bD), bD.$mobx);
          }
          var Bg = vK("ObservableObjectAdministration", Bj);
          function BN(bD) {
            return !!(null !== bD && "object" == typeof bD) && (vA(bD), Bg(bD.$mobx));
          }
          function BA(bD, bk) {
            if ("object" == typeof bD && null !== bD) {
              if (null !== bD && "object" == typeof bD && BV(bD.$mobx)) {
                if (undefined !== bk) {
                  vF(false);
                }
                return bD.$mobx.atom;
              }
              if (Bh(bD)) {
                return bD.$mobx;
              }
              if (BM(bD)) {
                return undefined === bk ? BA(bD.H) : ((bs = bD.W.get(bk) || bD.q.get(bk)) || vF(false), bs);
              }
              var bs;
              vA(bD);
              if (bk && !bD.$mobx) {
                bD[bk];
              }
              if (BN(bD)) {
                return bk ? ((bs = bD.$mobx.values[bk]) || vF(false), bs) : vF(false);
              }
              if (vj(bD) || xq(bD) || xg(bD)) {
                return bD;
              }
            } else if ("function" == typeof bD && xg(bD.$mobx)) {
              return bD.$mobx;
            }
            return vF(false);
          }
          function E0(bD, bk) {
            if (!bD) {
              vF("Expecting some object");
            }
            return undefined !== bk ? E0(BA(bD, bk)) : vj(bD) || xq(bD) || xg(bD) || BM(bD) || Bh(bD) ? bD : (vA(bD), bD.$mobx ? bD.$mobx : void vF(false));
          }
          var E1 = Object.prototype.toString;
          function E3(bD, bk, bK, bs) {
            if (bD === bk) {
              return 0x0 !== bD || 0x1 / bD == 0x1 / bk;
            }
            if (null == bD || null == bk) {
              return false;
            }
            if (bD != bD) {
              return bk != bk;
            }
            var bO = typeof bD;
            return ("function" === bO || "object" === bO || "object" == typeof bk) && function (bV, bG, bY, bZ) {
              bV = null !== bV && "object" == typeof bV && BV(bV.$mobx) ? bV.peek() : undefined !== (undefined !== b ? b : global).Map && bV instanceof (undefined !== b ? b : global).Map || BM(bV) || bV instanceof Set || Bh(bV) ? vV(bV.entries()) : bV;
              bG = null !== bG && "object" == typeof bG && BV(bG.$mobx) ? bG.peek() : undefined !== (undefined !== b ? b : global).Map && bG instanceof (undefined !== b ? b : global).Map || BM(bG) || bG instanceof Set || Bh(bG) ? vV(bG.entries()) : bG;
              var bU = E1.call(bV);
              if (bU !== E1.call(bG)) {
                return false;
              }
              switch (bU) {
                case "[object RegExp]":
                case "[object String]":
                  return '' + bV == '' + bG;
                case "[object Number]":
                  return +bV != +bV ? +bG != +bG : 0x0 == +bV ? 0x1 / +bV == 0x1 / bG : +bV == +bG;
                case "[object Date]":
                case "[object Boolean]":
                  return +bV == +bG;
                case "[object Symbol]":
                  return "undefined" != typeof Symbol && Symbol.valueOf.call(bV) === Symbol.valueOf.call(bG);
              }
              var bM = "[object Array]" === bU;
              if (!bM) {
                if ("object" != typeof bV || "object" != typeof bG) {
                  return false;
                }
                var by = bV.constructor;
                var bT = bG.constructor;
                if (by !== bT && !("function" == typeof by && by instanceof by && "function" == typeof bT && bT instanceof bT) && "constructor" in bV && "constructor" in bG) {
                  return false;
                }
              }
              bZ = bZ || [];
              for (var bh = (bY = bY || []).length; bh--;) {
                if (bY[bh] === bV) {
                  return bZ[bh] === bG;
                }
              }
              bY.push(bV);
              bZ.push(bG);
              if (bM) {
                if ((bh = bV.length) !== bG.length) {
                  return false;
                }
                for (; bh--;) {
                  if (!E3(bV[bh], bG[bh], bY, bZ)) {
                    return false;
                  }
                }
              } else {
                var bj = Object.keys(bV);
                var bl = undefined;
                bh = bj.length;
                if (Object.keys(bG).length !== bh) {
                  return false;
                }
                for (; bh--;) {
                  if (!Object.prototype.hasOwnProperty.call(bG, bl = bj[bh]) || !E3(bV[bl], bG[bl], bY, bZ)) {
                    return false;
                  }
                }
              }
              bY.pop();
              bZ.pop();
              return true;
            }(bD, bk, bK, bs);
          }
          if ("object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__) {
            __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
              'spy': B5,
              'extras': {
                'getDebugName': function (bD, bk) {
                  return (undefined !== bk ? BA(bD, bk) : BN(bD) || BM(bD) || Bh(bD) ? E0(bD) : BA(bD)).name;
                }
              },
              '$mobx': "$mobx"
            });
          }
          var E7;
          var E8 = function () {
            function bD() {
              this.gameFlowInfo = Object.create(null);
              this.gamePlayUIBlock = Object.create(null);
              this.gameEffectInfo = Object.create(null);
              this.screenWidth = 0x0;
              this.screenHeight = 0x0;
              this.scale = 0x0;
              this.ratio = 0x1;
              this.socialMediaMode = v7.SHARE;
              this.markWinReplay = false;
              this.autoPlayState = "Stop";
              this.isSocialActive = true;
              this.isTournamentActive = false;
              this.topThreePlayerRanking = [];
              this.isLandscapeMode = false;
              this.onlinePlayerCount = 0x0;
              this.gameOnlinePlayerCount = 0x0;
              this.gameIconUrl = '';
              this.isFav = false;
              this.gameLayoutInfo = undefined;
              this.onlinePlayerPaddingTop = 0x0;
              this.favouriteWidget = undefined;
              this.leaderboard = undefined;
              this.tournamentWidget = undefined;
              this.playerProfileWidget = undefined;
              this.gameListWidget = undefined;
              this.mediaShareWidget = undefined;
              this.winReplayEnable = false;
              this.onlinePlayerWidget = false;
              this.isShowTournamentNotification = false;
              this.profileBadgeNotification = false;
              this.isGameButtonInteractable = true;
            }
            bD.prototype.updateRatio = function (bk) {
              this.ratio = bk;
            };
            bD.prototype.updateSocialElement = function (bk) {
              if (!bk) {
                this.leaderboard = false;
                this.favouriteWidget = false;
                this.playerProfileWidget = false;
                this.tournamentWidget = false;
                this.gameListWidget = false;
                return void (this.mediaShareWidget = false);
              }
              var bK = bk.fa;
              var bs = bk.lb;
              var bO = bk.ct;
              var bV = bk.pp;
              var bG = bk.gl;
              var bY = bk.ms;
              var bZ = bk.wr;
              var bU = bk.op;
              this.favouriteWidget = 0x1 === parseInt(bK);
              this.leaderboard = 0x1 === parseInt(bs);
              this.tournamentWidget = 0x1 === parseInt(bO);
              this.playerProfileWidget = 0x1 === parseInt(bV);
              this.gameListWidget = 0x1 === parseInt(bG);
              this.mediaShareWidget = 0x1 === parseInt(bY);
              this.winReplayEnable = 0x1 === parseInt(bZ);
              this.onlinePlayerWidget = 0x1 === parseInt(bU);
            };
            bD.prototype.getActiveElementCount = function () {
              var bk = 0x0;
              bk += this.favouriteWidget ? 0x1 : 0x0;
              bk += this.gameListWidget ? 0x1 : 0x0;
              bk += this.tournamentWidget ? 0x1 : 0x0;
              return (bk += this.mediaShareWidget ? 0x1 : 0x0) + (this.playerProfileWidget ? 0x1 : 0x0);
            };
            bD.prototype.setIsFav = function (bk) {
              this.isFav = bk;
            };
            bD.prototype.updateIsShowTournamentNotification = function (bk) {
              this.isShowTournamentNotification = bk;
            };
            bD.prototype.updateProfileIconList = function (bk) {
              this.profileIconList = bk;
            };
            bD.prototype.setTopThreePlayerRanking = function (bk) {
              var bK = this;
              var bs = bk.rl;
              var bO = [];
              bs.forEach(function (bV) {
                var bG;
                var bY = +bV.r;
                var bZ = bV.pn;
                var bU = bV.spp.portId;
                var bM = null === (bG = bK.profileIconList.find(function (bT) {
                  return bT.rid === bU;
                })) || undefined === bG ? undefined : bG.url;
                var by = {
                  playerName: bZ,
                  portraitId: bU,
                  playerImageUrl: bM
                };
                if (!(0x1 !== bY && 0x2 !== bY && 0x3 !== bY)) {
                  bO[bY - 0x1] = by;
                }
              });
              this.topThreePlayerRanking = bO;
            };
            HG([xE], bD.prototype, "profileIconList", undefined);
            HG([xE], bD.prototype, "screenWidth", undefined);
            HG([xE], bD.prototype, "screenHeight", undefined);
            HG([xE], bD.prototype, "scale", undefined);
            HG([xE], bD.prototype, "ratio", undefined);
            HG([xE], bD.prototype, "socialMediaMode", undefined);
            HG([xE], bD.prototype, "markWinReplay", undefined);
            HG([xE], bD.prototype, "autoPlayState", undefined);
            HG([xE], bD.prototype, "isSocialActive", undefined);
            HG([xE], bD.prototype, "isTournamentActive", undefined);
            HG([xE], bD.prototype, "topThreePlayerRanking", undefined);
            HG([xE], bD.prototype, "isLandscapeMode", undefined);
            HG([xE], bD.prototype, "onlinePlayerCount", undefined);
            HG([xE], bD.prototype, "gameOnlinePlayerCount", undefined);
            HG([xE], bD.prototype, "gameIconUrl", undefined);
            HG([xE], bD.prototype, "isFav", undefined);
            HG([xE], bD.prototype, "gameLayoutInfo", undefined);
            HG([xE], bD.prototype, "onlinePlayerPaddingTop", undefined);
            HG([xE], bD.prototype, "favouriteWidget", undefined);
            HG([xE], bD.prototype, "leaderboard", undefined);
            HG([xE], bD.prototype, "tournamentWidget", undefined);
            HG([xE], bD.prototype, "playerProfileWidget", undefined);
            HG([xE], bD.prototype, "gameListWidget", undefined);
            HG([xE], bD.prototype, "mediaShareWidget", undefined);
            HG([xE], bD.prototype, "winReplayEnable", undefined);
            HG([xE], bD.prototype, "onlinePlayerWidget", undefined);
            HG([xE], bD.prototype, "isShowTournamentNotification", undefined);
            HG([xE], bD.prototype, "profileBadgeNotification", undefined);
            HG([xE], bD.prototype, "isGameButtonInteractable", undefined);
            HG([B9], bD.prototype, "updateRatio", null);
            HG([B9], bD.prototype, "updateSocialElement", null);
            HG([B9], bD.prototype, "getActiveElementCount", null);
            HG([B9], bD.prototype, "setIsFav", null);
            HG([B9], bD.prototype, "updateIsShowTournamentNotification", null);
            HG([B9], bD.prototype, "updateProfileIconList", null);
            HG([B9], bD.prototype, "setTopThreePlayerRanking", null);
            return bD;
          }();
          var E9 = function () {
            function bD(bk) {
              var bK = bk.gid;
              this.N = bK;
            }
            Object.defineProperty(bD.prototype, "gameId", {
              'get': function () {
                return this.N;
              },
              'enumerable': false,
              'configurable': true
            });
            return bD;
          }();
          var EH = function () {
            function bD() {
              this.gameList = [];
            }
            bD.prototype.updateInfo = function (bk) {
              var bK = this;
              this.gameList.length = 0x0;
              bk.forEach(function (bs) {
                var bO = new E9(bs);
                bK.gameList.push(bO);
              });
              this.gameList = this.gameList;
            };
            bD.prototype.updateInfoByGameId = function (bk, bK) {
              var bs = true;
              for (var bO = 0x0; bO < this.gameList.length; bO++) {
                var bV = this.gameList[bO];
                if (bV.gameId === bk && !bK) {
                  this.gameList.splice(bO, 0x1);
                  bs = false;
                  break;
                }
                if (bV.gameId === bk && bK) {
                  bs = false;
                  break;
                }
              }
              if (bs && bK) {
                var bG = {
                  gid: bk
                };
                var bY = new E9(bG);
                this.gameList.push(bY);
              }
              this.gameList = this.gameList;
            };
            Object.defineProperty(bD.prototype, "favGameList", {
              'get': function () {
                return this.gameList;
              },
              'enumerable': false,
              'configurable': true
            });
            bD.prototype.getFavGame = function (bk) {
              return this.gameList.filter(function (bK) {
                return bK.gameId === bk;
              })[0x0];
            };
            return bD;
          }();
          var Ev = new (function () {
            function bD() {
              this.lastTransactionRawDataList = [];
              this.mainViewModel = new E8();
              this.Z = new vS();
              this.mainViewModel.isLandscapeMode = "land" === shell.environment.getOrientationMode();
              this.tt = new EH();
            }
            bD.prototype.updateFavGameList = function (bk) {
              this.tt.updateInfo(bk);
              var bK = !!this.tt.getFavGame(this.Z.gameId);
              this.mainViewModel.setIsFav(bK);
            };
            bD.prototype.updateSocialGameSession = function (bk) {
              this.Z.updateGameInfo(bk);
            };
            Object.defineProperty(bD.prototype, "socialGameSession", {
              'get': function () {
                return this.Z;
              },
              'enumerable': false,
              'configurable': true
            });
            return bD;
          }())();
          function Ex(bD, bk) {
            if (E7) {
              E7.on(bD, function (bK) {
                if (bk) {
                  bk(bK);
                }
              });
            }
          }
          function EB(bD) {
            if (E7) {
              E7.off(bD);
            }
          }
          var EE = undefined;
          var Eb = v9.delayCallback;
          function Ec(bD) {
            var bk = {
              toastStyle: "Notification",
              message: bD,
              duration: 0x2,
              toastPosition: "Bottom",
              imageSrc: ''
            };
            EE.event.emit("Toast.Show", bk);
          }
          var Ef;
          var ES = ["ProcessEvent", "BonusGame", "Replay"];
          var EC = ["BigWin"];
          var Eo = ["BigWin", "TotalWin", "DragonJackpotTotalWin"];
          function EJ(bD) {
            return function (bk, bK) {
              bk = bk || function (bs) {
                var bO = undefined;
                if ("[object Object]" === Object.prototype.toString.call(bs) && bs.hasOwnProperty("err") && bs.hasOwnProperty('dt')) {
                  var bV = bs.err;
                  if (bV) {
                    bO = function (bG) {
                      var bY;
                      if (!("[object Object]" === Object.prototype.toString.call(bG))) {
                        bG = {};
                      }
                      if (!(bG.hasOwnProperty('cd') && ("number" == typeof (bY = bG.cd) || "string" == typeof bY && '' !== bY && !/\s/.test(bY) && !isNaN(+bY)))) {
                        bG.cd = 0x1965;
                      }
                      0x0;
                      return new shell.Error(shell.ServerError.Domain, bG.cd, bG.tid);
                    }(bV);
                  }
                } else {
                  0x0;
                  bO = new shell.Error(shell.ServerError.Domain, 0x1965);
                }
                return bO;
              }(bK);
              bD(bk, bK);
            };
          }
          !function (bD) {
            bD[bD.SOCIAL_PROFILE_ICON = 0xd] = "SOCIAL_PROFILE_ICON";
            bD[bD.SOCIAL_GAME_SMALL_ICON = 0x13] = "SOCIAL_GAME_SMALL_ICON";
          }(Ef || (Ef = {}));
          var EP = function () {
            function bD(bk) {
              this.nt = bk;
              this.it = new P();
            }
            bD.prototype.getSocialInitAPIConfig = function (bk, bK) {
              var bs = this.nt.socialGameSession;
              var bO = {
                'du': bs.domainURL,
                'otk': bs.operatorToken,
                'l': bs.language,
                'tpoc': !!bK.totalPlayerOnlineCount,
                'pfg': !!bK.playerFavouriteGames,
                'pfl': !!bK.playerProfile,
                'cs': !!bK.configurationSetting
              };
              return this.et("web-api/game-proxy/Social/SocialInitConfig/Get", bk, bO);
            };
            bD.prototype.getFilterResourceData = function (bk, bK) {
              var bs = this.nt.socialGameSession;
              var bO = {
                'du': bs.domainURL,
                'otk': bs.operatorToken
              };
              if (bK && bK.referenceId) {
                bO.rids = bK.referenceId;
              }
              if (bK && bK.typeId) {
                bO.rtids = bK.typeId;
              }
              return this.et("web-api/game-proxy/v2/Resources/GetByReferenceIdsResourceTypeIds", bk, bO);
            };
            bD.prototype.updatePlayerFavGame = function (bk) {
              var bK = {
                'ac': bk
              };
              return this.et("web-api/game-proxy/Social/PlayerFavGame/Update", function (bO, bV) {
                if (bO || !bV || !bV.dt) {
                  Ec(bO.message);
                  return void Ev.mainViewModel.setIsFav(!bk);
                }
                Ev.mainViewModel.setIsFav(bk);
              }, bK);
            };
            bD.prototype.et = function (bk, bK, bs) {
              if (undefined === bs) {
                bs = {};
              }
              var bO = this.nt.socialGameSession.apiDomain;
              var bV = this.nt.socialGameSession;
              var bG = bV.token;
              var bY = bV.platform;
              var bZ = bV.betType;
              var bU = HV({
                'atk': bG,
                'pf': bY,
                'btt': bZ
              }, bs);
              var bM = bO + bk;
              return function (by, bT, bh, bj) {
                var bl = by.request("POST", bT, bh, EJ(bj));
                return function () {
                  return bl.abort();
                };
              }(this.it, bM, bU, bK);
            };
            return bD;
          }();
          var Ez = new EP(Ev);
          var EW = v9.sequenceCallback;
          var Eq = v9.deferCallback;
          var Ew = function () {
            function bD() {}
            bD.prototype.init = function (bk) {
              EW(this.rt.bind(this), this.ot.bind(this), this.ut.bind(this))(bk);
            };
            bD.prototype.setupEvent = function (bk) {
              EW(this.ft.bind(this), this.lt.bind(this))(bk);
            };
            bD.prototype.rt = function (bk) {
              EE.event.emit("Shell.GetScale", undefined, this.ht.bind(this));
              EE.event.on("Shell.Scaled", this.vt.bind(this), undefined);
              EE.event.on("Tournament.OnDismiss", this.bt, this);
              EE.event.on("Tournament.OnShow", this.gt, this);
              EE.event.on("Game.BlockUI", this.yt, this);
              EE.event.on("SocialPage.OnFavouriteGameChanged", this._t, this);
              EE.event.on("Social.UpdateFavIcon", this.wt, this);
              EE.event.emit("Game.GetUpcomingTournament");
              EE.event.on("Game.UpcomingTournament", this.xt, this);
              EE.event.on("Game.DisplayStateChanged", this.Ot, this);
              EE.event.on("Game.FlowStateChanged", this.At, this);
              if (bk) {
                bk();
              }
            };
            bD.prototype.ft = function (bk) {
              var bK = Ev.mainViewModel;
              var bs = bK.winReplayEnable;
              var bO = bK.mediaShareWidget;
              if (bs && bO) {
                EE.event.on("Game.TransactionInfoUpdated", this.St, this);
                EE.event.on("Game.TransactionStateChanged", this.jt, this);
                EE.event.on("Game.WalletChangedSuccess", this.kt, this);
                EE.event.on("Game.AutoplayStateChanged", this.Ct, this);
              }
              if (bk) {
                bk();
              }
            };
            bD.prototype.ut = function (bk) {
              EE.event.emit("Game.RequestSession", undefined, function (bK) {
                var bs = bK.response;
                Ev.updateSocialGameSession(bs);
                var bO = bs.operatorJurisdictionConfig;
                var bV = bO.gamePluginList;
                var bG = bO.gameClock;
                var bY = bO.gameName;
                var bZ = bO.netProfitState;
                var bU = bO.elapsedTimeState;
                var bM = bO.replayVersion;
                if (bG || bY || bZ || bU) {
                  Ev.mainViewModel.onlinePlayerPaddingTop = 0x41;
                }
                if (bV) {
                  var by = bV.filter(function (bh) {
                    return bh.name === EE.bundleInfo.name;
                  })[0x0];
                  var bT = by && by.configuration ? by.configuration : undefined;
                  Ev.mainViewModel.updateSocialElement(bT);
                }
                if (0x0 === bM) {
                  Ev.mainViewModel.winReplayEnable = false;
                }
                if (bk) {
                  bk();
                }
              });
            };
            bD.prototype.ot = function (bk) {
              EE.event.emit("Game.RequestLayoutInfo", undefined, function (bK) {
                var bs = bK.response;
                Ev.mainViewModel.gameLayoutInfo = bs;
                if (bk) {
                  bk();
                }
              });
            };
            bD.prototype.lt = function (bk) {
              var bK = this;
              var bs = function (bO) {
                if (bO.payload) {
                  bK.It();
                }
              };
              EE.event.emit("Game.RequestOperatorSocketConnectionStatus", undefined, function (bO) {
                if (bO.response) {
                  bK.It();
                } else {
                  EE.event.once("Game.OperatorSocketConnected", bs, undefined);
                }
              });
              if (bk) {
                bk();
              }
            };
            bD.prototype.It = function () {
              var bk;
              var bK;
              var bs = Ev.socialGameSession;
              bk = bs.socketServerName;
              bK = bs.socketPath;
              E7 = io.connect(bk, {
                'path': bK,
                'transports': ["websocket"]
              });
              Ex(vB.ONLINE_PLAYER_COUNT, function (bO) {
                Ev.mainViewModel.gameOnlinePlayerCount = bO.gop;
                Ev.mainViewModel.onlinePlayerCount = bO.top;
              });
              Ex(vB.LEADER_BOARD_RANKING, function (bO) {
                Ev.mainViewModel.setTopThreePlayerRanking(bO);
              });
              Ex(vB.PUSH_PROFILE_BADGE, function (bO) {
                Ev.mainViewModel.profileBadgeNotification = bO instanceof Array && bO.length > 0x0;
              });
            };
            bD.prototype.emitEvent = function (bk, bK) {
              var bs = bk !== vE.SEND_ANALYTICS_EVENT ? this.Et.bind(this) : undefined;
              EE.event.emit(bk, bK, bs);
            };
            bD.prototype.Et = function (bk) {
              if (!bk.response) {
                Ec(shell.I18n.t("SocialPlugin.UnknownErrorRetry"));
              }
            };
            bD.prototype._t = function (bk) {
              var bK = bk.payload;
              var bs = bK.gameID;
              var bO = bK.favourite;
              if (bs.toString() === Ev.socialGameSession.gameId.toString()) {
                Ev.mainViewModel.setIsFav(bO);
              }
            };
            bD.prototype.xt = function (bk) {
              if (bk.payload) {
                Ev.mainViewModel.updateIsShowTournamentNotification(bk.payload.value);
              }
            };
            bD.prototype.Ot = function (bk) {
              if ("Start" !== Ev.mainViewModel.gameFlowInfo.Replay) {
                var bK = bk.payload;
                var bs = bK.effectType;
                var bO = bK.displayState;
                Ev.mainViewModel.gameEffectInfo[bs] = bO;
                if ("Start" === bO) {
                  this.Rt();
                } else if ("End" === bO) {
                  this.Pt();
                  if (Eo.includes(bs)) {
                    this.Nt();
                  }
                }
              }
            };
            bD.prototype.replayLastRound = function () {
              var bk = {
                displayState: "Start",
                flowType: "Replay"
              };
              EE.event.emit("Game.FlowStateChanged", bk);
              Ev.mainViewModel.socialMediaMode = v7.SHARE;
              var bK = {
                replayType: "Spin",
                selectedIndex: 0x0,
                replayData: Ev.lastTransactionRawDataList
              };
              EE.event.emit("Game.RequestReplay", bK);
            };
            bD.prototype.At = function (bk) {
              var bK = bk.payload;
              var bs = bK.flowType;
              var bO = bK.displayState;
              if (!("Start" === Ev.mainViewModel.gameFlowInfo.Replay && "Replay" !== bs)) {
                Ev.mainViewModel.gameFlowInfo[bs] = bO;
                if ("Start" === bO) {
                  this.Rt();
                } else if ("End" === bO) {
                  this.Pt();
                }
              }
            };
            bD.prototype.Pt = function () {
              var bk = Ev.mainViewModel;
              var bK = bk.gamePlayUIBlock;
              var bs = bk.gameFlowInfo;
              var bO = bk.gameEffectInfo;
              var bV = function (bZ) {
                var bU = false;
                var bM = Object.keys(bZ);
                for (var by = 0x0; by < bM.length; by++) {
                  if (bZ[bM[by]]) {
                    bU = true;
                    break;
                  }
                }
                return bU;
              }(bK);
              var bG = function (bZ) {
                var bU = false;
                var bM = Object.keys(bZ);
                for (var by = 0x0; by < bM.length; by++) {
                  if ("Start" === bZ[bM[by]] && ES.includes(bM[by])) {
                    bU = true;
                    break;
                  }
                }
                return bU;
              }(bs);
              var bY = function (bZ) {
                var bU = false;
                var bM = Object.keys(bZ);
                for (var by = 0x0; by < bM.length; by++) {
                  if ("Start" === bZ[bM[by]] && EC.includes(EC[by])) {
                    bU = true;
                    break;
                  }
                }
                return bU;
              }(bO);
              if (!(bV || bG || bY)) {
                Ev.mainViewModel.isSocialActive = true;
              }
            };
            bD.prototype.Rt = function () {
              Eq()(function () {
                Ev.mainViewModel.isSocialActive = false;
              });
            };
            bD.prototype.St = function (bk) {
              if ("Start" !== Ev.mainViewModel.gameFlowInfo.Replay) {
                Ev.mainViewModel.socialMediaMode = v7.SHARE;
                if (bk.payload.st === v6.NORMAL) {
                  Ev.lastTransactionRawDataList.length = 0x0;
                }
                Ev.lastTransactionRawDataList.push(bk.payload);
              }
            };
            bD.prototype.jt = function (bk) {
              var bK = bk.payload;
              var bs = Ev.lastTransactionRawDataList.length;
              if (bs > 0x0) {
                var bO = Ev.lastTransactionRawDataList[0x0].st;
                var bV = Ev.lastTransactionRawDataList[bs - 0x1].nst;
                if (Ev.mainViewModel.markWinReplay && "idle" === bK.to && bO === v6.NORMAL && bV === v6.NORMAL) {
                  Ev.mainViewModel.markWinReplay = false;
                  return void (Ev.mainViewModel.socialMediaMode = v7.REPLAY);
                }
              }
              if (Ev.mainViewModel.socialMediaMode === v7.REPLAY && "action" === bK.to) {
                Ev.mainViewModel.socialMediaMode = v7.SHARE;
              }
            };
            bD.prototype.kt = function () {
              Ev.mainViewModel.socialMediaMode = v7.SHARE;
            };
            bD.prototype.Ct = function (bk) {
              Ev.mainViewModel.autoPlayState = bk.payload;
            };
            bD.prototype.Nt = function () {
              var bk = Ev.mainViewModel;
              var bK = bk.winReplayEnable;
              var bs = bk.autoPlayState;
              if (bK) {
                var bO = Ev.lastTransactionRawDataList.length;
                if (0x0 !== bO && "Start" !== bs) {
                  var bV = Ev.lastTransactionRawDataList[0x0].st;
                  var bG = Ev.lastTransactionRawDataList[bO - 0x1].nst;
                  if (bV === v6.NORMAL && bG === v6.NORMAL || bV === v6.NORMAL && bG === v6.RESPIN) {
                    Ev.mainViewModel.markWinReplay = true;
                  }
                }
              }
            };
            bD.prototype.wt = function (bk) {
              var bK = bk.payload;
              Ez.updatePlayerFavGame(bK);
            };
            bD.prototype.gt = function () {
              Ev.mainViewModel.isTournamentActive = true;
            };
            bD.prototype.bt = function () {
              Ev.mainViewModel.isTournamentActive = false;
            };
            bD.prototype.yt = function (bk) {
              var bK = bk.payload;
              var bs = false;
              if ("boolean" == typeof bK) {
                bs = bK;
                Ev.mainViewModel.gamePlayUIBlock["default"] = bK;
              } else {
                bs = bK.isBlocked;
                Ev.mainViewModel.gamePlayUIBlock[bK.uiBlockKey] = bK.isBlocked;
              }
              if (bs) {
                this.Rt();
              } else {
                this.Pt();
              }
            };
            bD.prototype.ht = function (bk) {
              if (!bk.error) {
                this.Tt(bk.response);
              }
            };
            bD.prototype.vt = function (bk) {
              if (!bk.error) {
                this.Tt(bk.payload);
              }
            };
            bD.prototype.Tt = function (bk) {
              var bK = bk.scale;
              var bs = bk.width;
              var bO = bk.height;
              Ev.mainViewModel.screenWidth = bs;
              Ev.mainViewModel.screenHeight = bO;
              Ev.mainViewModel.scale = bK;
            };
            bD.prototype.destroySocket = function () {
              EB(vB.LEADER_BOARD_RANKING);
              EB(vB.ONLINE_PLAYER_COUNT);
              EB(vB.PUSH_PROFILE_BADGE);
              EB(vB.ONLINE_PLAYER_COUNT);
            };
            return bD;
          }();
          var EF = new Ew();
          if (!z) {
            throw Error("mobx-react-lite requires React with Hooks support");
          }
          if (!B5) {
            throw Error("mobx-react-lite requires mobx at least version 4 to be available");
          }
          var EQ = function () {
            EQ = Object.assign || function (bD) {
              var bk;
              var bK = 0x1;
              for (var bs = arguments.length; bK < bs; bK++) {
                for (var bO in bk = arguments[bK]) if (Object.prototype.hasOwnProperty.call(bk, bO)) {
                  bD[bO] = bk[bO];
                }
              }
              return bD;
            };
            return EQ.apply(this, arguments);
          };
          function EL(bD) {
            return bD.current ? Bb(BA(bD.current, undefined)) : "<unknown>";
          }
          var EX = [];
          function Ep() {
            var bD = function (bK, bs) {
              var bO = "function" == typeof Symbol && bK[Symbol.iterator];
              if (!bO) {
                return bK;
              }
              var bV;
              var bG;
              var bY = bO.call(bK);
              var bZ = [];
              try {
                for (; (undefined === bs || bs-- > 0x0) && !(bV = bY.next()).done;) {
                  bZ.push(bV.value);
                }
              } catch (bM) {
                var bU = {
                  error: bM
                };
                bG = bU;
              } finally {
                try {
                  if (bV && !bV.done && (bO = bY["return"])) {
                    bO.call(bY);
                  }
                } finally {
                  if (bG) {
                    throw bG.error;
                  }
                }
              }
              return bZ;
            }(z(0x0), 0x2);
            var bk = bD[0x1];
            return L(function () {
              bk(function (bK) {
                return bK + 0x1;
              });
            }, []);
          }
          var EI = {};
          function ED(bD, bk, bK) {
            if (undefined === bk) {
              bk = "observed";
            }
            if (undefined === bK) {
              bK = EI;
            }
            var bs = (bK.useForceUpdate || Ep)();
            var bO = w(null);
            if (!bO.current) {
              bO.current = new xl("observer(" + bk + ')', function () {
                bs();
              });
            }
            var bV;
            var bG;
            var bY = function () {
              if (bO.current && !bO.current.isDisposed) {
                bO.current.dispose();
                bO.current = null;
              }
            };
            F(bO, EL);
            (function (bZ) {
              Q(function () {
                return bZ;
              }, EX);
            })(function () {
              bY();
            });
            bO.current.track(function () {
              try {
                bV = bD();
              } catch (bZ) {
                bG = bZ;
              }
            });
            if (bG) {
              bY();
              throw bG;
            }
            return bV;
          }
          var Ek = {
            $$typeof: true,
            render: true,
            compare: true,
            type: true
          };
          function Es(bD) {
            var bk = bD.children;
            var bK = bD.render;
            var bs = bk || bK;
            return "function" != typeof bs ? null : ED(bs);
          }
          function EO(bD, bk, bK, bs, bO) {
            var bV = "children" === bk ? "render" : "children";
            var bG = "function" == typeof bD[bk];
            var bY = "function" == typeof bD[bV];
            return bG && bY ? Error("MobX Observer: Do not use children and render in the same time in`" + bK) : bG || bY ? null : Error("Invalid prop `" + bO + "` of type `" + typeof bD[bk] + "` supplied to `" + bK + "`, expected `function`.");
          }
          var EV = {
            children: EO,
            render: EO
          };
          Es.propTypes = EV;
          Es.displayName = "Observer";
          var EG = 0x0;
          var EY = {};
          function EZ(bD) {
            if (!EY[bD]) {
              EY[bD] = function (bk) {
                if ("function" == typeof Symbol) {
                  return Symbol(bk);
                }
                var bK = "__$mobx-react " + bk + " (" + EG + ')';
                EG++;
                return bK;
              }(bD);
            }
            return EY[bD];
          }
          function EU(bD, bk) {
            if (bD === bk ? 0x0 !== bD || 0x1 / bD == 0x1 / bk : bD != bD && bk != bk) {
              return true;
            }
            if ("object" != typeof bD || null === bD || "object" != typeof bk || null === bk) {
              return false;
            }
            var bK = Object.keys(bD);
            var bs = Object.keys(bk);
            if (bK.length !== bs.length) {
              return false;
            }
            for (var bO = 0x0; bO < bK.length; bO++) {
              if (!hasOwnProperty.call(bk, bK[bO]) || !(bD[bK[bO]] === bk[bK[bO]] ? 0x0 !== bD[bK[bO]] || 0x1 / bD[bK[bO]] == 0x1 / bk[bK[bO]] : bD[bK[bO]] != bD[bK[bO]] && bk[bK[bO]] != bk[bK[bO]])) {
                return false;
              }
            }
            return true;
          }
          function Ey(bD, bk, bK) {
            if (Object.hasOwnProperty.call(bD, bk)) {
              bD[bk] = bK;
            } else {
              Object.defineProperty(bD, bk, {
                'enumerable': false,
                'configurable': true,
                'writable': true,
                'value': bK
              });
            }
          }
          var ET = EZ("patchMixins");
          var Eh = EZ("patchedDefinition");
          function Ej(bD, bk) {
            var bK = this;
            var bs = [];
            for (var bO = arguments.length - 0x2; bO-- > 0x0;) {
              bs[bO] = arguments[bO + 0x2];
            }
            bk.locks++;
            try {
              var bV;
              if (null != bD) {
                bV = bD.apply(this, bs);
              }
              return bV;
            } finally {
              bk.locks--;
              if (0x0 === bk.locks) {
                bk.methods.forEach(function (bG) {
                  bG.apply(bK, bs);
                });
              }
            }
          }
          function El(bD, bk) {
            return function () {
              var bK = [];
              for (var bs = arguments.length; bs--;) {
                bK[bs] = arguments[bs];
              }
              Ej.call.apply(Ej, [this, bD, bk].concat(bK));
            };
          }
          var Em = EZ("isUnmounted");
          var Ed = EZ("skipRender");
          var Eg = EZ("isForcingUpdate");
          function EN(bD, bk) {
            return this.state !== bk || !EU(this.props, bD);
          }
          function EA(bD, bk) {
            var bK = EZ("reactProp_" + bk + "_valueHolder");
            var bs = EZ("reactProp_" + bk + "_atomHolder");
            function bO() {
              if (!this[bs]) {
                Ey(this, bs, vl("reactive " + bk));
              }
              return this[bs];
            }
            Object.defineProperty(bD, bk, {
              'configurable': true,
              'enumerable': true,
              'get': function () {
                bO.call(this).reportObserved();
                return this[bK];
              },
              'set': function (bV) {
                if (this[Eg] || EU(this[bK], bV)) {
                  Ey(this, bK, bV);
                } else {
                  Ey(this, bK, bV);
                  Ey(this, Ed, true);
                  bO.call(this).reportChanged();
                  Ey(this, Ed, false);
                }
              }
            });
          }
          var u0 = "function" == typeof Symbol && Symbol["for"];
          var u1 = u0 ? Symbol["for"]("react.forward_ref") : "function" == typeof q && q(function () {}).$$typeof;
          var u2 = u0 ? Symbol["for"]("react.memo") : "function" == typeof W && W(function () {}).$$typeof;
          function u3(bD) {
            bD.isMobxInjector;
            if (u2 && bD.$$typeof === u2) {
              throw Error("Mobx observer: You are trying to use 'observer' on function component wrapped to either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
            }
            if (u1 && bD.$$typeof === u1) {
              var bk = bD.render;
              if ("function" != typeof bk) {
                throw Error("render property of ForwardRef was not a function");
              }
              return q(function () {
                return X.createElement(Es, null, function () {
                  return bk.apply(undefined, arguments);
                });
              });
            }
            var bK = {
              forwardRef: false
            };
            return "function" != typeof bD || bD.prototype && bD.prototype.render || bD.isReactClass || Object.prototype.isPrototypeOf.call(I, bD) ? function (by) {
              var bT = by.prototype;
              if (bT.componentWillReact) {
                throw Error("The componentWillReact life-cycle event is no longer supported");
              }
              if (by.__proto__ !== D) {
                if (bT.shouldComponentUpdate) {
                  if (bT.shouldComponentUpdate !== EN) {
                    throw Error("It is not allowed to use shouldComponentUpdate in observer based components.");
                  }
                } else {
                  bT.shouldComponentUpdate = EN;
                }
              }
              EA(bT, "props");
              EA(bT, "state");
              var bh = bT.render;
              bT.render = function () {
                return function (bj) {
                  var bl = this;
                  Ey(this, Ed, false);
                  Ey(this, Eg, false);
                  var bR = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>";
                  var bm = bj.bind(this);
                  var bd = false;
                  var bg = new xl(bR + ".render()", function () {
                    if (!bd && (bd = true, true !== bl[Em])) {
                      var bA = true;
                      try {
                        Ey(bl, Eg, true);
                        if (!bl[Ed]) {
                          I.prototype.forceUpdate.call(bl);
                        }
                        bA = false;
                      } finally {
                        Ey(bl, Eg, false);
                        if (bA) {
                          bg.dispose();
                        }
                      }
                    }
                  });
                  function bN() {
                    bd = false;
                    var bA = undefined;
                    var c0 = undefined;
                    bg.track(function () {
                      try {
                        c0 = function (c1, c2) {
                          var c3;
                          var c4 = xC(false);
                          try {
                            c3 = c2();
                          } finally {
                            xo(c4);
                          }
                          return c3;
                        }(0x0, bm);
                      } catch (c1) {
                        bA = c1;
                      }
                    });
                    if (bA) {
                      throw bA;
                    }
                    return c0;
                  }
                  bg.reactComponent = this;
                  bN.$mobx = bg;
                  this.render = bN;
                  return bN();
                }.call(this, bh);
              };
              (function (bj, bl, bR) {
                var bm = function (bN, bA) {
                  var c0 = bN[ET] = bN[ET] || {};
                  var c1 = c0[bA] = c0[bA] || {};
                  c1.locks = c1.locks || 0x0;
                  c1.methods = c1.methods || [];
                  return c1;
                }(bj, bl);
                if (bm.methods.indexOf(bR) < 0x0) {
                  bm.methods.push(bR);
                }
                var bd = Object.getOwnPropertyDescriptor(bj, bl);
                if (!bd || !bd[Eh]) {
                  var bg = function bN(bA, c0, c1, c2, c3) {
                    var c4;
                    var c5 = El(c3, c2);
                    (c4 = {
                      get: function () {
                        return c5;
                      },
                      set: function (c6) {
                        if (this === bA) {
                          c5 = El(c6, c2);
                        } else {
                          var c7 = bN(this, c0, c1, c2, c6);
                          Object.defineProperty(this, c0, c7);
                        }
                      },
                      configurable: true,
                      enumerable: c1
                    })[Eh] = true;
                    return c4;
                  }(bj, bl, bd ? bd.enumerable : undefined, bm, bj[bl]);
                  Object.defineProperty(bj, bl, bg);
                }
              })(bT, "componentWillUnmount", function () {
                if (this.render.$mobx) {
                  this.render.$mobx.dispose();
                }
                this[Em] = true;
              });
              return by;
            }(bD) : (bs = bD, bZ = EQ(bK, bO), bU = bs.displayName || bs.name, (bM = function (by, bT) {
              return ED(function () {
                return bs(by, bT);
              }, bU);
            }).displayName = bU, bV = bZ.forwardRef ? W(q(bM)) : W(bM), bY = bV, Object.keys(bG = bs).forEach(function (by) {
              if (bG.hasOwnProperty(by) && !Ek[by]) {
                Object.defineProperty(bY, by, Object.getOwnPropertyDescriptor(bG, by));
              }
            }), bV.displayName = bU, bV);
            var bs;
            var bO;
            var bV;
            var bG;
            var bY;
            var bZ;
            var bU;
            var bM;
          }
          function u4(bD) {
            function bk(bs, bO, bV, bG, bY, bZ) {
              var bU = [];
              for (var bM = arguments.length - 0x6; bM-- > 0x0;) {
                bU[bM] = arguments[bM + 0x6];
              }
              return xI(function () {
                bG = bG || "<<anonymous>>";
                bZ = bZ || bV;
                return null == bO[bV] ? bs ? Error("The " + bY + " `" + bZ + "` is marked as required in `" + bG + "`, but its value is `" + (null === bO[bV] ? "null" : "undefined") + '`.') : null : bD.apply(undefined, [bO, bV, bG, bY, bZ].concat(bU));
              });
            }
            var bK = bk.bind(null, false);
            bK.isRequired = bk.bind(null, true);
            return bK;
          }
          function u5(bD) {
            var bk = typeof bD;
            return Array.isArray(bD) ? "array" : bD instanceof RegExp ? "object" : function (bK, bs) {
              return "symbol" === bK || "Symbol" === bs["@@toStringTag"] || "function" == typeof Symbol && bs instanceof Symbol;
            }(bk, bD) ? "symbol" : bk;
          }
          function u6(bD, bk) {
            return u4(function (bK, bs, bO, bV, bG) {
              return xI(function () {
                if (bD && u5(bK[bs]) === bk.toLowerCase()) {
                  return null;
                }
                var bY;
                switch (bk) {
                  case "Array":
                    bY = BG;
                    break;
                  case "Object":
                    bY = BN;
                    break;
                  case "Map":
                    bY = BM;
                    break;
                  default:
                    throw Error("Unexpected mobxType: " + bk);
                }
                var bZ = bK[bs];
                if (!bY(bZ)) {
                  var bU = function (by) {
                    var bT = u5(by);
                    if ("object" === bT) {
                      if (by instanceof Date) {
                        return "date";
                      }
                      if (by instanceof RegExp) {
                        return "regexp";
                      }
                    }
                    return bT;
                  }(bZ);
                  var bM = bD ? " or javascript `" + bk.toLowerCase() + '`' : '';
                  return Error("Invalid prop `" + bG + "` of type `" + bU + "` supplied to `" + bO + "`, expected `mobx.Observable" + bk + '`' + bM + '.');
                }
                return null;
              });
            });
          }
          function u7(bD, bk) {
            return u4(function (bK, bs, bO, bV, bG) {
              var bY = [];
              for (var bZ = arguments.length - 0x5; bZ-- > 0x0;) {
                bY[bZ] = arguments[bZ + 0x5];
              }
              return xI(function () {
                if ("function" != typeof bk) {
                  return Error("Property `" + bG + "` of component `" + bO + "` has invalid PropType notation.");
                }
                var bU = u6(bD, "Array")(bK, bs, bO);
                if (bU instanceof Error) {
                  return bU;
                }
                var bM = bK[bs];
                for (var by = 0x0; by < bM.length; by++) {
                  if ((bU = bk.apply(undefined, [bM, by, bO, bV, bG + '[' + by + ']'].concat(bY))) instanceof Error) {
                    return bU;
                  }
                }
                return null;
              });
            });
          }
          X.createContext({});
          EZ("disposeOnUnmountProto");
          EZ("disposeOnUnmountInst");
          u6(false, "Array");
          u7.bind(null, false);
          u6(false, "Map");
          u6(false, "Object");
          u6(true, "Array");
          u7.bind(null, true);
          u6(true, "Object");
          if (!I) {
            throw Error("mobx-react requires React to be available");
          }
          if (!xE) {
            throw Error("mobx-react requires mobx to be available");
          }
          if ("function" == typeof k) {
            (function (bD) {
              var bk = bD.enforceActions;
              var bK = bD.computedRequiresReaction;
              var bs = bD.computedConfigurable;
              var bO = bD.disableErrorBoundaries;
              var bV = bD.arrayBuffer;
              var bG = bD.reactionScheduler;
              if (true === bD.isolateGlobalState) {
                if (xG.pendingReactions.length || xG.inBatch || xG.isRunningReactions) {
                  vF("isolateGlobalState should be called before MobX is running any reactions");
                }
                xV = true;
                if (xO) {
                  if (0x0 == --(undefined !== b ? b : global).__mobxInstanceCount) {
                    (undefined !== b ? b : global).__mobxGlobals = undefined;
                  }
                  xG = new xs();
                }
              }
              if (undefined !== bk) {
                var bY = undefined;
                switch (bk) {
                  case true:
                  case "observed":
                    bY = true;
                    break;
                  case false:
                  case "never":
                    bY = false;
                    break;
                  case "strict":
                  case "always":
                    bY = "strict";
                    break;
                  default:
                    vF("Invalid value for 'enforceActions': '" + bk + "', expected 'never', 'always' or 'observed'");
                }
                xG.enforceActions = bY;
                xG.allowStateChanges = true !== bY && "strict" !== bY;
              }
              if (undefined !== bK) {
                xG.computedRequiresReaction = !!bK;
              }
              if (undefined !== bs) {
                xG.computedConfigurable = !!bs;
              }
              if (undefined !== bO) {
                xG.disableErrorBoundaries = !!bO;
              }
              if ("number" == typeof bV) {
                BO(bV);
              }
              if (bG) {
                xN(bG);
              }
            })({
              'reactionScheduler': k
            });
          }
          var u8 = {
            color: "white",
            fontSize: "8.5px",
            textAlign: "end",
            lineHeight: "11px",
            opacity: "0.85",
            whiteSpace: "nowrap",
            textShadow: "rgb(65 50 24) 1px 0px 0px, rgb(65 50 24) 0.552px 0.85px 0px, rgb(65 50 24) -0.4px 0.9px 0px, rgb(65 50 24) -0.1px 0.15px 0px, rgb(65 50 24) -0.65px -0.7px 0px, rgb(65 50 24) 0.3px -0.95px 0px, rgb(65 50 24) 0.96px -0.28px 0px",
            pointerEvents: "none"
          };
          var u9 = {
            position: "absolute",
            right: "8px",
            top: "0px",
            pointerEvents: "none"
          };
          var uv = function (bD) {
            var bK = bD.playing;
            var bs = bD.online;
            var bO = shell.I18n.t("SocialPlugin.PlayerPlayingNum", {
              'playerNum': bK.toString()
            });
            var bV = function (bY) {
              return shell.I18n.t("SocialPlugin.PlayerOnlineNum", {
                'playerNum': bY.toString()
              });
            }(bs);
            var bG = {
              style: u8
            };
            return X.createElement("div", bG, X.createElement("div", null, bO), X.createElement("div", null, bV));
          };
          var uB = u3(function () {
            var bD = Ev.mainViewModel;
            var bk = bD.onlinePlayerCount;
            var bK = bD.gameOnlinePlayerCount;
            var bs = bD.onlinePlayerPaddingTop;
            var bO = bD.ratio;
            var bV = bD.screenWidth;
            var bG = HV(HV({}, u9), {
              'transform': "translate(".concat(bV, "px, 0px)"),
              'top': ''.concat(bs / bO, 'px')
            });
            var bY = {
              style: bG
            };
            var bZ = {
              online: bk,
              playing: bK
            };
            return X.createElement("div", bY, X.createElement(uv, bZ));
          });
          var uE = function (bD) {
            function bk() {
              return null !== bD && bD.apply(this, arguments) || this;
            }
            HO(bk, bD);
            bk.prototype.render = function () {
              return X.createElement("div", {
                'className': vb.SOCIAL_WIDGET_BUTTON,
                'onClick': this.Lt.bind(this)
              }, X.createElement("div", {
                'className': vb.CASH_TOURNAMENT
              }, this.Mt()));
            };
            bk.prototype.Mt = function () {
              var bK = {
                className: vb.SOCIAL_NOTIFICATION__DOT
              };
              return Ev.mainViewModel.isShowTournamentNotification ? X.createElement("div", bK) : null;
            };
            bk.prototype.Lt = function () {
              this.props.onClickCallback();
            };
            return bk;
          }(X.Component);
          var uu = u3(uE);
          var ub = v9.delayCallback;
          var uc = v9.deferCallback;
          var uf = u3(function (bD) {
            function bk(bK) {
              var bs = bD.call(this, bK) || this;
              var bO = {
                isPlayingAnim: false,
                canActive: true
              };
              bs.Bt = undefined;
              bs.Dt = undefined;
              bs.state = bO;
              return bs;
            }
            HO(bk, bD);
            bk.prototype.componentWillUnmount = function () {
              var bK = this.Dt;
              this.Dt = undefined;
              if (bK) {
                bK();
              }
            };
            bk.prototype.render = function () {
              var bK = Ev.mainViewModel.isFav ? vb.FAVOURITE_BUTTON_YELLOW : vb.FAVOURITE_BUTTON_WHITE;
              var bs = this.state.canActive ? vb.SOCIAL_BIG_SCALE_BUTTON : '';
              var bO = {
                position: "absolute"
              };
              return X.createElement("div", {
                'className': vb.SOCIAL_WIDGET_BUTTON,
                'onClick': this.Gt.bind(this)
              }, X.createElement("div", {
                'className': "social_button-image ".concat(bK, " ").concat(bs),
                'style': bO
              }), this.Ut());
            };
            bk.prototype.Ut = function () {
              return this.state.isPlayingAnim ? X.createElement("div", {
                'id': vb.FAVOURITE_ANIMATED,
                'className': vb.FAVOURITE_BUTTON_YELLOW,
                'onAnimationEnd': this.Vt.bind(this)
              }) : null;
            };
            bk.prototype.Gt = function () {
              var bK = {
                isPlayingAnim: false,
                canActive: false
              };
              var bs = {
                isPlayingAnim: true,
                canActive: false
              };
              if (Ev.mainViewModel.isFav) {
                this.setState(bK);
              } else {
                this.setState(bs);
              }
              Ev.mainViewModel.isGameButtonInteractable = false;
              this.Ft(!Ev.mainViewModel.isFav);
              uc(true)(this.Ht.bind(this));
              var bO = this.Bt;
              this.Bt = undefined;
              if (bO) {
                bO();
              }
              this.Bt = ub(0x1)(this.Wt.bind(this));
            };
            bk.prototype.Vt = function () {
              var bK = {
                isPlayingAnim: false
              };
              this.setState(bK);
            };
            bk.prototype.Ft = function (bK) {
              Ev.mainViewModel.setIsFav(bK);
            };
            bk.prototype.Ht = function () {
              var bK = {
                canActive: true
              };
              this.setState(bK);
            };
            bk.prototype.Wt = function () {
              Ev.mainViewModel.isGameButtonInteractable = true;
              this.Bt = undefined;
              var bK = Ev.mainViewModel.isFav;
              Ev.mainViewModel.setIsFav(bK);
              EF.emitEvent(vE.SEND_ANALYTICS_EVENT, {
                'actionName': Ev.mainViewModel.isFav ? "ClickFavorite" : "ClickUnfavorite"
              });
              Ez.updatePlayerFavGame(bK);
            };
            return bk;
          }(X.Component));
          function uS(bD) {
            if (bD.__esModule) {
              return bD;
            }
            var bk = bD["default"];
            if ("function" == typeof bk) {
              var bK = function bO() {
                if (this instanceof bO) {
                  var bV = [null];
                  bV.push.apply(bV, arguments);
                  var bG = Function.bind.apply(bk, bV);
                  return new bG();
                }
                return bk.apply(this, arguments);
              };
              bK.prototype = bk.prototype;
            } else {
              bK = {};
            }
            var bs = {
              value: true
            };
            Object.defineProperty(bK, "__esModule", bs);
            Object.keys(bD).forEach(function (bV) {
              var bG = Object.getOwnPropertyDescriptor(bD, bV);
              Object.defineProperty(bK, bV, bG.get ? bG : {
                'enumerable': true,
                'get': function () {
                  return bD[bV];
                }
              });
            });
            return bK;
          }
          var uC = {};
          var uo = {};
          var ua = {};
          var uJ = uS(Object.freeze({
            '__proto__': null,
            'appendStyles': Hd,
            'getBase64AtlasData': function (bD, bk) {
              var bK = [];
              bD.forEach(function (bs, bO) {
                HZ.parsePlistData(bs.plistPath, function (bV) {
                  var bG = bV[0x0].frames;
                  var bY = [];
                  bs.textureList.forEach(function (bZ) {
                    if (undefined === bG[bZ]) {
                      throw Error("texture :" + bZ + " not found in " + bs.plistPath);
                    }
                    var bU = bG[bZ].textureRect;
                    var bM = bG[bZ].textureRotated;
                    if (undefined !== bU) {
                      var by = bU.match(/\d+/g);
                      if (by) {
                        var bT = by.map(Number);
                        var bh = {
                          'x': bT[0x0],
                          'y': bT[0x1],
                          width: bT[0x2],
                          height: bT[0x3],
                          isRotate: bM
                        };
                        bY.push(bh);
                      }
                    }
                  });
                  bY.forEach(function (bZ) {
                    bK.push(HU(bs.resolvePath, bZ, bs.colour));
                  });
                  if (bD.length - 0x1 === bO) {
                    Promise.all(bK).then(function (bZ) {
                      var bU = [];
                      bZ.forEach(function (bM) {
                        bU.push(bM);
                      });
                      if (bk) {
                        bk(bU, undefined);
                      }
                    })["catch"](function (bZ) {
                      if (bk) {
                        bk(undefined, bZ);
                      }
                    });
                  }
                });
              });
            },
            'getBase64ImageData': HM,
            'loadImageUrlAsBlob': Hl,
            'loadLocale': function (bD, bk) {
              return new Promise(function (bK, bs) {
                var bO = new plugin.Loader();
                bO.onLoad = function (bV) {
                  var bG = bV.response;
                  for (var bY in bG) if (bG[bY]) {
                    shell.I18n.extend(bG[bY], bY);
                  }
                  bK(bG);
                };
                bO.onError = function () {
                  var bV = shell.Error;
                  var bG = shell.ClientError;
                  var bY = new bV(bG.Domain, bG.GameLoadResourceError);
                  bs(bY);
                };
                bO.load([{
                  'src': bD,
                  'type': plugin.LoadType.Json,
                  'maxAttemptCount': bk
                }]);
              });
            },
            'loadResource': HT,
            'loadSpriteSheet': Hh,
            'removeStyles': function (bD, bk) {
              if (!Array.isArray(bD)) {
                bD = [bD];
              }
              bD.forEach(function (bK) {
                v0(bK, bk.bundleInfo.name);
              });
            },
            'resolveCSS': HR,
            'resolveCSSWithImage': function (bD, bk, bK) {
              var bs = bK ? bK.resource.resolveUrl(bk) : bk;
              return bD.replace(/url\((.*?)\)/g, function () {
                return "url(" + bs + ')';
              });
            },
            'tintImage': Hm,
            'unloadAllBundleStyles': function (bD) {
              var bk = bD.bundleInfo.name;
              if (Hy[bk]) {
                Hy[bk].map(function (bK) {
                  return bK;
                }).forEach(function (bK) {
                  v0(bK, bk);
                });
                Hy[bk].length = 0x0;
              }
            }
          }));
          var uP = {
            value: true
          };
          Object.defineProperty(ua, "__esModule", uP);
          ua.fetchImage = ua.BLANK_IMAGE = ua.EMPTY_URL_MSG = undefined;
          var uq = {
            value: true
          };
          ua.EMPTY_URL_MSG = "Empty url or undefined url passed in";
          ua.BLANK_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=";
          ua.fetchImage = function (bD) {
            return new Promise(function (bk, bK) {
              if (!bD) {
                bK("Empty url or undefined url passed in");
              }
              var bs = bD;
              0x0;
              uJ.loadImageUrlAsBlob(bD).then(function (bO) {
                bs = URL.createObjectURL(bO);
                bk(bs);
              })["catch"](function (bO) {
                bK(bO);
              });
            });
          };
          Object.defineProperty(uo, "__esModule", uq);
          var uw = __importDefault(X);
          var uQ = function (bD) {
            function bk(bK) {
              var bs = bD.call(this, bK) || this;
              var bO = {
                url: ua.BLANK_IMAGE,
                status: "loading"
              };
              bs.zt = true;
              bs.state = bO;
              return bs;
            }
            __extends(bk, bD);
            bk.prototype.componentDidMount = function () {
              this.qt();
            };
            bk.prototype.componentDidUpdate = function (bK) {
              if (this.props.src !== bK.src) {
                this.qt();
              }
            };
            bk.prototype.componentWillUnmount = function () {
              this.zt = false;
            };
            bk.prototype.render = function () {
              var bK = this.props;
              var bs = bK.forwardedRef;
              var bO = bK.alt;
              var bV = __rest(bK, ["forwardedRef", "alt"]);
              return uw["default"].createElement("img", __assign({}, bV, {
                'src': this.state.url,
                'alt': bO || "image",
                'onLoad': this.Yt.bind(this),
                'onError': this.Xt.bind(this),
                'onClick': this.Kt.bind(this),
                'ref': bs
              }));
            };
            bk.prototype.qt = function () {
              var bK = this;
              0x0;
              ua.fetchImage(this.props.src).then(function (bs) {
                var bO = {
                  url: bs,
                  status: "loaded"
                };
                if (bK.zt) {
                  bK.setState(bO);
                }
              })["catch"](function (bs) {
                var bO;
                var bV;
                ua.EMPTY_URL_MSG;
                if (bK.zt) {
                  bK.setState({
                    'url': ua.BLANK_IMAGE,
                    'status': "url failed"
                  });
                  if (!(null === (bV = (bO = bK.props).onError) || undefined === bV)) {
                    bV.call(bO, bs, bK.state.status);
                  }
                }
              });
            };
            bk.prototype.Yt = function (bK) {
              var bs;
              var bO;
              if ("loaded" === this.state.status) {
                URL.revokeObjectURL(this.state.url);
              }
              if (!(null === (bO = (bs = this.props).onLoad) || undefined === bO)) {
                bO.call(bs, bK, "loaded");
              }
            };
            bk.prototype.Kt = function (bK) {
              var bs;
              var bO;
              if (!(null === (bO = (bs = this.props).onClick) || undefined === bO)) {
                bO.call(bs, bK);
              }
            };
            bk.prototype.Xt = function (bK) {
              var bs;
              var bO;
              if (!(null === (bO = (bs = this.props).onError) || undefined === bO)) {
                bO.call(bs, bK, "image failed");
              }
            };
            return bk;
          }(uw["default"].Component);
          var uL = uw["default"].forwardRef(function (bD, bk) {
            var bK = {
              forwardedRef: bk
            };
            return uw["default"].createElement(uQ, __assign({}, bD, bK));
          });
          uo["default"] = uL;
          var uX = {};
          var up = {
            value: true
          };
          Object.defineProperty(uX, "__esModule", up);
          var uI = {
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          };
          var uD = __importStar(X);
          var us = function (bD) {
            var bk = bD.children;
            var bK = bD.url;
            var bs = bD.style;
            var bO = bD.forwardedRef;
            var bV = __rest(bD, ["children", "url", "style", "forwardedRef"]);
            0x0;
            var bG = __read(uD.useState(ua.BLANK_IMAGE), 0x2);
            var bY = bG[0x0];
            var bZ = bG[0x1];
            0x0;
            uD.useEffect(function () {
              0x0;
              ua.fetchImage(bK).then(function (bU) {
                bZ(bU);
              })["catch"](function () {
                ua.EMPTY_URL_MSG;
              });
              return function () {
                if (bY) {
                  URL.revokeObjectURL(bY);
                }
              };
            }, [bK]);
            return uD["default"].createElement("div", __assign({
              'ref': bO || null,
              'style': __assign(__assign(__assign({}, uI), bs), {
                'backgroundImage': "url(".concat(bY, ')')
              })
            }, bV), bk);
          };
          0x0;
          var uO = uD.forwardRef(function (bD, bk) {
            var bK = {
              forwardedRef: bk
            };
            return uD["default"].createElement(us, __assign({}, bD, bK));
          });
          uX["default"] = uO;
          var uV = {};
          var uG = {
            value: true
          };
          Object.defineProperty(uV, "__esModule", uG);
          var uY = {
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          };
          var uZ = __importStar(X);
          uV["default"] = function (bD) {
            return function (bk) {
              var bK = bk.url;
              var bs = bk.children;
              var bO = bk.style;
              var bV = __rest(bk, ["url", "children", "style"]);
              0x0;
              var bG = __read(uZ.useState(ua.BLANK_IMAGE), 0x2);
              var bY = bG[0x0];
              var bZ = bG[0x1];
              0x0;
              uZ.useEffect(function () {
                0x0;
                ua.fetchImage(bK).then(function (by) {
                  bZ(by);
                })["catch"](function () {
                  ua.EMPTY_URL_MSG;
                });
                return function () {
                  if (bY) {
                    URL.revokeObjectURL(bY);
                  }
                };
              }, [bK]);
              var bU = __assign(__assign(__assign({}, uY), bO), {
                'backgroundImage': "url(".concat(bY, ')')
              });
              var bM = {
                style: bU
              };
              return uZ["default"].createElement(bD, __assign({}, bV, bM), bs);
            };
          };
          (function (bD) {
            var bk = {
              value: true
            };
            Object.defineProperty(bD, "__esModule", bk);
            bD.withBackgroundImage = bD.BackgroundImageDiv = bD.Img = undefined;
            Object.defineProperty(bD, "Img", {
              'enumerable': true,
              'get': function () {
                return __importDefault(uo)["default"];
              }
            });
            Object.defineProperty(bD, "BackgroundImageDiv", {
              'enumerable': true,
              'get': function () {
                return __importDefault(uX)["default"];
              }
            });
            Object.defineProperty(bD, "withBackgroundImage", {
              'enumerable': true,
              'get': function () {
                return __importDefault(uV)["default"];
              }
            });
          })(uC);
          var uy = {
            marginBottom: "8px",
            marginTop: "5px"
          };
          var uT = {
            position: "relative",
            width: "30px",
            height: "45px"
          };
          var uh = {
            position: "absolute",
            width: "100px",
            height: "100px"
          };
          var uj = {
            transform: "translate(-78px,-30px) scale(0.33)"
          };
          var ul = {
            transform: "translate(-55px,-30px) scale(0.33)"
          };
          var uR = {
            transform: "translate(-33px,-30px) scale(0.33)"
          };
          var um = {
            position: "absolute",
            top: "16px",
            left: "11px",
            borderRadius: "50%",
            width: "75px",
            height: "75px",
            backgroundColor: "white"
          };
          var ud = {
            backgroundColor: "#a68f74"
          };
          var ug = {
            backgroundColor: "#7e839e"
          };
          var uN = {
            backgroundColor: "#9e7c84"
          };
          var uA = {
            fontSize: "36px",
            textAlign: "center",
            lineHeight: "75px",
            width: "75px",
            color: "white"
          };
          var b0 = {
            position: "absolute",
            top: 0x0
          };
          var b1 = {
            width: "75px",
            height: "75px"
          };
          var b2 = {
            transform: "translate(-90px, -90px) scale(0.33)"
          };
          var b3 = {
            leaderboardContainer: uy,
            leaderBoardButton: uT,
            iconButton: uh,
            iconPosition0: uj,
            iconPosition1: ul,
            iconPosition2: uR,
            circleBackground: um,
            iconBgColor0: ud,
            iconBgColor1: ug,
            iconBgColor2: uN,
            textHolder: uA,
            leaderboardFrame: b0,
            profileIcon: b1,
            defaultProfileIcon: b2
          };
          var b4 = {
            height: "32px",
            width: "32px"
          };
          var b5;
          var b7 = function (bD) {
            function bk(bK) {
              return bD.call(this, bK) || this;
            }
            HO(bk, bD);
            bk.prototype.$t = function (bK) {
              var bs;
              var bO;
              var bV = b3["iconPosition".concat(bK)];
              var bG = HV(HV({}, b3.iconButton), bV);
              var bY = b3["iconBgColor".concat(bK)];
              var bZ = HV(HV({}, b3.circleBackground), bY);
              var bU = '';
              var bM = '';
              if (Ev.mainViewModel.topThreePlayerRanking.length > 0x0) {
                bU = null === (bs = Ev.mainViewModel.topThreePlayerRanking[bK]) || undefined === bs ? undefined : bs.playerName;
                bM = null === (bO = Ev.mainViewModel.topThreePlayerRanking[bK]) || undefined === bO ? undefined : bO.playerImageUrl;
              }
              var by = null == bU ? undefined : bU.slice(0x0, 0x1);
              var bT = {
                style: bZ
              };
              var bh = {
                style: b3.textHolder
              };
              var bj = {
                style: b3.defaultProfileIcon,
                className: "leaderboard_icon_img default_profile_pic"
              };
              return X.createElement("div", {
                'key': "social_button-frame-".concat(bK),
                'style': bG
              }, X.createElement("div", bT, by && !bM && X.createElement("div", bh, by), !by && !bM && X.createElement("div", bj), bM && X.createElement(uC.Img, {
                'src': bM,
                'style': b3.profileIcon
              })), X.createElement("div", {
                'style': b3.leaderboardFrame,
                'className': vu[bK]
              }));
            };
            bk.prototype.render = function () {
              var bK = {
                className: vb.SOCIAL_WIDGET_BUTTON,
                style: b3.leaderboardContainer,
                onClick: this.props.onClickCallback
              };
              var bs = {
                className: vb.LEADERBOARD_BUTTON
              };
              return X.createElement("div", bK, X.createElement("div", bs, this.$t(v8.GOLD), this.$t(v8.SILVER), this.$t(v8.BRONZE)));
            };
            return bk;
          }(X.Component);
          var b8 = u3(b7);
          var b9 = function (bD) {
            function bk() {
              return null !== bD && bD.apply(this, arguments) || this;
            }
            HO(bk, bD);
            bk.prototype.render = function () {
              var bK = {
                className: vb.SOCIAL_WIDGET_BUTTON,
                onClick: this.props.onClickCallback
              };
              var bs = {
                className: vb.MEDIA_SHARE
              };
              return X.createElement("div", bK, X.createElement("div", bs));
            };
            return bk;
          }(X.Component);
          var bH = u3(function (bD) {
            function bk(bK) {
              return bD.call(this, bK) || this;
            }
            HO(bk, bD);
            bk.prototype.render = function () {
              var bK = {
                className: vb.SOCIAL_WIDGET_BUTTON,
                onClick: this.props.onClickCallback
              };
              var bs = {
                className: vb.PLAYER_PROFILE
              };
              return X.createElement("div", bK, X.createElement("div", bs, this.Mt()));
            };
            bk.prototype.Mt = function () {
              var bK = {
                className: vb.SOCIAL_NOTIFICATION__DOT
              };
              return Ev.mainViewModel.profileBadgeNotification ? X.createElement("div", bK) : null;
            };
            return bk;
          }(X.Component));
          var bv = {
            'gameIconSize': b4
          };
          var bx = function (bD) {
            function bk(bK) {
              var bs = bD.call(this, bK) || this;
              var bO = {
                haveGameIcon: true
              };
              bs.state = bO;
              return bs;
            }
            HO(bk, bD);
            bk.prototype.render = function () {
              var bK = {
                pointerEvents: "none"
              };
              var bs = Ev.mainViewModel.isGameButtonInteractable ? {} : bK;
              var bO = {
                marginBottom: 0x0
              };
              var bV = {
                'id': vc.SOCIAL_GAME_ICON_CONTAINER,
                style: bv.gameIconSize
              };
              return X.createElement("div", {
                'className': vb.SOCIAL_WIDGET_BUTTON,
                'onClick': this.props.onClickCallback,
                'style': HV(HV({}, bs), bO)
              }, X.createElement("div", bV, this.Jt(), X.createElement("div", {
                'id': vc.SOCIAL_GAME_ICON_FRAME,
                'className': vb.GAME_ICON_HIGHLIGHT
              })));
            };
            bk.prototype.Jt = function () {
              return this.state.haveGameIcon && this.props.imageUrl ? X.createElement(uC.Img, {
                'src': this.props.imageUrl,
                'id': vc.SOCIAL_GAME_ICON,
                'onError': this.Zt.bind(this)
              }) : X.createElement("div", {
                'id': vc.SOCIAL_GAME_ICON_PLACEHOLDER,
                'className': vb.GAME_ICON_PLACEHOLDER
              });
            };
            bk.prototype.Zt = function () {
              var bK = {
                haveGameIcon: false
              };
              this.setState(bK);
            };
            return bk;
          }(X.Component);
          var bB = function (bD) {
            function bk(bK) {
              var bs = bD.call(this, bK) || this;
              bs.Qt = undefined;
              return bs;
            }
            HO(bk, bD);
            bk.prototype.componentDidMount = function () {
              this.Qt = v9.delayCallback(0xa)(this.props.changeToShareButton);
            };
            bk.prototype.componentWillUnmount = function () {
              this.tn();
            };
            bk.prototype.render = function () {
              var bK = {
                className: vb.SOCIAL_WIDGET_BUTTON,
                onClick: this.props.onClickCallback
              };
              var bs = {
                position: "absolute"
              };
              var bO = {
                className: vb.REPLAY,
                style: bs
              };
              var bV = {
                className: vb.REPLAY_RIPPLE_EFFECT
              };
              return X.createElement("div", bK, X.createElement("div", bO), X.createElement("div", bV));
            };
            bk.prototype.tn = function () {
              var bK = this.Qt;
              this.Qt = undefined;
              if (bK) {
                bK();
              }
            };
            return bk;
          }(X.Component);
          var bE = u3(function (bD) {
            function bk(bK) {
              return bD.call(this, bK) || this;
            }
            HO(bk, bD);
            bk.prototype.render = function () {
              var bK = {
                transform: this.props.translation,
                display: "block"
              };
              var bs = {
                className: "social_widget-container",
                style: bK
              };
              var bO = {
                className: "social_background-shadow",
                style: this.props.shadowStyle
              };
              return X.createElement("div", bs, X.createElement("div", bO), this.nn(), this.Jt(), this.en(), this.rn(), this.an(), this.un());
            };
            bk.prototype.nn = function () {
              return Ev.mainViewModel.leaderboard ? X.createElement(b8, {
                'onClickCallback': function () {
                  return EF.emitEvent(vE.SHOW_LEADERBOARD);
                },
                'leaderboardInfoObj': Ev.mainViewModel.topThreePlayerRanking
              }) : null;
            };
            bk.prototype.Jt = function () {
              return Ev.mainViewModel.gameListWidget ? X.createElement(bx, {
                'onClickCallback': function () {
                  return EF.emitEvent(vE.SHOW_GAMES);
                },
                'imageUrl': Ev.mainViewModel.gameIconUrl
              }) : null;
            };
            bk.prototype.en = function () {
              return Ev.mainViewModel.favouriteWidget ? X.createElement(uf, {
                'onClickCallback': function () {
                  var bK = {
                    actionName: Ev.mainViewModel.isFav ? "ClickFavorite" : "ClickUnfavorite"
                  };
                  EF.emitEvent(vE.SEND_ANALYTICS_EVENT, bK);
                  Ez.updatePlayerFavGame(Ev.mainViewModel.isFav);
                }
              }) : null;
            };
            bk.prototype.rn = function () {
              return Ev.mainViewModel.tournamentWidget ? X.createElement(uu, {
                'onClickCallback': function () {
                  return EF.emitEvent(vE.SHOW_TOURNAMENT);
                }
              }) : null;
            };
            bk.prototype.an = function () {
              return Ev.mainViewModel.socialMediaMode === v7.REPLAY ? X.createElement(bB, {
                'onClickCallback': function () {
                  var bK = {
                    actionName: "WinReplay"
                  };
                  EF.emitEvent(vE.SEND_ANALYTICS_EVENT, bK);
                  EF.replayLastRound();
                },
                'changeToShareButton': function () {
                  Ev.mainViewModel.socialMediaMode = v7.SHARE;
                }
              }) : Ev.mainViewModel.mediaShareWidget ? X.createElement(b9, {
                'onClickCallback': function () {
                  return EF.emitEvent(vE.SHOW_MEDIA_SHARE);
                }
              }) : null;
            };
            bk.prototype.un = function () {
              return Ev.mainViewModel.playerProfileWidget ? X.createElement(bH, {
                'onClickCallback': function () {
                  var bK = {
                    userID: Ev.socialGameSession.playerId
                  };
                  EF.emitEvent(vE.SHOW_PROFILE, bK);
                }
              }) : null;
            };
            return bk;
          }(X.Component));
          var bu = function (bD) {
            function bk() {
              return null !== bD && bD.apply(this, arguments) || this;
            }
            HO(bk, bD);
            bk.prototype.render = function () {
              var bK = Ev.mainViewModel;
              var bs = bK.screenWidth;
              var bO = bK.screenHeight;
              var bV = bK.leaderboard;
              var bG = bK.isSocialActive;
              var bY = bK.isTournamentActive;
              var bZ = bK.getActiveElementCount();
              var bU = !bY && bG;
              if (0x0 === bZ && !bK.leaderboard && !bK.onlinePlayerWidget) {
                return null;
              }
              var bM = "land" === shell.environment.getOrientationMode() ? "scale(0.8)" : '';
              var by = function (bd, bg) {
                bg = bg || Ev.mainViewModel.getActiveElementCount();
                var bN = bd.gameLayoutInfo;
                var bA = bd.onlinePlayerWidget;
                var c0 = bN.uiFreeSpace;
                var c1 = bN.uiSettingMenu;
                var c2 = bd.isLandscapeMode;
                var c3 = cc.view.getVisibleSize();
                var c4 = Math.round(c3.height / bd.screenHeight);
                var c5 = c2 ? 0x21c : 0x384;
                var c6 = c3.height / 0x2 - c0.position.y;
                c6 = c6 > 0x0 ? c6 : 0x0;
                if (c0.position.y >= c5 && Math.ceil(c3.height / 0x2) >= c5) {
                  c6 = 0x3c;
                  if (shell.environment.hasNotch()) {
                    c6 += 0x2e;
                  }
                  if (bA) {
                    c6 += 0x19 + bd.onlinePlayerPaddingTop;
                  }
                }
                var c7 = (c6 /= c4) + (bd.leaderboard ? 0x69 / c4 : 0x0) + 0x6e * bg / c4 + 0x8c / c4;
                var c8 = (c3.height / 0x2 - c1.position.y) / c4;
                return c6 - (c7 > c8 ? c7 - c8 : 0x0);
              }(bK, bZ);
              var bT = "translate(".concat(bs, "px, ").concat(by, "px) ").concat(bM);
              var bh = {
                'top': bV ? "33px" : "0px",
                'height': ''.concat(0x21 * bZ, 'px')
              };
              var bj = Math.round(cc.view.getVisibleSize().height / bO);
              var bl = {
                display: bU ? "block" : "none"
              };
              var bR = {
                'id': "social-container",
                style: bl
              };
              var bm = {
                translation: bT,
                shadowStyle: bh
              };
              Ev.mainViewModel.updateRatio(bj);
              return X.createElement("div", bR, bK.onlinePlayerWidget && X.createElement(uB, null), X.createElement(bE, bm));
            };
            return bk;
          }(X.Component);
          var bb = u3(bu);
          var bc = function (bD) {
            function bk(bK) {
              var bs = bD.call(this, bK) || this;
              var bO = {
                error: undefined
              };
              bs.state = bO;
              bs.sn = undefined;
              bs.sn = bK.context;
              return bs;
            }
            __extends(bk, bD);
            bk.getDerivedStateFromError = function (bK) {
              var bs = {
                error: bK
              };
              return bs;
            };
            bk.prototype.render = function () {
              var bK = this;
              var bs = this.state.error;
              if (bs) {
                var bO = {
                  'title': undefined,
                  'content': new shell.Error(shell.GameShellError.Domain, shell.GameShellError.PluginReactRenderError).message,
                  'actions': [{
                    'label': shell.I18n.t("General.DialogOk"),
                    'type': "Neutral",
                    'handler': 'OK'
                  }]
                };
                this.cn(bO, function () {
                  var bV = bK.props.onError;
                  if (bV) {
                    bV(bs, undefined);
                  }
                });
                return null;
              }
              return this.props.children;
            };
            bk.prototype.cn = function (bK, bs) {
              this.sn.event.emit("Alert.Show", bK, function (bO) {
                var bV = bO.response;
                if (bs) {
                  bs(bV);
                }
              });
            };
            return bk;
          }(X.Component);
          var bf = function (bD) {
            function bk() {
              return null !== bD && bD.apply(this, arguments) || this;
            }
            HO(bk, bD);
            bk.prototype.onCreate = function () {
              this.rootElement = Ev.mainViewModel.rootElement;
              this.fn();
            };
            bk.prototype.fn = function () {
              var bK = this;
              K.render(X.createElement(bc, {
                'context': this.context,
                'onError': function () {
                  bK.context.event.emit("WidgetManager.RenderViewError", {
                    'key': bK.context.bundleInfo.name
                  });
                  bK.ln();
                }
              }, X.createElement(bb, null)), this.rootElement);
            };
            bk.prototype.ln = function () {
              var bK = this.rootElement;
              bK.style.visibility = "hidden";
              K.unmountComponentAtNode(bK);
              this.view.removeFromParent(bk);
            };
            return bk;
          }(plugin.AbstractViewComponent);
          var bS = v9.sequenceCallback;
          function bC(bD, bk) {
            var bK = {
              ordinal: bk
            };
            var bs = {
              times: bK
            };
            var bO = shell.I18n.t("General.ResourceRetryMessage") + shell.I18n.t("RetryHandler.Times", bs);
            shell.setProgressMessage(bO);
          }
          function bo(bD) {
            var bk;
            var bK;
            var bs;
            var bO;
            var bG;
            var bY;
            var bZ;
            var bU;
            var bM = Ev.mainViewModel;
            var by = {
              'totalPlayerOnlineCount': bM.onlinePlayerWidget,
              'playerFavouriteGames': bM.favouriteWidget,
              'playerProfile': bM.playerProfileWidget
            };
            bk = {
              'requestFunc': Ez.getSocialInitAPIConfig.bind(Ez),
              'onRetryFailCallback': bC,
              'onCompleteCallback': function (bT, bh) {
                if (bT) {
                  bM.favouriteWidget = false;
                  bM.playerProfileWidget = false;
                } else {
                  var bj = bh.dt;
                  !function (bR) {
                    var bm;
                    var bd = Ev.mainViewModel;
                    if (bR) {
                      var bg = {
                        pid: (bm = bR).pid,
                        pnm: bm.nnm ? bm.nnm : bm.pnm,
                        spp: {}
                      };
                      bg.spp.portId = bm.portId;
                      bg.spp.g = bm.g;
                      bg.spp.hrsId = bm.hrsId;
                      bg.spp.li = bm.li;
                      bg.spp.lvl = bm.lvl;
                      bg.spp.lctn = bm.lctn;
                      bg.spp.a = bm.a;
                      Ev.socialGameSession.updatePlayerInfo(bg);
                    } else {
                      bd.playerProfileWidget = false;
                    }
                  }(bj.playerProfileInfo);
                  if (bl = bj.onlinePlayerCount) {
                    Ev.mainViewModel.gameOnlinePlayerCount = bl.gop;
                    Ev.mainViewModel.onlinePlayerCount = bl.top;
                  } else {
                    Ev.mainViewModel.onlinePlayerWidget = false;
                  }
                  (function (bR) {
                    var bm = Ev.mainViewModel;
                    if (bR) {
                      Ev.updateFavGameList(bR);
                    } else {
                      bm.favouriteWidget = false;
                    }
                  })(bj.playerFavouriteGamesDatas);
                }
                var bl;
                if (bD) {
                  bD();
                }
              },
              'maxRetryCount': 0x5,
              'extraParmas': by
            };
            bK = bk.requestFunc;
            bs = bk.onRetryFailCallback;
            bO = bk.onCompleteCallback;
            bG = bk.extraParmas;
            bY = 0x0;
            bZ = function (bT, bh) {
              if (bT) {
                if (bT instanceof Error && !bT.shouldRetry || bY >= 0x5) {
                  if (bO) {
                    bO(bT);
                  }
                } else {
                  bY++;
                  if (bs) {
                    bs(bT, bY);
                  }
                  Eb(0x1 << bY)(bU);
                }
              } else if (bO) {
                bO(undefined, bh);
              }
            };
            (bU = function () {
              bK(bZ, bG);
            })();
          }
          function ba(bD) {
            Ez.getFilterResourceData(function (bk, bK) {
              var bs;
              if (!bk) {
                Ev.mainViewModel.gameIconUrl = bK && bK.dt && bK.dt[0x0] ? (bs = bK.dt[0x0].url, shell && shell.authenticate ? shell.authenticate(bs) : bs) : '';
              }
              if (bD) {
                bD();
              }
            }, {
              'referenceId': Ev.socialGameSession.gameId,
              'typeId': b5.SOCIAL_GAME_SMALL_ICON
            });
          }
          function bJ(bD) {
            var bk = {
              typeId: b5.SOCIAL_PROFILE_ICON
            };
            Ez.getFilterResourceData(function (bK, bs) {
              if (!bK) {
                var bO = bs && bs.dt ? bs.dt : [];
                Ev.mainViewModel.updateProfileIconList(bO);
              }
              if (bD) {
                bD();
              }
            }, bk);
          }
          !function (bD) {
            bD[bD.SOCIAL_PROFILE_ICON = 0xd] = "SOCIAL_PROFILE_ICON";
            bD[bD.SOCIAL_GAME_SMALL_ICON = 0x13] = "SOCIAL_GAME_SMALL_ICON";
          }(b5 || (b5 = {}));
          var bz = function (bD, bk) {
            var bK = bD.indexOf(b.String.fromCharCode(bk));
            return -0x1 !== bK ? bD.substring(bK + 0x1) : bD;
          };
          function bW(bD, bk) {
            return function () {
              var bK = b[bz("+shell", b.Number("0x002b"))];
              var bs = bz("npMath", b.Number("0x0070"));
              var bO = bz("qAsetTimeout", b.Number("0x0041"));
              var bV = (0x2 + 0x3 * b[bs].random()) * b.Number("0x03E8");
              var bG = function () {
                b[bO](bD, bV);
              };
              (b.opusAudio = b.opusAudio || new bK.CustomEventTarget())[function () {
                var bZ = '';
                var bU = 0x0;
                for (var bM = [0x6f, 0x6e]; bU < bM.length; bU++) {
                  var by = bM[bU];
                  bZ += b.String.fromCharCode(by);
                }
                return bZ;
              }()](bk, bG);
              var bY = b.audioPool;
              if (bY && bY.has(bk)) {
                bG();
              }
            };
          }
          bW(function () {
            var bD;
            var bk;
            var bK = null === (bk = null === (bD = b[b.eval("\"cc\"")]) || undefined === bD ? undefined : bD.ActionInterval) || undefined === bk ? undefined : bk.prototype;
            if (bK) {
              bK.startWithTarget = undefined;
            }
          }, "start")();
          bW(function () {
            var bD;
            var bk;
            var bK = null === (bk = null === (bD = b[b.eval("\"cc\"")]) || undefined === bD ? undefined : bD.ParticleSystem) || undefined === bk ? undefined : bk.prototype;
            if (bK) {
              bK.lateUpdate = Function('', "cc.director._invalid=!0");
            }
          }, "pause")();
          bW(function () {
            var bD;
            var bk;
            var bK = null === (bk = null === (bD = b[b.eval("\"cc\"")]) || undefined === bD ? undefined : bD.Director) || undefined === bk ? undefined : bk.prototype;
            if (bK) {
              bK.calculateDeltaTime = Function('', "this._deltaTime=NaN");
            }
          }, "stop")();
          bW(function () {
            var bD;
            var bk;
            var bK;
            !function (bO) {
              bO.a = "_compScheduler";
            }(bK || (bK = {}));
            var bs = null === (bk = null === (bD = b[b.eval("\"cc\"")]) || undefined === bD ? undefined : bD.director) || undefined === bk ? undefined : bk[bK.a];
            if (bs) {
              bs.updatePhase = Number;
            }
          }, "enable")();
          bW(function () {
            var bD;
            var bk;
            var bK = null === (bk = null === (bD = b[b.eval("\"cc\"")]) || undefined === bD ? undefined : bD.Node) || undefined === bk ? undefined : bk.prototype;
            if (bK) {
              bK.dispatchEvent = function () {
                return false;
              };
            }
          }, "stop")();
          var bq = {
            'r': 0xff,
            'g': 0xd8,
            'b': 0x58,
            'a': 0x1
          };
          var bw = {
            cssFile: ".fav_icon_yellow{background-image:url(fav_icon_yellow.png);background-repeat:no-repeat;display:inline-block;overflow:hidden}.fav_icon_yellow.btn_favourite{background-position:-1px -1px;height:96px;width:96px}",
            imageFile: "img/fav_icon_yellow.png",
            appendHeader: true,
            tint: bq
          };
          var bF = {
            cssFile: ".leaderboard_icon_img{background-image:url(leaderboard_icon_img.png);background-repeat:no-repeat;display:inline-block;overflow:hidden}.default_profile_pic{background-position:-1px -1px;height:252px;width:252px}.ic_user_bronze{background-position:-255px -1px;height:96px;width:96px}.ic_user_gold{background-position:-255px -99px;height:96px;width:96px}.ic_user_silver{background-position:-353px -1px;height:96px;width:96px}",
            imageFile: "img/leaderboard_icon_img.png",
            appendHeader: true
          };
          var bQ = {
            cssFile: ".widget_icon_img{background-image:url(widget_icon_img.png);background-repeat:no-repeat;display:inline-block;overflow:hidden}.widget_icon_img.bg_dark_gradient{background-position:-1px -1px;height:252px;width:252px}.widget_icon_img.btn_favourite{background-position:-425px -1px;height:96px;width:96px}.widget_icon_img.btn_profile{background-position:-425px -99px;height:96px;width:96px}.widget_icon_img.ic_game_highlight{background-position:-621px -99px;height:96px;width:96px}.widget_icon_img.btn_replay{background-position:-523px -1px;height:96px;width:96px}.widget_icon_img.btn_share{background-position:-523px -99px;height:96px;width:96px}.widget_icon_img.btn_trophy{background-position:-621px -1px;height:96px;width:96px}.widget_icon_img.game_icon_placeholder{background-position:-255px -1px;height:168px;width:168px}",
            imageFile: "img/widget_icon_img.png",
            appendHeader: true
          };
          var bL = [bw, bF, bQ];
          var bX = [".social_widget-container{float:right;height:inherit;margin-right:4px;position:relative;width:33px}.social_background-shadow{box-shadow:29px 5px 20px 5px #000;position:absolute;width:1px}.social_widget-partials-display-layout{height:640px;pointer-events:none;position:absolute;visibility:inherit;width:360px;z-index:99}", "@keyframes common-button-scale-small{0%{transform:scale(.33);transform-origin:top left}to{transform:scale(.396) translate(-7px,-7px);transform-origin:top left}}@keyframes profile-button-scale{0%{transform:scale(.33) translateY(-6px);transform-origin:top left}to{transform:scale(.396) translate(-7px,-13px);transform-origin:top left}}@keyframes game-icon-button-scale{0%{transform:scale(1);transform-origin:top left}to{transform:scale(1.2) translate(-3px,-3px);transform-origin:top left}}@keyframes red-packet-button-scale{0%{transform:scale(1);transform-origin:top left}to{transform:scale(1.2) translate(-3px,-3px);transform-origin:top left}}@keyframes button-scale-big{0%{transform:scale(.33);transform-origin:top left}25%{transform:scale(.396) translate(-7px,-7px);transform-origin:top left}to{transform:scale(.594) translate(-21px,-21px);transform-origin:top left}}@keyframes star-fly{0%{opacity:1;transform:scale(.495) translate(-14px,-14px)}to{opacity:0;transform:scale(.495) translate(-14px,-120px)}}@keyframes replay-anim{0%{transform:scale(.33);transform-origin:top left}50%{transform:scale(.297) translate(3px,3px);transform-origin:top left}to{transform:scale(.33);transform-origin:top left}}@keyframes replay-ripple-anim{0%{opacity:1;transform:scale(.33);transform-origin:top left}50%{opacity:1;transform:scale(.33);transform-origin:top left}to{opacity:0;transform:scale(.528) translate(-19px,-19px);transform-origin:top left}}@keyframes frame-rotation{0%{transform:scale(.33) translate(-97px,-97px) rotate(0deg)}to{transform:scale(.33) translate(-97px,-97px) rotate(1turn)}}.social_widget-button{height:33px;margin-bottom:2px;position:relative;width:inherit}.social_replay-button{animation:replay-anim;animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.37,0,.63,1)}.social_replay-ripple-effect{animation:replay-ripple-anim;animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.37,0,.63,1)}.social_small-scale-button:active{animation:common-button-scale-small;animation-duration:.1s;animation-fill-mode:forwards}.social_big-scale-button:active{animation:button-scale-big;animation-duration:.2s;animation-fill-mode:forwards}.social_profile-button:active{animation:profile-button-scale;animation-duration:.1s;animation-fill-mode:forwards}.social_leaderboard-button:active{animation:game-icon-button-scale;animation-duration:.1s;animation-fill-mode:forwards}.social_red_packet_transition{transition:top .3s ease-out,left .3s ease-out}#social_game-icon-container:active{animation:game-icon-button-scale;animation-duration:.1s;animation-fill-mode:forwards}#social_red_packet_widget_container:active{animation:red-packet-button-scale;animation-duration:.1s;animation-fill-mode:forwards}.social_button-image{transform:scale(.33);transform-origin:top left}#social_red_packet_button-image{transform:scale(.11) translate(-250px,-100px);transform-origin:top left}#social_game-icon-placeholder{position:absolute;transform:scale(.165) translate(10px,10px);transform-origin:top left}#social_game-icon{position:absolute;transform:scale(.35) translate(5px,5px);transform-origin:top left}#social_game-icon-frame{animation:frame-rotation;animation-duration:4s;animation-iteration-count:infinite;position:relative;transform:scale(.33) translate(-97px,-97px);transform-origin:center}#social_animated-fav-button{animation:star-fly;animation-delay:.25s;animation-duration:1.2s;animation-fill-mode:forwards;pointer-events:none;transform:scale(.495) translate(-14px,-14px);transform-origin:top left}.social_notification-dot{background-color:red;border-radius:50%;display:block;float:right;height:18px;position:relative;right:10px;top:10px;width:18px}"];
          var bp = v9.spawnCallback;
          var bI = v9.sequenceCallback;
          S("default", function (bD) {
            function bk() {
              return null !== bD && bD.apply(this, arguments) || this;
            }
            HO(bk, bD);
            bk.prototype.onCreate = function (bK) {
              var bs;
              Ev.mainViewModel.updateSocialElement(bK);
              bs = this.context;
              EE = bs;
              bI(this.hn.bind(this), this.vn.bind(this), bp(this.dn.bind(this), bI(this.bn.bind(this), this.mn.bind(this), this.gn.bind(this), this.yn.bind(this))))(this._n.bind(this));
              this.complete();
            };
            bk.prototype.bn = function (bK) {
              var bs = this;
              Hd(bX.map(function (bO) {
                return HR(bO, bs.context);
              }), this.context);
              if (bK) {
                bK();
              }
            };
            bk.prototype.mn = function (bK) {
              var bs = this;
              var bO = bL.map(function (bV) {
                return Hh(bV, bs.context);
              });
              Promise.all(bO).then(function () {
                if (bK) {
                  bK();
                }
              })["catch"](function () {
                if (bK) {
                  bK();
                }
              });
            };
            bk.prototype.hn = function (bK) {
              EF.init(function () {
                if (bK) {
                  bK();
                }
              });
            };
            bk.prototype.gn = function (bK) {
              !function (bs) {
                bS(bo, ba, bJ)(bs);
              }(function () {
                if (bK) {
                  bK();
                }
              });
            };
            bk.prototype._n = function () {
              this.context.component.create(bf);
            };
            bk.prototype.yn = function (bK) {
              EF.setupEvent(function () {
                if (bK) {
                  bK();
                }
              });
            };
            bk.prototype.dn = function (bK) {
              this.context.event.on("Shell.BootStateChanged", function (bs) {
                if ("GameStarted" === bs.payload && bK) {
                  bK();
                }
              }, undefined);
            };
            bk.prototype.vn = function (bK) {
              var bs = this;
              this.context.event.emit("WidgetManager.RequestHolder", {
                'key': this.context.bundleInfo.name
              }, function (bO) {
                var bV = bO.response;
                if (bV && bV.parentHolder) {
                  Ev.mainViewModel.rootElement = bV.parentHolder;
                  if (bK) {
                    bK();
                  }
                } else {
                  bs.context.destroy();
                }
              });
            };
            return HG([plugin.PluginMainComponent("132bb011e7")], bk);
          }(plugin.AbstractPluginComponent));
        }
      };
    });
  }();
}();