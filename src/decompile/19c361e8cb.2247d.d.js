!function () {
  'use strict';

  !function () {
    var G = function () {
      var g = true;
      return function (M, k) {
        var Q = g ? function () {
          if (k) {
            var n = k.apply(M, arguments);
            k = null;
            return n;
          }
        } : function () {};
        g = false;
        return Q;
      };
    }();
    var P;
    !function (g) {
      var M = G(this, function () {
        return M.toString().search("(((.+)+)+)+$").toString().constructor(M).search("(((.+)+)+)+$");
      });
      M();
      g.i = "window";
      g.o = "self";
    }(P || (P = {}));
    var w = (0x0, eval)("this");
    w[P.o];
    var l = w[P.i];
    System.register(["react", "common"], function (g) {
      'use strict';

      var M;
      var k;
      return {
        'setters': [function (Q) {
          M = Q["default"];
        }, function (Q) {
          k = Q.Utils;
        }],
        'execute': function () {
          var EJ = l.__extends;
          var EP = l.__assign;
          var Ew = l.__awaiter;
          var El = l.__generator;
          function Eg(t1, t2) {
            var t3 = [];
            t1.forEach(function (t4) {
              var t5;
              var t6;
              var t7;
              var t8 = {
                'x': 0x0,
                'y': 0x0,
                width: 0x0,
                height: 0x0
              };
              var t9 = {
                'x': 0x0,
                'y': 0x0,
                width: 0x0,
                height: 0x0,
                isRotate: false
              };
              t5 = t4.resolvePath;
              t6 = t8;
              t7 = t4.colour;
              if (undefined === t6) {
                t6 = t9;
              }
              t3.push(new Promise(function (tG, tE) {
                var tC = new plugin.Loader();
                tC.onLoad = function (tJ) {
                  var tP = document.createElement("canvas");
                  var tw = tP.getContext('2d');
                  if (null !== tw) {
                    var tl = new Image();
                    tl.onload = function () {
                      URL.revokeObjectURL(tl.src);
                      var tg = 0x0 === t6.width ? tl.width : t6.width;
                      var tM = 0x0 === t6.height ? tl.height : t6.height;
                      tP.width = tg;
                      tP.height = tM;
                      tw.clearRect(0x0, 0x0, tg, tM);
                      tw.translate(tg / 0x2, tM / 0x2);
                      if (t6.isRotate) {
                        tw.rotate(0x10e * Math.PI / 0xb4);
                        tw.drawImage(tl, t6.x, t6.y, tM, tg, -tM / 0x2, -tg / 0x2, tM, tg);
                      } else {
                        tw.drawImage(tl, t6.x, t6.y, tg, tM, -tg / 0x2, -tM / 0x2, tg, tM);
                      }
                      var tk = tw.getImageData(0x0, 0x0, tg, tM);
                      var tQ = tk.data;
                      if (t7) {
                        var tn = 0x0;
                        for (var tH = tQ.length; tn < tH; tn += 0x4) {
                          tQ[tn] = t7.r;
                          tQ[tn + 0x1] = t7.g;
                          tQ[tn + 0x2] = t7.b;
                        }
                      }
                      tw.putImageData(tk, 0x0, 0x0);
                      tG(tP.toDataURL());
                    };
                    tl.onerror = function () {
                      tE(Error("ImageBase64 load image failed"));
                    };
                    tl.src = URL.createObjectURL(tJ.response);
                  }
                };
                tC.onError = function (tJ) {
                  tE(tJ);
                };
                tC.load([{
                  'src': t5,
                  'type': plugin.LoadType.Blob
                }]);
              }));
            });
            Promise.all(t3).then(function (t4) {
              var t5 = [];
              t4.forEach(function (t6) {
                t5.push(t6);
              });
              if (t2) {
                t2(t5, undefined);
              }
            })["catch"](function (t4) {
              if (t2) {
                t2(undefined, t4);
              }
            });
          }
          var EM = {};
          function Ek(t1, t2, t3) {
            var t4;
            var t5 = this;
            var t6 = t1.src;
            var t7 = "unknown";
            t7 = -0x1 !== t6.indexOf(".css") ? "css" : t7;
            t7 = -0x1 !== (t4 = t6).indexOf(".jpg") || -0x1 !== t4.indexOf(".png") ? "image" : t7;
            var t8 = shell.Error;
            var t9 = shell.ClientError;
            var tG = t8 && new t8(t9.Domain, t9.GameLoadResourceError);
            var tE = t2.resource.resolveUrl(t6);
            return new Promise(function (tC, tJ) {
              return __awaiter(t5, undefined, undefined, function () {
                var tP;
                return __generator(this, function (tw) {
                  switch (tw.label) {
                    case 0x0:
                      tw.trys.push([0x0, 0x9,, 0xa]);
                      return "image" !== t7 ? [0x3, 0x5] : t1.tint ? [0x4, (tl = [{
                        'resolvePath': tE,
                        'colour': t1.tint
                      }], new Promise(function (tg, tM) {
                        Eg(tl, function (tk, tQ) {
                          if (tQ || tk && 0x0 === tk.length) {
                            var tn = shell.Error;
                            var tH = shell.ClientError;
                            var tI = tn && new tn(tH.Domain, tH.GameLoadResourceError);
                            tM(tQ || tI);
                          }
                          tg(tk);
                        });
                      }))] : [0x3, 0x2];
                    case 0x1:
                      tP = tw.sent();
                      tC(tP[0x0]);
                      return [0x3, 0x4];
                    case 0x2:
                      return [0x4, EH(tE, t3)];
                    case 0x3:
                      tP = tw.sent();
                      tC(tP);
                      tw.label = 0x4;
                    case 0x4:
                      return [0x3, 0x8];
                    case 0x5:
                      return "css" !== t7 ? [0x3, 0x7] : [0x4, EI(tE, t2, t3)];
                    case 0x6:
                      tP = tw.sent();
                      tC(tP);
                      return [0x3, 0x8];
                    case 0x7:
                      tJ(tG);
                      tw.label = 0x8;
                    case 0x8:
                      return [0x3, 0xa];
                    case 0x9:
                      tw.sent();
                      tJ(tG);
                      return [0x3, 0xa];
                    case 0xa:
                      return [0x2];
                  }
                  var tl;
                });
              });
            });
          }
          function EQ(t1, t2, t3) {
            return __awaiter(this, undefined, undefined, function () {
              var t4;
              var t5;
              return __generator(this, function (t6) {
                switch (t6.label) {
                  case 0x0:
                    return t1.cssFile.endsWith(".css") ? [0x4, Ek({
                      'src': t1.cssFile
                    }, t2, t3)] : [0x3, 0x2];
                  case 0x1:
                    t4 = t6.sent();
                    return [0x3, 0x3];
                  case 0x2:
                    t4 = t1.cssFile;
                    t6.label = 0x3;
                  case 0x3:
                    return t1.tint ? [0x4, Ek({
                      'src': t1.imageFile,
                      'tint': t1.tint
                    }, t2, t3)] : [0x3, 0x6];
                  case 0x4:
                    t5 = t6.sent();
                    return [0x4, En(t4, t2, t5, true, t3)];
                  case 0x5:
                    t4 = t6.sent();
                    return [0x3, 0x8];
                  case 0x6:
                    return [0x4, En(t4, t2, t1.imageFile, false, t3)];
                  case 0x7:
                    t4 = t6.sent();
                    t6.label = 0x8;
                  case 0x8:
                    if (t1.appendHeader) {
                      (function (t7, t8) {
                        var t9 = [];
                        var tG = t8.bundleInfo.name;
                        if (!EM[tG]) {
                          EM[tG] = [];
                        }
                        if (!Array.isArray(t7)) {
                          t7 = [t7];
                        }
                        var tE = EM[tG].length + 0x1;
                        t7.forEach(function (tC, tJ) {
                          var tP = tE + tJ;
                          var tw = "$CSS-" + t8.bundleInfo.name + '-' + tP;
                          t9.push(tw);
                          (function (tl, tg, tM) {
                            if (-0x1 === EM[tg].indexOf(tl)) {
                              var tk = document.createElement("style");
                              tk.id = tl;
                              tk.innerHTML = tM;
                              document.head.appendChild(tk);
                              EM[tg].push(tl);
                            }
                          })(tw, t8.bundleInfo.name, tC);
                        });
                      })(t4, t2);
                    }
                    return [0x2, t4];
                }
              });
            });
          }
          function En(t1, t2, t3, t4, t5) {
            if (undefined === t4) {
              t4 = false;
            }
            return new Promise(function (t6, t7) {
              if (t4) {
                t1 = t1.replace(/url\((.*?)\)/g, function () {
                  return "url(" + t3 + ')';
                });
                t6(t1);
              } else {
                (function (t8, t9) {
                  var tG = this;
                  var tE = shell.Error;
                  var tC = shell.ClientError;
                  var tJ = tE && new tE(tC.Domain, tC.GameLoadResourceError);
                  return new Promise(function (tP, tw) {
                    return __awaiter(tG, undefined, undefined, function () {
                      var tl;
                      return __generator(this, function (tg) {
                        switch (tg.label) {
                          case 0x0:
                            tg.trys.push([0x0, 0x2,, 0x3]);
                            return [0x4, ED(t8, t9)];
                          case 0x1:
                            tl = tg.sent();
                            tP(tl);
                            return [0x3, 0x3];
                          case 0x2:
                            tg.sent();
                            tw(tJ);
                            return [0x3, 0x3];
                          case 0x3:
                            return [0x2];
                        }
                      });
                    });
                  });
                })(t2.resource.resolveUrl(t3), t5).then(function (t8) {
                  t1 = t1.replace(/url\((.*?)\)/g, function () {
                    return "url(" + URL.createObjectURL(t8) + ')';
                  });
                  t6(t1);
                })["catch"](t7);
              }
            });
          }
          function EH(t1, t2) {
            var t3 = new plugin.Loader();
            return new Promise(function (t4, t5) {
              t3.onLoad = function (t6) {
                t4(t6.response);
              };
              t3.onError = function (t6) {
                t5(t6);
              };
              t3.load([{
                'src': t1,
                'type': plugin.LoadType.Image,
                'maxAttemptCount': t2
              }]);
            });
          }
          function EI(t1, t2, t3) {
            var t4 = new plugin.Loader();
            return new Promise(function (t5, t6) {
              t4.onLoad = function (t7) {
                var t8 = function (t9, tG) {
                  return t9.replace(/url\((.*?)\)/g, function (tE, tC) {
                    return "url(" + tG.resource.resolveUrl(tC) + ')';
                  });
                }(t7.response, t2);
                t5(t8);
              };
              t4.onError = function (t7) {
                t6(t7);
              };
              t4.load([{
                'src': t1,
                'type': plugin.LoadType.Text,
                'maxAttemptCount': t3
              }]);
            });
          }
          function ED(t1, t2) {
            var t3 = new plugin.Loader();
            return new Promise(function (t4, t5) {
              t3.onLoad = function (t6) {
                t4(t6.response);
              };
              t3.onError = function (t6) {
                t5(t6);
              };
              t3.load([{
                'src': t1,
                'type': plugin.LoadType.Blob,
                'maxAttemptCount': t2
              }]);
            });
          }
          var EK = {
            isBO: false
          };
          var Eb = M.createContext(EK);
          var EZ = function () {
            function t1(t2) {
              this.hasTooltip = true;
              this.l = [];
              this.u = [];
              this.h = t2;
            }
            t1.prototype.initialize = function (t2, t3) {
              return Ew(this, undefined, undefined, function () {
                var t4;
                var t5;
                var t6;
                var t7 = this;
                return El(this, function (t8) {
                  switch (t8.label) {
                    case 0x0:
                      t4 = t3 || t2;
                      t5 = [];
                      t5 = this.l.concat(this.u).map(function (tG) {
                        EQ(tG, t4, 0x0)["catch"](function () {
                          return EQ(tG, t2, 0x0);
                        });
                      });
                      t6 = t2.resource.resolveUrl("history/locale/locale.json");
                      t9 = t6;
                      0x0;
                      t5.push(new Promise(function (tG, tE) {
                        var tC = new plugin.Loader();
                        var tJ = {
                          src: t9,
                          type: plugin.LoadType.Json,
                          maxAttemptCount: 0x0
                        };
                        tC.onLoad = function (tP) {
                          var tw = tP.response;
                          for (var tl in tw) if (tw[tl]) {
                            shell.I18n.extend(tw[tl], tl);
                          }
                          tG(tw);
                        };
                        tC.onError = function () {
                          var tP = shell.Error;
                          var tw = shell.ClientError;
                          var tl = new tP(tw.Domain, tw.GameLoadResourceError);
                          tE(tl);
                        };
                        tC.load([tJ]);
                      }));
                      return [0x4, Promise.all(t5).then(function () {
                        return t7.h;
                      })];
                    case 0x1:
                      return [0x2, t8.sent()];
                  }
                  var t9;
                });
              });
            };
            t1.prototype.compileAllHistoryDataBecomePages = function (t2) {
              return t2;
            };
            t1.prototype.compileAllHistoryDataForFreeSpinList = function (t2) {
              return t2;
            };
            t1.prototype.getNavTitle = function () {
              return shell.I18n.t("History.HistoryNormalSpin");
            };
            t1.prototype.showNavArrowDropDown = function () {
              return false;
            };
            t1.prototype.useDefaultTransactionDetailsHeader = function () {
              return true;
            };
            t1.prototype.getAdditionalSpinsTitle = function () {
              return shell.I18n.t("History.HistoryNormalSpin");
            };
            return t1;
          }();
          var Ec = {};
          var ER = {};
          var Ey = {
            value: true
          };
          Object.defineProperty(ER, "__esModule", Ey);
          var EL = {
            display: "flex",
            width: "inherit",
            height: "50px",
            margin: "0 auto 5px auto",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px"
          };
          var Ep = {
            fontSize: "11px",
            textAlign: "center",
            wordBreak: "break-word"
          };
          var Eh = {
            width: "2px",
            height: "12px",
            marginLeft: "10px",
            marginRight: "10px"
          };
          var EU = {
            color: "rgba(255, 255, 255, 0.4)"
          };
          var ES = {
            backgroundColor: "#282833"
          };
          var EN = {
            labels: EU,
            separator: ES
          };
          var Em = __importDefault(M);
          var ET = shell.I18n;
          ER["default"] = function (t1) {
            var t2 = t1.betSizeTitle ? t1.betSizeTitle : ET.t("History.HistoryBetSize");
            var t3 = t1.betLevelTitle ? t1.betLevelTitle : ET.t("History.HistoryBetLevel");
            var t5 = Object.assign({}, Ep, EN.labels);
            var t6 = Object.assign({}, Eh, EN.separator);
            t5.color = t1.labelColor ? t1.labelColor : t5.color;
            t6.backgroundColor = t1.seperatorColor ? t1.seperatorColor : t6.backgroundColor;
            var t7 = __assign({}, EL);
            var t8 = {
              'id': "bet-size-label",
              style: t5
            };
            var t9 = {
              'id': "separator",
              style: t6
            };
            var tG = {
              'id': "bet-level-label",
              style: t5
            };
            if (t1.isRTL) {
              t7.direction = "rtl";
            }
            return Em["default"].createElement("div", {
              'id': "bet-information-container",
              'style': t7
            }, function (tE) {
              if (tE.totalRoundCount && tE.currentRoundCount) {
                var tC = tE.roundsTitlei18nKey ? tE.roundsTitlei18nKey : "History.HistoryDetailItemRoundLabel";
                var tJ = ET.t(tC, {
                  'currCount': tE.currentRoundCount.toString(),
                  'maxCount': tE.totalRoundCount.toString()
                });
                var tP = tE.themeColor ? tE.themeColor : "#9C9B9B";
                var tw = {
                  color: tP
                };
                return Em["default"].createElement("div", {
                  'id': "rounds-label",
                  'style': Object.assign({}, Ep, tw)
                }, tJ);
              }
            }(t1), function (tE) {
              if (tE.totalRoundCount && tE.currentRoundCount) {
                var tC = Object.assign({}, Eh, EN.separator);
                var tJ = {
                  'id': "separator",
                  style: tC
                };
                return Em["default"].createElement("div", tJ);
              }
            }(t1), Em["default"].createElement("div", t8, t2 + " " + t1.betSize), Em["default"].createElement("div", t9), Em["default"].createElement("div", tG, t3 + " " + t1.betLevel));
          };
          var Ed = {};
          var EB = {
            value: true
          };
          Object.defineProperty(Ed, "__esModule", EB);
          var EY = {
            display: "flex",
            width: "inherit",
            height: "48px",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto"
          };
          var EO = {
            fontSize: "14px"
          };
          var Ev = {
            noComboContainer: EY,
            text: EO
          };
          var Eo = {
            color: "#CCCCCC"
          };
          var Ee = __importDefault(M);
          var EW = shell.I18n;
          Ed["default"] = function (t1) {
            var t2 = Object.assign({}, Ev.text, Eo);
            var t3 = {
              'id': "no-winning-combination-container",
              style: Ev.noComboContainer
            };
            t2.color = t1.labelColor ? t1.labelColor : t2.color;
            return Ee["default"].createElement("div", t3, Ee["default"].createElement("div", {
              'id': "no-winning-combination-text",
              'style': t2
            }, EW.t("History.HistoryNoWinning")));
          };
          var Ef = {};
          var Eq = {};
          var Eu = {};
          var Ea = {};
          var EX = {
            value: true
          };
          Object.defineProperty(Ea, "__esModule", EX);
          var Ei = {
            writable: false,
            value: undefined,
            enumerable: false,
            configurable: false
          };
          function Ez(t1, t2, t3) {
            var t4 = t1.length;
            for (var t5 = 0x0; t5 < t4; t5++) {
              var t6 = t1[t5];
              if (t6) {
                t6(t2, t3);
              }
            }
          }
          var C0 = {
            value: true
          };
          Ea.unwatch = function (t1, t2, t3) {
            if ("object" != typeof t1 || null === t1) {
              throw Error("Invalid parameter at index 0");
            }
            if ("string" != typeof t2 || '' === t2) {
              throw Error("Invalid parameter at index 1");
            }
            var t4 = t1.watch_eventPool;
            if (t4) {
              var t5 = t4[t2];
              if (t5) {
                if (undefined === t3) {
                  t5.length = 0x0;
                } else {
                  var t6 = t5.indexOf(t3);
                  if (-0x1 !== t6) {
                    t5.splice(t6, 0x1);
                  }
                }
              }
            }
          };
          Ea.watch = function (t1, t2, t3) {
            if ("object" != typeof t1 || null === t1) {
              throw Error("Invalid parameter at index 0");
            }
            if ("string" != typeof t2 || '' === t2) {
              throw Error("Invalid parameter at index 1");
            }
            if ("function" != typeof t3) {
              throw Error("Invalid parameter at index 2");
            }
            var t4 = t1.watch_eventPool;
            if (!t4) {
              if (!Object.isExtensible(t1)) {
                throw Error("Object is not extensible");
              }
              t4 = Ei.value = Object.create(null);
              Object.defineProperty(t1, "watch_eventPool", Ei);
            }
            var t5 = t4[t2];
            if (!t5) {
              var t6 = Object.getOwnPropertyDescriptor(t1, t2);
              if (!t6) {
                throw Error("Object property not exists");
              }
              if (false === t6.writable || undefined !== t6.get && undefined === t6.set) {
                throw Error("Object property is readonly");
              }
              if (!t6.configurable) {
                throw Error("Object property is not configurable");
              }
              t5 = t4[t2] = [];
              (function (t7, t8, t9) {
                if (t9.writable) {
                  var tG = t9.value;
                  t9.get = function () {
                    return tG;
                  };
                  t9.set = function (tJ) {
                    var tP = tG;
                    tG = tJ;
                    Ez(this.watch_eventPool[t8], tJ, tP);
                  };
                  delete t9.value;
                  delete t9.writable;
                } else if (t9.get) {
                  var tE = t9.set;
                  t9.set = function (tJ) {
                    tE.call(this, tJ);
                    Ez(this.watch_eventPool[t8], this[t8]);
                  };
                } else {
                  var tC = t9.set;
                  t9.set = function (tJ) {
                    tC.call(this, tJ);
                    Ez(this.watch_eventPool[t8], tJ);
                  };
                }
                Object.defineProperty(t7, t8, t9);
              })(t1, t2, t6);
            }
            if (-0x1 !== t5.indexOf(t3)) {
              throw Error("Watch callback exists");
            }
            t5.push(t3);
          };
          Object.defineProperty(Eu, "__esModule", C0);
          var C2 = new (function () {
            function t1() {
              var t2 = {
                isActive: false,
                title: '',
                desc: '',
                posY: 0x0
              };
              this.tooltipProps = t2;
            }
            t1.prototype.observe = function (t2, t3, t4) {
              var t5;
              var t7 = this;
              if (t4 && undefined !== this[t2]) {
                t3(this[t2], this);
              }
              t5 = this;
              return function (t8) {
                var t9 = t8.bind(undefined, undefined);
                Ea.watch(t5, t2, t9);
              }(function (t8, t9, tG) {
                if (!(t8 || undefined === t9 || JSON.stringify(t9) === JSON.stringify(tG))) {
                  t3(t9, t7);
                }
              });
            };
            t1.prototype.dispose = function (t2) {
              var t3 = {
                isActive: false,
                title: '',
                desc: '',
                posY: 0x0
              };
              Ea.unwatch(this, t2);
              this.tooltipProps = t3;
            };
            t1.prototype.update = function (t2) {
              this.tooltipProps = t2;
            };
            return t1;
          }())();
          var C3 = {
            value: true
          };
          Eu.tooltipViewModel = C2;
          Object.defineProperty(Eq, "__esModule", C3);
          var C4 = {
            width: "300px",
            height: "48px",
            display: "flex"
          };
          var C5 = {
            width: "285px"
          };
          var C6 = {
            width: "15px"
          };
          var C7 = {
            transform: "scale(0.3333)",
            transformOrigin: "center left",
            opacity: "40%"
          };
          var C8 = {
            wrappedContent: C4,
            childrenContent: C5,
            infoIconContent: C6,
            infoIcon: C7
          };
          var C9 = __importDefault(M);
          var CC = function (t1) {
            function t2(t3) {
              var t4 = t1.call(this, t3) || this;
              t4.p = undefined;
              t4.m = false;
              return t4;
            }
            __extends(t2, t1);
            t2.prototype.componentDidMount = function () {
              this.v();
            };
            t2.prototype.componentDidUpdate = function () {
              this.v();
            };
            t2.prototype.v = function () {
              var t3 = this;
              this.m = false;
              clearTimeout(this.p);
              this.p = setTimeout(function () {
                t3.m = true;
              }, 0x0);
            };
            t2.prototype.componentWillUnmount = function () {
              clearTimeout(this.p);
            };
            t2.prototype._ = function (t3, t4) {
              if (undefined === t4) {
                t4 = false;
              }
              var t5 = t4 ? t3.map(function (t6) {
                return shell.I18n.t(t6);
              }) : t3;
              if (this.props.isRTL) {
                t5 = t5.reverse();
              }
              return t5.join(" x ");
            };
            t2.prototype.C = function (t3) {
              var t4 = this;
              if (this.m) {
                var t5 = t3.currentTarget;
                var t6 = t5.parentNode;
                var t7 = Array.prototype.indexOf.call(t6.children, t5);
                var t8 = (t6.children.length - 0x1 - t7) * (this.props.contentHeight || 0x30);
                var t9 = Object.keys(this.props.winCalculation);
                var tG = t9.map(function (tC) {
                  return t4.props.winCalculation[tC];
                });
                var tE = {
                  'isActive': true,
                  'posY': t8,
                  'title': this._(t9, true),
                  'desc': this._(tG)
                };
                Eu.tooltipViewModel.currentTarget = t5;
                Eu.tooltipViewModel.update(tE);
              }
            };
            t2.prototype.j = function (t3) {
              t3.currentTarget.style.opacity = "0.8";
            };
            t2.prototype.O = function (t3) {
              t3.currentTarget.style.opacity = '1';
            };
            t2.prototype.render = function () {
              var t3 = [];
              var t4 = {
                key: "wrapper-content",
                style: C8.childrenContent
              };
              var t5 = {
                key: "icon-content",
                style: C8.infoIconContent
              };
              var t6 = {
                className: "gh_basic_sprite gh_ic_nav_info_s",
                style: C8.infoIcon
              };
              t3.push(C9["default"].createElement("div", t4, this.props.children));
              t3.push(C9["default"].createElement("div", t5, C9["default"].createElement("div", t6)));
              var t7 = {
                height: (this.props.contentHeight || 0x30) + 'px'
              };
              var t8 = __assign(__assign({}, C8.wrappedContent), t7);
              return C9["default"].createElement("div", {
                'style': t8,
                'onMouseDown': this.j.bind(this),
                'onMouseUp': this.O.bind(this),
                'onTouchStart': this.j.bind(this),
                'onTouchEnd': this.O.bind(this),
                'onClick': this.C.bind(this)
              }, this.props.isRTL ? t3.reverse() : t3);
            };
            return t2;
          }(C9["default"].Component);
          var CJ = {
            value: true
          };
          Eq["default"] = CC;
          Object.defineProperty(Ef, "__esModule", CJ);
          var CP = {
            display: "flex",
            width: "inherit",
            justifyContent: "space-between",
            alignItems: "center",
            height: "48px",
            margin: "0 auto"
          };
          var Cw = {
            display: "flex",
            alignItems: "center",
            height: "inherit"
          };
          var Cl = {
            display: "flex",
            flexDirection: "column"
          };
          var Cg = {
            width: "38px",
            height: "24px"
          };
          var CM = {
            width: "25px",
            fontSize: "14px",
            textAlign: "left"
          };
          var Ck = {
            width: "100px",
            fontSize: "14px",
            textAlign: "right"
          };
          var CQ = {
            width: "100px",
            fontSize: "11px",
            textAlign: "right"
          };
          var Cn = {
            paylineContainer: CP,
            paylineNumberImageWrapper: Cw,
            paylineLabels: Cl,
            paylineImage: Cg,
            winLineLabel: CM,
            winValueLabel: Ck,
            subValueLabel: CQ
          };
          var CH = {
            color: "#CCCCCC"
          };
          var CI = {
            color: "#CCCCCC"
          };
          var CD = {
            color: "#9C9B9B"
          };
          var CK = {
            winLineLabel: CH,
            winValueLabel: CI,
            subValueLabel: CD
          };
          var Cb = __importDefault(M);
          var CZ = __importDefault(Eq);
          Ef["default"] = function (t1) {
            var t3 = Object.assign({}, Cn.winLineLabel, CK.winLineLabel);
            var t4 = Object.assign({}, Cn.winValueLabel, CK.winValueLabel);
            var t5 = __assign({}, Cn.paylineContainer);
            t3.color = t1.winLineLabelColor ? t1.winLineLabelColor : t3.color;
            t4.color = t1.winValueLabelColor ? t1.winValueLabelColor : t4.color;
            if (t1.isRTL) {
              t5.direction = "rtl";
              t3.textAlign = "right";
              t4.textAlign = "left";
            }
            var t6 = {
              'id': "payline-container",
              style: t5
            };
            var t7 = {
              'id': "payline-number-sprite-wrapper",
              style: Cn.paylineNumberImageWrapper
            };
            var t8 = {
              'id': "win-line-number-label",
              style: t3
            };
            var t9 = Cb["default"].createElement("div", t6, Cb["default"].createElement("div", t7, Cb["default"].createElement("div", t8, ('0' + parseInt(t1.winLine, 0xa).toString()).slice(-0x2)), function (tG) {
              var tE = tG.paylineSpriteClassName;
              var tC = tG.paylineImageMap;
              var tJ = tG.paylineImageStyle;
              var tP = tG.winLine;
              var tw = tG.isRTL;
              if (tC) {
                var tl = {
                  width: Cn.paylineImage.width,
                  height: Cn.paylineImage.height
                };
                var tg = tC[tP];
                var tM = tE || '';
                var tQ = Object.assign({}, tl, tJ || {});
                if (tw) {
                  tQ.transformOrigin = "right";
                }
                return Cb["default"].createElement("span", {
                  'className': tM + " " + tg,
                  'style': tQ
                });
              }
              return null;
            }(t1)), Cb["default"].createElement("div", {
              'id': "payline-labels",
              'style': Cn.paylineLabels
            }, Cb["default"].createElement("div", {
              'id': "payline-win-value-label",
              'style': t4
            }, t1.winValue), function (tG) {
              var tE = tG.subValue;
              var tC = tG.subValueLabelColor;
              var tJ = tG.isRTL;
              var tP = Object.assign({}, Cn.subValueLabel, CK.subValueLabel);
              tP.color = tC || tP.color;
              if (tJ) {
                tP.textAlign = "left";
              }
              return tE ? Cb["default"].createElement("div", {
                'id': "payline-subvalue-label",
                'style': tP
              }, Cb["default"].createElement("bdi", null, tE)) : null;
            }(t1)));
            return t1.winCalculation ? Cb["default"].createElement(CZ["default"], {
              'isRTL': t1.isRTL,
              'winCalculation': t1.winCalculation
            }, t9) : t9;
          };
          var Cy = {};
          var CL = {
            value: true
          };
          Object.defineProperty(Cy, "__esModule", CL);
          var Cp = {
            display: "flex",
            width: "inherit",
            height: "32px",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto"
          };
          var Ch = {
            width: "120px"
          };
          var CU = {
            textAlign: "center",
            width: "72px",
            fontSize: "11px"
          };
          var CS = {
            payoutTitleContainer: Cp,
            line: Ch,
            text: CU
          };
          var CN = {
            backgroundColor: "#282833",
            height: "2px"
          };
          var Cm = {
            color: "#9C9B9B"
          };
          var CT = {
            line: CN,
            text: Cm
          };
          var Cs = __importDefault(M);
          Cy["default"] = function (t1) {
            var t3 = Object.assign({}, CS.line, CT.line);
            var t4 = Object.assign({}, CS.text, CT.text);
            var t5 = {
              'id': "payout-title-container",
              style: CS.payoutTitleContainer
            };
            t3.backgroundColor = t1.lineColor ? t1.lineColor : t3.backgroundColor;
            t4.color = t1.labelColor ? t1.labelColor : t4.color;
            return Cs["default"].createElement("div", t5, Cs["default"].createElement("div", {
              'className': "line",
              'style': t3
            }), Cs["default"].createElement("div", {
              'id': "payout-text",
              'style': t4
            }, shell.I18n.t("History.HistoryPayout")), Cs["default"].createElement("div", {
              'className': "line",
              'style': t3
            }));
          };
          var Cj = {};
          var Cd = {
            value: true
          };
          Object.defineProperty(Cj, "__esModule", Cd);
          var CB = {
            display: "flex",
            width: "inherit",
            height: "50px",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center"
          };
          var CY = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          };
          var CO = {
            textAlign: "center",
            display: "inline-table"
          };
          var Cv = {
            textAlign: "center",
            fontSize: "11px"
          };
          var Co = {
            backgroundColor: "#24242E"
          };
          var Ce = {
            color: "#9C9B9B"
          };
          var CW = {
            color: "#9C9B9B"
          };
          var CV = {
            container: Co,
            valueLabel: Ce,
            titleLabel: CW
          };
          var CF = {
            backgroundColor: "#262121"
          };
          var Cf = {
            color: "#A7A6A6"
          };
          var Cq = {
            color: "rgba(167,166,166, 0.5)"
          };
          var Cu = {
            container: CF,
            valueLabel: Cf,
            titleLabel: Cq
          };
          var Ca = __importDefault(M);
          var CX = shell.I18n;
          function J3(t1) {
            var t2 = {
              width: t1.size,
              marginLeft: t1.marginLeft
            };
            var t3 = {
              fontSize: "11px"
            };
            var t4 = {
              fontSize: "12px"
            };
            var t5 = Object.assign({}, CY, t2);
            var t6 = t1.useSmallFont ? t3 : t4;
            t6.lineHeight = t1.valueLineHeight ? t1.valueLineHeight : t6.fontSize;
            var t7 = t1.isCard ? Cu : CV;
            var t8 = Object.assign({}, CO, t7.valueLabel);
            var t9 = Object.assign({}, Cv, t7.titleLabel);
            var tG = {
              className: "transaction-detail-item",
              style: t5
            };
            var tE = {
              height: "23px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            };
            var tC = {
              'id': "detail-item-holder",
              style: tE
            };
            t8.color = t1.valueLabelColor ? t1.valueLabelColor : t8.color;
            t9.color = t1.keyLabelColor ? t1.keyLabelColor : t9.color;
            return Ca["default"].createElement("div", tG, Ca["default"].createElement("div", tC, Ca["default"].createElement("div", {
              'id': t1.keyName + "-item-value",
              'style': Object.assign({}, t8, t6)
            }, t1.value)), Ca["default"].createElement("div", {
              'id': t1.keyName + "-item-key",
              'style': t9
            }, t1.keyName));
          }
          function J5(t1, t2) {
            if (undefined === t2) {
              t2 = 0xe;
            }
            if (t1.length > t2 && t1.indexOf(" ") < 0x0) {
              var t3 = Math.floor(t1.length / 0x2);
              return t1.slice(0x0, t3) + " " + t1.slice(t3, t1.length);
            }
            return t1;
          }
          Cj["default"] = function (t1) {
            var t2 = t1.isCard ? Cu : CV;
            var t3 = Object.assign({}, CB, t2.container);
            var t4 = t1.currencySymbol ? CX.t("History.HistoryRecordPayout") + '(' + t1.currencySymbol + ')' : '' + CX.t("History.HistoryRecordPayout");
            var t5 = t1.currencySymbol ? CX.t("History.HistoryRecordWin") + '(' + t1.currencySymbol + ')' : '' + CX.t("History.HistoryRecordWin");
            var t6 = t1.currencySymbol ? CX.t("History.HistoryRecordBalance") + '(' + t1.currencySymbol + ')' : '' + CX.t("History.HistoryRecordBalance");
            var t7 = t1.transactionId.length > 0xe || t1.betValue.length > 0xa || t1.profitValue.length > 0xa || t1.balance.length > 0x10;
            var t8 = J5(t1.transactionId);
            t3.backgroundColor = t1.backgroundColor ? t1.backgroundColor : t3.backgroundColor;
            if (t1.isRTL) {
              t3.direction = "rtl";
            }
            return Ca["default"].createElement("div", {
              'id': "transaction-details-container",
              'style': t3
            }, Ca["default"].createElement(J3, {
              'keyName': CX.t("History.HistoryRecordTransaction"),
              'value': t8,
              'size': "27%",
              'useSmallFont': t7,
              'valueLineHeight': "12px",
              'isCard': t1.isCard,
              'keyLabelColor': t1.keyLabelColor,
              'valueLabelColor': t1.valueLabelColor
            }), Ca["default"].createElement(J3, {
              'keyName': t4,
              'value': J5(t1.betValue, 0xb),
              'size': "18%",
              'marginLeft': "10px",
              'useSmallFont': t7,
              'valueLineHeight': "12px",
              'isCard': t1.isCard,
              'keyLabelColor': t1.keyLabelColor,
              'valueLabelColor': t1.valueLabelColor
            }), Ca["default"].createElement(J3, {
              'keyName': t5,
              'value': J5(t1.profitValue, 0xc),
              'size': "20%",
              'marginLeft': "10px",
              'useSmallFont': t7,
              'valueLineHeight': "12px",
              'isCard': t1.isCard,
              'keyLabelColor': t1.keyLabelColor,
              'valueLabelColor': t1.valueLabelColor
            }), Ca["default"].createElement(J3, {
              'keyName': t6,
              'value': J5(t1.balance, 0x11),
              'size': "27%",
              'marginLeft': "10px",
              'useSmallFont': t7,
              'valueLineHeight': "12px",
              'isCard': t1.isCard,
              'keyLabelColor': t1.keyLabelColor,
              'valueLabelColor': t1.valueLabelColor
            }));
          };
          var J6 = {};
          var J7 = {
            value: true
          };
          Object.defineProperty(J6, "__esModule", J7);
          var J8 = {
            fontSize: "12px",
            textAlign: "left",
            padding: "0px 8px"
          };
          var J9 = {
            color: "#808080",
            fontSize: "12px",
            textAlign: "left",
            padding: "0px 8px"
          };
          var JG = {
            position: "relative",
            width: "300px",
            height: "inherit",
            alignSelf: "center"
          };
          var JE = {
            content: " ",
            left: "90%",
            border: "solid transparent",
            height: '0',
            width: '0',
            position: "absolute",
            pointerEvents: "none",
            borderWidth: "6px",
            marginLeft: '-6',
            borderBottomColor: "#464653",
            bottom: "98%"
          };
          var JC = {
            backgroundColor: "#464653",
            color: "#fff",
            borderRadius: "6px",
            padding: "5px"
          };
          var JJ = {
            descText: J8,
            titleText: J9,
            tooltip: JG,
            tooltipArrow: JE,
            tooltipToast: JC
          };
          var Jt = __importDefault(M);
          function Jg(t1) {
            var t2 = {
              isActive: false
            };
            if (Eu.tooltipViewModel.currentTarget && Eu.tooltipViewModel.currentTarget.contains(t1.target)) {
              t1.stopPropagation();
            }
            Eu.tooltipViewModel.update(t2);
            var t3 = document.getElementById("game-details-page-container");
            if (t3) {
              t3.removeEventListener("click", Jg);
            }
          }
          var JM = function (t1) {
            function t2(t3) {
              var t4 = t1.call(this, t3) || this;
              var t5 = {
                isActive: false,
                title: '',
                desc: '',
                posY: 0x0
              };
              t4.state = t5;
              return t4;
            }
            __extends(t2, t1);
            t2.prototype.componentDidUpdate = function () {
              if (this.state.isActive) {
                var t3 = document.getElementById("game-details-page-container");
                if (t3) {
                  t3.addEventListener("click", Jg);
                }
              }
            };
            t2.prototype.componentWillUnmount = function () {
              var t3 = document.getElementById("game-details-page-container");
              if (t3) {
                t3.removeEventListener("click", Jg);
              }
              Eu.tooltipViewModel.dispose("tooltipProps");
            };
            t2.prototype.componentDidMount = function () {
              var t3 = this;
              Eu.tooltipViewModel.observe("tooltipProps", function (t4) {
                var t5 = {
                  isActive: t4.isActive,
                  title: t4.title,
                  desc: t4.desc,
                  posY: t4.posY
                };
                t3.setState(t5);
              });
            };
            t2.prototype.render = function () {
              var t3 = this.state.isActive ? "visible" : "hidden";
              var t4 = this.state.desc;
              var t5 = this.state.title;
              var t6 = this.state.posY;
              var t7 = __assign(__assign({}, JJ.tooltip), {
                'visibility': t3,
                'top': '-' + t6 + 'px'
              });
              var t8 = __assign({}, JJ.titleText);
              var t9 = __assign({}, JJ.descText);
              var tG = __assign({}, JJ.tooltipArrow);
              if (this.props.isRTL) {
                t8.textAlign = "right";
                t9.textAlign = "right";
                var tE = tG.left;
                tG.right = tE;
                delete tG.left;
              }
              var tC = {
                'id': "tooltip",
                style: t7
              };
              var tJ = {
                style: tG
              };
              var tP = {
                'id': "tooltip-toast",
                style: JJ.tooltipToast
              };
              var tw = {
                'id': "tooltip-title",
                style: t8
              };
              var tl = {
                'id': "tooltip-desc",
                style: t9
              };
              return Jt["default"].createElement("div", tC, Jt["default"].createElement("div", tJ), Jt["default"].createElement("div", tP, Jt["default"].createElement("div", tw, t5), Jt["default"].createElement("div", tl, t4)));
            };
            return t2;
          }(Jt["default"].Component);
          J6["default"] = JM;
          var Jk = {};
          var JQ = {
            value: true
          };
          !function (t1) {
            var t2 = {
              value: true
            };
            Object.defineProperty(t1, "__esModule", t2);
            (function (t3) {
              t3.BET_SIZE = "History.HistoryTipsBetSize";
              t3.BET_LEVEL = "History.HistoryTipsBetLevel";
              t3.PAYOUT = "History.HistoryTipsPayout";
              t3.WAYS = "History.HistoryTipsWay";
              t3.COUNTS = "History.HistoryTipsSymbolCount";
              t3.MULTIPLIER = "History.HistoryTipsMultiplier";
            })(t1.WinCalculation || (t1.WinCalculation = {}));
          }(Jk);
          Object.defineProperty(Ec, "__esModule", JQ);
          var Jn = __importDefault(ER);
          var JH = Ec.BetInformation = Jn["default"];
          var JI = __importDefault(Ed);
          var JD = Ec.NoWinningCombination = JI["default"];
          var JK = __importDefault(Ef);
          Ec.Payline = JK["default"];
          var Jb = __importDefault(Cy);
          var JZ = Ec.PayoutTitle = Jb["default"];
          var Jc = __importDefault(Cj);
          Ec.TransactionDetails = Jc["default"];
          var JR;
          var Jy;
          var JL;
          var Jp = __importDefault(J6);
          var Jh = Ec.Tooltip = Jp["default"];
          var JU = __importDefault(Eq);
          var JS = Ec.TooltipWrapper = JU["default"];
          var Jm = Ec.WinCalculation = Jk.WinCalculation;
          var JT = function () {
            function t1(t2) {
              this.k = undefined;
              this.T = undefined;
              this.H = undefined;
              this.L = undefined;
              this.S = undefined;
              this.I = undefined;
              if (t2) {
                var t3 = t2.aw;
                var t4 = t2.bl;
                var t5 = t2.cs;
                var t6 = t2.lw;
                var t7 = t2.ml;
                var t8 = t2.np;
                var t9 = t2.nst;
                var tG = t2.orl;
                var tE = t2.psid;
                var tC = t2.rl;
                var tJ = t2.sid;
                var tP = t2.st;
                var tw = t2.tb;
                var tl = t2.tw;
                var tg = t2.wbn;
                var tM = t2.wfg;
                var tk = t2.wid;
                var tQ = t2.wk;
                var tn = t2.wp;
                var tH = t2.wt;
                var tI = t2.rwsp;
                var tD = t2.irs;
                var tK = t2.fws;
                var tb = t2.ist;
                var tZ = t2.wc;
                var tc = t2.itw;
                var tR = t2.totalRound;
                var ty = t2.currentRound;
                this.N = tI;
                this.D = tn;
                if (tn) {
                  this.R = Object.keys(tn);
                  this.A(tn);
                }
                this.M = t6;
                this.F = tJ;
                this.B = tC;
                this.P = tG;
                this.W = t7;
                this.V = t5;
                this.Y = tE;
                this.G = tP;
                this.U = t9;
                this.K = tk;
                this.J = tH;
                this.$ = tQ;
                this.q = t4;
                this.X = tw;
                this.Z = t3;
                this.tt = tg;
                this.et = tM;
                this.it = tl;
                this.nt = t8;
                this.k = tD;
                this.T = tK;
                this.H = tb;
                this.L = tZ;
                this.S = tc;
                this.rt = tR;
                this.ot = ty;
              }
            }
            Object.defineProperty(t1.prototype, "winSymbolPayouts", {
              'get': function () {
                return this.N;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "currentSpinId", {
              'get': function () {
                return this.F;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "prevSpinId", {
              'get': function () {
                return this.Y;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "originalReels", {
              'get': function () {
                return this.P;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "reels", {
              'get': function () {
                return this.B;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "betLevelValue", {
              'get': function () {
                return this.W;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "betSizeValue", {
              'get': function () {
                return this.V;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "winLines", {
              'get': function () {
                return this.D;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "winLineNumbers", {
              'get': function () {
                return this.R;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "winValues", {
              'get': function () {
                return this.M;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "totalWin", {
              'get': function () {
                return this.it;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "netProfit", {
              'get': function () {
                return this.nt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "stateTransitionFrom", {
              'get': function () {
                return this.G;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "stateTransitionTo", {
              'get': function () {
                return this.U;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "walletId", {
              'get': function () {
                return this.K;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "walletType", {
              'get': function () {
                return this.J;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "walletKey", {
              'get': function () {
                return this.$;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "balance", {
              'get': function () {
                return this.q;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "totalBalance", {
              'get': function () {
                return this.X;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "amountWin", {
              'get': function () {
                return this.Z;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "isRespin", {
              'get': function () {
                return this.k;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "featureWinSymbol", {
              'get': function () {
                return this.T;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "isShowTease", {
              'get': function () {
                return this.H;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "wildCount", {
              'get': function () {
                return this.L;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "isTriggerWild", {
              'get': function () {
                return this.S;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "winPositions", {
              'get': function () {
                return this.I;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "walletBonus", {
              'get': function () {
                return this.tt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "walletFreeGame", {
              'get': function () {
                return this.et;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "totalRound", {
              'get': function () {
                return this.rt;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "currentRound", {
              'get': function () {
                return this.ot;
              },
              'enumerable': false,
              'configurable': true
            });
            t1.prototype.A = function (t2) {
              var t3 = [];
              Object.keys(t2).forEach(function (t4) {
                t2[t4].forEach(function (t5) {
                  if (!t3.includes(t5)) {
                    t3.push(t5);
                  }
                });
              });
              this.I = t3;
            };
            return t1;
          }();
          !function (t1) {
            t1[t1.NORMAL = 0x1] = "NORMAL";
            t1[t1.RESPIN = 0x4] = "RESPIN";
          }(Jy || (Jy = {}));
          (function (t1) {
            t1[t1.WILD = 0x0] = "WILD";
            t1[t1.SCATTER = 0x1] = "SCATTER";
            t1[t1.INGOTS = 0x2] = "INGOTS";
            t1[t1.RUYI = 0x3] = "RUYI";
            t1[t1.MONEYBAG = 0x4] = "MONEYBAG";
            t1[t1.REDPACKETS = 0x5] = "REDPACKETS";
            t1[t1.FIRECRACKER = 0x6] = "FIRECRACKER";
            t1[t1.ORANGE = 0x7] = "ORANGE";
            t1[t1.EMPTY = 0x63] = "EMPTY";
          })(JL || (JL = {}));
          var Js;
          (JR = {
            [JL.SCATTER]: "s_scatter",
            [JL.INGOTS]: "h_ingots",
            [JL.RUYI]: "h_ruyi",
            [JL.MONEYBAG]: "h_pouch",
            [JL.REDPACKETS]: "h_angpau",
            [JL.FIRECRACKER]: "h_crackers",
            [JL.ORANGE]: "h_orange",
            [JL.EMPTY]: ''
          })[JL.WILD] = "s_wild";
          !function (t1) {
            t1[t1.noWin = 0x0] = "noWin";
            t1[t1.win = 0x1] = "win";
            t1[t1.respin = 0x2] = "respin";
          }(Js || (Js = {}));
          var Jx = {
            display: "flex",
            width: "300px",
            margin: "auto"
          };
          var Jj = {
            display: "flex",
            position: "relative",
            width: "300px",
            margin: "auto auto 20px auto",
            flexDirection: "column"
          };
          var Jd = {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            height: "inherit",
            marginTop: "-10px"
          };
          var JB = {
            position: "relative",
            minWidth: "72px",
            width: "72px",
            height: "inherit",
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto"
          };
          var JY = {
            width: "70px",
            height: "64px"
          };
          var JO = {
            display: "block",
            position: "absolute",
            transformOrigin: "top left"
          };
          var Jv = {
            display: "flex",
            position: "relative",
            transformOrigin: "top left",
            minWidth: "15px",
            width: "15px"
          };
          var Jo = {
            mainView: Jx,
            betResultsContainer: Jj,
            rowContainer: Jd,
            slotItemColumn: JB,
            slotItemContainer: JY,
            imgTransformator: JO,
            rowItemContainer: Jv
          };
          var JW = function (t1) {
            function t2(t3) {
              return t1.call(this, t3) || this;
            }
            EJ(t2, t1);
            t2.prototype.render = function () {
              var t3 = {
                transform: "scale(0.47)",
                marginTop: "-25px",
                marginLeft: "24px",
                height: "700px"
              };
              var t4 = this.props.data;
              var t5 = t4.reels;
              var t6 = t4.winPositions;
              var t7 = t4.isRespin;
              var t8 = this.lt(t5);
              var t9 = EP(EP({}, Jo.imgTransformator), t3);
              var tG = undefined;
              var tE = {
                'id': "slot-main-view",
                key: "slot-main-view",
                style: Jo.mainView
              };
              var tC = {
                'id': "bet-results-container",
                key: "bet-results-container",
                style: Jo.betResultsContainer
              };
              var tJ = {
                className: "history_assets ui_reel_frame",
                key: "reel-bg",
                style: t9
              };
              var tP = {
                'id': "symbols-container",
                key: "symbols-container",
                style: Jo.rowContainer
              };
              if (t7) {
                tG = t5[t6[0x0]];
              }
              return M.createElement("div", tE, M.createElement("div", tC, M.createElement("span", tJ), M.createElement("div", tP, this.ut(t8, t6, tG))));
            };
            t2.prototype.lt = function (t3) {
              var t4 = [];
              for (var t5 = 0x0; t5 < 0x3; t5++) {
                t4.push([]);
              }
              t3.forEach(function (t6, t7) {
                var t8 = Math.floor(t7 / 0x3);
                if (t8 < 0x3) {
                  t4[t8].push(t6);
                }
              });
              return t4;
            };
            t2.prototype.ut = function (t3, t4, t5) {
              var t6 = this;
              var t7 = 0x0;
              return t3.map(function (t8, t9) {
                var tG = t8.map(function (tC, tJ) {
                  var tP = Js.noWin;
                  if (t5) {
                    if (t5 === tC && t4.includes(t7)) {
                      tP = Js.respin;
                    }
                  } else if (t4 && t4.includes(t7)) {
                    tP = Js.win;
                  }
                  var tw = t6.ct(tC, tJ, tP);
                  t7++;
                  return tw;
                });
                var tE = {
                  'id': "slot-item-column",
                  key: "slot-item-column-" + t9,
                  style: Jo.slotItemColumn
                };
                return M.createElement("div", tE, tG);
              });
            };
            t2.prototype.ct = function (t3, t4, t5) {
              var t6 = JR[t3];
              var t7 = this.ht(t3);
              var t8 = "symbol_atlas";
              if (!(t3 !== JL.WILD && t3 !== JL.SCATTER)) {
                t8 = "special_symbol_atlas";
              }
              var t9 = "slot-item-" + t4;
              var tG = {
                'id': "slot-item",
                key: t9,
                style: Jo.slotItemContainer
              };
              return M.createElement("div", tG, function () {
                if (t5 !== Js.noWin) {
                  var tE = {
                    marginTop: -0x1e,
                    marginLeft: -0x1e,
                    transform: "scale(0.44)",
                    zIndex: 0x1
                  };
                  var tC = {
                    marginTop: -0x18,
                    marginLeft: -0x1c,
                    transform: "scale(0.42)",
                    zIndex: 0x1
                  };
                  var tJ;
                  var tP = EP(EP({}, Jo.imgTransformator), tE);
                  var tw = EP(EP({}, Jo.imgTransformator), tC);
                  var tl = '';
                  switch (t5) {
                    case Js.win:
                      tl = 'wh';
                      tJ = tP;
                      break;
                    case Js.respin:
                      tl = "bg_respin";
                      tJ = tw;
                  }
                  var tg = {
                    className: "history_assets " + tl,
                    key: "slot-wh-bg-" + t4,
                    style: tJ
                  };
                  return M.createElement("span", tg);
                }
              }(), M.createElement("span", {
                'className': t6 + " " + t8,
                'key': "slot-item-sprite-" + t4,
                'style': t7
              }));
            };
            t2.prototype.ht = function (t3) {
              var t4 = -0x8;
              var t5 = -0x8;
              var t6 = 0.5;
              var t7 = 0x2;
              switch (t3) {
                case JL.WILD:
                  t4 = -11.5;
                  t5 = -11.5;
                  t6 = 0.54;
                  t7 = 0x3;
                case JL.INGOTS:
                case JL.RUYI:
                case JL.MONEYBAG:
                case JL.REDPACKETS:
                case JL.FIRECRACKER:
                case JL.ORANGE:
              }
              var t8 = "scale(" + t6 + ')';
              var t9 = {
                marginTop: t4,
                marginLeft: t5,
                transform: t8,
                zIndex: t7
              };
              return EP(EP({}, Jo.imgTransformator), t9);
            };
            return t2;
          }(M.Component);
          var JV = function () {
            function t1(t2) {
              this.ft = "lrt";
              this.dt = t2;
              this.ft = t2 ? "rtl" : "ltr";
            }
            Object.defineProperty(t1.prototype, "payoutContent", {
              'get': function () {
                var t2 = {
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "inherit",
                  margin: "auto"
                };
                return t2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "payoutItemContent", {
              'get': function () {
                var t2 = {
                  display: "flex",
                  width: "270px",
                  height: "48px",
                  justifyContent: "space-between",
                  flexDirection: this.dt ? "row-reverse" : "row"
                };
                return t2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "imgTransformator", {
              'get': function () {
                var t2 = {
                  display: "block",
                  transformOrigin: this.dt ? "top right" : "top left"
                };
                return t2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "commonSymbolContainer", {
              'get': function () {
                var t2 = {
                  minWidth: this.dt ? "30px" : "50px",
                  width: "50px",
                  height: "inherit",
                  position: "relative"
                };
                return t2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "commonItemContainer", {
              'get': function () {
                var t2 = {
                  display: "flex",
                  height: "inherit"
                };
                return t2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "commonMainTextContainer", {
              'get': function () {
                var t2 = {
                  width: "inherit",
                  position: "relative",
                  flexDirection: "column"
                };
                return t2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "commonMainText", {
              'get': function () {
                var t2 = {
                  fontSize: "12px",
                  color: "rgba(255, 255, 255, 1)",
                  textAlign: this.dt ? "right" : "left"
                };
                return t2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "commonMainSubText", {
              'get': function () {
                var t2 = {
                  fontSize: "10px",
                  color: "rgba(255, 255, 255, 0.4)"
                };
                return t2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "commonSecondaryTextContainer", {
              'get': function () {
                var t2 = {
                  width: "inherit",
                  position: "relative",
                  marginTop: "10px"
                };
                return t2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "commonSecondaryText", {
              'get': function () {
                var t2 = {
                  fontSize: "12px",
                  color: "rgba(255, 255, 255, 1)",
                  textAlign: this.dt ? "left" : "right"
                };
                return t2;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(t1.prototype, "commonSecondarySubText", {
              'get': function () {
                var t2 = {
                  fontSize: "10px",
                  color: "rgba(255, 255, 255, 0.4)",
                  textAlign: this.dt ? "left" : "right"
                };
                return t2;
              },
              'enumerable': false,
              'configurable': true
            });
            return t1;
          }();
          var JF = function (t1) {
            function t2(t3) {
              var t4 = t1.call(this, t3) || this;
              t4.baseStyles = new JV(t4.props.isRTL);
              return t4;
            }
            EJ(t2, t1);
            t2.prototype.render = function () {
              var t3 = this.baseStyles;
              var t4 = {
                'id': "payout-main-view",
                key: "payout-main-view",
                style: t3.payoutContent
              };
              return M.createElement("div", t4, this.gt());
            };
            t2.prototype.gt = function () {
              var t3 = [];
              var t4 = this.props.data;
              var t5 = t4.winLines;
              var t6 = t4.winValues;
              var t7 = t4.isRespin;
              var t8 = t4.winPositions;
              if (t7) {
                t3.push(this.bt());
              } else {
                var t9 = 0x1;
                if (t8 && 0x9 === t8.length) {
                  t9 = 0xa;
                  t3.push(this.vt(t9));
                }
                if (t5) {
                  t3.push(this.yt(t5, t6, t9));
                }
              }
              var tG = {
                key: "no-winning-combination"
              };
              if (!t5) {
                t3.push(M.createElement(JD, tG));
              }
              return t3;
            };
            t2.prototype.vt = function (t3) {
              var t4 = shell.I18n.t("FTHistory.HistoryMultiplierDescription", {
                'value': t3.toString()
              });
              return this.xt("Multiplier", t4);
            };
            t2.prototype.bt = function () {
              var t3 = {
                minWidth: 0x5a,
                width: 0x5a,
                marginTop: 0x5
              };
              var t4 = {
                textAlign: "right"
              };
              var t5 = this.baseStyles;
              var t6 = this.props.isRTL;
              var t8 = EP(EP({}, t5.commonMainTextContainer), {
                'minWidth': t6 ? 0xe6 : 0xb4,
                'width': t6 ? 0xe6 : 0xb4,
                'marginTop': 0x5
              });
              var t9 = EP(EP({}, t5.commonMainTextContainer), t3);
              var tG = EP(EP({}, t5.commonMainText), t4);
              var tE = shell.I18n.t("FTHistory.HistoryFeature");
              var tC = shell.I18n.t("FTHistory.HistoryFeatureRespin");
              var tJ = {
                className: "respinContainer",
                key: "payout-container",
                style: t5.payoutItemContent
              };
              var tP = {
                className: "respinDescContainer",
                key: "respin-desc-container",
                style: t8
              };
              var tw = {
                className: "Desc",
                key: "desc",
                style: t5.commonMainText
              };
              var tl = {
                className: "respinTextContainer",
                key: "respin-text-container",
                style: t9
              };
              var tg = {
                className: "respinTitle",
                key: "respin-title",
                style: tG
              };
              return M.createElement("div", tJ, M.createElement("div", tP, M.createElement("div", tw, '' + tE)), M.createElement("div", tl, M.createElement("div", tg, '' + tC)));
            };
            t2.prototype.yt = function (t3, t4, t5) {
              var t6 = this.props.data;
              var t7 = t6.betLevelValue;
              var t8 = t6.betSizeValue;
              var t9 = t6.winSymbolPayouts;
              var tG = this.props.isRTL;
              var tE = [];
              var tC = this.xt.bind(this);
              Object.keys(t3).forEach(function (tJ) {
                var tP;
                var tw;
                var tl = "payline_0" + tJ + " payline_atlas";
                var tg = t4[tJ];
                var tM = k.formatCurrency(tg * t5);
                var tQ = t5 > 0x1 ? tG ? t5 + " x " + k.formatCurrency(tg) : k.formatCurrency(tg) + " x " + t5 : undefined;
                var tn = t9 ? t9[tJ] : function () {
                  var tD = [];
                  for (var tK = 0x0; tK < arguments.length; tK++) {
                    tD[tK] = arguments[tK];
                  }
                  var tb = tD.reduce(function (tZ, tc) {
                    return tZ / tc;
                  });
                  return Math.round(tb);
                }(tg, t7, t8);
                var tH = {};
                if (t5 > 0x1) {
                  (tP = {})[Jm.BET_SIZE] = k.formatCurrency(t8, '');
                  tP[Jm.BET_LEVEL] = t7;
                  tP[Jm.PAYOUT] = tn;
                  tP[Jm.MULTIPLIER] = t5;
                  tH = tP;
                } else {
                  (tw = {})[Jm.BET_SIZE] = k.formatCurrency(t8, '');
                  tw[Jm.BET_LEVEL] = t7;
                  tw[Jm.PAYOUT] = tn;
                  tH = tw;
                }
                Object.keys(tH).forEach(function (tD) {
                  tH[tD] = k.formatGroup(tH[tD]);
                });
                var tI = tC(tJ, tM, tQ, tl, undefined, undefined, tH);
                tE.push(tI);
              });
              return tE;
            };
            t2.prototype.xt = function (t3, t4, t5, t6, t7, t8, t9) {
              var tG = {
                minWidth: 0x19,
                width: 0x19,
                marginTop: 0xa
              };
              var tE = {
                marginBottom: 0x0
              };
              var tC = this.baseStyles;
              var tJ = this.props.isRTL;
              var tw = EP(EP({}, tC.commonMainText), tG);
              var tl = EP(EP({}, tC.payoutItemContent), tE);
              if (tJ) {
                tl.marginLeft = 0xa;
              } else {
                tl.marginRight = 0x12;
              }
              var tg = t8 ? 0x5 : 0xa;
              var tM = t6 || t7 ? 0x82 : 0x0;
              var tk = EP(EP({}, tC.commonMainTextContainer), {
                'minWidth': tM,
                'width': tM,
                'marginTop': tg
              });
              var tQ = t5 ? 0x5 : 0xa;
              var tn = t6 && t7 ? 0x5a : "inherit";
              var tH = EP(EP({}, tC.commonMainTextContainer), {
                'minWidth': tn,
                'width': tn,
                'marginTop': tQ
              });
              var tI = t6 ? tC.commonSecondaryText : tC.commonMainText;
              var tD = EP({}, tI);
              if (tJ && "Multiplier" === t3) {
                tD.direction = "rtl";
              }
              var tK = function () {
                var tb = {
                  className: "payoutContainer",
                  key: "payout-container-" + t3,
                  style: tl
                };
                return M.createElement("div", tb, function () {
                  var tZ = {
                    className: "payoutIndexContainer",
                    key: "payout-index-container-" + t3,
                    style: tw
                  };
                  if (t6) {
                    return M.createElement("div", tZ, '0' + t3);
                  }
                }(), function () {
                  var tZ = {
                    transform: "scale(1.3)",
                    marginTop: "2px",
                    marginLeft: "0px"
                  };
                  var tc = EP(EP({}, tC.imgTransformator), tZ);
                  var tR = {
                    className: "payoutImageContainer",
                    key: "payout-image-container",
                    style: tC.commonSymbolContainer
                  };
                  if (t6) {
                    return M.createElement("div", tR, M.createElement("span", {
                      'className': '' + t6,
                      'key': "payout-image-" + t3,
                      'style': tc
                    }));
                  }
                }(), M.createElement("div", {
                  'className': "payoutDescContainer",
                  'key': "payout-desc-container-" + t3,
                  'style': tk
                }, function () {
                  var tZ = {
                    className: "Desc",
                    key: "desc-" + t3,
                    style: tC.commonMainText
                  };
                  if (t7) {
                    return M.createElement("div", tZ, '' + t7);
                  }
                }(), function () {
                  var tZ = {
                    className: "bottomDesc",
                    key: "payout-desc-" + t3,
                    style: tC.commonMainSubText
                  };
                  if (t8) {
                    return M.createElement("div", tZ, '' + t8);
                  }
                }()), M.createElement("div", {
                  'className': "payoutTextContainer",
                  'key': "payout-text-container-" + t3,
                  'style': tH
                }, M.createElement("div", {
                  'className': "payoutTitle",
                  'key': "payout-title-" + t3,
                  'style': tD
                }, '' + t4), function () {
                  var tZ = t6 ? tC.commonSecondarySubText : tC.commonMainSubText;
                  var tc = EP({}, tZ);
                  var tR = {
                    className: "payoutText",
                    key: "payout-text-" + t3,
                    style: tc
                  };
                  if (t5) {
                    return M.createElement("div", tR, '' + t5);
                  }
                }()));
              };
              return t9 ? M.createElement(JS, {
                'key': "payout-item-" + t3,
                'winCalculation': t9,
                'isRTL': tJ
              }, tK()) : tK();
            };
            return t2;
          }(M.Component);
          JF.contextType = Eb;
          var Jf = {
            display: "flex",
            flexDirection: "column"
          };
          var Jq = {
            betDetailContainer: Jf
          };
          var Jz = function (t1) {
            function t2() {
              var t3 = null !== t1 && t1.apply(this, arguments) || this;
              var t4 = {
                cssFile: ".symbol_atlas{display:inline-block;overflow:hidden;background-repeat:no-repeat;background-image:url(symbol.png)}.h_angpau{background-position:-1px -1px}.h_angpau,.h_crackers{width:180px;height:180px}.h_crackers{background-position:-183px -1px}.h_ingots{background-position:-365px -1px}.h_ingots,.h_orange{width:180px;height:180px}.h_orange{background-position:-547px -1px}.h_pouch{background-position:-729px -1px}.h_pouch,.h_ruyi{width:180px;height:180px}.h_ruyi{background-position:-911px -1px}",
                imageFile: "history/symbol.png",
                appendHeader: true
              };
              var t5 = {
                cssFile: ".special_symbol_atlas{display:inline-block;overflow:hidden;background-repeat:no-repeat;background-image:url(special_symbol.png)}.s_wild{width:180px;height:180px;background-position:-1px -1px}",
                imageFile: "history/special_symbol.png",
                appendHeader: true
              };
              var t6 = {
                cssFile: ".history_assets{display:inline-block;overflow:hidden;background-repeat:no-repeat;background-image:url(history_assets.png)}.bg_respin{width:300px;height:300px;background-position:-1px -1px}.ui_reel_frame{width:540px;height:456px;background-position:-1px -303px}.wh{width:300px;height:300px;background-position:-303px -1px}",
                imageFile: "history/history_assets.png",
                appendHeader: true
              };
              var t7 = {
                cssFile: ".payline_atlas{display:inline-block;overflow:hidden;background-repeat:no-repeat;background-image:url(payline.png)}.payline_01{width:30px;height:24px;background-position:-1px -1px}.payline_02{width:30px;height:24px;background-position:-33px -1px}.payline_03{width:30px;height:24px;background-position:-65px -1px}.payline_04{width:30px;height:24px;background-position:-97px -1px}.payline_05{width:30px;height:24px;background-position:-129px -1px}",
                imageFile: "history/payline.png",
                appendHeader: true
              };
              t3._t = "FortuneTiger";
              t3.u = [t4, t5, t6, t7];
              return t3;
            }
            EJ(t2, t1);
            t2.prototype.getNavTitle = function (t3, t4) {
              return 0x0 === t4 ? shell.I18n.t("History.HistoryNormalSpin") : shell.I18n.t("FTHistory.HistoryFeatureRespin") + ": " + t4 + '/' + (t3.length - 0x1);
            };
            t2.prototype.showNavArrowDropDown = function (t3) {
              return t3.length > 0x1;
            };
            t2.prototype.getAdditionalSpinsTitle = function () {
              return shell.I18n.t("FTHistory.HistoryFeatureRespin");
            };
            return t2;
          }(EZ);
          var t0 = function (t1) {
            function t2(t3) {
              var t4 = t1.call(this, t3) || this;
              t4.state = {
                'gameDetailModel': new JT(t4.props.data)
              };
              return t4;
            }
            EJ(t2, t1);
            t2.prototype.componentDidUpdate = function (t3) {
              if (this.props.data !== t3.data) {
                this.setState({
                  'gameDetailModel': new JT(this.props.data)
                });
              }
            };
            t2.prototype.render = function () {
              var t3 = {
                'id': "bet-details-container",
                style: Jq.betDetailContainer
              };
              var t4 = {
                isBO: false
              };
              var t5 = {
                value: t4
              };
              return M.createElement("div", t3, M.createElement(Eb.Provider, t5, M.createElement(JH, {
                'betSize': k.formatCurrency(this.state.gameDetailModel.betSizeValue, ''),
                'betLevel': this.state.gameDetailModel.betLevelValue,
                'totalRoundCount': this.state.gameDetailModel.totalRound,
                'currentRoundCount': this.state.gameDetailModel.currentRound,
                'themeColor': "#FF9200",
                'isRTL': this.props.isRTL
              }), M.createElement(JW, {
                'data': this.state.gameDetailModel
              }), M.createElement(JZ, null), M.createElement(JF, {
                'data': this.state.gameDetailModel,
                'isRTL': this.props.isRTL
              }), this.props.isCurrentPage && M.createElement(Jh, {
                'isRTL': this.props.isRTL
              })));
            };
            return t2;
          }(M.Component);
          g("GHBetDetailModule", new Jz(t0));
          g("GHComponentGameId", 0x7e);
        }
      };
    });
  }();
}();