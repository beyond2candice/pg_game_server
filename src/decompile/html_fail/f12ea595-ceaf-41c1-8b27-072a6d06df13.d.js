!function () {
  'use strict';

  !function () {
    var v = function () {
      var i = true;
      return function (X, E) {
        var c = i ? function () {
          if (E) {
            var V = E.apply(X, arguments);
            E = null;
            return V;
          }
        } : function () {};
        i = false;
        return c;
      };
    }();
    var N;
    !function (i) {
      var X = v(this, function () {
        return X.toString().search("(((.+)+)+)+$").toString().constructor(X).search("(((.+)+)+)+$");
      });
      X();
      i.u = "window";
      i.h = "self";
    }(N || (N = {}));
    var k = (0x0, eval)("this");
    var s = k[N.h];
    var O = k[N.u];
    System.register([], function (i) {
      'use strict';

      return {
        'execute': function () {
          var v0;
          function v1(C5, C6, C7) {
            var C8;
            if (C6 || C7) {
              if (C6) {
                if (Array.isArray(C6) && -0x1 !== C6.indexOf('')) {
                  C8 = "Relative url cannot be extracted from  ".concat(C5[C6.indexOf('')], '.');
                } else if (C7) {
                  if (!cc.assetManager.bundles.has(C7)) {
                    C8 = "Bundle ".concat(C7, " not exist in cc.assetManager.");
                  }
                } else {
                  C8 = "Bundle name cannot be extracted from  ".concat(C5, '.');
                }
              } else {
                C8 = "Relative url cannot be extracted from  ".concat(C5, '.');
              }
            } else {
              C8 = "There is issue when resolving url ".concat(C5, " that leads to both bundle and relative url cannot be found.");
            }
            return C8;
          }
          function v2(C5) {
            var C6 = Array.isArray(C5);
            var C7 = C6 ? C5[0x0] : C5;
            if ("string" == typeof C7) {
              var C8 = C7.startsWith('@');
              var C9 = C8 ? C7.indexOf('/') : -0x1;
              if (C8 && -0x1 === C9) {
                return {
                  'errorMessage': v1(C5, C7, undefined)
                };
              }
              var Cv;
              var CC = -0x1 !== C9 ? C7.substring(0x1, C9) : "resources";
              Cv = C6 ? C5.map(function (CH) {
                return C8 && 0x1 !== CH.indexOf(CC) ? '' : CH.substring(C9 + 0x1);
              }) : C7.substring(C9 + 0x1);
              return {
                'bundleName': CC,
                'relativeUrl': Cv,
                'errorMessage': v1(C5, Cv, CC)
              };
            }
            return {
              'errorMessage': "No url passed in!"
            };
          }
          function v3(C5, C6, C7) {
            var C8 = cc.assetManager.assets.get(C5);
            if (!C8) {
              if (!C6) {
                var C9 = v2(C5);
                var Cv = C9.relativeUrl;
                var CC = C9.bundleName;
                var CH = C9.errorMessage;
                if (CH) {
                  throw Error("ResRC _getAssetFromUuidOrUrl : ".concat(CH));
                }
                if (CC && Cv) {
                  C5 = Cv;
                  C6 = cc.assetManager.getBundle(CC);
                }
              }
              C8 = C6 ? C6.get(C5, C7) : undefined;
            }
            return C8;
          }
          function v4(C5) {
            var C6 = "string" == typeof C5 ? cc.assetManager.getBundle(C5) : C5;
            if (C6) {
              C6.releaseAll();
            }
          }
          function v5(C5, C6) {
            var C7;
            var C8;
            var C9;
            var Cv;
            if ("string" == typeof C6) {
              C7 = C6;
            } else {
              C7 = C6.bundleName;
              C8 = C6.type;
              C9 = C6.progressCallback;
              Cv = C6.completeCallback;
            }
            var CC = cc.assetManager.getBundle(C7);
            if (!CC) {
              throw Error("ResRC loadBundleAsset : Cannot load ".concat(C5, " from unknown bundle ").concat(C7));
            }
            var CH;
            var Ca;
            var CN = function (Ck, Cs, CO) {
              var Ci;
              if (Array.isArray(Ck)) {
                for (var CX = 0x0; CX < Ck.length; CX++) {
                  var CE = Ck[CX];
                  if (!CO.getInfoWithPath(CE, Cs)) {
                    Ci = CE;
                    break;
                  }
                }
              } else if (!CO.getInfoWithPath(Ck, Cs)) {
                Ci = Ck;
              }
              return Ci;
            }(C5, C8, CC);
            if (undefined === CN) {
              CC.load(C5, C8, C9, function (Ck, Cs) {
                if (!Ck && Cs) {
                  if (Array.isArray(Cs)) {
                    Cs.forEach(function (CO) {
                      return CO.addRef();
                    });
                  } else {
                    Cs.addRef();
                  }
                }
                if (Cv) {
                  Cv(Ck, Cs);
                }
              });
            } else if (Cv) {
              CH = Cv;
              Ca = CN;
              (function (Ck) {
                setTimeout(Ck, 0x0);
              })(function () {
                CH(Error(cc.debug.getError(0x1332, Ca)), null);
              });
            }
          }
          function v6(C5, C6, C7) {
            var C8 = C6 ? {
              'ext': C6.startsWith('.') ? C6 : '.'.concat(C6)
            } : null;
            cc.assetManager.loadRemote(C5, C8, function (C9, Cv) {
              if (!C9 && Cv) {
                Cv.addRef();
              }
              if (C7) {
                C7(C9, Cv);
              }
            });
          }
          !function (C5) {
            C5._parseLoadResArgs = "_parseLoadResArgs";
          }(v0 || (v0 = {}));
          i("ResRC", Object.freeze({
            '__proto__': null,
            'deleteBundle': function (C5) {
              var C6 = "string" == typeof C5 ? cc.assetManager.getBundle(C5) : C5;
              if (C6) {
                v4(C6);
                cc.assetManager.removeBundle(C6);
              }
            },
            'load': function (C5, C6, C7, C8) {
              var C9 = cc.assetManager[v0._parseLoadResArgs](C6, C7, C8);
              C6 = C9.type;
              C7 = C9.onProgress;
              C8 = C9.onComplete;
              var Cv = v2(C5);
              var CC = Cv.bundleName;
              var CH = Cv.relativeUrl;
              var Ca = Cv.errorMessage;
              if (CH && !Ca) {
                v5(CH, {
                  'completeCallback': C8,
                  'bundleName': CC,
                  'type': C6
                });
              } else if (Ca) {
                throw Error("ResRC load : ".concat(Ca));
              }
            },
            'loadBundle': function (C5, C6, C7) {
              if ("function" == typeof C6) {
                C7 = C6;
                C6 = undefined;
              }
              cc.assetManager.loadBundle(C5, C6, C7);
            },
            'loadBundleArr': function (C5, C6) {
              var C7 = [];
              var C8 = function (C9) {
                var Cv = C9.shift();
                if (Cv) {
                  var CC = "string" == typeof Cv ? Cv : Cv.name;
                  var CH = Object.create(null);
                  if ("string" != typeof Cv && Cv.version) {
                    CH.version = Cv.version;
                  }
                  cc.assetManager.loadBundle(CC, CH, function (Ca, CN) {
                    if (CN) {
                      C7.push(CN);
                      C8(C9);
                    } else {
                      if (!Ca) {
                        Ca = Error("Cannot find res after loading");
                      }
                      if (C6) {
                        C6(Ca, undefined);
                      }
                    }
                  });
                } else if (C6) {
                  C6(undefined, C7);
                }
              };
              C8(C5.slice());
            },
            'loadByBundleAsset': v5,
            'loadRemote': function (C5, C6) {
              if (Array.isArray(C5)) {
                var C7 = 0x0;
                var C8 = C5.length;
                var C9 = [];
                var Cv = [];
                C5.forEach(function (CH, Ca) {
                  var Ck = "string" == typeof CH;
                  v6(Ck ? CH : CH.url, Ck ? undefined : CH.ext, function (Cs, CO) {
                    if (C7 === C8) {
                      throw Error("ResRC :: loadRemote : Error in iterator when loading an array of remote resources");
                    }
                    Cv[Ca] = Cs;
                    C9[Ca] = CO;
                    if (++C7 === C8 && C6) {
                      C6(Cv, C9);
                    }
                  });
                });
              } else {
                var CC = "string" == typeof C5;
                v6(CC ? C5 : C5.url, CC ? undefined : C5.ext, C6);
              }
            },
            'loadRemoteBySingle': v6,
            'retain': function (C5, C6) {
              var C7 = "string" == typeof C5 ? v3(C5, undefined, C6) : C5;
              if (C7 instanceof cc.Asset) {
                C7.addRef();
              }
            },
            'unload': function (C5, C6) {
              var C7 = "string" == typeof C5 ? v3(C5, undefined, C6) : C5;
              if (C7 instanceof cc.Asset) {
                C7.decRef();
              }
            },
            'unloadBundle': v4,
            'unloadBundleAsset': function (C5, C6, C7) {
              var C8 = cc.assetManager.getBundle(C6);
              if (!C8) {
                throw Error("ResRC releaseBundleAsset : Cannot release ".concat(C5, " from unknown bundle ").concat(C6));
              }
              if (!Array.isArray(C5)) {
                C5 = [C5];
              }
              var C9 = 0x0;
              for (var Cv = C5; C9 < Cv.length; C9++) {
                var CC = Cv[C9];
                var CH = C8.get(CC, C7);
                if (CH instanceof cc.Asset) {
                  CH.decRef();
                }
              }
            }
          }));
          var v7 = {
            'writable': false,
            'value': undefined,
            'enumerable': false,
            'configurable': false
          };
          function v8(C5, C6, C7) {
            var C8 = C5.length;
            for (var C9 = 0x0; C9 < C8; C9++) {
              var Cv = C5[C9];
              if (Cv) {
                Cv(C6, C7);
              }
            }
          }
          function v9(C5, C6, C7) {
            if ("object" != typeof C5 || null === C5) {
              throw Error("Invalid parameter at index 0");
            }
            if ("string" != typeof C6 || '' === C6) {
              throw Error("Invalid parameter at index 1");
            }
            var C8 = C5.watch_eventPool;
            if (C8) {
              var C9 = C8[C6];
              if (C9) {
                if (undefined === C7) {
                  C9.length = 0x0;
                } else {
                  var Cv = C9.indexOf(C7);
                  if (-0x1 !== Cv) {
                    C9.splice(Cv, 0x1);
                  }
                }
              }
            }
          }
          var vv;
          var vC = function () {
            function C5() {
              this.v = false;
              if (null != cc.director.getScheduler()) {
                this.g();
              } else {
                cc.game.once(cc.game.EVENT_ENGINE_INITED, this.g, this);
              }
            }
            Object.defineProperty(C5.prototype, "paused", {
              'get': function () {
                return this.v;
              },
              'set': function (C6) {
                if (this.v !== C6) {
                  this.v = C6;
                  if (C6) {
                    this.k.pauseTarget(this);
                  } else {
                    this.k.resumeTarget(this);
                  }
                }
              },
              'enumerable': false,
              'configurable': true
            });
            C5.prototype.g = function () {
              this.v = false;
              this.k = cc.director.getScheduler();
              this.k.enableForTarget(this);
            };
            C5.prototype.schedule = function (C6, C7, C8, C9) {
              if (!(null == C6 || C7 < 0x0)) {
                C7 = C7 || 0x0;
                C8 = isNaN(C8) ? cc.macro.REPEAT_FOREVER : C8;
                C9 = C9 || 0x0;
                this.k.schedule(C6, this, C7, C8, C9, this.v);
              }
            };
            C5.prototype.scheduleOnce = function (C6, C7) {
              this.schedule(C6, 0x0, 0x0, C7);
            };
            C5.prototype.unschedule = function (C6) {
              if (C6) {
                this.k.unschedule(C6, this);
              }
            };
            C5.prototype.unscheduleAllCallbacks = function () {
              this.k.unscheduleAllForTarget(this);
            };
            return C5;
          }();
          var vH = function () {
            function C5() {
              this.S = 0x5;
              this.O = 0x0;
              this.R = 0x0;
              this.A = 0x0;
              this.EXPECTED_FRAME_RATE = 0x32;
              this.MAX_COUNTER = 0x5;
              this.T = false;
            }
            C5.prototype.enableTracker = function (C6) {
              if (!this.T) {
                this.T = true;
                this.O = 0x0;
                this.R = 0x0;
                this.A = cc.director.getTotalFrames();
                this.C = C6;
                cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, this._, this);
              }
            };
            C5.prototype.setTrackingInterval = function (C6) {
              this.S = C6;
            };
            C5.prototype.D = function () {
              this.R = 0x0;
              this.T = false;
              this.C = undefined;
              cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, this._, this);
            };
            C5.prototype._ = function () {
              var C6 = cc.director.getDeltaTime();
              this.O += C6;
              if (this.O >= this.S) {
                this.O = 0x0;
                var C7 = this.A;
                this.A = cc.director.getTotalFrames();
                if (this.A - C7 < this.EXPECTED_FRAME_RATE * this.S) {
                  this.R++;
                  if (this.R >= this.MAX_COUNTER) {
                    var C8 = this.C;
                    cc.game.setFrameRate(0x1e);
                    this.D();
                    if (C8) {
                      C8();
                    }
                  }
                } else {
                  this.R = 0x0;
                }
              }
            };
            return C5;
          }();
          var va = function () {
            function C5(C6) {
              this.B = false;
              this.M = C6;
            }
            C5.prototype.dispose = function () {
              if (!this.B) {
                this.B = true;
                var C6 = this.P;
                this.P = undefined;
                var C7 = 0x0;
                for (var C8 = C6 ? C6.length : 0x0; C7 < C8; C7++) {
                  var C9 = C6[C7];
                  try {
                    C9.I = undefined;
                    C9.dispose();
                  } catch (CC) {}
                }
                var Cv = this.M;
                this.M = undefined;
                try {
                  if (Cv) {
                    Cv();
                  }
                } catch (CH) {}
                if (this.I) {
                  this.I.del(this);
                }
              }
            };
            C5.prototype.set = function (C6) {
              return C6 instanceof Function && (this.B ? (C6(), false) : (this.M = C6, true));
            };
            C5.prototype.add = function (C6) {
              if (C6 instanceof Function) {
                C6 = new C5(C6);
              } else if (!(C6 instanceof C5)) {
                return false;
              }
              if (this.B) {
                C6.dispose();
                return false;
              }
              var C7 = C6.I;
              if (C7) {
                C7.del(C6);
              }
              var C8 = this.P;
              if (!C8) {
                C8 = this.P = [];
              }
              C8.push(C6);
              C6.I = this;
              return true;
            };
            C5.prototype.del = function (C6) {
              var C7 = C6 instanceof C5;
              if (!(C7 || C6 instanceof Function)) {
                return false;
              }
              if (C6 === this.M) {
                this.M = undefined;
                return true;
              }
              var C8 = this.P;
              var C9 = 0x0;
              for (var Cv = C8 ? C8.length : 0x0; C9 < Cv; C9++) {
                var CC = C8[C9];
                if (C7 && CC === C6 || CC.M === C6) {
                  C8.splice(C9);
                  CC.I = undefined;
                  return true;
                }
              }
              return false;
            };
            Object.defineProperty(C5.prototype, "disposed", {
              'get': function () {
                return this.B;
              },
              'enumerable': false,
              'configurable': true
            });
            C5.prototype.asDisposable = function () {
              return this.dispose.bind(this);
            };
            return C5;
          }();
          var vN = {
            'ARS': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'BRL': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'COP': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'CRC': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'CZK': {
              'groupSeparator': " ",
              'decimalSeparator': ','
            },
            'DKK': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'EUR': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'HRK': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'HUF': {
              'groupSeparator': " ",
              'decimalSeparator': '.'
            },
            'IDR': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'ILS': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'MKD': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'NOK': {
              'groupSeparator': " ",
              'decimalSeparator': ','
            },
            'RON': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'RSD': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'RUB': {
              'groupSeparator': " ",
              'decimalSeparator': ','
            },
            'SEK': {
              'groupSeparator': " ",
              'decimalSeparator': ','
            },
            'TRY': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'UAH': {
              'groupSeparator': " ",
              'decimalSeparator': ','
            },
            'UYU': {
              'groupSeparator': '.',
              'decimalSeparator': ','
            },
            'ZAR': {
              'groupSeparator': " ",
              'decimalSeparator': '.'
            }
          };
          !function (C5) {
            C5.N = "_val";
          }(vv || (vv = {}));
          var vk = Object.freeze({});
          function vs() {}
          function vO(C5, C6, C7) {
            return C7.convertToNodeSpaceAR(C5.convertToWorldSpaceAR(C6));
          }
          var vi;
          vi = undefined;
          var vX = function () {
            if (undefined === vi) {
              vi = new vC();
            }
            return vi;
          };
          function vE(C5) {
            return function (C6) {
              var C7 = setTimeout(C6, 0x3e8 * C5);
              return function () {
                clearTimeout(C7);
              };
            };
          }
          var vc = function () {
            var C5;
            C5 = 0x1 === arguments.length && arguments[0x0] instanceof Array ? arguments[0x0].slice() : Array.prototype.slice.call(arguments);
            return function (C6) {
              var C7 = new va();
              var C8 = 0x0;
              var C9 = function (Cv) {
                if (!C7.disposed) {
                  if (null != Cv || ++C8 === C5.length) {
                    C6(Cv);
                    C7.dispose();
                  } else {
                    C7.set(C5[C8](C9));
                  }
                }
              };
              C7.set(C5[C8](C9));
              return C7.asDisposable();
            };
          };
          var vV = function () {
            var C5;
            C5 = 0x1 === arguments.length && arguments[0x0] instanceof Array ? arguments[0x0].slice() : Array.prototype.slice.call(arguments);
            return function (C6) {
              var C7 = new va();
              var C8 = C5.length;
              var C9 = function (CH) {
                if (!(C7.disposed || null == CH && 0x0 != --C8)) {
                  C6(CH);
                  C7.dispose();
                }
              };
              var Cv = 0x0;
              for (var CC = C5.length; Cv < CC; Cv++) {
                C7.add(C5[Cv](C9));
              }
              return C7.asDisposable();
            };
          };
          function vZ() {
            vc = function () {
              return function () {};
            };
          }
          function vB(C5) {
            var C6 = 0x0;
            var C7 = 0x0;
            var C8 = [];
            var C9 = [];
            var Cv = function () {
              C6 = 0x2;
              C8.unshift.apply(C8, C9);
              C9.length = 0x0;
              for (var CC = 0x1; CC < C8.length - 0x1; CC += 0x3) {
                var CH = C8[CC];
                if (CH) {
                  var Ca = C8[CC + 0x1];
                  if (Ca) {
                    CH.apply(Ca);
                  } else {
                    CH();
                  }
                }
              }
              C8.length = 0x0;
              if (C9.length) {
                C6 = 0x1;
                C5(Cv);
              } else {
                C6 = 0x0;
              }
            };
            return function (CC, CH) {
              return function (Ca) {
                if ("boolean" == typeof CC && undefined === CH) {
                  CH = CC;
                  CC = undefined;
                }
                var CN = C7++;
                if (0x2 === C6 && CH) {
                  C9.push(CN, Ca, CC);
                } else {
                  C8.push(CN, Ca, CC);
                  if (0x0 === C6) {
                    C6 = 0x1;
                    C5(Cv);
                  }
                }
                return function () {
                  var Ck = C9.indexOf(CN);
                  if (-0x1 !== Ck) {
                    C9.splice(Ck, 0x3);
                  } else if (-0x1 !== (Ck = C8.indexOf(CN))) {
                    C8[Ck + 0x1] = undefined;
                    C8[Ck + 0x2] = undefined;
                  }
                };
              };
            };
          }
          var vy = vB(function (C5) {
            cc.director.once(cc.Director.EVENT_AFTER_UPDATE, C5);
          });
          var vp = vB(function (C5) {
            Promise.resolve().then(C5);
          });
          function vM(C5, C6) {
            return +(Math.round(+(C5 + 'e' + C6)) + 'e-' + C6);
          }
          function vb(C5, C6) {
            return (+(Math.round(+(C5 + 'e' + C6)) + 'e-' + C6)).toFixed(C6);
          }
          function vr(C5) {
            return ('0' + C5).slice(-0x2);
          }
          function vL(C5) {
            return RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿Ⰰ-﬜﷾-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]").test(C5);
          }
          var vh;
          var vY;
          var vA;
          var vW;
          var vK = {
            'groupSeparator': ',',
            'decimalSeparator': '.',
            'currencySymbol': '',
            'baseUnit': '',
            'hideDecimal': false,
            'format': function (C5) {
              var C6;
              var C7;
              var C8 = this.currencySymbol;
              var C9 = this.baseUnit;
              var Cv = this.hideDecimal ? 0x0 : 0x2;
              if (C5 < 0x0) {
                C6 = (+(Math.round(+(-C5 + 'e' + Cv)) + 'e-' + Cv)).toFixed(Cv);
                C7 = '-';
              } else {
                C6 = (+(Math.round(+(C5 + 'e' + Cv)) + 'e-' + Cv)).toFixed(Cv);
                C7 = '';
              }
              if (!this.hideDecimal) {
                var CC = this.decimalSeparator;
                if ('.' !== CC) {
                  C6 = C6.replace('.', CC);
                }
              }
              var CH = this.groupSeparator;
              if ('' !== CH) {
                C6 = C6.replace(/\B(?=(\d{3})+(?!\d))/g, CH);
              }
              var Ca = C6 + C9;
              return RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿Ⰰ-﬜﷾-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]").test(C8) ? C7 + Ca + C8 : C7 + C8 + Ca;
            }
          };
          function vl(C5) {
            if (null != C5.groupSeparator || null != C5.decimalSeparator) {
              if (null != C5.groupSeparator) {
                vK.groupSeparator = C5.groupSeparator;
              }
              if (null != C5.decimalSeparator) {
                vK.decimalSeparator = C5.decimalSeparator;
              }
            } else if (null != C5.currencyCode) {
              var C6 = vN[C5.currencyCode];
              if (C6) {
                vK.groupSeparator = C6.groupSeparator;
                vK.decimalSeparator = C6.decimalSeparator;
              }
            }
            if (null != C5.currencySymbol) {
              vK.currencySymbol = C5.currencySymbol;
            }
            if (null != C5.baseUnit) {
              vK.baseUnit = C5.baseUnit;
            }
            if (null != C5.hideDecimal) {
              vK.hideDecimal = C5.hideDecimal;
            }
          }
          function vg() {
            return {
              'groupSeparator': ',',
              'decimalSeparator': '.',
              'currencySymbol': '',
              'baseUnit': '',
              'hideDecimal': false
            };
          }
          function vS() {
            return location.protocol;
          }
          function vF() {
            return location.origin;
          }
          function vo(C5, C6) {
            return C5.endsWith('/') && C6.startsWith('/') ? C5.substring(0x0, C5.length - 0x1) + C6 : C5.endsWith('/') || C6.startsWith('/') ? C5 + C6 : C5 + '/' + C6;
          }
          function vR(C5) {
            var C6 = O[C5];
            if ("string" == typeof C6) {
              return parseInt(C6);
            }
            throw Error("The engine does not exists or is not loaded");
          }
          var vD = Object.freeze({
            '__proto__': null,
            'CompoundDisposable': va,
            'SimpleScheduler': vC,
            'clearElements': function (C5) {
              return C5.splice(0x0);
            },
            'clearSequence': vZ,
            'clearSpawn': function () {
              vV = function () {
                return function () {};
              };
            },
            'condition': function (C5, C6, C7) {
              return function (C8) {
                var C9 = new va();
                var Cv = function () {
                  if (!C9.disposed) {
                    C8.apply(undefined, Array.prototype.slice.call(arguments));
                    C9.dispose();
                  }
                };
                C9.set(C5(function (CC, CH) {
                  if (!C9.disposed) {
                    var Ca = null == CC;
                    if (Ca && CH) {
                      C9.set(C6(Cv));
                    } else if (Ca && C7) {
                      C9.set(C7(Cv));
                    } else {
                      C8(CC);
                      C9.dispose();
                    }
                  }
                }));
                return C9.asDisposable();
              };
            },
            'convertNodeSpace': function (C5, C6, C7) {
              return C7.convertToNodeSpace(C5.convertToWorldSpace(C6));
            },
            'convertNodeSpaceAR': vO,
            'currencyFormatter': vK,
            'defer': vy,
            'delay': function (C5) {
              return function (C6) {
                var C7 = function () {
                  C6();
                };
                var C8 = vX();
                C8.scheduleOnce(C7, C5);
                return function () {
                  C8.unschedule(C7);
                };
              };
            },
            'emptyFunc': vs,
            'emptyObj': vk,
            'enableFPSTracker': function () {
              if (undefined === vY) {
                vY = new vH();
              }
              vY.enableTracker();
            },
            'firstElement': function (C5) {
              return C5.length > 0x0 ? C5[0x0] : undefined;
            },
            'formatCurrency': function (C5, C6, C7) {
              var C8 = {
                'groupSeparator': ',',
                'decimalSeparator': '.',
                'currencySymbol': '',
                'baseUnit': '',
                'hideDecimal': false
              };
              vl({
                'currencySymbol': undefined !== C6 ? C6 : '',
                'baseUnit': undefined !== C7 ? C7 : ''
              });
              var C9 = vK.format(C5);
              vl(C8);
              return C9;
            },
            'formatDateTime': function (C5) {
              return C5.getFullYear() + '/' + ('0' + (C5.getMonth() + 0x1)).slice(-0x2) + '/' + ('0' + C5.getDate()).slice(-0x2) + " " + ('0' + C5.getHours()).slice(-0x2) + ':' + ('0' + C5.getMinutes()).slice(-0x2);
            },
            'formatGroup': function (C5, C6) {
              if (null == C6) {
                C6 = ',';
              }
              return C5.toString().replace(/\B(?=(\d{3})+(?!\d))/g, C6);
            },
            'formatLeadingZero': vr,
            'getAbsolutePos': function (C5) {
              var C6 = C5.parent;
              if (!C6) {
                return C5.position;
              }
              var C7 = C5.getAnchorPoint();
              var C8 = C6.getAnchorPoint();
              var C9 = C5.position;
              C9.x = Math.floor(C9.x + C8.x * C6.width - C7.x * C5.width);
              C9.y = Math.floor(C9.y + C8.y * C6.height - C7.y * C5.height);
              return C9;
            },
            'getAbsoluteXPos': function (C5) {
              var C6 = C5.parent;
              return C6 ? Math.floor(C5.x + C6.anchorX * C6.width - C5.anchorX * C5.width) : C5.x;
            },
            'getAbsoluteYPos': function (C5) {
              var C6 = C5.parent;
              return C6 ? Math.floor(C5.y + C6.anchorY * C6.height - C5.anchorY * C5.height) : C5.y;
            },
            'getCocosMajor': function () {
              if (undefined === vW) {
                vW = vR("CocosEngine");
              }
              return vW;
            },
            'getDefaultCurrencyFormat': vg,
            'getEngineMajor': function () {
              if (undefined === vA) {
                vA = vR("COCOS_ENGINE");
              }
              return vA;
            },
            'getLocationOrigin': vF,
            'getLocationProtocol': vS,
            'getPlatform': function () {
              return shell.getPlatform();
            },
            'getSharedSimpleScheduler': vX,
            'hasMethod': function (C5, C6) {
              return "function" == typeof C5[C6];
            },
            'hasProperty': function (C5, C6) {
              return undefined !== C5[C6];
            },
            'insertElement': function (C5, C6, C7) {
              C5.splice(C7, 0x0, C6);
            },
            'isNumeric': function (C5) {
              return !isNaN(parseFloat(C5)) && isFinite(C5);
            },
            'isRightToLeft': vL,
            'joinPath': vo,
            'lastElement': function (C5) {
              var C6 = C5.length;
              return C6 > 0x0 ? C5[C6 - 0x1] : undefined;
            },
            'observe': function (C5, C6) {
              return function (C7) {
                try {
                  var C8 = C7.bind(undefined, undefined);
                  !function (Cv, CC, CH) {
                    if ("object" != typeof Cv || null === Cv) {
                      throw Error("Invalid parameter at index 0");
                    }
                    if ("string" != typeof CC || '' === CC) {
                      throw Error("Invalid parameter at index 1");
                    }
                    if ("function" != typeof CH) {
                      throw Error("Invalid parameter at index 2");
                    }
                    var Ca = Cv.watch_eventPool;
                    if (!Ca) {
                      if (!Object.isExtensible(Cv)) {
                        throw Error("Object is not extensible");
                      }
                      Ca = v7.value = Object.create(null);
                      Object.defineProperty(Cv, "watch_eventPool", v7);
                    }
                    var CN = Ca[CC];
                    if (!CN) {
                      var Ck = Object.getOwnPropertyDescriptor(Cv, CC);
                      if (!Ck) {
                        throw Error("Object property not exists");
                      }
                      if (false === Ck.writable || undefined !== Ck.get && undefined === Ck.set) {
                        throw Error("Object property is readonly");
                      }
                      if (!Ck.configurable) {
                        throw Error("Object property is not configurable");
                      }
                      CN = Ca[CC] = [];
                      (function (Cs, CO, Ci) {
                        if (Ci.writable) {
                          var CX = Ci.value;
                          Ci.get = function () {
                            return CX;
                          };
                          Ci.set = function (CV) {
                            var CZ = CX;
                            CX = CV;
                            v8(this.watch_eventPool[CO], CV, CZ);
                          };
                          delete Ci.value;
                          delete Ci.writable;
                        } else if (Ci.get) {
                          var CE = Ci.set;
                          Ci.set = function (CV) {
                            CE.call(this, CV);
                            v8(this.watch_eventPool[CO], this[CO]);
                          };
                        } else {
                          var Cc = Ci.set;
                          Ci.set = function (CV) {
                            Cc.call(this, CV);
                            v8(this.watch_eventPool[CO], CV);
                          };
                        }
                        Object.defineProperty(Cs, CO, Ci);
                      })(Cv, CC, Ck);
                    }
                    if (-0x1 !== CN.indexOf(CH)) {
                      throw Error("Watch callback exists");
                    }
                    CN.push(CH);
                  }(C5, C6, C8);
                  var C9 = v9.bind(undefined, C5, C6, C8);
                  return new va(C9).asDisposable();
                } catch (Cv) {
                  C7(Cv);
                  return vs;
                }
              };
            },
            'randomInt': function (C5, C6) {
              return Math.floor(Math.random() * (C6 - C5 + 0x1)) + C5;
            },
            'removeElement': function (C5, C6) {
              var C7 = C5.indexOf(C6);
              return -0x1 !== C7 ? C5.splice(C7, 0x1) : undefined;
            },
            'removeIndex': function (C5, C6) {
              return C5.length >= Math.abs(C6) ? C5.splice(C6, 0x1) : undefined;
            },
            'resolvePath': function (C5, C6) {
              var C7;
              C7 = undefined === C6 ? C5 : /^([a-z0-9+-.]+:)?\/\//.test(C6) ? C6 : C5.endsWith('/') && C6.startsWith('/') ? C5.substring(0x0, C5.length - 0x1) + C6 : C5.endsWith('/') || C6.startsWith('/') ? C5 + C6 : C5 + '/' + C6;
              return /^[a-z0-9+-.]+:\/\//.test(C7) ? C7 : C7.startsWith('//') ? location.protocol.endsWith('/') && C7.startsWith('/') ? location.protocol.substring(0x0, location.protocol.length - 0x1) + C7 : location.protocol.endsWith('/') || C7.startsWith('/') ? location.protocol + C7 : location.protocol + '/' + C7 : location.origin.endsWith('/') && C7.startsWith('/') ? location.origin.substring(0x0, location.origin.length - 0x1) + C7 : location.origin.endsWith('/') || C7.startsWith('/') ? location.origin + C7 : location.origin + '/' + C7;
            },
            'selector': function (C5, C6) {
              var C7;
              var C8;
              var C9 = [];
              for (var Cv = 0x2; Cv < arguments.length; Cv++) {
                C9[Cv - 0x2] = arguments[Cv];
              }
              return function (CC) {
                try {
                  C8 = null != C6 || C9.length > 0x0 ? C5.apply(C6, C9) : C5();
                } catch (CH) {
                  C7 = CH;
                }
                CC(C7, C8);
                return vs;
              };
            },
            get 'sequence'() {
              return vc;
            },
            'setAbsolutePos': function (C5, C6) {
              var C7 = C5.parent;
              if (C7) {
                var C8 = C5.getAnchorPoint();
                var C9 = C7.getAnchorPoint();
                C5.setPosition(new cc.Vec2(Math.floor(C6.x - C9.x * C7.width + C8.x * C5.width), Math.round(C6.y - C9.y * C7.height + C8.y * C5.height)));
              } else {
                C5.setPosition(C6);
              }
            },
            'setAbsoluteXPos': function (C5, C6) {
              var C7 = C5.parent;
              C5.x = C7 ? Math.floor(C6 - C7.anchorX * C7.width + C5.anchorX * C5.width) : C6;
            },
            'setAbsoluteYPos': function (C5, C6) {
              var C7 = C5.parent;
              C5.y = C7 ? Math.floor(C6 - C7.anchorY * C7.height + C5.anchorY * C5.height) : C6;
            },
            'setDefaultCurrencyFormat': vl,
            'setFPSTrackerInterval': function (C5) {
              if (undefined === vY) {
                vY = new vH();
              }
              vY.setTrackingInterval(C5);
            },
            'setNodeColorWithOpacity': function (C5, C6) {
              if (!vh) {
                vh = cc.Color.WHITE.clone();
              }
              vh[vv.N] = 0xff000000 | C6[vv.N];
              C5.color = vh;
              C5.opacity = C6.getA();
            },
            get 'spawn'() {
              return vV;
            },
            'stringToBoolean': function (C5) {
              if (null == C5) {
                return false;
              }
              switch (C5.toLowerCase().trim()) {
                case "true":
                case "yes":
                case '1':
                  return true;
                case "false":
                case 'no':
                case '0':
                  return false;
                default:
                  return !!C5;
              }
            },
            'tick': vp,
            'timeout': vE,
            'toDecimalWithExp': vM,
            'toFixed': vb,
            'transferToNewParent': function (C5, C6) {
              C5.position = C6.convertToNodeSpaceAR(C5.parent.convertToWorldSpaceAR(C5.position));
              C5.parent = C6;
            },
            'waterfall': function () {
              var C5;
              C5 = 0x1 === arguments.length && arguments[0x0] instanceof Array ? arguments[0x0].slice() : Array.prototype.slice.call(arguments);
              return function (C6) {
                var C7 = new va();
                var C8 = 0x0;
                var C9 = function (Cv) {
                  if (!C7.disposed) {
                    if (null != Cv || ++C8 === C5.length) {
                      var CC = Array.prototype.slice.call(arguments);
                      C6.apply(undefined, CC);
                      C7.dispose();
                    } else {
                      var CH = C5[C8];
                      var Ca = CH.length;
                      if (Ca > 0x1) {
                        (CC = Array.prototype.slice.call(arguments, 0x1, Ca)).push(C9);
                        C7.set(CH.apply(undefined, CC));
                      } else {
                        C7.set(CH(C9));
                      }
                    }
                  }
                };
                C7.set(C5[C8](C9));
                return C7.asDisposable();
              };
            }
          });
          i("Utils", vD);
          var vj;
          var vf = undefined !== k ? k : undefined !== O ? O : "undefined" != typeof global ? global : undefined !== s ? s : {};
          var vn = {};
          function vd(C5) {
            var C6 = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][C5];
            return C6.substring(O.Number("0xf") - O.Number("0x0" + C6[0x0]));
          }
          vj = {
            get 'exports'() {
              return vn;
            },
            set 'exports'(C5) {
              vn = C5;
            }
          };
          if (!(undefined !== s || undefined !== O || undefined !== vf)) {
            Function('', "return this")();
          }
          vj.exports = function (C5) {
            var C6 = {};
            function C7(C8) {
              if (C6[C8]) {
                return C6[C8].exports;
              }
              var C9 = C6[C8] = {
                'i': C8,
                'l': false,
                'exports': {}
              };
              C5[C8].call(C9.exports, C9, C9.exports, C7);
              C9.l = true;
              return C9.exports;
            }
            C7.m = C5;
            C7.c = C6;
            C7.d = function (C8, C9, Cv) {
              if (!C7.o(C8, C9)) {
                Object.defineProperty(C8, C9, {
                  'enumerable': true,
                  'get': Cv
                });
              }
            };
            C7.r = function (C8) {
              if ("undefined" != typeof Symbol && Symbol.toStringTag) {
                Object.defineProperty(C8, Symbol.toStringTag, {
                  'value': "Module"
                });
              }
              Object.defineProperty(C8, "__esModule", {
                'value': true
              });
            };
            C7.t = function (C8, C9) {
              if (0x1 & C9) {
                C8 = C7(C8);
              }
              if (0x8 & C9) {
                return C8;
              }
              if (0x4 & C9 && "object" == typeof C8 && C8 && C8.__esModule) {
                return C8;
              }
              var Cv = Object.create(null);
              C7.r(Cv);
              Object.defineProperty(Cv, "default", {
                'enumerable': true,
                'value': C8
              });
              if (0x2 & C9 && "string" != typeof C8) {
                for (var CC in C8) C7.d(Cv, CC, function (CH) {
                  return C8[CH];
                }.bind(null, CC));
              }
              return Cv;
            };
            C7.n = function (C8) {
              var C9 = C8 && C8.__esModule ? function () {
                return C8["default"];
              } : function () {
                return C8;
              };
              C7.d(C9, 'a', C9);
              return C9;
            };
            C7.o = function (C8, C9) {
              return Object.prototype.hasOwnProperty.call(C8, C9);
            };
            C7.p = '';
            return C7(C7.s = 0x12);
          }([function (C5) {
            function C6(C7) {
              if (C7) {
                return function (C8) {
                  for (var C9 in C6.prototype) C8[C9] = C6.prototype[C9];
                  return C8;
                }(C7);
              }
            }
            C5.exports = C6;
            C6.prototype.on = C6.prototype.addEventListener = function (C7, C8) {
              this.U = this.U || {};
              (this.U['$' + C7] = this.U['$' + C7] || []).push(C8);
              return this;
            };
            C6.prototype.once = function (C7, C8) {
              function C9() {
                this.off(C7, C9);
                C8.apply(this, arguments);
              }
              C9.fn = C8;
              this.on(C7, C9);
              return this;
            };
            C6.prototype.off = C6.prototype.removeListener = C6.prototype.removeAllListeners = C6.prototype.removeEventListener = function (C7, C8) {
              this.U = this.U || {};
              if (0x0 == arguments.length) {
                this.U = {};
                return this;
              }
              var C9;
              var Cv = this.U['$' + C7];
              if (!Cv) {
                return this;
              }
              if (0x1 == arguments.length) {
                delete this.U['$' + C7];
                return this;
              }
              for (var CC = 0x0; CC < Cv.length; CC++) {
                if ((C9 = Cv[CC]) === C8 || C9.fn === C8) {
                  Cv.splice(CC, 0x1);
                  break;
                }
              }
              if (0x0 === Cv.length) {
                delete this.U['$' + C7];
              }
              return this;
            };
            C6.prototype.emit = function (C7) {
              this.U = this.U || {};
              var C8 = Array(arguments.length - 0x1);
              var C9 = this.U['$' + C7];
              for (var Cv = 0x1; Cv < arguments.length; Cv++) {
                C8[Cv - 0x1] = arguments[Cv];
              }
              if (C9) {
                Cv = 0x0;
                for (var CC = (C9 = C9.slice(0x0)).length; Cv < CC; ++Cv) {
                  C9[Cv].apply(this, C8);
                }
              }
              return this;
            };
            C6.prototype.listeners = function (C7) {
              this.U = this.U || {};
              return this.U['$' + C7] || [];
            };
            C6.prototype.hasListeners = function (C7) {
              return !!this.listeners(C7).length;
            };
          }, function (C5, C6, C7) {
            var C8 = C7(0x18);
            var C9 = C7(0x19);
            C5.exports = {
              'protocol': 0x4,
              'encodePacket': C8,
              'encodePayload': function (Cv, CC) {
                var CH = Cv.length;
                var Ca = Array(CH);
                var CN = 0x0;
                Cv.forEach(function (Ck, Cs) {
                  C8(Ck, false, function (CO) {
                    Ca[Cs] = CO;
                    if (++CN === CH) {
                      CC(Ca.join(""));
                    }
                  });
                });
              },
              'decodePacket': C9,
              'decodePayload': function (Cv, CC) {
                var CH = Cv.split("");
                var Ca = [];
                for (var CN = 0x0; CN < CH.length; CN++) {
                  var Ck = C9(CH[CN], CC);
                  Ca.push(Ck);
                  if ("error" === Ck.type) {
                    break;
                  }
                }
                return Ca;
              }
            };
          }, function (C5) {
            C5.exports = undefined !== s ? s : undefined !== O ? O : Function('', "return this")();
          }, function (C5, C6, C7) {
            var C8 = C7(0x16);
            var C9 = C7(0x2);
            C5.exports = function (Cv) {
              var CC = Cv.xdomain;
              var CH = Cv.xscheme;
              var Ca = Cv.enablesXDR;
              try {
                if ("undefined" != typeof XMLHttpRequest && (!CC || C8)) {
                  return new XMLHttpRequest();
                }
              } catch (CN) {}
              try {
                if ("undefined" != typeof XDomainRequest && !CH && Ca) {
                  return new XDomainRequest();
                }
              } catch (Ck) {}
              if (!CC) {
                try {
                  return new C9[["Active"].concat("Object").join('X')]("Microsoft.XMLHTTP");
                } catch (Cs) {}
              }
            };
          }, function (C5, C6, C7) {
            function C8(Ck) {
              return (C8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Cs) {
                return typeof Cs;
              } : function (Cs) {
                return Cs && "function" == typeof Symbol && Cs.constructor === Symbol && Cs !== Symbol.prototype ? "symbol" : typeof Cs;
              })(Ck);
            }
            function C9(Ck, Cs) {
              return (C9 = Object.setPrototypeOf || function (CO, Ci) {
                CO.__proto__ = Ci;
                return CO;
              })(Ck, Cs);
            }
            function Cv(Ck) {
              var Cs = function () {
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
                } catch (CO) {
                  return false;
                }
              }();
              return function () {
                var CO;
                var Ci = CH(Ck);
                if (Cs) {
                  var CX = CH(this).constructor;
                  CO = Reflect.construct(Ci, arguments, CX);
                } else {
                  CO = Ci.apply(this, arguments);
                }
                return CC(this, CO);
              };
            }
            function CC(Ck, Cs) {
              return !Cs || "object" !== C8(Cs) && "function" != typeof Cs ? function (CO) {
                if (undefined === CO) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return CO;
              }(Ck) : Cs;
            }
            function CH(Ck) {
              return (CH = Object.setPrototypeOf ? Object.getPrototypeOf : function (Cs) {
                return Cs.__proto__ || Object.getPrototypeOf(Cs);
              })(Ck);
            }
            var Ca = C7(0x1);
            var CN = function (Ck) {
              !function (CX, CE) {
                if ("function" != typeof CE && null !== CE) {
                  throw new TypeError("Super expression must either be null or a function");
                }
                CX.prototype = Object.create(CE && CE.prototype, {
                  'constructor': {
                    'value': CX,
                    'writable': true,
                    'configurable': true
                  }
                });
                if (CE) {
                  C9(CX, CE);
                }
              }(Ci, Ck);
              var Cs;
              var CO = Cv(Ci);
              function Ci(CX) {
                var CE;
                (function (Cc, CV) {
                  if (!(Cc instanceof CV)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                })(this, Ci);
                (CE = CO.call(this)).opts = CX;
                CE.query = CX.query;
                CE.readyState = '';
                CE.socket = CX.socket;
                return CE;
              }
              if (Cs = [{
                'key': "onError",
                'value': function (CX, CE) {
                  var Cc = Error(CX);
                  Cc.type = "TransportError";
                  Cc.description = CE;
                  this.emit("error", Cc);
                  return this;
                }
              }, {
                'key': "open",
                'value': function () {
                  if (!("closed" !== this.readyState && '' !== this.readyState)) {
                    this.readyState = "opening";
                    this.doOpen();
                  }
                  return this;
                }
              }, {
                'key': "close",
                'value': function () {
                  if (!("opening" !== this.readyState && "open" !== this.readyState)) {
                    this.doClose();
                    this.onClose();
                  }
                  return this;
                }
              }, {
                'key': "send",
                'value': function (CX) {
                  if ("open" !== this.readyState) {
                    throw Error("Transport not open");
                  }
                  this.write(CX);
                }
              }, {
                'key': "onOpen",
                'value': function () {
                  this.readyState = "open";
                  this.writable = true;
                  this.emit("open");
                }
              }, {
                'key': "onData",
                'value': function (CX) {
                  var CE = Ca.decodePacket(CX, this.socket.binaryType);
                  this.onPacket(CE);
                }
              }, {
                'key': "onPacket",
                'value': function (CX) {
                  this.emit("packet", CX);
                }
              }, {
                'key': "onClose",
                'value': function () {
                  this.readyState = "closed";
                  this.emit("close");
                }
              }]) {
                (function (CX, CE) {
                  for (var Cc = 0x0; Cc < CE.length; Cc++) {
                    var CV = CE[Cc];
                    CV.enumerable = CV.enumerable || false;
                    CV.configurable = true;
                    if ("value" in CV) {
                      CV.writable = true;
                    }
                    Object.defineProperty(CX, CV.key, CV);
                  }
                })(Ci.prototype, Cs);
              }
              return Ci;
            }(C7(0x0));
            C5.exports = CN;
          }, function (C5, C6) {
            C6.encode = function (C7) {
              var C8 = '';
              for (var C9 in C7) if (C7.hasOwnProperty(C9)) {
                if (C8.length) {
                  C8 += '&';
                }
                C8 += encodeURIComponent(C9) + '=' + encodeURIComponent(C7[C9]);
              }
              return C8;
            };
            C6.decode = function (C7) {
              var C8 = {};
              var C9 = C7.split('&');
              var Cv = 0x0;
              for (var CC = C9.length; Cv < CC; Cv++) {
                var CH = C9[Cv].split('=');
                C8[decodeURIComponent(CH[0x0])] = decodeURIComponent(CH[0x1]);
              }
              return C8;
            };
          }, function (C5, C6, C7) {
            function C8(CZ) {
              return (C8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CB) {
                return typeof CB;
              } : function (CB) {
                return CB && "function" == typeof Symbol && CB.constructor === Symbol && CB !== Symbol.prototype ? "symbol" : typeof CB;
              })(CZ);
            }
            function C9(CZ, CB, Cy) {
              return (C9 = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (Cp, CM, Cb) {
                var Cr = function (Ch, CY) {
                  for (; !Object.prototype.hasOwnProperty.call(Ch, CY) && null !== (Ch = CH(Ch));) {
                    ;
                  }
                  return Ch;
                }(Cp, CM);
                if (Cr) {
                  var CL = Object.getOwnPropertyDescriptor(Cr, CM);
                  return CL.get ? CL.get.call(Cb) : CL.value;
                }
              })(CZ, CB, Cy || CZ);
            }
            function Cv(CZ, CB) {
              return (Cv = Object.setPrototypeOf || function (Cy, Cp) {
                Cy.__proto__ = Cp;
                return Cy;
              })(CZ, CB);
            }
            function CC(CZ, CB) {
              return !CB || "object" !== C8(CB) && "function" != typeof CB ? function (Cy) {
                if (undefined === Cy) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return Cy;
              }(CZ) : CB;
            }
            function CH(CZ) {
              return (CH = Object.setPrototypeOf ? Object.getPrototypeOf : function (CB) {
                return CB.__proto__ || Object.getPrototypeOf(CB);
              })(CZ);
            }
            function Ca(CZ, CB) {
              if (!(CZ instanceof CB)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function CN(CZ, CB) {
              for (var Cy = 0x0; Cy < CB.length; Cy++) {
                var Cp = CB[Cy];
                Cp.enumerable = Cp.enumerable || false;
                Cp.configurable = true;
                if ("value" in Cp) {
                  Cp.writable = true;
                }
                Object.defineProperty(CZ, Cp.key, Cp);
              }
            }
            function Ck(CZ, CB, Cy) {
              if (CB) {
                CN(CZ.prototype, CB);
              }
              if (Cy) {
                CN(CZ, Cy);
              }
              return CZ;
            }
            Object.defineProperty(C6, "__esModule", {
              'value': true
            });
            C6.Decoder = C6.Encoder = C6.PacketType = C6.protocol = undefined;
            var Cs;
            var CO = C7(0x0);
            var Ci = C7(0x1e);
            var CX = C7(0xf);
            C6.protocol = 0x5;
            (function (CZ) {
              CZ[CZ.CONNECT = 0x0] = "CONNECT";
              CZ[CZ.DISCONNECT = 0x1] = "DISCONNECT";
              CZ[CZ.EVENT = 0x2] = "EVENT";
              CZ[CZ.ACK = 0x3] = "ACK";
              CZ[CZ.CONNECT_ERROR = 0x4] = "CONNECT_ERROR";
              CZ[CZ.BINARY_EVENT = 0x5] = "BINARY_EVENT";
              CZ[CZ.BINARY_ACK = 0x6] = "BINARY_ACK";
            })(Cs = C6.PacketType || (C6.PacketType = {}));
            var CE = function () {
              function CZ() {
                Ca(this, CZ);
              }
              Ck(CZ, [{
                'key': "encode",
                'value': function (CB) {
                  return CB.type !== Cs.EVENT && CB.type !== Cs.ACK || !CX.hasBinary(CB) ? [this.encodeAsString(CB)] : (CB.type = CB.type === Cs.EVENT ? Cs.BINARY_EVENT : Cs.BINARY_ACK, this.encodeAsBinary(CB));
                }
              }, {
                'key': "encodeAsString",
                'value': function (CB) {
                  var Cy = '' + CB.type;
                  if (!(CB.type !== Cs.BINARY_EVENT && CB.type !== Cs.BINARY_ACK)) {
                    Cy += CB.attachments + '-';
                  }
                  if (CB.nsp && '/' !== CB.nsp) {
                    Cy += CB.nsp + ',';
                  }
                  if (null != CB.id) {
                    Cy += CB.id;
                  }
                  if (null != CB.data) {
                    Cy += JSON.stringify(CB.data);
                  }
                  return Cy;
                }
              }, {
                'key': "encodeAsBinary",
                'value': function (CB) {
                  var Cy = Ci.deconstructPacket(CB);
                  var Cp = this.encodeAsString(Cy.packet);
                  var CM = Cy.buffers;
                  CM.unshift(Cp);
                  return CM;
                }
              }]);
              return CZ;
            }();
            C6.Encoder = CE;
            var Cc = function (CZ) {
              !function (Cp, CM) {
                if ("function" != typeof CM && null !== CM) {
                  throw new TypeError("Super expression must either be null or a function");
                }
                Cp.prototype = Object.create(CM && CM.prototype, {
                  'constructor': {
                    'value': Cp,
                    'writable': true,
                    'configurable': true
                  }
                });
                if (CM) {
                  Cv(Cp, CM);
                }
              }(Cy, CZ);
              var CB = function (Cp) {
                var CM = function () {
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
                  } catch (Cb) {
                    return false;
                  }
                }();
                return function () {
                  var Cb;
                  var Cr = CH(Cp);
                  if (CM) {
                    var CL = CH(this).constructor;
                    Cb = Reflect.construct(Cr, arguments, CL);
                  } else {
                    Cb = Cr.apply(this, arguments);
                  }
                  return CC(this, Cb);
                };
              }(Cy);
              function Cy() {
                Ca(this, Cy);
                return CB.call(this);
              }
              Ck(Cy, [{
                'key': "add",
                'value': function (Cp) {
                  var CM;
                  if ("string" == typeof Cp) {
                    if ((CM = this.decodeString(Cp)).type === Cs.BINARY_EVENT || CM.type === Cs.BINARY_ACK) {
                      this.reconstructor = new CV(CM);
                      if (0x0 === CM.attachments) {
                        C9(CH(Cy.prototype), "emit", this).call(this, "decoded", CM);
                      }
                    } else {
                      C9(CH(Cy.prototype), "emit", this).call(this, "decoded", CM);
                    }
                  } else {
                    if (!CX.isBinary(Cp) && !Cp.base64) {
                      throw Error("Unknown type: " + Cp);
                    }
                    if (!this.reconstructor) {
                      throw Error("got binary data when not reconstructing a packet");
                    }
                    if (CM = this.reconstructor.takeBinaryData(Cp)) {
                      this.reconstructor = null;
                      C9(CH(Cy.prototype), "emit", this).call(this, "decoded", CM);
                    }
                  }
                }
              }, {
                'key': "decodeString",
                'value': function (Cp) {
                  var CM = 0x0;
                  var Cb = {
                    'type': +Cp.charAt(0x0)
                  };
                  if (undefined === Cs[Cb.type]) {
                    throw Error("unknown packet type " + Cb.type);
                  }
                  if (Cb.type === Cs.BINARY_EVENT || Cb.type === Cs.BINARY_ACK) {
                    for (var Cr = CM + 0x1; '-' !== Cp.charAt(++CM) && CM != Cp.length;) {
                      ;
                    }
                    var CL = Cp.substring(Cr, CM);
                    if (CL != +CL || '-' !== Cp.charAt(CM)) {
                      throw Error("Illegal attachments");
                    }
                    Cb.attachments = +CL;
                  }
                  if ('/' === Cp.charAt(CM + 0x1)) {
                    for (var Ch = CM + 0x1; ++CM && ',' !== Cp.charAt(CM) && CM !== Cp.length;) {
                      ;
                    }
                    Cb.nsp = Cp.substring(Ch, CM);
                  } else {
                    Cb.nsp = '/';
                  }
                  var CY = Cp.charAt(CM + 0x1);
                  if ('' !== CY && +CY == CY) {
                    for (var CA = CM + 0x1; ++CM;) {
                      var CW = Cp.charAt(CM);
                      if (null == CW || +CW != CW) {
                        --CM;
                        break;
                      }
                      if (CM === Cp.length) {
                        break;
                      }
                    }
                    Cb.id = +Cp.substring(CA, CM + 0x1);
                  }
                  if (Cp.charAt(++CM)) {
                    var CK = function (Cl) {
                      try {
                        return JSON.parse(Cl);
                      } catch (Cg) {
                        return false;
                      }
                    }(Cp.substr(CM));
                    if (!Cy.isPayloadValid(Cb.type, CK)) {
                      throw Error("invalid payload");
                    }
                    Cb.data = CK;
                  }
                  return Cb;
                }
              }, {
                'key': "destroy",
                'value': function () {
                  if (this.reconstructor) {
                    this.reconstructor.finishedReconstruction();
                  }
                }
              }], [{
                'key': "isPayloadValid",
                'value': function (Cp, CM) {
                  switch (Cp) {
                    case Cs.CONNECT:
                      return "object" === C8(CM);
                    case Cs.DISCONNECT:
                      return undefined === CM;
                    case Cs.CONNECT_ERROR:
                      return "string" == typeof CM || "object" === C8(CM);
                    case Cs.EVENT:
                    case Cs.BINARY_EVENT:
                      return Array.isArray(CM) && "string" == typeof CM[0x0];
                    case Cs.ACK:
                    case Cs.BINARY_ACK:
                      return Array.isArray(CM);
                  }
                }
              }]);
              return Cy;
            }(CO);
            C6.Decoder = Cc;
            var CV = function () {
              function CZ(CB) {
                Ca(this, CZ);
                this.packet = CB;
                this.buffers = [];
                this.reconPack = CB;
              }
              Ck(CZ, [{
                'key': "takeBinaryData",
                'value': function (CB) {
                  this.buffers.push(CB);
                  if (this.buffers.length === this.reconPack.attachments) {
                    var Cy = Ci.reconstructPacket(this.reconPack, this.buffers);
                    this.finishedReconstruction();
                    return Cy;
                  }
                  return null;
                }
              }, {
                'key': "finishedReconstruction",
                'value': function () {
                  this.reconPack = null;
                  this.buffers = [];
                }
              }]);
              return CZ;
            }();
          }, function (C5) {
            var C6 = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
            var C7 = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            C5.exports = function (C8) {
              var C9 = C8;
              var Cv = C8.indexOf('[');
              var CC = C8.indexOf(']');
              if (-0x1 != Cv && -0x1 != CC) {
                C8 = C8.substring(0x0, Cv) + C8.substring(Cv, CC).replace(/:/g, ';') + C8.substring(CC, C8.length);
              }
              var CH;
              var Ca;
              var CN = C6.exec(C8 || '');
              var Ck = {};
              for (var Cs = 0xe; Cs--;) {
                Ck[C7[Cs]] = CN[Cs] || '';
              }
              if (-0x1 != Cv && -0x1 != CC) {
                Ck.source = C9;
                Ck.host = Ck.host.substring(0x1, Ck.host.length - 0x1).replace(/;/g, ':');
                Ck.authority = Ck.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
                Ck.ipv6uri = true;
              }
              Ck.pathNames = function (CO, Ci) {
                var CX = Ci.replace(/\/{2,9}/g, '/').split('/');
                if (!('/' != Ci.substr(0x0, 0x1) && 0x0 !== Ci.length)) {
                  CX.splice(0x0, 0x1);
                }
                if ('/' == Ci.substr(Ci.length - 0x1, 0x1)) {
                  CX.splice(CX.length - 0x1, 0x1);
                }
                return CX;
              }(0x0, Ck.path);
              CH = Ck.query;
              Ca = {};
              CH.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (CO, Ci, CX) {
                if (Ci) {
                  Ca[Ci] = CX;
                }
              });
              Ck.queryKey = Ca;
              return Ck;
            };
          }, function (C5, C6, C7) {
            function C8(Cc) {
              return (C8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CV) {
                return typeof CV;
              } : function (CV) {
                return CV && "function" == typeof Symbol && CV.constructor === Symbol && CV !== Symbol.prototype ? "symbol" : typeof CV;
              })(Cc);
            }
            function C9(Cc, CV, CZ) {
              return (C9 = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (CB, Cy, Cp) {
                var CM = function (Cr, CL) {
                  for (; !Object.prototype.hasOwnProperty.call(Cr, CL) && null !== (Cr = CH(Cr));) {
                    ;
                  }
                  return Cr;
                }(CB, Cy);
                if (CM) {
                  var Cb = Object.getOwnPropertyDescriptor(CM, Cy);
                  return Cb.get ? Cb.get.call(Cp) : Cb.value;
                }
              })(Cc, CV, CZ || Cc);
            }
            function Cv(Cc, CV) {
              return (Cv = Object.setPrototypeOf || function (CZ, CB) {
                CZ.__proto__ = CB;
                return CZ;
              })(Cc, CV);
            }
            function CC(Cc, CV) {
              return !CV || "object" !== C8(CV) && "function" != typeof CV ? function (CZ) {
                if (undefined === CZ) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return CZ;
              }(Cc) : CV;
            }
            function CH(Cc) {
              return (CH = Object.setPrototypeOf ? Object.getPrototypeOf : function (CV) {
                return CV.__proto__ || Object.getPrototypeOf(CV);
              })(Cc);
            }
            Object.defineProperty(C6, "__esModule", {
              'value': true
            });
            C6.Manager = undefined;
            var Ca = C7(0x14);
            var CN = C7(0xe);
            var Ck = C7(0x0);
            var Cs = C7(0x6);
            var CO = C7(0x10);
            var Ci = C7(0x11);
            var CX = C7(0x1f);
            var CE = function (Cc) {
              !function (Cy, Cp) {
                if ("function" != typeof Cp && null !== Cp) {
                  throw new TypeError("Super expression must either be null or a function");
                }
                Cy.prototype = Object.create(Cp && Cp.prototype, {
                  'constructor': {
                    'value': Cy,
                    'writable': true,
                    'configurable': true
                  }
                });
                if (Cp) {
                  Cv(Cy, Cp);
                }
              }(CB, Cc);
              var CV;
              var CZ = function (Cy) {
                var Cp = function () {
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
                  } catch (CM) {
                    return false;
                  }
                }();
                return function () {
                  var CM;
                  var Cb = CH(Cy);
                  if (Cp) {
                    var Cr = CH(this).constructor;
                    CM = Reflect.construct(Cb, arguments, Cr);
                  } else {
                    CM = Cb.apply(this, arguments);
                  }
                  return CC(this, CM);
                };
              }(CB);
              function CB(Cy, Cp) {
                var CM;
                !function (Cr, CL) {
                  if (!(Cr instanceof CL)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                }(this, CB);
                (CM = CZ.call(this)).nsps = {};
                CM.subs = [];
                CM.connecting = [];
                if (Cy && "object" === C8(Cy)) {
                  Cp = Cy;
                  Cy = undefined;
                }
                (Cp = Cp || {}).path = Cp.path || "/socket.io";
                CM.opts = Cp;
                CM.reconnection(false !== Cp.reconnection);
                CM.reconnectionAttempts(Cp.reconnectionAttempts || Infinity);
                CM.reconnectionDelay(Cp.reconnectionDelay || 0x3e8);
                CM.reconnectionDelayMax(Cp.reconnectionDelayMax || 0x1388);
                CM.randomizationFactor(Cp.randomizationFactor || 0.5);
                CM.backoff = new CX({
                  'min': CM.reconnectionDelay(),
                  'max': CM.reconnectionDelayMax(),
                  'jitter': CM.randomizationFactor()
                });
                CM.timeout(null == Cp.timeout ? 0x4e20 : Cp.timeout);
                CM._readyState = "closed";
                CM.uri = Cy;
                var Cb = Cp.parser || Cs;
                CM.encoder = new Cb.Encoder();
                CM.decoder = new Cb.Decoder();
                CM._autoConnect = false !== Cp.autoConnect;
                if (CM._autoConnect) {
                  CM.open();
                }
                return CM;
              }
              if (CV = [{
                'key': "reconnection",
                'value': function (Cy) {
                  return arguments.length ? (this.F = !!Cy, this) : this.F;
                }
              }, {
                'key': "reconnectionAttempts",
                'value': function (Cy) {
                  return undefined === Cy ? this.L : (this.L = Cy, this);
                }
              }, {
                'key': "reconnectionDelay",
                'value': function (Cy) {
                  return undefined === Cy ? this.X : (this.X = Cy, this.backoff && this.backoff.setMin(Cy), this);
                }
              }, {
                'key': "randomizationFactor",
                'value': function (Cy) {
                  return undefined === Cy ? this.H : (this.H = Cy, this.backoff && this.backoff.setJitter(Cy), this);
                }
              }, {
                'key': "reconnectionDelayMax",
                'value': function (Cy) {
                  return undefined === Cy ? this.q : (this.q = Cy, this.backoff && this.backoff.setMax(Cy), this);
                }
              }, {
                'key': "timeout",
                'value': function (Cy) {
                  return arguments.length ? (this.K = Cy, this) : this.K;
                }
              }, {
                'key': "maybeReconnectOnOpen",
                'value': function () {
                  if (!this._reconnecting && this.F && 0x0 === this.backoff.attempts) {
                    this.reconnect();
                  }
                }
              }, {
                'key': "open",
                'value': function (Cy) {
                  var Cp = this;
                  if (~this._readyState.indexOf("open")) {
                    return this;
                  }
                  this.engine = Ca(this.uri, this.opts);
                  var CM = this.engine;
                  var Cb = this;
                  this._readyState = "opening";
                  this.skipReconnect = false;
                  var Cr = CO.on(CM, "open", function () {
                    Cb.onopen();
                    if (Cy) {
                      Cy();
                    }
                  });
                  var CL = CO.on(CM, "error", function (CA) {
                    Cb.cleanup();
                    Cb._readyState = "closed";
                    C9(CH(CB.prototype), "emit", Cp).call(Cp, "error", CA);
                    if (Cy) {
                      Cy(CA);
                    } else {
                      Cb.maybeReconnectOnOpen();
                    }
                  });
                  if (false !== this.K) {
                    var Ch = this.K;
                    if (0x0 === Ch) {
                      Cr.destroy();
                    }
                    var CY = setTimeout(function () {
                      Cr.destroy();
                      CM.close();
                      CM.emit("error", Error("timeout"));
                    }, Ch);
                    this.subs.push({
                      'destroy': function () {
                        clearTimeout(CY);
                      }
                    });
                  }
                  this.subs.push(Cr);
                  this.subs.push(CL);
                  return this;
                }
              }, {
                'key': "connect",
                'value': function (Cy) {
                  return this.open(Cy);
                }
              }, {
                'key': "onopen",
                'value': function () {
                  this.cleanup();
                  this._readyState = "open";
                  C9(CH(CB.prototype), "emit", this).call(this, "open");
                  var Cy = this.engine;
                  this.subs.push(CO.on(Cy, "data", Ci(this, "ondata")));
                  this.subs.push(CO.on(Cy, "ping", Ci(this, "onping")));
                  this.subs.push(CO.on(Cy, "error", Ci(this, "onerror")));
                  this.subs.push(CO.on(Cy, "close", Ci(this, "onclose")));
                  this.subs.push(CO.on(this.decoder, "decoded", Ci(this, "ondecoded")));
                }
              }, {
                'key': "onping",
                'value': function () {
                  C9(CH(CB.prototype), "emit", this).call(this, "ping");
                }
              }, {
                'key': "ondata",
                'value': function (Cy) {
                  this.decoder.add(Cy);
                }
              }, {
                'key': "ondecoded",
                'value': function (Cy) {
                  C9(CH(CB.prototype), "emit", this).call(this, "packet", Cy);
                }
              }, {
                'key': "onerror",
                'value': function (Cy) {
                  C9(CH(CB.prototype), "emit", this).call(this, "error", Cy);
                }
              }, {
                'key': "socket",
                'value': function (Cy, Cp) {
                  var CM = this.nsps[Cy];
                  if (!CM) {
                    CM = new CN.Socket(this, Cy, Cp);
                    this.nsps[Cy] = CM;
                    var Cb = this;
                    CM.on("connecting", Cr);
                    if (this._autoConnect) {
                      Cr();
                    }
                  }
                  function Cr() {
                    if (!~Cb.connecting.indexOf(CM)) {
                      Cb.connecting.push(CM);
                    }
                  }
                  return CM;
                }
              }, {
                'key': "_destroy",
                'value': function (Cy) {
                  var Cp = this.connecting.indexOf(Cy);
                  if (~Cp) {
                    this.connecting.splice(Cp, 0x1);
                  }
                  if (!this.connecting.length) {
                    this._close();
                  }
                }
              }, {
                'key': "_packet",
                'value': function (Cy) {
                  if (Cy.query && 0x0 === Cy.type) {
                    Cy.nsp += '?' + Cy.query;
                  }
                  var Cp = this.encoder.encode(Cy);
                  for (var CM = 0x0; CM < Cp.length; CM++) {
                    this.engine.write(Cp[CM], Cy.options);
                  }
                }
              }, {
                'key': "cleanup",
                'value': function () {
                  var Cy = this.subs.length;
                  for (var Cp = 0x0; Cp < Cy; Cp++) {
                    this.subs.shift().destroy();
                  }
                  this.decoder.destroy();
                }
              }, {
                'key': "_close",
                'value': function () {
                  this.skipReconnect = true;
                  this._reconnecting = false;
                  if ("opening" === this._readyState) {
                    this.cleanup();
                  }
                  this.backoff.reset();
                  this._readyState = "closed";
                  if (this.engine) {
                    this.engine.close();
                  }
                }
              }, {
                'key': "disconnect",
                'value': function () {
                  return this._close();
                }
              }, {
                'key': "onclose",
                'value': function (Cy) {
                  this.cleanup();
                  this.backoff.reset();
                  this._readyState = "closed";
                  C9(CH(CB.prototype), "emit", this).call(this, "close", Cy);
                  if (this.F && !this.skipReconnect) {
                    this.reconnect();
                  }
                }
              }, {
                'key': "reconnect",
                'value': function () {
                  var Cy = this;
                  if (this._reconnecting || this.skipReconnect) {
                    return this;
                  }
                  var Cp = this;
                  if (this.backoff.attempts >= this.L) {
                    this.backoff.reset();
                    C9(CH(CB.prototype), "emit", this).call(this, "reconnect_failed");
                    this._reconnecting = false;
                  } else {
                    var CM = this.backoff.duration();
                    this._reconnecting = true;
                    var Cb = setTimeout(function () {
                      if (!Cp.skipReconnect) {
                        C9(CH(CB.prototype), "emit", Cy).call(Cy, "reconnect_attempt", Cp.backoff.attempts);
                        if (!Cp.skipReconnect) {
                          Cp.open(function (Cr) {
                            if (Cr) {
                              Cp._reconnecting = false;
                              Cp.reconnect();
                              C9(CH(CB.prototype), "emit", Cy).call(Cy, "reconnect_error", Cr);
                            } else {
                              Cp.onreconnect();
                            }
                          });
                        }
                      }
                    }, CM);
                    this.subs.push({
                      'destroy': function () {
                        clearTimeout(Cb);
                      }
                    });
                  }
                }
              }, {
                'key': "onreconnect",
                'value': function () {
                  var Cy = this.backoff.attempts;
                  this._reconnecting = false;
                  this.backoff.reset();
                  C9(CH(CB.prototype), "emit", this).call(this, "reconnect", Cy);
                }
              }]) {
                (function (Cy, Cp) {
                  for (var CM = 0x0; CM < Cp.length; CM++) {
                    var Cb = Cp[CM];
                    Cb.enumerable = Cb.enumerable || false;
                    Cb.configurable = true;
                    if ("value" in Cb) {
                      Cb.writable = true;
                    }
                    Object.defineProperty(Cy, Cb.key, Cb);
                  }
                })(CB.prototype, CV);
              }
              return CB;
            }(Ck);
            C6.Manager = CE;
          }, function (C5, C6, C7) {
            var C8 = C7(0x3);
            var C9 = C7(0x17);
            var Cv = C7(0x1b);
            var CC = C7(0x1c);
            C6.polling = function (CH) {
              var Ca = false;
              var CN = false;
              var Ck = false !== CH.jsonp;
              if ("undefined" != typeof location) {
                var Cs = "https:" === location.protocol;
                var CO = location.port;
                if (!CO) {
                  CO = Cs ? 0x1bb : 0x50;
                }
                Ca = CH.hostname !== location.hostname || CO !== CH.port;
                CN = CH.secure !== Cs;
              }
              CH.xdomain = Ca;
              CH.xscheme = CN;
              if ("open" in new C8(CH) && !CH.forceJSONP) {
                return new C9(CH);
              }
              if (!Ck) {
                throw Error("JSONP disabled");
              }
              return new Cv(CH);
            };
            C6.websocket = CC;
          }, function (C5, C6, C7) {
            function C8(CX) {
              return (C8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CE) {
                return typeof CE;
              } : function (CE) {
                return CE && "function" == typeof Symbol && CE.constructor === Symbol && CE !== Symbol.prototype ? "symbol" : typeof CE;
              })(CX);
            }
            function C9(CX, CE) {
              if (!(CX instanceof CE)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function Cv(CX, CE) {
              return (Cv = Object.setPrototypeOf || function (Cc, CV) {
                Cc.__proto__ = CV;
                return Cc;
              })(CX, CE);
            }
            function CC(CX) {
              var CE = function () {
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
                } catch (Cc) {
                  return false;
                }
              }();
              return function () {
                var Cc;
                var CV = Ca(CX);
                if (CE) {
                  var CZ = Ca(this).constructor;
                  Cc = Reflect.construct(CV, arguments, CZ);
                } else {
                  Cc = CV.apply(this, arguments);
                }
                return CH(this, Cc);
              };
            }
            function CH(CX, CE) {
              return !CE || "object" !== C8(CE) && "function" != typeof CE ? function (Cc) {
                if (undefined === Cc) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return Cc;
              }(CX) : CE;
            }
            function Ca(CX) {
              return (Ca = Object.setPrototypeOf ? Object.getPrototypeOf : function (CE) {
                return CE.__proto__ || Object.getPrototypeOf(CE);
              })(CX);
            }
            var CN = C7(0x4);
            var Ck = C7(0x5);
            var Cs = C7(0x1);
            var CO = C7(0xc);
            var Ci = function (CX) {
              !function (CZ, CB) {
                if ("function" != typeof CB && null !== CB) {
                  throw new TypeError("Super expression must either be null or a function");
                }
                CZ.prototype = Object.create(CB && CB.prototype, {
                  'constructor': {
                    'value': CZ,
                    'writable': true,
                    'configurable': true
                  }
                });
                if (CB) {
                  Cv(CZ, CB);
                }
              }(CV, CX);
              var CE;
              var Cc = CC(CV);
              function CV() {
                C9(this, CV);
                return Cc.apply(this, arguments);
              }
              if (CE = [{
                'key': "doOpen",
                'value': function () {
                  this.poll();
                }
              }, {
                'key': "pause",
                'value': function (CZ) {
                  var CB = this;
                  function Cp() {
                    CB.readyState = "paused";
                    CZ();
                  }
                  this.readyState = "pausing";
                  if (this.polling || !this.writable) {
                    var Cy = 0x0;
                    if (this.polling) {
                      Cy++;
                      this.once("pollComplete", function () {
                        if (! --Cy) {
                          Cp();
                        }
                      });
                    }
                    if (!this.writable) {
                      Cy++;
                      this.once("drain", function () {
                        if (! --Cy) {
                          Cp();
                        }
                      });
                    }
                  } else {
                    Cp();
                  }
                }
              }, {
                'key': "poll",
                'value': function () {
                  this.polling = true;
                  this.doPoll();
                  this.emit("poll");
                }
              }, {
                'key': "onData",
                'value': function (CZ) {
                  var CB = this;
                  Cs.decodePayload(CZ, this.socket.binaryType).forEach(function (Cy) {
                    if ("opening" === CB.readyState && "open" === Cy.type) {
                      CB.onOpen();
                    }
                    if ("close" === Cy.type) {
                      CB.onClose();
                      return false;
                    }
                    CB.onPacket(Cy);
                  });
                  if ("closed" !== this.readyState) {
                    this.polling = false;
                    this.emit("pollComplete");
                    if ("open" === this.readyState) {
                      this.poll();
                    }
                  }
                }
              }, {
                'key': "doClose",
                'value': function () {
                  var CZ = this;
                  function CB() {
                    CZ.write([{
                      'type': "close"
                    }]);
                  }
                  if ("open" === this.readyState) {
                    CB();
                  } else {
                    this.once("open", CB);
                  }
                }
              }, {
                'key': "write",
                'value': function (CZ) {
                  var CB = this;
                  this.writable = false;
                  Cs.encodePayload(CZ, function (Cy) {
                    CB.doWrite(Cy, function () {
                      CB.writable = true;
                      CB.emit("drain");
                    });
                  });
                }
              }, {
                'key': "uri",
                'value': function () {
                  var CZ = this.query || {};
                  var CB = this.opts.secure ? "https" : "http";
                  var Cy = '';
                  if (false !== this.opts.timestampRequests) {
                    CZ[this.opts.timestampParam] = CO();
                  }
                  if (!(this.supportsBinary || CZ.sid)) {
                    CZ.b64 = 0x1;
                  }
                  CZ = Ck.encode(CZ);
                  if (this.opts.port && ("https" === CB && 0x1bb != +this.opts.port || "http" === CB && 0x50 != +this.opts.port)) {
                    Cy = ':' + this.opts.port;
                  }
                  if (CZ.length) {
                    CZ = '?' + CZ;
                  }
                  return CB + "://" + (-0x1 !== this.opts.hostname.indexOf(':') ? '[' + this.opts.hostname + ']' : this.opts.hostname) + Cy + this.opts.path + CZ;
                }
              }, {
                'key': "name",
                'get': function () {
                  return "polling";
                }
              }]) {
                (function (CZ, CB) {
                  for (var Cy = 0x0; Cy < CB.length; Cy++) {
                    var Cp = CB[Cy];
                    Cp.enumerable = Cp.enumerable || false;
                    Cp.configurable = true;
                    if ("value" in Cp) {
                      Cp.writable = true;
                    }
                    Object.defineProperty(CZ, Cp.key, Cp);
                  }
                })(CV.prototype, CE);
              }
              return CV;
            }(CN);
            C5.exports = Ci;
          }, function (C5) {
            var C6 = Object.create(null);
            C6.open = '0';
            C6.close = '1';
            C6.ping = '2';
            C6.pong = '3';
            C6.message = '4';
            C6.upgrade = '5';
            C6.noop = '6';
            var C7 = Object.create(null);
            Object.keys(C6).forEach(function (C8) {
              C7[C6[C8]] = C8;
            });
            C5.exports = {
              'PACKET_TYPES': C6,
              'PACKET_TYPES_REVERSE': C7,
              'ERROR_PACKET': {
                'type': "error",
                'data': "parser error"
              }
            };
          }, function (C5) {
            var C6;
            var C7 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split('');
            var C8 = {};
            var C9 = 0x0;
            var Cv = 0x0;
            function CC(Ca) {
              var CN = '';
              do {
                CN = C7[Ca % 0x40] + CN;
                Ca = Math.floor(Ca / 0x40);
              } while (Ca > 0x0);
              return CN;
            }
            function CH() {
              var Ca = CC(+new Date());
              return Ca !== C6 ? (C9 = 0x0, C6 = Ca) : Ca + '.' + CC(C9++);
            }
            for (; Cv < 0x40; Cv++) {
              C8[C7[Cv]] = Cv;
            }
            CH.encode = CC;
            CH.decode = function (Ca) {
              var CN = 0x0;
              for (Cv = 0x0; Cv < Ca.length; Cv++) {
                CN = 0x40 * CN + C8[Ca.charAt(Cv)];
              }
              return CN;
            };
            C5.exports = CH;
          }, function (C5) {
            C5.exports.pick = function (C6) {
              var C7 = arguments.length;
              var C8 = Array(C7 > 0x1 ? C7 - 0x1 : 0x0);
              for (var C9 = 0x1; C9 < C7; C9++) {
                C8[C9 - 0x1] = arguments[C9];
              }
              return C8.reduce(function (Cv, CC) {
                Cv[CC] = C6[CC];
                return Cv;
              }, {});
            };
          }, function (C5, C6, C7) {
            function C8(CV) {
              return (C8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CZ) {
                return typeof CZ;
              } : function (CZ) {
                return CZ && "function" == typeof Symbol && CZ.constructor === Symbol && CZ !== Symbol.prototype ? "symbol" : typeof CZ;
              })(CV);
            }
            function C9(CV, CZ) {
              var CB;
              if ("undefined" == typeof Symbol || null == CV[Symbol.iterator]) {
                if (Array.isArray(CV) || (CB = function (CL, Ch) {
                  if (CL) {
                    if ("string" == typeof CL) {
                      return Cv(CL, Ch);
                    }
                    var CY = Object.prototype.toString.call(CL).slice(0x8, -0x1);
                    if ("Object" === CY && CL.constructor) {
                      CY = CL.constructor.name;
                    }
                    return "Map" === CY || "Set" === CY ? Array.from(CL) : "Arguments" === CY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(CY) ? Cv(CL, Ch) : undefined;
                  }
                }(CV)) || CZ && CV && "number" == typeof CV.length) {
                  if (CB) {
                    CV = CB;
                  }
                  var Cy = 0x0;
                  var Cp = function () {};
                  return {
                    's': Cp,
                    'n': function () {
                      return Cy >= CV.length ? {
                        'done': true
                      } : {
                        'done': false,
                        'value': CV[Cy++]
                      };
                    },
                    'e': function (CL) {
                      throw CL;
                    },
                    'f': Cp
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var CM;
              var Cb = true;
              var Cr = false;
              return {
                's': function () {
                  CB = CV[Symbol.iterator]();
                },
                'n': function () {
                  var CL = CB.next();
                  Cb = CL.done;
                  return CL;
                },
                'e': function (CL) {
                  Cr = true;
                  CM = CL;
                },
                'f': function () {
                  try {
                    if (!(Cb || null == CB["return"])) {
                      CB["return"]();
                    }
                  } finally {
                    if (Cr) {
                      throw CM;
                    }
                  }
                }
              };
            }
            function Cv(CV, CZ) {
              if (null == CZ || CZ > CV.length) {
                CZ = CV.length;
              }
              var CB = 0x0;
              for (var Cy = Array(CZ); CB < CZ; CB++) {
                Cy[CB] = CV[CB];
              }
              return Cy;
            }
            function CC(CV, CZ, CB) {
              return (CC = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (Cy, Cp, CM) {
                var Cb = function (CL, Ch) {
                  for (; !Object.prototype.hasOwnProperty.call(CL, Ch) && null !== (CL = Ck(CL));) {
                    ;
                  }
                  return CL;
                }(Cy, Cp);
                if (Cb) {
                  var Cr = Object.getOwnPropertyDescriptor(Cb, Cp);
                  return Cr.get ? Cr.get.call(CM) : Cr.value;
                }
              })(CV, CZ, CB || CV);
            }
            function CH(CV, CZ) {
              return (CH = Object.setPrototypeOf || function (CB, Cy) {
                CB.__proto__ = Cy;
                return CB;
              })(CV, CZ);
            }
            function Ca(CV) {
              var CZ = function () {
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
                } catch (CB) {
                  return false;
                }
              }();
              return function () {
                var CB;
                var Cy = Ck(CV);
                if (CZ) {
                  var Cp = Ck(this).constructor;
                  CB = Reflect.construct(Cy, arguments, Cp);
                } else {
                  CB = Cy.apply(this, arguments);
                }
                return CN(this, CB);
              };
            }
            function CN(CV, CZ) {
              return !CZ || "object" !== C8(CZ) && "function" != typeof CZ ? function (CB) {
                if (undefined === CB) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return CB;
              }(CV) : CZ;
            }
            function Ck(CV) {
              return (Ck = Object.setPrototypeOf ? Object.getPrototypeOf : function (CZ) {
                return CZ.__proto__ || Object.getPrototypeOf(CZ);
              })(CV);
            }
            Object.defineProperty(C6, "__esModule", {
              'value': true
            });
            C6.Socket = undefined;
            var Cs = C7(0x6);
            var CO = C7(0x0);
            var Ci = C7(0x10);
            var CX = C7(0x11);
            var CE = {
              'connect': 0x1,
              'connect_error': 0x1,
              'disconnect': 0x1,
              'disconnecting': 0x1,
              'newListener': 0x1,
              'removeListener': 0x1
            };
            var Cc = function (CV) {
              !function (Cp, CM) {
                if ("function" != typeof CM && null !== CM) {
                  throw new TypeError("Super expression must either be null or a function");
                }
                Cp.prototype = Object.create(CM && CM.prototype, {
                  'constructor': {
                    'value': Cp,
                    'writable': true,
                    'configurable': true
                  }
                });
                if (CM) {
                  CH(Cp, CM);
                }
              }(Cy, CV);
              var CZ;
              var CB = Ca(Cy);
              function Cy(Cp, CM, Cb) {
                var Cr;
                (function (CL, Ch) {
                  if (!(CL instanceof Ch)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                })(this, Cy);
                (Cr = CB.call(this)).ids = 0x0;
                Cr.acks = {};
                Cr.receiveBuffer = [];
                Cr.sendBuffer = [];
                Cr.flags = {};
                Cr.io = Cp;
                Cr.nsp = CM;
                Cr.ids = 0x0;
                Cr.acks = {};
                Cr.receiveBuffer = [];
                Cr.sendBuffer = [];
                Cr.connected = false;
                Cr.disconnected = true;
                Cr.flags = {};
                if (Cb && Cb.auth) {
                  Cr.auth = Cb.auth;
                }
                if (Cr.io._autoConnect) {
                  Cr.open();
                }
                return Cr;
              }
              if (CZ = [{
                'key': "subEvents",
                'value': function () {
                  if (!this.subs) {
                    var Cp = this.io;
                    this.subs = [Ci.on(Cp, "open", CX(this, "onopen")), Ci.on(Cp, "packet", CX(this, "onpacket")), Ci.on(Cp, "close", CX(this, "onclose"))];
                  }
                }
              }, {
                'key': "connect",
                'value': function () {
                  if (!this.connected) {
                    this.subEvents();
                    if (!this.io._reconnecting) {
                      this.io.open();
                    }
                    if ("open" === this.io._readyState) {
                      this.onopen();
                    }
                  }
                  return this;
                }
              }, {
                'key': "open",
                'value': function () {
                  return this.connect();
                }
              }, {
                'key': "send",
                'value': function () {
                  var Cp = arguments.length;
                  var CM = Array(Cp);
                  for (var Cb = 0x0; Cb < Cp; Cb++) {
                    CM[Cb] = arguments[Cb];
                  }
                  CM.unshift("message");
                  this.emit.apply(this, CM);
                  return this;
                }
              }, {
                'key': "emit",
                'value': function (Cp) {
                  if (CE.hasOwnProperty(Cp)) {
                    throw Error("\"" + Cp + "\" is a reserved event name");
                  }
                  var CM = arguments.length;
                  var Cb = Array(CM > 0x1 ? CM - 0x1 : 0x0);
                  for (var Cr = 0x1; Cr < CM; Cr++) {
                    Cb[Cr - 0x1] = arguments[Cr];
                  }
                  Cb.unshift(Cp);
                  var CL = {
                    'type': Cs.PacketType.EVENT,
                    'data': Cb,
                    'options': {}
                  };
                  CL.options.compress = false !== this.flags.compress;
                  if ("function" == typeof Cb[Cb.length - 0x1]) {
                    this.acks[this.ids] = Cb.pop();
                    CL.id = this.ids++;
                  }
                  var Ch = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                  if (!(this.flags.volatile && (!Ch || !this.connected))) {
                    if (this.connected) {
                      this.packet(CL);
                    } else {
                      this.sendBuffer.push(CL);
                    }
                  }
                  this.flags = {};
                  return this;
                }
              }, {
                'key': "packet",
                'value': function (Cp) {
                  Cp.nsp = this.nsp;
                  this.io._packet(Cp);
                }
              }, {
                'key': "onopen",
                'value': function () {
                  var Cp = this;
                  if ("function" == typeof this.auth) {
                    this.auth(function (CM) {
                      Cp.packet({
                        'type': Cs.PacketType.CONNECT,
                        'data': CM
                      });
                    });
                  } else {
                    this.packet({
                      'type': Cs.PacketType.CONNECT,
                      'data': this.auth
                    });
                  }
                }
              }, {
                'key': "onclose",
                'value': function (Cp) {
                  this.connected = false;
                  this.disconnected = true;
                  delete this.id;
                  CC(Ck(Cy.prototype), "emit", this).call(this, "disconnect", Cp);
                }
              }, {
                'key': "onpacket",
                'value': function (Cp) {
                  if (Cp.nsp === this.nsp) {
                    switch (Cp.type) {
                      case Cs.PacketType.CONNECT:
                        var CM = Cp.data.sid;
                        this.onconnect(CM);
                        break;
                      case Cs.PacketType.EVENT:
                      case Cs.PacketType.BINARY_EVENT:
                        this.onevent(Cp);
                        break;
                      case Cs.PacketType.ACK:
                      case Cs.PacketType.BINARY_ACK:
                        this.onack(Cp);
                        break;
                      case Cs.PacketType.DISCONNECT:
                        this.ondisconnect();
                        break;
                      case Cs.PacketType.CONNECT_ERROR:
                        var Cb = Error(Cp.data.message);
                        Cb.data = Cp.data.data;
                        CC(Ck(Cy.prototype), "emit", this).call(this, "connect_error", Cb);
                    }
                  }
                }
              }, {
                'key': "onevent",
                'value': function (Cp) {
                  var CM = Cp.data || [];
                  if (null != Cp.id) {
                    CM.push(this.ack(Cp.id));
                  }
                  if (this.connected) {
                    this.emitEvent(CM);
                  } else {
                    this.receiveBuffer.push(CM);
                  }
                }
              }, {
                'key': "emitEvent",
                'value': function (Cp) {
                  if (this.W && this.W.length) {
                    var CM;
                    var Cb = C9(this.W.slice());
                    try {
                      for (Cb.s(); !(CM = Cb.n()).done;) {
                        CM.value.apply(this, Cp);
                      }
                    } catch (Cr) {
                      Cb.e(Cr);
                    } finally {
                      Cb.f();
                    }
                  }
                  CC(Ck(Cy.prototype), "emit", this).apply(this, Cp);
                }
              }, {
                'key': "ack",
                'value': function (Cp) {
                  var CM = this;
                  var Cb = false;
                  return function () {
                    if (!Cb) {
                      Cb = true;
                      var Cr = arguments.length;
                      var CL = Array(Cr);
                      for (var Ch = 0x0; Ch < Cr; Ch++) {
                        CL[Ch] = arguments[Ch];
                      }
                      CM.packet({
                        'type': Cs.PacketType.ACK,
                        'id': Cp,
                        'data': CL
                      });
                    }
                  };
                }
              }, {
                'key': "onack",
                'value': function (Cp) {
                  var CM = this.acks[Cp.id];
                  if ("function" == typeof CM) {
                    CM.apply(this, Cp.data);
                    delete this.acks[Cp.id];
                  }
                }
              }, {
                'key': "onconnect",
                'value': function (Cp) {
                  this.id = Cp;
                  this.connected = true;
                  this.disconnected = false;
                  CC(Ck(Cy.prototype), "emit", this).call(this, "connect");
                  this.emitBuffered();
                }
              }, {
                'key': "emitBuffered",
                'value': function () {
                  for (var Cp = 0x0; Cp < this.receiveBuffer.length; Cp++) {
                    this.emitEvent(this.receiveBuffer[Cp]);
                  }
                  this.receiveBuffer = [];
                  for (var CM = 0x0; CM < this.sendBuffer.length; CM++) {
                    this.packet(this.sendBuffer[CM]);
                  }
                  this.sendBuffer = [];
                }
              }, {
                'key': "ondisconnect",
                'value': function () {
                  this.destroy();
                  this.onclose("io server disconnect");
                }
              }, {
                'key': "destroy",
                'value': function () {
                  if (this.subs) {
                    for (var Cp = 0x0; Cp < this.subs.length; Cp++) {
                      this.subs[Cp].destroy();
                    }
                    this.subs = null;
                  }
                  this.io._destroy(this);
                }
              }, {
                'key': "disconnect",
                'value': function () {
                  if (this.connected) {
                    this.packet({
                      'type': Cs.PacketType.DISCONNECT
                    });
                  }
                  this.destroy();
                  if (this.connected) {
                    this.onclose("io client disconnect");
                  }
                  return this;
                }
              }, {
                'key': "close",
                'value': function () {
                  return this.disconnect();
                }
              }, {
                'key': "compress",
                'value': function (Cp) {
                  this.flags.compress = Cp;
                  return this;
                }
              }, {
                'key': "onAny",
                'value': function (Cp) {
                  this.W = this.W || [];
                  this.W.push(Cp);
                  return this;
                }
              }, {
                'key': "prependAny",
                'value': function (Cp) {
                  this.W = this.W || [];
                  this.W.unshift(Cp);
                  return this;
                }
              }, {
                'key': "offAny",
                'value': function (Cp) {
                  if (!this.W) {
                    return this;
                  }
                  if (Cp) {
                    var CM = this.W;
                    for (var Cb = 0x0; Cb < CM.length; Cb++) {
                      if (Cp === CM[Cb]) {
                        CM.splice(Cb, 0x1);
                        return this;
                      }
                    }
                  } else {
                    this.W = [];
                  }
                  return this;
                }
              }, {
                'key': "listenersAny",
                'value': function () {
                  return this.W || [];
                }
              }, {
                'key': "volatile",
                'get': function () {
                  this.flags.volatile = true;
                  return this;
                }
              }]) {
                (function (Cp, CM) {
                  for (var Cb = 0x0; Cb < CM.length; Cb++) {
                    var Cr = CM[Cb];
                    Cr.enumerable = Cr.enumerable || false;
                    Cr.configurable = true;
                    if ("value" in Cr) {
                      Cr.writable = true;
                    }
                    Object.defineProperty(Cp, Cr.key, Cr);
                  }
                })(Cy.prototype, CZ);
              }
              return Cy;
            }(CO);
            C6.Socket = Cc;
          }, function (C5, C6) {
            function C7(Ca) {
              return (C7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CN) {
                return typeof CN;
              } : function (CN) {
                return CN && "function" == typeof Symbol && CN.constructor === Symbol && CN !== Symbol.prototype ? "symbol" : typeof CN;
              })(Ca);
            }
            Object.defineProperty(C6, "__esModule", {
              'value': true
            });
            C6.hasBinary = C6.isBinary = undefined;
            var C8 = "function" == typeof ArrayBuffer;
            var C9 = Object.prototype.toString;
            var Cv = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === C9.call(Blob);
            var CC = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === C9.call(File);
            function CH(Ca) {
              return C8 && (Ca instanceof ArrayBuffer || function (CN) {
                return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(CN) : CN.buffer instanceof ArrayBuffer;
              }(Ca)) || Cv && Ca instanceof Blob || CC && Ca instanceof File;
            }
            C6.isBinary = CH;
            C6.hasBinary = function Ca(CN, Ck) {
              if (!CN || "object" !== C7(CN)) {
                return false;
              }
              if (Array.isArray(CN)) {
                var Cs = 0x0;
                for (var CO = CN.length; Cs < CO; Cs++) {
                  if (Ca(CN[Cs])) {
                    return true;
                  }
                }
                return false;
              }
              if (CH(CN)) {
                return true;
              }
              if (CN.toJSON && "function" == typeof CN.toJSON && 0x1 === arguments.length) {
                return Ca(CN.toJSON(), true);
              }
              for (var Ci in CN) if (Object.prototype.hasOwnProperty.call(CN, Ci) && Ca(CN[Ci])) {
                return true;
              }
              return false;
            };
          }, function (C5, C6) {
            Object.defineProperty(C6, "__esModule", {
              'value': true
            });
            C6.on = undefined;
            C6.on = function (C7, C8, C9) {
              C7.on(C8, C9);
              return {
                'destroy': function () {
                  C7.removeListener(C8, C9);
                }
              };
            };
          }, function (C5) {
            var C6 = [].slice;
            C5.exports = function (C7, C8) {
              if ("string" == typeof C8) {
                C8 = C7[C8];
              }
              if ("function" != typeof C8) {
                throw Error("bind() requires a function");
              }
              var C9 = C6.call(arguments, 0x2);
              return function () {
                return C8.apply(C7, C9.concat(C6.call(arguments)));
              };
            };
          }, function (C5, C7) {
            function C8(Cs) {
              return (C8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CO) {
                return typeof CO;
              } : function (CO) {
                return CO && "function" == typeof Symbol && CO.constructor === Symbol && CO !== Symbol.prototype ? "symbol" : typeof CO;
              })(Cs);
            }
            Object.defineProperty(Ca, "__esModule", {
              'value': true
            });
            Ca.Socket = Ca.io = Ca.Manager = Ca.protocol = undefined;
            var C9 = C7(0x13);
            var Cv = C7(0x8);
            var CC = C7(0xe);
            Object.defineProperty(Ca, "Socket", {
              'enumerable': true,
              'get': function () {
                return CC.Socket;
              }
            });
            C5.exports = Ca;
            var CH = Ca.managers = {};
            function Ca(Cs, CO) {
              if ("object" === C8(Cs)) {
                CO = Cs;
                Cs = undefined;
              }
              CO = CO || {};
              var Ci;
              var CX = C9.url(Cs);
              var CE = CX.source;
              var Cc = CX.id;
              var CV = CX.path;
              var CZ = CH[Cc] && CV in CH[Cc].nsps;
              if (CO.forceNew || CO["force new connection"] || false === CO.multiplex || CZ) {
                Ci = new Cv.Manager(CE, CO);
              } else {
                if (!CH[Cc]) {
                  CH[Cc] = new Cv.Manager(CE, CO);
                }
                Ci = CH[Cc];
              }
              if (CX.query && !CO.query) {
                CO.query = CX.query;
              }
              return Ci.socket(CX.path, CO);
            }
            Ca.io = Ca;
            var CN = C7(0x6);
            Object.defineProperty(Ca, "protocol", {
              'enumerable': true,
              'get': function () {
                return CN.protocol;
              }
            });
            Ca.connect = Ca;
            var Ck = C7(0x8);
            Object.defineProperty(Ca, "Manager", {
              'enumerable': true,
              'get': function () {
                return Ck.Manager;
              }
            });
          }, function (C5, C6, C7) {
            Object.defineProperty(C6, "__esModule", {
              'value': true
            });
            C6.url = undefined;
            var C8 = C7(0x7);
            C6.url = function (C9, Cv) {
              var CC = C9;
              Cv = Cv || "undefined" != typeof location && location;
              if (null == C9) {
                C9 = Cv.protocol + '//' + Cv.host;
              }
              if ("string" == typeof C9) {
                if ('/' === C9.charAt(0x0)) {
                  C9 = '/' === C9.charAt(0x1) ? Cv.protocol + C9 : Cv.host + C9;
                }
                if (!/^(https?|wss?):\/\//.test(C9)) {
                  C9 = undefined !== Cv ? Cv.protocol + '//' + C9 : "https://" + C9;
                }
                CC = C8(C9);
              }
              if (!CC.port) {
                if (/^(http|ws)$/.test(CC.protocol)) {
                  CC.port = '80';
                } else if (/^(http|ws)s$/.test(CC.protocol)) {
                  CC.port = "443";
                }
              }
              CC.path = CC.path || '/';
              var CH = -0x1 !== CC.host.indexOf(':') ? '[' + CC.host + ']' : CC.host;
              CC.id = CC.protocol + "://" + CH + ':' + CC.port;
              CC.href = CC.protocol + "://" + CH + (Cv && Cv.port === CC.port ? '' : ':' + CC.port);
              return CC;
            };
          }, function (C5, C6, C7) {
            var C8 = C7(0x15);
            C5.exports = function (C9, Cv) {
              return new C8(C9, Cv);
            };
            C5.exports.Socket = C8;
            C5.exports.protocol = C8.protocol;
            C5.exports.Transport = C7(0x4);
            C5.exports.transports = C7(0x9);
            C5.exports.parser = C7(0x1);
          }, function (C5, C6, C7) {
            function C8() {
              return (C8 = Object.assign || function (Cc) {
                for (var CV = 0x1; CV < arguments.length; CV++) {
                  var CZ = arguments[CV];
                  for (var CB in CZ) if (Object.prototype.hasOwnProperty.call(CZ, CB)) {
                    Cc[CB] = CZ[CB];
                  }
                }
                return Cc;
              }).apply(this, arguments);
            }
            function C9(Cc) {
              return (C9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CV) {
                return typeof CV;
              } : function (CV) {
                return CV && "function" == typeof Symbol && CV.constructor === Symbol && CV !== Symbol.prototype ? "symbol" : typeof CV;
              })(Cc);
            }
            function Cv(Cc, CV) {
              if (!(Cc instanceof CV)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function CC(Cc, CV) {
              return (CC = Object.setPrototypeOf || function (CZ, CB) {
                CZ.__proto__ = CB;
                return CZ;
              })(Cc, CV);
            }
            function CH(Cc) {
              var CV = function () {
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
                } catch (CZ) {
                  return false;
                }
              }();
              return function () {
                var CZ;
                var CB = CN(Cc);
                if (CV) {
                  var Cy = CN(this).constructor;
                  CZ = Reflect.construct(CB, arguments, Cy);
                } else {
                  CZ = CB.apply(this, arguments);
                }
                return Ca(this, CZ);
              };
            }
            function Ca(Cc, CV) {
              return !CV || "object" !== C9(CV) && "function" != typeof CV ? function (CZ) {
                if (undefined === CZ) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return CZ;
              }(Cc) : CV;
            }
            function CN(Cc) {
              return (CN = Object.setPrototypeOf ? Object.getPrototypeOf : function (CV) {
                return CV.__proto__ || Object.getPrototypeOf(CV);
              })(Cc);
            }
            var Ck = C7(0x9);
            var Cs = C7(0x0);
            var CO = C7(0x1);
            var Ci = C7(0x7);
            var CX = C7(0x5);
            var CE = function (Cc) {
              !function (Cy, Cp) {
                if ("function" != typeof Cp && null !== Cp) {
                  throw new TypeError("Super expression must either be null or a function");
                }
                Cy.prototype = Object.create(Cp && Cp.prototype, {
                  'constructor': {
                    'value': Cy,
                    'writable': true,
                    'configurable': true
                  }
                });
                if (Cp) {
                  CC(Cy, Cp);
                }
              }(CB, Cc);
              var CV;
              var CZ = CH(CB);
              function CB(Cy) {
                var Cp;
                var CM = arguments.length > 0x1 && undefined !== arguments[0x1] ? arguments[0x1] : {};
                Cv(this, CB);
                Cp = CZ.call(this);
                if (Cy && "object" === C9(Cy)) {
                  CM = Cy;
                  Cy = null;
                }
                if (Cy) {
                  Cy = Ci(Cy);
                  CM.hostname = Cy.host;
                  CM.secure = "https" === Cy.protocol || "wss" === Cy.protocol;
                  CM.port = Cy.port;
                  if (Cy.query) {
                    CM.query = Cy.query;
                  }
                } else if (CM.host) {
                  CM.hostname = Ci(CM.host).host;
                }
                Cp.secure = null != CM.secure ? CM.secure : "undefined" != typeof location && "https:" === location.protocol;
                if (CM.hostname && !CM.port) {
                  CM.port = Cp.secure ? "443" : '80';
                }
                Cp.hostname = CM.hostname || ("undefined" != typeof location ? location.hostname : "localhost");
                Cp.port = CM.port || ("undefined" != typeof location && location.port ? location.port : Cp.secure ? 0x1bb : 0x50);
                Cp.transports = CM.transports || ["polling", "websocket"];
                Cp.readyState = '';
                Cp.writeBuffer = [];
                Cp.prevBufferLen = 0x0;
                Cp.opts = C8({
                  'path': "/engine.io",
                  'agent': false,
                  'withCredentials': false,
                  'upgrade': true,
                  'jsonp': true,
                  'timestampParam': 't',
                  'policyPort': 0x34b,
                  'rememberUpgrade': false,
                  'rejectUnauthorized': true,
                  'perMessageDeflate': {
                    'threshold': 0x400
                  },
                  'transportOptions': {}
                }, CM);
                Cp.opts.path = Cp.opts.path.replace(/\/$/, '') + '/';
                if ("string" == typeof Cp.opts.query) {
                  Cp.opts.query = CX.decode(Cp.opts.query);
                }
                Cp.id = null;
                Cp.upgrades = null;
                Cp.pingInterval = null;
                Cp.pingTimeout = null;
                Cp.pingTimeoutTimer = null;
                Cp.open();
                return Cp;
              }
              if (CV = [{
                'key': "createTransport",
                'value': function (Cy) {
                  var Cp = function (Cb) {
                    var Cr = {};
                    for (var CL in Cb) if (Cb.hasOwnProperty(CL)) {
                      Cr[CL] = Cb[CL];
                    }
                    return Cr;
                  }(this.opts.query);
                  Cp.EIO = CO.protocol;
                  Cp.transport = Cy;
                  if (this.id) {
                    Cp.sid = this.id;
                  }
                  var CM = C8({}, this.opts.transportOptions[Cy], this.opts, {
                    'query': Cp,
                    'socket': this,
                    'hostname': this.hostname,
                    'secure': this.secure,
                    'port': this.port
                  });
                  return new Ck[Cy](CM);
                }
              }, {
                'key': "open",
                'value': function () {
                  var Cy;
                  if (this.opts.rememberUpgrade && CB.priorWebsocketSuccess && -0x1 !== this.transports.indexOf("websocket")) {
                    Cy = "websocket";
                  } else {
                    if (0x0 === this.transports.length) {
                      var Cp = this;
                      return void setTimeout(function () {
                        Cp.emit("error", "No transports available");
                      }, 0x0);
                    }
                    Cy = this.transports[0x0];
                  }
                  this.readyState = "opening";
                  try {
                    Cy = this.createTransport(Cy);
                  } catch (CM) {
                    this.transports.shift();
                    return void this.open();
                  }
                  Cy.open();
                  this.setTransport(Cy);
                }
              }, {
                'key': "setTransport",
                'value': function (Cy) {
                  var Cp = this;
                  if (this.transport) {
                    this.transport.removeAllListeners();
                  }
                  this.transport = Cy;
                  Cy.on("drain", function () {
                    Cp.onDrain();
                  }).on("packet", function (CM) {
                    Cp.onPacket(CM);
                  }).on("error", function (CM) {
                    Cp.onError(CM);
                  }).on("close", function () {
                    Cp.onClose("transport close");
                  });
                }
              }, {
                'key': "probe",
                'value': function (Cy) {
                  var Cp = this.createTransport(Cy, {
                    'probe': 0x1
                  });
                  var CM = false;
                  var Cb = this;
                  function Cr() {
                    if (Cb.onlyBinaryUpgrades) {
                      var Cl = !this.supportsBinary && Cb.transport.supportsBinary;
                      CM = CM || Cl;
                    }
                    if (!CM) {
                      Cp.send([{
                        'type': "ping",
                        'data': "probe"
                      }]);
                      Cp.once("packet", function (Cg) {
                        if (!CM) {
                          if ("pong" === Cg.type && "probe" === Cg.data) {
                            Cb.upgrading = true;
                            Cb.emit("upgrading", Cp);
                            if (!Cp) {
                              return;
                            }
                            CB.priorWebsocketSuccess = "websocket" === Cp.name;
                            Cb.transport.pause(function () {
                              if (!CM) {
                                if ("closed" !== Cb.readyState) {
                                  CK();
                                  Cb.setTransport(Cp);
                                  Cp.send([{
                                    'type': "upgrade"
                                  }]);
                                  Cb.emit("upgrade", Cp);
                                  Cp = null;
                                  Cb.upgrading = false;
                                  Cb.flush();
                                }
                              }
                            });
                          } else {
                            var CS = Error("probe error");
                            CS.transport = Cp.name;
                            Cb.emit("upgradeError", CS);
                          }
                        }
                      });
                    }
                  }
                  function CL() {
                    if (!CM) {
                      CM = true;
                      CK();
                      Cp.close();
                      Cp = null;
                    }
                  }
                  function Ch(Cl) {
                    var Cg = Error("probe error: " + Cl);
                    Cg.transport = Cp.name;
                    CL();
                    Cb.emit("upgradeError", Cg);
                  }
                  function CY() {
                    Ch("transport closed");
                  }
                  function CA() {
                    Ch("socket closed");
                  }
                  function CW(Cl) {
                    if (Cp && Cl.name !== Cp.name) {
                      CL();
                    }
                  }
                  function CK() {
                    Cp.removeListener("open", Cr);
                    Cp.removeListener("error", Ch);
                    Cp.removeListener("close", CY);
                    Cb.removeListener("close", CA);
                    Cb.removeListener("upgrading", CW);
                  }
                  CB.priorWebsocketSuccess = false;
                  Cp.once("open", Cr);
                  Cp.once("error", Ch);
                  Cp.once("close", CY);
                  this.once("close", CA);
                  this.once("upgrading", CW);
                  Cp.open();
                }
              }, {
                'key': "onOpen",
                'value': function () {
                  this.readyState = "open";
                  CB.priorWebsocketSuccess = "websocket" === this.transport.name;
                  this.emit("open");
                  this.flush();
                  if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
                    var Cy = 0x0;
                    for (var Cp = this.upgrades.length; Cy < Cp; Cy++) {
                      this.probe(this.upgrades[Cy]);
                    }
                  }
                }
              }, {
                'key': "onPacket",
                'value': function (Cy) {
                  if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                    this.emit("packet", Cy);
                    this.emit("heartbeat");
                    switch (Cy.type) {
                      case "open":
                        this.onHandshake(JSON.parse(Cy.data));
                        break;
                      case "ping":
                        this.resetPingTimeout();
                        this.sendPacket("pong");
                        this.emit("pong");
                        break;
                      case "error":
                        var Cp = Error("server error");
                        Cp.code = Cy.data;
                        this.onError(Cp);
                        break;
                      case "message":
                        this.emit("data", Cy.data);
                        this.emit("message", Cy.data);
                    }
                  }
                }
              }, {
                'key': "onHandshake",
                'value': function (Cy) {
                  this.emit("handshake", Cy);
                  this.id = Cy.sid;
                  this.transport.query.sid = Cy.sid;
                  this.upgrades = this.filterUpgrades(Cy.upgrades);
                  this.pingInterval = Cy.pingInterval;
                  this.pingTimeout = Cy.pingTimeout;
                  this.onOpen();
                  if ("closed" !== this.readyState) {
                    this.resetPingTimeout();
                  }
                }
              }, {
                'key': "resetPingTimeout",
                'value': function () {
                  var Cy = this;
                  clearTimeout(this.pingTimeoutTimer);
                  this.pingTimeoutTimer = setTimeout(function () {
                    Cy.onClose("ping timeout");
                  }, this.pingInterval + this.pingTimeout);
                }
              }, {
                'key': "onDrain",
                'value': function () {
                  this.writeBuffer.splice(0x0, this.prevBufferLen);
                  this.prevBufferLen = 0x0;
                  if (0x0 === this.writeBuffer.length) {
                    this.emit("drain");
                  } else {
                    this.flush();
                  }
                }
              }, {
                'key': "flush",
                'value': function () {
                  if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                    this.transport.send(this.writeBuffer);
                    this.prevBufferLen = this.writeBuffer.length;
                    this.emit("flush");
                  }
                }
              }, {
                'key': "write",
                'value': function (Cy, Cp, CM) {
                  this.sendPacket("message", Cy, Cp, CM);
                  return this;
                }
              }, {
                'key': "send",
                'value': function (Cy, Cp, CM) {
                  this.sendPacket("message", Cy, Cp, CM);
                  return this;
                }
              }, {
                'key': "sendPacket",
                'value': function (Cy, Cp, CM, Cb) {
                  if ("function" == typeof Cp) {
                    Cb = Cp;
                    Cp = undefined;
                  }
                  if ("function" == typeof CM) {
                    Cb = CM;
                    CM = null;
                  }
                  if ("closing" !== this.readyState && "closed" !== this.readyState) {
                    (CM = CM || {}).compress = false !== CM.compress;
                    var Cr = {
                      'type': Cy,
                      'data': Cp,
                      'options': CM
                    };
                    this.emit("packetCreate", Cr);
                    this.writeBuffer.push(Cr);
                    if (Cb) {
                      this.once("flush", Cb);
                    }
                    this.flush();
                  }
                }
              }, {
                'key': "close",
                'value': function () {
                  var Cy = this;
                  function Cp() {
                    Cy.onClose("forced close");
                    Cy.transport.close();
                  }
                  function CM() {
                    Cy.removeListener("upgrade", CM);
                    Cy.removeListener("upgradeError", CM);
                    Cp();
                  }
                  function Cb() {
                    Cy.once("upgrade", CM);
                    Cy.once("upgradeError", CM);
                  }
                  if (!("opening" !== this.readyState && "open" !== this.readyState)) {
                    this.readyState = "closing";
                    if (this.writeBuffer.length) {
                      this.once("drain", function () {
                        if (this.upgrading) {
                          Cb();
                        } else {
                          Cp();
                        }
                      });
                    } else if (this.upgrading) {
                      Cb();
                    } else {
                      Cp();
                    }
                  }
                  return this;
                }
              }, {
                'key': "onError",
                'value': function (Cy) {
                  CB.priorWebsocketSuccess = false;
                  this.emit("error", Cy);
                  this.onClose("transport error", Cy);
                }
              }, {
                'key': "onClose",
                'value': function (Cy, Cp) {
                  if (!("opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState)) {
                    clearTimeout(this.pingIntervalTimer);
                    clearTimeout(this.pingTimeoutTimer);
                    this.transport.removeAllListeners("close");
                    this.transport.close();
                    this.transport.removeAllListeners();
                    this.readyState = "closed";
                    this.id = null;
                    this.emit("close", Cy, Cp);
                    this.writeBuffer = [];
                    this.prevBufferLen = 0x0;
                  }
                }
              }, {
                'key': "filterUpgrades",
                'value': function (Cy) {
                  var Cp = [];
                  var CM = 0x0;
                  for (var Cb = Cy.length; CM < Cb; CM++) {
                    if (~this.transports.indexOf(Cy[CM])) {
                      Cp.push(Cy[CM]);
                    }
                  }
                  return Cp;
                }
              }]) {
                (function (Cy, Cp) {
                  for (var CM = 0x0; CM < Cp.length; CM++) {
                    var Cb = Cp[CM];
                    Cb.enumerable = Cb.enumerable || false;
                    Cb.configurable = true;
                    if ("value" in Cb) {
                      Cb.writable = true;
                    }
                    Object.defineProperty(Cy, Cb.key, Cb);
                  }
                })(CB.prototype, CV);
              }
              return CB;
            }(Cs);
            CE.priorWebsocketSuccess = false;
            CE.protocol = CO.protocol;
            C5.exports = CE;
          }, function (C5) {
            try {
              C5.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
            } catch (C6) {
              C5.exports = false;
            }
          }, function (C5, C6, C7) {
            function C8(Cb) {
              return (C8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Cr) {
                return typeof Cr;
              } : function (Cr) {
                return Cr && "function" == typeof Symbol && Cr.constructor === Symbol && Cr !== Symbol.prototype ? "symbol" : typeof Cr;
              })(Cb);
            }
            function C9() {
              return (C9 = Object.assign || function (Cb) {
                for (var Cr = 0x1; Cr < arguments.length; Cr++) {
                  var CL = arguments[Cr];
                  for (var Ch in CL) if (Object.prototype.hasOwnProperty.call(CL, Ch)) {
                    Cb[Ch] = CL[Ch];
                  }
                }
                return Cb;
              }).apply(this, arguments);
            }
            function Cv(Cb, Cr) {
              if (!(Cb instanceof Cr)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            function CC(Cb, Cr) {
              for (var CL = 0x0; CL < Cr.length; CL++) {
                var Ch = Cr[CL];
                Ch.enumerable = Ch.enumerable || false;
                Ch.configurable = true;
                if ("value" in Ch) {
                  Ch.writable = true;
                }
                Object.defineProperty(Cb, Ch.key, Ch);
              }
            }
            function CH(Cb, Cr, CL) {
              if (Cr) {
                CC(Cb.prototype, Cr);
              }
              if (CL) {
                CC(Cb, CL);
              }
              return Cb;
            }
            function Ca(Cb, Cr) {
              if ("function" != typeof Cr && null !== Cr) {
                throw new TypeError("Super expression must either be null or a function");
              }
              Cb.prototype = Object.create(Cr && Cr.prototype, {
                'constructor': {
                  'value': Cb,
                  'writable': true,
                  'configurable': true
                }
              });
              if (Cr) {
                CN(Cb, Cr);
              }
            }
            function CN(Cb, Cr) {
              return (CN = Object.setPrototypeOf || function (CL, Ch) {
                CL.__proto__ = Ch;
                return CL;
              })(Cb, Cr);
            }
            function Ck(Cb) {
              var Cr = function () {
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
                } catch (CL) {
                  return false;
                }
              }();
              return function () {
                var CL;
                var Ch = CO(Cb);
                if (Cr) {
                  var CY = CO(this).constructor;
                  CL = Reflect.construct(Ch, arguments, CY);
                } else {
                  CL = Ch.apply(this, arguments);
                }
                return Cs(this, CL);
              };
            }
            function Cs(Cb, Cr) {
              return !Cr || "object" !== C8(Cr) && "function" != typeof Cr ? function (CL) {
                if (undefined === CL) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return CL;
              }(Cb) : Cr;
            }
            function CO(Cb) {
              return (CO = Object.setPrototypeOf ? Object.getPrototypeOf : function (Cr) {
                return Cr.__proto__ || Object.getPrototypeOf(Cr);
              })(Cb);
            }
            var Ci = C7(0x3);
            var CX = C7(0xa);
            var CE = C7(0x0);
            var Cc = C7(0xd).pick;
            var CV = C7(0x2);
            function CZ() {}
            var CB = null != new (C7(0x3))({
              'xdomain': false
            }).responseType;
            var Cy = function (Cb) {
              Ca(CL, Cb);
              var Cr = Ck(CL);
              function CL(Ch) {
                var CY;
                Cv(this, CL);
                CY = Cr.call(this, Ch);
                if ("undefined" != typeof location) {
                  var CA = "https:" === location.protocol;
                  var CW = location.port;
                  if (!CW) {
                    CW = CA ? 0x1bb : 0x50;
                  }
                  CY.xd = "undefined" != typeof location && Ch.hostname !== location.hostname || CW !== Ch.port;
                  CY.xs = Ch.secure !== CA;
                }
                var CK = Ch && Ch.forceBase64;
                CY.supportsBinary = CB && !CK;
                return CY;
              }
              CH(CL, [{
                'key': "request",
                'value': function () {
                  var Ch = arguments.length > 0x0 && undefined !== arguments[0x0] ? arguments[0x0] : {};
                  C9(Ch, {
                    'xd': this.xd,
                    'xs': this.xs
                  }, this.opts);
                  return new Cp(this.uri(), Ch);
                }
              }, {
                'key': "doWrite",
                'value': function (Ch, CY) {
                  var CA = this.request({
                    'method': "POST",
                    'data': Ch
                  });
                  var CW = this;
                  CA.on("success", CY);
                  CA.on("error", function (CK) {
                    CW.onError("xhr post error", CK);
                  });
                }
              }, {
                'key': "doPoll",
                'value': function () {
                  var Ch = this.request();
                  var CY = this;
                  Ch.on("data", function (CA) {
                    CY.onData(CA);
                  });
                  Ch.on("error", function (CA) {
                    CY.onError("xhr poll error", CA);
                  });
                  this.pollXhr = Ch;
                }
              }]);
              return CL;
            }(CX);
            var Cp = function (Cb) {
              Ca(CL, Cb);
              var Cr = Ck(CL);
              function CL(Ch, CY) {
                var CA;
                Cv(this, CL);
                (CA = Cr.call(this)).opts = CY;
                CA.method = CY.method || "GET";
                CA.uri = Ch;
                CA.async = false !== CY.async;
                CA.data = undefined !== CY.data ? CY.data : null;
                CA.create();
                return CA;
              }
              CH(CL, [{
                'key': "create",
                'value': function () {
                  var Ch = Cc(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", 'ca', "ciphers", "rejectUnauthorized");
                  Ch.xdomain = !!this.opts.xd;
                  Ch.xscheme = !!this.opts.xs;
                  var CY = this.xhr = new Ci(Ch);
                  var CA = this;
                  try {
                    CY.open(this.method, this.uri, this.async);
                    try {
                      if (this.opts.extraHeaders) {
                        if (CY.setDisableHeaderCheck) {
                          CY.setDisableHeaderCheck(true);
                        }
                        for (var CW in this.opts.extraHeaders) if (this.opts.extraHeaders.hasOwnProperty(CW)) {
                          CY.setRequestHeader(CW, this.opts.extraHeaders[CW]);
                        }
                      }
                    } catch (CK) {}
                    if ("POST" === this.method) {
                      try {
                        CY.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                      } catch (Cl) {}
                    }
                    try {
                      CY.setRequestHeader("Accept", "*/*");
                    } catch (Cg) {}
                    if ("withCredentials" in CY) {
                      CY.withCredentials = this.opts.withCredentials;
                    }
                    if (this.opts.requestTimeout) {
                      CY.timeout = this.opts.requestTimeout;
                    }
                    if (this.hasXDR()) {
                      CY.onload = function () {
                        CA.onLoad();
                      };
                      CY.onerror = function () {
                        CA.onError(CY.responseText);
                      };
                    } else {
                      CY.onreadystatechange = function () {
                        if (0x4 === CY.readyState) {
                          if (0xc8 === CY.status || 0x4c7 === CY.status) {
                            CA.onLoad();
                          } else {
                            setTimeout(function () {
                              CA.onError("number" == typeof CY.status ? CY.status : 0x0);
                            }, 0x0);
                          }
                        }
                      };
                    }
                    CY.send(this.data);
                  } catch (CS) {
                    return void setTimeout(function () {
                      CA.onError(CS);
                    }, 0x0);
                  }
                  if ("undefined" != typeof document) {
                    this.index = CL.requestsCount++;
                    CL.requests[this.index] = this;
                  }
                }
              }, {
                'key': "onSuccess",
                'value': function () {
                  this.emit("success");
                  this.cleanup();
                }
              }, {
                'key': "onData",
                'value': function (Ch) {
                  this.emit("data", Ch);
                  this.onSuccess();
                }
              }, {
                'key': "onError",
                'value': function (Ch) {
                  this.emit("error", Ch);
                  this.cleanup(true);
                }
              }, {
                'key': "cleanup",
                'value': function (Ch) {
                  if (undefined !== this.xhr && null !== this.xhr) {
                    if (this.hasXDR()) {
                      this.xhr.onload = this.xhr.onerror = CZ;
                    } else {
                      this.xhr.onreadystatechange = CZ;
                    }
                    if (Ch) {
                      try {
                        this.xhr.abort();
                      } catch (CY) {}
                    }
                    if ("undefined" != typeof document) {
                      delete CL.requests[this.index];
                    }
                    this.xhr = null;
                  }
                }
              }, {
                'key': "onLoad",
                'value': function () {
                  var Ch = this.xhr.responseText;
                  if (null !== Ch) {
                    this.onData(Ch);
                  }
                }
              }, {
                'key': "hasXDR",
                'value': function () {
                  return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR;
                }
              }, {
                'key': "abort",
                'value': function () {
                  this.cleanup();
                }
              }]);
              return CL;
            }(CE);
            function CM() {
              for (var Cb in Cp.requests) if (Cp.requests.hasOwnProperty(Cb)) {
                Cp.requests[Cb].abort();
              }
            }
            Cp.requestsCount = 0x0;
            Cp.requests = {};
            if ("undefined" != typeof document) {
              if ("function" == typeof attachEvent) {
                attachEvent("onunload", CM);
              } else if ("function" == typeof addEventListener) {
                addEventListener("onpagehide" in CV ? "pagehide" : "unload", CM, false);
              }
            }
            C5.exports = Cy;
            C5.exports.Request = Cp;
          }, function (C5, C6, C7) {
            var C8 = C7(0xb).PACKET_TYPES;
            var C9 = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob);
            var Cv = "function" == typeof ArrayBuffer;
            var CC = function (CH, Ca) {
              var CN = new FileReader();
              CN.onload = function () {
                var Ck = CN.result.split(',')[0x1];
                Ca('b' + Ck);
              };
              return CN.readAsDataURL(CH);
            };
            C5.exports = function (CH, Ca, CN) {
              var Ck;
              var Cs = CH.type;
              var CO = CH.data;
              return C9 && CO instanceof Blob ? Ca ? CN(CO) : CC(CO, CN) : Cv && (CO instanceof ArrayBuffer || (Ck = CO, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(Ck) : Ck && Ck.buffer instanceof ArrayBuffer)) ? Ca ? CN(CO instanceof ArrayBuffer ? CO : CO.buffer) : CC(new Blob([CO]), CN) : CN(C8[Cs] + (CO || ''));
            };
          }, function (C5, C6, C7) {
            var C8;
            var C9 = C7(0xb);
            var Cv = C9.PACKET_TYPES_REVERSE;
            var CC = C9.ERROR_PACKET;
            if ("function" == typeof ArrayBuffer) {
              C8 = C7(0x1a);
            }
            var CH = function (CN, Ck) {
              if (C8) {
                var Cs = C8.decode(CN);
                return "blob" === Ck && Cs instanceof ArrayBuffer ? new Blob([Cs]) : Cs;
              }
              return {
                'base64': true,
                'data': CN
              };
            };
            C5.exports = function (CN, Ck) {
              if ("string" != typeof CN) {
                return {
                  'type': "message",
                  'data': "blob" === Ck && CN instanceof ArrayBuffer ? new Blob([CN]) : CN
                };
              }
              var Cs = CN.charAt(0x0);
              return 'b' === Cs ? {
                'type': "message",
                'data': CH(CN.substring(0x1), Ck)
              } : Cv[Cs] ? CN.length > 0x1 ? {
                'type': Cv[Cs],
                'data': CN.substring(0x1)
              } : {
                'type': Cv[Cs]
              } : CC;
            };
          }, function (C5, C6) {
            !function () {
              var C8 = new Uint8Array(0x100);
              for (var C9 = 0x0; C9 < 0x40; C9++) {
                C8["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(C9)] = C9;
              }
              C6.encode = function (Cv) {
                var CC;
                var CH = new Uint8Array(Cv);
                var Ca = CH.length;
                var CN = '';
                for (CC = 0x0; CC < Ca; CC += 0x3) {
                  CN += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[CH[CC] >> 0x2];
                  CN += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(0x3 & CH[CC]) << 0x4 | CH[CC + 0x1] >> 0x4];
                  CN += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(0xf & CH[CC + 0x1]) << 0x2 | CH[CC + 0x2] >> 0x6];
                  CN += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[0x3f & CH[CC + 0x2]];
                }
                if (Ca % 0x3 == 0x2) {
                  CN = CN.substring(0x0, CN.length - 0x1) + '=';
                } else if (Ca % 0x3 == 0x1) {
                  CN = CN.substring(0x0, CN.length - 0x2) + '==';
                }
                return CN;
              };
              C6.decode = function (Cv) {
                var CC;
                var CH;
                var Ca;
                var CN;
                var Ck;
                var Cs = 0.75 * Cv.length;
                var CO = Cv.length;
                var Ci = 0x0;
                if ('=' === Cv[Cv.length - 0x1]) {
                  Cs--;
                  if ('=' === Cv[Cv.length - 0x2]) {
                    Cs--;
                  }
                }
                var CX = new ArrayBuffer(Cs);
                var CE = new Uint8Array(CX);
                for (CC = 0x0; CC < CO; CC += 0x4) {
                  CH = C8[Cv.charCodeAt(CC)];
                  Ca = C8[Cv.charCodeAt(CC + 0x1)];
                  CN = C8[Cv.charCodeAt(CC + 0x2)];
                  Ck = C8[Cv.charCodeAt(CC + 0x3)];
                  CE[Ci++] = CH << 0x2 | Ca >> 0x4;
                  CE[Ci++] = (0xf & Ca) << 0x4 | CN >> 0x2;
                  CE[Ci++] = (0x3 & CN) << 0x6 | 0x3f & Ck;
                }
                return CX;
              };
            }();
          }, function (C5, C6, C7) {
            function C8(CV) {
              return (C8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CZ) {
                return typeof CZ;
              } : function (CZ) {
                return CZ && "function" == typeof Symbol && CZ.constructor === Symbol && CZ !== Symbol.prototype ? "symbol" : typeof CZ;
              })(CV);
            }
            function C9(CV, CZ, CB) {
              return (C9 = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (Cy, Cp, CM) {
                var Cb = function (CL, Ch) {
                  for (; !Object.prototype.hasOwnProperty.call(CL, Ch) && null !== (CL = CN(CL));) {
                    ;
                  }
                  return CL;
                }(Cy, Cp);
                if (Cb) {
                  var Cr = Object.getOwnPropertyDescriptor(Cb, Cp);
                  return Cr.get ? Cr.get.call(CM) : Cr.value;
                }
              })(CV, CZ, CB || CV);
            }
            function Cv(CV, CZ) {
              return (Cv = Object.setPrototypeOf || function (CB, Cy) {
                CB.__proto__ = Cy;
                return CB;
              })(CV, CZ);
            }
            function CC(CV) {
              var CZ = function () {
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
                } catch (CB) {
                  return false;
                }
              }();
              return function () {
                var CB;
                var Cy = CN(CV);
                if (CZ) {
                  var Cp = CN(this).constructor;
                  CB = Reflect.construct(Cy, arguments, Cp);
                } else {
                  CB = Cy.apply(this, arguments);
                }
                return !CB || "object" !== C8(CB) && "function" != typeof CB ? Ca(this) : CB;
              };
            }
            function Ca(CV) {
              if (undefined === CV) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return CV;
            }
            function CN(CV) {
              return (CN = Object.setPrototypeOf ? Object.getPrototypeOf : function (CZ) {
                return CZ.__proto__ || Object.getPrototypeOf(CZ);
              })(CV);
            }
            var Ck;
            var Cs = C7(0xa);
            var CO = C7(0x2);
            var Ci = /\n/g;
            var CX = /\\n/g;
            function CE() {}
            var Cc = function (CV) {
              !function (Cp, CM) {
                if ("function" != typeof CM && null !== CM) {
                  throw new TypeError("Super expression must either be null or a function");
                }
                Cp.prototype = Object.create(CM && CM.prototype, {
                  'constructor': {
                    'value': Cp,
                    'writable': true,
                    'configurable': true
                  }
                });
                if (CM) {
                  Cv(Cp, CM);
                }
              }(Cy, CV);
              var CZ;
              var CB = CC(Cy);
              function Cy(Cp) {
                var CM;
                !function (Cr, CL) {
                  if (!(Cr instanceof CL)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                }(this, Cy);
                (CM = CB.call(this, Cp)).query = CM.query || {};
                if (!Ck) {
                  Ck = CO.___eio = CO.___eio || [];
                }
                CM.index = Ck.length;
                var Cb = Ca(CM);
                Ck.push(function (Cr) {
                  Cb.onData(Cr);
                });
                CM.query.j = CM.index;
                if ("function" == typeof addEventListener) {
                  addEventListener("beforeunload", function () {
                    if (Cb.script) {
                      Cb.script.onerror = CE;
                    }
                  }, false);
                }
                return CM;
              }
              if (CZ = [{
                'key': "doClose",
                'value': function () {
                  if (this.script) {
                    this.script.parentNode.removeChild(this.script);
                    this.script = null;
                  }
                  if (this.form) {
                    this.form.parentNode.removeChild(this.form);
                    this.form = null;
                    this.iframe = null;
                  }
                  C9(CN(Cy.prototype), "doClose", this).call(this);
                }
              }, {
                'key': "doPoll",
                'value': function () {
                  var Cp = this;
                  var CM = document.createElement("script");
                  if (this.script) {
                    this.script.parentNode.removeChild(this.script);
                    this.script = null;
                  }
                  CM.async = true;
                  CM.src = this.uri();
                  CM.onerror = function (Cr) {
                    Cp.onError("jsonp poll error", Cr);
                  };
                  var Cb = document.getElementsByTagName("script")[0x0];
                  if (Cb) {
                    Cb.parentNode.insertBefore(CM, Cb);
                  } else {
                    (document.head || document.body).appendChild(CM);
                  }
                  this.script = CM;
                  if ("undefined" != typeof navigator && /gecko/i.test(navigator.userAgent)) {
                    setTimeout(function () {
                      var Cr = document.createElement("iframe");
                      document.body.appendChild(Cr);
                      document.body.removeChild(Cr);
                    }, 0x64);
                  }
                }
              }, {
                'key': "doWrite",
                'value': function (Cp, CM) {
                  var Cb;
                  var Cr = this;
                  if (!this.form) {
                    var CL = document.createElement("form");
                    var Ch = document.createElement("textarea");
                    var CY = this.iframeId = "eio_iframe_" + this.index;
                    CL.className = "socketio";
                    CL.style.position = "absolute";
                    CL.style.top = "-1000px";
                    CL.style.left = "-1000px";
                    CL.target = CY;
                    CL.method = "POST";
                    CL.setAttribute("accept-charset", "utf-8");
                    Ch.name = 'd';
                    CL.appendChild(Ch);
                    document.body.appendChild(CL);
                    this.form = CL;
                    this.area = Ch;
                  }
                  function CA() {
                    CW();
                    CM();
                  }
                  function CW() {
                    if (Cr.iframe) {
                      try {
                        Cr.form.removeChild(Cr.iframe);
                      } catch (Cl) {
                        Cr.onError("jsonp polling iframe removal error", Cl);
                      }
                    }
                    try {
                      var CK = "<iframe src=\"javascript:0\" name=\"" + Cr.iframeId + "\">";
                      Cb = document.createElement(CK);
                    } catch (Cg) {
                      (Cb = document.createElement("iframe")).name = Cr.iframeId;
                      Cb.src = "javascript:0";
                    }
                    Cb.id = Cr.iframeId;
                    Cr.form.appendChild(Cb);
                    Cr.iframe = Cb;
                  }
                  this.form.action = this.uri();
                  CW();
                  Cp = Cp.replace(CX, "\\\n");
                  this.area.value = Cp.replace(Ci, "\\n");
                  try {
                    this.form.submit();
                  } catch (CK) {}
                  if (this.iframe.attachEvent) {
                    this.iframe.onreadystatechange = function () {
                      if ("complete" === Cr.iframe.readyState) {
                        CA();
                      }
                    };
                  } else {
                    this.iframe.onload = CA;
                  }
                }
              }, {
                'key': "supportsBinary",
                'get': function () {
                  return false;
                }
              }]) {
                (function (Cp, CM) {
                  for (var Cb = 0x0; Cb < CM.length; Cb++) {
                    var Cr = CM[Cb];
                    Cr.enumerable = Cr.enumerable || false;
                    Cr.configurable = true;
                    if ("value" in Cr) {
                      Cr.writable = true;
                    }
                    Object.defineProperty(Cp, Cr.key, Cr);
                  }
                })(Cy.prototype, CZ);
              }
              return Cy;
            }(Cs);
            C5.exports = Cc;
          }, function (C5, C6, C7) {
            function C8(CB) {
              return (C8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Cy) {
                return typeof Cy;
              } : function (Cy) {
                return Cy && "function" == typeof Symbol && Cy.constructor === Symbol && Cy !== Symbol.prototype ? "symbol" : typeof Cy;
              })(CB);
            }
            function C9(CB, Cy) {
              return (C9 = Object.setPrototypeOf || function (Cp, CM) {
                Cp.__proto__ = CM;
                return Cp;
              })(CB, Cy);
            }
            function Cv(CB) {
              var Cy = function () {
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
                } catch (Cp) {
                  return false;
                }
              }();
              return function () {
                var Cp;
                var CM = CH(CB);
                if (Cy) {
                  var Cb = CH(this).constructor;
                  Cp = Reflect.construct(CM, arguments, Cb);
                } else {
                  Cp = CM.apply(this, arguments);
                }
                return CC(this, Cp);
              };
            }
            function CC(CB, Cy) {
              return !Cy || "object" !== C8(Cy) && "function" != typeof Cy ? function (Cp) {
                if (undefined === Cp) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return Cp;
              }(CB) : Cy;
            }
            function CH(CB) {
              return (CH = Object.setPrototypeOf ? Object.getPrototypeOf : function (Cy) {
                return Cy.__proto__ || Object.getPrototypeOf(Cy);
              })(CB);
            }
            var Ca = C7(0x4);
            var CN = C7(0x1);
            var Ck = C7(0x5);
            var Cs = C7(0xc);
            var CO = C7(0xd).pick;
            var Ci = C7(0x1d);
            var CX = Ci.WebSocket;
            var CE = Ci.usingBrowserWebSocket;
            var Cc = Ci.defaultBinaryType;
            var CV = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
            var CZ = function (CB) {
              !function (Cb, Cr) {
                if ("function" != typeof Cr && null !== Cr) {
                  throw new TypeError("Super expression must either be null or a function");
                }
                Cb.prototype = Object.create(Cr && Cr.prototype, {
                  'constructor': {
                    'value': Cb,
                    'writable': true,
                    'configurable': true
                  }
                });
                if (Cr) {
                  C9(Cb, Cr);
                }
              }(CM, CB);
              var Cy;
              var Cp = Cv(CM);
              function CM(Cb) {
                var Cr;
                (function (CL, Ch) {
                  if (!(CL instanceof Ch)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                })(this, CM);
                (Cr = Cp.call(this, Cb)).supportsBinary = !Cb.forceBase64;
                return Cr;
              }
              if (Cy = [{
                'key': "doOpen",
                'value': function () {
                  if (this.check()) {
                    var Cb = this.uri();
                    var Cr = this.opts.protocols;
                    var CL = CV ? {} : CO(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", 'ca', "ciphers", "rejectUnauthorized", "localAddress");
                    if (this.opts.extraHeaders) {
                      CL.headers = this.opts.extraHeaders;
                    }
                    try {
                      this.ws = CE && !CV ? Cr ? new CX(Cb, Cr) : new CX(Cb) : new CX(Cb, Cr, CL);
                    } catch (Ch) {
                      return this.emit("error", Ch);
                    }
                    this.ws.binaryType = this.socket.binaryType || Cc;
                    this.addEventListeners();
                  }
                }
              }, {
                'key': "addEventListeners",
                'value': function () {
                  var Cb = this;
                  this.ws.onopen = function () {
                    Cb.onOpen();
                  };
                  this.ws.onclose = function () {
                    Cb.onClose();
                  };
                  this.ws.onmessage = function (Cr) {
                    Cb.onData(Cr.data);
                  };
                  this.ws.onerror = function (Cr) {
                    Cb.onError("websocket error", Cr);
                  };
                }
              }, {
                'key': "write",
                'value': function (Cb) {
                  var Cr = this;
                  this.writable = false;
                  var CL = Cb.length;
                  var Ch = 0x0;
                  for (var CY = CL; Ch < CY; Ch++) {
                    !function (CA) {
                      CN.encodePacket(CA, Cr.supportsBinary, function (CW) {
                        var CK = {};
                        if (!CE) {
                          if (CA.options) {
                            CK.compress = CA.options.compress;
                          }
                          if (Cr.opts.perMessageDeflate && ("string" == typeof CW ? Buffer.byteLength(CW) : CW.length) < Cr.opts.perMessageDeflate.threshold) {
                            CK.compress = false;
                          }
                        }
                        try {
                          if (CE) {
                            Cr.ws.send(CW);
                          } else {
                            Cr.ws.send(CW, CK);
                          }
                        } catch (Cl) {}
                        if (! --CL) {
                          Cr.emit("flush");
                          setTimeout(function () {
                            Cr.writable = true;
                            Cr.emit("drain");
                          }, 0x0);
                        }
                      });
                    }(Cb[Ch]);
                  }
                }
              }, {
                'key': "onClose",
                'value': function () {
                  Ca.prototype.onClose.call(this);
                }
              }, {
                'key': "doClose",
                'value': function () {
                  if (undefined !== this.ws) {
                    this.ws.close();
                  }
                }
              }, {
                'key': "uri",
                'value': function () {
                  var Cb = this.query || {};
                  var Cr = this.opts.secure ? "wss" : 'ws';
                  var CL = '';
                  if (this.opts.port && ("wss" === Cr && 0x1bb != +this.opts.port || 'ws' === Cr && 0x50 != +this.opts.port)) {
                    CL = ':' + this.opts.port;
                  }
                  if (this.opts.timestampRequests) {
                    Cb[this.opts.timestampParam] = Cs();
                  }
                  if (!this.supportsBinary) {
                    Cb.b64 = 0x1;
                  }
                  if ((Cb = Ck.encode(Cb)).length) {
                    Cb = '?' + Cb;
                  }
                  return Cr + "://" + (-0x1 !== this.opts.hostname.indexOf(':') ? '[' + this.opts.hostname + ']' : this.opts.hostname) + CL + this.opts.path + Cb;
                }
              }, {
                'key': "check",
                'value': function () {
                  return !(!CX || "__initialize" in CX && this.name === CM.prototype.name);
                }
              }, {
                'key': "name",
                'get': function () {
                  return "websocket";
                }
              }]) {
                (function (Cb, Cr) {
                  for (var CL = 0x0; CL < Cr.length; CL++) {
                    var Ch = Cr[CL];
                    Ch.enumerable = Ch.enumerable || false;
                    Ch.configurable = true;
                    if ("value" in Ch) {
                      Ch.writable = true;
                    }
                    Object.defineProperty(Cb, Ch.key, Ch);
                  }
                })(CM.prototype, Cy);
              }
              return CM;
            }(Ca);
            C5.exports = CZ;
          }, function (C5, C6, C7) {
            var C8 = C7(0x2);
            C5.exports = {
              'WebSocket': C8.WebSocket || C8.MozWebSocket,
              'usingBrowserWebSocket': true,
              'defaultBinaryType': "arraybuffer"
            };
          }, function (C5, C6, C7) {
            function C8(Cv) {
              return (C8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (CC) {
                return typeof CC;
              } : function (CC) {
                return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC;
              })(Cv);
            }
            Object.defineProperty(C6, "__esModule", {
              'value': true
            });
            C6.reconstructPacket = C6.deconstructPacket = undefined;
            var C9 = C7(0xf);
            C6.deconstructPacket = function (Cv) {
              var CC = [];
              var CH = Cv.data;
              Cv.data = function CN(Ck, Cs) {
                if (!Ck) {
                  return Ck;
                }
                if (C9.isBinary(Ck)) {
                  var CO = {
                    '$': true,
                    'num': Cs.length
                  };
                  Cs.push(Ck);
                  return CO;
                }
                if (Array.isArray(Ck)) {
                  var Ci = Array(Ck.length);
                  for (var CX = 0x0; CX < Ck.length; CX++) {
                    Ci[CX] = CN(Ck[CX], Cs);
                  }
                  return Ci;
                }
                if ("object" === C8(Ck) && !(Ck instanceof Date)) {
                  var CE = {};
                  for (var Cc in Ck) if (Ck.hasOwnProperty(Cc)) {
                    CE[Cc] = CN(Ck[Cc], Cs);
                  }
                  return CE;
                }
                return Ck;
              }(CH, CC);
              Cv.attachments = CC.length;
              return {
                'packet': Cv,
                'buffers': CC
              };
            };
            C6.reconstructPacket = function (Cv, CC) {
              Cv.data = function CH(Ca, CN) {
                if (!Ca) {
                  return Ca;
                }
                if (Ca && Ca.$) {
                  return CN[Ca.num];
                }
                if (Array.isArray(Ca)) {
                  for (var Ck = 0x0; Ck < Ca.length; Ck++) {
                    Ca[Ck] = CH(Ca[Ck], CN);
                  }
                } else if ("object" === C8(Ca)) {
                  for (var Cs in Ca) if (Ca.hasOwnProperty(Cs)) {
                    Ca[Cs] = CH(Ca[Cs], CN);
                  }
                }
                return Ca;
              }(Cv.data, CC);
              Cv.attachments = undefined;
              return Cv;
            };
          }, function (C5) {
            function C6(C7) {
              C7 = C7 || {};
              this.ms = C7.min || 0x64;
              this.max = C7.max || 0x2710;
              this.factor = C7.factor || 0x2;
              this.jitter = C7.jitter > 0x0 && C7.jitter <= 0x1 ? C7.jitter : 0x0;
              this.attempts = 0x0;
            }
            C5.exports = C6;
            C6.prototype.duration = function () {
              var C7 = this.ms * Math.pow(this.factor, this.attempts++);
              if (this.jitter) {
                var C8 = Math.random();
                var C9 = Math.floor(C8 * this.jitter * C7);
                C7 = 0x0 == (0x1 & Math.floor(0xa * C8)) ? C7 - C9 : C7 + C9;
              }
              return 0x0 | Math.min(C7, this.max);
            };
            C6.prototype.reset = function () {
              this.attempts = 0x0;
            };
            C6.prototype.setMin = function (C7) {
              this.ms = C7;
            };
            C6.prototype.setMax = function (C7) {
              this.max = C7;
            };
            C6.prototype.setJitter = function (C7) {
              this.jitter = C7;
            };
          }]);
          var vP;
          var vm = function () {
            function C5() {
              return [0xc8, 0xa, 0x12c].reduce(function (C7, C8) {
                return C7 * C8;
              }, 0x90);
            }
            function C6(C7, C8, C9) {
              if (function (CH) {
                return O[vd(0x0)].now() === O[vd(0x4)].max(O[vd(0x0)].now(), CH);
              }(C7)) {
                if (!C8) {
                  C8 = 0x64 * O.Number("0.0005");
                }
                if (C9) {
                  var Cv = function (CH, Ca) {
                    var CN = (O[vd(0x0)].now() - CH) / (Ca * C5());
                    return O[vd(0x4)].min(0x1, CN * CN);
                  }(C7, C9);
                  C8 *= Cv;
                }
                CC = "Mathew";
                return O[function (CH, Ca) {
                  return Ca.substring(O.Number("0x0"), Ca.length + -0x2);
                }(0x0, CC)].random() === O[vd(0x4)].max(O[function (CH, Ca) {
                  return Ca.substring(O.Number("0x0"), Ca.length + -0x2);
                }(0x0, CC)].random(), C8);
              }
              var CC;
              return true;
            }
            return [function () {
              return C6(["0x4c72"].reduce(function (C7, C8) {
                return C7 + O.Number(C8);
              }, 0x1d5) * C5(), 0x64 * O.Number("0.0005"), 0x1c);
            }, C6];
          }()[0x0];
          function vx() {
            vE(0x0)(function () {
              vZ();
            });
          }
          function vJ(C5) {
            var C6 = vm();
            var C7 = Object.create(null);
            C7.J = !C6 && vx;
            if (C5) {
              C5(C7);
            }
          }
          !function (C5) {
            C5._resizeCallback = "_resizeCallback";
          }(vP || (vP = {}));
          var vU;
          var vw = function () {
            function C5() {
              this.Y = [];
              this.G = true;
            }
            C5.prototype.subscribe = function (C6) {
              var C7 = this;
              return !!C6 && (this.Y.push(C6), function () {
                var C8 = C7.Y.indexOf(C6);
                if (C8 > -0x1) {
                  C7.Y.splice(C8, 0x1);
                }
              });
            };
            C5.prototype.V = function () {
              var C6 = this.G;
              this.G = !C6;
              if (C6) {
                this.Y.forEach(function (C7) {
                  C7();
                });
                cc.view.emit("canvas-resize");
                cc.view[vP._resizeCallback]();
              }
            };
            C5.prototype.init = function () {
              cc.view.setResizeCallback(this.V.bind(this));
            };
            return C5;
          }();
          var vz = i("CanvasResizeBroadcaster", new vw());
          !function (C5) {
            C5[C5.FIXEDW = 0x1] = "FIXEDW";
            C5[C5.FIXEDWH_16x9 = 0x2] = "FIXEDWH_16x9";
            C5[C5.FIXEDWH_19_5x9 = 0x3] = "FIXEDWH_19_5x9";
            C5[C5.FIXEDWH_9X16 = 0x4] = "FIXEDWH_9X16";
          }(vU || (vU = {}));
          var vI;
          var vq = function () {
            function C5() {
              this.mode = 0x0;
              this.isPortrait = true;
            }
            C5.prototype.init = function () {
              this.isPortrait = "land" !== shell.environment.getOrientationMode();
              vz.subscribe(this.V.bind(this));
              this.V();
            };
            C5.prototype.toggleResize = function () {
              this.mode = 0x0;
              this.V();
            };
            C5.prototype.V = function () {
              if (this.isPortrait) {
                var C6 = cc.view.getFrameSize();
                if (C6.height / C6.width <= 1.7777777777777777) {
                  if (this.mode !== vU.FIXEDWH_16x9) {
                    this.mode = vU.FIXEDWH_16x9;
                    cc.view.setDesignResolutionSize(0x438, 0x780, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER));
                  }
                } else if (C6.height / C6.width > 1.7777777777777777 && C6.height / C6.width <= 2.1666666666666665) {
                  if (this.mode !== vU.FIXEDW) {
                    this.mode = vU.FIXEDW;
                    cc.view.setDesignResolutionSize(0x438, 0x924, new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.FIXED_WIDTH));
                  }
                } else if (this.mode !== vU.FIXEDWH_19_5x9) {
                  this.mode = vU.FIXEDWH_19_5x9;
                  cc.view.setDesignResolutionSize(0x438, 0x924, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER));
                }
              } else {
                this.mode = vU.FIXEDWH_9X16;
                cc.view.setDesignResolutionSize(0x780, 0x438, new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.FIXED_HEIGHT));
              }
            };
            return C5;
          }();
          i("MultiResHandler", new vq());
          var vG = Object.create(null);
          vI = Object.create(null);
          var vQ = function (C5, C6, C7, C8, C9) {
            if ("function" != typeof C8) {
              C9 = C8;
              C8 = undefined;
            }
            vI.get = C7;
            vI.set = C8;
            vI.enumerable = C9;
            Object.defineProperty(C5, C6, vI);
            vI.get = undefined;
            vI.set = undefined;
          };
          var vu = function () {
            var C5;
            try {
              if (null == (C5 = localStorage)) {
                throw Error();
              }
              C5.setItem("__test", '1');
              if ('1' !== C5.getItem("__test")) {
                C5 = undefined;
              }
            } catch (C6) {
              C5 = undefined;
            }
            if (!C5) {
              C5 = {
                'Z': Object.create(null),
                get 'length'() {
                  return Object.keys(this.Z).length;
                },
                'clear': function () {
                  this.Z = Object.create(null);
                },
                'getItem': function (C7) {
                  var C8 = this.Z[C7];
                  return null != C8 ? C8 : null;
                },
                'key': function (C7) {
                  var C8 = Object.keys(this.Z)[C7];
                  return null != C8 ? C8 : null;
                },
                'removeItem': function (C7) {
                  if (C7 in this.Z) {
                    delete this.Z[C7];
                  }
                },
                'setItem': function (C7, C8) {
                  this.Z[C7] = C8;
                }
              };
            }
            return C5;
          }();
          function vT(C5, C6) {
            var C7 = C5.indexOf(C6);
            if (-0x1 !== C7) {
              C5.splice(C7, 0x1);
            }
          }
          i("Preference", function () {
            function C5(C6) {
              this.tt = vu;
              this.nt = C6;
              this.et = C6 + "$prefkeysep$";
              this.rt = [];
              this.it = {};
            }
            Object.defineProperty(C5.prototype, "domain", {
              'get': function () {
                return this.nt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(C5.prototype, "length", {
              'get': function () {
                return this.ot.length;
              },
              'enumerable': false,
              'configurable': true
            });
            C5.prototype.clear = function () {
              var C6 = this.ot;
              var C7 = 0x0;
              for (var C8 = C6.length; C7 < C8; C7++) {
                this.tt.removeItem(C6[C7]);
              }
            };
            C5.prototype.getItem = function (C6, C7) {
              var C8 = this.tt.getItem(this.et + C6);
              return C8 ? JSON.parse(C8) : C7;
            };
            C5.prototype.key = function (C6) {
              var C7 = this.ot[C6];
              return null != C7 ? C7.substring(this.et.length) : null;
            };
            C5.prototype.removeItem = function (C6) {
              this.tt.removeItem(this.et + C6);
            };
            C5.prototype.setItem = function (C6, C7) {
              if (undefined === C7) {
                this.removeItem(C6);
              } else {
                this.tt.setItem(this.et + C6, JSON.stringify(C7));
              }
            };
            C5.prototype.getRawItem = function (C6) {
              return this.tt.getItem(this.et + C6);
            };
            C5.prototype.setRawItem = function (C6, C7) {
              if (undefined === C7) {
                this.removeItem(C6);
              } else {
                this.tt.setItem(this.et + C6, C7);
              }
            };
            Object.defineProperty(C5.prototype, 'ot', {
              'get': function () {
                var C6 = [];
                var C7 = 0x0;
                for (var C8 = this.tt.length; C7 < C8; C7++) {
                  var C9 = this.tt.key(C7);
                  if (C9 && 0x0 === C9.indexOf(this.et)) {
                    C6.push(C9);
                  }
                }
                return C6;
              },
              'enumerable': false,
              'configurable': true
            });
            C5.prototype.setStorage = function (C6) {
              if (this.tt !== C6) {
                this.tt = C6;
              }
            };
            C5.prototype.defineItem = function (C6, C7) {
              var C8 = this;
              if (!(C6 in this)) {
                vQ(this, C6, function () {
                  return C8.getItem(C6, C7);
                }, function (C9) {
                  var Cv = C8.getItem(C6, C7);
                  C8.setItem(C6, C9);
                  C8.ut(C6, C9, Cv);
                });
              }
            };
            C5.prototype.addObserver = function (C6, C7) {
              if (null == C7) {
                if ("function" != typeof C6) {
                  throw Error("Invalid parameter");
                }
                C7 = C6;
                C6 = undefined;
              }
              var C8;
              if (undefined !== C6) {
                if (!(C8 = this.it[C6])) {
                  C8 = this.it[C6] = [];
                }
              } else {
                C8 = this.rt;
              }
              if (C8.includes(C7)) {
                throw Error("Callback registerted");
              }
              C8.push(C7);
            };
            C5.prototype.removeObserver = function (C6, C7) {
              if (null == C7) {
                if ("function" != typeof C6) {
                  throw Error("Invalid parameter");
                }
                C7 = C6;
                C6 = undefined;
              }
              if (undefined !== C6) {
                var C8 = this.it[C6];
                if (C8) {
                  vT(C8, C7);
                }
              } else {
                vT(this.rt, C7);
              }
            };
            C5.prototype.ut = function (C6, C7, C8) {
              this.rt.forEach(function (Cv) {
                return Cv(C6, C7, C8);
              });
              var C9 = this.it[C6];
              if (C9) {
                C9.forEach(function (Cv) {
                  return Cv(C7, C8);
                });
              }
            };
            C5.getPreference = function (C6) {
              if (vG[C6]) {
                return vG[C6];
              }
              var C7 = new C5(C6);
              vG[C6] = C7;
              return C7;
            };
            return C5;
          }());
          var C0 = O.__extends;
          var C1 = shell.NetworkError;
          var C2 = shell.Error;
          var C3 = i("Serialiser", function () {
            function C5() {
              this.encodingParameters = C5.encodingParameters;
              this.auth = C5.auth;
            }
            C5.prototype.serializing = function (C6, C7, C8) {
              var C9 = undefined;
              var Cv = undefined;
              if (C8) {
                var CC = this.encodingParameters(C8);
                if (C5.encodingParametersInURI(C6)) {
                  C7 = -0x1 !== C7.indexOf('?') ? ''.concat(C7, '&').concat(CC) : ''.concat(C7, '?').concat(CC);
                } else {
                  C9 = {
                    'Content-Type': "application/x-www-form-urlencoded"
                  };
                  Cv = CC;
                }
              }
              this.url = this.auth(C7);
              this.headers = C9;
              this.body = Cv;
            };
            C5.encodingParametersInURI = function (C6) {
              return "GET" === C6 || "HEAD" === C6 || "DELETE" === C6;
            };
            C5.encodingParameters = function (C6) {
              var C7 = C5.ct;
              C7.length = 0x0;
              for (var C8 in C6) if (Object.prototype.hasOwnProperty.call(C6, C8)) {
                var C9 = C6[C8];
                if (undefined !== C9) {
                  if ("object" == typeof C9) {
                    C7.push(''.concat(encodeURIComponent(C8), '=').concat(encodeURIComponent(JSON.stringify(C9))));
                  } else {
                    C7.push(''.concat(encodeURIComponent(C8), '=').concat(encodeURIComponent(C9 + '')));
                  }
                }
              }
              var Cv = C7.join('&');
              C7.length = 0x0;
              return Cv;
            };
            C5.auth = function (C6) {
              return shell && shell.authenticate ? shell.authenticate(C6) : C6;
            };
            C5.ct = [];
            return C5;
          }());
          i("JSONSerialiser", function (C5) {
            function C6() {
              return null !== C5 && C5.apply(this, arguments) || this;
            }
            C0(C6, C5);
            C6.prototype.serializing = function (C7, C8, C9) {
              if (C3.encodingParametersInURI(C7)) {
                return C5.prototype.serializing.call(this, C7, C8, C9);
              }
              this.url = this.auth(C8);
              if (C9) {
                this.headers = {
                  'Content-Type': "application/json"
                };
                this.body = JSON.stringify(C9);
              } else {
                this.headers = undefined;
                this.body = undefined;
              }
            };
            return C6;
          }(C3));
          var C4 = i("Deserialiser", function () {
            function C5(C6, C7) {
              this.transformResponse = C5.transformResponse;
              this.type = C6;
              this.mimeType = C7;
            }
            C5.prototype.deserializing = function (C6) {
              var C7 = C6.response;
              if ("json" === this.type && "string" == typeof C7) {
                try {
                  C7 = JSON.parse(C7);
                } catch (C8) {
                  this.data = undefined;
                  return C8;
                }
              }
              this.data = this.transformResponse(C7);
            };
            C5.isHttpStatusError = function (C6) {
              var C7 = C6.status;
              return (C7 < 0xc8 || C7 > 0x12b) && !(0x0 === C7 && null != C6.response);
            };
            C5.transformResponse = function (C6) {
              return C6;
            };
            return C5;
          }());
          i("XHR", function () {
            function C5(C6, C7) {
              this.timeout = 0xea60;
              this.serializer = C6 || new C3();
              this.deserializer = C7 || new C4("json");
            }
            C5.prototype.get = function (C6, C7, C8) {
              return this.request("GET", C6, C7, C8);
            };
            C5.prototype.head = function (C6, C7, C8) {
              return this.request("HEAD", C6, C7, C8);
            };
            C5.prototype.post = function (C6, C7, C8) {
              return this.request("POST", C6, C7, C8);
            };
            C5.prototype.put = function (C6, C7, C8) {
              return this.request("PUT", C6, C7, C8);
            };
            C5.prototype.patch = function (C6, C7, C8) {
              return this.request("PATCH", C6, C7, C8);
            };
            C5.prototype["delete"] = function (C6, C7, C8) {
              return this.request("DELETE", C6, C7, C8);
            };
            C5.prototype.request = function (C6, C7, C8, C9) {
              if (undefined === C9) {
                if ("function" != typeof C8) {
                  throw Error("Invalid arguments");
                }
                C9 = C8;
                C8 = undefined;
              }
              var Cv;
              var CC = this.serializer;
              var CH = this.deserializer;
              var Ca = new XMLHttpRequest();
              var CN = shell.environment.getURLSearchParam().get("otid") || ''.concat(function () {
                var CX = [];
                for (var CE = 0x0; CE < 0x6; CE++) {
                  CX.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(0x1a * Math.random())));
                }
                return CX.join('');
              }()).concat((Cv = new Date().getUTCDate() + '').length > 0x1 ? Cv : '0'.concat(Cv));
              var Ck = function (CX, CE) {
                return -0x1 !== CX.indexOf('?') ? ''.concat(CX, "&traceId=").concat(CE) : ''.concat(CX, "?traceId=").concat(CE);
              }(C7, CN);
              var Cs = CC.serializing(C6, Ck, C8);
              if (Cs) {
                setTimeout(function () {
                  C9(Cs, undefined);
                }, 0x0);
                return Ca;
              }
              Ca.open(C6, CC.url, true);
              Ca.timeout = this.timeout;
              Ca.onload = function () {
                var CX = undefined;
                if (C4.isHttpStatusError(Ca)) {
                  CX = new C2(C1.Domain, C1.HttpStatusError + Ca.status, CN);
                  CH.data = undefined;
                } else {
                  CX = CH.deserializing(Ca);
                }
                if (CX) {
                  C9(CX, undefined);
                } else {
                  C9(undefined, CH.data);
                }
              };
              Ca.onerror = function () {
                var CX = new C2(C1.Domain, C1.HttpNetworkError, CN);
                C9(CX, undefined);
              };
              Ca.ontimeout = function () {
                var CX = new C2(C1.Domain, C1.HttpTimeoutError, CN);
                C9(CX, undefined);
              };
              Ca.onabort = function () {
                var CX = new C2(C1.Domain, C1.HttpAbortError, CN);
                C9(CX, undefined);
              };
              Ca.responseType = CH.type;
              if (CH.mimeType) {
                Ca.overrideMimeType(CH.mimeType);
              }
              var CO = CC.headers;
              if (CO) {
                for (var Ci in CO) if (Object.prototype.hasOwnProperty.call(CO, Ci)) {
                  Ca.setRequestHeader(Ci, CO[Ci]);
                }
              }
              Ca.send(CC.body);
              return Ca;
            };
            return C5;
          }());
          O.io = vn.io;
          vc(function (C5) {
            vc(vE(0x0), vJ)(function (C6) {
              if (C5) {
                C5(C6);
              }
            });
          })(function (C5, C6) {
            if (C6) {
              throw Error(C6.message);
            }
            if (C5 && C5.J) {
              C5.J();
            }
          });
          i("default", vn.io);
        }
      };
    });
  }();
}();