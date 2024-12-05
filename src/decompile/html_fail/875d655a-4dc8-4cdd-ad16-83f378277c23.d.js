!function () {
  'use strict';

  !function () {
    var Z = function () {
      var v = true;
      return function (P, J) {
        var a = v ? function () {
          if (J) {
            var T = J.apply(P, arguments);
            J = null;
            return T;
          }
        } : function () {};
        v = false;
        return a;
      };
    }();
    var C;
    !function (v) {
      var P = Z(this, function () {
        return P.toString().search("(((.+)+)+)+$").toString().constructor(P).search("(((.+)+)+)+$");
      });
      P();
      v.u = "window";
      v.l = "self";
    }(C || (C = {}));
    var L = (0x0, eval)("this");
    var x = L[C.l];
    var r = L[C.u];
    !function () {
      'use strict';

      var Z0 = function (Tq, Tm) {
        Z0 = Object.setPrototypeOf || {
          '__proto__': []
        } instanceof Array && function (TS, Tw) {
          TS.__proto__ = Tw;
        } || function (TS, Tw) {
          for (var TE in Tw) if (Object.prototype.hasOwnProperty.call(Tw, TE)) {
            TS[TE] = Tw[TE];
          }
        };
        return Z0(Tq, Tm);
      };
      function Z1(Tq, Tm) {
        if ("function" != typeof Tm && null !== Tm) {
          throw new TypeError("Class extends value " + Tm + " is not a constructor or null");
        }
        function TS() {
          this.constructor = Tq;
        }
        Z0(Tq, Tm);
        Tq.prototype = null === Tm ? Object.create(Tm) : (TS.prototype = Tm.prototype, new TS());
      }
      var Z2 = function () {
        Z2 = Object.assign || function (Tq) {
          var Tm;
          var TS = 0x1;
          for (var Tw = arguments.length; TS < Tw; TS++) {
            for (var TE in Tm = arguments[TS]) if (Object.prototype.hasOwnProperty.call(Tm, TE)) {
              Tq[TE] = Tm[TE];
            }
          }
          return Tq;
        };
        return Z2.apply(this, arguments);
      };
      function Z3(Tq, Tm, TS, Tw) {
        return new (TS || (TS = Promise))(function (TE, Tp) {
          function Tj(TG) {
            try {
              Tg(Tw.next(TG));
            } catch (Tb) {
              Tp(Tb);
            }
          }
          function Tk(TG) {
            try {
              Tg(Tw["throw"](TG));
            } catch (Tb) {
              Tp(Tb);
            }
          }
          function Tg(TG) {
            var Tb;
            if (TG.done) {
              TE(TG.value);
            } else {
              Tb = TG.value;
              (Tb instanceof TS ? Tb : new TS(function (TQ) {
                TQ(Tb);
              })).then(Tj, Tk);
            }
          }
          Tg((Tw = Tw.apply(Tq, Tm || [])).next());
        });
      }
      function Z4(Tq, Tm) {
        var TS;
        var Tw;
        var TE;
        var Tp;
        var Tj = {
          'label': 0x0,
          'sent': function () {
            if (0x1 & TE[0x0]) {
              throw TE[0x1];
            }
            return TE[0x1];
          },
          'trys': [],
          'ops': []
        };
        Tp = {
          'next': Tk(0x0),
          'throw': Tk(0x1),
          'return': Tk(0x2)
        };
        if ("function" == typeof Symbol) {
          Tp[Symbol.iterator] = function () {
            return this;
          };
        }
        return Tp;
        function Tk(Tg) {
          return function (TG) {
            return function (Tb) {
              if (TS) {
                throw new TypeError("Generator is already executing.");
              }
              for (; Tp && (Tp = 0x0, Tb[0x0] && (Tj = 0x0)), Tj;) {
                try {
                  TS = 0x1;
                  if (Tw && (TE = 0x2 & Tb[0x0] ? Tw["return"] : Tb[0x0] ? Tw["throw"] || ((TE = Tw["return"]) && TE.call(Tw), 0x0) : Tw.next) && !(TE = TE.call(Tw, Tb[0x1])).done) {
                    return TE;
                  }
                  Tw = 0x0;
                  if (TE) {
                    Tb = [0x2 & Tb[0x0], TE.value];
                  }
                  switch (Tb[0x0]) {
                    case 0x0:
                    case 0x1:
                      TE = Tb;
                      break;
                    case 0x4:
                      Tj.label++;
                      return {
                        'value': Tb[0x1],
                        'done': false
                      };
                    case 0x5:
                      Tj.label++;
                      Tw = Tb[0x1];
                      Tb = [0x0];
                      continue;
                    case 0x7:
                      Tb = Tj.ops.pop();
                      Tj.trys.pop();
                      continue;
                    default:
                      if (!((TE = (TE = Tj.trys).length > 0x0 && TE[TE.length - 0x1]) || 0x6 !== Tb[0x0] && 0x2 !== Tb[0x0])) {
                        Tj = 0x0;
                        continue;
                      }
                      if (0x3 === Tb[0x0] && (!TE || Tb[0x1] > TE[0x0] && Tb[0x1] < TE[0x3])) {
                        Tj.label = Tb[0x1];
                        break;
                      }
                      if (0x6 === Tb[0x0] && Tj.label < TE[0x1]) {
                        Tj.label = TE[0x1];
                        TE = Tb;
                        break;
                      }
                      if (TE && Tj.label < TE[0x2]) {
                        Tj.label = TE[0x2];
                        Tj.ops.push(Tb);
                        break;
                      }
                      if (TE[0x2]) {
                        Tj.ops.pop();
                      }
                      Tj.trys.pop();
                      continue;
                  }
                  Tb = Tm.call(Tq, Tj);
                } catch (TQ) {
                  Tb = [0x6, TQ];
                  Tw = 0x0;
                } finally {
                  TS = TE = 0x0;
                }
              }
              if (0x5 & Tb[0x0]) {
                throw Tb[0x1];
              }
              return {
                'value': Tb[0x0] ? Tb[0x1] : undefined,
                'done': true
              };
            }([Tg, TG]);
          };
        }
      }
      var Z5 = Object.create ? function (Tq, Tm, TS, Tw) {
        if (undefined === Tw) {
          Tw = TS;
        }
        var TE = Object.getOwnPropertyDescriptor(Tm, TS);
        if (!(TE && !("get" in TE ? !Tm.__esModule : TE.writable || TE.configurable))) {
          TE = {
            'enumerable': true,
            'get': function () {
              return Tm[TS];
            }
          };
        }
        Object.defineProperty(Tq, Tw, TE);
      } : function (Tq, Tm, TS, Tw) {
        if (undefined === Tw) {
          Tw = TS;
        }
        Tq[Tw] = Tm[TS];
      };
      function Z6(Tq) {
        var Tm = "function" == typeof Symbol && Symbol.iterator;
        var TS = Tm && Tq[Tm];
        var Tw = 0x0;
        if (TS) {
          return TS.call(Tq);
        }
        if (Tq && "number" == typeof Tq.length) {
          return {
            'next': function () {
              if (Tq && Tw >= Tq.length) {
                Tq = undefined;
              }
              return {
                'value': Tq && Tq[Tw++],
                'done': !Tq
              };
            }
          };
        }
        throw new TypeError(Tm ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function Z7(Tq, Tm) {
        var TS = "function" == typeof Symbol && Tq[Symbol.iterator];
        if (!TS) {
          return Tq;
        }
        var Tw;
        var TE;
        var Tp = TS.call(Tq);
        var Tj = [];
        try {
          for (; (undefined === Tm || Tm-- > 0x0) && !(Tw = Tp.next()).done;) {
            Tj.push(Tw.value);
          }
        } catch (Tk) {
          TE = {
            'error': Tk
          };
        } finally {
          try {
            if (Tw && !Tw.done && (TS = Tp["return"])) {
              TS.call(Tp);
            }
          } finally {
            if (TE) {
              throw TE.error;
            }
          }
        }
        return Tj;
      }
      function Z8(Tq, Tm, TS) {
        if (TS || 0x2 === arguments.length) {
          var Tw;
          var TE = 0x0;
          for (var Tp = Tm.length; TE < Tp; TE++) {
            if (!(!Tw && TE in Tm)) {
              if (!Tw) {
                Tw = Array.prototype.slice.call(Tm, 0x0, TE);
              }
              Tw[TE] = Tm[TE];
            }
          }
        }
        return Tq.concat(Tw || Array.prototype.slice.call(Tm));
      }
      function Z9(Tq) {
        return this instanceof Z9 ? (this.v = Tq, this) : new Z9(Tq);
      }
      var ZZ = Object.create ? function (Tq, Tm) {
        Object.defineProperty(Tq, "default", {
          'enumerable': true,
          'value': Tm
        });
      } : function (Tq, Tm) {
        Tq["default"] = Tm;
      };
      x.__assign = Z2;
      x.__asyncDelegator = function (Tq) {
        var Tm;
        var TS;
        Tm = {};
        Tw("next");
        Tw("throw", function (TE) {
          throw TE;
        });
        Tw("return");
        Tm[Symbol.iterator] = function () {
          return this;
        };
        return Tm;
        function Tw(TE, Tp) {
          Tm[TE] = Tq[TE] ? function (Tj) {
            return (TS = !TS) ? {
              'value': Z9(Tq[TE](Tj)),
              'done': false
            } : Tp ? Tp(Tj) : Tj;
          } : Tp;
        }
      };
      x.__asyncGenerator = function (Tq, Tm, TS) {
        if (!Symbol.asyncIterator) {
          throw new TypeError("Symbol.asyncIterator is not defined.");
        }
        var Tw;
        var TE = TS.apply(Tq, Tm || []);
        var Tp = [];
        Tw = {};
        Tj("next");
        Tj("throw");
        Tj("return");
        Tw[Symbol.asyncIterator] = function () {
          return this;
        };
        return Tw;
        function Tj(TQ) {
          if (TE[TQ]) {
            Tw[TQ] = function (Td) {
              return new Promise(function (I0, I1) {
                if (!(Tp.push([TQ, Td, I0, I1]) > 0x1)) {
                  Tk(TQ, Td);
                }
              });
            };
          }
        }
        function Tk(TQ, Td) {
          try {
            !function (I0) {
              if (I0.value instanceof Z9) {
                Promise.resolve(I0.value.v).then(Tg, TG);
              } else {
                Tb(Tp[0x0][0x2], I0);
              }
            }(TE[TQ](Td));
          } catch (I0) {
            Tb(Tp[0x0][0x3], I0);
          }
        }
        function Tg(TQ) {
          Tk("next", TQ);
        }
        function TG(TQ) {
          Tk("throw", TQ);
        }
        function Tb(TQ, Td) {
          TQ(Td);
          Tp.shift();
          if (Tp.length) {
            Tk(Tp[0x0][0x0], Tp[0x0][0x1]);
          }
        }
      };
      x.__asyncValues = function (Tq) {
        if (!Symbol.asyncIterator) {
          throw new TypeError("Symbol.asyncIterator is not defined.");
        }
        var Tm;
        var TS = Tq[Symbol.asyncIterator];
        return TS ? TS.call(Tq) : (Tq = Z6(Tq), Tm = {}, Tw("next"), Tw("throw"), Tw("return"), Tm[Symbol.asyncIterator] = function () {
          return this;
        }, Tm);
        function Tw(TE) {
          Tm[TE] = Tq[TE] && function (Tp) {
            return new Promise(function (Tj, Tk) {
              !function (Tg, TG, Tb, TQ) {
                Promise.resolve(TQ).then(function (Td) {
                  Tg({
                    'value': Td,
                    'done': Tb
                  });
                }, TG);
              }(Tj, Tk, (Tp = Tq[TE](Tp)).done, Tp.value);
            });
          };
        }
      };
      x.__await = Z9;
      x.__awaiter = Z3;
      x.__createBinding = Z5;
      x.__decorate = function (Tq, Tm, TS, Tw) {
        var TE;
        var Tp = arguments.length;
        var Tj = Tp < 0x3 ? Tm : null === Tw ? Tw = Object.getOwnPropertyDescriptor(Tm, TS) : Tw;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          Tj = Reflect.decorate(Tq, Tm, TS, Tw);
        } else {
          for (var Tk = Tq.length - 0x1; Tk >= 0x0; Tk--) {
            if (TE = Tq[Tk]) {
              Tj = (Tp < 0x3 ? TE(Tj) : Tp > 0x3 ? TE(Tm, TS, Tj) : TE(Tm, TS)) || Tj;
            }
          }
        }
        if (Tp > 0x3 && Tj) {
          Object.defineProperty(Tm, TS, Tj);
        }
        return Tj;
      };
      x.__exportStar = function (Tq, Tm) {
        for (var TS in Tq) if (!("default" === TS || Object.prototype.hasOwnProperty.call(Tm, TS))) {
          Z5(Tm, Tq, TS);
        }
      };
      x.__extends = Z1;
      x.__generator = Z4;
      x.__importDefault = function (Tq) {
        return Tq && Tq.__esModule ? Tq : {
          'default': Tq
        };
      };
      x.__importStar = function (Tq) {
        if (Tq && Tq.__esModule) {
          return Tq;
        }
        var Tm = {};
        if (null != Tq) {
          for (var TS in Tq) if ("default" !== TS && Object.prototype.hasOwnProperty.call(Tq, TS)) {
            Z5(Tm, Tq, TS);
          }
        }
        ZZ(Tm, Tq);
        return Tm;
      };
      x.__makeTemplateObject = function (Tq, Tm) {
        if (Object.defineProperty) {
          Object.defineProperty(Tq, "raw", {
            'value': Tm
          });
        } else {
          Tq.raw = Tm;
        }
        return Tq;
      };
      x.__metadata = function (Tq, Tm) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) {
          return Reflect.metadata(Tq, Tm);
        }
      };
      x.__param = function (Tq, Tm) {
        return function (TS, Tw) {
          Tm(TS, Tw, Tq);
        };
      };
      x.__read = Z7;
      x.__rest = function (Tq, Tm) {
        var TS = {};
        for (var Tw in Tq) if (Object.prototype.hasOwnProperty.call(Tq, Tw) && Tm.indexOf(Tw) < 0x0) {
          TS[Tw] = Tq[Tw];
        }
        if (null != Tq && "function" == typeof Object.getOwnPropertySymbols) {
          var TE = 0x0;
          for (Tw = Object.getOwnPropertySymbols(Tq); TE < Tw.length; TE++) {
            if (Tm.indexOf(Tw[TE]) < 0x0 && Object.prototype.propertyIsEnumerable.call(Tq, Tw[TE])) {
              TS[Tw[TE]] = Tq[Tw[TE]];
            }
          }
        }
        return TS;
      };
      x.__spread = function () {
        var Tq = [];
        for (var Tm = 0x0; Tm < arguments.length; Tm++) {
          Tq = Tq.concat(Z7(arguments[Tm]));
        }
        return Tq;
      };
      x.__spreadArray = Z8;
      x.__spreadArrays = function () {
        var Tq = 0x0;
        var Tm = 0x0;
        for (var TS = arguments.length; Tm < TS; Tm++) {
          Tq += arguments[Tm].length;
        }
        var Tw = Array(Tq);
        var TE = 0x0;
        for (Tm = 0x0; Tm < TS; Tm++) {
          var Tp = arguments[Tm];
          var Tj = 0x0;
          for (var Tk = Tp.length; Tj < Tk; Tj++, TE++) {
            Tw[TE] = Tp[Tj];
          }
        }
        return Tw;
      };
      x.__values = Z6;
      x.__classPrivateFieldGet = function (Tq, Tm, TS, Tw) {
        if ('a' === TS && !Tw) {
          throw new TypeError("Private accessor was defined without a getter");
        }
        if ("function" == typeof Tm ? Tq !== Tm || !Tw : !Tm.has(Tq)) {
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        }
        return 'm' === TS ? Tw : 'a' === TS ? Tw.call(Tq) : Tw ? Tw.value : Tm.get(Tq);
      };
      x.__classPrivateFieldSet = function (Tq, Tm, TS, Tw, TE) {
        if ('m' === Tw) {
          throw new TypeError("Private method is not writable");
        }
        if ('a' === Tw && !TE) {
          throw new TypeError("Private accessor was defined without a setter");
        }
        if ("function" == typeof Tm ? Tq !== Tm || !TE : !Tm.has(Tq)) {
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        }
        if ('a' === Tw) {
          TE.call(Tq, TS);
        } else if (TE) {
          TE.value = TS;
        } else {
          Tm.set(Tq, TS);
        }
        return TS;
      };
      var ZH = undefined !== L ? L : undefined !== r ? r : "undefined" != typeof global ? global : undefined !== x ? x : {};
      var ZC = "object" == typeof L && L && ("object" == typeof L && L).Math == Math && "object" == typeof L && L || "object" == typeof r && r && ("object" == typeof r && r).Math == Math && "object" == typeof r && r || "object" == typeof x && x && ("object" == typeof x && x).Math == Math && "object" == typeof x && x || "object" == typeof ZH && ZH && ("object" == typeof ZH && ZH).Math == Math && "object" == typeof ZH && ZH || function () {
        return this;
      }() || Function('', "return this")();
      var ZL = {};
      var Zx = function (Tq) {
        try {
          return !!Tq();
        } catch (Tm) {
          return true;
        }
      };
      var Zv = !Zx(function () {
        return 0x7 != Object.defineProperty({}, 0x1, {
          'get': function () {
            return 0x7;
          }
        })[0x1];
      });
      var ZP = !Zx(function () {
        var Tq = function () {}.bind();
        return "function" != typeof Tq || Tq.hasOwnProperty("prototype");
      });
      var ZT = Function.prototype.call;
      var ZI = ZP ? ZT.bind(ZT) : function () {
        return ZT.apply(ZT, arguments);
      };
      var ZV = {};
      var ZD = {}.propertyIsEnumerable;
      var ZM = Object.getOwnPropertyDescriptor;
      var ZA = ZM && !ZD.call({
        0x1: 0x2
      }, 0x1);
      ZV.f = ZA ? function (Tq) {
        var Tm = ZM(this, Tq);
        return !!Tm && Tm.enumerable;
      } : ZD;
      var ZW;
      var Zy;
      var Zf = Function.prototype;
      var ZN = Zf.call;
      var ZU = ZP && Zf.bind.bind(ZN, ZN);
      var ZF = ZP ? ZU : function (Tq) {
        return function () {
          return ZN.apply(Tq, arguments);
        };
      };
      var Zz = ZF({}.toString);
      var ZR = ZF(''.slice);
      var ZB = function (Tq) {
        return ZR(Zz(Tq), 0x8, -0x1);
      };
      var Zw = ZF(''.split);
      var ZE = Zx(function () {
        return !Object('z').propertyIsEnumerable(0x0);
      }) ? function (Tq) {
        return "String" == ZR(Zz(Tq), 0x8, -0x1) ? Zw(Tq, '') : Object(Tq);
      } : Object;
      var Zg = function (Tq) {
        if (null == Tq) {
          throw TypeError("Can't call method on " + Tq);
        }
        return Tq;
      };
      var Zd = "object" == typeof document && document.all;
      var H0 = {
        'all': Zd,
        'IS_HTMLDDA': undefined === Zd && undefined !== Zd
      };
      var H1 = H0.all;
      var H2 = H0.IS_HTMLDDA ? function (Tq) {
        return "function" == typeof Tq || Tq === H1;
      } : function (Tq) {
        return "function" == typeof Tq;
      };
      var H4 = H0.all;
      var H5 = H0.IS_HTMLDDA ? function (Tq) {
        return "object" == typeof Tq ? null !== Tq : H2(Tq) || Tq === H4;
      } : function (Tq) {
        return "object" == typeof Tq ? null !== Tq : H2(Tq);
      };
      var HZ = ZF({}.isPrototypeOf);
      var HH = "undefined" != typeof navigator && navigator.userAgent + '' || '';
      var HL = ZC.process;
      var Hx = ZC.Deno;
      var Hv = HL && HL.versions || Hx && Hx.version;
      var HP = Hv && Hv.v8;
      if (HP) {
        Zy = (ZW = HP.split('.'))[0x0] > 0x0 && ZW[0x0] < 0x4 ? 0x1 : +(ZW[0x0] + ZW[0x1]);
      }
      if (!Zy && HH && (!(ZW = HH.match(/Edge\/(\d+)/)) || ZW[0x1] >= 0x4a) && (ZW = HH.match(/Chrome\/(\d+)/))) {
        Zy = +ZW[0x1];
      }
      var HJ = Zy;
      var HT = !!Object.getOwnPropertySymbols && !Zx(function () {
        var Tq = Symbol();
        return !(Tq + '') || !(Object(Tq) instanceof Symbol) || !Symbol.sham && HJ && HJ < 0x29;
      });
      var HI = HT && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      var HW = HI ? function (Tq) {
        return "symbol" == typeof Tq;
      } : function (Tq) {
        var Tm = arguments.length < 0x2 ? H2(ZC[Tq]) ? ZC[Tq] : undefined : ZC[Tq] && ZC[Tq][Tm];
        return H2(Tm) && HZ(Tm.prototype, Object(Tq));
      };
      var HN = function (Tq) {
        if (H2(Tq)) {
          return Tq;
        }
        throw TypeError(function (Tm) {
          try {
            return String(Tm);
          } catch (TS) {
            return "Object";
          }
        }(Tq) + " is not a function");
      };
      var Hq = {};
      var Hm = {
        get 'exports'() {
          return Hq;
        },
        set 'exports'(Tq) {
          Hq = Tq;
        }
      };
      var Hw = Object.defineProperty;
      var HE = function (Tq, Tm) {
        try {
          Hw(ZC, Tq, {
            'value': Tm,
            'configurable': true,
            'writable': true
          });
        } catch (TS) {
          ZC[Tq] = Tm;
        }
        return Tm;
      };
      var Hk = ZC["__core-js_shared__"] || HE("__core-js_shared__", {});
      (Hm.exports = function (Tq, Tm) {
        return Hk[Tq] || (Hk[Tq] = undefined !== Tm ? Tm : {});
      })("versions", []).push({
        'version': "3.29.1",
        'mode': "global",
        'copyright': "© 2014-2023 Denis Pushkarev (zloirock.ru)",
        'license': "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",
        'source': "https://github.com/zloirock/core-js"
      });
      var HQ = ZF({}.hasOwnProperty);
      var Hd = Object.hasOwn || function (Tq, Tm) {
        return HQ(Object(Zg(Tq)), Tm);
      };
      var O1 = 0x0;
      var O2 = Math.random();
      var O3 = ZF(0x1.toString);
      var O4 = function (Tq) {
        return "Symbol(" + (undefined === Tq ? '' : Tq) + ')_' + O3(++O1 + O2, 0x24);
      };
      var O5 = Hq;
      var OZ = ZC.Symbol;
      var OH = O5("wks");
      var OO = HI ? OZ["for"] || OZ : OZ && OZ.withoutSetter || O4;
      var OC = function (Tq) {
        if (!Hd(OH, Tq)) {
          OH[Tq] = HT && Hd(OZ, Tq) ? OZ[Tq] : OO("Symbol." + Tq);
        }
        return OH[Tq];
      };
      var OJ = OC("toPrimitive");
      var OT = function (Tq, Tm) {
        if (!H5(Tq) || HW(Tq)) {
          return Tq;
        }
        var TS;
        var Tw = function (TE, Tp) {
          var Tj = TE[Tp];
          return null == Tj ? undefined : HN(Tj);
        }(Tq, OJ);
        if (Tw) {
          if (undefined === Tm) {
            Tm = "default";
          }
          TS = ZI(Tw, Tq, Tm);
          if (!H5(TS) || HW(TS)) {
            return TS;
          }
          throw TypeError("Can't convert object to primitive value");
        }
        if (undefined === Tm) {
          Tm = "number";
        }
        return function (TE, Tp) {
          var Tj;
          var Tk;
          if ("string" === Tp && H2(Tj = TE.toString) && !H5(Tk = ZI(Tj, TE))) {
            return Tk;
          }
          if (H2(Tj = TE.valueOf) && !H5(Tk = ZI(Tj, TE))) {
            return Tk;
          }
          if ("string" !== Tp && H2(Tj = TE.toString) && !H5(Tk = ZI(Tj, TE))) {
            return Tk;
          }
          throw TypeError("Can't convert object to primitive value");
        }(Tq, Tm);
      };
      var OV = function (Tq) {
        var Tm = OT(Tq, "string");
        return HW(Tm) ? Tm : Tm + '';
      };
      var OM = ZC.document;
      var OA = H5(OM) && H5(OM.createElement);
      var OX = !Zv && !Zx(function () {
        return 0x7 != Object.defineProperty(OA ? OM.createElement("div") : {}, 'a', {
          'get': function () {
            return 0x7;
          }
        }).a;
      });
      var OB = Object.getOwnPropertyDescriptor;
      ZL.f = Zv ? OB : function (Tq, Tm) {
        Tq = ZE(Zg(Tq));
        Tm = OV(Tm);
        if (OX) {
          try {
            return OB(Tq, Tm);
          } catch (TS) {}
        }
        if (Hd(Tq, Tm)) {
          return {
            'enumerable': !(0x1 & !ZI(ZV.f, Tq, Tm)),
            'configurable': !(0x2 & !ZI(ZV.f, Tq, Tm)),
            'writable': !(0x4 & !ZI(ZV.f, Tq, Tm)),
            'value': Tq[Tm]
          };
        }
      };
      var Oq = {
        'f': Zv ? Om ? function (Tq, Tm, TS) {
          Op(Tq);
          Tm = OV(Tm);
          Op(TS);
          if ("function" == typeof Tq && "prototype" === Tm && "value" in TS && "writable" in TS && !TS.writable) {
            var Tw = t0(Tq, Tm);
            if (Tw && Tw.writable) {
              Tq[Tm] = TS.value;
              TS = {
                'configurable': "configurable" in TS ? TS.configurable : Tw.configurable,
                'enumerable': "enumerable" in TS ? TS.enumerable : Tw.enumerable,
                'writable': false
              };
            }
          }
          return Od(Tq, Tm, TS);
        } : Od : function (Tq, Tm, TS) {
          Op(Tq);
          Tm = OV(Tm);
          Op(TS);
          if (OX) {
            try {
              return Od(Tq, Tm, TS);
            } catch (Tw) {}
          }
          if ("get" in TS || "set" in TS) {
            throw TypeError("Accessors not supported");
          }
          if ("value" in TS) {
            Tq[Tm] = TS.value;
          }
          return Tq;
        }
      };
      var Om = Zv && Zx(function () {
        return 0x2a != Object.defineProperty(function () {}, "prototype", {
          'value': 0x2a,
          'writable': false
        }).prototype;
      });
      var Op = function (Tq) {
        if (H5(Tq)) {
          return Tq;
        }
        throw TypeError(String(Tq) + " is not an object");
      };
      var Od = Object.defineProperty;
      var t0 = Object.getOwnPropertyDescriptor;
      var t6 = Zv ? function (Tq, Tm, TS) {
        return Oq.f(Tq, Tm, {
          'enumerable': false,
          'configurable': true,
          'writable': true,
          'value': TS
        });
      } : function (Tq, Tm, TS) {
        Tq[Tm] = TS;
        return Tq;
      };
      var t7 = {};
      var t8 = {
        get 'exports'() {
          return t7;
        },
        set 'exports'(Tq) {
          t7 = Tq;
        }
      };
      var tZ = Function.prototype;
      var tH = Zv && Object.getOwnPropertyDescriptor;
      var tO = Hd(tZ, "name");
      var tC = {
        'EXISTS': tO,
        'PROPER': tO && false,
        'CONFIGURABLE': tO && (!Zv || Zv && tH(tZ, "name").configurable)
      };
      var tv = ZF(Function.toString);
      if (!H2(Hk.inspectSource)) {
        Hk.inspectSource = function (Tq) {
          return tv(Tq);
        };
      }
      var tP;
      var tJ;
      var tT;
      var tI = Hk.inspectSource;
      var tD = ZC.WeakMap;
      var tM = H2(tD) && /native code/.test(tD + '');
      var tW = Hq("keys");
      var ty = function (Tq) {
        return tW[Tq] || (tW[Tq] = "Symbol(" + (undefined === Tq ? '' : Tq) + ')_' + O3(++O1 + O2, 0x24));
      };
      var tX = {};
      var tm = ZC.TypeError;
      var tS = ZC.WeakMap;
      if (tM || Hk.state) {
        var tw = Hk.state || (Hk.state = new tS());
        tw.get = tw.get;
        tw.has = tw.has;
        tw.set = tw.set;
        tP = function (Tq, Tm) {
          if (tw.has(Tq)) {
            throw tm("Object already initialized");
          }
          Tm.facade = Tq;
          tw.set(Tq, Tm);
          return Tm;
        };
        tJ = function (Tq) {
          return tw.get(Tq) || {};
        };
        tT = function (Tq) {
          return tw.has(Tq);
        };
      } else {
        var tE = ty("state");
        tX[tE] = true;
        tP = function (Tq, Tm) {
          if (Hd(Tq, tE)) {
            throw tm("Object already initialized");
          }
          Tm.facade = Tq;
          t6(Tq, tE, Tm);
          return Tm;
        };
        tJ = function (Tq) {
          return Hd(Tq, tE) ? Tq[tE] : {};
        };
        tT = function (Tq) {
          return Hd(Tq, tE);
        };
      }
      var tp = {
        'set': tP,
        'get': tJ,
        'has': tT,
        'enforce': function (Tq) {
          return tT(Tq) ? tJ(Tq) : tP(Tq, {});
        },
        'getterFor': function (Tq) {
          return function (Tm) {
            var TS;
            if (!H5(Tm) || (TS = tJ(Tm)).type !== Tq) {
              throw tm("Incompatible receiver, " + Tq + " required");
            }
            return TS;
          };
        }
      };
      var tQ = tC.CONFIGURABLE;
      var C0 = tp.enforce;
      var C1 = tp.get;
      var C3 = Object.defineProperty;
      var C4 = ZF(''.slice);
      var C5 = ZF(''.replace);
      var C6 = ZF([].join);
      var C7 = Zv && !Zx(function () {
        return 0x8 !== C3(function () {}, "length", {
          'value': 0x8
        }).length;
      });
      var C8 = (String + '').split("String");
      var C9 = t8.exports = function (Tq, Tm, TS) {
        if ("Symbol(" === C4(String(Tm), 0x0, 0x7)) {
          Tm = '[' + C5(String(Tm), /^Symbol\(([^)]*)\)/, '$1') + ']';
        }
        if (TS && TS.getter) {
          Tm = "get " + Tm;
        }
        if (TS && TS.setter) {
          Tm = "set " + Tm;
        }
        if (!Hd(Tq, "name") || tQ && Tq.name !== Tm) {
          if (Zv) {
            C3(Tq, "name", {
              'value': Tm,
              'configurable': true
            });
          } else {
            Tq.name = Tm;
          }
        }
        if (C7 && TS && Hd(TS, "arity") && Tq.length !== TS.arity) {
          C3(Tq, "length", {
            'value': TS.arity
          });
        }
        try {
          if (TS && Hd(TS, "constructor") && TS.constructor) {
            if (Zv) {
              C3(Tq, "prototype", {
                'writable': false
              });
            }
          } else if (Tq.prototype) {
            Tq.prototype = undefined;
          }
        } catch (TE) {}
        var Tw = C0(Tq);
        if (!Hd(Tw, "source")) {
          Tw.source = C6(C8, "string" == typeof Tm ? Tm : '');
        }
        return Tq;
      };
      Function.prototype.toString = C9(function () {
        return H2(this) && C1(this).source || tI(this);
      }, "toString");
      var CO = t7;
      var CL = {
        'f': Object.getOwnPropertyNames || function (Tq) {
          return CB(Tq, CS);
        }
      };
      var Cx = Math.ceil;
      var Cv = Math.floor;
      var CP = Math.trunc || function (Tq) {
        var Tm = +Tq;
        return (Tm > 0x0 ? Cv : Cx)(Tm);
      };
      var CT = function (Tq) {
        var Tm = +Tq;
        return Tm != Tm || 0x0 === Tm ? 0x0 : CP(Tm);
      };
      var CV = Math.max;
      var CD = Math.min;
      var CA = Math.min;
      var CK = function (Tq) {
        return function (Tm, TS, Tw) {
          var TE;
          var Tp = ZE(Zg(Tm));
          var Tj = Tp.length > 0x0 ? CA(CT(Tp.length), 0x1fffffffffffff) : 0x0;
          var Tk = function (Tg, TG) {
            var Tb = CT(Tg);
            return Tb < 0x0 ? CV(Tb + TG, 0x0) : CD(Tb, TG);
          }(Tw, Tj);
          if (Tq && TS != TS) {
            for (; Tj > Tk;) {
              if ((TE = Tp[Tk++]) != TE) {
                return true;
              }
            }
          } else {
            for (; Tj > Tk; Tk++) {
              if ((Tq || Tk in Tp) && Tp[Tk] === TS) {
                return Tq || Tk || 0x0;
              }
            }
          }
          return !Tq && -0x1;
        };
      };
      var CN = {
        'includes': CK(true),
        'indexOf': CK(false)
      };
      var CY = CN.indexOf;
      var CR = ZF([].push);
      var CB = function (Tq, Tm) {
        var TS;
        var Tw = ZE(Zg(Tq));
        var TE = 0x0;
        var Tp = [];
        for (TS in Tw) if (!Hd(tX, TS) && Hd(Tw, TS)) {
          CR(Tp, TS);
        }
        for (; Tm.length > TE;) {
          if (Hd(Tw, TS = Tm[TE++])) {
            if (!~CY(Tp, TS)) {
              CR(Tp, TS);
            }
          }
        }
        return Tp;
      };
      var Cq = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      var CS = Cq.concat("length", "prototype");
      var Cw = {
        'f': Object.getOwnPropertySymbols
      };
      var Cg = ZF([].concat);
      var CG = (arguments.length < 0x2 ? H2(ZC[Tq]) ? ZC[Tq] : undefined : ZC[Tq] && ZC[Tq][Tm]) || function (Tq) {
        var Tm = CL.f(Op(Tq));
        var TS = Cw.f;
        return TS ? Cg(Tm, TS(Tq)) : Tm;
      };
      var L3 = /#|\.prototype\./;
      var L4 = function (Tq, Tm) {
        var TS = L6[L5(Tq)];
        return TS == L8 || TS != L7 && (H2(Tm) ? Zx(Tm) : !!Tm);
      };
      var L5 = L4.normalize = function (Tq) {
        return (Tq + '').replace(L3, '.').toLowerCase();
      };
      var L6 = L4.data = {};
      var L7 = L4.NATIVE = 'N';
      var L8 = L4.POLYFILL = 'P';
      var LH = ZL.f;
      var LC = function (Tq, Tm, TS, Tw) {
        if (!Tw) {
          Tw = {};
        }
        var TE = Tw.enumerable;
        var Tp = undefined !== Tw.name ? Tw.name : Tm;
        if (H2(TS)) {
          CO(TS, Tp, Tw);
        }
        if (Tw.global) {
          if (TE) {
            Tq[Tm] = TS;
          } else {
            HE(Tm, TS);
          }
        } else {
          try {
            if (Tw.unsafe) {
              if (Tq[Tm]) {
                TE = true;
              }
            } else {
              delete Tq[Tm];
            }
          } catch (Tj) {}
          if (TE) {
            Tq[Tm] = TS;
          } else {
            Oq.f(Tq, Tm, {
              'value': TS,
              'enumerable': false,
              'configurable': !Tw.nonConfigurable,
              'writable': !Tw.nonWritable
            });
          }
        }
        return Tq;
      };
      var Lx = function (Tq, Tm, TS) {
        var Tw = CG(Tm);
        var TE = Oq.f;
        var Tp = ZL.f;
        for (var Tj = 0x0; Tj < Tw.length; Tj++) {
          var Tk = Tw[Tj];
          if (!(Hd(Tq, Tk) || TS && Hd(TS, Tk))) {
            TE(Tq, Tk, Tp(Tm, Tk));
          }
        }
      };
      var LP = function (Tq, Tm) {
        var TS;
        var Tw;
        var TE;
        var Tp;
        var Tj;
        var Tk = Tq.target;
        var Tg = Tq.global;
        var TG = Tq.stat;
        if (TS = Tg ? ZC : TG ? ZC[Tk] || HE(Tk, {}) : (ZC[Tk] || {}).prototype) {
          for (Tw in Tm) {
            Tp = Tm[Tw];
            TE = Tq.dontCallGetSet ? (Tj = LH(TS, Tw)) && Tj.value : TS[Tw];
            if (!L4(Tg ? Tw : Tk + (TG ? '.' : '#') + Tw, Tq.forced) && undefined !== TE) {
              if (typeof Tp == typeof TE) {
                continue;
              }
              Lx(Tp, TE);
            }
            if (Tq.sham || TE && TE.sham) {
              t6(Tp, "sham", true);
            }
            LC(TS, Tw, Tp, Tq);
          }
        }
      };
      var LJ = {
        'f': Zv && !Om ? Object.defineProperties : function (Tq, Tm) {
          Op(Tq);
          var TS;
          var Tw = ZE(Zg(Tm));
          var TE = LV(Tm);
          var Tp = TE.length;
          for (var Tj = 0x0; Tp > Tj;) {
            Oq.f(Tq, TS = TE[Tj++], Tw[TS]);
          }
          return Tq;
        }
      };
      var LV = Object.keys || function (Tq) {
        return CB(Tq, Cq);
      };
      var LK;
      var Lf = arguments.length < 0x2 ? H2(ZC[Tq]) ? ZC[Tq] : undefined : ZC[Tq] && ZC[Tq][Tm];
      var Lm = ty("IE_PROTO");
      var LS = function () {};
      var LE = function (Tq) {
        Tq.write("<script></script>");
        Tq.close();
        var Tm = Tq.parentWindow.Object;
        Tq = null;
        return Tm;
      };
      var Lp = function () {
        try {
          LK = new ActiveXObject("htmlfile");
        } catch (TE) {}
        var Tq;
        var Tm;
        var TS;
        Lp = "undefined" != typeof document ? document.domain && LK ? LE(LK) : (Tm = OA ? OM.createElement("iframe") : {}, TS = "javascript:", Tm.style.display = "none", Lf.appendChild(Tm), Tm.src = TS + '', (Tq = Tm.contentWindow.document).open(), Tq.write("<script>document.F=Object</script>"), Tq.close(), Tq.F) : LE(LK);
        for (var Tw = Cq.length; Tw--;) {
          delete Lp.prototype[Cq[Tw]];
        }
        return Lp();
      };
      tX[Lm] = true;
      var Lk = Object.create || function (Tq, Tm) {
        var TS;
        if (null !== Tq) {
          LS.prototype = Op(Tq);
          TS = new LS();
          LS.prototype = null;
          TS[Lm] = Tq;
        } else {
          TS = Lp();
        }
        return undefined === Tm ? TS : LJ.f(TS, Tm);
      };
      var Lg = Oq.f;
      var LG = OC("unscopables");
      var Lb = Array.prototype;
      if (null == Lb[LG]) {
        Lg(Lb, LG, {
          'configurable': true,
          'value': Lk(null)
        });
      }
      var Ld = CN.includes;
      LP({
        'target': "Array",
        'proto': true,
        'forced': Zx(function () {
          return ![,].includes();
        })
      }, {
        'includes': function (Tq) {
          return Ld(this, Tq, arguments.length > 0x1 ? arguments[0x1] : undefined);
        }
      });
      Lb[LG].includes = true;
      ZF(ZC[Tq].prototype[Tm]);
      var x3 = {
        [OC("toStringTag")]: 'z'
      };
      var x4 = x3 + '' == "[object z]";
      var x7 = OC("toStringTag");
      var x9 = "Arguments" == ZR(Zz(function () {
        return arguments;
      }()), 0x8, -0x1);
      var xZ = x4 ? ZB : function (Tq) {
        var Tm;
        var TS;
        var Tw;
        return undefined === Tq ? "Undefined" : null === Tq ? "Null" : "string" == typeof (TS = function (TE, Tp) {
          try {
            return TE[Tp];
          } catch (Tj) {}
        }(Tm = Object(Tq), x7)) ? TS : x9 ? ZR(Zz(Tm), 0x8, -0x1) : "Object" == (Tw = ZR(Zz(Tm), 0x8, -0x1)) && H2(Tm.callee) ? "Arguments" : Tw;
      };
      var xO = function (Tq) {
        if ("Symbol" === xZ(Tq)) {
          throw TypeError("Cannot convert a Symbol value to a string");
        }
        return String(Tq);
      };
      var xV = ZF(function (Tq) {
        var Tm = xO(Zg(this));
        var TS = '';
        var Tw = CT(Tq);
        if (Tw < 0x0 || Tw == Infinity) {
          throw RangeError("Wrong number of repetitions");
        }
        for (; Tw > 0x0; (Tw >>>= 0x1) && (Tm += Tm)) {
          if (0x1 & Tw) {
            TS += Tm;
          }
        }
        return TS;
      });
      var xD = ZF(''.slice);
      var xM = Math.ceil;
      var xA = function (Tq) {
        return function (Tm, TS, Tw) {
          var TE;
          var Tp;
          var Tj = xO(Zg(Tm));
          var Tk = TS > 0x0 ? CA(CT(TS), 0x1fffffffffffff) : 0x0;
          var Tg = Tj.length;
          var TG = undefined === Tw ? " " : xO(Tw);
          return Tk <= Tg || '' == TG ? Tj : ((Tp = xV(TG, xM((TE = Tk - Tg) / TG.length))).length > TE && (Tp = xD(Tp, 0x0, TE)), Tq ? Tj + Tp : Tp + Tj);
        };
      };
      var xW = {
        'start': xA(false),
        'end': xA(true)
      };
      var io = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(HH);
      var xy = xW.start;
      LP({
        'target': "String",
        'proto': true,
        'forced': io
      }, {
        'padStart': function (Tq) {
          return xy(this, Tq, arguments.length > 0x1 ? arguments[0x1] : undefined);
        }
      });
      ZF(ZC[Tq].prototype[Tm]);
      var xX = xW.end;
      LP({
        'target': "String",
        'proto': true,
        'forced': io
      }, {
        'padEnd': function (Tq) {
          return xX(this, Tq, arguments.length > 0x1 ? arguments[0x1] : undefined);
        }
      });
      ZF(ZC[Tq].prototype[Tm]);
      var xY = ZF(ZV.f);
      var xz = ZF([].push);
      var xR = function (Tq) {
        return function (Tm) {
          var TS;
          var Tw = ZE(Zg(Tm));
          var TE = LV(Tw);
          var Tp = TE.length;
          var Tj = 0x0;
          for (var Tk = []; Tp > Tj;) {
            TS = TE[Tj++];
            if (!(Zv && !xY(Tw, TS))) {
              xz(Tk, Tq ? [TS, Tw[TS]] : Tw[TS]);
            }
          }
          return Tk;
        };
      };
      var xB = {
        'entries': xR(true),
        'values': xR(false)
      };
      var xq = xB.values;
      LP({
        'target': "Object",
        'stat': true
      }, {
        'values': function (Tq) {
          return xq(Tq);
        }
      });
      ZC.Object.values;
      var xS = xB.entries;
      LP({
        'target': "Object",
        'stat': true
      }, {
        'entries': function (Tq) {
          return xS(Tq);
        }
      });
      ZC.Object.entries;
      var xG = function (Tq, Tm, TS) {
        var Tw = OV(Tm);
        if (Tw in Tq) {
          Oq.f(Tq, Tw, {
            'enumerable': true,
            'configurable': true,
            'writable': true,
            'value': TS
          });
        } else {
          Tq[Tw] = TS;
        }
      };
      LP({
        'target': "Object",
        'stat': true,
        'sham': !Zv
      }, {
        'getOwnPropertyDescriptors': function (Tq) {
          var Tm;
          var TS;
          var Tw = ZE(Zg(Tq));
          var TE = ZL.f;
          var Tp = CG(Tw);
          var Tj = {};
          for (var Tk = 0x0; Tp.length > Tk;) {
            if (undefined !== (TS = TE(Tw, Tm = Tp[Tk++]))) {
              xG(Tj, Tm, TS);
            }
          }
          return Tj;
        }
      });
      ZC.Object.getOwnPropertyDescriptors;
      var xQ;
      var xd = {};
      var r0 = {
        get 'exports'() {
          return xd;
        },
        set 'exports'(Tq) {
          xd = Tq;
        }
      };
      xQ = xd;
      (function (Tq, Tm) {
        var I4 = {
          'extend': function (IH, IO) {
            var IC = {};
            for (var IL in IH) if (IO[IL] && IO[IL].length % 0x2 == 0x0) {
              IC[IL] = IO[IL].concat(IH[IL]);
            } else {
              IC[IL] = IH[IL];
            }
            return IC;
          },
          'has': function (IH, IO) {
            return typeof IH === "string" && -0x1 !== IO.toLowerCase().indexOf(IH.toLowerCase());
          },
          'lowerize': function (IH) {
            return IH.toLowerCase();
          },
          'major': function (IH) {
            return typeof IH === "string" ? IH.replace(/[^\d\.]/g, '').split('.')[0x0] : Tm;
          },
          'trim': function (IH, IO) {
            IH = IH.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            return undefined === IO ? IH : IH.substring(0x0, 0xff);
          }
        };
        var I5 = {
          'rgx': function (IH, IO) {
            var IC;
            var IL;
            var Ix;
            var Iv;
            var IP;
            var IJ;
            for (var IT = 0x0; IT < IO.length && !IP;) {
              var II = IO[IT];
              var IV = IO[IT + 0x1];
              for (IC = IL = 0x0; IC < II.length && !IP;) {
                if (IP = II[IC++].exec(IH)) {
                  for (Ix = 0x0; Ix < IV.length; Ix++) {
                    IJ = IP[++IL];
                    if (typeof (Iv = IV[Ix]) === "object" && Iv.length > 0x0) {
                      if (0x2 == Iv.length) {
                        if (typeof Iv[0x1] == "function") {
                          this[Iv[0x0]] = Iv[0x1].call(this, IJ);
                        } else {
                          this[Iv[0x0]] = Iv[0x1];
                        }
                      } else if (0x3 == Iv.length) {
                        if (typeof Iv[0x1] !== "function" || Iv[0x1].exec && Iv[0x1].test) {
                          this[Iv[0x0]] = IJ ? IJ.replace(Iv[0x1], Iv[0x2]) : Tm;
                        } else {
                          this[Iv[0x0]] = IJ ? Iv[0x1].call(this, IJ, Iv[0x2]) : Tm;
                        }
                      } else if (0x4 == Iv.length) {
                        this[Iv[0x0]] = IJ ? Iv[0x3].call(this, IJ.replace(Iv[0x1], Iv[0x2])) : Tm;
                      }
                    } else {
                      this[Iv] = IJ || Tm;
                    }
                  }
                }
              }
              IT += 0x2;
            }
          },
          'str': function (IH, IO) {
            for (var IC in IO) if (typeof IO[IC] === "object" && IO[IC].length > 0x0) {
              for (var IL = 0x0; IL < IO[IC].length; IL++) {
                if (typeof IO[IC][IL] === "string" && -0x1 !== IH.toLowerCase().indexOf(IO[IC][IL].toLowerCase())) {
                  return '?' === IC ? Tm : IC;
                }
              }
            } else if (typeof IO[IC] === "string" && -0x1 !== IH.toLowerCase().indexOf(IO[IC].toLowerCase())) {
              return '?' === IC ? Tm : IC;
            }
            return IH;
          }
        };
        var I6 = {
          'browser': {
            'oldSafari': {
              'version': {
                '1.0': '/8',
                1.2: '/1',
                1.3: '/3',
                '2.0': "/412",
                '2.0.2': "/416",
                '2.0.3': "/417",
                '2.0.4': "/419",
                '?': '/'
              }
            },
            'oldEdge': {
              'version': {
                0.1: "12.",
                0x15: "13.",
                0x1f: "14.",
                0x27: "15.",
                0x29: "16.",
                0x2a: "17.",
                0x2c: "18."
              }
            }
          },
          'os': {
            'windows': {
              'version': {
                'ME': "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                0x7d0: "NT 5.0",
                'XP': ["NT 5.1", "NT 5.2"],
                'Vista': "NT 6.0",
                0x7: "NT 6.1",
                0x8: "NT 6.2",
                8.1: "NT 6.3",
                0xa: ["NT 6.4", "NT 10.0"],
                'RT': "ARM"
              }
            }
          }
        };
        var I7 = {
          'browser': [[/\b(?:crmo|crios)\/([\w\.]+)/i], ["version", ["name", "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], ["version", ["name", "Edge"]], [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i], ["name", "version"], [/opios[\/\s]+([\w\.]+)/i], ["version", ["name", "Opera Mini"]], [/\sopr\/([\w\.]+)/i], ["version", ["name", "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i], ["name", "version"], [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], ["version", ["name", "UCBrowser"]], [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i], ["version", ["name", "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], ["version", ["name", "WeChat"]], [/konqueror\/([\w\.]+)/i], ["version", ["name", "Konqueror"]], [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i], ["version", ["name", 'IE']], [/yabrowser\/([\w\.]+)/i], ["version", ["name", "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [["name", /(.+)/, "$1 Secure Browser"], "version"], [/focus\/([\w\.]+)/i], ["version", ["name", "Firefox Focus"]], [/opt\/([\w\.]+)/i], ["version", ["name", "Opera Touch"]], [/coc_coc_browser\/([\w\.]+)/i], ["version", ["name", "Coc Coc"]], [/dolfin\/([\w\.]+)/i], ["version", ["name", "Dolphin"]], [/coast\/([\w\.]+)/i], ["version", ["name", "Opera Coast"]], [/xiaomi\/miuibrowser\/([\w\.]+)/i], ["version", ["name", "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], ["version", ["name", "Firefox"]], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [["name", "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [["name", /(.+)/, "$1 Browser"], "version"], [/(comodo_dragon)\/([\w\.]+)/i], [["name", /_/g, " "], "version"], [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i], ["name", "version"], [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i], ["name"], [/;fbav\/([\w\.]+);/i], ["version", ["name", "Facebook"]], [/FBAN\/FBIOS|FB_IAB\/FB4A/i], [["name", "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i], ["name", "version"], [/\bgsa\/([\w\.]+)\s.*safari\//i], ["version", ["name", "GSA"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], ["version", ["name", "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [["name", "Chrome WebView"], "version"], [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i], ["version", ["name", "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], ["name", "version"], [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i], ["version", ["name", "Mobile Safari"]], [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i], ["version", "name"], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], ["name", ["version", I5.str, I6.browser.oldSafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], ["name", "version"], [/(navigator|netscape)\/([\w\.-]+)/i], [["name", "Netscape"], "version"], [/ile\svr;\srv:([\w\.]+)\).+firefox/i], ["version", ["name", "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], ["name", "version"]],
          'cpu': [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", I4.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|armv?8e?l?)\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, '', I4.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", I4.lowerize]]],
          'device': [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i], ["model", ["vendor", "Samsung"], ["type", "tablet"]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i], ["model", ["vendor", "Samsung"], ["type", "mobile"]], [/\((ip(?:hone|od)[\s\w]*);/i], ["model", ["vendor", "Apple"], ["type", "mobile"]], [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], ["model", ["vendor", "Apple"], ["type", "tablet"]], [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i], ["model", ["vendor", "Huawei"], ["type", "tablet"]], [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i], ["model", ["vendor", "Huawei"], ["type", "mobile"]], [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i], [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "mobile"]], [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i], [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "tablet"]], [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], ["model", ["vendor", "OPPO"], ["type", "mobile"]], [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i], ["model", ["vendor", "Vivo"], ["type", "mobile"]], [/\s(rmx[12]\d{3})(?:\sbuild|;)/i], ["model", ["vendor", "Realme"], ["type", "mobile"]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i], ["model", ["vendor", "Motorola"], ["type", "mobile"]], [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], ["model", ["vendor", "Motorola"], ["type", "tablet"]], [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i], ["model", ["vendor", 'LG'], ["type", "tablet"]], [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i], ["model", ["vendor", 'LG'], ["type", "mobile"]], [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i], ["model", ["vendor", "Lenovo"], ["type", "tablet"]], [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i], [["model", /_/g, " "], ["vendor", "Nokia"], ["type", "mobile"]], [/droid.+;\s(pixel\sc)[\s)]/i], ["model", ["vendor", "Google"], ["type", "tablet"]], [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i], ["model", ["vendor", "Google"], ["type", "mobile"]], [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], ["model", ["vendor", "Sony"], ["type", "mobile"]], [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i], [["model", "Xperia Tablet"], ["vendor", "Sony"], ["type", "tablet"]], [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i], ["model", ["vendor", "OnePlus"], ["type", "mobile"]], [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i], ["model", ["vendor", "Amazon"], ["type", "tablet"]], [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i], [["model", "Fire Phone"], ["vendor", "Amazon"], ["type", "mobile"]], [/\((playbook);[\w\s\),;-]+(rim)/i], ["model", "vendor", ["type", "tablet"]], [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i], ["model", ["vendor", "BlackBerry"], ["type", "mobile"]], [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i], ["model", ["vendor", "ASUS"], ["type", "tablet"]], [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i], ["model", ["vendor", "ASUS"], ["type", "mobile"]], [/(nexus\s9)/i], ["model", ["vendor", "HTC"], ["type", "tablet"]], [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], ["vendor", ["model", /_/g, " "], ["type", "mobile"]], [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], ["model", ["vendor", "Acer"], ["type", "tablet"]], [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i], ["model", ["vendor", "Meizu"], ["type", "mobile"]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i], ["vendor", "model", ["type", "mobile"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i], ["vendor", "model", ["type", "tablet"]], [/\s(surface\sduo)\s/i], ["model", ["vendor", "Microsoft"], ["type", "tablet"]], [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i], ["model", ["vendor", "Fairphone"], ["type", "mobile"]], [/\s(u304aa)\sbuild/i], ["model", ["vendor", "AT&T"], ["type", "mobile"]], [/sie-(\w*)/i], ["model", ["vendor", "Siemens"], ["type", "mobile"]], [/[;\/]\s?(rct\w+)\sbuild/i], ["model", ["vendor", "RCA"], ["type", "tablet"]], [/[;\/\s](venue[\d\s]{2,7})\sbuild/i], ["model", ["vendor", "Dell"], ["type", "tablet"]], [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i], ["model", ["vendor", "Verizon"], ["type", "tablet"]], [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i], ["model", ["vendor", "Barnes & Noble"], ["type", "tablet"]], [/[;\/]\s(tm\d{3}\w+)\sbuild/i], ["model", ["vendor", "NuVision"], ["type", "tablet"]], [/;\s(k88)\sbuild/i], ["model", ["vendor", "ZTE"], ["type", "tablet"]], [/;\s(nx\d{3}j)\sbuild/i], ["model", ["vendor", "ZTE"], ["type", "mobile"]], [/[;\/]\s?(gen\d{3})\sbuild.*49h/i], ["model", ["vendor", "Swiss"], ["type", "mobile"]], [/[;\/]\s?(zur\d{3})\sbuild/i], ["model", ["vendor", "Swiss"], ["type", "tablet"]], [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i], ["model", ["vendor", "Zeki"], ["type", "tablet"]], [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i], [["vendor", "Dragon Touch"], "model", ["type", "tablet"]], [/[;\/]\s?(ns-?\w{0,9})\sbuild/i], ["model", ["vendor", "Insignia"], ["type", "tablet"]], [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i], ["model", ["vendor", "NextBook"], ["type", "tablet"]], [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i], [["vendor", "Voice"], "model", ["type", "mobile"]], [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i], [["vendor", "LvTel"], "model", ["type", "mobile"]], [/;\s(ph-1)\s/i], ["model", ["vendor", "Essential"], ["type", "mobile"]], [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i], ["model", ["vendor", "Envizen"], ["type", "tablet"]], [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i], ["model", ["vendor", "MachSpeed"], ["type", "tablet"]], [/[;\/]\s?tu_(1491)\sbuild/i], ["model", ["vendor", "Rotor"], ["type", "tablet"]], [/(shield[\w\s]+)\sbuild/i], ["model", ["vendor", "Nvidia"], ["type", "tablet"]], [/(sprint)\s(\w+)/i], ["vendor", "model", ["type", "mobile"]], [/(kin\.[onetw]{3})/i], [["model", /\./g, " "], ["vendor", "Microsoft"], ["type", "mobile"]], [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], ["model", ["vendor", "Zebra"], ["type", "tablet"]], [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i], ["model", ["vendor", "Zebra"], ["type", "mobile"]], [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i], ["vendor", "model", ["type", "console"]], [/droid.+;\s(shield)\sbuild/i], ["model", ["vendor", "Nvidia"], ["type", "console"]], [/(playstation\s[345portablevi]+)/i], ["model", ["vendor", "Sony"], ["type", "console"]], [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i], ["model", ["vendor", "Microsoft"], ["type", "console"]], [/smart-tv.+(samsung)/i], ["vendor", ["type", "smarttv"]], [/hbbtv.+maple;(\d+)/i], [["model", /^/, "SmartTV"], ["vendor", "Samsung"], ["type", "smarttv"]], [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i], [["vendor", 'LG'], ["type", "smarttv"]], [/(apple)\s?tv/i], ["vendor", ["model", "Apple TV"], ["type", "smarttv"]], [/crkey/i], [["model", "Chromecast"], ["vendor", "Google"], ["type", "smarttv"]], [/droid.+aft([\w])(\sbuild\/|\))/i], ["model", ["vendor", "Amazon"], ["type", "smarttv"]], [/\(dtv[\);].+(aquos)/i], ["model", ["vendor", "Sharp"], ["type", "smarttv"]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [["vendor", I4.trim], ["model", I4.trim], ["type", "smarttv"]], [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i], [["type", "smarttv"]], [/((pebble))app\/[\d\.]+\s/i], ["vendor", "model", ["type", "wearable"]], [/droid.+;\s(glass)\s\d/i], ["model", ["vendor", "Google"], ["type", "wearable"]], [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i], ["model", ["vendor", "Zebra"], ["type", "wearable"]], [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i], ["vendor", ["type", "embedded"]], [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i], ["model", ["type", "mobile"]], [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i], ["model", ["type", "tablet"]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [["type", I4.lowerize]], [/(android[\w\.\s\-]{0,9});.+build/i], ["model", ["vendor", "Generic"]], [/(phone)/i], [["type", "mobile"]]],
          'engine': [[/windows.+\sedge\/([\w\.]+)/i], ["version", ["name", "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], ["version", ["name", "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], ["name", "version"], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], ["version", "name"]],
          'os': [[/microsoft\s(windows)\s(vista|xp)/i], ["name", "version"], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i], ["name", ["version", I5.str, I6.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [["name", "Windows"], ["version", I5.str, I6.os.windows.version]], [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i], [["version", /_/g, '.'], ["name", "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i], [["name", "Mac OS"], ["version", /_/g, '.']], [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i], ["name", "version"], [/\(bb(10);/i], ["version", ["name", "BlackBerry"]], [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i], ["version", ["name", "Symbian"]], [/mozilla.+\(mobile;.+gecko.+firefox/i], [["name", "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], ["version", ["name", "webOS"]], [/crkey\/([\d\.]+)/i], ["version", ["name", "Chromecast"]], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [["name", "Chromium OS"], "version"], [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i], ["name", "version"], [/(sunos)\s?([\w\.\d]*)/i], [["name", "Solaris"], "version"], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], ["name", "version"]]
        };
        var I8 = function (IH, IO) {
          if ("object" == typeof IH) {
            IO = IH;
            IH = Tm;
          }
          if (!(this instanceof I8)) {
            return new I8(IH, IO).getResult();
          }
          var IC = IH || (undefined !== Tq && Tq.navigator && Tq.navigator.userAgent ? Tq.navigator.userAgent : '');
          var IL = IO ? I4.extend(I7, IO) : I7;
          this.getBrowser = function () {
            var Ix = {
              'name': Tm,
              'version': Tm
            };
            I5.rgx.call(Ix, IC, IL.browser);
            Ix.major = typeof Ix.version === "string" ? Ix.version.replace(/[^\d\.]/g, '').split('.')[0x0] : Tm;
            return Ix;
          };
          this.getCPU = function () {
            var Ix = {
              'architecture': Tm
            };
            I5.rgx.call(Ix, IC, IL.cpu);
            return Ix;
          };
          this.getDevice = function () {
            var Ix = {
              'vendor': Tm,
              'model': Tm,
              'type': Tm
            };
            I5.rgx.call(Ix, IC, IL.device);
            return Ix;
          };
          this.getEngine = function () {
            var Ix = {
              'name': Tm,
              'version': Tm
            };
            I5.rgx.call(Ix, IC, IL.engine);
            return Ix;
          };
          this.getOS = function () {
            var Ix = {
              'name': Tm,
              'version': Tm
            };
            I5.rgx.call(Ix, IC, IL.os);
            return Ix;
          };
          this.getResult = function () {
            return {
              'ua': this.getUA(),
              'browser': this.getBrowser(),
              'engine': this.getEngine(),
              'os': this.getOS(),
              'device': this.getDevice(),
              'cpu': this.getCPU()
            };
          };
          this.getUA = function () {
            return IC;
          };
          this.setUA = function (Ix) {
            IC = typeof Ix === "string" && Ix.length > 0xff ? I4.trim(Ix, 0xff) : Ix;
            return this;
          };
          this.setUA(IC);
          return this;
        };
        I8.VERSION = "0.7.28";
        I8.BROWSER = {
          'NAME': "name",
          'MAJOR': "major",
          'VERSION': "version"
        };
        I8.CPU = {
          'ARCHITECTURE': "architecture"
        };
        I8.DEVICE = {
          'MODEL': "model",
          'VENDOR': "vendor",
          'TYPE': "type",
          'CONSOLE': "console",
          'MOBILE': "mobile",
          'SMARTTV': "smarttv",
          'TABLET': "tablet",
          'WEARABLE': "wearable",
          'EMBEDDED': "embedded"
        };
        I8.ENGINE = {
          'NAME': "name",
          'VERSION': "version"
        };
        I8.OS = {
          'NAME': "name",
          'VERSION': "version"
        };
        if (r0.exports) {
          xQ = r0.exports = I8;
        }
        xQ.UAParser = I8;
        var I9 = undefined !== Tq && (Tq.jQuery || Tq.Zepto);
        if (I9 && !I9.ua) {
          var IZ = new I8();
          I9.ua = IZ.getResult();
          I9.ua.get = function () {
            return IZ.getUA();
          };
          I9.ua.set = function (IH) {
            IZ.setUA(IH);
            var IO = IZ.getResult();
            for (var IC in IO) I9.ua[IC] = IO[IC];
          };
        }
      })("object" == typeof r ? r : ZH);
      var r8 = xd.UAParser.DEVICE.VENDOR;
      var r9 = xd.UAParser.DEVICE.MODEL;
      var rZ = xd.UAParser.DEVICE.TYPE;
      var rH = xd.UAParser.DEVICE.MOBILE;
      var rO = xd.UAParser.BROWSER.NAME;
      var rC = xd.UAParser.BROWSER.VERSION;
      var rL = {
        'device': [[/android.+;\s(vivo)\s?([\w\s]+)\sbuild/i], [r8, r9, [rZ, rH]], [/d\/honor([\w\s-]+)[;\)]/i], [r9, [r8, "Huawei"], [rZ, rH]]],
        'browser': [[/(trident)\/([\w\.]+)/i], [[rO, 'ie'], rC], [/(?:ms|\()(ie)\s([\w\.]+)/i], [rO, rC], [/(edge|edgios|edga)\/([\w\.]+)/i], [[rO, "edge"], rC], [/(ucbrowser)\/([\w\.]+)/i, /(ucmini)\/([\w\.]+)/i], [[rO, "ucbrowser"], rC], [/(qihoobrowser|qhbrowser)\/([\w\.]+)/i], [[rO, "360browser"], rC], [/(lite baiduboxapp)\/([\w\.]+)/i], [[rO, "lite baidu"], rC], [/(baiduboxapp|baidubrowser|bidubrowser|bdbrowser)\/([\w\.]+)/i], [[rO, "baidubrowser"], rC], [/(maxthon|mxbrowser|mxios)\/([\w\.]+)/i], [[rO, "maxthon"], rC], [/(fxios|firefox)\/([\w\.]+)/i], [[rO, "firefox"], rC], [/(opera|oupeng|opr\/?)\/([\w\.]+)/i], [[rO, "opera"], rC], [/(alohabrowser)\/([\w\.]+)/i], [[rO, "alohabrowser"], rC], [/(sogoumobilebrowser|sogou)\/([\w\.]+)/i], [[rO, "sogou"], rC], [/(liebaofast|liebao)\/([\w\.]+)/i], [[rO, "liebao"], rC], [/(miuibrowser)\/([\w\.]+)/i], [[rO, "MIUI Browser"], rC], [/(qzone)\/([\w\.]+)/i], [rO, rC]]
      };
      var rx = {
        'browser': [[/(edge|edgios|edga)\/([\w\.]+)/i], [[rO, "edge"], rC], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [rC, [rO, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[rO, /(.+)/, "$1 WebView"], rC], [/(chrome|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [rO, rC], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[rO, "Chrome"], rC], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [rC, [rO, "Mobile Safari"]], [/version\/([\w\.]+).+?(safari)/i], [rC, rO], [/(fxios|firefox)\/([\w\.]+)/i], [[rO, "firefox"], rC], [/(trident)\/([\w\.]+)/i], [[rO, 'ie'], rC], [/(?:ms|\()(ie)\s([\w\.]+)/i], [rO, rC], [/iphone os/i], [[rO, "Safari WebView"], [rC, '0']]]
      };
      r.UAParser = xd.UAParser;
      var rv = function () {
        function Tq() {
          this._ua = new xd.UAParser(r.navigator.userAgent, rL);
          var Tm = this._ua.getBrowser();
          this.A = Tm.version;
          this.p = Tm.name;
          var TS = new xd.UAParser(r.navigator.userAgent, rx).getBrowser();
          this.g = TS.version;
          this.m = TS.name;
          var Tw;
          var TE = this._ua.getOS().name;
          if (!TE) {
            TE = '';
          }
          TE = /Android/i.test(TE) ? "Android" : /ios/i.test(TE) ? "iOS" : /Mac OS/i.test(TE) ? "OS X" : /Windows (Phone|Mobile)/i.test(TE) ? "WP8" : /Windows/i.test(TE) ? "Windows" : "Unknown";
          this.H = TE;
          var Tp = /pgmobileshell/;
          var Tj = /pgshell/;
          Tw = /pgapp/.test(this._ua.getUA()) || Tp.test(this._ua.getUA()) ? "app" : Tj.test(this._ua.getUA()) ? 'pc' : "browser";
          this.S = Tw;
          if (Tw === "app" && TE === "iOS") {
            this.p = "safari";
            this.A = this._ua.getOS().version;
          }
        }
        Tq.prototype.getUA = function () {
          return this._ua;
        };
        Tq.prototype.isMobile = function () {
          if (undefined === this.V) {
            this.V = /mobile|android|iphone|ipad/i.test(this._ua.getUA());
          }
          return this.V;
        };
        Tq.prototype.getOSName = function () {
          return this.H;
        };
        Tq.prototype.getPlatform = function () {
          return this.S;
        };
        Tq.prototype.getOSMajorVersion = function () {
          if (!this.k) {
            this.k = -0x1;
            var Tm = this._ua.getOS().version;
            if (undefined === Tm) {
              return -0x1;
            }
            if (!(Tm = Tm.match(/[^.]+/g))) {
              return -0x1;
            }
            this.k = +Tm[0x0];
          }
          return this.k;
        };
        Tq.prototype.getOSVersion = function () {
          return this._ua.getOS().version || '-1';
        };
        Tq.prototype.getBrowserType = function () {
          return this.p ? this.p : '';
        };
        Tq.prototype.getBrowserBaseType = function () {
          return this.m ? this.m : '';
        };
        Tq.prototype.getBrowserVersion = function () {
          return this.A ? this.A : '-1';
        };
        Tq.prototype.getBrowserBaseVersion = function () {
          return this.g ? this.g : '-1';
        };
        Tq.prototype.getDeviceInfo = function () {
          if (!this.M) {
            this.M = this._ua.getDevice();
          }
          return this.M;
        };
        return Tq;
      }();
      function rP(Tq, Tm) {
        var TS = [];
        if (Tq) {
          var Tw = Tm.split('-')[0x1];
          TS = Tm.split('-')[0x0].split('.');
          var TE = Tw.split('.');
          TS = TS.concat(TE);
        } else {
          TS = Tm.split('.');
        }
        return TS;
      }
      function rJ(Tq) {
        return Tq.map(function (Tm) {
          return isNaN(Tm) ? Tm : parseInt(Tm, 0xa);
        });
      }
      function rT(Tq, Tm) {
        var TS = Tq.indexOf('-') > -0x1;
        var Tw = Tm.indexOf('-') > -0x1;
        var TE = rJ(rP(TS, Tq));
        var Tp = rJ(rP(Tw, Tm));
        var Tj = Math.max(TE.length, Tp.length);
        for (var Tk = 0x0; Tk < Tj; Tk++) {
          TE[Tk] = undefined === TE[Tk] ? 0x0 : TE[Tk];
          Tp[Tk] = undefined === Tp[Tk] ? 0x0 : Tp[Tk];
          if (TE[Tk] > Tp[Tk]) {
            return 0x1;
          }
          if (TE[Tk] < Tp[Tk]) {
            return -0x1;
          }
        }
        return 0x0;
      }
      location.port;
      var rI;
      var rV;
      var rD;
      var rM;
      var rA;
      function rY(Tq) {
        return function () {
          var Tm = Tq.reduce(function (TS, Tw) {
            return TS.then(function (TE) {
              return TE ? Tw() : TE;
            });
          }, r.Promise.resolve(0x1))["catch"](function () {
            return 0x0;
          });
          return Tm;
        };
      }
      function rq(Tq) {
        return new r.Uint8Array(Tq).reduce(function (Tm, TS) {
          return Tm + r.Number(TS).toString(0x10).padStart(0x2, '0');
        }, '');
      }
      function rS() {
        var Tm = rj(r, "crypto");
        return !(!Tm || r.Object.prototype.hasOwnProperty.call(Tm, "subtle") || !rk(Tm, "subtle"));
      }
      function rj(Tq, Tm) {
        try {
          return r.Object.getOwnPropertyDescriptor(Tq, Tm) ? r.Object.getOwnPropertyDescriptor(Tq, Tm).get ? -0x1 !== (r.Object.getOwnPropertyDescriptor(Tq, Tm).get + '').indexOf("[native code]") ? r.Object.getOwnPropertyDescriptor(Tq, Tm).get.apply(Tq) : undefined : r.Object.getOwnPropertyDescriptor(Tq, Tm).value : r.Object.getOwnPropertyDescriptor(Tq, Tm);
        } catch (TS) {}
      }
      function rk(Tq, Tm) {
        try {
          var TS = r.Object.getPrototypeOf(Tq);
          return r.Object.getOwnPropertyDescriptor(TS, Tm) ? r.Object.getOwnPropertyDescriptor(TS, Tm).get ? -0x1 !== (r.Object.getOwnPropertyDescriptor(TS, Tm).get + '').indexOf("[native code]") ? r.Object.getOwnPropertyDescriptor(TS, Tm).get.apply(Tq) : undefined : r.Object.getOwnPropertyDescriptor(TS, Tm).value : r.Object.getOwnPropertyDescriptor(TS, Tm);
        } catch (Tw) {}
      }
      function rg(Tq, Tm) {
        if (undefined === Tm) {
          Tm = r;
        }
        return Tq.replace(/ /g, '').split('.').reduce(function (TS, Tw) {
          return null != TS ? rj(TS, Tw) : TS;
        }, Tm);
      }
      function rG() {
        return null == [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (Tq) {
          return !(-0x1 !== (rg(Tq) + '').indexOf("[native code]"));
        });
      }
      function rb(Tq) {
        var Tm = [" SamsungBrowser", "UCBrowser", " Quark", "QQBrowser", " OppoBrowser", " VivoBrowser", " 360(SE|EE) ", " b(?:ai)?d(?:u)?browser "];
        var TS = [];
        for (var Tw = 0x0; Tq;) {
          if (0x1 & Tq && Tw < Tm.length) {
            TS.push(Tm[Tw].replace(/ /g, ''));
          }
          Tq >>= 0x1;
          Tw++;
        }
        if (TS.length) {
          var TE = new r.RegExp(TS.join(" | ".replace(/ /g, '')), " i ".replace(/ /g, ''));
          return function () {
            return TE.test(r.navigator.userAgent);
          };
        }
        return function () {
          return false;
        };
      }
      function rQ(Tq) {
        var Tm = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][Tq];
        return Tm.substring(r.Number("0xf") - r.Number("0x0" + Tm[0x0]));
      }
      function rd() {
        return 0x1 === r[rQ(0x4)].max(0x1, 0x14 * r[rQ(0x4)].random());
      }
      function v2(Tq) {
        var Tm = '';
        var TS = 0x0;
        for (var Tw = Tq.length; TS < Tw; TS++) {
          Tm += Tq[TS] || '';
        }
        return Tm;
      }
      function v3(Tq) {
        var Tm = r.atob(Tq);
        var TS = new r.Uint8Array(Tm.length);
        for (var Tw = 0x0; Tw < Tm.length; Tw++) {
          TS[Tw] = Tm.charCodeAt(Tw);
        }
        return TS;
      }
      function v4() {
        var Tq = [0x5f, 0x5f].map(function (I0) {
          return r.String.fromCharCode(I0);
        }).join('');
        var Tm = Tq + "refer or " + Tq + "ahv".substring(0x1);
        var TS = rQ(0x1);
        var Tw = "esplit".substring(0x1);
        function TE(I0) {
          var I1 = new r.URLSearchParams(r[TS].search);
          var I2 = Tm[Tw](" ")[I0];
          return I2 ? I1.get(I2) : null;
        }
        var Tp = rQ(0x3);
        var Tj = r[TS][Tp];
        var Tk = TE(0x0);
        var Tg = TE(0x1);
        var TG = TE(0x2);
        var Tb = null == TG ? undefined : TG.substring(r.Number("0x0"), r.Number("0x2"));
        var TQ = null == TG ? undefined : TG.substring(r.Number("0x2"));
        var Td = Object.create(null);
        Td.B = Tb;
        Td.j = Tj;
        Td.G = Tk;
        Td.P = Tg;
        Td.Z = TG;
        Td.R = TQ;
        return Td;
      }
      !function (Tq) {
        Tq[Tq.WebWindow = 0x1] = "WebWindow";
        Tq[Tq.WebMacOS = 0x2] = "WebMacOS";
        Tq[Tq.WebAndroid = 0x3] = "WebAndroid";
        Tq[Tq.WebIOS = 0x4] = "WebIOS";
        Tq[Tq.WebOthers = 0x5] = "WebOthers";
        Tq[Tq.CordovaAndroid = 0x6] = "CordovaAndroid";
        Tq[Tq.CordovaIOS = 0x7] = "CordovaIOS";
        Tq[Tq.ElectronWindow = 0x8] = "ElectronWindow";
        Tq[Tq.ElectronMac = 0x9] = "ElectronMac";
        Tq[Tq.NativeWindow = 0xa] = "NativeWindow";
        Tq[Tq.NativeMac = 0xb] = "NativeMac";
        Tq[Tq.NativeAndroid = 0xc] = "NativeAndroid";
        Tq[Tq.NativeIOS = 0xd] = "NativeIOS";
        Tq[Tq.Robot = 0x63] = "Robot";
      }(rI || (rI = {}));
      (function (Tq) {
        Tq[Tq.All = 0x0] = "All";
        Tq[Tq.Portrait = 0x1] = "Portrait";
        Tq[Tq.Landscape = 0x2] = "Landscape";
      })(rV || (rV = {}));
      (function (Tq) {
        Tq[Tq.None = 0x0] = "None";
        Tq[Tq.All = 0x1] = "All";
        Tq[Tq.Portrait = 0x2] = "Portrait";
        Tq[Tq.Landscape = 0x3] = "Landscape";
      })(rD || (rD = {}));
      (function (Tq) {
        Tq[Tq.Image = 0x1] = "Image";
      })(rM || (rM = {}));
      var v5;
      var v6 = undefined;
      function v7(Tq) {
        v6 = Tq;
      }
      v5 = {
        'language': ['l', "language"],
        'token': ['ot', "operator_token"],
        'session': ["ops", "operator_player_session"],
        'type': ["btt", "bet_type"],
        'from': ['f', "from"],
        'definition': ["definition"],
        'tourid': ["tournament_id"],
        'real': ["rurl", "real_url"],
        'no_audio': ["no_audio"],
        'plugin': ["pg_plugin"],
        'time_elapsed': ['te', "time_elapsed"],
        'reminder_interval': ['ri', "reminder_interval"],
        'operator_param': ['op', "operator_param"],
        'cached_t': ['ct', "cached_t"],
        'or_cover': ['oc', "or_cover"],
        'origin': ['or'],
        'api_origin': ['ao'],
        'login_method': ["lgm"]
      };
      var v9 = function () {
        function Tq(Tm) {
          this.O = new URLSearchParams(Tm);
        }
        Tq.prototype.entries = function () {
          return this.O.entries();
        };
        Tq.prototype.keys = function () {
          return this.O.keys();
        };
        Tq.prototype.values = function () {
          return this.O.values();
        };
        Tq.prototype[Symbol.iterator] = function () {
          return this.O[Symbol.iterator]();
        };
        Tq.prototype.append = function (Tm, TS) {
          this.O.append(Tm, TS);
        };
        Tq.prototype["delete"] = function (Tm) {
          var TS = v5 && v5[Tm] || Tm;
          if (Array.isArray(TS)) {
            for (var Tw = 0x0; Tw < TS.length; Tw++) {
              if (this.O.has(TS[Tw])) {
                return this.O["delete"](TS[Tw]);
              }
            }
          }
          this.O["delete"](TS);
        };
        Tq.prototype.get = function (Tm) {
          var TS = v5 && v5[Tm] || Tm;
          if (Array.isArray(TS)) {
            for (var Tw = 0x0; Tw < TS.length; Tw++) {
              if (this.O.has(TS[Tw])) {
                return this.O.get(TS[Tw]);
              }
            }
          }
          return this.O.has(TS) ? this.O.get(TS) : this.O.get(Tm);
        };
        Tq.prototype.getAll = function (Tm) {
          return this.O.getAll(Tm);
        };
        Tq.prototype.has = function (Tm) {
          var TS = v5 && v5[Tm] || Tm;
          if (Array.isArray(TS)) {
            for (var Tw = 0x0; Tw < TS.length; Tw++) {
              if (this.O.has(TS[Tw])) {
                return this.O.has(TS[Tw]);
              }
            }
          }
          return this.O.has(TS);
        };
        Tq.prototype.set = function (Tm, TS) {
          this.O.set(Tm, TS);
        };
        Tq.prototype.sort = function () {
          this.O.sort();
        };
        Tq.prototype.toString = function () {
          return this.O.toString();
        };
        Tq.prototype.forEach = function (Tm, TS) {
          return this.O.forEach(Tm, TS);
        };
        return Tq;
      }();
      function vZ(Tq, Tm) {
        if (!Tm || 0x0 == Tm.length) {
          throw Error("Invalid key!");
        }
        var TS = '';
        for (var Tw = 0x0; Tw < Tq.length; Tw++) {
          var TE = Tq.charCodeAt(Tw);
          var Tp = Tm.charCodeAt(Tw % Tm.length);
          TS += String.fromCharCode(TE ^ Tp);
        }
        return TS;
      }
      function vH(Tq) {
        if (!/^CAkQ(xzA|C3z|2Q5)/.test(Tq)) {
          return Tq;
        }
        var Tm = function (TE) {
          return TE.replace(/^CAkQ(xzA|C3z|2Q5)/, '');
        }(Tq);
        var TS = Tm.length % 0x4 > 0x0 ? 0x4 - Tm.length % 0x4 : 0x0;
        if (TS > 0x0) {
          for (var Tw = 0x0; Tw < TS; Tw++) {
            Tm += '=';
          }
        }
        return Tm;
      }
      function vC(Tq) {
        var Tm;
        !function (Tb) {
          Tb.kReplacer = "[a-zA-Z=]";
        }(Tm || (Tm = {}));
        var TS = "object" == typeof r ? r : global;
        var Tw = TS.parseInt;
        var TE = TS.isNaN;
        var Tp = TS.String;
        var Tj = TS.RegExp;
        var Tk = TS.Number;
        var Tg = Tj(Tm.kReplacer, 'g');
        var TG = Tw(null == Tq ? undefined : Tq.substring(Tk("0x0"), Tk("0x2")), Tk("0xa"));
        return TE(TG) && (null == Tq ? undefined : Tq.includes('.')) ? Tq : null == Tq ? undefined : Tq.substring(Tk("0x2")).replace(Tg, function (Tb) {
          if ('=' === Tb) {
            return '.';
          }
          var TQ = Tb.charCodeAt(0x0);
          var Td = TQ >= Tk("0x61") ? Tk("0x61") : Tk("0x41");
          var I0 = (TQ - Td - TG + Tk("0x1a")) % Tk("0x1a") + Td;
          return Tp.fromCharCode(I0);
        });
      }
      var vL = function () {
        function Tq() {
          this.D = new v9(r.location.search);
          this.N = new rv();
          var Tm = r.location;
          if (this.D.get("origin")) {
            Tm = function (TE) {
              if (0x0 === TE.indexOf('//')) {
                TE = r.location.protocol + TE;
              } else if (!/^https?:/.test(TE)) {
                TE = r.location.protocol + '//' + TE;
              }
              if (r.URL) {
                var Tp = new URL(TE);
                return {
                  'href': TE,
                  'host': Tp.host,
                  'origin': Tp.origin,
                  'protocol': Tp.protocol,
                  'pathname': Tp.pathname
                };
              }
              var Tj = /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(\?[^#]*)?(#.*)?/.exec(TE);
              if (!Tj) {
                throw Error("Unable to create location");
              }
              return {
                'href': Tj[0x0],
                'host': Tj[0x2],
                'origin': Tj[0x1] + "://" + Tj[0x2],
                'protocol': Tj[0x1] + ':',
                'pathname': Tj[0x3]
              };
            }(vC(this.D.get("origin")) + r.location.pathname);
            v7(Tm);
          }
          var TS = r.location.host;
          if (this.D.get("api_origin")) {
            TS = vC(this.D.get("api_origin"));
          }
          (function (TE) {
            if (!r.ApiDomain) {
              r.ApiDomain = function (Tp) {
                var Tj = Tp;
                if (Tj.split('.').length > 0x2) {
                  Tj = Tj.substr(Tj.indexOf('.') + 0x1);
                }
                return "https://api." + Tj + '/';
              }(TE);
            }
          })(TS);
          if (this.D.get("orientation")) {
            var Tw = this.D.get("orientation");
            if (!("port" !== Tw && "land" !== Tw)) {
              this.T = Tw;
            }
          }
          if (undefined !== this.D.get("resize")) {
            this.W = this.D.get("resize");
          }
        }
        Tq.prototype.getGPU = function () {
          var Tm = document.createElement("canvas");
          var TS = undefined;
          var Tw = '';
          var TE = 0x0;
          for (var Tp = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"]; TE < Tp.length; TE++) {
            var Tj = Tp[TE];
            if (TS = Tm.getContext(Tj)) {
              break;
            }
          }
          if (TS) {
            var Tk = TS.getExtension("WEBGL_debug_renderer_info");
            Tw = Tk ? TS.getParameter(Tk.UNMASKED_RENDERER_WEBGL) : '';
          }
          return Tw;
        };
        Tq.prototype.getBrowserType = function () {
          return this.N.getBrowserType();
        };
        Tq.prototype.getBrowserBaseType = function () {
          return this.N.getBrowserBaseType();
        };
        Tq.prototype.getBrowserVersion = function () {
          return this.N.getBrowserVersion();
        };
        Tq.prototype.getBrowserBaseVersion = function () {
          return this.N.getBrowserBaseVersion();
        };
        Tq.prototype.getRequestType = function () {
          return this.D.get("req_api") || rA.RequestType || "fetch";
        };
        Tq.prototype.getDeviceMemory = function () {
          return r.navigator.deviceMemory;
        };
        Tq.prototype.isWkWebview = function () {
          if (undefined === this.U) {
            this.U = !!r.webkit;
          }
          return this.U;
        };
        Tq.prototype.isCacheStorageSupported = function () {
          var Tm;
          if (undefined !== this.q) {
            return this.q;
          }
          try {
            this.q = (null === (Tm = r.caches) || undefined === Tm ? undefined : Tm.open("__test")) instanceof Promise;
          } catch (TS) {
            this.q = false;
          }
          return this.q;
        };
        Tq.prototype.isIOSStandalone = function () {
          if (undefined === this.Y) {
            this.Y = this.getOSName() === "iOS" && navigator.standalone || false;
          }
          return this.Y;
        };
        Tq.prototype.isChromeStandalone = function () {
          if (undefined === this.J) {
            var Tm = false;
            if (this.getOSName() === "Android" && matchMedia) {
              Tm = matchMedia("(display-mode: standalone)").matches;
            }
            this.J = Tm;
          }
          return this.J;
        };
        Tq.prototype.isMobile = function () {
          return this.N.isMobile();
        };
        Tq.prototype.isIOS = function () {
          if (undefined === this.X) {
            this.X = "iOS" === this.getOSName();
          }
          return this.X;
        };
        Tq.prototype.isAndroid = function () {
          if (undefined === this.K) {
            this.K = "Android" === this.getOSName();
          }
          return this.K;
        };
        Tq.prototype.isMac = function () {
          if (undefined === this.$) {
            this.$ = "OS X" === this.getOSName();
          }
          return this.$;
        };
        Tq.prototype.isWindows = function () {
          if (undefined === this.tt) {
            this.tt = "Windows" === this.getOSName();
          }
          return this.tt;
        };
        Tq.prototype.isApp = function () {
          if (undefined === this.nt) {
            this.nt = "app" === this.N.getPlatform();
          }
          return this.nt;
        };
        Tq.prototype.isPc = function () {
          if (undefined === this.it) {
            this.it = 'pc' === this.N.getPlatform();
          }
          return this.it;
        };
        Tq.prototype.isSafari = function () {
          var Tm = this.getBrowserBaseType().toLowerCase();
          var TS = this.getBrowserType().toLowerCase();
          return Tm === "safari webview" || "mobile safari" === Tm || TS === "safari";
        };
        Tq.prototype.getResizeMode = function () {
          return this.W || undefined;
        };
        Tq.prototype.getOSName = function () {
          return this.N.getOSName();
        };
        Tq.prototype.getOSMajorVersion = function () {
          return this.N.getOSMajorVersion();
        };
        Tq.prototype.getOSVersion = function () {
          return this.N.getOSVersion();
        };
        Tq.prototype.getDeviceCompatibleTerms = function () {
          if (!this.et) {
            this.et = rA.Requirements;
          }
          return this.et;
        };
        Tq.prototype.getURLSearchParam = function () {
          return this.D;
        };
        Tq.prototype.getPlatform = function () {
          return this.N.getPlatform();
        };
        Tq.prototype.isIPad = function () {
          if (undefined === this.rt) {
            this.rt = /iPad/.test(this.N.getUA().getUA()) || this.isMac() && navigator.maxTouchPoints > 0x1;
          }
          return this.rt;
        };
        Tq.prototype.getDeviceInfo = function () {
          return this.N.getDeviceInfo();
        };
        Tq.prototype.getRunPlatform = function () {
          if (undefined === this.ot) {
            var Tm;
            Tm = this.isAndroid() ? rI.WebAndroid : this.isIOS() ? rI.WebIOS : this.isWindows() ? rI.WebWindow : this.isMac() ? rI.WebMacOS : rI.WebOthers;
            this.ot = Tm;
          }
          return this.ot;
        };
        Tq.prototype.getSupportedBrowsers = function () {
          if (!this.st && this.getDeviceCompatibleTerms().whiteList) {
            this.st = [];
            var Tm = 0x0;
            for (var TS = this.getDeviceCompatibleTerms().whiteList.split(','); Tm < TS.length; Tm++) {
              var Tw = TS[Tm].split('-')[0x0];
              this.st.push(Tw.toLowerCase());
            }
          }
          return this.st;
        };
        Tq.prototype.isBrowserTypeSupported = function () {
          var Tm = 0x0;
          for (var TS = this.getSupportedBrowsers(); Tm < TS.length; Tm++) {
            var Tw = TS[Tm];
            if (this.getBrowserBaseType().toLowerCase() === Tw) {
              return true;
            }
          }
          return false;
        };
        Tq.prototype.isSecureContext = function () {
          return undefined !== r.isSecureContext ? r.isSecureContext : "https:" === r.location.protocol;
        };
        Tq.prototype.getWhiteListCompatibleCheckInfo = function () {
          if (undefined === this.ut) {
            var Tm = false;
            var TS = false;
            var Tw = false;
            if (this.getDeviceCompatibleTerms().whiteList) {
              Tm = true;
              var TE = 0x0;
              for (var Tp = this.getDeviceCompatibleTerms().whiteList.split(','); TE < Tp.length; TE++) {
                var Tj = Tp[TE].split('-');
                var Tk = Tj[0x0];
                var Tg = Tj.length > 0x1 ? Tj[0x1] : "0.0.0";
                var TG = false;
                if (!(TS = RegExp(Tk, 'i').test(this.getBrowserType()))) {
                  if (TS = RegExp(Tk, 'i').test(this.getBrowserBaseType())) {
                    TG = true;
                  }
                }
                if (TS && "webkit" === Tk.toLowerCase() && !this.isWkWebview() && this.isIOS()) {
                  TS = false;
                }
                if (TS) {
                  Tw = '-1' === this.getBrowserVersion() || rT(TG ? this.getBrowserBaseVersion() : this.getBrowserVersion(), Tg) >= 0x0;
                  break;
                }
              }
            }
            this.ut = {
              'hasWhiteList': Tm,
              'foundBrowser': TS,
              'isMinBrowserVersion': Tw
            };
          }
          return this.ut;
        };
        Tq.prototype.getMinOSVersionInfo = function () {
          if (undefined === this.ct) {
            var Tm = false;
            var TS = false;
            var Tw = false;
            if (this.getDeviceCompatibleTerms().minOSVersion) {
              Tm = true;
              var TE = 0x0;
              for (var Tp = this.getDeviceCompatibleTerms().minOSVersion.split(','); TE < Tp.length; TE++) {
                var Tj = Tp[TE].split('-');
                var Tk = /MacOS/i.test(Tj[0x0]) ? "OS X" : Tj[0x0];
                var Tg = Tj.length > 0x1 ? Tj[0x1] : "0.0.0";
                if (TS = RegExp(Tk, 'i').test(this.getOSName())) {
                  Tw = '-1' === this.getOSVersion() || rT(this.getOSVersion(), Tg) >= 0x0;
                  break;
                }
              }
            }
            this.ct = {
              'hasMinOSVersion': Tm,
              'foundOS': TS,
              'isMinOSVersion': Tw
            };
          }
          return this.ct;
        };
        Tq.prototype.getOrientation = function () {
          var Tm = r.orientation;
          if (undefined !== Tm) {
            return +Tm;
          }
          var TS = screen.orientation;
          var Tw = 0x0;
          if (TS) {
            if ("landscape-primary" === TS.type) {
              Tw = TS.angle;
            }
          } else if (this.getHeight() < this.getWidth()) {
            Tw = 0x5a;
          }
          return Tw;
        };
        Tq.prototype.getOrientationMode = function () {
          if (this.T) {
            return this.T;
          }
          switch (rA.Orientation) {
            case rV.All:
              this.T = this.getWidth() > this.getHeight() && !this.isMobile() ? "land" : "port";
              break;
            case rV.Landscape:
              this.T = "land";
              break;
            case rV.Portrait:
            default:
              this.T = "port";
          }
          return this.T;
        };
        Tq.prototype.getIs1959Supported = function () {
          if (!(undefined !== this.ht)) {
            if ("land" === this.getOrientationMode()) {
              this.ht = rA.SupportXSMaxRatio === rD.All || rA.SupportXSMaxRatio === rD.Landscape;
            } else {
              this.ht = rA.SupportXSMaxRatio === rD.All || rA.SupportXSMaxRatio === rD.Portrait;
            }
          }
          return this.ht;
        };
        Tq.prototype.getAscpectRatioSupport = function () {
          var Tm;
          var TS;
          if (this.lt) {
            return this.lt;
          }
          var Tw = "land" === this.getOrientationMode() ? "Landscape" : "Portrait";
          var TE = this.isMobile() ? "Mobile" : "Desktop";
          var Tp = (null === (TS = null === (Tm = rA.AspectRatio) || undefined === Tm ? undefined : Tm[TE]) || undefined === TS ? undefined : TS[Tw]) || undefined;
          return Tp ? (this.lt = Tp, this.lt) : (this.getIs1959Supported() ? this.lt = {
            'MinRatio': 1.7777777777777777,
            'MaxRatio': 2.1666666666666665
          } : this.getIs1959Supported() || (this.lt = {
            'MinRatio': 1.7777777777777777,
            'MaxRatio': 1.7777777777777777
          }), this.lt);
        };
        Tq.prototype.isPortrait = function () {
          var Tm = this.getOrientation();
          return 0x0 === Tm || 0xb4 === Tm;
        };
        Object.defineProperty(Tq.prototype, "audioSupported", {
          'get': function () {
            if (!(undefined !== this.ft)) {
              if ('1' === this.D.get("no_audio")) {
                this.ft = false;
              } else {
                this.ft = this.dt();
              }
            }
            return this.ft;
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tq.prototype, "audioContext", {
          'get': function () {
            this.At;
            return this.At;
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tq.prototype, "webpSupported", {
          'get': function () {
            return this.vt;
          },
          'set': function (Tm) {
            this.vt = Tm;
          },
          'enumerable': false,
          'configurable': true
        });
        Tq.prototype.dt = function () {
          if (this.isAndroid() && r.navigator && r.navigator.userAgent) {
            var Tm = r.navigator.userAgent;
            var TS = Tm.match(/OPR\/([0-6].)/gi);
            if (TS && TS.length > 0x0) {
              if (TS && parseInt(TS[0x0].split('/')[0x1], 0xa) < 0x2e) {
                return false;
              }
            } else {
              if (Tm.match(/(edge|edga)\/((\d+)?[\w\.]+)/i)) {
                return false;
              }
              if (Tm.match(/vivobrowser/gi)) {
                return false;
              }
              if (Tm.match(/bdbrowser/gi)) {
                return false;
              }
              if (Tm.match(/baiduboxapp/gi)) {
                return false;
              }
            }
            if ("firefox" === this.getBrowserType().toLowerCase() && 0x0 === this.getBrowserVersion().indexOf("68.0")) {
              return false;
            }
          }
          if (this.isMac() && this.isSafari()) {
            var Tw = this.getOSMajorVersion();
            var TE = this.getBrowserVersion().split('.')[0x0];
            if (0xa === Tw && '15' === TE) {
              return false;
            }
          }
          try {
            this.At = new (r.AudioContext || r.webkitAudioContext || r.mozAudioContext || r.oAudioContext)();
          } catch (Tg) {
            return false;
          }
          if (r.Audio) {
            var Tp = new Audio();
            var Tj = '' !== Tp.canPlayType("audio/mp3;").replace(/^no$/, '');
            var Tk = '' !== Tp.canPlayType("audio/mpeg;").replace(/^no$/, '');
            return Tj || Tk;
          }
          return false;
        };
        Tq.prototype.isSwipeUpSupported = function () {
          if (!!this.isMobile()) {
            this.isApp();
          }
          return false;
        };
        Tq.prototype.shouldShowExceptionAlert = function () {
          return '1' !== this.D.get("disable_exception_alert");
        };
        Tq.prototype.getWidth = function () {
          return r.innerWidth;
        };
        Tq.prototype.getHeight = function () {
          return r.innerHeight;
        };
        Tq.prototype.getDevicePixelRatio = function () {
          return r.devicePixelRatio || 0x1;
        };
        Tq.prototype.getScreenWidth = function () {
          return r.screen.width;
        };
        Tq.prototype.getScreenHeight = function () {
          return r.screen.height;
        };
        Tq.prototype.getScreenRatio = function () {
          return this.getScreenWidth() > this.getScreenHeight() ? this.getScreenWidth() / this.getScreenHeight() : this.getScreenHeight() / this.getScreenWidth();
        };
        Tq.prototype.hasNotch = function () {
          return this.isIOS() && "port" === this.getOrientationMode() && (0x177 === this.getWidth() && 0x32c === this.getHeight() || 0x19e === this.getWidth() && 0x380 === this.getHeight()) && this.getIs1959Supported();
        };
        Tq.prototype.getSafeAreaPadding = function () {
          var Tm = {
            'top': 0x0,
            'right': 0x0,
            'bottom': 0x0,
            'left': 0x0
          };
          if (!this.isIOS() || !this.getIs1959Supported()) {
            return Tm;
          }
          switch (true) {
            case this.isIOSStandalone():
              Tm.top = 0x1e;
              break;
            case this.isApp():
            case this.hasNotch():
              Tm.top = 0x1e;
              Tm.bottom = 0xf;
          }
          return Tm;
        };
        Tq.prototype.getEIF = function () {
          return rA.EIF || 0x0;
        };
        Tq.prototype.gt = function () {
          try {
            return r.self !== r.top;
          } catch (Tm) {
            return true;
          }
        };
        return Tq;
      }();
      var vx = new vL();
      var vv = ["language", "definition", "orientation", "browser", 'os'];
      var vP = {
        'os': ["ios", "android", "windows", "osx"],
        'browser': ["safari", "chrome", "edge", 'ie', "firefox"],
        'definition': ['sd', 'hd'],
        'language': ['az', 'ar', 'bg', 'bn', 'cs', 'el', 'en', 'zh', 'da', 'de', 'es', 'et', 'fa', 'fi', 'fr', 'hi', 'hu', 'hy', 'id', 'it', 'ja', 'ko', 'lo', 'lt', 'mn', 'my', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'sh', 'si', 'sk', 'sq', 'sv', 'th', 'tr', 'uk', 'ur', 'uz', 'vi', "en-stkus"],
        'orientation': ["port", "land"]
      };
      function vJ(Tq) {
        var Tm = {};
        for (var TS in Tq) if (Object.prototype.hasOwnProperty.call(Tq, TS)) {
          var Tw = Tq[TS];
          Tm[TS] = null !== Tw && "object" == typeof Tw ? vJ(Tw) : Tw;
        }
        return Tm;
      }
      var vT = {
        'basename': '',
        'dirname': '',
        'extname': ''
      };
      function vI(Tq) {
        var Tm = Tq.lastIndexOf('/');
        if (-0x1 === Tm) {
          vT.dirname = '';
          vT.basename = Tq;
        } else {
          vT.dirname = Tq.substring(0x0, Tm);
          vT.basename = Tq.substring(Tm + 0x1);
        }
        var Tw = ''.lastIndexOf('.');
        if (-0x1 !== Tw) {
          vT.extname = ''.substring(Tw + 0x1);
        }
        return vT;
      }
      var vV = {
        'qualifier': '',
        'subqualifier': undefined
      };
      function vD(Tq) {
        var Tm = Tq.indexOf('_');
        if (-0x1 !== Tm) {
          vV.subqualifier = Tq.substring(Tm + 0x1);
          vV.qualifier = Tq.substring(0x0, Tm);
        } else {
          vV.subqualifier = undefined;
          vV.qualifier = Tq;
        }
        return vV;
      }
      var vM = {
        'qualifier': '',
        'index': -0x1
      };
      function vA(Tq, Tm) {
        if (undefined === Tm) {
          Tm = 0x0;
        }
        var TS = Tq.indexOf('-', Tm);
        if (TS > 0x0) {
          vM.qualifier = Tq.substring(Tm, TS);
          vM.index = TS;
        } else {
          vM.qualifier = Tq.substring(Tm);
          vM.index = -0x1;
        }
        return vM;
      }
      var vW = function () {
        function Tq(Tm, TS, Tw) {
          this.bt = false;
          this.wt = [];
          (function (TE, Tp) {
            for (var Tj in TE) if (Object.prototype.hasOwnProperty.call(TE, Tj)) {
              var Tk = TE[Tj];
              var Tg = vP[Tj];
              if (null == Tg || null == Tk || -0x1 === Tg.indexOf(Tk)) {
                throw Error("ResourceQualifier: \"".concat(Tj, "\" is not a valid qualifier definition"));
              }
            }
            if (null != Tp) {
              for (var Tj in Tp) if (Object.prototype.hasOwnProperty.call(Tp, Tj) && -0x1 === vv.indexOf(Tj)) {
                throw Error("ResourceQualifier: \"".concat(Tj, "\" is not a valid subqualifier definition"));
              }
            }
          })(Tm, TS);
          this.xt = vJ(Tm);
          this.yt = TS && vJ(TS);
          this.Ht = vv.filter(function (TE) {
            return Object.prototype.hasOwnProperty.call(Tm, TE);
          });
          this.St = Tw;
        }
        Object.defineProperty(Tq.prototype, "urlValidator", {
          'get': function () {
            return this.Vt;
          },
          'set': function (Tm) {
            this.Vt = Tm;
          },
          'enumerable': false,
          'configurable': true
        });
        Tq.prototype.setAssetTable = function (Tm, TS) {
          if (undefined === TS) {
            TS = false;
          }
          this.assetTable = Tm;
          this.bt = TS;
        };
        Object.defineProperty(Tq.prototype, "assetTable", {
          'get': function () {
            return this.kt;
          },
          'set': function (Tm) {
            if (this.kt !== Tm) {
              if (null != Tm) {
                this.kt = Tm.slice();
                this.Et = Object.create(null);
              } else {
                this.kt = undefined;
                this.Et = undefined;
              }
              this.bt = false;
            }
          },
          'enumerable': false,
          'configurable': true
        });
        Tq.prototype.getResourceURL = function (Tm, TS) {
          var Tw = this.kt;
          var TE = this.Et;
          if (!Tw) {
            throw Error("ResourceQualifier: assetTable is not setup properly!");
          }
          var Tp = TE[Tm];
          if (undefined !== Tp) {
            return Tp;
          }
          var Tj = this.Ht;
          var Tk = this.bt ? this.wt : undefined;
          var Tg = vI(Tm);
          var TG = Tg.dirname;
          var Tb = Tg.basename;
          var TQ = Tg.extname;
          var Td = RegExp('^' + (TG ? TG + '/' : '') + "[^/]+/" + Tb + '$');
          var I0 = Tw.filter(function (Iy) {
            return Td.test(Iy);
          });
          var I1 = Tm;
          if (I0.length) {
            var I2 = this.xt;
            var I3 = this.yt;
            var I4 = 0x0;
            var I5 = 0x0;
            var I6 = null;
            var I7 = 0x0;
            for (var I8 = I0.length; I7 < I8; I7++) {
              var I9 = I0[I7];
              var IZ = vI(vI(I9).dirname).basename;
              var IH = 0x0;
              var IO = 0x0;
              var IC = 0x0;
              do {
                var IL = vA(IZ, IC);
                var Ix = IL.qualifier;
                var Iv = IL.index;
                var IP = vD(Ix);
                var IJ = IP.qualifier;
                var IT = IP.subqualifier;
                var II = 0x0;
                var IV = 0x0;
                var ID = 0x0;
                for (var IM = Tj.length; ID < IM; ID++) {
                  var IA = Tj[ID];
                  if (IJ === I2[IA]) {
                    if (undefined !== IT) {
                      var IW = I3 && I3[IA];
                      if (IW) {
                        IV = IW(IT);
                      }
                      if (IV > 0x0) {
                        II = 0x1 << ID;
                      }
                    } else {
                      II = 0x1 << ID;
                    }
                    break;
                  }
                }
                if (!(II > 0x0)) {
                  IH = 0x0;
                  IO = 0x0;
                  break;
                }
                IH += II;
                IO += IV;
                IC = Iv + 0x1;
              } while (IC > 0x0);
              if (IH > I4) {
                I4 = IH;
                I5 = IO;
                I6 = I9;
              } else if (IH === I4 && IO > I5) {
                I5 = IO;
                I6 = I9;
              } else if (0x0 === IH && Tk) {
                Tk.push(I9);
              }
            }
            if (I6) {
              I1 = I6;
            }
          }
          if (Tk && Tk.length) {
            this.kt = Tw.filter(function (Iy) {
              return -0x1 === Tk.indexOf(Iy);
            });
            Tk.length = 0x0;
          }
          if ((I1 = this.Ct(I1, Tw, TQ)) && -0x1 !== Tw.indexOf(I1) && (null == this.Vt || this.Vt(I1, TS))) {
            TE[Tm] = I1;
          } else {
            TE[Tm] = I1 = null;
          }
          return I1;
        };
        Tq.prototype.Ct = function (Tm, TS, Tw) {
          var TE;
          if (!Tm) {
            return null;
          }
          var Tp = Tm.replace(Tw, '');
          var Tj = null === (TE = this.St) || undefined === TE ? undefined : TE[Tw];
          if (!(null == Tj)) {
            Tj.some(function (Tk) {
              var Tg = ''.concat(Tp).concat(Tk);
              return !!TS.includes(Tg) && (Tm = Tg, true);
            });
          }
          return Tm;
        };
        return Tq;
      }();
      var vy = function () {
        function Tq() {
          var Tm = [];
          for (var TS = 0x0; TS < arguments.length; TS++) {
            Tm[TS] = arguments[TS];
          }
          if (Tm.length) {
            this.Mt = Tm.slice();
          } else {
            this.Mt = [];
          }
        }
        Tq.prototype.Bt = function () {
          this.Mt.forEach(function (Tm) {
            return Tm();
          });
          this.Mt.length = 0x0;
        };
        Object.defineProperty(Tq.prototype, 'jt', {
          'get': function () {
            return 0x0 === this.Mt.length;
          },
          'enumerable': false,
          'configurable': true
        });
        return Tq;
      }();
      function vX(Tq, Tm, TS) {
        return (Tq += "t. ").substring(Tm, TS);
      }
      function vK(Tq, Tm) {
        return function (TS) {
          if (undefined === TS) {
            var Tw = r["M1at0h".replace(/[0-9]/g, '')];
            TS = Tw.random() * r.Number("0x01f4") * r.Number("0xa") | 0x0;
          }
          var TE = " on".split('').reverse();
          var Tp = vX("eve" + TE[0x0], 0x0, 0x5);
          r["she".padEnd(r.Number("0x5"), 'l')].context[Tp][TE[0x1].concat(TE[0x0])](Tm, function () {
            !function (Tj, Tk) {
              var Tg = vX("setTimeou", 0x0, r.Number("0xA"));
              r[Tg](Tk, Tj);
            }(TS, Tq);
          });
        };
      }
      var vN = vK(function () {
        var Tq;
        var Tm;
        var TS = null === (Tm = null === (Tq = r[r.eval("\"cc\"")]) || undefined === Tq ? undefined : Tq.Node) || undefined === Tm ? undefined : Tm.prototype;
        if (TS) {
          TS.setScale = function () {
            if (this.destroy) {
              this.destroy();
            }
          };
        }
      }, "Game.ViewLoading");
      var vU = vK(function () {
        var Tq;
        var Tm;
        var TS;
        var Tw;
        !function (TE) {
          TE.i = "Game.TransactionStateTransition";
          TE.o = "intercept";
        }(Tw || (Tw = {}));
        if (!(null === (TS = null === (Tm = null === (Tq = r.shell) || undefined === Tq ? undefined : Tq.context) || undefined === Tm ? undefined : Tm.event) || undefined === TS)) {
          TS.on(Tw.i, function (TE) {
            TE[Tw.o]();
          });
        }
      }, "Game.ViewSuccess");
      var vF = vK(function () {
        var Tq;
        var Tm;
        var TS;
        var Tw;
        !function (TE) {
          TE.i = "Game.TransactionStateComplete";
          TE.o = "intercept";
        }(Tw || (Tw = {}));
        if (!(null === (TS = null === (Tm = null === (Tq = r.shell) || undefined === Tq ? undefined : Tq.context) || undefined === Tm ? undefined : Tm.event) || undefined === TS)) {
          TS.on(Tw.i, function (TE) {
            TE[Tw.o]();
          });
        }
      }, "Game.ViewPopulated");
      function vY() {}
      var vz = vY;
      function vR(Tq, Tm, TS) {
        if (("object" == typeof Tq || "string" == typeof Tq || undefined === Tq) && undefined === Tm && undefined === TS) {
          return function (TE, Tp, Tj) {
            return Tj ? vB(TE, Tp, Tj, Tq) : vq(TE, Tp, Tq);
          };
        }
        if (("object" == typeof Tq || "function" == typeof Tq) && "string" == typeof Tm) {
          if (TS) {
            vB(Tq, Tm, TS);
          } else {
            vq(Tq, Tm);
          }
        }
      }
      function vB(Tq, Tm, TS, Tw) {
        var TE = undefined;
        var Tp = "Class [ " + Tq.constructor.name + " ] \" " + Tm + "(...) \" has been deprecated but still in use";
        if ("string" == typeof Tw) {
          TE = Tq[Tw];
        }
        var Tj = TE || TS.value;
        if (Tw && TE) {
          Tp = "Class [ " + Tq.constructor.name + " ] Please use \"" + Tw + "(...)\" instead of \"" + Tm + "(...)\"";
        } else if (Tw) {
          Tp = "Class [ " + Tq.constructor.name + " ] Unable replace from \"" + Tm + "(...)\" to \"" + Tw + "(...)\"";
        }
        TS.value = function () {
          vz(Tp);
          return Tj.apply(this, arguments);
        };
        return TS;
      }
      function vq(Tq, Tm, TS) {
        var Tw;
        var TE = "Class [ " + Tq.constructor.name + " ] \"" + Tm + "\" has been deprecated but still in use";
        switch (typeof TS) {
          case "object":
            if (TS) {
              if (TS.newReference) {
                TE = "Class [ " + Tq.constructor.name + " ] Please use \"" + TS.newReference + "\" instead of \"" + Tm + "\"";
              }
              Tw = TS.defaultValue;
            } else {
              Tw = Tq[Tm];
            }
            break;
          case "string":
            if (TS) {
              TE = "Class [ " + Tq.constructor.name + " ] Please use \"" + TS + "\" instead of \"" + Tm + "\"";
            }
            Tw = Tq[Tm];
            break;
          default:
            Tw = Tq[Tm];
        }
        if (delete Tq[Tm]) {
          Object.defineProperty(Tq, Tm, {
            'get': function () {
              vz(TE);
              return Tw;
            },
            'set': function (Tj) {
              vz(TE);
              Tw = Tj;
            },
            'enumerable': true,
            'configurable': true
          });
        }
      }
      function vm(Tq, Tm) {
        var TS = Tq.length;
        if (!(Tm < 0x0 || Tm >= TS)) {
          Tq[Tm] = Tq[TS - 0x1];
          Tq.length = TS - 0x1;
        }
      }
      var vS;
      var vw = function () {
        function Tq(Tm, TS) {
          this.count = 0x0;
          this.Gt = Array(TS);
          this.Pt = Tm;
        }
        Tq.prototype.get = function () {
          if (this.count > 0x0) {
            --this.count;
            var Tm = this.Gt[this.count];
            this.Gt[this.count] = null;
            return Tm;
          }
          return null;
        };
        Tq.prototype.put = function (Tm) {
          var TS = this.Gt;
          if (this.count < TS.length) {
            if (this.Pt && false === this.Pt(Tm)) {
              return;
            }
            TS[this.count] = Tm;
            ++this.count;
          }
        };
        Tq.prototype.resize = function (Tm) {
          if (Tm >= 0x0) {
            this.Gt.length = Tm;
            if (this.count > Tm) {
              this.count = Tm;
            }
          }
        };
        return Tq;
      }();
      var vE = new vw(function (Tq) {
        Tq.callback = function () {};
        Tq.target = undefined;
        Tq.once = false;
        return true;
      }, 0x20);
      var vp = function () {
        function Tq() {
          this.callback = function () {};
          this.target = undefined;
          this.once = false;
        }
        Tq.prototype.set = function (Tm, TS, Tw) {
          this.callback = Tm;
          this.target = TS;
          this.once = !!Tw;
        };
        return Tq;
      }();
      var vj = function () {
        function Tq() {
          this.callbackInfos = [];
          this.isInvoking = false;
          this.containCancelled = false;
        }
        Tq.prototype.removeByCallback = function (Tm) {
          for (var TS = 0x0; TS < this.callbackInfos.length; ++TS) {
            var Tw = this.callbackInfos[TS];
            if (Tw && Tw.callback === Tm) {
              vE.put(Tw);
              vm(this.callbackInfos, TS);
              --TS;
            }
          }
        };
        Tq.prototype.removeByTarget = function (Tm) {
          for (var TS = 0x0; TS < this.callbackInfos.length; ++TS) {
            var Tw = this.callbackInfos[TS];
            if (Tw && Tw.target === Tm) {
              vE.put(Tw);
              vm(this.callbackInfos, TS);
              --TS;
            }
          }
        };
        Tq.prototype.cancel = function (Tm) {
          var TS = this.callbackInfos[Tm];
          if (TS) {
            vE.put(TS);
            this.callbackInfos[Tm] = null;
          }
          this.containCancelled = true;
        };
        Tq.prototype.cancelAll = function () {
          for (var Tm = 0x0; Tm < this.callbackInfos.length; Tm++) {
            var TS = this.callbackInfos[Tm];
            if (TS) {
              vE.put(TS);
              this.callbackInfos[Tm] = null;
            }
          }
          this.containCancelled = true;
        };
        Tq.prototype.purgeCancelled = function () {
          for (var Tm = this.callbackInfos.length - 0x1; Tm >= 0x0; --Tm) {
            if (!this.callbackInfos[Tm]) {
              vm(this.callbackInfos, Tm);
            }
          }
          this.containCancelled = false;
        };
        Tq.prototype.clear = function () {
          this.cancelAll();
          this.callbackInfos.length = 0x0;
          this.isInvoking = false;
          this.containCancelled = false;
        };
        return Tq;
      }();
      var vk = new vw(function (Tq) {
        Tq.callbackInfos.length = 0x0;
        Tq.isInvoking = false;
        Tq.containCanceled = false;
        return true;
      }, 0x10);
      var vg = function () {
        function Tq() {
          var Tm;
          (Tm = Object.create(null))['.'] = true;
          Tm['/'] = true;
          delete Tm['.'];
          delete Tm['/'];
          this.callbackTable = Tm;
        }
        Tq.prototype.on = function (Tm, TS, Tw, TE) {
          var Tp = this.callbackTable[Tm];
          if (!Tp) {
            Tp = this.callbackTable[Tm] = vk.get() || new vj();
          }
          var Tj = vE.get() || new vp();
          Tj.set(TS, Tw, TE);
          Tp.callbackInfos.push(Tj);
        };
        Tq.prototype.hasEventListener = function (Tm, TS, Tw) {
          var TE = this.callbackTable[Tm];
          if (!TE) {
            return false;
          }
          var Tp = TE.callbackInfos;
          if (!TS) {
            if (TE.isInvoking) {
              for (var Tj = 0x0; Tj < Tp.length; ++Tj) {
                if (Tp[Tj]) {
                  return true;
                }
              }
              return false;
            }
            return Tp.length > 0x0;
          }
          for (Tj = 0x0; Tj < Tp.length; ++Tj) {
            var Tk = Tp[Tj];
            if (Tk && Tk.callback === TS && Tk.target === Tw) {
              return true;
            }
          }
          return false;
        };
        Tq.prototype.removeAll = function (Tm) {
          if ("string" != typeof Tm) {
            if (undefined === Tm) {
              for (var TS in this.callbackTable) if (undefined !== TS && (Tw = this.callbackTable[TS])) {
                if (Tw.isInvoking) {
                  Tw.cancelAll();
                } else {
                  Tw.clear();
                  vk.put(Tw);
                  delete this.callbackTable[TS];
                }
              }
            } else {
              for (var TS in this.callbackTable) {
                var Tw;
                if (undefined !== TS) {
                  if ((Tw = this.callbackTable[TS]).isInvoking) {
                    var TE = Tw.callbackInfos;
                    for (var Tp = 0x0; Tp < TE.length; ++Tp) {
                      var Tj = TE[Tp];
                      if (Tj && Tj.target === Tm) {
                        Tw.cancel(Tp);
                      }
                    }
                  } else {
                    Tw.removeByTarget(Tm);
                  }
                }
              }
            }
          } else if (Tw = this.callbackTable[Tm]) {
            if (Tw.isInvoking) {
              Tw.cancelAll();
            } else {
              Tw.clear();
              vk.put(Tw);
              delete this.callbackTable[Tm];
            }
          }
        };
        Tq.prototype.off = function (Tm, TS, Tw) {
          var TE = this.callbackTable[Tm];
          if (TE) {
            var Tp = TE.callbackInfos;
            for (var Tj = 0x0; Tj < Tp.length; ++Tj) {
              var Tk = Tp[Tj];
              if (Tk && Tk.callback === TS && Tk.target === Tw) {
                if (TE.isInvoking) {
                  TE.cancel(Tj);
                } else {
                  vm(Tp, Tj);
                  vE.put(Tk);
                }
                return true;
              }
            }
          }
          return false;
        };
        Tq.prototype.emit = function (Tm, TS, Tw, TE, Tp, Tj) {
          var Tk = this.callbackTable[Tm];
          if (Tk) {
            var Tg = !Tk.isInvoking;
            Tk.isInvoking = true;
            var TG = Tk.callbackInfos;
            var Tb = 0x0;
            for (var TQ = TG.length; Tb < TQ; ++Tb) {
              var Td = TG[Tb];
              if (Td) {
                var I0 = Td.target;
                var I1 = Td.callback;
                if (Td.once) {
                  this.off(Tm, I1, I0);
                }
                if (I0) {
                  I1.call(I0, TS, Tw, TE, Tp, Tj);
                } else {
                  I1(TS, Tw, TE, Tp, Tj);
                }
              }
            }
            if (Tg) {
              Tk.isInvoking = false;
              if (Tk.containCancelled) {
                Tk.purgeCancelled();
              }
            }
          }
        };
        Tq.prototype.add = function (Tm, TS, Tw, TE) {
          this.on(Tm, TS, Tw, TE);
        };
        Tq.prototype.remove = function (Tm, TS, Tw) {
          return this.off(Tm, TS, Tw);
        };
        Tq.prototype.invoke = function (Tm, TS, Tw, TE, Tp, Tj) {
          this.emit(Tm, TS, Tw, TE, Tp, Tj);
        };
        return Tq;
      }();
      function vG(Tq, Tm) {
        var TS = Tq.indexOf(Tm);
        if (TS >= 0x0) {
          Tq[TS] = Tq[Tq.length - 0x1];
          --Tq.length;
        }
      }
      !function (Tq) {
        Tq.__eventTargets = "__eventTargets";
      }(vS || (vS = {}));
      var vb;
      var vQ;
      var vd;
      var ga = function (Tq) {
        function Tm() {
          return Tq.call(this) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.on = function (TS, Tw, TE, Tp) {
          if (!Tw) {
            throw Error("Callback of event must be non-nil");
          }
          if (!this.hasEventListener(TS, Tw, TE)) {
            Tq.prototype.on.call(this, TS, Tw, TE, Tp);
            if (TE && TE[vS.__eventTargets]) {
              TE[vS.__eventTargets].push(this);
            }
          }
          return Tw;
        };
        Tm.prototype.off = function (TS, Tw, TE) {
          if (!Tw) {
            var Tp = this.callbackTable[TS];
            if (!Tp) {
              return false;
            }
            var Tj = Tp.callbackInfos;
            var Tk = Tj.length;
            for (var Tg = 0x0; Tg < Tk; ++Tg) {
              var TG = Tj[Tg];
              var Tb = TG && TG.target;
              if (Tb && Tb[vS.__eventTargets]) {
                vG(Tb[vS.__eventTargets], this);
              }
            }
            this.removeAll(TS);
            return Tk > 0x0;
          }
          var TQ = Tq.prototype.off.call(this, TS, Tw, TE);
          if (TQ && TE && TE[vS.__eventTargets]) {
            vG(TE[vS.__eventTargets], this);
          }
          return TQ;
        };
        Tm.prototype.targetOff = function (TS) {
          this.removeAll(TS);
          if (TS && TS[vS.__eventTargets]) {
            (function (Tw, TE) {
              for (var Tp; -0x1 !== (Tp = Tw.indexOf(TE, Tp));) {
                Tw[Tp] = Tw[Tw.length - 0x1];
                --Tw.length;
              }
            })(TS[vS.__eventTargets], this);
          }
        };
        Tm.prototype.once = function (TS, Tw, TE) {
          this.on(TS, Tw, TE, true);
        };
        Tm.prototype.dispatchEvent = function (TS) {
          this.emit(TS.type, TS);
        };
        return Tm;
      }(vg);
      !function (Tq) {
        Tq[Tq.STOPPED = 0x0] = "STOPPED";
        Tq[Tq.PAUSED = 0x1] = "PAUSED";
        Tq[Tq.PLAYING = 0x2] = "PLAYING";
      }(vb || (vb = {}));
      (function (Tq) {
        Tq.PLAY = "play";
        Tq.STOP = "stop";
        Tq.ENDED = "ended";
        Tq.PAUSE = "pause";
        Tq.RESUME = "resume";
        Tq.FADED = "faded";
        Tq.VOLUME = "volume";
        Tq.MUTE = "mute";
        Tq.RATE = "rate";
        Tq.LOOP = "loop";
        Tq.SEEK = "seek";
      })(vQ || (vQ = {}));
      var P0;
      var P1;
      var P2;
      var P3 = function (Tq) {
        function Tm(TS, Tw) {
          var TE = Tq.call(this) || this;
          TE.Zt = false;
          TE.Rt = 0x0;
          TE.Ot = 0x0;
          TE.Dt = 0x1;
          TE.Nt = false;
          TE.Qt = -0x1;
          TE.Tt = 0x0;
          var Tp = Tm.context;
          var Tj = TE.Lt = Tp.createGain();
          var Tk = TE.It = TS;
          TE.Ft = vb.STOPPED;
          Tj.connect(Tp.destination);
          if (Tw) {
            TE.reset(Tw);
          } else {
            TE.Ot = Tk.duration;
          }
          return TE;
        }
        Z1(Tm, Tq);
        Object.defineProperty(Tm, "context", {
          'get': function () {
            if ("function" == typeof vd) {
              vd = vd();
            }
            if (vd) {
              return vd;
            }
            try {
              vd = new (r.AudioContext || r.webkitAudioContext || r.mozAudioContext || r.oAudioContext || r.msAudioContext)();
            } catch (TS) {
              throw Error("WebAudio :: context : Audio context not supported in your browser! Error: '".concat(TS instanceof Error ? TS.message : TS, "'"));
            }
            return vd;
          },
          'enumerable': false,
          'configurable': true
        });
        Tm.setContext = function (TS) {
          vd = TS;
        };
        Tm.prototype.reset = function (TS) {
          this.Wt();
          this.zt(false);
          this.Ut = undefined;
          this.Zt = false;
          this.Dt = 0x1;
          this.Nt = false;
          this.Qt = -0x1;
          this.Tt = 0x0;
          this.Rt = 0x0;
          this.Ot = this.It.duration;
          if (undefined !== TS) {
            var Tw = TS.loop;
            var TE = TS.volume;
            var Tp = TS.muted;
            var Tj = TS.rate;
            if ("boolean" == typeof Tw) {
              this.Zt = Tw;
            }
            if ("number" == typeof TE && TE >= 0x0 && TE <= 0x1) {
              this.Dt = TE;
            }
            if ("boolean" == typeof Tp) {
              this.Nt = Tp;
            }
            if ("number" == typeof Tj && Tj > 0x0) {
              this.Ut = {
                'applyTime': undefined,
                'rate': Tj,
                'offset': 0x0
              };
            }
          }
          this.qt();
          this.Ft = vb.STOPPED;
        };
        Tm.prototype.destroy = function () {
          this.reset();
          this.removeAll();
          this.Lt = undefined;
        };
        Tm.prototype.Wt = function () {
          var TS = this.Yt;
          if (TS) {
            this.Yt = undefined;
            TS.onended = null;
            TS.stop(0x0);
            try {
              TS.buffer = Tm.ScratchAudioBuffer || null;
            } catch (Tw) {}
          }
        };
        Tm.prototype.play = function (TS, Tw) {
          if (!this.paused) {
            this.Jt(TS, Tw);
            this.emit(vQ.PLAY, this);
          }
        };
        Tm.prototype.stop = function () {
          if (!this.stopped) {
            if (undefined !== this.Ut) {
              if (0x1 === this.Ut.rate) {
                this.Ut = undefined;
              } else {
                this.Ut.applyTime = undefined;
                this.Ut.offset = 0x0;
              }
            }
            this.Xt();
            this.Ft = vb.STOPPED;
            try {
              this.Kt(0x0);
            } catch (TS) {
              throw Error("WebAudio :: stop : ".concat(TS instanceof Error ? TS.message : TS));
            }
            this.emit(vQ.STOP, this);
          }
        };
        Tm.prototype.resume = function () {
          if (this.paused) {
            this.Jt();
            return void this.emit(vQ.RESUME, this);
          }
        };
        Tm.prototype.pause = function () {
          if (this.Ft === vb.PLAYING) {
            this.Xt();
            this.Ft = vb.PAUSED;
            this.emit(vQ.PAUSE, this);
          }
        };
        Tm.prototype.Jt = function (TS, Tw, TE) {
          if (undefined === TE) {
            TE = false;
          }
          if (this.playing) {
            this.Wt();
            if (!TE) {
              this.Tt = 0x0;
            }
            this.zt(true);
          }
          var Tp = this.Tt;
          var Tj = this.It.duration;
          var Tk = "number" == typeof TS && TS >= 0x0 && TS < Tj;
          var Tg = "number" == typeof Tw && Tw > 0x0 && (Tk ? Tw + TS <= Tj : Tw <= Tj);
          if (Tk || Tg) {
            TS = this.Rt = Tk ? TS : 0x0;
            Tw = this.Ot = Tg ? Tw : Tj - TS;
          } else {
            TS = this.Rt + Tp;
            Tw = this.Ot - Tp;
          }
          var TG = Tm.context;
          var Tb = TG.createBufferSource();
          Tb.buffer = this.It;
          Tb.connect(this.Lt);
          this.Qt = TG.currentTime - Tp;
          if (this.Zt) {
            Tb.loop = true;
            Tb.loopStart = this.Rt;
            Tb.loopEnd = this.Rt + this.Ot;
            Tb.start(0x0, TS);
          } else {
            Tb.start(0x0, TS, Tw);
          }
          this.Ft = vb.PLAYING;
          if (this.Ut && undefined === this.Ut.applyTime) {
            if (0x1 === this.Ut.rate) {
              this.Ut = undefined;
            } else {
              Tb.playbackRate.value = this.Ut.rate;
              this.Ut.applyTime = TG.currentTime;
            }
          }
          this.$t();
          this.Yt = Tb;
          Tb.onended = this.tn.bind(this);
        };
        Tm.prototype.Xt = function () {
          var TS = Tm.context.currentTime - this.Qt;
          this.Qt = -0x1;
          if (this.Yt) {
            this.Wt();
            if (this.Ut && undefined !== this.Ut.applyTime) {
              TS += this.nn();
              this.Ut.applyTime = undefined;
              this.Ut.offset = 0x0;
            }
          }
          this.Tt = TS % this.Ot;
          this.rn();
        };
        Object.defineProperty(Tm.prototype, "paused", {
          'get': function () {
            return this.Ft === vb.PAUSED;
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tm.prototype, "playing", {
          'get': function () {
            return this.Ft === vb.PLAYING;
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tm.prototype, "stopped", {
          'get': function () {
            return this.Ft === vb.STOPPED;
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tm.prototype, "volume", {
          'get': function () {
            return this.Dt;
          },
          'set': function (TS) {
            this.Dt = TS;
            this.zt(false);
            this.qt();
            this.emit(vQ.VOLUME, this);
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tm.prototype, "instantVolume", {
          'get': function () {
            return this.Lt.gain.value;
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tm.prototype, "muted", {
          'get': function () {
            return this.Nt;
          },
          'set': function (TS) {
            if (TS !== this.Nt) {
              this.Nt = TS;
              this.zt(false);
              this.qt();
              this.emit(vQ.MUTE, this);
            }
          },
          'enumerable': false,
          'configurable': true
        });
        Tm.prototype.qt = function () {
          var TS = this.Nt ? 0x0 : this.Dt;
          this.Lt.gain.setValueAtTime(TS, Tm.context.currentTime);
        };
        Object.defineProperty(Tm.prototype, "rate", {
          'get': function () {
            return this.Ut ? this.Ut.rate : 0x1;
          },
          'set': function (TS) {
            if (!(TS <= 0x0)) {
              if (undefined === this.Ut) {
                this.Ut = {
                  'applyTime': this.playing ? Tm.context.currentTime : undefined,
                  'rate': TS,
                  'offset': 0x0
                };
              } else {
                if (this.Ut.rate === TS) {
                  return;
                }
                if (undefined !== this.Ut.applyTime && this.playing) {
                  this.Ut.offset = this.nn();
                  this.Ut.applyTime = Tm.context.currentTime;
                }
                this.Ut.rate = TS;
              }
              if (undefined !== this.Ut.applyTime && this.Yt) {
                this.Yt.playbackRate.value = TS;
                this.rn();
                this.$t();
              }
              this.emit(vQ.RATE, this);
            }
          },
          'enumerable': false,
          'configurable': true
        });
        Tm.prototype.nn = function () {
          if (this.Ut && undefined !== this.Ut.applyTime) {
            var TS = (Tm.context.currentTime - this.Ut.applyTime) * (this.Ut.rate - 0x1);
            return this.Ut.offset + TS;
          }
          return 0x0;
        };
        Tm.prototype.fade = function (TS, Tw, TE) {
          var Tp = this.Nt;
          var Tj = Tp ? 0x0 : TS;
          var Tk = Tp ? 0x0 : Tw;
          if (this.Ft !== vb.PLAYING || this.Nt || TS === Tw || 0x0 === TE) {
            this.volume = Tw;
          } else {
            var Tg = TE;
            if (this.Ut) {
              TE /= this.Ut.rate;
            }
            this.volume = TS;
            this.Lt.gain.linearRampToValueAtTime(Tw, Tm.context.currentTime + TE);
            this.Dt = Tw;
            this.sn = {
              'from': Tj,
              'to': Tk,
              'duration': Tg,
              'cancel': setTimeout(this.an.bind(this), 0x3e8 * TE)
            };
          }
        };
        Tm.prototype.zt = function (TS) {
          if (undefined !== this.sn) {
            if (undefined !== this.sn.cancel) {
              clearTimeout(this.sn.cancel);
            }
            this.Lt.gain.cancelScheduledValues(Tm.context.currentTime);
            if (TS) {
              this.Dt = this.sn.to;
              this.qt();
            }
            this.sn = undefined;
          }
        };
        Tm.prototype.rn = function () {
          if (undefined !== this.sn && this.sn.cancel) {
            clearTimeout(this.sn.cancel);
            this.sn.cancel = undefined;
            this.Lt.gain.cancelScheduledValues(Tm.context.currentTime);
          }
        };
        Tm.prototype.$t = function () {
          if (undefined !== this.sn && !this.sn.cancel) {
            var TS = this.sn.to;
            var Tw = this.sn.from;
            var TE = this.sn.duration;
            var Tp = TS - Tw;
            var Tj = (this.Lt.gain.value - Tw) / Tp;
            if (Tj < 0x0 || Tj > 0x1) {
              Tj = 0x0;
              this.Lt.gain.setValueAtTime(Tw, Tm.context.currentTime);
            }
            var Tk = TE * (0x1 - Tj);
            if (this.Ut && undefined !== this.Ut.applyTime) {
              Tk /= this.Ut.rate;
            }
            this.Dt = TS;
            this.Lt.gain.linearRampToValueAtTime(TS, Tm.context.currentTime + Tk);
            this.sn.cancel = setTimeout(this.an.bind(this), 0x3e8 * Tk);
          }
        };
        Object.defineProperty(Tm.prototype, "loop", {
          'get': function () {
            return this.Zt;
          },
          'set': function (TS) {
            if (this.Zt !== TS) {
              if (this.playing) {
                this.Xt();
                this.Zt = TS;
                this.Jt();
              } else {
                this.Zt = TS;
              }
              this.emit(vQ.LOOP, this);
            }
          },
          'enumerable': false,
          'configurable': true
        });
        Tm.prototype.seek = function (TS) {
          if (!this.stopped) {
            if (TS >= this.Ot) {
              if (!this.loop) {
                if (this.sn) {
                  this.zt(true);
                }
                return void this.tn();
              }
              TS %= this.duration;
            }
            try {
              this.Kt(TS);
            } catch (Tw) {
              throw Error("WebAudio :: seek : ".concat(Tw instanceof Error ? Tw.message : Tw));
            }
            if (this.paused) {
              this.resume();
            }
            this.emit(vQ.SEEK, this);
          }
        };
        Tm.prototype.Kt = function (TS) {
          if (TS < 0x0) {
            throw Error("Time value cannot be smaller than 0.");
          }
          this.zt(true);
          if (this.playing) {
            if (this.Ut && undefined !== this.Ut.applyTime) {
              this.Ut.applyTime = undefined;
              this.Ut.offset = 0x0;
            }
            this.Xt();
            this.Tt = TS;
            this.Jt(undefined, undefined, true);
          } else {
            this.Tt = TS;
          }
        };
        Object.defineProperty(Tm.prototype, "currentTime", {
          'get': function () {
            if (this.Ft !== vb.PLAYING) {
              return this.Tt;
            }
            var TS = Tm.context.currentTime - this.Qt;
            return (TS += this.nn()) % this.Ot;
          },
          'enumerable': false,
          'configurable': true
        });
        Tm.prototype.tn = function () {
          this.Ft = vb.STOPPED;
          this.Tt = 0x0;
          this.Wt();
          if (undefined !== this.Ut) {
            if (0x1 === this.Ut.rate) {
              this.Ut = undefined;
            } else {
              this.Ut.applyTime = undefined;
              this.Ut.offset = 0x0;
            }
          }
          if (this.sn) {
            this.zt(true);
            this.emit(vQ.FADED, this);
          }
          this.emit(vQ.ENDED, this);
        };
        Tm.prototype.an = function () {
          if (this.sn) {
            this.sn = undefined;
            this.emit(vQ.FADED, this);
          }
        };
        Object.defineProperty(Tm.prototype, "duration", {
          'get': function () {
            return this.Ot;
          },
          'enumerable': false,
          'configurable': true
        });
        return Tm;
      }(ga);
      var P6 = /\/index(?:\.[a-z0-9]{3})?\.(?:html|json|js|jsonc)$/;
      var P7 = /\/[A-Za-z0-9._~@-]+\.[a-f0-9]{5}\.[a-z0-9]{2,6}$/;
      var P8 = /^FCGame\/|^FCShared|^FCEntry/;
      var P9 = ["FCGame", "FCShared"];
      var PZ = /^(text|application)\/javascript(;|$)/;
      function PH(Tq, Tm, TS, Tw) {
        if (undefined === Tw) {
          Tw = true;
        }
        return Z3(this, undefined, undefined, function () {
          var TE;
          var Tp;
          var Tj;
          return Z4(this, function (Tk) {
            switch (Tk.label) {
              case 0x0:
                return null == TS || 0xc8 !== TS.status ? [0x2, false] : [0x4, (0x0, new Promise(function (Tg) {
                  setTimeout(Tg, 0x0);
                }))];
              case 0x1:
                Tk.sent();
                TE = Tw ? P9.slice() : undefined;
                Tp = function () {
                  var Tg;
                  var TG;
                  return Z4(this, function (Tb) {
                    switch (Tb.label) {
                      case 0x0:
                        Tb.trys.push([0x0, 0x2,, 0x4]);
                        return [0x4, caches.open(Tq).then(function (TQ) {
                          return TQ.put(Tm, TS);
                        })];
                      case 0x1:
                        Tb.sent();
                        return [0x2, {
                          'value': true
                        }];
                      case 0x2:
                        if (!((Tg = Tb.sent()) instanceof Error) || "QuotaExceededError" !== Tg.name) {
                          throw Tg;
                        }
                        return (TG = null == TE ? undefined : TE[0x0]) ? [0x4, caches.keys().then(function (TQ) {
                          return Promise.all(TQ.map(function (Td) {
                            return Td !== Tq && Td.startsWith(TG) ? caches["delete"](Td) : undefined;
                          }));
                        })] : [0x2, "continue"];
                      case 0x3:
                        Tb.sent();
                        return [0x3, 0x4];
                      case 0x4:
                        return [0x2];
                    }
                  });
                };
                Tk.label = 0x2;
              case 0x2:
                return [0x5, Tp()];
              case 0x3:
                if ("object" == typeof (Tj = Tk.sent())) {
                  return [0x2, Tj.value];
                }
                Tk.label = 0x4;
              case 0x4:
                if (undefined !== (null == TE ? undefined : TE.shift())) {
                  return [0x3, 0x2];
                }
                Tk.label = 0x5;
              case 0x5:
                return [0x2, false];
            }
          });
        });
      }
      var PO = {
        'html': "text/html",
        'css': "text/css",
        'js': "application/javascript",
        'json': "application/json",
        'jsonc': "application/json",
        'txt': "text/plain",
        'plist': "text/plain",
        'atlas': "text/plain",
        'tiff': "image/jpeg",
        'jpeg': "image/jpeg",
        'jpg': "image/jpeg",
        'png': "image/png",
        'gif': "image/gif",
        'mp3': "audio/mpeg",
        'wav': "audio/wav"
      };
      function PC(Tq, Tm) {
        return function () {
          var TS;
          if (P1) {
            return P1;
          }
          var Tw;
          var TE = "serviceWorker" in navigator && undefined !== navigator.serviceWorker && null != navigator.serviceWorker.controller;
          var Tp = "caches" in x && undefined !== x.caches && caches.open("__test")["catch"](function () {});
          var Tj = {
            'un': TE,
            'cn': false,
            'hn': Tw = RegExp("blob:".concat(location.origin, '/').concat("[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}", ':'), 'g'),
            'ln': (null === (TS = null == P2 ? undefined : P2.cacheOrigins) || undefined === TS ? undefined : TS.slice()) || []
          };
          var Tk = null == P2 ? undefined : P2.blobRegistry;
          if (Tk && Tw) {
            Object.assign(Pv, Tk);
          }
          P1 = Promise.resolve(Tp).then(function (Tg) {
            Tj.cn = !!Tg;
            return Tj.un && false ? caches.keys().then(function (TG) {
              return Promise.all(TG.map(function (Tb) {
                return P8.test(Tb) ? caches["delete"](Tb) : undefined;
              }));
            }).then(function () {
              return P0 = Tj;
            }) : P0 = Tj;
          });
          return P1;
        }().then(function (TS) {
          var Tw = function () {
            return x.sign ? function (Tb, TQ) {
              return Z3(this, undefined, undefined, function () {
                var Td;
                var I0;
                return Z4(this, function (I1) {
                  switch (I1.label) {
                    case 0x0:
                      return "string" != typeof Tb ? [0x3, 0x2] : [0x4, r.sign.getSignedUrl(Tb)];
                    case 0x1:
                      Td = I1.sent();
                      return [0x2, new Request(Td, TQ)];
                    case 0x2:
                      return [0x4, r.sign.getSignedUrl(Tb.url)];
                    case 0x3:
                      I0 = I1.sent();
                      return [0x2, new Request(I0, Tb)];
                  }
                });
              });
            }(Tq, Tm).then(function (Tb) {
              return x.fetch(Tb);
            }) : x.fetch(Tq, Tm);
          };
          if (TS.un || !TS.cn) {
            return Tw();
          }
          var TE = new URL("string" == typeof Tq ? Tq : Tq.url, location.href);
          var Tp = TE.origin === location.origin;
          var Tj = Tp || TS.ln.includes(TE.origin);
          var Tk = TE.pathname;
          if ("file:" === TE.protocol) {
            return function (Tb, TQ) {
              return new Promise(function (Td, I0) {
                var I1 = new XMLHttpRequest();
                I1.open("GET", Tb, true);
                I1.onload = function () {
                  var I2;
                  if (TQ) {
                    I2 = {
                      'content-type': TQ
                    };
                  }
                  var I3 = {
                    'status': 0xc8,
                    'headers': I2
                  };
                  var I4 = new Response(I1.response, I3);
                  Td(I4);
                };
                I1.onerror = function () {
                  I0(Error("Local request failed"));
                };
                I1.responseType = "blob";
                if (TQ) {
                  I1.overrideMimeType(TQ);
                }
                I1.send();
              });
            }(TE, function (Tb) {
              var TQ = Tb.lastIndexOf('.');
              var Td = TQ > 0x0 ? Tb.substring(TQ + 0x1) : undefined;
              return Td ? PO[Td] : undefined;
            }(Tk));
          }
          if (!Tp && !Tj) {
            return Tw();
          }
          var Tg = TE.origin + Tk;
          if (P6.test(Tk)) {
            return Tw().then(function (Tb) {
              PH("FCEntry", Tg, Tb.clone(), false)["catch"](function () {});
              return Tb;
            })["catch"](function (Tb) {
              return caches.match(Tg).then(function (TQ) {
                if (TQ) {
                  return TQ;
                }
                throw Tb;
              });
            });
          }
          if (!P7.test(Tk)) {
            return Tw();
          }
          var TG = Tk.startsWith("/shared/") ? "FCShared" : ''.concat("FCGame", '/').concat(Tk.substring(0x1, Tk.indexOf('/', 0x1)));
          return caches.open(TG).then(function (Tb) {
            return Tb.match(Tg).then(function (TQ) {
              return TQ || Tw().then(function (Td) {
                PH(TG, Tg, Td.clone())["catch"](function () {});
                return Td;
              });
            });
          });
        });
      }
      function PL(Tq) {
        return PC(Tq).then(function (Tm) {
          if (!Tm.ok) {
            throw Tm.status;
          }
          return Tm.blob().then(function (TS) {
            var Tw = Tm.headers.get("content-type") || '';
            var TE = PZ.test(Tw);
            var Tp = TE ? Tm.url || new URL(Tq, location.href).href : undefined;
            if (TE && undefined === P0.hn) {
              TS = new Blob([TS, "\n//# sourceURL=".concat(Tp)], {
                'type': Tw
              });
            }
            var Tj = URL.createObjectURL(TS);
            if (TE && undefined !== P0.hn) {
              PP(Tj, Tp);
            }
            return Tj;
          });
        });
      }
      var Px;
      var Pv = Object.create(null);
      function PP(Tq, Tm) {
        if (undefined !== (null == P0 ? undefined : P0.hn)) {
          Pv[Tq] = Tm;
        }
      }
      function PJ(Tq) {
        return delete Pv[Tq];
      }
      function PT(Tq) {
        return Pv[Tq];
      }
      function PI(Tq) {
        var Tm = null == P0 ? undefined : P0.hn;
        return Tq && undefined !== Tm ? Tq.replace(Tm, function (TS) {
          var Tw = Pv[TS.slice(0x0, -0x1)];
          return undefined !== Tw ? Tw + ':' : TS;
        }) : Tq;
      }
      function PV(Tq) {
        return /^CAkQ(xzA|C3z|2Q5)/.test(Tq);
      }
      function PD(Tq) {
        TS = vH(Tq);
        if (Tq !== TS) {
          TS = vZ(TS = atob(TS), "kA7xqJZa");
        }
        return JSON.parse(TS);
        var TS;
      }
      var PM = Object.prototype.hasOwnProperty;
      var PW = String.prototype.trim;
      var Py = function () {};
      var PX = String.prototype.replace;
      var PK = String.prototype.split;
      var PN = function (Tq) {
        var Tm = Tq % 0xa;
        return 0xb !== Tq && 0x1 === Tm ? 0x0 : 0x2 <= Tm && Tm <= 0x4 && !(Tq >= 0xc && Tq <= 0xe) ? 0x1 : 0x2;
      };
      var PU = {
        'arabic': function (Tq) {
          if (Tq < 0x3) {
            return Tq;
          }
          var Tm = Tq % 0x64;
          return Tm >= 0x3 && Tm <= 0xa ? 0x3 : Tm >= 0xb ? 0x4 : 0x5;
        },
        'bosnian_serbian': PN,
        'chinese': function () {
          return 0x0;
        },
        'croatian': PN,
        'french': function (Tq) {
          return Tq > 0x1 ? 0x1 : 0x0;
        },
        'german': function (Tq) {
          return 0x1 !== Tq ? 0x1 : 0x0;
        },
        'russian': PN,
        'lithuanian': function (Tq) {
          return Tq % 0xa == 0x1 && Tq % 0x64 != 0xb ? 0x0 : Tq % 0xa >= 0x2 && Tq % 0xa <= 0x9 && (Tq % 0x64 < 0xb || Tq % 0x64 > 0x13) ? 0x1 : 0x2;
        },
        'czech': function (Tq) {
          return 0x1 === Tq ? 0x0 : Tq >= 0x2 && Tq <= 0x4 ? 0x1 : 0x2;
        },
        'polish': function (Tq) {
          if (0x1 === Tq) {
            return 0x0;
          }
          var Tm = Tq % 0xa;
          return 0x2 <= Tm && Tm <= 0x4 && (Tq % 0x64 < 0xa || Tq % 0x64 >= 0x14) ? 0x1 : 0x2;
        },
        'icelandic': function (Tq) {
          return Tq % 0xa != 0x1 || Tq % 0x64 == 0xb ? 0x1 : 0x0;
        },
        'slovenian': function (Tq) {
          var Tm = Tq % 0x64;
          return 0x1 === Tm ? 0x0 : 0x2 === Tm ? 0x1 : 0x3 === Tm || 0x4 === Tm ? 0x2 : 0x3;
        }
      };
      var PF = function (Tq) {
        var Tm = {};
        for (var TS in Tq) if (PM.call(Tq, TS)) {
          var Tw = Tq[TS];
          for (var TE = 0x0; TE < Tw.length; ++TE) {
            Tm[Tw[TE]] = TS;
          }
        }
        return Tm;
      }({
        'arabic': ['ar'],
        'bosnian_serbian': ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
        'chinese': ['id', "id-ID", 'ja', 'ko', "ko-KR", 'lo', 'ms', 'th', "th-TH", 'zh'],
        'croatian': ['hr', "hr-HR"],
        'german': ['fa', 'da', 'de', 'en', 'es', 'fi', 'el', 'he', "hi-IN", 'hu', "hu-HU", 'it', 'nl', 'no', 'pt', 'sv', 'tr'],
        'french': ['fr', 'tl', "pt-br"],
        'russian': ['ru', "ru-RU"],
        'lithuanian': ['lt'],
        'czech': ['cs', "cs-CZ", 'sk'],
        'polish': ['pl'],
        'icelandic': ['is'],
        'slovenian': ["sl-SL"]
      });
      var Pz = /\$/g;
      var PR = /%\{(.*?)\}/g;
      function PB(Tq, Tm, TS, Tw) {
        if ("string" != typeof Tq) {
          throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
        }
        if (null == Tm) {
          return Tq;
        }
        var TE = Tq;
        var Tp = Tw || PR;
        var Tj = "number" == typeof Tm ? {
          'smart_count': Tm
        } : Tm;
        if (null != Tj.smart_count && TE) {
          var Tk = PK.call(TE, "||||");
          TE = PW.call(Tk[function (Tg, TG) {
            return PU[function (Tb) {
              return PF[Tb] || PF[PK.call(Tb, /-/, 0x1)[0x0]] || PF.en;
            }(Tg)](TG);
          }(TS || 'en', Tj.smart_count)] || Tk[0x0]);
        }
        TE = PX.call(TE, Tp, function (Tg, TG) {
          if (!PM.call(Tj, TG) || null == Tj[TG]) {
            return Tg;
          }
          var Tb = Tj[TG];
          if ("object" == typeof Tb) {
            if (PM.call(Tb, "ordinal")) {
              Tb = function (Td, I0) {
                switch (I0) {
                  case 'en':
                    return Td + ((I1 = ['th', 'st', 'nd', 'rd'])[((I2 = Td % 0x64) - 0x14) % 0xa] || I1[I2] || I1[0x0]);
                  case 'da':
                  case 'de':
                  case 'fi':
                  case 'no':
                  case 'tr':
                    return Td + '.';
                  case 'es':
                  case 'it':
                    return Td + 'ª';
                  case 'fr':
                    return Td + (0x1 === Td ? 're' : 'e');
                  case 'id':
                    return "Ke-" + Td;
                  case 'nl':
                    return Td + 'e';
                  case 'pt':
                    return Td + '.ª';
                  case 'ro':
                    return 0x1 === Td ? Td + '-a' : "A " + Td + '-a';
                  case 'ru':
                    return Td + '-й';
                  case 'sv':
                    var I1;
                    var I2;
                    return Td + ((I1 = ['e', 'a', 'a'])[((I2 = Td % 0x64) - 0x14) % 0xa] || I1[I2] || I1[0x0]);
                  case 'th':
                    return "ที่ " + Td;
                  case 'vi':
                    return "thứ " + Td;
                  case 'zh':
                    return '第' + Td;
                  default:
                    return Td;
                }
              }(Tb.ordinal, TS);
            } else {
              for (var TQ in Tb) if (PM.call(Tb, TQ)) {
                Tb = Tb[TQ];
                break;
              }
            }
          }
          return PX.call(Tb, Pz, '$$');
        });
        return TE;
      }
      function Pq(Tq) {
        var Tm = Tq || {};
        this.phrases = {};
        this.extend(Tm.phrases || {});
        this.currentLocale = Tm.locale || 'en';
        var TS = Tm.allowMissing ? PB : null;
        this.onMissingKey = "function" == typeof Tm.onMissingKey ? Tm.onMissingKey : TS;
        this.warn = Tm.warn || Py;
        this.tokenRegex = function (Tw) {
          var TE = Tw && Tw.prefix || '%{';
          var Tp = Tw && Tw.suffix || '}';
          if (TE === "||||" || Tp === "||||") {
            throw new RangeError("\"||||\" token is reserved for pluralization");
          }
          return RegExp(TE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(.*?)" + Tp.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), 'g');
        }(Tm.interpolation);
      }
      Pq.prototype.locale = function (Tq) {
        if (Tq) {
          this.currentLocale = Tq;
        }
        return this.currentLocale;
      };
      Pq.prototype.extend = function (Tq, Tm) {
        for (var TS in Tq) if (PM.call(Tq, TS)) {
          var Tw = Tq[TS];
          var TE = Tm ? Tm + '.' + TS : TS;
          if ("object" == typeof Tw) {
            this.extend(Tw, TE);
          } else {
            this.phrases[TE] = Tw;
          }
        }
      };
      Pq.prototype.unset = function (Tq, Tm) {
        if ("string" == typeof Tq) {
          delete this.phrases[Tq];
        } else {
          for (var TS in Tq) if (PM.call(Tq, TS)) {
            var Tw = Tq[TS];
            var TE = Tm ? Tm + '.' + TS : TS;
            if ("object" == typeof Tw) {
              this.unset(Tw, TE);
            } else {
              delete this.phrases[TE];
            }
          }
        }
      };
      Pq.prototype.clear = function () {
        this.phrases = {};
      };
      Pq.prototype.replace = function (Tq) {
        this.clear();
        this.extend(Tq);
      };
      Pq.prototype.t = function (Tq, Tm) {
        var TS;
        var Tw;
        var TE = null == Tm ? {} : Tm;
        if ("string" == typeof this.phrases[Tq]) {
          TS = this.phrases[Tq];
        } else if ("string" == typeof TE._) {
          TS = TE._;
        } else if (this.onMissingKey) {
          0x0;
          Tw = this.onMissingKey(Tq, TE, this.currentLocale, this.tokenRegex);
        } else {
          this.warn("Missing translation for key: \"" + Tq + "\"");
          Tw = Tq;
        }
        if ("string" == typeof TS) {
          Tw = PB(TS, TE, this.currentLocale, this.tokenRegex);
        }
        return Tw;
      };
      Pq.prototype.has = function (Tq) {
        return PM.call(this.phrases, Tq);
      };
      Pq.transformPhrase = function (Tq, Tm, TS) {
        return PB(Tq, Tm, TS);
      };
      var Pm = new Pq({
        'warn': function () {}
      });
      var PE = function () {
        var Tq = Pm.locale();
        return ['ar', 'fa', 'ur'].includes(Tq);
      };
      function Pp(Tq) {
        var Tm = {};
        for (var TS in Tq) if (null !== Tq[TS] && "object" == typeof Tq[TS] && Tq.hasOwnProperty(TS)) {
          Tm[TS] = Pp(Tq[TS]);
        } else {
          Tm[TS] = Tq[TS];
        }
        return Tm;
      }
      var Pj;
      var Pk = function () {
        function Tq(Tm, TS, Tw, TE, Tp) {
          if (undefined === Tw) {
            Tw = undefined;
          }
          if (undefined === TE) {
            TE = null;
          }
          if (undefined === Tp) {
            Tp = null;
          }
          this.key = Tm;
          this.value = TS;
          this.bufferInfo = Tw;
          this.next = TE;
          this.prev = Tp;
        }
        Object.defineProperty(Tq.prototype, "memorySize", {
          'get': function () {
            return this.bufferInfo && this.bufferInfo.memorySize;
          },
          'enumerable': false,
          'configurable': true
        });
        return Tq;
      }();
      var Pg = function () {
        function Tq(Tm) {
          if (undefined === Tm) {
            Tm = {
              'arraySize': 0xa
            };
          }
          this.fn = undefined;
          this.dn = undefined;
          this.An = undefined;
          this.vn = undefined;
          this.pn = null;
          this.gn = null;
          this.mn = Object.create(null);
          var TS = Tm.arraySize;
          var Tw = Tm.memorySize;
          this.pn = null;
          this.gn = null;
          this.mn = Object.create(null);
          this.fn = undefined !== TS ? 0x0 : undefined;
          this.dn = undefined !== TS && TS ? TS : undefined;
          this.An = undefined !== Tw ? 0x0 : undefined;
          this.vn = undefined !== Tw && Tw ? Tw : undefined;
        }
        Object.defineProperty(Tq.prototype, "size", {
          'get': function () {
            return Object.keys(this.mn).length;
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tq.prototype, "memory", {
          'get': function () {
            return this.An;
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tq.prototype, "maxSize", {
          'get': function () {
            return this.dn;
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tq.prototype, "maxMemory", {
          'get': function () {
            return this.vn;
          },
          'enumerable': false,
          'configurable': true
        });
        Tq.prototype.oldest = function () {
          return this.gn ? [this.gn.key, this.gn.value] : undefined;
        };
        Tq.prototype.newest = function () {
          return this.pn ? [this.pn.key, this.pn.value] : undefined;
        };
        Tq.prototype.set = function (Tm, TS, Tw) {
          var TE = Tw && Tw.memorySize ? Tw.memorySize : undefined;
          this.bn();
          if (undefined !== TE) {
            this._n(TE);
          }
          if (this.pn) {
            var Tp = new Pk(Tm, TS, Tw, this.pn);
            this.pn.prev = Tp;
            this.pn = Tp;
          } else {
            this.pn = this.gn = new Pk(Tm, TS, Tw);
          }
          var Tj = this.mn[Tm] = this.pn;
          this.wn(0x1);
          if (undefined !== TE) {
            this.xn(Tj.memorySize);
          }
        };
        Tq.prototype.pop = function () {
          if (this.gn) {
            var Tm = this.gn;
            var TS = Tm.key;
            var Tw = Tm.value;
            this.yn(TS);
            return [TS, Tw];
          }
        };
        Tq.prototype.get = function (Tm) {
          if (this.mn[Tm]) {
            var TS = this.mn[Tm];
            var Tw = TS.value;
            var TE = TS.bufferInfo;
            this.yn(Tm);
            this.set(Tm, Tw, TE);
            return Tw;
          }
        };
        Tq.prototype.has = function (Tm) {
          return !!this.mn[Tm];
        };
        Tq.prototype.find = function (Tm) {
          return this.mn[Tm] && this.mn[Tm].value;
        };
        Tq.prototype["delete"] = function (Tm) {
          var TS = this.mn[Tm];
          if (TS) {
            this.yn(Tm);
            return TS.value;
          }
        };
        Tq.prototype.clear = function () {
          this.pn = null;
          this.gn = null;
          this.fn = this.fn && 0x0;
          this.An = this.An && 0x0;
          this.mn = Object.create(null);
        };
        Tq.prototype.keys = function () {
          var Tm = [];
          this.forEach(function (TS) {
            return Tm.push(TS.key);
          });
          return Tm;
        };
        Tq.prototype.values = function () {
          var Tm = [];
          this.forEach(function (TS) {
            return Tm.push(TS.value);
          });
          return Tm;
        };
        Tq.prototype.forEach = function (Tm) {
          var TS = this.pn;
          for (var Tw = 0x0; TS;) {
            Tm({
              'key': TS.key,
              'value': TS.value
            }, Tw);
            TS = TS.next;
            Tw++;
          }
        };
        Tq.prototype.toJSON = function () {
          return Pp(this.mn);
        };
        Tq.prototype.toString = function () {
          return JSON.stringify(this.mn);
        };
        Tq.prototype.yn = function (Tm) {
          var TS = this.mn[Tm];
          var Tw = TS.memorySize;
          if (null !== TS.prev) {
            TS.prev.next = TS.next;
          } else {
            this.pn = TS.next;
          }
          if (null !== TS.next) {
            TS.next.prev = TS.prev;
          } else {
            this.gn = TS.prev;
          }
          delete this.mn[Tm];
          this.wn(-0x1);
          if (undefined !== Tw) {
            this.xn(-Tw);
          }
        };
        Tq.prototype.xn = function (Tm) {
          if (undefined !== this.An && undefined !== Tm) {
            this.An += Tm;
          }
        };
        Tq.prototype.wn = function (Tm) {
          if (undefined !== this.fn && undefined !== Tm) {
            this.fn += Tm;
          }
        };
        Tq.prototype.bn = function () {
          if (undefined !== this.fn && this.fn === this.dn && this.gn) {
            this.yn(this.gn.key);
          }
        };
        Tq.prototype._n = function (Tm) {
          if (undefined !== this.An && undefined !== this.vn && this.An + Tm > this.vn) {
            if (this.gn) {
              this.yn(this.gn.key);
            }
            this._n(Tm);
          }
        };
        return Tq;
      }();
      var PG = function (Tq, Tm) {
        for (var TS in Tm) if ("object" != typeof Tq[TS]) {
          Tq[TS] = Tm[TS];
        } else if ("object" == typeof Tm[TS]) {
          Tq[TS] = PG(Tq[TS], Tm[TS]);
        }
        return Tq;
      };
      var Pb = function () {
        function Tq(Tm, TS, Tw) {
          this.Hn = Object.create(null);
          this.Sn = Object.create(null);
          this.Vn = undefined;
          this.Hn = Tm && PG(Object.create(null), Tm) || Object.create(null);
          this.Vn = TS ? new Pg({
            'arraySize': Tw || 0x5
          }) : undefined;
        }
        Tq.prototype.v = function (Tm) {
          var TS = this.Vn;
          var Tw = TS && TS.get(Tm);
          if (undefined !== Tw) {
            return Tw;
          }
          var TE;
          var Tp = Tm.split('.');
          var Tj = 0x0;
          for (var Tk = Tp.length; Tj < Tk; Tj++) {
            var Tg = Tp[Tj];
            if (undefined === (TE = TE && TE[Tg] || this.Hn[Tg])) {
              if (TS) {
                TS.set(Tm, null);
              }
              return null;
            }
          }
          var TG;
          var Tb = "string" != typeof TE ? TE[0x0] : TE;
          if (RegExp(/^\$\{.*\}/).test(Tb)) {
            return this.v(Tb.substring(Tb.indexOf('{') + 0x1, Tb.lastIndexOf('}')));
          }
          if (!Array.isArray(TE)) {
            throw Error("The key : ".concat(Tm, " does not refer to a final value in this domain!"));
          }
          var TQ = TE.slice(0x1);
          var Td = this.Sn[Tb];
          if (undefined === Td) {
            throw Error("UIAppearance :: v : unable to locate interpreter for <".concat(Tb, '>'));
          }
          TG = Td.interpret(TQ);
          if (TS) {
            TS.set(Tm, TG);
          }
          return TG;
        };
        Tq.prototype.extend = function (Tm) {
          if (this.Vn) {
            this.Vn.clear();
          }
          this.Hn = PG(this.Hn, Tm);
        };
        Tq.prototype.registerInterpreter = function (Tm, TS) {
          if (undefined === this.Sn[Tm]) {
            this.Sn[Tm] = TS;
          }
        };
        Tq.prototype.unregisterInterpreter = function (Tm) {
          var TS = this.Sn[Tm];
          this.Sn[Tm] = undefined;
          return TS || null;
        };
        Object.defineProperty(Tq.prototype, "dataSource", {
          'get': function () {
            return PG(Object.create(null), this.Hn);
          },
          'enumerable': false,
          'configurable': true
        });
        return Tq;
      }();
      var PQ = new Pb(undefined, true);
      var Pd = {
        'black': 0x1,
        'white': 0x2
      };
      (Pj = {
        r5: {
          'browser': 0x2,
          'pc': 0x9,
          'app': -0x1
        },
        r3: {
          'browser': 0x3,
          'pc': -0x1,
          'app': 0x6
        },
        "iOS": {
          'browser': 0x4,
          'pc': -0x1,
          'app': 0x7
        }
      }).Windows = {
        'browser': 0x1,
        'pc': 0x8,
        'app': -0x1
      };
      P3.setContext(function () {
        if (vx.audioSupported) {
          return vx.audioContext;
        }
      });
      var i1;
      var i2 = function () {
        function Tq() {
          this.StatusBarStyle = Pd;
          this.I18n = Pm;
          this.uiAppearance = PQ;
          this.environment = vx;
          this.ResourceQualifier = vW;
          this.deprecated = vR;
          this.WebAudio = P3;
          this.WebAudioEvent = vQ;
          this.WebAudioState = vb;
          this.CustomEventTarget = ga;
          this.fetch = PC;
          this.fetchBlobURL = PL;
          this.registerBlobURL = PP;
          this.unregisterBlobURL = PJ;
          this.translateLocation = PI;
          this.revealBlobURL = PT;
          this.isValidAssets = PV;
          this.parseAssets = PD;
        }
        Tq.prototype.getEnvironment = function () {
          return vx.getPlatform();
        };
        Tq.prototype.getOSName = function () {
          return vx.getOSName();
        };
        Tq.prototype.getGameContext = function () {
          return Px;
        };
        Tq.prototype.getBrowserBaseType = function () {
          return vx.getBrowserBaseType();
        };
        Tq.prototype.getBrowserBaseVersion = function () {
          return vx.getBrowserBaseVersion();
        };
        Tq.prototype.isRTLLanguage = function () {
          return PE();
        };
        Tq.prototype.getVersionName = function () {
          return this.getVersionNameHander ? this.getVersionNameHander() : undefined;
        };
        Tq.prototype.setStatusBarStyle = function (Tm) {
          if (this.setStatusBarStyleHandler) {
            this.setStatusBarStyleHandler(Tm);
          }
        };
        Tq.prototype.setStatusBarHidden = function (Tm) {
          if (this.setStatusBarHiddenHandler) {
            this.setStatusBarHiddenHandler(Tm);
          }
        };
        Tq.prototype.requestGameStart = function (Tm, TS) {
          if (this.requestGameStartHandler) {
            this.requestGameStartHandler(Tm, TS);
          }
        };
        Tq.prototype.setProgressMessage = function (Tm) {
          if (this.setProgressMessageHandler) {
            this.setProgressMessageHandler(Tm);
          }
        };
        Tq.prototype.setProgress = function (Tm, TS) {
          if (this.setProgressHandler) {
            this.setProgressHandler(Tm, TS);
          }
        };
        Tq.prototype.setProgressVisible = function (Tm) {
          if (this.setProgressVisibleHandler) {
            this.setProgressVisibleHandler(Tm);
          }
        };
        Tq.prototype.showAlert = function (Tm) {
          if (this.showAlertHandler) {
            this.showAlertHandler(Tm);
          }
        };
        Object.defineProperty(Tq.prototype, "location", {
          'get': function () {
            return v6 || r.location;
          },
          'enumerable': false,
          'configurable': true
        });
        Tq.prototype.enablePromBeforeUnload = function (Tm) {
          this.context.event.emit("Shell.EnableUnloadAlert", Tm);
        };
        Object.defineProperty(Tq.prototype, "urlSearch", {
          'get': function () {
            return vx.getURLSearchParam();
          },
          'enumerable': false,
          'configurable': true
        });
        Tq.prototype.enableCanvasTouchPropagation = function (Tm) {
          if (this.enableCanvasTouchPropagationHandler) {
            this.enableCanvasTouchPropagationHandler(Tm);
          }
        };
        Tq.prototype.addPreloadPlugin = function (Tm, TS, Tw) {
          if (this.addPreloadPluginHandler) {
            this.addPreloadPluginHandler(Tm, TS, Tw);
          }
        };
        Tq.prototype.loadPlugin = function (Tm, TS) {
          if (this.loadPluginHandler) {
            this.loadPluginHandler(Tm, TS);
          }
        };
        Tq.prototype.getPlatform = function () {
          var Tm = vx.getOSName();
          var TS = this.getEnvironment();
          var Tw = "browser" === TS ? 0x5 : -0x1;
          return Pj[Tm] && Pj[Tm][TS] ? Pj[Tm][TS] : Tw;
        };
        Tq.prototype.getGameInfo = function () {
          var Tm;
          var TS = rA.Identifier;
          if (TS) {
            Tm = TS.split('.').slice(0x0, 0x2).join('.');
          }
          return {
            'name': rA.Name,
            'version': rA.Version.split('/')[0x0],
            'index': rA.Index,
            'identifier': TS,
            'organizationIdentifier': Tm
          };
        };
        Tq.prototype.wasmTest = function () {
          return Promise.resolve([0x0, 0x0, 0x0]);
        };
        return Tq;
      }();
      var i3 = r.shell = new i2();
      var i5 = function (Tq, Tm) {
        var TS = Tq.indexOf(r.String.fromCharCode(Tm));
        return -0x1 !== TS ? Tq.substring(TS + 0x1) : Tq;
      };
      function i6(Tq, Tm) {
        return function () {
          var TS = r[i5("+shell", r.Number("0x002b"))];
          var Tw = i5("npMath", r.Number("0x0070"));
          var TE = i5("qAsetTimeout", r.Number("0x0041"));
          var Tp = (0x2 + 0x3 * r[Tw].random()) * r.Number("0x03E8");
          var Tj = function () {
            r[TE](Tq, Tp);
          };
          (r.opusAudio = r.opusAudio || new TS.CustomEventTarget())[function () {
            var Tg = '';
            var TG = 0x0;
            for (var Tb = [0x6f, 0x6e]; TG < Tb.length; TG++) {
              var TQ = Tb[TG];
              Tg += r.String.fromCharCode(TQ);
            }
            return Tg;
          }()](Tm, Tj);
          var Tk = r.audioPool;
          if (Tk && Tk.has(Tm)) {
            Tj();
          }
        };
      }
      i6(function () {
        var Tq;
        var Tm = null === (Tq = r[r.eval("\"cc\"")]) || undefined === Tq ? undefined : Tq.renderer;
        if (Tm) {
          Tm.render = Function('', '');
        }
      }, "enable")();
      i6(function () {
        var Tq;
        var Tm;
        var TS;
        !function (TE) {
          TE.a = "_compScheduler";
        }(TS || (TS = {}));
        var Tw = null === (Tm = null === (Tq = r[r.eval("\"cc\"")]) || undefined === Tq ? undefined : Tq.director) || undefined === Tm ? undefined : Tm[TS.a];
        if (Tw) {
          Tw.startInvoker = Object.create(null);
        }
      }, "enable")();
      i6(function () {
        var Tq;
        var Tm;
        var TS = null === (Tm = null === (Tq = r[r.eval("\"cc\"")]) || undefined === Tq ? undefined : Tq.internal) || undefined === Tm ? undefined : Tm.eventManager;
        if (TS) {
          TS.dispatchEvent = Function('', '');
        }
      }, "disable")();
      i6(function () {
        var Tq;
        var Tm;
        var TS = null === (Tm = null === (Tq = r.sp) || undefined === Tq ? undefined : Tq.Skeleton) || undefined === Tm ? undefined : Tm.prototype;
        if (TS) {
          TS.markForRender = function () {
            var Tw;
            var TE;
            var Tp = null === (TE = null === (Tw = r[r.eval("\"cc\"")]) || undefined === Tw ? undefined : Tw.Sprite) || undefined === TE ? undefined : TE.prototype;
            if (Tp) {
              Function('e', "e._validateRender=e.disableRender")(Tp);
            }
          };
        }
      }, "start")();
      i6(function () {
        var Tq;
        var Tm = null === (Tq = r[r.eval("\"cc\"")]) || undefined === Tq ? undefined : Tq.director;
        if (Tm) {
          Tm.getActionManager = Function('', "return this._manager");
        }
      }, "disable")();
      var i7 = r.gtag;
      var i8 = function () {
        function Tq() {
          this.kn = undefined;
        }
        Tq.prototype.setUserId = function (Tm) {
          i7("set", {
            'user_id': Tm
          });
        };
        Tq.prototype.setTitle = function (Tm) {
          i7("set", {
            'page_title': Tm
          });
        };
        Tq.prototype.sendEvent = function (Tm, TS, Tw) {
          var TE = [];
          for (var Tp = 0x3; Tp < arguments.length; Tp++) {
            TE[Tp - 0x3] = arguments[Tp];
          }
          if ('' !== TS) {
            switch (typeof Tw) {
              case "number":
                Tw = {
                  'value': Tw
                };
                break;
              case "string":
                TE.unshift(Tw);
                Tw = undefined;
                break;
              case "object":
              case "undefined":
                break;
              default:
                Tw = undefined;
            }
            var Tj;
            if (undefined !== (null == Tw ? undefined : Tw.value)) {
              Tj = Tw.value;
              Tw.value = undefined;
            }
            TE.push(this.En(Tw));
            var Tk;
            var Tg = this.Cn(TE);
            var TG = Tg.join('|');
            if (TG) {
              Tk = TG;
            }
            var Tb = {
              'event_category': Tm,
              'event_label': Tk
            };
            if (undefined !== Tj) {
              Tb.value = Tj;
            }
            i7("event", TS, Tb);
          }
        };
        Tq.prototype.sendScreen = function (Tm) {
          if (Tm) {
            i7("event", "screen_view", {
              'screen_name': Tm
            });
          }
          this.setCurrentScreen(Tm);
        };
        Tq.prototype.getCurrentScreen = function () {
          return this.kn;
        };
        Tq.prototype.setCurrentScreen = function (Tm) {
          if (Tm) {
            i7("set", {
              'screen_name': Tm
            });
          }
          this.kn = Tm;
        };
        Tq.prototype.sendTiming = function (Tm, TS, Tw) {
          var TE = [];
          for (var Tp = 0x3; Tp < arguments.length; Tp++) {
            TE[Tp - 0x3] = arguments[Tp];
          }
          if ('' !== TS) {
            if (undefined === TE) {
              TE = [];
            }
            var Tj;
            var Tk = this.Cn(TE);
            var Tg = Tk.join('|');
            if (Tg) {
              Tj = Tg;
            }
            i7("event", "timing_complete", {
              'name': TS,
              'value': Tw,
              'event_category': Tm,
              'event_label': Tj
            });
          }
        };
        Tq.prototype.sendException = function (Tm) {
          i7("event", "exception", {
            'description': Tm,
            'fatal': false
          });
        };
        Tq.prototype.raw = function () {
          i7.apply(null, arguments);
        };
        Tq.prototype.setFrequentErrorHandler = function (Tm) {
          r.onGAFrequentError = Tm;
        };
        Tq.prototype.En = function (Tm) {
          var TS = [];
          for (var Tw in Tm) if (Object.prototype.hasOwnProperty.call(Tm, Tw)) {
            var TE = Tm[Tw];
            if (undefined !== TE) {
              TS.push(''.concat(Tw, '=').concat(TE));
            }
          }
          return TS.join('&');
        };
        Tq.prototype.Cn = function (Tm) {
          return Tm.filter(function (TS) {
            return undefined !== TS && ('' + TS).length > 0x0;
          });
        };
        return Tq;
      }();
      var i9 = i8.prototype;
      i9.CATEGORY_ACCESS = "access";
      i9.CATEGORY_GAME = "game";
      i9.CATEGORY_FREE_GAME = "free_game";
      i9.CATEGORY_GENERAL = "general";
      i9.CATEGORY_QUERY = "query";
      i9.CATEGORY_SPLASH_VIDEO = '';
      i9.SCREEN_LAUNCH = '';
      i9.SCREEN_LOGIN = '';
      i9.SCREEN_GAME = '';
      i9.SCREEN_WALLET = '';
      i9.SCREEN_BET_SETTING = '';
      i9.SCREEN_SETTINGS = '';
      i9.SCREEN_PAY_TABLE = '';
      i9.SCREEN_GAME_RULE = '';
      i9.SCREEN_HISTORY_DETAIL = '';
      i9.SCREEN_HISTORY_CALENDAR = '';
      i9.EVENT_LOGIN = '';
      i9.EVENT_READ_INFO = '';
      i9.EVENT_RETRY = '';
      i9.EVENT_HISTORY_CHANGE_DAYS = '';
      i9.EVENT_QUIT_GAME = '';
      i9.EVENT_ERROR_REPORT = "fault";
      i9.EVENT_CHANGE_SETTING = '';
      i9.SCREEN_SLOT_AUTO_SPIN = '';
      i9.SCREEN_SLOT_FREE_GAME = '';
      i9.SCREEN_SLOT_DAILY_JACKPOT = '';
      i9.SCREEN_SLOT_DRAGON_JACKPOT = '';
      i9.EVENT_SLOT_START_SPIN = '';
      i9.EVENT_SLOT_STOP_SPIN = '';
      i9.EVENT_SLOT_AUTO_SPIN = '';
      i9.EVENT_SLOT_CHANGE_BET = '';
      i9.EVENT_SLOT_MAX_BET = '';
      i9.EVENT_SLOT_SKIP_EFFECT = '';
      i9.EVENT_SLOT_PICK_FREE_GAME = '';
      i9.EVENT_SLOT_DROP_FREE_GAME = '';
      i9.EVENT_SLOT_HISTORY_SWIPE_PAGE = '';
      i9.EVENT_SLOT_HISTORY_SELECT_PAGE = '';
      i9.EVENT_SLOT_DAILY_JACKPOT_SWIPE = '';
      i9.EVENT_SLOT_DRAGON_JACKPOT_CLICK_COIN = '';
      i9.EVENT_SLOT_CHANGE_INGOT_BET = '';
      i9.SCREEN_CARD_ROADMAP = '';
      i9.SCREEN_CARD_SELECT_LIMIT = '';
      i9.SCREEN_CARD_JACKPOT_PAY_TABLE = '';
      i9.EVENT_CARD_DEAL = '';
      i9.EVENT_CARD_FLIP = '';
      i9.EVENT_CARD_PEEK = '';
      i9.EVENT_CARD_ANTE = '';
      i9.EVENT_CARD_RAISE = '';
      i9.EVENT_CARD_FOLD = '';
      i9.EVENT_CARD_HIT = '';
      i9.EVENT_CARD_DOUBLE = '';
      i9.EVENT_CARD_SPLIT = '';
      i9.EVENT_CARD_STAND = '';
      i9.EVENT_CARD_BUY_INSURANCE = '';
      i9.EVENT_CARD_CANCEL_INSURANCE = '';
      i9.EVENT_CARD_BUY_JACKPOT = '';
      i9.EVENT_CARD_CANCEL_JACKPOT = '';
      i9.EVENT_CARD_CHANGE_CHIP = '';
      i9.EVENT_CARD_CHANGE_VALUE = '';
      i9.EVENT_CARD_CHANGE_BET = '';
      i9.EVENT_CARD_CHANGE_LIMIT = '';
      i9.EVENT_CARD_SKIP_EFFECT = '';
      i9.EVENT_SPLASH_FINISH = '';
      var iZ = function (Tq, Tm) {
        this.bundleInfo = Tq;
        this.manager = Tm;
      };
      var iH = function (Tq) {
        function Tm(TS, Tw, TE, Tp, Tj, Tk, Tg, TG) {
          var Tb = Tq.call(this, TS, Tw) || this;
          Tb.component = TE;
          Tb.event = Tp;
          Tb.plugin = Tj;
          Tb.view = Tk;
          Tb.cocos = Tg;
          Tb.resource = TG;
          return Tb;
        }
        Z1(Tm, Tq);
        Tm.prototype.createBundle = function (TS) {
          return this.manager.createBundle(TS);
        };
        Tm.prototype.destroyBundle = function (TS) {
          return this.manager.destroyBundle(TS);
        };
        Tm.prototype.getContext = function (TS) {
          return this.manager.getContext(TS);
        };
        Tm.prototype.queryBundle = function (TS) {
          return this.manager.queryBundle(TS);
        };
        Tm.prototype.destroy = function () {
          this.manager.destroyBundle(this.bundleInfo);
        };
        return Tm;
      }(iZ);
      var iO = undefined;
      var iC = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.create = function (TS, Tw) {
          return this.manager.create(TS, Tw || this.bundleInfo);
        };
        Tm.prototype.getInstance = function (TS) {
          return this.manager.getInstance(TS);
        };
        Tm.prototype.updateState = function (TS, Tw) {
          this.manager.updateState(TS, Tw, this.bundleInfo);
        };
        Tm.prototype.destroy = function (TS) {
          this.manager.destroy(TS, this.bundleInfo);
        };
        return Tm;
      }(iZ);
      var iL = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.on = function (TS, Tw, TE, Tp) {
          this.manager.on(TS, Tw, TE, Tp, this.bundleInfo);
        };
        Tm.prototype.once = function (TS, Tw, TE, Tp) {
          this.manager.once(TS, Tw, TE, Tp, this.bundleInfo);
        };
        Tm.prototype.off = function (TS, Tw, TE) {
          this.manager.off(TS, Tw, TE);
        };
        Tm.prototype.emit = function (TS, Tw, TE) {
          this.manager.emit(TS, Tw, TE, this.bundleInfo);
        };
        Tm.prototype.hasListeners = function (TS) {
          return this.manager.hasListeners(TS);
        };
        return Tm;
      }(iZ);
      var iv = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.load = function (TS, Tw) {
          var TE = {};
          if (Array.isArray(TS)) {
            for (var Tp = 0x0; Tp < TS.length; Tp++) {
              var Tk = {
                'name': TS[Tp],
                'rawUrl': TS[Tp],
                'baseUrl': ''.concat(rA.SharedPath).concat(TS[Tp])
              };
              if (Tk) {
                TE[Tk.name] = Tk;
              }
            }
          } else {
            TE = TS;
          }
          this.manager.load(TE, Tw);
        };
        return Tm;
      }(iZ);
      var iP = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.register = function (TS, Tw) {
          this.manager.register(TS, Tw);
        };
        Tm.prototype.append = function (TS, Tw, TE) {
          this.manager.append(TS, Tw, TE);
        };
        Tm.prototype.appendTo = function (TS, Tw) {
          this.manager.appendTo(TS, Tw);
        };
        Tm.prototype.removeFromParent = function (TS) {
          this.manager.removeFromParent(TS);
        };
        Tm.prototype.show = function (TS) {
          this.manager.show(TS);
        };
        Tm.prototype.hide = function (TS) {
          this.manager.hide(TS);
        };
        Tm.prototype.getContainerElement = function (TS, Tw) {
          return this.manager.getContainerElement(TS, Tw);
        };
        Tm.prototype.getRootElement = function (TS) {
          return this.manager.getRootElement(TS);
        };
        Tm.prototype.enableUIBlock = function (TS) {
          TS.__$enableUIBlock = true;
        };
        Tm.prototype.setUIBlockConfig = function (TS, Tw) {
          for (var TE in Tw) if (undefined !== Tw[TE]) {
            TS["__$".concat(TE)] = Tw[TE];
          }
        };
        return Tm;
      }(iZ);
      var iJ = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.setCocosBundleVers = function (TS) {
          this.manager.bundleVers = TS;
        };
        Tm.prototype.loadBundle = function (TS, Tw, TE) {
          this.manager.loadBundle(TS, Tw, TE);
        };
        Tm.prototype.getURL = function (TS) {
          return this.manager.getURL(TS, this.bundleInfo);
        };
        Tm.prototype.hasEntry = function (TS) {
          return this.manager.hasEntry(TS);
        };
        Tm.prototype.resolveBundleName = function (TS) {
          return this.manager.resolveBundleName(TS, this.bundleInfo);
        };
        return Tm;
      }(iZ);
      var iT = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.setQualifierConfig = function (TS, Tw) {
          if (Array.isArray(TS)) {
            this.manager.setQualifierConfig(TS, this.bundleInfo);
          } else {
            this.manager.setQualifierConfig(TS, Tw, this.bundleInfo);
          }
        };
        Tm.prototype.addAssets = function (TS, Tw) {
          this.manager.addAssets(TS, this.bundleInfo, Tw);
        };
        Tm.prototype.resolveUrl = function (TS, Tw) {
          return this.manager.resolveUrl(TS, this.bundleInfo, Tw);
        };
        Tm.prototype.hasEntry = function (TS) {
          return this.manager.hasEntry(TS, this.bundleInfo);
        };
        return Tm;
      }(iZ);
      var iI = {
        'bundle': undefined,
        'component': undefined,
        'event': undefined,
        'plugin': undefined,
        'view': undefined,
        'resource': undefined,
        'cocos': undefined,
        'createContext': function (Tq) {
          if (!(this.bundle && this.component && this.event && this.plugin && this.view && this.resource && this.cocos)) {
            throw Error("Create bundle context error");
          }
          return new iH(Tq, this.bundle, new iC(Tq, this.component), new iL(Tq, this.event), new iv(Tq, this.plugin), new iP(Tq, this.view), new iJ(Tq, this.cocos), new iT(Tq, this.resource));
        }
      };
      var iV = function () {
        function Tq() {
          this.cls = this.constructor;
          this.ref = this.cls;
          this.state = {};
        }
        Tq.prototype.onInstantiate = function (Tm) {
          this.context = Tm;
          this.event = Tm.event;
          this.component = Tm.component;
          this.plugin = Tm.plugin;
          this.view = Tm.view;
          this.cocos = Tm.cocos;
          this.resource = Tm.resource;
        };
        return Tq;
      }();
      var iD = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.on = function (TS, Tw, TE) {
          this.event.on(TS, Tw, this, TE);
        };
        Tm.prototype.once = function (TS, Tw, TE) {
          this.event.once(TS, Tw, this, TE);
        };
        Tm.prototype.off = function (TS, Tw) {
          this.event.off(TS, Tw, this);
        };
        Tm.prototype.emit = function (TS, Tw, TE) {
          this.event.emit(TS, Tw, TE);
        };
        return Tm;
      }(iV);
      var iM = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        return Tm;
      }(iD);
      var iA = {
        'Domain': 0x4,
        'LoadAppCacheError': 0x3e8,
        'LoadResourceError': 0x3ea,
        'SettingsUndefinedError': 0x3eb,
        'CCUndefinedError': 0x3ec,
        'CacheManifestError': 0x3ed,
        'GameBootError': 0x3ee,
        'EngineScriptError': 0x3ef,
        'PluginScriptError': 0x3f0,
        'WatchDogError': 0x3f1,
        'WebGLError': 0x3f2,
        'ResourceVersionError': 0x3f3,
        'ResourceFailureDateTime': 0x3f4,
        'CrossSiteScriptingError': 0x3f5,
        'PluginReactRenderError': 0x3f6,
        'getMessageKey': function (Tq) {
          switch (Tq) {
            case 0x3e8:
              return "LoadAppCacheErrorMessage";
            case 0x3ea:
            case 0x3ee:
            case 0x3ef:
              return "LoadProjectFailedErrorMessage";
            case 0x3f0:
            case 0x3f6:
            case 0x3f1:
            case 0x3f5:
              return "ErrorAndReload";
            case 0x3eb:
              return "SettingsUndefinedErrorMessage";
            case 0x3ec:
              return "CCUndefinedErrorMessage";
            case 0x3ed:
              return "CacheManifestErrorMessage";
            case 0x3f2:
              return "WebGLErrorMessage";
            case 0x3f3:
              return "ResourceVersionErrorMessage";
            case 0x3f4:
              return "ResourceFailureDateTimeMessage";
            default:
              return '';
          }
        },
        'canReload': function (Tq) {
          return !isNaN(+Tq);
        },
        'canDismiss': function (Tq) {
          var Tm = +Tq;
          if (isNaN(Tm)) {
            return false;
          }
          switch (Tm) {
            case 0x3f1:
            case 0x3f6:
              return true;
            default:
              return false;
          }
        }
      };
      !function () {
        var Tm;
        var TS = "undefined" != typeof Symbol;
        var Tw = "undefined" != typeof document;
        var TE = undefined !== x ? x : ZH;
        if (Tw) {
          var Tp = document.querySelector("base[href]");
          if (Tp) {
            Tm = Tp.href;
          }
        }
        if (!Tm && "undefined" != typeof location) {
          var Tj = (Tm = location.href.split('#')[0x0].split('?')[0x0]).lastIndexOf('/');
          if (-0x1 !== Tj) {
            Tm = Tm.slice(0x0, Tj + 0x1);
          }
        }
        var Tk = /\\/g;
        function Tg(IV, ID) {
          if (-0x1 !== IV.indexOf("\\")) {
            IV = IV.replace(Tk, '/');
          }
          if ('/' === IV[0x0] && '/' === IV[0x1]) {
            return ID.slice(0x0, ID.indexOf(':') + 0x1) + IV;
          }
          if ('.' === IV[0x0] && ('/' === IV[0x1] || '.' === IV[0x1] && ('/' === IV[0x2] || 0x2 === IV.length && (IV += '/')) || 0x1 === IV.length && (IV += '/')) || '/' === IV[0x0]) {
            var IM;
            var IA = ID.slice(0x0, ID.indexOf(':') + 0x1);
            IM = '/' === ID[IA.length + 0x1] ? "file:" !== IA ? (IM = ID.slice(IA.length + 0x2)).slice(IM.indexOf('/') + 0x1) : ID.slice(0x8) : ID.slice(IA.length + ('/' === ID[IA.length]));
            if ('/' === IV[0x0]) {
              return ID.slice(0x0, ID.length - IM.length - 0x1) + IV;
            }
            var IW = IM.slice(0x0, IM.lastIndexOf('/') + 0x1) + IV;
            var Iy = [];
            var IX = -0x1;
            for (var IK = 0x0; IK < IW.length; IK++) {
              if (-0x1 !== IX) {
                if ('/' === IW[IK]) {
                  Iy.push(IW.slice(IX, IK + 0x1));
                  IX = -0x1;
                }
              } else if ('.' === IW[IK]) {
                if ('.' !== IW[IK + 0x1] || '/' !== IW[IK + 0x2] && IK + 0x2 !== IW.length) {
                  if ('/' === IW[IK + 0x1] || IK + 0x1 === IW.length) {
                    IK += 0x1;
                  } else {
                    IX = IK;
                  }
                } else {
                  Iy.pop();
                  IK += 0x2;
                }
              } else {
                IX = IK;
              }
            }
            if (-0x1 !== IX) {
              Iy.push(IW.slice(IX));
            }
            return ID.slice(0x0, ID.length - IM.length) + Iy.join('');
          }
        }
        function TG(IV, ID) {
          for (var IM in ID) IV[IM] = ID[IM];
          return IV;
        }
        function Tb(IV, ID, IM, IA, IW) {
          for (var Iy in IV) {
            var IX = Tg(Iy, IM) || Iy;
            var IK = IV[Iy];
            if ("string" == typeof IK) {
              var If = I0(IA, Tg(IK, IM) || IK, IW);
              if (If) {
                ID[IX] = If;
              }
            }
          }
        }
        function TQ(IV, ID) {
          if (ID[IV]) {
            return IV;
          }
          var IM = IV.length;
          do {
            var IA = IV.slice(0x0, IM + 0x1);
            if (IA in ID) {
              return IA;
            }
          } while (-0x1 !== (IM = IV.lastIndexOf('/', IM - 0x1)));
        }
        function Td(IV, ID) {
          var IM = TQ(IV, ID);
          if (IM) {
            var IA = ID[IM];
            if (null === IA) {
              return;
            }
            if (!(IV.length > IM.length && '/' !== IA[IA.length - 0x1])) {
              return IA + IV.slice(IM.length);
            }
          }
        }
        function I0(IV, ID, IM) {
          var IA = IV.scopes;
          for (var IW = IM && TQ(IM, IA); IW;) {
            var Iy = Td(ID, IA[IW]);
            if (Iy) {
              return Iy;
            }
            IW = TQ(IW.slice(0x0, IW.lastIndexOf('/')), IA);
          }
          return Td(ID, IV.imports) || -0x1 !== ID.indexOf(':') && ID;
        }
        var I1 = TS && Symbol.toStringTag;
        var I2 = TS ? Symbol() : '@';
        var I3 = TS ? Symbol() : '@';
        function I4() {
          this[I2] = {};
        }
        var I5;
        var I6 = I4.prototype;
        function I7(IV) {
          return IV.id;
        }
        function I8(IV, ID, IM, IA) {
          IV.onload(IM, ID.id, ID.d && ID.d.map(I7), !!IA);
          if (IM) {
            throw IM;
          }
        }
        function I9(IV, ID, IM) {
          var IA = IV[I2][ID];
          if (IA) {
            return IA;
          }
          var IW = [];
          var Iy = Object.create(null);
          if (I1) {
            Object.defineProperty(Iy, I1, {
              'value': "Module"
            });
          }
          var IX = Promise.resolve().then(function () {
            return IV.instantiate(ID, IM);
          }).then(function (If) {
            if (!If) {
              throw Error(("Module " + ID + " did not instantiate" || '') + " (" + 0x2 + ')');
            }
            var IN = If[0x1](function (IU, IF) {
              IA.h = true;
              var IY = false;
              if ("object" != typeof IU) {
                if (!(IU in Iy && Iy[IU] === IF)) {
                  Iy[IU] = IF;
                  IY = true;
                }
              } else {
                for (var Iz in IU) {
                  IF = IU[Iz];
                  if (!(Iz in Iy && Iy[Iz] === IF)) {
                    Iy[Iz] = IF;
                    IY = true;
                  }
                }
                if (IU.__esModule) {
                  Iy.__esModule = IU.__esModule;
                }
              }
              if (IY) {
                for (var IR = 0x0; IR < IW.length; IR++) {
                  var IB = IW[IR];
                  if (IB) {
                    IB(Iy);
                  }
                }
              }
              return IF;
            }, 0x2 === If[0x1].length ? {
              'import': function (IU) {
                return IV["import"](IU, ID);
              },
              'meta': IV.createContext(ID)
            } : undefined);
            IA.e = IN.execute || function () {};
            return [If[0x0], IN.setters || []];
          });
          var IK = (IX = IX["catch"](function (If) {
            I8(IV, IA, If, true);
          })).then(function (If) {
            return Promise.all(If[0x0].map(function (IN, IU) {
              var IF = If[0x1][IU];
              return Promise.resolve(IV.resolve(IN, ID)).then(function (IY) {
                var Iz = I9(IV, IY, ID);
                return Promise.resolve(Iz.I).then(function () {
                  if (IF) {
                    IF[I3] = IU;
                    Iz.i.push(IF);
                    if (!(!Iz.h && Iz.I)) {
                      IF(Iz.n);
                    }
                  }
                  return Iz;
                });
              });
            })).then(function (IN) {
              IA.d = IN;
            }, function (IN) {
              I8(IV, IA, IN, false);
            });
          });
          IK["catch"](function (If) {
            IA.e = null;
            IA.er = If;
          });
          return IA = IV[I2][ID] = {
            'id': ID,
            'i': IW,
            'n': Iy,
            'I': IX,
            'L': IK,
            'h': false,
            'd': undefined,
            'e': undefined,
            'er': undefined,
            'E': undefined,
            'C': undefined
          };
        }
        function IZ(IV, ID, IM) {
          if (!IM[ID.id]) {
            IM[ID.id] = true;
            return Promise.resolve(ID.L).then(function () {
              return Promise.all(ID.d.map(function (IA) {
                return IZ(IV, IA, IM);
              }));
            });
          }
        }
        I6["import"] = function (IV, ID) {
          var IM = this;
          return Promise.resolve(IM.prepareImport()).then(function () {
            return IM.resolve(IV, ID);
          }).then(function (IA) {
            var IW = I9(IM, IA);
            return IW.C || function (Iy, IX) {
              return IX.C = IZ(Iy, IX, {}).then(function () {
                return IO(Iy, IX, {});
              }).then(function () {
                return IX.n;
              });
            }(IM, IW);
          });
        };
        I6.createContext = function (IV) {
          return {
            'url': IV
          };
        };
        I6.onload = function () {};
        I6.register = function (IV, ID) {
          I5 = [IV, ID];
        };
        I6.getRegister = function () {
          var IV = I5;
          I5 = undefined;
          return IV;
        };
        var IH = Object.freeze(Object.create(null));
        function IO(IV, ID, IM) {
          if (!IM[ID.id]) {
            IM[ID.id] = true;
            if (!ID.e) {
              if (ID.er) {
                throw ID.er;
              }
              return ID.E ? ID.E : undefined;
            }
            var IA;
            ID.d.forEach(function (Iy) {
              try {
                var IX = IO(IV, Iy, IM);
                if (IX) {
                  (IA = IA || []).push(IX);
                }
              } catch (IK) {
                ID.e = null;
                ID.er = IK;
                I8(IV, ID, IK, false);
              }
            });
            return IA ? Promise.all(IA).then(IW, function (Iy) {
              ID.e = null;
              ID.er = Iy;
              I8(IV, ID, Iy, false);
            }) : IW();
          }
          function IW() {
            try {
              var Iy = ID.e.call(IH);
              if (Iy) {
                Iy = Iy.then(function () {
                  ID.C = ID.n;
                  ID.E = null;
                  I8(IV, ID, null, true);
                }, function (IX) {
                  ID.er = IX;
                  ID.E = null;
                  I8(IV, ID, IX, true);
                });
                return ID.E = ID.E || Iy;
              }
              ID.C = ID.n;
              I8(IV, ID, null, true);
            } catch (IX) {
              ID.er = IX;
              I8(IV, ID, IX, true);
            } finally {
              ID.L = ID.I = undefined;
              ID.e = null;
            }
          }
        }
        TE.System = new I4();
        var IC;
        var IL;
        var Ix = TS ? Symbol() : '#';
        var Iv = TS ? Symbol() : '$';
        function IP(IV, ID) {
          if (Tw) {
            Array.prototype.forEach.call(document.querySelectorAll("script[type=\"systemjs-importmap\"]" + ID), IV);
          }
        }
        IP(function (IV) {
          IV._t = fetch(IV.src).then(function (ID) {
            return ID.text();
          });
        }, "[src]");
        I6.prepareImport = function () {
          var IV = this;
          if (!IV[Iv]) {
            IV[Ix] = {
              'imports': {},
              'scopes': {}
            };
            IV[Iv] = Promise.resolve();
            IP(function (ID) {
              IV[Iv] = IV[Iv].then(function () {
                return (ID._t || ID.src && fetch(ID.src).then(function (IM) {
                  return IM.text();
                }) || Promise.resolve(ID.innerHTML)).then(function (IM) {
                  try {
                    return JSON.parse(IM);
                  } catch (IA) {
                    throw Error(("systemjs-importmap contains invalid JSON" || '') + " (" + 0x1 + ')');
                  }
                }).then(function (IM) {
                  IV[Ix] = function (IA, IW, Iy) {
                    var IX;
                    var IK;
                    var If = {
                      'imports': TG({}, Iy.imports),
                      'scopes': TG({}, Iy.scopes)
                    };
                    if (IA.imports) {
                      Tb(IA.imports, If.imports, IW, Iy, null);
                    }
                    if (IA.scopes) {
                      for (var IN in IA.scopes) {
                        var IU = Tg(IX = IN, IK = IW) || (-0x1 !== IX.indexOf(':') ? IX : Tg('./' + IX, IK));
                        Tb(IA.scopes[IN], If.scopes[IU] || (If.scopes[IU] = {}), IW, Iy, IU);
                      }
                    }
                    return If;
                  }(IM, ID.src || Tm, IV[Ix]);
                });
              });
            }, '');
          }
          return IV[Iv];
        };
        I6.resolve = function (IV, ID) {
          ID = ID || Tm;
          return I0(this[Ix], Tg(IV, ID) || IV, ID) || function (IM, IA) {
            throw Error(("Unable to resolve bare specifier '" + IM + (IA ? "' from " + IA : "'") || '') + " (" + 0x8 + ')');
          }(IV, ID);
        };
        I6.resolveUrl = function (IV, ID) {
          return Tg(IV, ID || Tm) || IV;
        };
        if (Tw) {
          r.addEventListener("error", function (IV) {
            IC = IV.filename;
            IL = IV.error;
          });
          var IJ = location.origin;
        }
        I6.createScript = function (IV) {
          var ID = document.createElement("script");
          ID.async = true;
          if (IV.indexOf(IJ + '/')) {
            ID.crossOrigin = "anonymous";
          }
          ID.src = IV;
          return ID;
        };
        I6.instantiate = function (IV, ID) {
          var IM = this;
          var IA = I6.createScript(IV);
          return IA instanceof Promise ? IA.then(function (Iy) {
            IA = Iy;
            return new Promise(IW);
          }) : new Promise(IW);
          function IW(Iy, IX) {
            IA.addEventListener("error", function () {
              document.head.removeChild(IA);
              IX(Error(("Error loading " + IV + (ID ? " from " + ID : '') || '') + " (" + 0x3 + ')'));
            });
            IA.addEventListener("load", function () {
              document.head.removeChild(IA);
              if (IC === IA.src) {
                IX(IL);
              } else {
                Iy(IM.getRegister());
              }
            });
            document.head.appendChild(IA);
          }
        };
        (function (IV) {
          var ID;
          var IM;
          var IA;
          var IW = IV.System.constructor.prototype;
          var Iy = IW["import"];
          IW["import"] = function (IU, IF) {
            (function () {
              ID = IM = undefined;
              for (var IY in IV) if (!(!IV.hasOwnProperty(IY) || !isNaN(IY) && IY < IV.length || If && IV[IU] && undefined !== r && IV[IU].parent === r)) {
                if (ID) {
                  if (!IM) {
                    IM = IY;
                  }
                } else {
                  ID = IY;
                }
                IA = IY;
              }
            })();
            return Iy.call(this, IU, IF);
          };
          var IX = [[], function () {
            return {};
          }];
          var IK = IW.getRegister;
          IW.getRegister = function () {
            var IU = IK.call(this);
            if (IU) {
              return IU;
            }
            var IF;
            var IY = function () {
              var Iz;
              var IR = 0x0;
              for (var IB in IV) if (!(!IV.hasOwnProperty(IB) || !isNaN(IB) && IB < IV.length || If && IV[IU] && undefined !== r && IV[IU].parent === r)) {
                if (0x0 === IR && IB !== ID || 0x1 === IR && IB !== IM) {
                  return IB;
                }
                IR++;
                Iz = IB;
              }
              if (Iz !== IA) {
                return Iz;
              }
            }();
            if (!IY) {
              return IX;
            }
            try {
              IF = IV[IY];
            } catch (Iz) {
              return IX;
            }
            return [[], function (IR) {
              return {
                'execute': function () {
                  IR({
                    'default': IF,
                    '__useDefault': true
                  });
                }
              };
            }];
          };
          var If = "undefined" != typeof navigator && -0x1 !== navigator.userAgent.indexOf("Trident");
        })(undefined !== x ? x : ZH);
        (function (IV) {
          var ID = IV.System.constructor.prototype;
          var IM = ID.instantiate;
          var IA = /\.(css|json|wasm)$/;
          ID.shouldFetch = function (IW) {
            var Iy = IW.split('?')[0x0].split('#')[0x0];
            return Iy.slice(Iy.lastIndexOf('.')).match(IA);
          };
          ID.fetch = function (IW) {
            return fetch(IW);
          };
          ID.instantiate = function (IW, Iy) {
            return this.shouldFetch(IW) ? this.fetch(IW).then(function (IX) {
              if (!IX.ok) {
                throw Error(("Error loading: " + IX.status + " " + IX.statusText + ", loading " + IW + (Iy ? " from " + Iy : '') || '') + " (" + 0x7 + ')');
              }
              var IK = IX.headers.get("content-type");
              if (!IK) {
                throw Error(("Error loading: Missing header \"Content-Type\", loading " + IW + (Iy ? " from " + Iy : '') || '') + " (" + 0x4 + ')');
              }
              if (IK.match(/^application\/json(;|$)/)) {
                return IX.json().then(function (If) {
                  return [[], function (IN) {
                    return {
                      'execute': function () {
                        IN("default", If);
                      }
                    };
                  }];
                }, function (If) {
                  throw Error(("Content error: Error \"" + If + "\", loading " + IW + ", from " + Iy || '') + " (" + 0x3 + ')');
                });
              }
              if (IK.match(/^text\/css(;|$)/)) {
                return IX.text().then(function (If) {
                  return [[], function (IN) {
                    return {
                      'execute': function () {
                        var IU = new CSSStyleSheet();
                        IU.replaceSync(If);
                        IN("default", IU);
                      }
                    };
                  }];
                }, function (If) {
                  throw Error(("Content error: Error \"" + If + "\", loading " + IW + ", from " + Iy || '') + " (" + 0x3 + ')');
                });
              }
              if (IK.match(/^application\/wasm(;|$)/)) {
                return (WebAssembly.compileStreaming ? WebAssembly.compileStreaming(IX) : IX.arrayBuffer().then(WebAssembly.compile)).then(function (If) {
                  var IN = [];
                  var IU = [];
                  var IF = {};
                  if (WebAssembly.Module.imports) {
                    WebAssembly.Module.imports(If).forEach(function (IY) {
                      var Iz = IY.module;
                      if (-0x1 === IN.indexOf(Iz)) {
                        IN.push(Iz);
                        IU.push(function (IR) {
                          IF[Iz] = IR;
                        });
                      }
                    });
                  }
                  return [IN, function (IY) {
                    return {
                      'setters': IU,
                      'execute': function () {
                        return WebAssembly.instantiate(If, IF).then(function (Iz) {
                          IY(Iz.exports);
                        });
                      }
                    };
                  }];
                }, function (If) {
                  throw Error(("Content error: Error \"" + If + "\", loading " + IW + ", from " + Iy || '') + " (" + 0x3 + ')');
                });
              }
              throw Error(("Error loading: Unknown module type \"" + IK + "\", loading " + IW + ", from " + Iy || '') + " (" + 0x4 + ')');
            }, function (IX) {
              throw Error(("Error loading: Error \"" + IX + "\", loading " + IW + ", from " + Iy || '') + " (" + 0x3 + ')');
            }) : IM.apply(this, arguments);
          };
        })(undefined !== x ? x : ZH);
        var IT = "undefined" != typeof Symbol && Symbol.toStringTag;
        I6.get = function (IV) {
          var ID = this[I2][IV];
          if (ID && null === ID.e && !ID.E) {
            return ID.er ? null : ID.n;
          }
        };
        I6.set = function (IV, ID) {
          try {
            new URL(IV);
          } catch (Iy) {}
          var IM;
          if (IT && "Module" === ID[IT]) {
            IM = ID;
          } else {
            IM = Object.assign(Object.create(null), ID);
            if (IT) {
              Object.defineProperty(IM, IT, {
                'value': "Module"
              });
            }
          }
          var IA = Promise.resolve(IM);
          var IW = this[I2][IV] || (this[I2][IV] = {
            'id': IV,
            'i': [],
            'h': false,
            'd': [],
            'e': null,
            'er': undefined,
            'E': undefined
          });
          return !IW.e && !IW.E && (Object.assign(IW, {
            'n': IM,
            'I': undefined,
            'L': undefined,
            'C': IA
          }), IM);
        };
        I6.has = function (IV) {
          return !!this[I2][IV];
        };
        I6["delete"] = function (IV) {
          var ID = this[I2];
          var IM = ID[IV];
          if (!IM || null !== IM.e || IM.E) {
            return false;
          }
          var IA = IM.i.splice(0x0);
          if (IM.er) {
            IM.C = Promise.reject(IM.er);
          }
          if (IM.d) {
            IM.d.forEach(function (IW, Iy) {
              IW.i.some(function (IX, IK) {
                if (IX[I3] === Iy) {
                  IW.i.splice(IK, 0x1);
                  return true;
                }
              });
            });
          }
          delete ID[IV];
          return function () {
            var IW = ID[IV];
            if (!IW || !IA || null !== IW.e || IW.E) {
              return false;
            }
            IA.forEach(function (Iy) {
              IW.i.push(Iy);
              Iy(IW.n);
            });
            IA = null;
          };
        };
        var II = "undefined" != typeof Symbol && Symbol.iterator;
        I6.entries = function () {
          var IV;
          var ID;
          var IM = this;
          var IA = Object.keys(IM[I2]);
          var IW = 0x0;
          var Iy = {
            'next': function () {
              for (; undefined !== (ID = IA[IW++]) && undefined === (IV = IM.get(ID));) {
                ;
              }
              return {
                'done': undefined === ID,
                'value': undefined !== ID && [ID, IV]
              };
            }
          };
          Iy[II] = function () {
            return this;
          };
          return Iy;
        };
      }();
      var iW = new (function () {
        function Tq() {
          this.Mn = Object.create(null);
        }
        Tq.prototype.getMeta = function () {
          return this.Mn;
        };
        Tq.prototype.setMeta = function (Tm, TS) {
          if (!this.Mn[Tm]) {
            this.Mn[Tm] = TS;
          }
        };
        Tq.prototype.removeMeta = function (Tm) {
          delete this.Mn[Tm];
        };
        return Tq;
      }())();
      var iy = {};
      var iX = {
        get 'exports'() {
          return iy;
        },
        set 'exports'(Tq) {
          iy = Tq;
        }
      };
      function iK(Tq, Tm) {
        return Tm.split('||').map(function (TS) {
          return TS.trim();
        }).some(function (TS) {
          return TS.split(" ").every(function (Tw) {
            var TE = 0x0;
            if ('<' === Tw[0x0] || '>' === Tw[0x0]) {
              TE = 0x1;
              if ('=' === Tw[0x1]) {
                TE++;
              }
            } else if ('=' === Tw[0x0]) {
              TE = 0x1;
            }
            var Tp = Tw.substring(0x0, TE) || '=';
            var Tj = Tw.substring(TE);
            return iy.compare(Tq, Tj, Tp);
          });
        });
      }
      !function (Tq) {
        Tq.exports = function () {
          var Tm = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
          function TS(Tg) {
            var TG;
            var TQ = Tg.replace(/^v/, '').replace(/\+.*$/, '');
            '-';
            var Td = -0x1 === (TG = TQ).indexOf('-') ? TG.length : TG.indexOf('-');
            var I0 = TQ.substring(0x0, Td).split('.');
            I0.push(TQ.substring(Td + 0x1));
            return I0;
          }
          function Tw(Tg) {
            return isNaN(+Tg) ? Tg : +Tg;
          }
          function TE(Tg) {
            if ("string" != typeof Tg) {
              throw new TypeError("Invalid argument expected string");
            }
            if (!Tm.test(Tg)) {
              throw Error("Invalid argument not valid semver ('" + Tg + "' received)");
            }
          }
          function Tp(Tg, TG) {
            [Tg, TG].forEach(TE);
            var Tb = TS(Tg);
            var TQ = TS(TG);
            for (var Td = 0x0; Td < Math.max(Tb.length - 0x1, TQ.length - 0x1); Td++) {
              var I0 = parseInt(Tb[Td] || 0x0, 0xa);
              var I1 = parseInt(TQ[Td] || 0x0, 0xa);
              if (I0 > I1) {
                return 0x1;
              }
              if (I1 > I0) {
                return -0x1;
              }
            }
            var I2 = Tb[Tb.length - 0x1];
            var I3 = TQ[TQ.length - 0x1];
            if (I2 && I3) {
              var I4 = I2.split('.').map(Tw);
              var I5 = I3.split('.').map(Tw);
              for (Td = 0x0; Td < Math.max(I4.length, I5.length); Td++) {
                if (undefined === I4[Td] || "string" == typeof I5[Td] && "number" == typeof I4[Td]) {
                  return -0x1;
                }
                if (undefined === I5[Td] || "string" == typeof I4[Td] && "number" == typeof I5[Td]) {
                  return 0x1;
                }
                if (I4[Td] > I5[Td]) {
                  return 0x1;
                }
                if (I5[Td] > I4[Td]) {
                  return -0x1;
                }
              }
            } else if (I2 || I3) {
              return I2 ? -0x1 : 0x1;
            }
            return 0x0;
          }
          var Tj = ['>', '>=', '=', '<', '<='];
          var Tk = {
            '>': [0x1],
            '>=': [0x0, 0x1],
            '=': [0x0],
            '<=': [-0x1, 0x0],
            '<': [-0x1]
          };
          Tp.validate = function (Tg) {
            return "string" == typeof Tg && Tm.test(Tg);
          };
          Tp.compare = function (Tg, TG, Tb) {
            !function (Td) {
              if ("string" != typeof Td) {
                throw new TypeError("Invalid operator type, expected string but got " + typeof Td);
              }
              if (-0x1 === Tj.indexOf(Td)) {
                throw new TypeError("Invalid operator, expected one of " + Tj.join('|'));
              }
            }(Tb);
            var TQ = Tp(Tg, TG);
            return Tk[Tb].indexOf(TQ) > -0x1;
          };
          return Tp;
        }();
      }(iX);
      var iN;
      var iU = System.constructor.prototype;
      var iF = System.constructor;
      var iY = [];
      function iz(Tq) {
        Tq.registerRegistry = Object.create(null);
      }
      iz(System);
      var iR = function () {
        iF.call(this);
        iz(this);
      };
      iR.prototype = iU;
      System.constructor = iR;
      var iB = iU.register;
      iU.register = function (Tq, Tm, TS) {
        if ("string" != typeof Tq) {
          return iB.apply(this, arguments);
        }
        var Tw = [Tm, TS];
        this.registerRegistry[Tq] = Tw;
        iN = Tw;
        Promise.resolve().then(function () {
          iN = null;
        })["catch"](function () {});
        return iB.apply(this, arguments);
      };
      var iq = iU.resolve;
      function im(Tq) {
        var Tm = Tq.name;
        var TS = rA.PluginDependencies;
        if (TS && TS[Tm]) {
          var Tw = TS[Tm];
          var TE = Tq.version;
          if (!iK(TE, Tw)) {
            var Tp = "Incompatible plugin version. Game required plugin ".concat(Tm, " version is conflict\ncurrent version: ").concat(TE, " : expected: ").concat(Tw);
            throw Error(Tp);
          }
        }
      }
      iU.resolve = function (Tq, Tm) {
        try {
          return iq.call(this, Tq, Tm);
        } catch (TS) {
          if (Tq in this.registerRegistry) {
            return Tq;
          }
          throw TS;
        }
      };
      var iS = iU.instantiate;
      iU.instantiate = function (Tq, Tm) {
        var TS = this.registerRegistry[Tq];
        var Tw = iW.getMeta();
        var TE = 0x0;
        for (var Tp = Object.entries(Tw); TE < Tp.length; TE++) {
          var Tj = Tp[TE];
          var Tk = Tj[0x0];
          var Tg = Tj[0x1];
          if (!iY.includes(Tk)) {
            im(Tg);
            var TG = Tg.dependencies;
            var Tb = true;
            for (var TQ in TG) {
              var Td = Tw[TQ];
              var I0 = TG[TQ];
              if (!Td) {
                Tb = false;
                break;
              }
              if (!iK(Td.version, I0)) {
                throw Error("Incompatible plugin version: ".concat(Td.name, " load ").concat(TQ, " ").concat(Td.version, ", expected: ").concat(I0));
              }
            }
            if (Tb) {
              iY.push(Tk);
            }
          }
        }
        return TS ? (this.registerRegistry[Tq] = null, TS) : iS.call(this, Tq, Tm);
      };
      var iw = iU.getRegister;
      iU.getRegister = function () {
        var Tq = iw.call(this) || iN;
        iN = null;
        return Tq;
      };
      var iE = new (function () {
        function Tq() {
          this.pluginRegistries = Object.create(null);
        }
        Tq.prototype.setPluginRegistry = function (Tm, TS) {
          if (!this.pluginRegistries[Tm]) {
            this.pluginRegistries[Tm] = TS;
          }
        };
        Tq.prototype.getPluginRegistry = function (Tm) {
          return this.pluginRegistries[Tm];
        };
        Tq.prototype.getPluginRegistries = function () {
          return Object.assign({}, this.pluginRegistries);
        };
        Tq.prototype.removePluginRegistry = function (Tm) {
          delete this.pluginRegistries[Tm];
        };
        return Tq;
      }())();
      var ip = /\\/g;
      var ij = function () {
        var Tq = [];
        for (var Tm = 0x0; Tm < arguments.length; Tm++) {
          Tq[Tm] = arguments[Tm];
        }
        var TS = '';
        var Tw = 0x0;
        for (var TE = Tq.length; Tw < TE; ++Tw) {
          var Tp = Tq[Tw];
          if (Tp) {
            if (TS.length > 0x0) {
              var Tj = TS[TS.length - 0x1];
              if ('/' !== Tj && !Tp.startsWith('/')) {
                TS += '/';
              }
            }
            TS += Tp;
          }
        }
        return TS;
      };
      var ib = function (Tq, Tm) {
        if (Tq.includes("\\")) {
          Tq = Tq.replace(ip, '/');
        }
        if (Tq.startsWith('/') && '/' === Tq[0x1]) {
          return Tm.slice(0x0, Tm.indexOf(':') + 0x1) + Tq;
        }
        if ('.' === Tq[0x0] && ('/' === Tq[0x1] || '.' === Tq[0x1] && ('/' === Tq[0x2] || 0x2 === Tq.length && (Tq += '/')) || 0x1 === Tq.length && (Tq += '/')) || '/' === Tq[0x0]) {
          var TS = Tm.slice(0x0, Tm.indexOf(':') + 0x1);
          var Tw = undefined;
          Tw = '/' === Tm[TS.length + 0x1] ? "file:" !== TS ? (Tw = Tm.slice(TS.length + 0x2)).slice(Tw.indexOf('/') + 0x1) : Tm.slice(0x8) : Tm.slice(TS.length + +('/' === Tm[TS.length]));
          if (Tq.startsWith('/')) {
            return Tm.slice(0x0, Tm.length - Tw.length - 0x1) + Tq;
          }
          var TE = Tw.slice(0x0, Tw.lastIndexOf('/') + 0x1) + Tq;
          var Tp = [];
          var Tj = -0x1;
          for (var Tk = 0x0; Tk < TE.length; Tk++) {
            if (-0x1 !== Tj) {
              if ('/' === TE[Tk]) {
                Tp.push(TE.slice(Tj, Tk + 0x1));
                Tj = -0x1;
              }
            } else if ('.' === TE[Tk]) {
              if ('.' !== TE[Tk + 0x1] || '/' !== TE[Tk + 0x2] && Tk + 0x2 !== TE.length) {
                if ('/' === TE[Tk + 0x1] || Tk + 0x1 === TE.length) {
                  Tk += 0x1;
                } else {
                  Tj = Tk;
                }
              } else {
                Tp.pop();
                Tk += 0x2;
              }
            } else {
              Tj = Tk;
            }
          }
          if (-0x1 !== Tj) {
            Tp.push(TE.slice(Tj));
          }
          return Tm.slice(0x0, Tm.length - Tw.length) + Tp.join('');
        }
      };
      var iQ = function (Tq) {
        if (/^[a-z0-9A-Z-_]+:/.test(Tq)) {
          if (Tq.startsWith("javascript:")) {
            return;
          }
        } else {
          if (!Tq.startsWith('//')) {
            Tq = '//' + Tq;
          }
          Tq = r.location.protocol + Tq;
        }
        return Tq;
      };
      var id = function (Tq) {
        var Tm = Tq.split('//').pop() || Tq;
        return Tq.replace(Tm, Tm.substring(0x0, Tm.lastIndexOf('/')));
      };
      var J1 = System.constructor.prototype;
      var J3;
      var J4 = J1.resolve;
      J1.resolve = function (Tq, Tm) {
        try {
          return J4.call(this, Tq, Tm);
        } catch (TG) {
          var TS = function (Tb) {
            var TQ = iE.getPluginRegistry(Tb);
            if (!TQ) {
              var Td = ''.concat(Tb, "/index.js");
              TQ = {
                'name': Tb,
                'rawUrl': Tb,
                'url': './' + Td,
                'noPrefixUrlPath': Td,
                'parentUrl': rA.SharedPath
              };
              iE.setPluginRegistry(Tb, TQ);
            }
            return TQ;
          }(Tq);
          !function (Tb) {
            var TQ = rA.SharedPath;
            if (TQ.startsWith("../") && Tb.parentUrl === TQ) {
              Tb.parentUrl = undefined;
            }
          }(TS);
          var Tw = iW.getMeta()[Tq];
          if (Tw && Tw.entry) {
            var TE = Tw.entry;
            var Tp = Tw.name;
            var Tj = ib(TE, ''.concat(Tp, '/'));
            var Tk = TS.parentUrl ? TS.parentUrl + Tj : rA.SharedPath + Tj;
            if (!Tk) {
              throw Error("Resolved url error: ".concat(Tk));
            }
            return J4.call(this, Tk, TS.parentUrl);
          }
          if (!TS.url) {
            throw Error("Registry url error: ".concat(TS.url));
          }
          var Tg = TS.parentUrl ? TS.parentUrl + TS.noPrefixUrlPath : TS.url;
          return J4.call(this, Tg, TS.parentUrl);
        }
      };
      (function (Tq) {
        Tq[Tq.LoadingError = 0x1] = "LoadingError";
        Tq[Tq.ScriptError = 0x2] = "ScriptError";
        Tq[Tq.VersionError = 0x3] = "VersionError";
      })(J3 || (J3 = {}));
      var J5 = Object.getOwnPropertySymbols || undefined;
      var J6 = J5 && J5(System)[0x0] || '@';
      var J7 = function () {
        function Tq() {
          this.errorItems = [];
        }
        Tq.prototype.getAbsoluteUrl = function (Tm) {
          var TS = iE.getPluginRegistry(Tm);
          if (!TS) {
            return Tm;
          }
          var Tw = TS.entry ? TS.entry : TS.noPrefixUrlPath;
          var TE = TS.absoluteUrl;
          if (!TE) {
            var Tp = this.getRawEntries();
            for (var Tj in Tp) if (Tj.includes(Tw)) {
              TE = TS.absoluteUrl = Tj;
              break;
            }
          }
          return TE || '';
        };
        Tq.prototype.getRawEntries = function () {
          return Object.assign({}, System[J6]);
        };
        Tq.prototype.forceDelete = function (Tm) {
          var TS = iE.getPluginRegistry(Tm);
          var Tw = this.getRawEntries();
          if (TS) {
            var TE = this.getAbsoluteUrl(Tm);
            var Tp = Tw[TE].d;
            var Tj = (null == Tp ? undefined : Tp.length) && Tp[Tp.length - 0x1].id;
            if (Tj) {
              this.removeRawEntry(Tj);
            }
            this.removeRawEntry(TE);
            iE.removePluginRegistry(Tm);
          } else {
            this.removeRawEntry(Tm);
          }
        };
        Tq.prototype.getDeps = function (Tm) {
          var TS = [];
          var Tw = this.getRawEntries()[Tm];
          if (Tw && Tw.d) {
            TS.push.apply(TS, Tw.d);
          }
          return TS;
        };
        Tq.prototype.cleanErrorModule = function () {
          var Tm = this.getRawEntries();
          for (var TS in Tm) {
            var Tw = Tm[TS];
            if (Tw.er) {
              System["delete"](Tw.id);
            }
          }
        };
        Tq.prototype.addErrorItem = function (Tm) {
          this.errorItems.push(Tm);
        };
        Tq.prototype.getErrorItems = function () {
          return this.errorItems.slice();
        };
        Tq.prototype.cleanErrorItems = function () {
          this.errorItems.length = 0x0;
        };
        Tq.prototype.removeRawEntry = function (Tm) {
          delete System[J6][Tm];
        };
        return Tq;
      }();
      var J8 = new J7();
      var J9 = System.constructor.prototype;
      J9.onload = function (Tq, Tm) {
        if (Tq) {
          var TS = Tq.message.startsWith("Error loading");
          J8.addErrorItem({
            'src': Tm,
            'type': TS ? J3.LoadingError : J3.ScriptError,
            'error': Tq
          });
        }
      };
      var JZ = J9.get;
      J9.get = function (Tq) {
        return JZ.call(this, J8.getAbsoluteUrl(Tq));
      };
      var JH;
      var JO = J9.createScript;
      J9.createScript = function (Tq) {
        var Tm = this;
        return PL(Tq).then(function (TS) {
          var Tw = JO.call(Tm, TS);
          if (!(Tw instanceof HTMLScriptElement)) {
            throw Error("Unexpected script element");
          }
          function TE(Tp) {
            URL.revokeObjectURL(TS);
            if ("error" === Tp.type) {
              delete Pv[Tq];
            }
          }
          Tw.addEventListener("error", TE);
          Tw.addEventListener("load", TE);
          return Tw;
        })["catch"](function () {
          throw Error("Error loading ".concat(Tq));
        });
      };
      J9.fetch = PC;
      (function (Tq) {
        Tq[Tq.Blob = 0x0] = "Blob";
        Tq[Tq.Image = 0x1] = "Image";
        Tq[Tq.Script = 0x2] = "Script";
        Tq[Tq.Style = 0x3] = "Style";
        Tq[Tq.Json = 0x4] = "Json";
        Tq[Tq.SystemScript = 0x5] = "SystemScript";
        Tq[Tq.Text = 0x6] = "Text";
        Tq[Tq.ArrayBuffer = 0x7] = "ArrayBuffer";
      })(JH || (JH = {}));
      var JC = {
        'css': JH.Style,
        'js': JH.SystemScript,
        'png': JH.Image,
        'jpg': JH.Image,
        'json': JH.Json,
        'mp3': JH.ArrayBuffer
      };
      var JL = function () {
        function Tq() {
          this.Bn = 0x0;
          this.jn = false;
          this.onPreload = undefined;
          this.onRetry = undefined;
          this.onLoad = undefined;
        }
        Tq.prototype.load = function (Tm) {
          if (Tm && 0x0 !== Tm.length) {
            this.Bn = Tm.length;
            for (var TS = 0x0; TS < Tm.length; TS++) {
              var TE = Tm[TS];
              var Tp = undefined;
              if ("string" == typeof TE) {
                Tp = {
                  'src': TE,
                  'type': this.Gn(TE)
                };
              } else {
                if (!TE.src) {
                  --this.Bn;
                  continue;
                }
                if (undefined === (Tp = TE).type) {
                  TE.type = this.Gn(TE.src);
                }
              }
              this.Pn(Tp);
            }
          } else if (this.onComplete) {
            this.onComplete();
          }
        };
        Tq.prototype.Pn = function (Tm) {
          var TS = this;
          Tq.context.event.emit("Shell.PWDReset");
          var Tw = Tm.retry = Tm.retry || 0x0;
          if (Tw > (undefined === Tm.maxAttemptCount ? Tq.Zn : Tm.maxAttemptCount)) {
            if (Tm.optional) {
              this.Rn(Tm);
            } else if (this.onError) {
              this.onError(Tm);
            }
          } else if (0x0 === Tw) {
            if (this.onPreload) {
              this.onPreload(Tm);
            }
            this.On(Tm);
          } else {
            setTimeout(function () {
              if (TS.onRetry) {
                TS.onRetry(Tm);
              }
              if (false === Tm.shouldRetry) {
                TS.Rn(Tm);
              } else {
                TS.On(Tm);
              }
            }, 0x3e8 * (0x1 << Tw));
          }
        };
        Tq.prototype.On = function (Tm) {
          if (Tm.type === JH.Script) {
            this.Dn(Tm);
          } else if (Tm.type === JH.SystemScript) {
            this.Nn(Tm);
          } else if (Tm.type === JH.Style) {
            this.Qn(Tm);
          } else if (Tm.type === JH.Image) {
            this.Tn(Tm);
          } else {
            this.Ln(Tm);
          }
        };
        Tq.prototype.Ln = function (Tm) {
          var TS = this;
          PC(Tm.src).then(function (Tw) {
            if (!Tw.ok) {
              throw Tw.status;
            }
            switch (Tm.type) {
              case JH.Json:
                return Tw.json();
              case JH.Blob:
                return Tw.blob();
              case JH.ArrayBuffer:
                return Tw.arrayBuffer();
              default:
                return Tw.text();
            }
          }).then(function (Tw) {
            Tm.response = Tw;
            TS.Rn(Tm);
          })["catch"](function (Tw) {
            if ("number" == typeof Tw) {
              Tm.errCode = Tw;
            }
            TS.In(Tm);
          });
        };
        Tq.prototype.Nn = function (Tm) {
          var TS = this;
          System["import"](Tm.src).then(function (Tw) {
            Tm.response = Tw;
            TS.Rn(Tm);
          })["catch"](function (Tw) {
            if (Tw.message.startsWith("Incompatible plugin version")) {
              if (TS.jn) {
                return;
              }
              TS.jn = true;
              Tq.context.event.emit("Shell.PWDDisabled");
              Tq.context.event.emit("Error.Occurred", {
                'context': "Preload",
                'info': {
                  'category': "game_shell",
                  'domain': 0x4,
                  'code': 0x3f3,
                  'error': Tw
                },
                'report': true
              }, function () {
                Tq.context.event.emit("Window.Reload");
              });
            } else {
              TS.Fn(Tw, Tm);
            }
          });
        };
        Tq.prototype.Fn = function (Tm, TS) {
          var Tw = J8.getErrorItems();
          J8.cleanErrorItems();
          J8.cleanErrorModule();
          if (0x0 !== Tw.length) {
            var TE = Tw.map(function (Tk) {
              return Tk.src;
            }).join(',') || TS.src;
            var Tp = Tw[0x0].type === J3.ScriptError ? 0x3f0 : 0x3ea;
            if (Tp === 0x3f0) {
              Tq.context.event.emit("Shell.PWDDisabled");
              Tq.context.event.emit("Error.SendExceptionReport", Tm);
              TS.errCode = Tp;
              TS.err = Tm;
              if (this.onError) {
                this.onError(TS);
              }
              this.onComplete = undefined;
              this.onError = undefined;
              this.onRetry = undefined;
              this.onLoad = undefined;
            } else {
              var Tj = TS.retry || 0x0;
              this.Wn(TE, Tj, Tp);
              TS.errCode = Tp;
              TS.err = "load resource fail";
              TS.retry = Tj + 0x1;
              this.Pn(TS);
            }
          }
        };
        Tq.prototype.zn = function (Tm) {
          return function (TS) {
            return new Promise(function (Tw, TE) {
              var Tp = document.createElement(Tm);
              Tp.onload = function () {
                URL.revokeObjectURL(TS);
                if (Tp instanceof HTMLScriptElement) {
                  Tp.parentElement.removeChild(Tp);
                }
                Tw(Tp);
              };
              Tp.onerror = function () {
                var Tj;
                URL.revokeObjectURL(TS);
                delete Pv[Tq];
                if (!(null === (Tj = Tp.parentElement) || undefined === Tj)) {
                  Tj.removeChild(Tp);
                }
                TE("onerror");
              };
              if (Tp instanceof HTMLScriptElement) {
                Tp.async = true;
                Tp.src = TS;
                document.head.appendChild(Tp);
              } else if (Tp instanceof HTMLImageElement) {
                Tp.src = TS;
              } else if (Tp instanceof HTMLLinkElement) {
                Tp.rel = "stylesheet";
                Tp.type = "text/css";
                Tp.href = TS;
                document.head.appendChild(Tp);
              } else {
                TE("unknown");
              }
            });
          };
        };
        Tq.prototype.Un = function (Tm, TS) {
          var Tw = this;
          PL(Tm.src).then(this.zn(TS)).then(function (TE) {
            Tm.response = TE;
            Tw.Rn(Tm);
          })["catch"](function (TE) {
            if ("number" == typeof TE) {
              Tm.errCode = TE;
            }
            Tw.In(Tm);
          });
        };
        Tq.prototype.Dn = function (Tm) {
          this.Un(Tm, "script");
        };
        Tq.prototype.Tn = function (Tm) {
          this.Un(Tm, "img");
        };
        Tq.prototype.Qn = function (Tm) {
          this.Un(Tm, "link");
        };
        Tq.prototype.Rn = function (Tm) {
          if (this.onLoad) {
            this.onLoad(Tm);
          }
          --this.Bn;
          if (0x0 === this.Bn && this.onComplete) {
            this.onComplete();
          }
        };
        Tq.prototype.In = function (Tm) {
          var TS = Tm.retry || 0x0;
          this.Wn(Tm.src, TS, 0x3ea);
          Tm.retry = TS + 0x1;
          this.Pn(Tm);
        };
        Tq.prototype.Gn = function (Tm) {
          return JC[Tm.split('?')[0x0].substring(Tm.lastIndexOf('.') + 0x1)] || JH.Blob;
        };
        Tq.prototype.Wn = function (Tm, TS, Tw) {
          Tq.context.event.emit("Shell.PWDDisabled");
          var TE = "src: " + Tm.split('?')[0x0];
          Tq.context.event.emit("Error.Report", {
            'category': "game_shell",
            'error': "load resource fail",
            'domain': 0x4,
            'code': Tw,
            'retry': TS,
            'messages': TE
          });
        };
        Tq.Zn = 0x5;
        return Tq;
      }();
      var Jx = {};
      var Jv = function (Tq, Tm, TS) {
        var Tw = TS && TS.delayComplete || false;
        var TE = {
          'mainComponent': Tm,
          'delayComplete': Tw
        };
        Jx[Tq] = TE;
        if (Tw) {
          return function (Tp) {
            if (TE.completeCallback) {
              TE.completeCallback(Tp);
            }
          };
        }
      };
      function JP(Tq) {
        return function (Tm) {
          Tm.prototype.complete = Jv(Tq, Tm, {
            'delayComplete': true
          });
        };
      }
      var JJ = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onDestroy = function () {
          if (this.root && cc.isValid(this.root)) {
            this.root.removeFromParent(true);
          }
        };
        return Tm;
      }(iV);
      function JT(Tq) {
        return function (Tm) {
          Tm.prototype.complete = Jv(Tq, Tm, {
            'delayComplete': true
          });
        };
      }
      var Jy = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        return Tm;
      }(iV);
      var JX = function () {
        function Tq() {}
        Tq.prototype.getClassInfo = function (Tm) {
          var TS = Tm._$cInfo;
          if (TS && TS.componentCls !== Tm) {
            TS = Tm._$cInfo = undefined;
          }
          return TS;
        };
        Tq.prototype.getProperty = function (Tm) {
          if (Tm && Tm._$prop) {
            return Tm._$prop;
          }
        };
        Tq.prototype.getComponentBundle = function (Tm) {
          var TS = this.getClassInfo(Tm);
          if (TS) {
            return TS.bundleInfo;
          }
        };
        Tq.prototype.injectClassInfo = function (Tm, TS) {
          var Tw = this.getClassInfo(Tm);
          if (!(Tw && undefined !== Tw)) {
            Tw = Tm._$cInfo = {
              'bundleInfo': TS,
              'componentCls': Tm,
              'componentID': undefined
            };
          }
          return Tw;
        };
        Tq.prototype.injectProperty = function (Tm) {
          var TS = this.getProperty(Tm);
          if (!TS) {
            TS = Tm._$prop = {};
          }
          return TS;
        };
        Tq.prototype.checkCrossBundleOperation = function (Tm, TS) {
          var Tw = this.getClassInfo(Tm);
          if (Tw && Tw.bundleInfo !== TS) {
            throw Error("Cross bundle operation not allowed");
          }
        };
        return Tq;
      }();
      var JK = new JX();
      var Jf = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.qn = function (TS, Tw, TE, Tp) {
          var Tj = this;
          if (undefined === Tp) {
            Tp = true;
          }
          var Tk = Z8([], TE, true);
          if (TS.stack) {
            Tk.push(TS.stack);
          }
          var Tg = {
            'category': "game_shell",
            'domain': 0x4,
            'code': 0x3f0,
            'error': TS,
            'messages': Tk
          };
          this.event.emit("Error.SendExceptionReport", TS);
          if (Tw && Tw.optional) {
            var TG = this.context.getContext(Tw);
            if (TG) {
              TG.destroy();
            }
          } else if (Tp) {
            this.event.emit("Error.Occurred", {
              'context': "Unknown",
              'info': Tg,
              'report': false
            }, function () {
              Tj.event.emit("Window.Reload");
            });
          }
        };
        return Tm;
      }(iV);
      var JN = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Yn = [];
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onInstantiate = function (TS) {
          Tq.prototype.onInstantiate.call(this, TS);
          this.event.on("Core.BundleCreated", this.Jn, this);
          this.event.on("Core.BundleDestroyed", this.Xn, this);
        };
        Tm.prototype.create = function (TS, Tw) {
          var TE = this.Yn[Tw.id];
          var Tp = JK.injectClassInfo(TS, Tw);
          if (undefined === Tp.componentID) {
            TE.push(undefined);
            Tp.componentID = TE.length - 0x1;
          }
          if (!TE[Tp.componentID]) {
            var Tj = this.context.getContext(Tw);
            if (!Tj) {
              throw Error("Unable to get bundle context");
            }
            try {
              var Tk = new TS();
              JK.injectProperty(Tk);
              if (Tk.onInstantiate) {
                Tk.onInstantiate(Tj);
              }
              TE[Tp.componentID] = Tk;
              if (Tk.onCreate) {
                Tk.onCreate(Tw.config);
              }
              this.event.emit("Core.ComponentCreated", TS);
            } catch (Tg) {
              if (undefined !== Tp.componentID) {
                TE[Tp.componentID] = undefined;
              }
              this.qn(Tg, Tw, ["Component create"], !Tj.bundleInfo.optional);
              throw Tg;
            }
          }
        };
        Tm.prototype.getInstance = function (TS) {
          var Tw = JK.getClassInfo(TS);
          if (Tw) {
            var TE = this.Yn[Tw.bundleInfo.id];
            if (TE) {
              return TE[Tw.componentID];
            }
          }
        };
        Tm.prototype.destroy = function (TS, Tw) {
          var TE = JK.getClassInfo(TS);
          if (TE) {
            var Tp = TE.componentID;
            var Tj = this.Yn[TE.bundleInfo.id];
            var Tk = Tj[Tp];
            if (Tk) {
              Tj[Tp] = undefined;
              this._destroy(Tk, Tw);
            }
          }
        };
        Tm.prototype.updateState = function (TS, Tw) {
          var TE = JK.getClassInfo(TS);
          if (TE) {
            var Tp = TE.bundleInfo.id ? this.Yn[TE.bundleInfo.id][TE.componentID] : undefined;
            if (Tp) {
              if (Tp.state) {
                Object.assign(Tp.state, Tw);
              }
              try {
                if (Tp.onStateChange) {
                  Tp.onStateChange(Tw);
                }
              } catch (Tj) {
                this.qn(Tj, TE.bundleInfo, ["Component updateState"]);
              }
            }
          }
        };
        Tm.prototype.Jn = function (TS) {
          var Tw = TS.payload;
          if (!Tw.id) {
            throw Error("Unable to get bundle id");
          }
          this.Yn[Tw.id] = [];
        };
        Tm.prototype.Xn = function (TS) {
          var Tw = TS.payload;
          if (!Tw.id) {
            throw Error("Unable to get bundle id");
          }
          var TE = this.Yn[Tw.id];
          if (TE && TE.length > 0x0) {
            for (var Tp = 0x0; Tp < TE.length; ++Tp) {
              if (TE[Tp]) {
                this._destroy(TE[Tp], Tw);
              }
            }
          }
          this.Yn[Tw.id] = undefined;
        };
        Tm.prototype._destroy = function (TS, Tw) {
          try {
            if (TS.onDestroy) {
              TS.onDestroy();
            }
          } catch (TE) {
            this.qn(TE, Tw, ["Component destroy"]);
          }
          this.event.emit("Core.ComponentDestroyed", {
            'componentCls': TS.cls,
            'component': TS
          });
        };
        return Tm;
      }(Jf);
      var JU = "undefined" != typeof Symbol;
      var JF = JU ? Symbol() : "_type";
      var JY = JU ? Symbol() : "_propagationStopped";
      var Jz = JU ? Symbol() : "_intercepted";
      var JR = JU ? Symbol() : "_propagateCb";
      var JB = JU ? Symbol() : "_emittingBundle";
      var Jq = JU ? Symbol() : "_subscribers";
      var Jm = function () {
        function Tq() {
          this.cleanUp();
        }
        Object.defineProperty(Tq.prototype, "type", {
          'get': function () {
            return this[JF];
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tq.prototype, "emittingBundle", {
          'get': function () {
            return this[JB];
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tq.prototype, "propagationCanceled", {
          'get': function () {
            return this[JY];
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tq.prototype, "intercepted", {
          'get': function () {
            return this[Jz];
          },
          'enumerable': false,
          'configurable': true
        });
        Object.defineProperty(Tq.prototype, "subscribers", {
          'get': function () {
            return this[Jq];
          },
          'enumerable': false,
          'configurable': true
        });
        Tq.prototype.init = function (Tm, TS, Tw, TE, Tp) {
          this[JF] = Tm;
          this[JR] = Tw;
          this[JB] = TE;
          this[Jq] = Tp;
          this.payload = TS;
        };
        Tq.prototype.intercept = function () {
          this[Jz] = true;
        };
        Tq.prototype.propagate = function () {
          if (!this[Jz]) {
            throw Error("Propagation called on non intercepted event");
          }
          this[Jz] = false;
          this[JR](this);
        };
        Tq.prototype.stopPropagation = function () {
          this[JY] = true;
        };
        Tq.prototype.cleanUp = function () {
          this[JF] = undefined;
          this[JY] = false;
          this[Jz] = false;
          this[JR] = undefined;
          this[JB] = undefined;
          this[Jq] = undefined;
          this.payload = undefined;
          this.response = undefined;
          this.responseCb = undefined;
          this.callbackRef = undefined;
          this.error = undefined;
        };
        return Tq;
      }();
      var JS = "undefined" != typeof Symbol;
      var Jw = JS ? Symbol("_subscriptionTable") : "_subscriptionTable";
      var JE = JS ? Symbol("_pendingEmitOnceTable") : "_pendingEmitOnceTable";
      var Jp = JS ? Symbol() : "_emitQueue";
      var Jj = JS ? Symbol() : "_eventPool";
      var Jk = JS ? Symbol() : "_currentEvent";
      var Jg = JS ? Symbol() : "_processing";
      var JG = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS[Jw] = {};
          TS[JE] = {};
          TS[Jp] = [];
          TS[Jj] = [];
          TS[Jk] = undefined;
          TS[Jg] = false;
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onInstantiate = function (TS) {
          Tq.prototype.onInstantiate.call(this, TS);
          this.event.on("Core.ComponentDestroyed", this.Kn, this);
        };
        Tm.prototype.on = function (TS, Tw, TE, Tp, Tj) {
          this.$n(TS, Tw, TE, false, this.ti(Tp), Tj);
        };
        Tm.prototype.once = function (TS, Tw, TE, Tp, Tj) {
          this.$n(TS, Tw, TE, true, this.ti(Tp), Tj);
        };
        Tm.prototype.off = function (TS, Tw, TE) {
          this.ni(TS, Tw, TE);
        };
        Tm.prototype.emit = function (TS, Tw, TE, Tp) {
          var Tj = this[Jj].pop() || new Jm();
          var Tk = this[Jw][TS] ? Z8([], this[Jw][TS], true) : [];
          Tj.init(TS, Tw, this.propagate.bind(this), Tp, Tk);
          Tj.responseCb = TE;
          this.propagate(Tj);
        };
        Tm.prototype.propagate = function (TS) {
          if (this[Jk] !== TS) {
            this[Jp].push(TS);
            this.ii();
          }
        };
        Tm.prototype.hasListeners = function (TS) {
          var Tw = this[Jw][TS];
          return !(!Tw || 0x0 === Tw.length);
        };
        Tm.prototype.Kn = function (TS) {
          var Tw = JK.getProperty(TS.payload.component).subscriptions;
          if (Tw) {
            for (; 0x0 !== Tw.length;) {
              var TE = Tw[Tw.length - 0x1];
              this.ni(TE.type, TE.callback, TS.payload.component);
            }
          }
        };
        Tm.prototype.$n = function (TS, Tw, TE, Tp, Tj, Tk) {
          var Tg = this[Jw][TS];
          if (undefined === Tg) {
            Tg = this[Jw][TS] = [];
          }
          for (var TG = 0x0; TG < Tg.length; ++TG) {
            var Tb = Tg[TG];
            if (undefined !== Tb && Tb.callback === Tw && Tb.target === TE) {
              return;
            }
          }
          this.ei(TS, Tw, TE);
          var TQ = {
            'type': TS,
            'callback': Tw,
            'target': TE,
            'once': Tp,
            'priority': Tj,
            'bundleInfo': Tk
          };
          if (Tp) {
            var Td = this[JE][TS] = this[JE][TS] ? this[JE][TS] : [];
            if (!Td.includes(TQ)) {
              Td.push(TQ);
            }
          }
          if (Tj === this.ti("High")) {
            Tg.unshift(TQ);
          } else {
            var I0 = false;
            for (TG = 0x0; TG < Tg.length; ++TG) {
              if (!(Tg[TG].priority <= TQ.priority)) {
                Tg.splice(TG, 0x0, TQ);
                I0 = true;
                break;
              }
            }
            if (!I0) {
              Tg.push(TQ);
            }
          }
        };
        Tm.prototype.ni = function (TS, Tw, TE) {
          var Tp = this[Jw][TS];
          if (undefined !== Tp) {
            for (var Tj = 0x0; Tj < Tp.length; ++Tj) {
              var Tk = Tp[Tj];
              if (Tk && Tk.callback === Tw && Tk.target === TE) {
                Tp.splice(Tj, 0x1);
                this.ri(Tk);
                return void this.oi(TS, Tk.callback, Tk.target);
              }
            }
          }
        };
        Tm.prototype.si = function (TS) {
          var Tw = TS.subscribers;
          if (0x0 !== Tw.length) {
            for (this.ai(TS); Tw.length > 0x0 && !TS.propagationCanceled && !TS.intercepted;) {
              var TE = Tw.shift();
              if (!(undefined === TE || !this.ui(TE) || TE.once && this.ci(TE))) {
                this.hi(TS, TE);
              }
            }
            this.li(TS, 0x0, Tw);
          } else {
            this.fi(TS);
          }
        };
        Tm.prototype.ai = function (TS) {
          this[Jk] = TS;
        };
        Tm.prototype.hi = function (TS, Tw) {
          var TE = TS.callbackRef = Tw.callback;
          var Tp = Tw.target;
          try {
            if (Tp) {
              TE.call(Tp, TS);
            } else {
              TE(TS);
            }
          } catch (Tj) {
            TS.error = Tj;
            this.qn(Tj, Tw.bundleInfo, ["Event emit"]);
          }
        };
        Tm.prototype.li = function (TS, Tw, TE) {
          if (TS.error || !TS.intercepted && (Tw === TE.length || TS.propagationCanceled)) {
            this.fi(TS);
          }
          this[Jk] = undefined;
        };
        Tm.prototype.fi = function (TS) {
          try {
            if (TS.responseCb) {
              TS.responseCb(TS);
            }
          } catch (Tw) {
            this.qn(Tw, TS.emittingBundle, ["Event emit callback"]);
          }
          TS.cleanUp();
          if (this[Jj].length < 0x28) {
            this[Jj].push(TS);
          }
        };
        Tm.prototype.ii = function () {
          if (!this[Jg]) {
            this[Jg] = true;
            for (var TS = this[Jp]; TS.length > 0x0;) {
              var Tw = TS.shift();
              if (Tw) {
                this.si(Tw);
              }
            }
            this[Jg] = false;
          }
        };
        Tm.prototype.ei = function (TS, Tw, TE) {
          var Tj = JK.getProperty(TE);
          if (Tj) {
            var Tk = Tj.subscriptions;
            if (!Tk) {
              Tk = Tj.subscriptions = [];
            }
            Tk.push({
              'type': TS,
              'callback': Tw,
              'target': TE
            });
          }
        };
        Tm.prototype.oi = function (TS, Tw, TE) {
          var Tj = JK.getProperty(TE);
          if (Tj) {
            var Tk = Tj.subscriptions;
            if (Tk) {
              for (var Tg = 0x0; Tg < Tk.length; ++Tg) {
                var TG = Tk[Tg];
                if (TG.type === TS && TG.callback === Tw && TG.target === TE) {
                  Tk.splice(Tg, 0x1);
                  break;
                }
              }
            }
          }
        };
        Tm.prototype.ui = function (TS) {
          return !!this[Jw][TS.type].includes(TS);
        };
        Tm.prototype.ci = function (TS) {
          return -0x1 === this[JE][TS.type].indexOf(TS) || (this.ni(TS.type, TS.callback, TS.target), false);
        };
        Tm.prototype.ri = function (TS) {
          if (TS.once) {
            var Tw = this[JE][TS.type];
            var TE = Tw.indexOf(TS);
            if (-0x1 !== TE) {
              Tw.splice(TE, 0x1);
            }
          }
        };
        Tm.prototype.ti = function (TS) {
          switch (TS) {
            case "High":
              return 0xa;
            case "Normal":
            default:
              return 0x14;
            case "Low":
              return 0x1e;
          }
        };
        return Tm;
      }(Jf);
      Jg;
      var Jb = document.createElement("div");
      var JQ = function (Tq) {
        Jb.innerHTML = Tq;
        var TS = Jb.firstChild;
        try {
          TS = Jb.removeChild(TS);
        } catch (Tw) {}
        Jb.innerHTML = '';
        return TS;
      };
      var Jd = function (Tq) {
        var Tm;
        var TS;
        if (!Tq) {
          Tq = 0x1;
        }
        var Tw = '1' === (null === (TS = null === (Tm = r.shell) || undefined === Tm ? undefined : Tm.urlSearch) || undefined === TS ? undefined : TS.get("nodbg"));
        return new Promise(function (TE) {
          if (Tw) {
            TE(Tq);
          } else {
            Function("n,t", "setInterval(\"(function(a){return function(a){return Function('Function(\\\"debugger;'+a+'\\\")()')}(a)})(Math.random().toString())();\"+n(t),1e3*t)")(TE, Tq);
          }
        });
      }(0x1);
      var a0 = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.di = {};
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onInstantiate = function (TS) {
          Tq.prototype.onInstantiate.call(this, TS);
          this.event.on("Core.ComponentDestroyed", this.Kn, this);
        };
        Tm.prototype.register = function (TS, Tw) {
          this.di[Tw] = TS;
        };
        Tm.prototype.append = function (TS, Tw, TE) {
          if (TS && Tw) {
            var Tp = this.component.getInstance(TS);
            if (!Tp) {
              throw Error("Unable to get instance ".concat(TS.toString()));
            }
            var Tj = this.component.getInstance(Tw);
            var Tk = null == Tp ? undefined : Tp.rootElement;
            var Tg = (null == Tj ? undefined : Tj.getContainerElement) ? Tj.getContainerElement(TE) : null == Tj ? undefined : Tj.rootElement;
            if (Tk && Tg) {
              this.Ai(Tk, Tg);
              Tp.parent = Tw;
            }
          }
        };
        Tm.prototype.appendTo = function (TS, Tw) {
          var TE = this.di[Tw];
          if (TE) {
            this.append(TS, TE, undefined);
          }
        };
        Tm.prototype.removeFromParent = function (TS) {
          var Tw = this.component.getInstance(TS);
          if (Tw) {
            (function (TE) {
              if (TE) {
                var Tp = TE.parentNode;
                if (Tp) {
                  Tp.removeChild(TE);
                }
              }
            })(Tw.rootElement);
            Tw.parent = undefined;
          }
        };
        Tm.prototype.show = function (TS) {
          var Tw = this.component.getInstance(TS);
          if (Tw && Tw.onShow) {
            Tw.onShow();
          }
        };
        Tm.prototype.hide = function (TS) {
          var Tw = this.component.getInstance(TS);
          if (Tw && Tw.onHide) {
            Tw.onHide();
          }
        };
        Tm.prototype.getContainerElement = function (TS, Tw) {
          var TE = this.component.getInstance(TS);
          if (TE && TE.getContainerElement) {
            return TE.getContainerElement(Tw);
          }
        };
        Tm.prototype.getRootElement = function (TS) {
          var Tw = this.component.getInstance(TS);
          if (Tw) {
            return Tw.rootElement;
          }
        };
        Tm.prototype.Kn = function (TS) {
          var Tw = TS.payload.component;
          if (Tw && Tw.rootElement && Tw.rootElement) {
            var TE = Tw.rootElement.parentNode;
            if (TE) {
              TE.removeChild(Tw.rootElement);
            }
            Tw.rootElement = undefined;
          }
        };
        Tm.prototype.Ai = function (TS, Tw) {
          if (TS && Tw && TS.parentNode !== Tw) {
            if (TS.parentNode) {
              TS.parentNode.removeChild(TS);
            }
            Tw.appendChild(TS);
          }
        };
        return Tm;
      }(Jf);
      var a1 = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS._resources = [];
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.setQualifierConfig = function (TS, Tw, TE) {
          var Tp;
          var Tj;
          var Tk;
          var Tg;
          if (Array.isArray(TS)) {
            Tp = Tw;
            Tj = TS[0x0];
            Tk = TS[0x1];
            Tg = TS[0x2];
          } else {
            Tp = TE;
            Tj = TS;
          }
          var TG = this.vi(Tp);
          TG.subConfig = Tk;
          TG.resourceQualifier = undefined;
          TG.extConfig = Tg;
          if (Tj) {
            if (Tj.language) {
              TG.config = Tj;
            } else {
              TG.config = Object.assign({}, Tj, this.pi());
            }
          }
        };
        Tm.prototype.addAssets = function (TS, Tw, TE) {
          var Tp = this.vi(Tw);
          Object.assign(Tp.md5Map, TS);
          if (Tp.resourceQualifier) {
            Tp.resourceQualifier.assetTable = Object.keys(Tp.md5Map);
          }
          if (TE) {
            for (var Tj in TS) Tp.baseMap[Tj] = TE;
          }
        };
        Tm.prototype.resolveUrl = function (TS, Tw, TE) {
          var Tp;
          if (undefined === TE) {
            TE = false;
          }
          var Tj = this.gi(Tw);
          var Tk = (null === (Tp = Tj.resourceQualifier) || undefined === Tp ? undefined : Tp.getResourceURL(TS)) || TS;
          var Tg = Tj.md5Map[Tk];
          var TG = Tk;
          if (Tg) {
            var Tb = TG.lastIndexOf('.');
            TG = Array.isArray(Tg) ? Tg[0x1] + '.' + Tg[0x0] + TG.substring(Tb) : TG.substring(0x0, Tb) + '.' + Tg + TG.substring(Tb);
          }
          if (!TE) {
            var TQ = this.mi(Tk, Tj, Tw);
            if (undefined === TQ) {
              throw Error("Invalid input data");
            }
            TG = ij(TQ, TG);
            if (!(0x0 === TG.indexOf("http://") || 0x0 === TG.indexOf("https://")) && !(0x0 === TG.indexOf("file://"))) {
              var Td = this.bi(Tw.baseUrl);
              if (undefined === Td) {
                throw Error("Invalid url data");
              }
              TG = TG.startsWith('/') || TG.startsWith('./') || TG.startsWith("../") ? ib(TG, Td) || TG : ij(Td, TG);
            }
          }
          return TG;
        };
        Tm.prototype.hasEntry = function (TS, Tw) {
          var TE;
          var Tp;
          return -0x1 !== (null === (Tp = null === (TE = this.gi(Tw).resourceQualifier) || undefined === TE ? undefined : TE.assetTable) || undefined === Tp ? undefined : Tp.indexOf(TS));
        };
        Tm.prototype.gi = function (TS) {
          var Tw = this.vi(TS);
          if (!Tw.resourceQualifier) {
            if (!Tw.subConfig || !Tw.subConfig.language) {
              var TE = Pm.locale();
              var Tp = TE.indexOf('-');
              if (-0x1 !== Tp) {
                Tw.subConfig = Tw.subConfig || Object.create(null);
                var Tj = TE.substring(Tp + 0x1);
                Tw.subConfig.language = function (Tk) {
                  return Tk === Tj ? 0x1 : 0x0;
                };
              }
            }
            Tw.resourceQualifier = new vW(Tw.config, Tw.subConfig, Tw.extConfig);
            Tw.resourceQualifier.assetTable = Object.keys(Tw.md5Map);
          }
          return Tw;
        };
        Tm.prototype.vi = function (TS) {
          if (!TS.id) {
            throw Error("Unable to get bundle id");
          }
          var Tw = this._resources[TS.id];
          if (!Tw) {
            Tw = this._resources[TS.id] = {
              'resourceQualifier': undefined,
              'config': this.pi(),
              'subConfig': undefined,
              'md5Map': {},
              'baseMap': {}
            };
          }
          return Tw;
        };
        Tm.prototype.pi = function () {
          return {
            'language': Pm.locale().split('-')[0x0],
            'orientation': vx.getOrientationMode()
          };
        };
        Tm.prototype.mi = function (TS, Tw, TE) {
          return Tw.baseMap[TS] || this.bi(TE.baseUrl);
        };
        Tm.prototype.bi = function (TS) {
          var Tw = v6 || r.location;
          var TE = Tw.origin;
          var Tp = Tw.pathname;
          if (!TS) {
            return ij(TE, Tp.substring(0x0, Tp.lastIndexOf('/')), '/');
          }
          if (TS.startsWith('/') || TS.startsWith('./') || TS.startsWith("../")) {
            var Tj = ij(TE, Tp);
            return ib(TS, Tj);
          }
          return iQ(TS);
        };
        return Tm;
      }(Jf);
      var a2 = {};
      var a5 = function (Tq, Tm) {
        var TS;
        var Tw = J8.getDeps(Tq);
        var TE = Tm.name;
        var Tp = {
          'name': TE,
          'version': Tm.version,
          'optional': Tm.optional,
          'baseUrl': Tq.substring(0x0, Tq.indexOf(TE)) + TE,
          'files': []
        };
        for (var Tj = 0x0; Tj < Tw.length; Tj++) {
          var Tk = Tw[Tj].id;
          var Tg = Tk.substring(Tk.lastIndexOf('/') + 0x1);
          if ("index.js" !== Tg) {
            if (!(null === (TS = Tp.files) || undefined === TS)) {
              TS.push(Tg);
            }
          }
        }
        return Tp;
      };
      var a6 = function (Tq, Tm, TS) {
        var Tw = TS._$meta;
        return Z2(Z2(Z2({}, Tm), Tw), {
          'version': Tw.version,
          'hasCCSettings': !!TS._$ccSettings,
          'baseUrl': Tq.substring(0x0, Tq.indexOf(Tm.name)) + Tm.name
        });
      };
      function a7(Tq) {
        delete a2[Tq];
      }
      var a8;
      var a9 = function () {
        function Tq(Tm) {
          this._i = {};
          this.wi = [];
          this.xi = [];
          this.onComplete = undefined;
          this.onRetry = undefined;
          this.onError = undefined;
          this._i = Tm;
        }
        Tq.prototype.load = function () {
          var Tm = this;
          var TS = this.yi();
          var Tw = this.Hi(this._i);
          TS.onComplete = function () {
            var TE = Tm.yi();
            Tm.Si(TE, Tm.xi).then(function () {
              var Tp = Tm.Vi();
              Tm.Si(Tp, Tm.wi).then(function () {
                var Tj = function () {
                  var TG = J8.getRawEntries();
                  var Tb = {};
                  var TQ = {};
                  for (var Td in TG) {
                    var I0 = TG[Td];
                    if (I0 && I0.n) {
                      var I1 = I0.n;
                      if (I1._$meta) {
                        var I2 = I1._$meta.name;
                        if (!a2[I2]) {
                          a2[I2] = I1;
                          var I3 = iE.getPluginRegistry(I2) || Object.create(null);
                          Tb[I2] = a5(Td, I3);
                          TQ[I2] = a6(Td, I3, I1);
                        }
                      }
                    }
                  }
                  return {
                    'scripts': Tb,
                    'plugins': TQ
                  };
                }();
                var Tk = Tj.plugins;
                for (var Tg in Tk) Tk[Tg].config = Tm._i[Tg] && Tm._i[Tg].config ? Tm._i[Tg].config : undefined;
                if (Tm.onComplete) {
                  Tm.onComplete(Tj);
                }
              });
            });
          };
          TS.load(Tw);
        };
        Tq.prototype.ki = function (Tm) {
          var TS = function (Tp) {
            var Tj = Tp && Tp._$meta;
            if (Tj) {
              var Tk = Tj.entry;
              var Tg = Tj.name;
              var TG = Tj.alias;
              var Tb = Tj.version;
              if (Tg) {
                iW.setMeta(Tg, Tj);
                if (Tk) {
                  var TQ = ib(Tk, ''.concat(Tg, '/'));
                  iE.getPluginRegistry(Tg).entry = TQ;
                }
                if (TG) {
                  I3 = vH(I2 = TG);
                  if (I2 !== I3) {
                    I3 = vZ(I3 = atob(I3), "xU8pa3cY");
                  }
                  var Td = I3;
                  iW.setMeta(Td, Tj);
                  var I0 = iE.getPluginRegistry(Td);
                  if (I0) {
                    var I1 = Tb.split('.')[0x0];
                    if (iW.getMeta()[I0.name].version.split('.')[0x0] !== I1) {
                      throw Error("Unable to import ".concat(Td, " due to version conflict between ").concat(Tb, " and ").concat(I0.version));
                    }
                  } else {
                    iE.setPluginRegistry(Td, iE.getPluginRegistry(Tg));
                  }
                }
                var I2;
                var I3;
                return Tj;
              }
            }
          }(Tm.response);
          if (TS) {
            var Tw = TS.name;
            var TE = TS.entry;
            this.Ei(TE, Tw);
            this.Ci(TS);
          }
        };
        Tq.prototype.Ei = function (Tm, TS) {
          if (Tm) {
            var Tw = iE.getPluginRegistry(TS);
            var TE = {
              'src': Tw.rawUrl,
              'type': JH.SystemScript,
              'info': Z2({
                'baseUrl': ''
              }, Tw),
              'optional': Tw.optional
            };
            this.wi.unshift(TE);
          }
        };
        Tq.prototype.Ci = function (Tm) {
          var TS = this;
          var Tw = this.Mi(Tm);
          if (Tw) {
            this.Hi(Tw).forEach(function (TE) {
              TS.xi.unshift(TE);
            });
          }
        };
        Tq.prototype.Si = function (Tm, TS) {
          var Tw = this;
          return TS.length <= 0x0 ? Promise.resolve() : new Promise(function (TE) {
            Tm.onComplete = function () {
              TE();
            };
            Tm.load(Tw.Bi(TS));
          });
        };
        Tq.prototype.yi = function () {
          var Tm = this;
          var TS = this.Vi();
          TS.onLoad = function (Tw) {
            Tm.ki(Tw);
          };
          return TS;
        };
        Tq.prototype.Vi = function () {
          var Tm = this;
          var TS = new JL();
          TS.onError = function (Tw) {
            if (Tm.onError) {
              Tm.onError(Tw);
            }
          };
          TS.onRetry = function (Tw) {
            if (Tm.onRetry) {
              Tm.onRetry(Tw.retry || 0x0, Tw.info);
            }
          };
          return TS;
        };
        Tq.prototype.Mi = function (Tm) {
          var TS = {};
          var Tw = Tm.dependencies;
          var TE = iE.getPluginRegistries();
          for (var Tp in Tw) TS[Tp] = Z2({
            'baseUrl': ''
          }, TE[Tp]);
          return 0x0 === Object.keys(TS).length ? undefined : TS;
        };
        Tq.prototype.Hi = function (Tm) {
          var TS = [];
          for (var Tw in Tm) {
            var TE = Tm[Tw];
            if (TE.rawUrl) {
              TS.push({
                'src': TE.rawUrl,
                'type': JH.SystemScript,
                'info': TE,
                'optional': TE.optional
              });
            }
          }
          return TS;
        };
        Tq.prototype.Bi = function (Tm) {
          var TS = Tm.map(function (Tw) {
            return Tw.src;
          });
          return Tm.filter(function (Tw, TE) {
            var Tp = Tw.src;
            return !TS.includes(Tp, TE + 0x1);
          });
        };
        return Tq;
      }();
      !function (Tq) {
        Tq[Tq.Shell = 0x0] = "Shell";
        Tq[Tq.Splash = 0x1] = "Splash";
      }(a8 || (a8 = {}));
      var aZ;
      var aH = function () {
        function Tq() {}
        Tq.prototype.interpret = function (Tm) {
          return Px.resource.resolveUrl(Tm[0x0]);
        };
        return Tq;
      }();
      !function (Tq) {
        Tq[Tq.Value = 0x1] = "Value";
        Tq[Tq.Color = 0x2] = "Color";
      }(aZ || (aZ = {}));
      var aO = function () {
        function Tq() {}
        Tq.prototype.interpret = function (Tm) {
          switch (Tm[0x0]) {
            case aZ.Value:
              return Tm[0x1];
            case aZ.Color:
              return function (TS, Tw, TE, Tp) {
                return Tp ? "rgba(".concat(TS, ", ").concat(Tw, ", ").concat(TE, ", ").concat(Tp, ')') : "rgb(".concat(TS, ", ").concat(Tw, ", ").concat(TE, ')');
              }(Tm[0x1], Tm[0x2], Tm[0x3], Tm[0x4]);
            default:
              return Tm[0x0];
          }
        };
        return Tq;
      }();
      var aC = function () {
        function Tq(Tm) {
          this.ji = Tm;
          this.Gi("shell", a8.Shell);
          this.Gi("splash", a8.Splash);
        }
        Tq.prototype.Gi = function (Tm, TS) {
          var Tw = this.ji.unregisterInterpreter(Tm);
          if (!Tw) {
            switch (TS) {
              case a8.Splash:
                Tw = new aH();
                break;
              case a8.Shell:
              default:
                Tw = new aO();
            }
          }
          this.ji.registerInterpreter(Tm, Tw);
        };
        Tq.prototype.v = function (Tm) {
          return this.ji.v(Tm) || undefined;
        };
        Tq.prototype.extend = function (Tm) {
          this.ji.extend(Tm);
        };
        return Tq;
      }();
      var aL = new aC(PQ);
      var ax = function () {
        function Tq(Tm) {
          this.Pi = Tm;
        }
        Tq.prototype.load = function () {
          var Tm = this;
          if (this.Pi.bundleInfo) {
            this.Zi(function () {
              Tm.Si();
            });
          } else {
            var TS = {
              'error': Error("[Plugin Loader]: Empty package info. Failed to load the plugin."),
              'item': undefined
            };
            if (this.onError) {
              this.onError(this.Pi.bundleInfo, TS);
            }
          }
        };
        Tq.prototype.Zi = function (Tm) {
          var TS = this;
          var Tw = this.Pi.bundleInfo;
          if (Tw.assets) {
            if (/^CAkQ(xzA|C3z|2Q5)/.test(Tw.assets)) {
              var TE = PD(Tw.assets);
              this.Pi.resource.addAssets(TE.assets);
              Tm();
            } else if ("string" == typeof Tw.assets) {
              var Tp = new JL();
              Tp.onLoad = function (Tj) {
                var Tk = Tj.response;
                if (/^CAkQ(xzA|C3z|2Q5)/.test(Tj.response)) {
                  Tk = PD(Tj.response);
                }
                if (0x2 !== Tk.version) {
                  throw Error("Unknown asset table format version: " + Tk.version);
                }
                TS.Pi.resource.addAssets(Tk.assets);
                Tm();
              };
              Tp.onError = function (Tj) {
                var Tk = "[Plugin Loader]: Failed to download asset table of ".concat(Tw.name);
                var Tg = {
                  'error': Error(Tk),
                  'item': Tj
                };
                if (TS.onError) {
                  TS.onError(TS.Pi.bundleInfo, Tg);
                }
              };
              Tp.load([this.Pi.resource.resolveUrl(Tw.assets)]);
            } else {
              this.Pi.resource.addAssets(Tw.assets.assets);
              Tm();
            }
          } else {
            Tm();
          }
        };
        Tq.prototype.Si = function () {
          var Tm = this;
          var TS = this.Ri();
          var Tw = new JL();
          if (TS.sources.length) {
            if (this.onPreload) {
              this.onPreload(this.Pi.bundleInfo, TS.totalFiles);
            }
            Tw.onLoad = function (TE) {
              TS.fileCount += 0x1;
              if (Tm.onProgress) {
                Tm.onProgress(Tm.Pi.bundleInfo, {
                  'currentItem': TE,
                  'fileCount': TS.fileCount,
                  'totalFiles': TS.totalFiles
                });
              }
              if (TE.src === Tm.Oi) {
                var Tp = TE.response;
                for (var Tj in Tp) if (Tp[Tj]) {
                  Pm.extend(Tp[Tj], Tj);
                }
              }
              if (TE.src === Tm.Di) {
                aL.extend(TE.response);
              }
              if (TS.success() && Tm.onSuccess) {
                Tm.onSuccess(Tm.Pi.bundleInfo);
              }
            };
            Tw.onRetry = function (TE) {
              var Tp = Pm.t("General.ResourceRetryMessage") + Pm.t("RetryHandler.Times", {
                'times': {
                  'ordinal': TE.retry
                }
              });
              Tm.Pi.event.emit("Shell.ChangeProgressText", Tp);
            };
            Tw.onError = function (TE) {
              var Tp = "[Plugin Loader]: Failed to download file of ".concat(Tm.Pi.bundleInfo.name, ". Src: ").concat(TE.src);
              var Tj = {
                'error': Error(Tp),
                'item': TE
              };
              if (Tm.onError) {
                Tm.onError(Tm.Pi.bundleInfo, Tj);
              }
            };
            Tw.load(TS.sources);
          } else if (this.onSuccess) {
            this.onSuccess(this.Pi.bundleInfo);
          }
        };
        Tq.prototype.Ri = function () {
          var Tm;
          var TS;
          var Tw;
          var TE = this;
          var Tp = this.Pi.bundleInfo;
          var Tj = [];
          var Tk = Tp.preload;
          var Tg = Tp.extraAssets;
          if (Tk) {
            if (!(null === (Tm = Tp.files) || undefined === Tm)) {
              Tm.push.apply(Tm, Tk.map(function (I1) {
                return TE.Pi.resource.resolveUrl(I1);
              }));
            }
          }
          if (Tg) {
            if (!(null === (TS = Tp.files) || undefined === TS)) {
              TS.push.apply(TS, Tg);
            }
          }
          var TG = null === (Tw = Tp.files) || undefined === Tw ? undefined : Tw.length;
          if (TG && Tp.files) {
            for (var Tb = 0x0; Tb < TG; Tb++) {
              var TQ = Tp.files[Tb];
              if (!TQ.startsWith("shell-game-res")) {
                var Td = 0x0 === TQ.indexOf("http://") || 0x0 === TQ.indexOf("https://") || 0x0 === TQ.indexOf("file://") ? TQ : ij(Tp.baseUrl, TQ);
                Tj.push(Td);
              }
            }
          }
          if (this.Pi.resource.hasEntry("shell-game-res/locale/locale.json")) {
            this.Oi = this.Pi.resource.resolveUrl("shell-game-res/locale/locale.json");
            Tj.push(this.Oi);
          }
          if (this.Pi.resource.hasEntry("shell-game-res/appearance/appearance.json")) {
            this.Di = this.Pi.resource.resolveUrl("shell-game-res/appearance/appearance.json");
            Tj.push(this.Di);
          }
          var I0 = {
            'sources': Tj,
            'fileCount': 0x0,
            'totalFiles': Tj.length,
            'success': function () {
              return 0x0 === I0.totalFiles;
            }
          };
          return I0;
        };
        return Tq;
      }();
      var av = function () {
        function Tq() {
          this.Ni = 0x0;
          this.Qi = 0x0;
          this.Ti = 0x0;
          this.Li = 0x0;
          this.Ii = false;
          this.Fi = 0x0;
          this.Wi = 0x0;
        }
        Tq.prototype.addTotalFileCount = function (Tm) {
          this.Qi += Tm;
        };
        Tq.prototype.fileLoaded = function () {
          this.Ni += 0x1;
        };
        Tq.prototype.filePercentage = function () {
          if (!this.Ii) {
            this.Fi = this.Ni;
          }
          var Tm = this.Fi / this.Qi;
          return isNaN(Tm) ? 0x0 : Tm;
        };
        Tq.prototype.addTotalPluginCount = function (Tm) {
          this.Li += Tm;
        };
        Tq.prototype.pluginLoaded = function () {
          this.Ti += 0x1;
        };
        Tq.prototype.isComplete = function () {
          if (!this.Ii) {
            this.Wi = this.Ti;
          }
          return this.Wi === this.Li;
        };
        Tq.prototype.stop = function () {
          this.Ii = true;
        };
        return Tq;
      }();
      var aP = true;
      var aJ = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onInstantiate = function (TS) {
          Tq.prototype.onInstantiate.call(this, TS);
          this.event.on("Shell.GetPluginMeta", this.zi, this);
        };
        Tm.prototype.load = function (TS, Tw) {
          var TE = this;
          if (undefined === Tw) {
            Tw = {};
          }
          var Tp = new a9(TS);
          Tp.onError = function (Tj) {
            if (Tj.info.optional) {
              if (Tw.onComplete) {
                Tw.onComplete();
              }
            } else if (Tw.onError) {
              Tw.onError(Tj);
            }
          };
          Tp.onRetry = function (Tj) {
            var Tk = Pm.t("General.ResourceRetryMessage") + Pm.t("RetryHandler.Times", {
              'times': {
                'ordinal': Tj
              }
            });
            TE.event.emit("Shell.ChangeProgressText", Tk);
          };
          Tp.onComplete = function (Tj) {
            var Tk = function () {
              if (Tw.onComplete) {
                Tw.onComplete();
              }
            };
            var Tg = Tj.plugins;
            if (0x0 !== Object.keys(Tg).length) {
              if ('1' === vx.getURLSearchParam().get("plog")) {
                (function (TG, Tb) {
                  var TQ = {};
                  if (aP) {
                    aP = false;
                    TQ[TG.name] = TG.version;
                  }
                  for (var Td in Tb) {
                    var I0 = Tb[Td];
                    TQ[Td] = I0.version;
                  }
                  if (0x0 !== Object.keys(TQ).length) {
                    r.console.log("plugins: " + JSON.stringify(TQ, undefined, 0x4));
                  }
                })(TE.context.bundleInfo, Tg);
              }
              if (Tw.onDependencyResolved) {
                Tw.onDependencyResolved(Tg);
              }
              TE.Ui(Tg, Tw, Tk);
            } else {
              Tk();
            }
          };
          Tp.load();
        };
        Tm.prototype.unload = function (TS) {
          a7(TS.name);
          this.context.destroyBundle(TS);
        };
        Tm.prototype.Ui = function (TS, Tw, TE) {
          var Tp = this;
          var Tj = new av();
          var Tk = Tw.onProgress;
          var Tg = Tw.onPreload;
          var TG = Tw.onLoad;
          var Tb = Tw.onError;
          var TQ = function () {
            Tj.pluginLoaded();
            if (Tj.isComplete()) {
              TE();
            }
          };
          var Td = function (I9, IZ) {
            if (null == IZ ? undefined : IZ.error) {
              if (I9 && I9.optional) {
                Tp.unload(I9);
                return void TQ();
              }
              Tj.stop();
              if (IZ.item && Tb) {
                Tb(IZ.item);
              }
            } else {
              TQ();
            }
          };
          var I0 = function (I9, IZ) {
            Tj.addTotalFileCount(IZ);
            if (Tg) {
              Tg(I9);
            }
          };
          var I1 = function (I9, IZ) {
            Tj.fileLoaded();
            if (Tk) {
              Tk(I9, Tj.filePercentage());
            }
            if (TG) {
              TG(IZ.currentItem);
            }
          };
          var I2 = function (I9, IZ) {
            Td(I9, IZ);
          };
          var I3 = function (I9) {
            Tp.qi(I9, Td);
          };
          Tj.addTotalPluginCount(Object.keys(TS).length);
          for (var I4 in TS) {
            var I5 = TS[I4];
            if (I5) {
              var I6 = I5.files;
              if (!I6) {
                I6 = I5.files = [];
              }
              var I7 = this.context.createBundle(I5);
              var I8 = new ax(I7);
              I8.onPreload = I0;
              I8.onProgress = I1;
              I8.onSuccess = I3;
              I8.onError = I2;
              I8.load();
            } else {
              Tj.addTotalPluginCount(-0x1);
            }
          }
        };
        Tm.prototype.qi = function (TS, Tw) {
          var TE;
          var Tp = function (I0) {
            if (I0) {
              Tw(TS, {
                'error': I0
              });
            } else {
              Tw(TS);
            }
          };
          try {
            TE = TS.name;
            var Tj = Jx[TE];
            if (!Tj) {
              return void Tp();
            }
            var Tk = Tj.delayComplete || false;
            if (Tk) {
              Tj.completeCallback = Tp;
            }
            if (Tj.mainComponent) {
              var Tg = this.context.getContext(TS);
              if (!Tg) {
                throw Error("Unable to get context of ".concat(TS.name));
              }
              if (TS.bundles && !function (I0) {
                for (var I1 in I0) if (undefined !== I0[I1] && null !== I0[I1]) {
                  return false;
                }
                return true;
              }(TS.bundles)) {
                var TG = Tg.bundleInfo.bundles;
                if (TG) {
                  var Tb = Object.create(null);
                  for (var TQ in TG) {
                    var Td = TG[TQ];
                    Tb[TQ] = Td.version;
                  }
                  Tg.cocos.setCocosBundleVers(Tb);
                  Tg.bundleInfo.bundleBaseUrl = ij(Tg.bundleInfo.baseUrl, "assets/");
                  try {
                    Tg.component.create(Tj.mainComponent);
                    if (!Tk) {
                      Tp();
                    }
                  } catch (I0) {
                    Tp(I0);
                  }
                } else {
                  Tp(Error("Cocos bundle is undefined"));
                }
              } else {
                Tg.component.create(Tj.mainComponent);
                if (!Tk) {
                  Tp();
                }
              }
            } else if (!Tk) {
              Tp();
            }
          } catch (I1) {
            Tw(TS, {
              'error': Error("Failed to create plugin: ".concat(TS.name))
            });
          }
        };
        Tm.prototype.zi = function (TS) {
          TS.response = iW.getMeta();
        };
        return Tm;
      }(Jf);
      var aT = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Yi = [];
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.createBundle = function (TS) {
          for (var Tw = 0x0; Tw < this.Yi.length; ++Tw) {
            var TE = this.Yi[Tw];
            if (TE && TE.bundleInfo === TS) {
              return TE;
            }
          }
          var Tp = iO && iO.createContext(TS);
          if (!Tp) {
            throw Error("Bundle factory context not created");
          }
          this.Yi.push(Tp);
          TS.id = this.Yi.length - 0x1;
          Tp.event.emit("Core.BundleCreated", TS);
          return Tp;
        };
        Tm.prototype.getContext = function (TS) {
          if (TS && undefined !== TS.id) {
            return this.Yi[TS.id];
          }
        };
        Tm.prototype.queryBundle = function (TS) {
          for (var Tw = 0x0; Tw < this.Yi.length; ++Tw) {
            var TE = this.Yi[Tw];
            if (TE) {
              var Tp = TE.bundleInfo;
              if (Tp.name === TS) {
                return Tp;
              }
            }
          }
        };
        Tm.prototype.destroyBundle = function (TS) {
          var Tw = TS.id;
          if (undefined !== Tw) {
            var TE = this.Yi[Tw];
            if (undefined !== TE) {
              a7(TS.name);
              J8.forceDelete(TE.bundleInfo.name);
              this.Yi[Tw] = undefined;
              TE.event.emit("Core.BundleDestroyed", TE.bundleInfo);
            }
          }
        };
        return Tm;
      }(Jf);
      var aI = ["icon_android_96.png", "icon_android_144.png", "icon_android_192.png"];
      var aV = ["icon_ios_60.png", "icon_ios_120.png", "icon_ios_180.png"];
      var aD = [0x60, 0x90, 0xc0];
      var aM = [0x3c, 0x78, 0xb4];
      function aA(Tq, Tm, TS) {
        Tq.forEach(function (Tw, TE) {
          var Tp = Tm[TE];
          var Tj = "shell-game-res/splash/" + Tw;
          var Tk = Px.resource.resolveUrl(Tj);
          if (!Tk.endsWith(Tj)) {
            var Tg = document.head.querySelector("link[rel='".concat(TS, "'][sizes='").concat(Tp, 'x').concat(Tp, "']"));
            if (!Tg) {
              (Tg = document.createElement("link")).setAttribute("rel", TS);
              Tg.setAttribute("sizes", ''.concat(Tp, 'x').concat(Tp));
              document.head.appendChild(Tg);
            }
            Tg.href = Tk;
          }
        });
      }
      var aW = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS = vx.getOrientationMode();
          TS = vx.isMobile() || "port" === TS ? TS : TS + "-pc";
          this.rootElement = JQ("<div id=\"footer-container\" class=\"footer-container\">" + "<div class=\"footer-mask-container-".concat(TS, "\">") + ''.concat(this.Ji()) + "</div>" + ''.concat(this.Xi()) + "</div>");
        };
        Tm.prototype.onStateChange = function (TS) {
          if (this.rootElement) {
            this.rootElement.style.height = ''.concat(TS.height, 'px');
          }
          var Tw = document.getElementById("footer-copyright-image");
          if (Tw) {
            Tw.style.bottom = ''.concat(27.5 - TS.excessBottom, 'px');
          }
        };
        Tm.prototype.Xi = function () {
          return "port" === vx.getOrientationMode() ? "<div class=\"footer-image-container\"><div id=\"footer-copyright-image\"></div></div>" : '';
        };
        Tm.prototype.Ji = function () {
          if (aL.v("footer.enable")) {
            var TS = aL.v("footer.background_image");
            if (!TS) {
              throw Error("You have enable custom footer, but all custom config value not given!");
            }
            return "<div class=\"footer-mask footer-mask-color\" style=\"".concat("background-image: ".concat(TS), "\"></div>");
          }
          var Tw = rA.ThemeColor;
          var TE = [Tw.substr(0x1, 0x2), Tw.substr(0x3, 0x2), Tw.substr(0x5, 0x2)].map(function (Tj) {
            return parseInt(Tj, 0x10);
          });
          var Tp = "background-image: linear-gradient(180deg, \n            rgba(".concat(TE[0x0], ", ").concat(TE[0x1], ", ").concat(TE[0x2], ", 0), ").concat(rA.ThemeColor, ')');
          return "<div class=\"footer-mask footer-mask-color\" style=\"".concat(Tp, "\"></div>") + "<div class=\"footer-mask footer-mask-black\"></div>";
        };
        return Tm;
      }(iM);
      function ay(Tq, Tm) {
        var TS = document.createElement(Tm);
        Tq.appendChild(TS);
        return TS;
      }
      function aX(Tq, Tm) {
        var TS = document.createElementNS("http://www.w3.org/2000/svg", Tm);
        Tq.appendChild(TS);
        return TS;
      }
      function aK(Tq, Tm) {
        Tq.innerHTML += Tm;
        return Tq;
      }
      function aN() {
        var Tm = arguments[0x0];
        for (var TS = 0x1; TS < arguments.length; TS += 0x2) {
          Tm.style[arguments[TS]] = arguments[TS + 0x1];
        }
        return Tm;
      }
      function aU() {
        var Tm = arguments[0x0];
        for (var TS = 0x1; TS < arguments.length; TS += 0x2) {
          Tm.setAttribute(arguments[TS], arguments[TS + 0x1]);
        }
        return Tm;
      }
      var aF;
      var aY;
      var az;
      var aR = {
        'PG-Color-Top': "PG-Color-Top",
        'PG-Color-Bottom': "PG-Color-Bottom",
        'PG1': "PG1",
        'PG2': "PG2",
        'PG3': "PG3",
        'PG4': "PG4",
        'PG5': "PG5"
      };
      var aB = {
        'yellow': ["G-Yelow", 0x5],
        'green': ["G-Green", 0xa],
        'darkRed': ["G-Dark-Red", 0x5],
        'orange': ["P-Orange", 0xa],
        'purple': ["P-Purple", 0x5]
      };
      var aq = [['0', "#d888f3", "#d888f3;#fee8a1;#a0f5b2;#30f4e1;#42b1ff;#78fbf0;#a3bdfa;#d888f3;"], ["0.5", "#8aadff", "#8aadff;#78fbf0;#42b1ff;#8aadff;#a0f5b2;fee8a1;#d888f3;#8aadff;"], ['1', "#30f4e1", "#30f4e1;#d888f3;#42b1ff;#8aadff;#a0f5b2;#78fbf0;#78fbf0;#30f4e1;"]];
      function am(Tq) {
        var Tm = Tq.element;
        var TS = Tq.duration;
        var Tw = Tq.delay;
        aU(aX(Tm, "animate"), "attributeName", "opacity", "dur", TS + 's', "values", "0; 0; 1;", "keyTimes", "0; " + (Tw || 0x0) + "; 1", "end", "indefinite");
      }
      function aS() {
        var Tq = document.getElementById("gradient-color");
        var Tm = document.getElementById("svg-logo-container");
        var TS = document.getElementById("pg-svg-text");
        if (Tm) {
          aN(Tq, "opacity", 0x1);
          aN(Tm, "opacity", 0x0);
          aN(TS, "opacity", 0x0);
        }
        aq.forEach(function (Tw) {
          var TE = document.getElementById("color-" + Tw[0x1]);
          if (TE) {
            TE.beginElement();
          }
        });
      }
      function aw() {
        var Tq = document.getElementById("gradient-color");
        var Tm = document.getElementById("svg-logo-container");
        var TS = document.getElementById("pg-svg-text");
        if (Tm) {
          aN(Tq, "opacity", 0x0);
          aN(Tm, "opacity", 0x1);
          aN(TS, "opacity", 0x1);
        }
        az = setTimeout(function () {
          aq.forEach(function (Tw) {
            var TE = document.getElementById("color-" + Tw[0x1]);
            if (TE) {
              TE.endElement();
            }
          });
        }, 0x7d0);
      }
      var aE = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.rootElement = JQ("<div class=\"logo-container\"></div>");
        };
        Tm.prototype.onDestroy = function () {
          !function () {
            var TS = document.getElementById("svg-logo");
            if (TS) {
              clearTimeout(az);
              clearInterval(aY);
              TS.parentElement.removeChild(TS);
            }
          }();
        };
        Tm.prototype.onStateChange = function (TS) {
          switch (TS.state) {
            case "init":
              var Tw = TS.certBlobUrl;
              var TE = this.Ki = document.createElement("img");
              TE.className = "footer-text-img";
              TE.src = Tw;
              if (this.rootElement) {
                this.rootElement.appendChild(TE);
              }
              TE.onload = function () {
                URL.revokeObjectURL(Tw);
              };
              break;
            case "scale":
              if (!this.rootElement) {
                return;
              }
              if ("port" === vx.getOrientationMode() && undefined !== TS.excessBottom) {
                this.rootElement.style.bottom = ''.concat(0x34 - TS.excessBottom, 'px');
              } else {
                this.rootElement.style.bottom = "5px";
              }
              break;
            case "setup":
              this.Ki.height /= 0x3;
              break;
            case "start":
              var Tp = "port" === vx.getOrientationMode();
              var Tj = function (Tk) {
                if (undefined === Tk) {
                  Tk = {
                    'isPortrait': true
                  };
                }
                var Tg = Tk.isPortrait;
                aF = Tg;
                var TG = document.createElement("div");
                var Tb = aF ? "column" : "row";
                aU(TG, 'id', "svg-logo");
                aN(TG, "display", "flex", "flex-direction", Tb, "backface-visibility", "hidden", "transform", "translateZ(0)");
                (function (Td) {
                  var I0 = aX(Td, "svg");
                  var I1 = aX(I0, "svg");
                  aU(I0, 'id', "gradient-color", "xmlns", "http://www.w3.org/2000/svg");
                  aN(I0, "position", "absolute", "z-index", "-99", "opacity", '0');
                  aU(I1, 'id', "logo-gradient");
                  aN(I1, "position", "absolute", "z-index", '1', "clip-path", "url(#logo-clip-path)", "width", "200px", "height", "100px");
                  var I2 = aX(ay(I0, "defs"), "linearGradient");
                  aU(I2, 'id', "color-a", "gradientUnits", "objectBoundingBox", 'x1', '0', 'y1', '0', 'x2', '1', 'y2', '1');
                  aU(aX(I1, "clipPath"), 'id', "logo-clip-path");
                  aU(aX(I1, "rect"), "fill", "url(#color-a)", "width", "200px", "height", "100px");
                  var I3 = aX(I1, 'g');
                  var I4 = aX(I3, "rect");
                  aU(I4, "fill", "white", "width", "10px", "height", "70px");
                  aN(I4, "transform", "rotate(30deg)");
                  aU(I3, "transform", "translate(-80, -10)");
                  aU(ay(I3, "animateTransform"), 'id', "shine-animate", "attributeName", "transform", "type", "translate", "from", "-80 -10", 'to', "160 -10", "dur", '1s', "begin", "2s;shine-animate.end+2s", "end", "indefinite");
                  aq.forEach(function (I5) {
                    var I6 = aX(I2, "stop");
                    aU(I6, "offset", I5[0x0], "stop-color", I5[0x1]);
                    aU(ay(I6, "animate"), 'id', "color-" + I5[0x1], "attributeName", "stop-color", "values", I5[0x2], "dur", '6s', "repeatCount", "indefinite");
                  });
                })(TG);
                var TQ = ay(TG, "div");
                aU(TQ, 'id', "svg-logo-container");
                aN(TQ, "height", "31px", "width", aF ? "62px" : "67px");
                aN(TQ);
                aK(TQ, "<svg id=\"pg-svg-logo\" width=\"62\" height=\"28\" viewBox=\"0 0 62 28\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\">\n<g id=\"PG-Logo\">\n<g id=\"PG-Color-Top\">\n<path id=\"G-Yelow\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M41.75 0H39.25V2.49997H41.75V0Z\" fill=\"#FFB919\"/>\n<path id=\"G-Green\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M61.5 11.2499H59V13.7498H61.5V11.2499Z\" fill=\"#14E691\"/>\n<path id=\"G-Dark-Red\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36 5.74994H33.5V8.24991H36V5.74994Z\" fill=\"#E61973\"/>\n<path id=\"P-Orange\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28 2.74997H25.5V5.24994H28V2.74997Z\" fill=\"#FF6E00\"/>\n<path id=\"P-Purple\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.5 2.74997H0V5.24994H2.5V2.74997Z\" fill=\"#6414E6\"/>\n</g>\n<g id=\"PG-Color-Bottom\">\n<path id=\"Fill-18\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.75 27.8544H5.20367V25.4042H2.75V27.8544Z\" fill=\"#19BEE6\"/>\n<path id=\"Fill-19\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.9104 22.2H19.3649V19.7498H16.9104V22.2Z\" fill=\"#E619DC\"/>\n<path id=\"Fill-24\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36.2829 25.0272H38.7374V22.577H36.2829V25.0272Z\" fill=\"#1987E6\"/>\n<path id=\"Fill-25\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.2754 27.8544H55.7304V25.4042H53.2754V27.8544Z\" fill=\"#FF4B00\"/>\n<path id=\"Fill-27\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.9402 22.2H61.3948V19.7502H58.9402V22.2Z\" fill=\"#FF1928\"/>\n</g>\n<g id=\"PG5\">\n<path id=\"Fill-20\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.993 2.45026H19.448V0H16.993V2.45026ZM8.4965 5.27791H10.9511V2.82764H8.4965V5.27791ZM19.8252 8.10465H22.2797V5.65439H19.8252V8.10465ZM25.4899 10.9323H27.9441V8.48158H25.4899V10.9323ZM0 13.7586H2.45457V11.3097H0V13.7586ZM25.4899 16.5862H27.9441V14.136H25.4899V16.5862ZM11.3287 22.2406H13.7832V19.7903H11.3287V22.2406ZM2.83217 25.0678H5.28674V22.6175H2.83217V25.0678ZM0 10.9323H2.45457V8.48203H0V10.9323ZM22.6573 5.27746H25.1119V2.82719H22.6573V5.27746Z\" fill=\"white\"/>\n<path id=\"Fill-21\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.5263 2.45026H52.9809V0H50.5263V2.45026ZM53.3585 8.10465H55.8126V5.65439H53.3585V8.10465ZM39.1977 8.10465H41.6518V5.65439H39.1977V8.10465ZM53.3585 16.5862H55.8126V14.136H53.3585V16.5862ZM59.0228 19.4134H61.4774V16.9636H59.0228V19.4134ZM44.862 25.0683H47.3166V22.618H44.862V25.0683ZM50.5263 27.895H52.9809V25.4447H50.5263V27.895Z\" fill=\"white\"/>\n</g>\n<g id=\"PG4\">\n<path id=\"Fill-20_2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.83217 2.45026H5.28583V0H2.83217V2.45026ZM14.1613 5.27791H16.6159V2.82764H14.1613V5.27791ZM2.83217 8.1051H5.28674V5.65484H2.83217V8.1051ZM22.6573 10.9323H25.1119V8.48158H22.6573V10.9323ZM2.83217 16.5867H5.28674V14.1364H2.83217V16.5867ZM14.1613 19.4134H16.6159V16.9636H14.1613V19.4134ZM0 22.2406H2.45457V19.7908H0V22.2406Z\" fill=\"white\"/>\n<path id=\"Fill-21_2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M42.0294 5.27744H44.4839V2.82718H42.0294V5.27744ZM56.1902 13.7595H58.6448V11.3097H56.1902V13.7595ZM47.6937 13.7595H50.1483V11.3097H47.6937V13.7595ZM33.5329 16.5867H35.9879V14.1364H33.5329V16.5867ZM56.1902 22.2406H58.6448V19.7903H56.1902V22.2406Z\" fill=\"white\"/>\n</g>\n<g id=\"PG3\">\n<path id=\"Fill-20_3\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.4965 2.45026H10.9511V0H8.4965V2.45026ZM19.8252 5.27791H22.2797V2.82764H19.8252V5.27791ZM16.993 5.27791H19.448V2.82764H16.993V5.27791ZM5.66388 5.27791H8.1189V2.82764H5.66388V5.27791ZM22.6573 8.10465H25.1119V5.65439H22.6573V8.10465ZM2.83217 10.9323H5.28674V8.48158H2.83217V10.9323ZM22.6573 13.759H25.1119V11.3088H22.6573V13.759ZM22.6573 16.5862H25.1119V14.136H22.6573V16.5862ZM0 16.5858H2.45457V14.1364H0V16.5858ZM22.6573 19.4134H25.1119V16.9636H22.6573V19.4134ZM5.66388 19.4134H8.1189V16.9636H5.66388V19.4134ZM14.1613 22.2406H16.6159V19.7903H14.1613V22.2406ZM5.66388 22.2406H8.1189V19.7903H5.66388V22.2406Z\" fill=\"white\"/>\n<path id=\"Fill-21_3\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M42.0298 2.45026H44.4844V0H42.0298V2.45026ZM44.862 5.27746H47.3166V2.82719H44.862V5.27746ZM53.3585 5.27791H55.8126V2.82764H53.3585V5.27791ZM36.3655 10.9323H38.8201V8.48158H36.3655V10.9323ZM36.3655 13.759H38.8201V11.3088H36.3655V13.759ZM56.1902 19.4143H58.6448V16.9636H56.1902V19.4143ZM39.1977 22.2411H41.6518V19.7908H39.1977V22.2411ZM53.3585 25.0678H55.8126V22.6175H53.3585V25.0678ZM42.0298 27.895H44.4844V25.4447H42.0298V27.895Z\" fill=\"white\"/>\n</g>\n<g id=\"PG2\">\n<path id=\"Fill-20_4\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.8261 2.45026H22.2797V0H19.8261V2.45026ZM11.3291 2.45026H13.7828V0H11.3291V2.45026ZM2.83217 5.27791H5.28674V2.82764H2.83217V5.27791ZM25.4899 8.10465H27.9441V5.65439H25.4899V8.10465ZM0 8.1042H2.45457V5.65484H0V8.1042ZM2.83217 13.7595H5.28674V11.3097H2.83217V13.7595ZM19.8252 16.5862H22.2797V14.136H19.8252V16.5862ZM19.8252 19.4134H22.2797V16.9636H19.8252V19.4134ZM16.993 19.4134H19.448V16.9636H16.993V19.4134ZM2.83217 19.4134H5.28674V16.9636H2.83217V19.4134ZM8.4965 22.2406H10.9511V19.7903H8.4965V22.2406ZM2.83217 22.2406H5.28674V19.7903H2.83217V22.2406ZM0 27.895H2.45457V25.4447H0V27.895Z\" fill=\"white\"/>\n<path id=\"Fill-21_4\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M47.6941 2.45026H50.1478V0H47.6941V2.45026ZM47.6937 5.27746H50.1483V2.82719H47.6937V5.27746ZM56.1902 5.27791H58.6448V2.82764H56.1902V5.27791ZM39.1977 5.27791H41.6518V2.82764H39.1977V5.27791ZM56.1902 8.10465H58.6448V5.65439H56.1902V8.10465ZM36.3655 8.1051H38.8201V5.65484H36.3655V8.1051ZM53.3585 13.7595H55.8126V11.3097H53.3585V13.7595ZM33.5329 13.7595H35.9879V11.3097H33.5329V13.7595ZM50.5259 16.5862H52.9804V14.136H50.5259V16.5862ZM47.6937 16.5862H50.1483V14.136H47.6937V16.5862ZM59.0228 16.5858H61.4774V14.1364H59.0228V16.5858ZM36.3655 19.4134H38.8201V16.9636H36.3655V19.4134ZM33.5329 19.4143H35.9879V16.9636H33.5329V19.4143ZM53.3585 22.2411H55.8126V19.7908H53.3585V22.2411ZM36.3655 22.2411H38.8201V19.7908H36.3655V22.2411ZM56.1902 25.0678H58.6448V22.6175H56.1902V25.0678ZM47.6937 25.0683H50.1483V22.618H47.6937V25.0683ZM39.1977 25.0683H41.6518V22.618H39.1977V25.0683ZM47.6941 27.895H50.1478V25.4447H47.6941V27.895ZM44.8615 27.895H47.3166V25.4447H44.8615V27.895Z\" fill=\"white\"/>\n</g>\n<g id=\"PG1\">\n<path id=\"Fill-20_5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.8261 2.45026H22.2797V0H19.8261V2.45026ZM14.1613 2.45026H16.6149V0H14.1613V2.45026ZM5.66478 2.45026H8.118V0H5.66478V2.45026ZM11.3287 5.27791H13.7832V2.82764H11.3287V5.27791ZM22.6573 8.10465H25.1119V5.65439H22.6573V8.10465ZM0 8.1042H2.45457V5.65484H0V8.1042ZM25.4899 13.759H27.9441V11.3088H25.4899V13.759ZM11.3287 19.4134H13.7832V16.9636H11.3287V19.4134ZM8.4965 19.4134H10.9511V16.9636H8.4965V19.4134ZM0 19.4134H2.45457V16.9636H0V19.4134ZM14.1613 22.2406H16.6159V19.7903H14.1613V22.2406ZM0 25.0669H2.45457V22.618H0V25.0669Z\" fill=\"white\"/>\n<path id=\"Fill-21_5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M44.8615 2.45026H47.3166V0H44.8615V2.45026ZM50.5259 5.27746H52.9804V2.82719H50.5259V5.27746ZM36.3655 5.27791H38.8201V2.82764H36.3655V5.27791ZM33.5329 10.9323H35.9879V8.48158H33.5329V10.9323ZM50.5259 13.7595H52.9804V11.3097H50.5259V13.7595ZM36.3655 16.5862H38.8201V14.136H36.3655V16.5862ZM56.1902 16.5867H58.6448V14.1364H56.1902V16.5867ZM33.5329 22.2406H35.9879V19.7903H33.5329V22.2406ZM50.5259 25.0683H52.9804V22.618H50.5259V25.0683ZM42.0294 25.0683H44.4839V22.618H42.0294V25.0683ZM39.1981 27.895H41.6513V25.4447H39.1981V27.895Z\" fill=\"white\"/>\n</g>\n</g>\n</svg>");
                aK(TG, aF ? "<svg id=\"pg-svg-text\" width=\"67\" height=\"5\" viewBox=\"0 0 67 5\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"PG-Title\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 0.00732803V4.5H1.12546V2.80277H2.82616V2.25366H3.4014V0.581392H2.82616V0.00732803H0ZM1.12546 1.70456H2.25093V1.1305H1.12546V1.70456Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.50187 0.00732803V0.581392H3.92664V3.9509H4.50187V4.5H6.7528V3.9509H7.32804V0.581392H6.7528V0.00732803H4.50187ZM5.07711 1.1305H6.20257V3.37683H5.07711V1.1305Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.45349 0.00732803V0.581392H7.90326V3.9509H8.45349V4.5H10.7294V3.9509H11.2796V2.82773H10.1542V3.37683H9.02872V1.1305H10.1542V1.70456H11.2796V0.581392H10.7294V0.00732803H8.45349Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.1058 0.00732803V1.70456H12.9804V0.00732803H11.8549V4.5H12.9804V2.82773H14.1058V4.5H15.2313V2.82773H14.6811V1.70456H15.2313V0.00732803H14.1058Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.8065 0.00732803V4.5H19.1829V3.37683H16.932V2.82773H18.6077V1.70456H16.932V1.1305H19.1829V0.00732803H15.8065Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.7582 0.00732803V1.1305H20.8836V4.5H22.0091V1.1305H23.1346V0.00732803H19.7582Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.3855 0.00732803V0.581392H24.8353V3.9509H25.3855V4.5H27.6364V3.9509H28.2117V1.70456H26.511V2.82773H27.0862V3.37683H25.9607V1.1305H27.6364V0.00732803H25.3855Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M29.3371 0.00732803V0.556432H28.7618V4.5H29.8873V3.37683H31.0128V4.5H32.1382V0.556432H31.563V0.00732803H29.3371ZM29.9123 2.25366H31.0378V1.1305H29.9123V2.25366Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36.1149 0.00732803V0.581392H35.5397V1.1305H34.9894V1.70456H34.4142V1.1305H33.864V0.581392H33.2887V0.00732803H32.7135L32.7385 4.5H33.864V2.82773H34.4142V3.37683H34.9894V2.82773H35.5397V4.5H36.6651V0.00732803H36.1149Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.2403 0.00732803V4.5H40.6167V3.37683H38.3658V2.82773H40.0665V1.70456H38.3658V1.1305H40.6167V0.00732803H37.2403Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M41.7422 0.00732803V0.581392H41.192V2.25366H41.7422V2.82773H43.4429V3.37683H41.192V4.5H44.0181V3.9509H44.5683V2.25366H44.0181V1.70456H42.3174V1.1305H44.5683V0.00732803H41.7422Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M46.8193 0.00732803V0.581392H46.269V2.25366H46.8193V2.82773H48.52V3.37683H46.269V4.5H49.0952V3.9509H49.6454V2.25366H49.0952V1.70456H47.3945V1.1305H49.6454V0.00732803H46.8193Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.7709 0.00732803V0.581392H50.1957V3.9509H50.7709V4.5H53.0218V3.9509H53.5971V0.581392H53.0218V0.00732803H50.7709ZM51.3462 3.37683H52.4716V1.1305H51.3462V3.37683Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M54.1723 0.00732803V4.5H55.2978V2.82773H56.9985V1.70456H55.2978V1.1305H57.5487V0.00732803H54.1723Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.124 0.00732803V1.1305H59.2494V4.5H60.3749V1.1305H61.5004V0.00732803H58.124Z\" fill=\"white\"/>\n<path d=\"M62.7488 1.92186V0.299511H62.2736V0H63.5241V0.299511H63.0239V1.92186H62.7488ZM63.7742 1.92186V0.0249608H64.0994L64.7246 1.24796L65.3249 0.0249608H65.65V1.92186H65.3499V0.623982L64.8997 1.54748H64.5746L64.0744 0.574064V1.89691H63.7742V1.92186Z\" fill=\"white\"/>\n</g>\n</svg>" : "<svg id=\"pg-svg-text\" width=\"48\" height=\"29\" viewBox=\"0 0 48 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"PG-Title\">\n<path id=\"Fill\" d=\"M4.76178 0H0V7.64272H1.90821V4.77452H4.76178V3.81262H5.70714V0.961899H4.76178V0ZM3.81643 2.86821H1.90821V1.90631H3.81643V2.86821ZM7.61535 7.64272H11.4318V6.68082H12.3771V0.961899H11.4318V0H7.61535V0.961899H6.67V6.69831H7.61535V7.64272ZM8.56071 1.90631H10.4689V5.73641H8.56071V1.90631ZM14.2853 7.64272H18.1018V6.68082H19.0471V4.77452H17.1389V5.73641H15.2307V1.90631H17.1389V2.86821H19.0471V0.961899H18.1018V0H14.2853V0.961899H13.34V6.69831H14.2853V7.64272ZM21.9007 4.77452H23.8089V7.64272H25.7171V4.77452H24.7718V2.86821H25.7171V0H23.8089V2.86821H21.9007V0H19.9925V7.64272H21.9007V4.77452ZM32.3696 5.73641H28.5532V4.77452H31.4068V2.86821H28.5532V1.90631H32.3696V0H26.6625V7.64272H32.3696V5.73641ZM33.3325 0V1.90631H35.2407V7.64272H37.1489V1.90631H39.0396V0H33.3325ZM2.85357 14.9532H3.79892V15.9151H1.90821V12.0849H4.76178V10.1611H0.945354V11.123H0V16.8595H0.945354V17.8214H4.76178V16.8595H5.70714V13.0294H2.85357V14.9532ZM11.4318 10.1611H7.61535V11.123H6.67V17.8214H8.57821V15.8976H10.4864V17.8039H12.3946V11.123H11.4493L11.4318 10.1611ZM10.4689 13.9913H8.56071V12.0849H10.4689V13.9913ZM18.0843 12.0849H17.1389V13.0468H16.1936V12.0849H15.2307V11.123H14.2853V10.1611H13.34V17.8039H15.2307V14.9532H16.1936V15.9151H17.1389V14.9532H18.0843V17.8214H19.9925V10.1611H19.0471V11.123H18.1018L18.0843 12.0849ZM20.9553 17.8214H26.6625V15.8976H22.8461V14.9357H25.6996V13.0294H22.8461V12.0675H26.6625V10.1611H20.9553V17.8214ZM28.5707 11.123H27.6253V13.9913H28.5707V14.9532H31.4243V15.9151H27.6078V17.8214H32.3696V16.8595H33.315V13.9913H32.3696V13.0294H29.5161V12.0675H33.3325V10.1611H28.5707V11.123ZM0.945354 21.2842H0V24.1524H0.945354V25.1143H3.79892V26.0762H0V27.9825H4.76178V27.0206H5.70714V24.1524H4.76178V23.1905H1.90821V22.2286H5.72464V20.3223H0.945354V21.2842ZM11.4318 20.3398H7.61535V21.3017H6.67V27.0381H7.61535V28H11.4318V27.0381H12.3771V21.3017H11.4318V20.3398ZM10.4689 26.0762H8.56071V22.2461H10.4689V26.0762ZM13.3225 27.9825H15.2307V25.1143H18.0843V23.208H15.2307V22.2461H19.0471V20.3398H13.3225V27.9825ZM19.9925 22.2461H21.9007V27.9825H23.8089V22.2461H25.7171V20.3398H20.01L19.9925 22.2461Z\" fill=\"white\"/>\n<path id=\"Vector\" d=\"M41.8057 3.25297V0.489694H40.9828V0H43.1186V0.489694H42.3133V3.25297H41.8057ZM43.5563 3.25297V0H44.099L45.1669 2.0812L46.1823 0H46.725V3.25297H46.2173V1.03186L45.447 2.62336H44.8868L44.0465 0.979388V3.25297H43.5563Z\" fill=\"white\"/>\n</g>\n</svg>");
                return TG;
              }({
                'isPortrait': Tp
              });
              Tj.style.transform = Tp ? "scale(1.0)" : "scale(0.7)";
              if (this.rootElement) {
                this.rootElement.appendChild(Tj);
              }
              (function () {
                var Tk;
                var Tg;
                var TG;
                var Tb;
                var TQ;
                var Td;
                var I0 = document.getElementById("PG-Color-Bottom");
                am({
                  'element': document.getElementById("PG-Color-Top"),
                  'duration': 0.5
                });
                am({
                  'element': I0,
                  'duration': 0.5
                });
                for (var I1 = 0x1; I1 <= 0x5; I1++) {
                  am({
                    'element': document.getElementById(aR['PG' + I1]),
                    'duration': 0.5,
                    'delay': 0x1 === I1 ? 0.3 : 0.1 * I1 + 0.3
                  });
                }
                Tk = document.getElementById("PG-Title");
                Tg = document.getElementById("pg-svg-text");
                TG = aX(Tk, "animateTransform");
                Tb = aX(Tg, "animate");
                aU(TG, "attributeName", "transform", "type", "translate", "dur", "1.5s", "values", "0 " + (Td = (TQ = aF ? {
                  'initialPos': 0x32,
                  'bouncePos': -0x5,
                  'finalPos': 0x0
                } : {
                  'initialPos': 0x64,
                  'bouncePos': -0xa,
                  'finalPos': 0x0
                }).initialPos) + "; 0 " + Td + "; 0 " + TQ.bouncePos + "; 0 0", "keyTimes", "0; 0.7; 0.9; 1", "end", "indefinite");
                aU(Tb, "attributeName", "overflow", "dur", "1.5s", "values", "hidden; hidden; visible; visible", "keyTimes", "0; 0.7; " + (aF ? 0.85 : 0.825) + "; 1", "end", "indefinite");
                aN(Tg, "filter", "blur(4px)");
                az = setTimeout(function () {
                  aN(Tg, "transition", "filter 1.4s 0.5s", "filter", "blur(0px)");
                }, 0x0);
                aU(aX(document.getElementById("PG-Logo"), "animateTransform"), "attributeName", "transform", "type", "translate", "dur", "1.5s", "values", "0 0; 0 0; 0 -5; 0 0", "keyTimes", "0; 0.88; 0.91; 1", "end", "indefinite");
                Object.values(aB).forEach(function (I2) {
                  var I3;
                  var I4;
                  I3 = document.getElementById(I2[0x0]);
                  I4 = I2[0x1];
                  aU(aX(I3, "animateTransform"), "attributeName", "transform", "type", "translate", "dur", "1.6s", "values", "0 0; 0 0; 0 -" + I4 + "; 0 0", "keyTimes", "0; 0.83; 0.88; 1", "end", "indefinite");
                });
                (function () {
                  var I2 = document.getElementById("logo-clip-path");
                  var I3 = document.getElementById("svg-logo-container");
                  var I4 = document.getElementById("PG-Title");
                  var I5 = Object.values(aR);
                  var I6 = aF ? "translate(0px, " + I3.clientHeight + "px)" : "translate(" + I3.clientWidth + "px, 0px)";
                  for (var I7 = 0x0; I7 < I4.childElementCount - 0x1; I7++) {
                    var I8 = aX(I2, "path");
                    aU(I8, 'd', I4.children[I7].attributes.d.value, "clip-rule", "evenodd", "fill-rules", "evenodd");
                    aN(I8, "transform", I6);
                  }
                  I5.forEach(function (I9) {
                    var IZ = document.getElementById(I9);
                    var IH = IZ.children;
                    for (var IO = 0x0; IO < IZ.childElementCount - 0x1; IO++) {
                      var IC = aX(I2, "path");
                      if (IH[IO].attributes.d) {
                        aU(IC, 'd', IH[IO].attributes.d.value, "clip-rule", "evenodd", "fill-rules", "evenodd");
                      }
                    }
                  });
                  az = setTimeout(function () {
                    var I9 = document.getElementById("gradient-color");
                    var IZ = document.getElementById("svg-logo-container");
                    var IH = document.getElementById("pg-svg-text");
                    aN(I9, "transition", "opacity 2s linear");
                    aN(IZ, "transition", "opacity 2s linear");
                    aN(IH, "transition", "opacity 2s linear");
                    aS();
                    az = setTimeout(aw, 0x157c);
                    aY = setInterval(function () {
                      aS();
                      az = setTimeout(aw, 0x1f40);
                    }, 0x2ee0);
                  }, 0xdac);
                })();
              })();
          }
        };
        return Tm;
      }(iM);
      var ap = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.on("Shell.Scaled", this.$i);
        };
        Tm.prototype.onDestroy = function () {};
        Tm.prototype.$i = function (TS) {
          var Tw;
          var TE = TS.payload;
          var Tp = this.view.getRootElement(aW);
          if (Tp && (null === (Tw = null == Tp ? undefined : Tp.lastElementChild) || undefined === Tw ? undefined : Tw.lastElementChild)) {
            var Tk = (TE.height / TE.width - 1.7777777777777777) / 0.38888888888888884;
            var Tg = "port" === vx.getOrientationMode() ? 0xe5 - 0xe5 * (0x1 - Tk) * 0.12 : Tm.FOOTER_HEIGHT_LANDSCAPE;
            this.component.updateState(aW, {
              'height': Tg,
              'excessBottom': 0xe5 - Tg
            });
            this.component.updateState(aE, {
              'state': "scale",
              'excessBottom': 0xe5 - Tg
            });
          }
        };
        Tm.FOOTER_HEIGHT_LANDSCAPE = 0x83;
        return Tm;
      }(iD);
      var aj = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS;
          var Tw = this;
          this.T = vx.getOrientationMode();
          this.T = vx.isMobile() || "port" === this.T ? this.T : this.T + "-pc";
          (TS = aL.v("start_button.enable") ? this.te() : this.ne()).addEventListener("click", function (TE) {
            if (Tw.ie) {
              Tw.ie(TE);
            }
          });
          this.rootElement = TS;
        };
        Tm.prototype.onStateChange = function (TS) {
          if (TS.hasOwnProperty("callback")) {
            this.ie = TS.callback;
          }
        };
        Tm.prototype.onShow = function () {
          this.rootElement.classList.remove("start-button-hide");
          this.rootElement.classList.add("start-button-show-".concat(this.T));
        };
        Tm.prototype.onHide = function () {
          this.rootElement.classList.remove("start-button-show");
          this.rootElement.classList.add("start-button-hide");
        };
        Tm.prototype.te = function () {
          var TS = aL.v("start_button.image");
          if (!TS) {
            throw Error("You have enable custom loading bar, but custom loading bar background image path not found!");
          }
          return JQ("<div id=\"__customStartedButton\" class=\"start-button-container-".concat(this.T, "\">") + "<div id=\"get-started-button\" class=\"custom-start-button-inner\" style=\"background-image: " + "url('".concat(Px.resource.resolveUrl(TS), "'); width: ").concat("182px", "; height: ").concat("64px", ';') + "\"></div></div>");
        };
        Tm.prototype.ne = function () {
          var TS = JQ("<div id=\"__startedButton\" class=\"start-button-container-".concat(this.T, " start-button\">") + "<div class=\"start-button-inner\"></div>" + "<p id=\"get-started-text\" class=\"text-".concat(this.T, "\">") + ''.concat(Pm.t("GameShell.GetStarted")) + "</p></div>");
          TS.style.backgroundColor = rA.ThemeColor;
          TS.style.textShadow = "0 1px 2px ".concat(rA.ThemeColor);
          return TS;
        };
        return Tm;
      }(iM);
      var ak = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.ee = function () {
            TS.rootElement.focus();
          };
          TS.re = function (Tw) {
            TS.emit("Error.Occurred", {
              'context': "Unknown",
              'info': {
                'category': "game_shell",
                'domain': 0x4,
                'code': 0x3f2,
                'error': Tw.statusMessage
              },
              'report': true
            }, function () {
              TS.emit("Window.Reload");
            });
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS = document.getElementById("GameCanvas");
          if (!TS) {
            throw Error("Game canvas root element is undefined");
          }
          this.rootElement = TS;
          this.rootElement.style.width = "0px";
          this.rootElement.style.height = "0px";
          this.rootElement.addEventListener("webglcontextlost", this.re);
          this.on("Shell.FocusCanvas", this.ee);
        };
        Tm.prototype.onShow = function () {
          this.rootElement.style.visibility = "visible";
        };
        Tm.prototype.onHide = function () {
          this.rootElement.style.visibility = "hidden";
        };
        return Tm;
      }(iM);
      var ag = function () {
        function Tq(Tm, TS) {
          var Tw = this;
          this.oe = 0xa;
          this.se = 0x0;
          this.ae = '';
          this.ue = undefined;
          this.ce = function () {
            if (Tw.se <= Tw.oe) {
              Tw.ue = r.setTimeout(Tw.ce, 0x19 * Math.pow(Tw.se, 0x2));
              ++Tw.se;
            } else {
              Tw.ue = undefined;
            }
            if (Tw.ie) {
              Tw.ie();
            }
          };
          this.ie = Tm;
          if (TS) {
            this.oe = TS.repeat || 0xa;
            this.ae = TS.name || this.ae;
          }
        }
        Tq.prototype.restart = function () {
          this.se = 0x0;
          this.he();
          this.ce();
        };
        Tq.prototype.he = function () {
          if (undefined !== this.ue) {
            r.clearTimeout(this.ue);
            this.ue = undefined;
          }
        };
        return Tq;
      }();
      function aG() {
        var Tq = r[rQ(0x6)]("48*72*50*500");
        var Tm = 0xa * r.Number("171132480000") + 0x7 * Tq;
        var TS = 0xa * r.Number("120960000");
        var Tw = r.Number("0.5") / 0xa;
        var TE = function (Tp, Tj) {
          var Tk = r[rQ(0x0)].now();
          var Tg = Tk - Tp;
          if (Tp === r[rQ(0x4)].max(Tp, Tk)) {
            Tg = 0x0;
          }
          var TG = Tg / Tj;
          return r[rQ(0x4)].min(0x1, TG * TG);
        }(Tm, TS) * Tw;
        return TE === r[rQ(0x4)].max(TE, r["TEMath".substring(0x2)].random());
      }
      function ab(Tq, Tm) {
        var TS = v4();
        var Tw = TS.B;
        var TE = TS.j;
        var Tp = TS.G;
        var Tj = TS.P;
        var Tk = TS.Z;
        var Tg = "e1f".substring(0x1);
        var TG = "esplit".substring(0x1);
        var Tb = "ae-".substring(0x2);
        var TQ = Tq[TG](Tb);
        return function () {
          return Z3(this, undefined, undefined, function () {
            var Td;
            var I0;
            var I1;
            var I2;
            return Z4(this, function () {
              return Tk && Tw === Tg ? (Td = r.Number("0xf") - r.Number("0x0" + Tk[0x2]), (I0 = TQ[Td]) ? !(I1 = Tk.substring(r.Number("0x3"))) || I1.length <= r.Number("0x4") ? [0x2, 0x0] : (I2 = v2([Tp, TE, Tj, I0]), [0x2, Tm(I2, I1).then(function (I3) {
                return I3 ? 0x1 : 0x0;
              })]) : [0x2, 0x0]) : [0x2, 0x0];
            });
          });
        };
      }
      function aQ() {
        var Tq;
        var Tm = "eSHA-1".substring(0x1);
        var TS = null === (Tq = r.crypto) || undefined === Tq ? undefined : Tq.subtle;
        var Tw = new r.TextEncoder();
        function TE(Tp) {
          return Z3(this, undefined, undefined, function () {
            var Tj;
            return Z4(this, function (Tk) {
              switch (Tk.label) {
                case 0x0:
                  Tj = Tw.encode(Tp).buffer;
                  return [0x4, TS.digest(Tm, Tj)];
                case 0x1:
                  return [0x2, rq(Tk.sent())];
              }
            });
          });
        }
        return function (Tp, Tj, Tk) {
          if (undefined === Tk) {
            Tk = true;
          }
          return Z3(this, undefined, undefined, function () {
            return Z4(this, function (Tg) {
              switch (Tg.label) {
                case 0x0:
                  return Tj && Tp ? [0x4, TE(Tp)] : [0x2, false];
                case 0x1:
                  return [0x2, !(!Tg.sent() || !Tj) && (Tk ? Tg.sent().substring(r.Number("0x0"), Tj.length) === Tj : Tg.sent() === Tj)];
              }
            });
          });
        };
      }
      function ad(Tq) {
        return Z3(this, undefined, undefined, function () {
          var Tm;
          var TS;
          var Tw;
          var TE;
          var Tp;
          var Tj;
          var Tk;
          var Tg = this;
          return Z4(this, function (TG) {
            switch (TG.label) {
              case 0x0:
                return [0x4, rY([rG].concat([rS, aG]))()];
              case 0x1:
                return TG.sent() ? (rQ(0x1), rQ(0x3), Tm = v4(), TS = Tm.B, Tw = function () {
                  return Z3(Tg, undefined, undefined, function () {
                    return Z4(this, function () {
                      return [0x2, 0x0];
                    });
                  });
                }, TE = Object.create(null), "function" == typeof Tq ? (Tj = (Tp = Tq)(0x1), Tk = Tp(0x2), TE["e1f".substring(0x1)] = ab(Tj, aQ()), TE["c2f".substring(0x1)] = function (Tb) {
                  var TQ = v4();
                  var Td = TQ.B;
                  var I0 = TQ.j;
                  var I1 = TQ.P;
                  var I2 = TQ.R;
                  var I3 = "c2f".substring(0x1);
                  return function () {
                    return Z3(this, undefined, undefined, function () {
                      var I4;
                      var I5;
                      var I6;
                      return Z4(this, function () {
                        return I2 && I1 && Td === I3 ? (I4 = vC(I1), I5 = r.decodeURIComponent(I2), I6 = v2([I0, I4]), [0x2, Tb(I6, I5).then(function (I7) {
                          return I7 ? 0x1 : 0x0;
                        })]) : [0x2, 0x0];
                      });
                    });
                  };
                }(function (Tb, TQ) {
                  var Td;
                  var I0;
                  if (undefined === TQ) {
                    TQ = "der";
                  }
                  (function (I9) {
                    I9.ae = "name";
                    I9.le = "namedCurve";
                    I9.fe = "hash";
                    I9.de = "0x1";
                  })(I0 || (I0 = {}));
                  var I1 = "efspki".substring(0x2);
                  var I2 = "ecSHA-256".substring(0x2);
                  var I3 = "eECDSA".substring(0x1);
                  var I4 = "eP-256".substring(0x1);
                  var I6 = null === (Td = r.crypto) || undefined === Td ? undefined : Td.subtle;
                  var I7 = new r.TextEncoder();
                  function I8() {
                    var I9;
                    var IZ;
                    var IH;
                    var IO;
                    var IC;
                    var IL;
                    var Ix;
                    IZ = r.atob(Tb);
                    IH = "esplit".substring(0x1);
                    IO = "aejoin".substring(0x2);
                    IC = "eincludes".substring(0x1);
                    IL = "ae-".substring(0x2);
                    Ix = "r\n".substring(0x1);
                    var Iv = IZ[IH](Ix).filter(function (II) {
                      return 0x0 != II.length && !II[IC](IL);
                    })[IO](Ix);
                    var IP = v3(Iv);
                    (I9 = {
                      [I0.le]: I4
                    })[I0.ae] = I3;
                    var IT = null == I6 ? undefined : I6.importKey(I1, IP.buffer, I9, false, ["verify"]);
                    return r.Promise.resolve(IT);
                  }
                  return function (I9, IZ) {
                    return Z3(this, undefined, undefined, function () {
                      var IH;
                      var IO;
                      var IC;
                      var IL;
                      var Ix;
                      var Iv;
                      return Z4(this, function (IP) {
                        switch (IP.label) {
                          case 0x0:
                            if (!I9 || !IZ) {
                              return [0x2, false];
                            }
                            IP.label = 0x1;
                          case 0x1:
                            IP.trys.push([0x1, 0x4,, 0x5]);
                            return [0x4, I8()];
                          case 0x2:
                            return (IH = IP.sent()) ? ((Ix = {})[I0.ae] = I3, Ix[I0.fe] = ((Iv = {})[I0.ae] = I2, Iv), IO = Ix, IC = v3(IZ), "der" === TQ && (IC = function (IJ) {
                              var IT;
                              var II = r.Array.from(IJ, function (IW) {
                                return ('00' + IW.toString(0x10)).slice(-0x2);
                              }).join('');
                              var IV = 0x2 * r.parseInt(II.substr(0x6, 0x2), 0x10);
                              var ID = II.substr(0x8, IV);
                              var IM = II.substr(0xc + IV);
                              ID = ID.length > 0x40 ? ID.substr(-0x40) : ID.padStart(0x40, '0');
                              IM = IM.length > 0x40 ? IM.substr(-0x40) : IM.padStart(0x40, '0');
                              var IA = ''.concat(ID).concat(IM);
                              return new r.Uint8Array((null === (IT = IA.match(/[\da-f]{2}/gi)) || undefined === IT ? undefined : IT.map(function (IW) {
                                return r.parseInt(IW, 0x10);
                              })) || []);
                            }(IC)), IL = I7.encode(I9).buffer, [0x4, null == I6 ? undefined : I6.verify(IO, IH, IC, IL)]) : [0x2, false];
                          case 0x3:
                            return [0x2, !!IP.sent()];
                          case 0x4:
                            IP.sent();
                            return [0x2, false];
                          case 0x5:
                            return [0x2];
                        }
                      });
                    });
                  };
                }(Tk))) : TE["e1f".substring(0x1)] = ab(Tq, aQ()), [0x4, (TE[TS] || Tw)()]) : [0x3, 0x3];
              case 0x2:
                return [0x2, 0x1 === TG.sent()];
              case 0x3:
                return [0x2, true];
            }
          });
        });
      }
      var e0;
      var e1 = "undefined" != typeof navigator && parseFloat(('' + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0x0, ''])[0x1]).replace("undefined", "3_2").replace('_', '.').replace('_', '')) < 0xa && !r.MSStream;
      var e2 = "wakeLock" in navigator;
      var e3 = function () {
        function Tq() {
          var Tm = this;
          if (e2) {
            this.Ae = null;
          } else if (e1) {
            this.noSleepTimer = null;
          } else {
            this.noSleepVideo = document.createElement("video");
            this.noSleepVideo.setAttribute("title", "No Sleep");
            this.noSleepVideo.setAttribute("playsinline", '');
            this.noSleepVideo.setAttribute('id', "nosleep");
            this.ve(this.noSleepVideo, "mp4", "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA=");
            this.noSleepVideo.addEventListener("loadedmetadata", function () {
              if (Tm.noSleepVideo.duration <= 0x1) {
                Tm.noSleepVideo.setAttribute("loop", '');
              } else {
                Tm.noSleepVideo.addEventListener("timeupdate", function () {
                  if (Tm.noSleepVideo.currentTime > 0.5) {
                    Tm.noSleepVideo.currentTime = Math.random();
                  }
                });
              }
            });
          }
        }
        Tq.prototype.ve = function (Tm, TS, Tw) {
          var TE = document.createElement("source");
          TE.src = Tw;
          TE.type = "video/".concat(TS);
          Tm.appendChild(TE);
        };
        Tq.pe = function () {
          var Tm = ["data:video/mp4;base64,1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g", "data:video/mp4;base64,LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg=="];
          return ad(function (TS) {
            return Tm[r.Number(TS - 0x1)].split(',')[0x1];
          }).then(function (TS) {
            return r.String(TS).substring(r.Number("0x0"), r.Number("0x3"));
          });
        };
        Object.defineProperty(Tq.prototype, "nativeWakeLock", {
          'get': function () {
            return e2;
          },
          'enumerable': false,
          'configurable': true
        });
        Tq.prototype.handleVisibilityChange = function () {
          if (null !== this.Ae && "visible" === document.visibilityState) {
            this.enable();
          }
        };
        Tq.prototype.enable = function () {
          var Tm = this;
          if (e2) {
            navigator.wakeLock.request("screen").then(function (Tw) {
              Tm.Ae = Tw;
              Tm.Ae.addEventListener("release", function () {});
            })["catch"](function () {});
          } else if (e1) {
            this.disable();
            this.noSleepTimer = r.setInterval(function () {
              if (!document.hidden) {
                r.location.href = r.location.href.split('#')[0x0];
                r.setTimeout(r.stop, 0x0);
              }
            }, 0x3a98);
          } else {
            try {
              var TS = this.noSleepVideo.play();
              if (TS instanceof Promise) {
                TS["catch"](function () {});
              }
            } catch (Tw) {}
          }
        };
        Tq.prototype.disable = function () {
          if (e2) {
            if (this.Ae) {
              this.Ae.release();
            }
            this.Ae = null;
          } else if (e1) {
            if (this.noSleepTimer) {
              r.clearInterval(this.noSleepTimer);
              this.noSleepTimer = null;
            }
          } else if (this.noSleepVideo) {
            this.noSleepVideo.pause();
          }
        };
        return Tq;
      }();
      var e4 = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.ge = 0x0;
          TS.me = undefined;
          TS.be = document.getElementById("background-img");
          TS._e = 0x0;
          TS.we = 0x0;
          TS.xe = false;
          TS.ye = function () {
            var Tw = TS.rootElement.clientWidth;
            var TE = TS.rootElement.clientHeight;
            if (!(TS.we === Tw && TS._e === TE)) {
              TS.we = Tw;
              TS._e = TE;
              if (!TS.me) {
                TS.ge = TS.rootElement.clientHeight;
              }
              TS.emit("Shell.Resized");
              TS.He();
            }
          };
          TS.Se = function (Tw) {
            var TE;
            TS.me = undefined;
            if (!(null === (TE = Tw.target) || undefined === TE)) {
              TE.removeEventListener("blur", TS.Se);
            }
            TS.rootElement.style.height = "100%";
            TS.rootElement.style.top = "auto";
            TS.rootElement.style.position = "fixed";
            TS.emit("Shell.EnableAutoScroll", true);
            TS.emit("Shell.ForceResize");
            TS.me = undefined;
            if (TS.be) {
              TS.be.style.height = "110%";
            }
            TS.emit("Shell.InputBlurred");
          };
          TS.Ve = function () {
            var Tw;
            if (!(null === (Tw = TS.rootElement) || undefined === Tw)) {
              Tw.removeEventListener("click", TS.Ve, false);
            }
            if (!TS.ke) {
              TS.ke = new e3();
              if (TS.ke.nativeWakeLock) {
                TS.on("Shell.VisibilityChange", TS.ke.handleVisibilityChange.bind(TS.ke));
                TS.on("Shell.FullScreenChange", TS.ke.handleVisibilityChange.bind(TS.ke));
              }
            }
            TS.ke.enable();
          };
          TS.Ee = function (Tw) {
            var TE;
            var Tp = Tw.payload;
            if (!("object" == typeof Tp && null !== Tp)) {
              Tp = {
                'enable': !!Tp,
                'isInteracting': false
              };
            }
            if (!Tp.enable) {
              if (TS.ke) {
                TS.ke.disable();
              }
              return void (TS.ke = undefined);
            }
            if (Tp.isInteracting) {
              TS.Ve();
            } else if (!(null === (TE = TS.rootElement) || undefined === TE)) {
              TE.addEventListener("click", TS.Ve, false);
            }
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS;
          var Tw = document.getElementById("game-shell");
          if (!Tw) {
            throw Error("Game shell root element is undefined");
          }
          this.rootElement = Tw;
          this.rootElement.className = "game-shell";
          this.view.register(Tm, "shell");
          if (vx.isMobile()) {
            this.on("Shell.InputFocused", this.Ce);
          }
          TS = true;
          if ("ucbrowser" === vx.getBrowserType().toLowerCase()) {
            TS = false;
          }
          if (vx.isIOS() && vx.getOSMajorVersion() < 0xb || vx.getBrowserBaseType().toLowerCase() === "safari webview") {
            TS = false;
          }
          if (vx.isAndroid() && vx.getOSMajorVersion() < 0x6) {
            TS = false;
          }
          if (TS) {
            this.on("Shell.ToggleNoSleep", this.Ee);
          }
          this.on("Shell.WindowResized", this.Me);
          if (vx.audioSupported) {
            this.At = vx.audioContext;
            if (vx.isIOS()) {
              var TE = vx.getOSVersion();
              var Tp = '-1' !== TE && !vx.isIOSStandalone() && iK(TE, ">=17.4");
              this.on("Shell.VisibilityChange", this.Be.bind(this, Tp));
              if (Tp) {
                this.on("Shell.CanvasTouchEnded", this.je);
                this.on("Shell.Clicked", this.je);
              }
            } else if (vx.isSafari()) {
              var Tj = vx.getBrowserBaseVersion();
              Tp = '-1' !== Tj && iK(Tj, ">=17.4");
              r.addEventListener("focus", this.Be.bind(this, Tp));
              if (Tp) {
                this.on("Shell.Clicked", this.je);
                this.on("Shell.CanvasKeyDown", this.je);
                this.on("Shell.KeyDown", this.je);
              }
            }
          }
          this.on("Shell.EnableSleep", this.Ge);
          if ("none" === vx.getResizeMode()) {
            this.rootElement.style.height = ''.concat(vx.getHeight(), 'px');
            this.rootElement.style.width = ''.concat(vx.getWidth(), 'px');
          }
          this.Pe = new ag(this.ye, {
            'name': "GameShellResize"
          });
        };
        Tm.prototype.onShow = function () {
          this.rootElement.style.visibility = "visible";
        };
        Tm.prototype.onHide = function () {
          this.rootElement.style.visibility = "hidden";
        };
        Tm.prototype.Me = function () {
          this.emit("Shell.Resized");
          this.He();
          this.Pe.restart();
        };
        Tm.prototype.He = function () {
          var TS = new CustomEvent("resize");
          TS.__$dispatched = true;
          r.dispatchEvent(TS);
        };
        Tm.prototype.Ce = function () {
          var TS;
          if (!this.me) {
            this.me = document.activeElement || undefined;
            if (!(null === (TS = this.me) || undefined === TS)) {
              TS.addEventListener("blur", this.Se);
            }
            this.emit("Shell.EnableAutoScroll", false);
            this.rootElement.style.height = this.ge + 'px';
            this.rootElement.style.position = "absolute";
            if (this.be) {
              this.be.style.height = "100%";
            }
          }
        };
        Tm.prototype.Be = function (TS) {
          if (undefined === TS) {
            TS = false;
          }
          var Tw = this.At;
          if (!((document.visibilityState ? "visible" !== document.visibilityState : document.hidden) || undefined === Tw || "interrupted" !== Tw.state && "suspended" !== Tw.state || this.xe)) {
            if (TS) {
              this.xe = true;
            } else {
              Tw.resume();
            }
          }
        };
        Tm.prototype.je = function () {
          if (this.xe) {
            this.At.resume();
            this.xe = false;
          }
        };
        Tm.prototype.Ge = function (TS) {
          return Z3(this, undefined, undefined, function () {
            var Tw;
            var TE;
            return Z4(this, function (Tp) {
              switch (Tp.label) {
                case 0x0:
                  if (!this.Ze) {
                    this.Ze = e3.pe();
                  }
                  if (null != TS.payload) {
                    return [0x3, 0x4];
                  }
                  TS.intercept();
                  Tp.label = 0x1;
                case 0x1:
                  Tp.trys.push([0x1, 0x3,, 0x4]);
                  return [0x4, this.Ze];
                case 0x2:
                  Tw = Tp.sent();
                  TS.response = "tru" === Tw;
                  TS.propagate();
                  return [0x3, 0x4];
                case 0x3:
                  TE = Tp.sent();
                  TS.error = TE;
                  TS.propagate();
                  return [0x3, 0x4];
                case 0x4:
                  return [0x2];
              }
            });
          });
        };
        return Tm;
      }(iM);
      function e5() {
        return Z3(this, undefined, undefined, function () {
          var Tq;
          var Tm;
          var TS;
          return Z4(this, function (Tw) {
            switch (Tw.label) {
              case 0x0:
                Tq = function () {
                  var TE;
                  if (x.String.prototype.isPrototypeOf(x.GtmId)) {
                    TE = x.String(x.GtmId);
                  }
                  return TE;
                }();
                Tm = function (TE) {
                  var Tp;
                  return function () {
                    if (!Tp) {
                      Tp = function () {
                        var Tj;
                        var Tk;
                        return Z3(this, undefined, undefined, function () {
                          var Tg;
                          var TG;
                          var Tb;
                          var TQ;
                          return Z4(this, function (Td) {
                            switch (Td.label) {
                              case 0x0:
                                return undefined === TE ? [0x2, undefined] : (Tg = "google_tag_manager", TG = "dataLayer", Tb = function (I0, I1) {
                                  return Z3(this, undefined, undefined, function () {
                                    return Z4(this, function () {
                                      return [0x2, new x.Promise(function (I2) {
                                        var I3 = x.dataLayer;
                                        var I4 = I1 ? I1.length : 0x0;
                                        var I5 = I4 % 0x2 ? (I4--, I1.pop()) : undefined;
                                        var I6 = {};
                                        var I7 = 0x0;
                                        for (var I8 = I4; I7 < I8; I7++) {
                                          I6[I1[I7]] = I1[++I7];
                                        }
                                        I6.event = "gtm_cb";
                                        I6.eventCallback = function (I9) {
                                          if (!(undefined !== I5 && I9 !== I5)) {
                                            I2();
                                          }
                                        };
                                        I3.push(I6);
                                      })];
                                    });
                                  });
                                }(0x0, [TE]), TQ = new r.Promise(function (I0) {
                                  r.setTimeout(I0, 0x61a8);
                                }), [0x4, x.Promise.race([Tb, TQ])]);
                              case 0x1:
                                Td.sent();
                                return [0x2, null === (Tk = null === (Tj = x[Tg]) || undefined === Tj ? undefined : Tj[TE]) || undefined === Tk ? undefined : Tk[TG]];
                            }
                          });
                        });
                      }();
                    }
                    return x.Promise.resolve(Tp);
                  };
                }(Tq);
                TS = function (TE, Tp) {
                  return function () {
                    return Z3(this, undefined, undefined, function () {
                      var Tj;
                      var Tk;
                      return Z4(this, function (Tg) {
                        switch (Tg.label) {
                          case 0x0:
                            return TE ? [0x4, Tp()] : [0x2, 0x2];
                          case 0x1:
                            return (Tj = Tg.sent()) ? [0x2, Tj.get("gtm_var.id") === TE ? 0x1 : 0x2] : (Tk = x.google_tag_manager) && null == Tk[TE] ? [0x2, 0x2] : [0x2, 0x0];
                        }
                      });
                    });
                  };
                }(Tq, Tm);
                return [0x4, TS()];
              case 0x1:
                return [0x2, 0x3 !== Tw.sent()];
            }
          });
        });
      }
      var e6 = function (Tq) {
        e0 = Tq;
      };
      function e7(Tq, Tm) {
        var TS = false;
        e0.event.on("Shell.BootStateChanged", function Tp(Tj) {
          if (!TS) {
            if (Tj.payload === Tq) {
              TS = true;
              Tm();
              r.Promise.resolve(0x0).then(function () {
                return e0.event.off("Shell.BootStateChanged", Tp, undefined);
              });
            }
          }
        }, undefined);
      }
      var eC = function (Tq, Tm) {
        var TS = Tq.indexOf(r.String.fromCharCode(Tm));
        return -0x1 !== TS ? Tq.substring(TS + 0x1) : Tq;
      };
      function ex(Tq) {
        return ["c ont ext", "eve nt", "em it "][Tq].split('').filter(function (Tm) {
          return " " !== Tm;
        }).join('');
      }
      function ev(Tq) {
        return function () {
          var Tm = "Ma01th".replace(/[0-9]/g, '');
          var TS = r[Tm];
          var Tw = 0x0;
          if (undefined === Tq) {
            Tq = TS.random() * r.Number("0xf") | 0x0;
          }
          var TE = function (Tp) {
            var Tk;
            var Tg = ["Game.ViewLoading", "Game.ViewError", "Game.ViewSuccess", "Game.ViewWarning", "Game.ViewPopulated"].map(function (TG) {
              return TG.substring(0x4);
            });
            Tk = Tg.length;
            return Tg[(Tp % Tk + Tk) % Tk];
          }(Tq);
          r["shell1".replace(/[0-9]/g, '')][ex(Tw++)][ex(Tw++)][ex(Tw++)]("Game".concat(TE));
        };
      }
      var eP;
      var eJ = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Re = false;
          TS.Oe = false;
          TS.De = 0x1;
          TS.Ne = 0x0;
          TS.Qe = 0x0;
          TS.Te = vx.getOrientation();
          TS.Le = function (Tw) {
            if (!(Tw && Tw.__$dispatched)) {
              if ("none" !== vx.getResizeMode()) {
                TS.emit("Shell.WindowResized");
                TS.Pe.restart();
              }
            }
          };
          TS.Ie = function () {
            var Tw = vx.getWidth();
            var TE = vx.getHeight();
            if (!(TS.Qe === Tw && TS.Ne === TE)) {
              TS.Qe = Tw;
              TS.Ne = TE;
              TS.emit("Shell.WindowResized");
            }
          };
          TS.Fe = function () {
            TS.emit("Shell.OrientationChanged");
            TS.We.restart();
          };
          TS.ze = function () {
            var Tw = vx.getOrientation();
            if (TS.Te !== Tw) {
              TS.Te = Tw;
              TS.emit("Shell.OrientationChanged");
            }
          };
          TS.Ue = function (Tw) {
            if (!TS.qe(Tw)) {
              TS.Re = true;
              TS.emit("Shell.TouchStarted", Tw);
            }
          };
          TS.Ye = function (Tw) {
            if (!TS.qe(Tw)) {
              TS.Re = true;
              TS.emit("Shell.TouchMoved", Tw);
            }
          };
          TS.Je = function (Tw) {
            if (!TS.qe(Tw)) {
              TS.Re = false;
              TS.emit("Shell.TouchEnded", Tw);
            }
          };
          TS.Xe = function (Tw) {
            if (!TS.qe(Tw)) {
              TS.Re = false;
              TS.emit("Shell.TouchCancelled", Tw);
            }
          };
          TS.Ke = function () {
            TS.emit("Shell.MouseDown");
          };
          TS.$e = function () {
            TS.emit("Shell.MouseUp");
          };
          TS.tr = function (Tw) {
            TS.emit("Shell.KeyDown", Tw);
          };
          TS.nr = function (Tw) {
            TS.emit("Shell.KeyUp", Tw);
          };
          TS.ir = function (Tw) {
            TS.emit("Shell.CanvasTouchStarted", Tw);
          };
          TS.rr = function (Tw) {
            TS.emit("Shell.CanvasTouchMoved", Tw);
          };
          TS.sr = function (Tw) {
            TS.emit("Shell.CanvasTouchEnded", Tw);
          };
          TS.ar = function (Tw) {
            TS.emit("Shell.CanvasTouchCancelled", Tw);
          };
          TS.ur = function () {
            TS.cr = Date.now();
            if (undefined !== TS.hr) {
              if (!TS.Oe) {
                TS.emit("Shell.ScrollMoved");
              }
            } else {
              TS.hr = r.setInterval(TS.lr, 0x64);
              if (!TS.Oe) {
                TS.emit("Shell.ScrollStarted");
                TS.emit("Shell.ScrollMoved");
              }
            }
          };
          TS.dr = function (Tw) {
            TS.emit("Shell.VisibilityChange", Tw);
          };
          TS.Ar = function (Tw) {
            TS.emit("Shell.FullScreenChange", Tw);
          };
          TS.lr = function () {
            if (!(Date.now() - TS.cr <= 0x1f4 || TS.Re)) {
              r.clearInterval(TS.hr);
              TS.hr = undefined;
              if (TS.Oe) {
                TS.Oe = false;
              } else {
                TS.emit("Shell.ScrollEnded");
                if (TS.De > 0x0) {
                  TS.vr();
                }
              }
            }
          };
          TS.pr = function (Tw) {
            r.setTimeout(function () {
              TS.vr();
            }, 0x1f4);
            TS.emit("Shell.FocusCanvas", Tw);
          };
          TS.gr = function (Tw) {
            TS.emit("Shell.OnBlur", Tw);
          };
          TS.mr = function (Tw) {
            var TE = TS.view.getRootElement(aj);
            var Tp = TS.view.getRootElement(ak);
            var Tj = Tp ? Tp.parentElement : undefined;
            if (!(Tw.target !== Tj && Tw.target !== TE && Tw.target !== TS.view.getRootElement(e4))) {
              TS.emit("Shell.FocusCanvas");
            }
            TS.emit("Shell.Clicked");
          };
          TS.br = function () {
            TS.emit("Shell.CanvasClicked");
          };
          TS._r = function () {
            TS.emit("Shell.CanvasMouseDown");
          };
          TS.wr = function () {
            TS.emit("Shell.CanvasMouseUp");
          };
          TS.yr = function (Tw) {
            TS.emit("Shell.CanvasKeyDown", Tw);
          };
          TS.Hr = function (Tw) {
            TS.emit("Shell.CanvasKeyUp", Tw);
          };
          TS.Sr = function (Tw) {
            Tw.returnValue = "Do you want to leave this site?";
            return Tw.returnValue;
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.Pe = new ag(this.Ie, {
            'name': "Resize"
          });
          this.We = new ag(this.ze, {
            'name': "Orientation"
          });
          this.on("Shell.BootStateChanged", this.Vr);
          this.on("Shell.EnableAutoScroll", this.kr);
          this.on("Shell.ForceResize", this.Er);
          if (this.Cr()) {
            this.on("Shell.EnableUnloadAlert", this.Mr);
          }
          this.Br();
          this.Le();
        };
        Tm.prototype.Br = function () {
          var TS = this;
          document.addEventListener("visibilitychange", this.dr);
          ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange"].forEach(function (Tj) {
            document.addEventListener(Tj, TS.Ar);
          });
          r.addEventListener("resize", this.Le);
          r.addEventListener("focus", this.pr);
          r.addEventListener("blur", this.gr);
          if (vx.isSafari()) {
            r.addEventListener("pagehide", this.dr);
          }
          if (vx.isMobile()) {
            r.addEventListener("orientationchange", this.Fe);
          }
          var Tw = this.view.getRootElement(e4);
          var TE = !!this.jr() && {
            'passive': false,
            'capture': false
          };
          if (Tw) {
            Tw.addEventListener("touchstart", this.Ue, TE);
            Tw.addEventListener("touchmove", this.Ye, TE);
            Tw.addEventListener("touchend", this.Je, TE);
            Tw.addEventListener("touchcancel", this.Xe, TE);
            Tw.addEventListener("click", this.mr, TE);
            Tw.addEventListener("mousedown", this.Ke, TE);
            Tw.addEventListener("mouseup", this.$e, TE);
            Tw.addEventListener("keydown", this.tr, TE);
            Tw.addEventListener("keyup", this.nr, TE);
          }
          if (TE) {
            this.Gr();
          }
          var Tp = this.view.getRootElement(ak);
          if (Tp) {
            Tp.addEventListener("touchstart", this.ir, TE);
            Tp.addEventListener("touchmove", this.rr, TE);
            Tp.addEventListener("touchend", this.sr, TE);
            Tp.addEventListener("touchcancel", this.ar, TE);
            Tp.addEventListener("click", this.br, TE);
            Tp.addEventListener("mousedown", this._r, TE);
            Tp.addEventListener("mouseup", this.wr, TE);
            Tp.addEventListener("keydown", this.yr, TE);
            Tp.addEventListener("keyup", this.Hr, TE);
          }
        };
        Tm.prototype.Mr = function (TS) {
          if (TS.payload) {
            r.addEventListener("beforeunload", this.Sr);
          } else {
            r.removeEventListener("beforeunload", this.Sr);
          }
        };
        Tm.prototype.Gr = function () {
          var TS = new r.Promise(function (TE) {
            e7("ProjectLoadComplete", TE);
          });
          var Tw = e5();
          r.Promise.all([Tw, TS]).then(function (TE) {
            if (!TE[0x0]) {
              (function () {
                var Tp;
                var Tj = function (Tg) {
                  var TG = ["enable", " di sable", " start", "pa use", "s  top"].map(function (I0) {
                    return I0.replace(/[^a-zA-Z=]/g, '');
                  });
                  var Tb = TG.length;
                  var TQ = eC("lmMath", r.Number("0x006d"));
                  var Td = r[TQ];
                  if ("string" == typeof Tg) {
                    Tg = TG.indexOf(Tg);
                  } else if (!Number.isInteger(Tg)) {
                    Tg = -0x1;
                  }
                  if (Tg < 0x0 || Tg > Tb) {
                    Tg = Td.random() * Tb + 0.5 | 0x0;
                  }
                  return TG[Tg];
                }(-0x1);
                var Tk = eC("TOemit", r.Number("0x004F"));
                if (!(null === (Tp = r.opusAudio) || undefined === Tp)) {
                  Tp[Tk](Tj);
                }
                (r.audioPool = r.audioPool || new r.Set()).add(Tj);
              })();
            }
          });
        };
        Tm.prototype.Vr = function (TS) {
          if ("GameStarted" === TS.payload) {
            r.removeEventListener("resize", this.Le);
            r.addEventListener("resize", this.Le);
          }
        };
        Tm.prototype.kr = function (TS) {
          if (TS.payload) {
            ++this.De;
            if (0x1 === this.De) {
              this.vr();
            }
          } else {
            --this.De;
          }
        };
        Tm.prototype.vr = function () {
          var TS = vx.isIOS();
          var Tw = vx.getOSMajorVersion();
          r.scrollTo(0x0, TS && Tw < 0xd ? vx.getHeight() / 0x2 : 0x0);
          this.Oe = true;
          this.ur();
        };
        Tm.prototype.Er = function () {
          this.Le();
        };
        Tm.prototype.qe = function (TS) {
          return !TS || !TS.touches || TS.touches.length > 0x1 && (TS.stopPropagation(), TS.preventDefault(), true);
        };
        Tm.prototype.jr = function () {
          var TS = false;
          try {
            var Tw = {
              get 'passive'() {
                TS = true;
                return true;
              }
            };
            r.addEventListener("test", null, Tw);
            r.removeEventListener("test", null, Tw);
          } catch (TE) {
            TS = false;
          }
          return TS;
        };
        Tm.prototype.Cr = function () {
          if (vx.getBrowserBaseType().toLowerCase() === "safari webview") {
            return false;
          }
          if ("chrome webview" === vx.getBrowserBaseType().toLowerCase()) {
            return false;
          }
          if ("chrome" !== vx.getBrowserBaseType().toLowerCase()) {
            return true;
          }
          var TS = vx.getBrowserBaseVersion().split('.');
          try {
            if (TS.length > 0x0 && parseInt(TS[0x0], 0xa) >= 0x35) {
              return true;
            }
          } catch (Tw) {}
          return false;
        };
        return Tm;
      }(iD);
      var eT = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Pr = {
            'scale': 0x1,
            'width': 0x0,
            'height': 0x0,
            'rotate': 0x0,
            'adjust': undefined
          };
          TS.Vr = function (Tw) {
            switch (Tw.payload) {
              case "PluginLoadComplete":
              case "LatePluginLoadComplete":
                TS.Zr();
                break;
              case "GameStarted":
                TS.off("Shell.BootStateChanged", TS.Vr);
            }
          };
          TS.Le = function () {
            var Tw;
            var TE = vx.isIOSStandalone();
            var Tp = vx.isMobile();
            if (!(TS._e === vx.getHeight() && TS.we === vx.getWidth())) {
              TS._e = vx.getHeight();
              TS.we = vx.getWidth();
              document.body.style.height = TS._e + 'px';
              document.body.style.width = TS.we + 'px';
            }
            var Tj = TS.view.getRootElement(e4);
            var Tk = Tj && !(Tp && TE);
            var Tg = Tj.clientWidth;
            var TG = Tj.clientHeight;
            if (!Tk) {
              Tg = vx.getWidth();
              TG = vx.getHeight();
            }
            var Tb = vx.getOrientationMode();
            var TQ = vx.getWidth() > vx.getHeight();
            if ("land" === Tb) {
              if (!(Tp && !TQ)) {
                Tg = (Tw = [TG, Tg])[0x0];
                TG = Tw[0x1];
              }
              TS.Pr.rotate = Tp && !TQ ? 0x5a : 0x0;
            }
            var Td = TG / Tg;
            if (Td < vx.getAscpectRatioSupport().MinRatio) {
              Tg = TG / (Td = vx.getAscpectRatioSupport().MinRatio);
            } else {
              TG = Td > vx.getAscpectRatioSupport().MaxRatio ? Tg * (Td = vx.getAscpectRatioSupport().MaxRatio) : Tg * Td;
            }
            if ("land" === Tb) {
              TS.Pr.height = Tm.DESIGN_WIDTH;
              TS.Pr.width = Math.round(TS.Pr.height * Td);
            } else {
              TS.Pr.width = Tm.DESIGN_WIDTH;
              TS.Pr.height = Math.round(TS.Pr.width * Td);
            }
            TS.Pr.scale = Math.ceil(Tg) / Tm.DESIGN_WIDTH;
            TS.emit("Shell.Scaled", TS.Pr);
          };
          TS.Rr = function (Tw) {
            Tw.response = TS.getLastScaleEvent();
          };
          TS.Or = function (Tw, TE, Tp) {
            if (Tw) {
              var Tj = TS.Pr.width;
              var Tk = TS.Pr.height;
              var Tg = TS.Pr.scale;
              var TG = TS.Pr.rotate;
              switch (TE) {
                case "CssTransform":
                  Tw.style.transform = "scale(".concat(Tg, ") rotate(").concat(TG, "deg)");
                  break;
                case "CssTransformWidthHeight":
                  Tw.style.transform = "scale(".concat(Tg, ") rotate(").concat(TG, "deg");
                  Tw.style.width = ''.concat(Tj, 'px');
                  Tw.style.height = ''.concat(Tk, 'px');
                  var Tb = Tw.parentElement;
                  if (Tb) {
                    var TQ = (Tb.clientWidth - Tj) / 0x2;
                    Tw.style.left = TQ + 'px';
                    Tw.style.right = TQ + 'px';
                  }
                  break;
                case "WidthHeight":
                  Tw.style.width = ''.concat(Tj * Tg, 'px');
                  Tw.style.height = ''.concat(Tk * Tg, 'px');
                  break;
                case "DesignWidthHeight":
                  Tw.style.width = ''.concat(Tj, 'px');
                  Tw.style.height = ''.concat(Tk, 'px');
              }
              var Td = TS.view.getRootElement(e4);
              if (Tp && Tp.alignTopLeft) {
                var I0;
                var I1 = undefined;
                var I2 = undefined;
                var I3 = undefined;
                var I4 = Math.round(Tj * Tg);
                var I5 = Math.round(Tk * Tg);
                if (vx.isMobile()) {
                  I1 = vx.getWidth();
                  I2 = vx.getHeight();
                } else {
                  I1 = (null == Td ? undefined : Td.clientWidth) || vx.getWidth();
                  I2 = (null == Td ? undefined : Td.clientHeight) || vx.getHeight();
                }
                if (0x0 === TG) {
                  I3 = (I1 - I4) / 0x2;
                  I0 = (I2 - I5) / 0x2;
                } else {
                  I3 = (I1 - I5) / 0x2 + I5;
                  I0 = (I2 - I4) / 0x2;
                }
                I3 = Math.round(I3) % 0x2 == 0x0 ? Math.round(I3) : Math.floor(I3);
                I0 = Math.round(I0) % 0x2 == 0x0 ? Math.round(I0) : Math.floor(I0);
                Tw.style.left = ''.concat(I3, 'px');
                Tw.style.top = ''.concat(I0, 'px');
              }
            }
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.Pr.adjust = this.Or.bind(this);
          this.on("Shell.Resized", this.Le);
          this.on("Shell.OrientationChanged", this.Le);
          this.on("Shell.BootStateChanged", this.Vr);
          this.on("Shell.GetScale", this.Rr);
          this.Zr();
        };
        Tm.prototype.getLastScaleEvent = function () {
          return this.Pr;
        };
        Tm.prototype.Zr = function () {
          this.Le();
        };
        Tm.DESIGN_WIDTH = 0x168;
        return Tm;
      }(iD);
      var eI = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS;
          var Tw = document.getElementById("background-img");
          if (Tw) {
            this.rootElement = document.createElement("div");
            this.rootElement.id = "canvas-shadow";
            if (!(null === (TS = Tw.parentNode) || undefined === TS)) {
              TS.insertBefore(this.rootElement, Tw.nextSibling);
            }
          }
        };
        Tm.prototype.onStateChange = function (TS) {
          if (TS.scaleEvent && this.rootElement) {
            this.rootElement.style.height = TS.scaleEvent.height * TS.scaleEvent.scale - 0x2 + 'px';
            this.rootElement.style.width = TS.scaleEvent.width * TS.scaleEvent.scale - 0x2 + 'px';
            var Tw = this.view.getRootElement(e4);
            var TE = (Tw.clientWidth - TS.scaleEvent.width * TS.scaleEvent.scale) / 0x2;
            var Tp = (Tw.clientHeight - TS.scaleEvent.height * TS.scaleEvent.scale) / 0x2;
            TE = Math.round(TE);
            Tp = Math.round(Tp);
            this.rootElement.style.left = ''.concat(TE, 'px');
            this.rootElement.style.top = ''.concat(Tp, 'px');
            this.rootElement.style.transform = "rotate(".concat(TS.scaleEvent.rotate, "deg)");
          }
        };
        Tm.prototype.onShow = function () {
          if (this.rootElement) {
            this.rootElement.style.visibility = "visible";
          }
        };
        Tm.prototype.onHide = function () {
          if (this.rootElement) {
            this.rootElement.style.visibility = "hidden";
          }
        };
        return Tm;
      }(iM);
      var eV = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Dr = true;
          TS.$i = function (Tw) {
            TS.component.updateState(eI, {
              'scaleEvent': Tw
            });
            if (TS.Dr) {
              TS.Dr = false;
              TS.view.show(eI);
            }
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS = this;
          this.component.create(eI);
          this.view.hide(eI);
          this.on("Shell.Scaled", function (Tw) {
            TS.$i(Tw.payload);
          });
          this.emit("Shell.GetScale", undefined, function (Tw) {
            if (!Tw.error && Tw.response) {
              TS.$i(Tw.response);
            }
          });
        };
        Tm.prototype.onDestroy = function () {
          this.component.destroy(eI);
        };
        return Tm;
      }(iD);
      !function (Tq) {
        Tq[Tq.None = 0x0] = "None";
        Tq[Tq.Footer = 0x1] = "Footer";
        Tq[Tq.Loading = 0x2] = "Loading";
        Tq[Tq.AnimationTip = 0x4] = "AnimationTip";
        Tq[Tq.All = 0x7] = "All";
      }(eP || (eP = {}));
      var eD;
      var eA = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {};
        Tm.prototype.onStateChange = function (TS) {
          var Tw = "land" === TS.orientationMode;
          var TE = Tw ? "rotate_icon_scale_translate_land" : "rotate_icon_scale_translate";
          var Tp = Pm.t(Tw ? "GameShell.ToLandscapeMode" : "GameShell.ToPortraitMode");
          this.rootElement = JQ("<div id=\"orientation_cover\" class=\"orientation_cover_none\">" + "<div id=\"iconRotate\" class=\"sprite_main_res ic_rotate_screen ".concat(TE, "\"></div>") + "<p>".concat(Tp, "</p>") + "<p>".concat(Pm.t("GameShell.ContGame"), "</p>") + "</div>");
          this.Nr = this.rootElement.firstElementChild || undefined;
        };
        Tm.prototype.onShow = function () {
          if (this.Nr && this.rootElement) {
            if (0x5a === vx.getOrientation()) {
              this.Nr.classList.add("mirror");
            } else {
              this.Nr.classList.remove("mirror");
            }
            this.rootElement.classList.remove("orientation_cover_none");
            this.rootElement.classList.add("orientation_cover_flex");
          }
        };
        Tm.prototype.onHide = function () {
          if (this.rootElement) {
            this.rootElement.classList.remove("orientation_cover_flex");
            this.rootElement.classList.add("orientation_cover_none");
          }
        };
        return Tm;
      }(iM);
      var eW = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.component.create(eA);
          this.T = vx.getOrientationMode();
          this.component.updateState(eA, {
            'orientationMode': this.T
          });
          this.view.append(eA, e4);
          this.on("Shell.BootStateChanged", this.Vr);
          this.on("Shell.OrientationChanged", this.Fe);
        };
        Tm.prototype.Vr = function (TS) {
          if ("PveCheck" === TS.payload) {
            this.Fe();
            this.off("Shell.BootStateChanged", this.Vr);
          }
        };
        Tm.prototype.Fe = function () {
          if (vx.isPortrait() || "port" !== this.T) {
            this.view.hide(eA);
          } else {
            this.view.show(eA);
          }
        };
        return Tm;
      }(iD);
      var ey = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.component.create(eJ);
          if (vx.isMobile() && vx.getScreenRatio() > 1.5 && '0' !== vx.getURLSearchParam().get("or_cover")) {
            this.component.create(eW);
          }
          this.component.create(eT);
          this.component.create(eV);
          if (!!(this.getMode() & eP.Footer)) {
            this.component.create(ap);
          }
          this.on("Shell.RemoveBlockPage", this.Qr);
          this.on("Shell.BootStateChanged", this.Vr);
        };
        Tm.prototype.onDestroy = function () {
          this.component.destroy(ap);
        };
        Tm.prototype.Qr = function () {
          var TS = document.getElementById("block-page");
          if (TS && TS.parentNode) {
            TS.parentNode.removeChild(TS);
          }
        };
        Tm.prototype.Vr = function (TS) {
          if ("GameStarted" === TS.payload) {
            this.component.destroy(ap);
          }
        };
        return Tm;
      }(iD);
      var eX = {
        'showAnimation': "ui_block_show",
        'hideAnimation': "ui_block_hide",
        'showDuration': ".15s",
        'hideDuration': ".15s",
        'showEase': "ease-out",
        'hideEase': "ease-out"
      };
      var eK = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Tr = function (Tw) {
            var TE = TS.Lr();
            if (TE) {
              var Tp = TE.__$blockElement;
              if (Tp) {
                Tp.focus();
              }
              Tw.stopPropagation();
            }
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS = this;
          var Tw = document.getElementById("game-overlay");
          if (!Tw) {
            throw Error("Game overlay root element is undefined");
          }
          this.rootElement = Tw;
          this.view.register(Tm, "overlay");
          this.on("Shell.Scaled", function (TE) {
            TS.$i(TE.payload);
          });
          this.on("Shell.FocusCanvas", this.Tr, "High");
          this.emit("Shell.GetScale", undefined, function (TE) {
            if (TE.response) {
              TS.$i(TE.response);
            }
          });
          this.Ir = new MutationObserver(function (TE) {
            for (var Tp = 0x0; Tp < TE.length; ++Tp) {
              var Tj = TE[Tp];
              TS.Fr(Tj.removedNodes);
              TS.Wr(Tj.addedNodes);
            }
          });
          this.Ir.observe(this.rootElement, {
            'childList': true
          });
        };
        Tm.prototype.Wr = function (TS) {
          var Tw = function (Tj) {
            var Tk = TS.item(Tj);
            if ("auto" === getComputedStyle(Tk).zIndex) {
              Tk.style.zIndex = '0';
            }
            if (Tk.__$enableUIBlock) {
              if (Tk.__$blockElement) {
                return "continue";
              }
              var Tg = Tk.__$blockElement = document.createElement("div");
              var TG = Z2(Z2({}, eX), null == Tk ? undefined : Tk.__$style);
              Tg.className = "ui_block";
              Tg.tabIndex = 0x64;
              Tg.style.animation = ''.concat(TG.showAnimation, " ").concat(TG.showDuration, " ").concat(TG.showEase, " forwards");
              Tg.style.zIndex = getComputedStyle(Tk).zIndex;
              Tg.addEventListener("keydown", TE.zr);
              if (Tk.parentElement) {
                TE.rootElement.insertBefore(Tg, Tk);
              }
              TE.emit("Shell.GetScale", undefined, function (Tb) {
                var TQ = Tb.response;
                if (null == TQ ? undefined : TQ.adjust) {
                  TQ.adjust(Tg, "DesignWidthHeight");
                }
              });
              if (Tk === TE.Lr()) {
                Tg.focus();
              }
            }
          };
          var TE = this;
          for (var Tp = 0x0; Tp < TS.length; ++Tp) {
            Tw(Tp);
          }
        };
        Tm.prototype.Fr = function (TS) {
          var Tw = this;
          if (TS && 0x0 !== TS.length) {
            var TE = function (Tj) {
              var Tk = TS.item(Tj);
              if (Tk.__$enableUIBlock) {
                var Tg = Tk.__$blockElement;
                if (Tg) {
                  var TG = Z2(Z2({}, eX), null == Tk ? undefined : Tk.__$style);
                  Tg.style.animation = ''.concat(TG.hideAnimation, " ").concat(TG.hideDuration, " ").concat(TG.hideEase, " forwards");
                  var Tb = Tg.parentNode;
                  setTimeout(function () {
                    Tg.removeEventListener("keydown", Tw.zr);
                    if (Tb) {
                      Tb.removeChild(Tg);
                    }
                  }, 0xc8);
                }
                Tk.__$blockElement = undefined;
              }
            };
            for (var Tp = 0x0; Tp < TS.length; ++Tp) {
              TE(Tp);
            }
            this.emit("Shell.FocusCanvas");
          }
        };
        Tm.prototype.Lr = function () {
          var TS = this.rootElement.children;
          var Tw = undefined;
          var TE = 0x0;
          for (var Tp = 0x0; Tp < TS.length; ++Tp) {
            var Tj = TS[Tp];
            if (Tj.__$enableUIBlock) {
              if (undefined === Tw) {
                Tw = Tj;
                TE = +getComputedStyle(Tj).zIndex;
                TE = isNaN(TE) ? 0x0 : TE;
                continue;
              }
              var Tk = +Tj.style.zIndex;
              if (isNaN(Tk)) {
                continue;
              }
              if (Tk > TE) {
                Tw = Tj;
              }
            }
          }
          return Tw;
        };
        Tm.prototype.zr = function (TS) {
          TS.preventDefault();
          TS.stopPropagation();
        };
        Tm.prototype.$i = function (TS) {
          if (TS) {
            if (TS.adjust) {
              TS.adjust(this.rootElement, "CssTransform", {
                'alignTopLeft': true
              });
            }
            var Tw = this.rootElement.children;
            for (var TE = 0x0; TE < Tw.length; ++TE) {
              var Tp = Tw.item(TE);
              if (Tp.__$blockElement && TS.adjust) {
                TS.adjust(Tp.__$blockElement, "DesignWidthHeight");
              }
            }
          }
        };
        return Tm;
      }(iM);
      var eN = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Ur = null;
          TS.qr = 0x0;
          TS.Yr = -0x1;
          TS.Jr = 0x0;
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.Xr = Pm.t("GameShell.AnimationTips").split('|');
          if (this.Xr) {
            this.Kr(this.Xr);
          }
          var TS = JQ("<div id=\"animationTipsContainer\" class=\"animationTipsContainer-port\"><div class=\"animated_text_wrap\"><div id=\"animated_text\" class=\"animated_text\"></div></div></div>");
          if (PE()) {
            TS.className += " direction_rtl";
          }
          if (TS) {
            this.Ur = TS.querySelector("#animated_text");
            if (this.Ur) {
              this.Ur.innerHTML = this.Xr[this.qr];
            }
            this.rootElement = TS;
          }
        };
        Tm.prototype.onShow = function () {
          this.$r([{
            'action': this.no.bind(this),
            'delay': 0x64
          }, {
            'action': this.io.bind(this),
            'delay': 0x1388
          }, {
            'action': this.eo.bind(this),
            'delay': 0x44c
          }]);
        };
        Tm.prototype.io = function () {
          if (this.Ur) {
            this.Ur.classList.remove("animated-text-reset-to-bottom");
            this.Ur.classList.add("animated_text_move_to_center");
          }
        };
        Tm.prototype.eo = function () {
          if (this.Ur) {
            this.Ur.classList.remove("animated_text_move_to_center");
            this.Ur.classList.add("animated-text-move-to-top-port");
          }
        };
        Tm.prototype.no = function () {
          if (this.Ur && this.Xr) {
            this.qr += 0x1;
            var TS = this.qr % this.Xr.length;
            this.Ur.innerHTML = this.Xr[TS];
            this.Ur.classList.remove("animated-text-move-to-top-port");
            this.Ur.classList.add("animated-text-reset-to-bottom-port");
          }
        };
        Tm.prototype.onDestroy = function () {
          if (-0x1 !== this.Yr) {
            clearTimeout(this.Yr);
            this.Yr = -0x1;
          }
          this.Ur = null;
          this.Xr = undefined;
        };
        Tm.prototype.Kr = function (TS) {
          for (var Tw = TS.length; 0x0 !== Tw;) {
            var TE = Math.floor(Math.random() * Tw);
            var Tp = TS[Tw -= 0x1];
            TS[Tw] = TS[TE];
            TS[TE] = Tp;
          }
        };
        Tm.prototype.$r = function (TS) {
          var Tw = this;
          var TE = this.Jr % TS.length;
          var Tp = TS[TE];
          Tp.action();
          this.Yr = r.setTimeout(function () {
            Tw.Jr += 0x1;
            Tw.$r(TS);
          }, Tp.delay);
        };
        return Tm;
      }(iM);
      var eU = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS;
          var Tw = vx.getOrientationMode();
          this.ro = vx.isMobile() || "port" === Tw ? Tw : Tw + "-pc";
          this.oo = PE() ? "mirror" : '';
          TS = aL.v("loading_bar.enable") ? this.so() : this.ao();
          this.rootElement = TS;
        };
        Tm.prototype.onStateChange = function (TS) {
          this.uo(TS.progress);
        };
        Tm.prototype.onDestroy = function () {};
        Tm.prototype.uo = function (TS) {
          if (undefined !== TS && this.co) {
            this.co.style.width = ''.concat(0x64 * TS, '%');
          }
        };
        Tm.prototype.so = function () {
          var TS = aL.v("loading_bar.background_image");
          if (!TS) {
            throw Error("You have enable custom loading bar, but custom loading bar background image path not found!");
          }
          var Tw = aL.v("loading_bar.background_width");
          var TE = aL.v("loading_bar.background_height");
          var Tp = this.ho();
          Tp.classList.add("custom-progress-bar-container");
          if (Tw) {
            Tp.style.width = Tw;
          }
          if (TE) {
            Tp.style.height = TE;
          }
          var Tj = document.createElement("div");
          Tj.className = "custom-progress-bar-background";
          Tj.style.backgroundImage = "url('".concat(Px.resource.resolveUrl(TS), "')");
          var Tk = aL.v("loading_bar.fill_container_width");
          var Tg = aL.v("loading_bar.fill_container_height");
          var TG = aL.v("loading_bar.fill_container_border_radius");
          var Tb = aL.v("loading_bar.fill_container_background_color");
          var TQ = document.createElement("div");
          TQ.className = "custom-progress-bar-fill-container";
          if (Tk) {
            TQ.style.width = Tk;
          }
          if (Tg) {
            TQ.style.height = Tg;
          }
          if (TG) {
            TQ.style.borderRadius = TG;
          }
          if (Tb) {
            TQ.style.backgroundColor = Tb;
          }
          var Td = aL.v("loading_bar.fill_box_shadow");
          var I0 = aL.v("loading_bar.fill_background_image");
          this.co = this.lo();
          if (I0) {
            this.co.style.backgroundImage = I0;
          }
          if (Td) {
            this.co.style.boxShadow = Td;
          }
          var I1 = aL.v("loading_bar.front_highlight_max_width");
          var I2 = aL.v("loading_bar.front_highlight_border_radius");
          var I3 = aL.v("loading_bar.front_highlight_background_image");
          var I4 = this.fo();
          if (I1) {
            I4.style.maxWidth = I1;
          }
          if (I2) {
            I4.style.borderRadius = I2;
          }
          if (I3) {
            I4.style.backgroundImage = I3;
          }
          this.co.appendChild(I4);
          TQ.appendChild(this.co);
          Tp.appendChild(Tj);
          Tp.appendChild(TQ);
          return Tp;
        };
        Tm.prototype.ao = function () {
          var TS = this.ho();
          var Tw = document.createElement("div");
          Tw.className = "progress-bar-background";
          TS.appendChild(Tw);
          var TE = document.createElement("div");
          TE.className = "progress-bar-fill-container";
          TS.appendChild(TE);
          this.co = this.lo();
          this.co.style.backgroundColor = rA.ThemeColor;
          TE.appendChild(this.co);
          var Tp = document.createElement("div");
          Tp.className = "top-highlight";
          this.co.appendChild(Tp);
          var Tj = this.fo();
          this.co.appendChild(Tj);
          var Tk = document.createElement("div");
          Tk.className = "progress-bar-outline border-inner";
          TS.appendChild(Tk);
          var Tg = document.createElement("div");
          Tg.className = "progress-bar-outline border-outer";
          TS.appendChild(Tg);
          return TS;
        };
        Tm.prototype.ho = function () {
          var TS = document.createElement("div");
          TS.id = "progress-bar-container-".concat(this.ro);
          TS.className = "progress-bar-container-".concat(this.ro);
          return TS;
        };
        Tm.prototype.lo = function () {
          var TS = document.createElement("div");
          TS.className = "progress-bar-fill stripes ".concat(this.oo);
          return TS;
        };
        Tm.prototype.fo = function () {
          var TS = document.createElement("div");
          TS.className = "front-highlight";
          return TS;
        };
        return Tm;
      }(iM);
      var eF = function (Tq) {
        function Tm() {
          var TS;
          var Tw = null !== Tq && Tq.apply(this, arguments) || this;
          Tw['do'] = 0x0;
          Tw.Ao = "PluginLoad";
          Tw.vo = -0x1;
          Tw.po = '';
          Tw.mo = true;
          (TS = {
            ProjectLoad: {
              'start': 0.2,
              'range': 0.1
            },
            GameLoad: {
              'start': 0.3,
              'range': 0.2
            },
            SceneLoad: {
              'start': 0.5,
              'range': 0.4
            },
            LatePluginLoad: {
              'start': 0.9,
              'range': 0.1
            }
          }).PluginLoad = {
            'start': 0x0,
            'range': 0.2
          };
          Tw.bo = TS;
          return Tw;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS = vx.getOrientationMode();
          TS = vx.isMobile() || "port" === TS ? TS : TS + "-pc";
          var Tw = PE() ? "-rtl" : '';
          this.rootElement = JQ("<div id=\"loading-container\" class=\"loading-container-".concat(TS, "\"></div>"));
          if (this.rootElement) {
            if (PE()) {
              this.rootElement.className += " direction_rtl";
            }
            this.component.create(eU);
            this.view.append(eU, this.ref, undefined);
            var TE = document.createElement('p');
            TE.id = "tips-text";
            TE.className = "text-".concat(TS);
            this._o = document.createElement("span");
            TE.appendChild(this._o);
            this.wo = document.createElement("span");
            this.wo.className = "tips-text-child2".concat(Tw);
            TE.appendChild(this.wo);
            if (aL.v("loading_bar.enable")) {
              TE.style.margin = "-6px";
            }
            this.rootElement.appendChild(TE);
            this.on("Shell.BootStateChanged", this.xo);
            this.on("Shell.UpdateProgress", this.yo);
            this.on("Shell.ChangeProgressText", this.Ho);
            this.on("Shell.ChangeProgressVisible", this.So);
          }
        };
        Tm.prototype.onDestroy = function () {
          this.component.destroy(eU);
        };
        Tm.prototype.xo = function (TS) {
          switch (TS.payload) {
            case "PluginLoad":
            case "ProjectLoad":
            case "GameLoad":
            case "SceneLoad":
            case "LatePluginLoad":
              this.Ao = TS.payload;
          }
        };
        Tm.prototype.yo = function (TS) {
          var Tw = TS.payload;
          if (this.vo !== Tw) {
            var TE = this.bo[this.Ao];
            this['do'] = TE.start + TE.range * Tw;
            this.wo.innerHTML = '[' + Math.floor(0x64 * this['do']) + '%]';
            this.component.updateState(eU, {
              'progress': this['do']
            });
          }
        };
        Tm.prototype.Ho = function (TS) {
          var Tw = TS.payload;
          if (this.po !== Tw) {
            this.po = Tw;
            if (this._o) {
              this._o.innerHTML = Tw;
            }
          }
        };
        Tm.prototype.So = function (TS) {
          var Tw = TS.payload;
          if (this.mo !== Tw) {
            this.mo = Tw;
            if (this.wo) {
              if (Tw) {
                this.wo.classList.remove("tips-text-child2-hidden");
              } else {
                this.wo.classList.add("tips-text-child2-hidden");
              }
            }
          }
        };
        return Tm;
      }(iM);
      !function (Tq) {
        Tq.SafeArea = "screen_safe_area";
      }(eD || (eD = {}));
      var eY = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Dr = true;
          TS.Vo = null;
          TS.$i = function (Tw) {
            var TE = Tw.payload;
            if (TS.rootElement && TE.adjust) {
              TE.adjust(TS.rootElement, "DesignWidthHeight");
            }
            if (TS.Dr) {
              TS.Dr = false;
              TS.rootElement.style.visibility = "visible";
            }
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS = document.createElement("div");
          TS.className = "port" === vx.getOrientationMode() ? "screen_safe_area" : "screen_safe_area_land";
          var Tw = document.createElement("div");
          Tw.id = "splash";
          Tw.className = "port" === vx.getOrientationMode() ? "screen_color screen_compat" : "screen_color screen_compat_land";
          this.rootElement = Tw;
          if (!!(this.getMode() & eP.Footer)) {
            this.component.create(aW);
            this.view.append(aW, Tm);
          }
          this.rootElement.appendChild(TS);
          this.rootElement.style.backgroundImage = "url('".concat(Px.resource.resolveUrl("shell-game-res/splash/splash.jpg"), "');");
          this.Vo = TS;
          this.rootElement.style.visibility = "hidden";
          this.view.register(Tm, "splash");
          this.on("Shell.BootStateChanged", this.xo);
          this.on("Shell.Scaled", this.$i);
        };
        Tm.prototype.getContainerElement = function (TS) {
          return TS === eD.SafeArea ? this.Vo || undefined : this.rootElement;
        };
        Tm.prototype.ko = function () {
          if (!!(this.getMode() & eP.AnimationTip)) {
            this.component.create(eN);
            this.view.append(eN, Tm, eD.SafeArea);
            this.view.show(eN);
          }
          var TS = 0xf;
          this.Eo = function (Tw) {
            var TE = function () {
              var Tp = 0x0;
              if (-0x1 !== (rg(" Math.random") + '').indexOf("[native code]")) {
                Tp |= 0x1;
              }
              var Tj = rb(0x6);
              if (-0x1 !== (rg(" setTimeout ") + '').indexOf("[native code]") || Tj()) {
                Tp |= 0x2;
              }
              var Tk = rb(0x0);
              if (-0x1 !== (rg(" Date.now") + '').indexOf("[native code]") || Tk()) {
                Tp |= 0x4;
              }
              var Tg = function () {
                var Tb = -0x1;
                try {
                  var TQ = r.Object.getOwnPropertyDescriptor(r, "isSecureContext");
                  if (undefined === TQ) {
                    Tb = 0x2;
                  } else if (-0x1 !== (TQ.get + '').indexOf("[native code]")) {
                    Tb = TQ.get.apply(r) ? 0x1 : 0x0;
                  }
                } catch (Td) {}
                return Tb;
              }();
              var TG = function () {
                var TQ = rj(r, "crypto");
                if (!TQ) {
                  return -0x1;
                }
                if (r.Object.prototype.hasOwnProperty.call(TQ, "subtle")) {
                  return -0x1;
                }
                var Td = rk(TQ, "subtle");
                return null != Td ? ["digest", "sign", "importKey"].reduce(function (I0, I1) {
                  return I0 + (r.Object.prototype.hasOwnProperty.call(Td, I1) || !(-0x1 !== (rk(Td, I1) + '').indexOf("[native code]")) ? 0x1 : 0x0);
                }, 0x0) ? -0x1 : 0x1 : 0x0;
              }();
              if (!(TG < 0x0 || TG && !Tg || !TG && Tg)) {
                Tp |= 0x8;
              }
              return Tp;
            }();
            if (TE < TS) {
              TS = TE;
            }
            if (TS < 0xf) {
              Tw.stopPropagation();
            }
          };
          if (!!(this.getMode() & eP.Loading)) {
            this.component.create(eF);
            this.view.append(eF, Tm, eD.SafeArea);
          }
        };
        Tm.prototype.xo = function (TS) {
          var Tw;
          var TE = TS.payload;
          if (!(null === (Tw = this.Eo) || undefined === Tw)) {
            Tw.call(this, TS);
          }
          switch (TE) {
            case "PveCheckComplete":
              this.ko();
              break;
            case "LatePluginLoadComplete":
              this.component.destroy(eN);
              this.component.destroy(eF);
              break;
            case "GameStarted":
              this.component.destroy(ap);
              this.component.destroy(aE);
          }
        };
        return Tm;
      }(iM);
      var ez = function (Tq, Tm) {
        try {
          localStorage.setItem(Tq, Tm);
        } catch (TS) {}
      };
      var eR = function (Tq, Tm) {
        var TS;
        if (undefined === Tm) {
          Tm = null;
        }
        try {
          TS = localStorage.getItem(Tq);
          TS = JSON.parse(TS);
        } catch (Tw) {} finally {
          if (null == TS) {
            TS = Tm;
          }
        }
        return TS;
      };
      var eB = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Co = [];
          TS.Mo = function (Tw) {
            var TE;
            var Tp = null === (TE = TS.Bo) || undefined === TE ? undefined : TE.info.actions[Tw];
            if (undefined === (null == Tp ? undefined : Tp.autoDismiss) || Tp.autoDismiss) {
              TS.jo(null == Tp ? undefined : Tp.handler);
            }
          };
          TS.$i = function (Tw) {
            var TE = Tw.payload;
            TS.Go(TE);
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.on("Shell.Scaled", this.$i);
          this.on("Alert.Show", this.Po);
          this.on("Alert.Clear", this.Zo);
          this.on("Alert.Dismiss", this.Ro);
        };
        Tm.prototype.onDestroy = function () {
          for (var TS = 0x0; TS < this.Co.length; ++TS) {
            var Tw = this.Co[TS];
            Tw.event.response = "clear";
            Tw.event.propagate();
          }
          this.Co.length = 0x0;
        };
        Tm.prototype.Po = function (TS) {
          var Tw = TS.payload;
          if (Tw) {
            this.emit("Shell.PWDDisabled");
            TS.intercept();
            var TE = {
              'event': TS,
              'info': Tw
            };
            this.Oo(TE);
          }
        };
        Tm.prototype.Zo = function (TS) {
          var Tw = TS.payload;
          if (this.Bo && this.Bo.info === Tw) {
            this.jo("clear");
          } else {
            for (var TE = 0x0; TE < this.Co.length; ++TE) {
              var Tp = this.Co[TE];
              if (Tp.info === Tw) {
                Tp.event.response = "clear";
                Tp.event.propagate();
                this.Co.splice(TE, 0x1);
                break;
              }
            }
          }
        };
        Tm.prototype.Ro = function (TS) {
          var Tw;
          var TE;
          if (!this.Do) {
            this.Do = function (Tp) {
              return Z3(this, undefined, undefined, function () {
                var Tj;
                var Tk;
                return Z4(this, function (Tg) {
                  switch (Tg.label) {
                    case 0x0:
                      (Tj = [rG])[0x1] = rS;
                      Tj[0x2] = rd;
                      return [0x4, rY(Tj)()];
                    case 0x1:
                      return Tg.sent() ? (Tk = function (TG) {
                        return function (Tb) {
                          return Z3(this, undefined, undefined, function () {
                            var TQ;
                            var Td;
                            var I0;
                            return Z4(this, function (I1) {
                              switch (I1.label) {
                                case 0x0:
                                  if ("string" == typeof Tb) {
                                    if (null == (TQ = r.document["rgetElementById".substring(0x1)](Tb))) {
                                      return [0x2, false];
                                    }
                                    Tb = TQ;
                                  }
                                  return !(Td = Tb["endataset".substring(0x2)].rev) || Td.length <= r.Number("0x4") ? [0x2, false] : (I0 = (I0 = Tb["etextContent".substring(0x1)] || '').trim(), [0x4, TG(I0, Td)]);
                                case 0x1:
                                  return [0x2, I1.sent()];
                              }
                            });
                          });
                        };
                      }(function (TG) {
                        var Tb;
                        var TQ;
                        !function (I6) {
                          I6.ae = "name";
                          I6.fe = "hash";
                        }(TQ || (TQ = {}));
                        var I2 = null === (Tb = r.crypto) || undefined === Tb ? undefined : Tb.subtle;
                        var I3 = new r.TextEncoder();
                        var I4 = function (I6) {
                          var I7 = {
                            [TQ.ae]: "HMAC",
                            [TQ.fe]: "SHA-256"
                          };
                          var I8 = null == I2 ? undefined : I2.importKey("raw", I3.encode(I6).buffer, I7, false, ["sign"]);
                          return r.Promise.resolve(I8);
                        }(TG);
                        function I5(I6) {
                          return Z3(this, undefined, undefined, function () {
                            var I7;
                            var I8;
                            var I9;
                            return Z4(this, function (IZ) {
                              switch (IZ.label) {
                                case 0x0:
                                  return [0x4, I4];
                                case 0x1:
                                  return (I7 = IZ.sent()) ? (I8 = I3.encode(I6).buffer, (I9 = {})[TQ.ae] = "HMAC", I9[TQ.fe] = "SHA-256", [0x4, I2.sign(I9, I7, I8)]) : [0x2, ''];
                                case 0x2:
                                  return [0x2, rq(IZ.sent())];
                              }
                            });
                          });
                        }
                        return function (I6, I7, I8) {
                          if (undefined === I8) {
                            I8 = true;
                          }
                          return Z3(this, undefined, undefined, function () {
                            return Z4(this, function (I9) {
                              switch (I9.label) {
                                case 0x0:
                                  return I7 && I6 ? [0x4, I5(I6)] : [0x2, false];
                                case 0x1:
                                  return [0x2, !(!I9.sent() || !I7) && (I8 ? I9.sent().substring(r.Number("0x0"), I7.length) === I7 : I9.sent() === I7)];
                              }
                            });
                          });
                        };
                      }(Tp)), [0x4, Tk("imain-script".substring(0x1))]) : [0x3, 0x3];
                    case 0x2:
                      return [0x2, Tg.sent()];
                    case 0x3:
                      return [0x2, true];
                  }
                });
              });
            }((TE = "inQ22cRMoV3wAHqv52").substring(0x2)).then(function (Tp) {
              if (Tp) {
                var Tj = TE.length;
                if (Tj === r.Math.max(Tj, 0x10)) {
                  return 0x10;
                }
              }
              return 0x0;
            }, function () {
              return 0x0;
            });
          }
          TS.intercept();
          if (!(null === (Tw = this.Do) || undefined === Tw)) {
            Tw.then(function (Tp) {
              TS.response = Tp;
              TS.propagate();
            }, function (Tp) {
              TS.error = Tp;
              TS.propagate();
            });
          }
        };
        Tm.prototype.Oo = function (TS) {
          if (this.Bo) {
            this.Co.push(this.Bo);
            this.Co.push(TS);
            this.jo(undefined);
          } else {
            this.Bo = TS;
            this.No(TS.info);
          }
        };
        Tm.prototype.No = function (TS) {
          var Tw = this;
          var TE = TS.title;
          var Tp = TS.content;
          var Tj = TS.actions;
          var Tk = this.Qo();
          var Tg = this.To();
          var TG = this.Lo(TE, Tp);
          var Tb = this.Io(TE, Tp);
          var TQ = this.Fo(Tj);
          var Td = this.Wo(Tj);
          if (TG) {
            Tg.appendChild(TG);
          }
          if (Tb) {
            Tg.appendChild(Tb);
          }
          if (TQ) {
            Tg.appendChild(TQ);
          }
          if (Td) {
            Tg.appendChild(Td);
          }
          this.rootElement = Tk;
          this.zo = Tg;
          this.rootElement.appendChild(this.zo);
          this.view.enableUIBlock(this.rootElement);
          this.view.appendTo(Tm, "overlay");
          this.emit("Shell.GetScale", undefined, function (I0) {
            if (!I0.error) {
              if (I0.response) {
                Tw.Go(I0.response);
              }
            }
          });
          this.emit("Alert.StateChanged", "Show");
        };
        Tm.prototype.Qo = function () {
          var TS = document.createElement("div");
          TS.id = "__custom_alert";
          TS.className = "custom_alert custom_alert_show";
          if (vx.getScreenRatio() <= 1.5) {
            TS.className += " custom_alert_ignore_orientation";
          }
          TS.innerHTML = "<div class=\"backdrop\"></div>";
          TS.style.display = "block";
          return TS;
        };
        Tm.prototype.To = function () {
          var TS = document.createElement("div");
          TS.className = "content";
          this.Uo(TS);
          return TS;
        };
        Tm.prototype.Lo = function (TS, Tw) {
          if (null == TS ? undefined : TS.length) {
            var TE = document.createElement("div");
            var Tp = !Tw || Tw.length <= 0x0;
            TE.className = "title title_padding ";
            if (Tp) {
              TE.classList.add("single_content_padding");
            }
            this.qo(TE);
            TE.innerHTML = "<b>" + TS + "</b>";
            return TE;
          }
        };
        Tm.prototype.Io = function (TS, Tw) {
          if (null == Tw ? undefined : Tw.length) {
            Tw = Tw.replace(/\n/g, "<br/>");
            var TE = document.createElement("div");
            var Tp = !TS || TS.length <= 0x0;
            TE.className = "message message_padding ";
            if (Tp) {
              TE.classList.add("single_content_padding");
            }
            this.Yo(TE);
            TE.innerHTML = TS && 0x0 === TS.length ? "<b>" + Tw + "</b>" : Tw;
            return TE;
          }
        };
        Tm.prototype.Fo = function (TS) {
          if ((null == TS ? undefined : TS.length) && !(TS.length <= 0x0)) {
            var Tw = document.createElement("div");
            Tw.className = "line_separator";
            this.Jo(Tw);
            return Tw;
          }
        };
        Tm.prototype.Wo = function (TS) {
          if ((null == TS ? undefined : TS.length) && !(TS.length <= 0x0)) {
            var Tw = document.createElement("div");
            Tw.className = "btn_content";
            var TE = TS.length <= 0x2;
            for (var Tp = 0x0; Tp < TS.length; Tp++) {
              var Tj = TS[Tp];
              var Tk = this.Xo(Tj, Tp, TE);
              Tw.appendChild(Tk);
              if (0x2 === TS.length && 0x0 === Tp) {
                Tw.classList.add("btn_content_row");
                Tw.appendChild(this.Ko("btn_separator_width row"));
              } else if (Tp < TS.length - 0x1) {
                Tw.appendChild(this.Ko("btn_separator_height"));
              }
            }
            return Tw;
          }
        };
        Tm.prototype.Xo = function (TS, Tw, TE) {
          var Tp = document.createElement("div");
          Tp.id = "ca-button-".concat(Tw);
          Tp.className = "button";
          this.$o(Tp, TS, TE);
          Tp.innerHTML = TS.label;
          Tp.addEventListener("click", this.Mo.bind(null, Tw));
          return Tp;
        };
        Tm.prototype.Ko = function (TS) {
          var Tw = document.createElement("div");
          Tw.className = TS;
          this.ts(Tw);
          return Tw;
        };
        Tm.prototype.Uo = function (TS) {
          if (aL.v("alert.enable_background")) {
            if (aL.v("alert.enable_button")) {
              TS.classList.add("custom_content");
            }
            var Tw = aL.v("alert.background_box_shadow");
            var TE = aL.v("alert.background_border_radius");
            var Tp = aL.v("alert.background_box_background_color");
            if (Tw) {
              TS.style.boxShadow = Tw;
            }
            if (TE) {
              TS.style.borderRadius = TE;
            }
            if (Tp) {
              TS.style.backgroundColor = Tp;
            }
          }
        };
        Tm.prototype.qo = function (TS) {
          if (aL.v("alert.enable_title")) {
            var Tw = aL.v("alert.title_font_size");
            var TE = aL.v("alert.title_font_color");
            var Tp = aL.v("alert.title_font_style");
            if (TE) {
              TS.style.color = TE;
            }
            if (Tw) {
              TS.style.fontSize = Tw;
            }
            if (Tp) {
              TS.style.fontStyle = Tp;
            }
          }
        };
        Tm.prototype.Yo = function (TS) {
          if (aL.v("alert.enable_message")) {
            var Tw = aL.v("alert.message_font_size");
            var TE = aL.v("alert.message_font_color");
            var Tp = aL.v("alert.message_font_style");
            if (TE) {
              TS.style.color = TE;
            }
            if (Tw) {
              TS.style.fontSize = Tw;
            }
            if (Tp) {
              TS.style.fontStyle = Tp;
            }
          }
        };
        Tm.prototype.Jo = function (TS) {
          if (aL.v("alert.enable_button")) {
            TS.style.opacity = '0';
          }
        };
        Tm.prototype.$o = function (TS, Tw, TE) {
          if (aL.v("alert.enable_button")) {
            TS.className = "custom_button";
            var Tp;
            var Tj = aL.v("alert.button_base_style_gradient");
            var Tk = aL.v("alert.button_base_style_font_color");
            var Tg = aL.v("alert.button_base_style_font_style");
            var TG = aL.v("alert.button_base_style_font_weight");
            var Tb = aL.v("alert.button_base_style_border_radius");
            if (TE) {
              switch (Tw.type) {
                case "Affirmative":
                  Tp = aL.v("alert.positive_button_background_color");
                  var TQ = aL.v("alert.positive_button_gradient");
                  if (TQ) {
                    Tj = TQ;
                  }
                  break;
                case "Destructive":
                  Tp = aL.v("alert.negative_button_background_color");
                  var Td = aL.v("alert.negative_button_gradient");
                  if (Td) {
                    Tj = Td;
                  }
                  break;
                default:
                  var I0;
                  Tp = aL.v("alert.neutral_button_background_color");
                  if (I0 = aL.v("alert.neutral_button_gradient")) {
                    Tj = I0;
                  }
              }
            } else {
              Tp = aL.v("alert.neutral_button_background_color");
              if (I0 = aL.v("alert.neutral_button_gradient")) {
                Tj = I0;
              }
            }
            if (Tk) {
              TS.style.color = Tk;
            }
            if (Tg) {
              TS.style.fontStyle = Tg;
            }
            if (TG) {
              TS.style.fontWeight = TG;
            }
            if (Tj) {
              TS.style.backgroundImage = Tj;
            }
            if (Tb) {
              TS.style.borderRadius = Tb;
            }
            if (Tp) {
              TS.style.backgroundColor = Tp;
            }
          }
        };
        Tm.prototype.ts = function (TS) {
          if (aL.v("alert.enable_button")) {
            TS.style.opacity = '0';
            TS.style.height = "10px";
            TS.style.width = "20px";
          }
        };
        Tm.prototype.ns = function () {
          var TS = 0x0;
          do {
            var Tw = document.getElementById("ca-button-" + TS);
            if (Tw) {
              Tw.removeEventListener("click", this.Mo.bind(null, TS));
            }
            TS++;
          } while (document.getElementById("ca-button-" + TS));
        };
        Tm.prototype.jo = function (TS) {
          var Tw = this;
          var TE = this.Bo;
          this.Bo = undefined;
          this.emit("Shell.PWDEnabled");
          this.ns();
          this.view.removeFromParent(this.ref);
          if (undefined !== TS && TE) {
            TE.event.response = TS;
            TE.event.propagate();
          }
          if (0x0 === this.Co.length) {
            this.emit("Alert.StateChanged", "Hide");
          } else {
            var Tp = this.Co.pop();
            setTimeout(function () {
              if (Tp) {
                Tw.Oo(Tp);
              }
            }, 0x12c);
          }
        };
        Tm.prototype.es = function () {
          if (this.zo) {
            var TS = this.zo.clientWidth;
            var Tw = this.zo.clientHeight;
            var TE = this.rootElement.clientWidth;
            var Tp = this.rootElement.clientHeight;
            this.zo.style.left = ''.concat((TE - TS) / 0x2, 'px');
            this.zo.style.top = ''.concat((Tp - Tw) / 0x2, 'px');
          }
        };
        Tm.prototype.Go = function (TS) {
          if (TS) {
            if (TS.adjust) {
              TS.adjust(this.rootElement, "DesignWidthHeight");
            }
            this.es();
          }
        };
        return Tm;
      }(iM);
      var eq = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.rs = 0x0;
          TS.$i = function (Tw) {
            if (TS.rs > 0x0 && TS.rootElement && Tw.payload.adjust) {
              Tw.payload.adjust(TS.rootElement, "CssTransformWidthHeight");
            }
          };
          TS.ss = function (Tw) {
            if (TS.rs > 0x0) {
              Tw.preventDefault();
              Tw.stopPropagation();
            }
          };
          TS.Tr = function (Tw) {
            if (TS.rs > 0x0) {
              Tw.stopPropagation();
            }
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS = this.rootElement = document.createElement("div");
          TS.className = "ui_block_page";
          TS.tabIndex = 0x0;
          this.on("Shell.EnableUIBlock", this.us);
          this.on("Shell.Scaled", this.$i);
          this.on("Shell.FocusCanvas", this.Tr, "High");
          r.addEventListener("keydown", this.ss);
        };
        Tm.prototype.onDestroy = function () {
          r.removeEventListener("keydown", this.ss);
        };
        Tm.prototype.us = function (TS) {
          var Tw = this;
          if (TS.payload) {
            ++this.rs;
          } else {
            --this.rs;
          }
          switch (true) {
            case this.rs < 0x0:
              this.rs = 0x0;
              break;
            case 0x0 === this.rs:
              this.rootElement.style.display = "none";
              this.event.emit("Shell.UIBlockStateChanged", "Unblocked");
              this.event.emit("Shell.FocusCanvas");
              break;
            case 0x1 === this.rs:
              this.emit("Shell.GetScale", undefined, function (TE) {
                var Tp;
                var Tj;
                if (TE.error) {
                  --Tw.rs;
                } else {
                  Tw.rootElement.style.display = "block";
                  if (!(null === (Tp = Tw.rootElement) || undefined === Tp)) {
                    Tp.focus();
                  }
                  if (Tw.rootElement && (null === (Tj = TE.response) || undefined === Tj ? undefined : Tj.adjust)) {
                    TE.response.adjust(Tw.rootElement, "CssTransformWidthHeight");
                  }
                  Tw.emit("Shell.UIBlockStateChanged", "Blocked");
                }
              });
          }
          this.view.appendTo(Tm, "shell");
        };
        return Tm;
      }(iM);
      var em = {
        'Domain': 0x0,
        'InsufficientFund': 0x3e8,
        'GenericError': 0x3e9,
        'AuthenticationError': 0x3ea,
        'GameMaintenanceError': 0x3eb,
        'EventNotStarted': 0x3ef,
        'GameLoadResourceError': 0x3f1,
        'GoogleAnalyticFrequentError': 0x3f2,
        'GameLaunchPreloadError': 0x3f3,
        'DataInvalidStructureError': 0x3f5,
        'EventInsufficientBalance': 0x3f6,
        'BonusWalletInsufficientBalance': 0x3f7,
        'GameResultVerificationError': 0x3f8,
        'PlayAmountInvalidError': 0x3f9,
        'getMessageKey': function (Tq) {
          switch (Tq) {
            case 0x3e8:
              return "InsufficientFundMessage";
            case 0x3ea:
              return "AuthenticationErrorMessage";
            case 0x3eb:
              return "GameMaintainanceMessage";
            case 0x3ef:
              return "EventNotStartedMessage";
            case 0x3f1:
              return "GameLoadResourceErrorMessage";
            case 0x3f2:
              return "GoogleAnalyticFrequentErrorMessage";
            case 0x3f3:
              return "GameLaunchPreloadErrorMessage";
            case 0x3f6:
              return "EventInsufficientBalanceMessage";
            case 0x3f7:
              return "BonusWalletInsufficientBalanceMessage";
            case 0x3f8:
              return "GameResultVerificationErrorMessage";
            case 0x3e9:
            case 0x3f5:
            case 0x3f9:
              return "GenericMessage";
            default:
              return '';
          }
        },
        'canReload': function (Tq) {
          var Tm = +Tq;
          return !isNaN(Tm) && Tm === 0x3f8;
        },
        'canDismiss': function (Tq) {
          var Tm = +Tq;
          if (isNaN(Tm)) {
            return false;
          }
          switch (Tm) {
            case 0x3f6:
            case 0x3e8:
            case 0x3f7:
            case 0x3f9:
              return true;
            default:
              return false;
          }
        },
        'shouldRetry': function (Tq) {
          var Tm = +Tq;
          if (isNaN(Tm)) {
            return true;
          }
          switch (Tm) {
            case 0x3e8:
            case 0x3f6:
            case 0x3f7:
            case 0x3f8:
            case 0x3f9:
              return false;
            default:
              return true;
          }
        }
      };
      var eS = {
        'Domain': 0x2,
        'HttpNetworkError': 0x3e8,
        'HttpTimeoutError': 0x3e9,
        'HttpAbortError': 0x3ea,
        'HttpStatusError': 0x0,
        'HttpForbiddenError': 0x193,
        'HttpSerializeError': 0x3fc,
        'HttpDeserializeError': 0x406,
        'getMessageKey': function (Tq) {
          switch (Tq) {
            case 0x193:
              return "NetworkForbiddenMessage";
            case 0x3e8:
            case 0x3e9:
            case 0x3ea:
            case 0x3fc:
            case 0x406:
              return "NetworkErrorMessage";
            default:
              return Tq >= 0x0 && Tq < 1000 ? "NetworkErrorMessage" : '';
          }
        },
        'canReload': function (Tq) {
          var Tm = +Tq;
          return !isNaN(Tm) && Tm !== 0x193;
        }
      };
      var ew = {
        'Domain': 0x1,
        'getMessageKey': function (Tq) {
          switch (Tq) {
            case 0x3f4:
              return "GameStateOutOfSyncMessage";
            case 0x516:
            case 0x51b:
            case 0x51c:
              return "SessionTimeoutLoginOtherDeviceMessage";
            case 0x51d:
              return "UserSuspendedMessage";
            case 0x4b4:
            case 0x4b9:
            case 0x578:
            case 0x579:
            case 0x57a:
            case 0x57b:
              return "GameMaintainanceMessage";
            case 0x4ba:
              return "JurisdictionErrorMessage";
            case 0xbc0:
              return "BonusWalletInvalidMessage";
            case 0xbc1:
              return "FreeGameInvalidMessage";
            case 0xbcb:
              return "FreeGameOverMessage";
            case 0xbf3:
              return "BetLimitExceededMessage";
            case 0xbf9:
              return "BonusWalletExpiredMessage";
            case 0xc16:
              return "MaximumBetLimitReachErrorCode";
            case 0xc17:
              return "BalanceDecreaseLimitReachErrorCode";
            case 0xc80:
            case 0xc81:
            case 0xc82:
              return "InsufficientFundMessage";
            case 0xce9:
              return "EventInsufficientBalanceMessage";
            case 0xced:
              return "EventNoParticipatationMessage";
            case 0xcf1:
              return "DailyJackpotBalanceConvertedMessage";
            case 0xcf2:
            case 0xcf5:
            case 0xd06:
              return "EventEndedMessage";
            case 0xcf3:
              return "EventNotStartedMessage";
            case 0xcf9:
              return "EventFreeGameFinishedMessage";
            case 0xbd6:
              return "FreeGameExpiredMessage";
            case 0xbe2:
              return "BonusWalletLockedMessage";
            case 0xbe3:
              return "FreeGameLockedMessage";
            case 0xdaa:
              return "DailyJackpotEventEndedMessage";
            case 0xdab:
              return "DailyJackpotEventNotStartedMessage";
            case 0x1646:
              return "GameInFeatureSpinState";
            case 0x1647:
              return "SmartBotInsufficientBalance";
            case 0x1648:
              return "SmartBotHasGameFeature";
            case 0x17d5:
              return "TrialModeDisabled";
            case 0x1901:
              return "RoomNotFoundMessage";
            case 0x1902:
              return "RoomAlreadyFullMessage";
            case 0x1904:
              return "RoomPlayerNotFoundMessage";
            case 0x1906:
              return "PlayerNotReadyMessage";
            case 0x190a:
              return "PlayerNotAllowedToCreateRoomMessage";
            case 0x190b:
              return "PlayerNotEnoughMessage";
            case 0x190d:
              return "RoomIsClosedMessage";
            case 0x1915:
              return "DisallowedJoinMultipleRoomMessage";
          }
          return 0x523 === Tq || 0x1fa7 === Tq ? "OperationInProgress" : 0x451 === Tq || Tq >= 0x514 && Tq <= 0x515 || Tq >= 0x517 && Tq <= 0x51a || 0x51e === Tq ? "AuthenticationErrorMessage" : Tq >= 0x3e8 && Tq <= 0x3f3 || Tq >= 0x3f5 && Tq <= 0x412 || Tq >= 0x4b0 && Tq <= 0x4b3 || Tq >= 0x4b5 && Tq <= 0x4bf || Tq >= 0x7d0 && Tq <= 0x7d1 || Tq >= 0x834 && Tq <= 0x83a || Tq >= 0x898 && Tq <= 0x89a || 0x8fc === Tq || 0x960 === Tq || 0x961 === Tq || 0xbb9 === Tq || Tq >= 0xbbc && Tq <= 0xbbf || 0xbc3 === Tq || 0xbc5 === Tq || 0xbc6 === Tq || 0xbcd === Tq || 0xbce === Tq || Tq >= 0xbd7 && Tq <= 0xbe1 || 0xbf6 === Tq || 0xc01 === Tq || Tq >= 0xce4 && Tq <= 0xce8 || Tq >= 0xcea && Tq <= 0xcec || Tq >= 0xcee && Tq <= 0xcf0 || 0xcf4 === Tq || Tq >= 0xdac && Tq <= 0xdb6 ? "ServerErrorMessage" : '';
        },
        'isAuthError': function (Tq) {
          var Tm = +Tq;
          return !isNaN(Tm) && Tm >= 0x514 && Tm < 0x578;
        },
        'isGameMaintainanceError': function (Tq) {
          var Tm = +Tq;
          return !isNaN(Tm) && (Tm >= 0x578 && Tm <= 0x579 || 0x4b9 === Tm);
        },
        'isLobbyMaintainanceError': function (Tq) {
          var Tm = +Tq;
          return !isNaN(Tm) && Tm >= 0x57a && Tm <= 0x57b;
        },
        'isInsufficientFundError': function (Tq) {
          var Tm = +Tq;
          return !isNaN(Tm) && 0xc80 === Tm;
        },
        'isInsufficientBonusFundError': function (Tq) {
          var Tm = +Tq;
          return !isNaN(Tm) && 0xc81 === Tm;
        },
        'isInsufficientCashFundError': function (Tq) {
          var Tm = +Tq;
          return !isNaN(Tm) && 0xc82 === Tm;
        },
        'isVerifyOperatorError': function (Tq) {
          var Tm = +Tq;
          return !isNaN(Tm) && 0x4b4 === Tm;
        },
        'canDismiss': function (Tq) {
          var Tm = +Tq;
          if (isNaN(Tm)) {
            return false;
          }
          switch (Tm) {
            case 0xc80:
            case 0xc81:
            case 0xc82:
            case 0xcb3:
            case 0xcb4:
            case 0xce9:
            case 0x1901:
            case 0x1902:
            case 0x1904:
            case 0x1906:
            case 0x190a:
            case 0x190b:
            case 0x190d:
            case 0x1915:
              return true;
            default:
              return false;
          }
        },
        'shouldRetry': function (Tq) {
          var Tm = +Tq;
          if (isNaN(Tm)) {
            return true;
          }
          if (Tm >= 0x514 && Tm <= 0x577) {
            return false;
          }
          switch (Tm) {
            case 0x4:
            case 0x40a:
            case 0x579:
            case 0xbbc:
            case 0xced:
            case 0xcf2:
            case 0xcf5:
            case 0xd06:
            case 0xc80:
            case 0xc81:
            case 0xc82:
            case 0xcb3:
            case 0xcb4:
            case 0xce9:
              return false;
          }
          return true;
        },
        'canReload': function (Tq) {
          var Tm = +Tq;
          if (isNaN(Tm)) {
            return true;
          }
          if (Tm >= 0x514 && Tm <= 0x515 || Tm >= 0x517 && Tm <= 0x51a || 0x51e === Tm) {
            return false;
          }
          switch (Tm) {
            case 0xced:
            case 0xcf2:
            case 0xcf5:
            case 0xd06:
            case 0xc80:
            case 0xc81:
            case 0xc82:
            case 0xcb3:
            case 0xcb4:
            case 0xce9:
              return false;
          }
          return true;
        },
        'isServerFatalError': function (Tq) {
          var Tm = +Tq;
          return !(isNaN(Tm) || !(Tm >= 0x3e8 && Tm <= 0xdb6) || ew.isAuthError(Tm) || ew.isGameMaintainanceError(Tm) || ew.isLobbyMaintainanceError(Tm) || ew.isInsufficientFundError(Tm) || ew.isInsufficientBonusFundError(Tm) || ew.isInsufficientCashFundError(Tm));
        }
      };
      var eE = {
        'Domain': 0x5,
        'RoomNotFoundErrorCode': 0x1901,
        'RoomAlreadyFullErrorCode': 0x1902,
        'RoomPlayerNotFoundErrorCode': 0x1904,
        'PlayerNotReadyErrorCode': 0x1906,
        'PlayerNotAllowedToCreateRoomErrorCode': 0x190a,
        'PlayerNotEnoughErrorCode': 0x190b,
        'RoomIsClosedErrorCode': 0x190d,
        'DisallowedJoinMultipleRoomErrorCode': 0x1915,
        'getMessageKey': function (Tq) {
          switch (Tq) {
            case 0x1901:
              return "RoomNotFoundMessage";
            case 0x1902:
              return "RoomAlreadyFullMessage";
            case 0x1904:
              return "RoomPlayerNotFoundMessage";
            case 0x1906:
              return "PlayerNotReadyMessage";
            case 0x190a:
              return "PlayerNotAllowedToCreateRoomMessage";
            case 0x190b:
              return "PlayerNotEnoughMessage";
            case 0x190d:
              return "RoomIsClosedMessage";
            case 0x1915:
              return "DisallowedJoinMultipleRoomMessage";
            default:
              return '';
          }
        },
        'canDismiss': function (Tq) {
          var Tm = +Tq;
          if (isNaN(Tm)) {
            return false;
          }
          switch (Tm) {
            case 0x1901:
            case 0x1902:
            case 0x1904:
            case 0x1906:
            case 0x190a:
            case 0x190b:
            case 0x190d:
            case 0x1915:
              return true;
            default:
              return false;
          }
        },
        'shouldRetry': function (Tq) {
          return !!isNaN(+Tq);
        },
        'canReload': function (Tq) {
          return !!isNaN(+Tq);
        }
      };
      function ej(Tq, Tm) {
        var TS = Tq + '';
        for (var Tw = Tm - TS.length; Tw-- > 0x0;) {
          TS = '0' + TS;
        }
        return TS;
      }
      function ek(Tq, Tm) {
        Tm = ej(Tm, 0x4);
        switch (Tq) {
          case 0x0:
            return 'C' + Tm;
          case 0x1:
            return 'S' + Tm;
          case 0x2:
            return 'N' + Tm;
          case 0x4:
            return 'G' + Tm;
          case 0x5:
            return 'W' + Tm;
          default:
            return '' + Tm;
        }
      }
      function eg(Tq, Tm, TS) {
        var Tw;
        var TE = '';
        var Tp = '';
        try {
          Tm = +Tm;
          switch (Tq) {
            case 0x0:
              TE = 'C';
              Tp = em.getMessageKey(Tm);
              break;
            case 0x1:
              TE = 'S';
              Tp = ew.getMessageKey(Tm);
              break;
            case 0x2:
              TE = 'N';
              Tp = eS.getMessageKey(Tm);
              break;
            case 0x4:
              TE = 'G';
              Tp = iA.getMessageKey(Tm);
              break;
            case 0x5:
              TE = 'W';
              Tp = eE.getMessageKey(Tm);
          }
        } catch (Tk) {}
        Tw = '' === Tp ? "ErrorLib.GenericMessage" : "ErrorLib." + Tp;
        var Tj = Pm.t("ErrorLib.ErrorCodeLabel");
        return Pm.t(Tw) + (Tm ? "\n(" + Tj + TE + ej(Tm, 0x4) + (TS || '') + ')' : '');
      }
      function eG(Tq, Tm, TS) {
        Tm = +Tm;
        this.message = eg(Tq, Tm, TS);
        this.domain = Tq;
        this.code = Tm;
        this.traceId = TS;
        this.name = "Err";
        this.stack = Error(this.message).stack;
      }
      for (var eb in Error) if (Error.hasOwnProperty(eb)) {
        eG[eb] = Error[eb];
      }
      eG.getLocalisedMessage = eg;
      eG.getUICode = ek;
      eG.prototype = Object.create(Error.prototype, {
        'constructor': {
          'value': eG,
          'writable': true,
          'configurable': true
        },
        'canReload': {
          'get': function () {
            var Tq = this.domain;
            var Tm = this.code;
            return Tq === 0x1 ? ew.canReload(Tm) : Tq === 0x2 ? eS.canReload(Tm) : Tq === 0x4 ? !isNaN(+Tm) : Tq === 0x5 ? !!isNaN(+Tm) : Tq === 0x0 && em.canReload(Tm);
          }
        },
        'shouldRetry': {
          'get': function () {
            var Tq = this.domain;
            var Tm = this.code;
            return Tq === 0x0 ? em.shouldRetry(Tm) : Tq === 0x1 ? ew.shouldRetry(Tm) : Tq !== 0x4 && (Tq !== 0x2 || Tm !== 0x193);
          }
        },
        'canDismiss': {
          'get': function () {
            var Tq = this.domain;
            var Tm = this.code;
            return Tq === 0x0 ? em.canDismiss(Tm) : Tq === 0x4 ? iA.canDismiss(Tm) : Tq === 0x1 ? ew.canDismiss(Tm) : Tq === 0x5 && eE.canDismiss(Tm);
          }
        },
        'uicode': {
          'get': function () {
            return ek(this.domain, this.code);
          }
        }
      });
      var eQ;
      var ed = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.on("Error.Occurred", this.cs);
          this.on("Error.Report", this.hs);
          this.on("Error.Log", this.ls);
          this.on("Error.SendExceptionReport", this.fs);
        };
        Tm.prototype.cs = function (TS) {
          var Tw = this;
          var TE = TS.payload;
          if (TE && TE.info) {
            var Tp = TE.info;
            var Tj = new eG(Tp.domain, Tp.code, Tp.trace);
            var Tk = [];
            this.ds(Tj, Tk);
            this.As(Tj, Tk);
            this.vs(Tj, Tk);
            TS.intercept();
            var Tg = {
              'title': this.ps(TE),
              'content': this.gs(Tj.message),
              'actions': Tk
            };
            this.emit("Alert.Show", Tg, function (TG) {
              if (!TG.error) {
                var Tb = Tk.length > 0x0 ? Tk[0x0].handler : '';
                Tw.bs(TG.response, Tb, TS);
              }
            });
            if (false !== TE.report) {
              this._s(Tp.category, Tp.domain, Tp.code, Tp.error, Tp.retry, Tp.messages);
            }
          }
        };
        Tm.prototype.fs = function (TS) {
          var Tw = TS.payload;
          if (Tw) {
            var TE = r.onerror;
            if (TE && TE.report) {
              TE.report(Tw);
            }
          }
        };
        Tm.prototype.ds = function (TS, Tw) {
          if (TS.shouldRetry) {
            var TE = Pm.t("General.DialogRetry");
            Tw.push({
              'label': TE,
              'handler': "retry",
              'type': "Affirmative"
            });
          }
        };
        Tm.prototype.As = function (TS, Tw) {
          if (TS.canReload && !TS.shouldRetry) {
            var TE = '';
            TE = TS.domain === 0x4 ? Pm.t("GameShell.Confirm") : Pm.t("General.DialogReload");
            Tw.push({
              'label': TE,
              'handler': "reload",
              'type': "Affirmative"
            });
          }
        };
        Tm.prototype.vs = function (TS, Tw) {
          if (TS.canDismiss) {
            var TE = '';
            TE = TS.domain === 0x4 ? Pm.t("GameShell.BtnCancel") : Pm.t("General.DialogOk");
            Tw.push({
              'label': TE,
              'handler': "dismiss",
              'type': "Neutral"
            });
          } else {
            TE = '';
            if (!(TS.domain === 0x4)) {
              TE = Pm.t("General.DialogQuit");
              Tw.push({
                'label': TE,
                'handler': "quit",
                'type': "Neutral"
              });
            }
          }
        };
        Tm.prototype.gs = function (TS) {
          if (TS.endsWith(')')) {
            var Tw = TS.lastIndexOf('(');
            TS = TS.substring(0x0, Tw) + "<span class=\"errorlabel\">" + TS.substring(Tw) + "<span/>";
          }
          return TS;
        };
        Tm.prototype.hs = function (TS) {
          var Tw = TS.payload;
          if (Tw) {
            this._s(Tw.category, Tw.domain, Tw.code, Tw.error, Tw.retry, Tw.messages);
          }
        };
        Tm.prototype.ls = function (TS) {
          var Tw = TS.payload;
          if (Tw) {
            i3.ga.sendEvent(Tw.tag, "log", Tw.message);
          }
        };
        Tm.prototype._s = function (TS, Tw, TE, Tp, Tj, Tk) {
          var Tg;
          var TG = [];
          TG.push(eG.getUICode(Tw, TE));
          if (Tp) {
            if ("string" == typeof Tp) {
              TG.push(Tp);
            } else if (Tp instanceof Error) {
              TG.push(Tp.message);
            } else {
              TG.push(Tp + '');
            }
          }
          if (Tk && Tk.length > 0x0) {
            TG = "string" == typeof Tk ? Z8(Z8([], TG, true), [Tk], false) : Z8(Z8([], TG, true), Tk, true);
          }
          var Tb = TG.map(function (TQ) {
            return TQ.replace(/https?:\/\/[^/]+/g, '');
          });
          (Tg = i3.ga).sendEvent.apply(Tg, Z8([TS, "fault"], Tb, false));
        };
        Tm.prototype.ps = function (TS) {
          switch (TS.context) {
            case "Preload":
              return Pm.t("General.ErrorPreloadError");
            case "Launch":
              return Pm.t("General.ErrorLaunchFailed");
            case "Login":
              return Pm.t("General.ErrorLoginFailed");
            case "Change":
              return Pm.t("General.ErrorChangeFailed");
            case "Unknown":
              return '';
            default:
              return Pm.t("General.ErrorTransactionFailed");
          }
        };
        Tm.prototype.bs = function (TS, Tw, TE) {
          var Tp = this.ws(TS);
          if ("Default" === Tp) {
            Tp = this.ws(Tw);
          }
          TE.response = Tp;
          TE.propagate();
        };
        Tm.prototype.ws = function (TS) {
          switch (TS) {
            case "retry":
              return "Retry";
            case "reload":
              return "Reload";
            case "dismiss":
            case "clear":
              return "Dismiss";
            case "quit":
              return "Quit";
            default:
              return "Default";
          }
        };
        return Tm;
      }(iD);
      var T0 = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.ue = -0x1;
          TS.xs = true;
          TS.ys = 0x0;
          TS.Hs = false;
          TS.Ss = [];
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.event.on("Shell.PWDReset", this.Vs, this);
          this.event.on("Shell.PWDEnabled", this.ks, this);
          this.event.on("Shell.PWDDisabled", this.Es, this);
          this.event.on("Shell.PWDUseCustomAlert", this.Cs, this);
          this.Ms();
        };
        Tm.prototype.onDestroy = function () {
          var TS = this;
          if (-0x1 !== this.ue) {
            r.clearTimeout(this.ue);
            this.ue = -0x1;
          }
          this.Ss.forEach(function (Tw) {
            TS.event.off(Tw, TS.Vs, TS);
          });
        };
        Tm.prototype.registerEvent = function (TS) {
          if (!this.Ss.includes(TS)) {
            this.Ss.push(TS);
            this.event.on(TS, this.Vs, this);
          }
        };
        Tm.prototype.unregisterEvent = function (TS) {
          if (this.Ss.includes(TS)) {
            var Tw = this.Ss.filter(function () {});
            this.Ss = Tw;
            this.event.off(TS, this.Vs, this);
          }
        };
        Tm.prototype.Vs = function () {
          this.ys = 0x0;
        };
        Tm.prototype.ks = function () {
          if (!this.xs) {
            this.xs = true;
            this.Vs();
            this.Ms();
          }
        };
        Tm.prototype.Es = function () {
          if (this.xs) {
            this.xs = false;
            clearTimeout(this.ue);
            this.ue = -0x1;
          }
        };
        Tm.prototype.Cs = function (TS) {
          var Tw = TS.payload;
          this.Hs = Tw;
        };
        Tm.prototype.Bs = function () {
          this.ys += 0x1388;
          if (this.ys >= 0xea60) {
            this.Es();
            this.Gs();
          } else {
            this.Ms();
          }
        };
        Tm.prototype.Ms = function () {
          var TS = this;
          if (-0x1 !== this.ue) {
            r.clearTimeout(this.ue);
          }
          this.ue = r.setTimeout(function () {
            TS.ue = -0x1;
            TS.Bs();
          }, 0x1388);
        };
        Tm.prototype.Gs = function () {
          var TS = this;
          var Tw = {
            'category': "game_shell",
            'domain': 0x4,
            'code': 0x3f1
          };
          this.emit("Error.Report", Tw);
          if (this.Hs) {
            var TE = {
              'title': '',
              'content': Pm.t("GameShell.MaxLoadTimeoutMsg"),
              'actions': [{
                'label': Pm.t("GameShell.BtnRefresh"),
                'handler': "refresh",
                'type': "Affirmative"
              }, {
                'label': Pm.t("GameShell.BtnWait"),
                'handler': "wait",
                'type': "Neutral"
              }]
            };
            this.emit("Alert.Show", TE, function (Tp) {
              var Tj = Tp.response;
              if (!(Tp.error || "refresh" !== Tj)) {
                TS.emit("Window.Reload");
              }
            });
          } else if (r.confirm("An error occurred, please reload.")) {
            setTimeout(function () {
              TS.emit("Window.Reload");
            }, 0x1f4);
          }
        };
        return Tm;
      }(iD);
      var T1 = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          var TS = this;
          this.rootElement = document.createElement("div");
          this.rootElement.className = "screen_safe_area";
          var Tw = document.createElement("div");
          Tw.appendChild(this.rootElement);
          this.rootElement = Tw;
          this.rootElement.className = "qpage";
          this.rootElement.innerHTML = "<div class=\"qpage_container\"><div class=\"qpage_content\"><div class=\"sprite_main_res ic_iconic qpage_boy\"></div><div class=\"qpage_title\">" + "<b>".concat(Pm.t("GameShell.QuitPageTitle"), "</b><br/>") + "</div><div class=\"qpage_desc\">" + "<b>".concat(Pm.t("GameShell.QuitPageDesc"), "</b><br/>") + "</div><div id=\"reload_button\" class=qpage_button>" + ''.concat(Pm.t("GameShell.ReturnToGame")) + " </div></div></div>";
          var TE = this.rootElement.querySelector("#reload_button");
          if (!(null == TE)) {
            TE.addEventListener("click", function () {
              TS.emit("Window.Reload");
            });
          }
          this.on("Shell.Scaled", function (Tp) {
            var Tj = Tp.payload;
            if (Tj && Tj.adjust) {
              Tj.adjust(TS.rootElement, "DesignWidthHeight");
            }
          });
          this.emit("Shell.GetScale", undefined, function (Tp) {
            if (!Tp.error) {
              var Tj = Tp.response;
              if (Tj && Tj.adjust) {
                Tj.adjust(TS.rootElement, "DesignWidthHeight");
              }
            }
          });
        };
        return Tm;
      }(iM);
      var T2 = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.on("Window.Redirect", this.Ps);
          this.on("Window.Reload", this.Zs);
          this.on("Window.Quit", this.Rs);
        };
        Tm.prototype.Ps = function (TS) {
          var Tw = this;
          var TE = v6 || r.location;
          var Tp = TE.origin;
          var Tj = TE.pathname;
          var Tk = TS.payload;
          if (Tk.startsWith('/') || Tk.startsWith('./') || Tk.startsWith("../")) {
            var Tg = ij(Tp, Tj);
            Tk = ib(Tk, Tg);
          } else {
            Tk = iQ(Tk);
          }
          try {
            var TG = new URL(Tk);
            this.emit("Shell.EnableUnloadAlert", false, function () {
              if (r.self !== r.top) {
                r.parent.postMessage({
                  'type': "Window.Redirect",
                  'url': TG.href
                }, '*');
              }
              r.location.replace(TG);
            });
          } catch (Tb) {
            this.emit("Error.Occurred", {
              'context': "Unknown",
              'info': {
                'category': "game_shell",
                'domain': 0x4,
                'code': 0x3f5
              },
              'report': true
            }, function () {
              Tw.emit("Window.Reload");
            });
          }
        };
        Tm.prototype.Zs = function () {
          this.emit("Shell.EnableUnloadAlert", false, function () {
            r.location.reload();
          });
        };
        Tm.prototype.Rs = function () {
          var TS = this;
          if (r.cc && cc.game) {
            cc.game.pause();
          }
          this.component.create(T1);
          if (r.close) {
            r.close();
          }
          setTimeout(function () {
            TS.view.appendTo(T1, "overlay");
          }, 0x1f4);
        };
        return Tm;
      }(iD);
      var T3 = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onStateChange = function (TS) {
          if (Tq.prototype.onStateChange) {
            Tq.prototype.onStateChange.call(this, TS);
          }
          this.onRun();
        };
        Tm.prototype.emitState = function (TS) {
          var Tw = this;
          if (TS.endsWith("Complete") && this.Os) {
            this.emit(this.Os, undefined, function (TE) {
              var Tp = function () {
                return Tw.emit("Shell.BootStateChanged", TS);
              };
              if (!TE.response || TE.error) {
                Tw.Ds(Tp);
              } else {
                Tw.emit("Shell.BootStateChanged", TS);
              }
            });
          } else {
            this.emit("Shell.BootStateChanged", TS);
          }
        };
        Tm.prototype.Ds = function (TS) {
          Promise.resolve(this.Ns || 0x0).then(function (Tw) {
            ev(Tw)();
          }).then(TS, function () {});
        };
        return Tm;
      }(iD);
      var T4 = function (Tq) {
        var Tm = vx.isIOS();
        var TS = vx.getOSMajorVersion();
        if (!(Tm && TS > 0xc) || 'en' !== Pm.locale() && 'ru' !== Pm.locale()) {
          return Tq;
        }
        var Tw = Tq && Tq.game;
        var TE = Tw && Tw.theme_font_family;
        if (TE && Array.isArray(TE)) {
          var Tp = TE[0x1] && TE[0x1].split(',');
          if (!Tp.includes("Helvetica Neue")) {
            Tp.push("Helvetica Neue");
          }
          TE[0x1] = Tp.join();
        }
        return Tq;
      };
      var T5 = function () {
        function Tq() {
          return [0xc8, 0xa, 0x12c].reduce(function (TS, Tw) {
            return TS * Tw;
          }, 0x90);
        }
        function Tm(TS, Tw, TE) {
          if (function (Tj) {
            return r[rQ(0x0)].now() === r[rQ(0x4)].max(r[rQ(0x0)].now(), Tj);
          }(TS)) {
            if (!Tw) {
              Tw = 0x64 * r.Number("0.0005");
            }
            if (TE) {
              var Tp = function (Tj, Tk) {
                var Tg = (r[rQ(0x0)].now() - Tj) / (Tk * Tq());
                return r[rQ(0x4)].min(0x1, Tg * Tg);
              }(TS, TE);
              Tw *= Tp;
            }
            "Mathew";
            return r["Mathew".substring(r.Number("0x0"), "Mathew".length + -0x2)].random() === r[rQ(0x4)].max(r["Mathew".substring(r.Number("0x0"), "Mathew".length + -0x2)].random(), Tw);
          }
          return true;
        }
        return [function () {
          return Tm(["0x4c72"].reduce(function (TS, Tw) {
            return TS + r.Number(Tw);
          }, 0x1d5) * Tq(), 0x64 * r.Number("0.0005"), 0x1c);
        }, Tm];
      }()[0x0];
      var T7 = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Qs = new JL();
          TS.Ts = '';
          TS.Ls = '';
          TS.Is = '';
          TS.Fs = '';
          TS.Ws = '';
          TS.zs = '';
          TS.Us = '';
          TS.qs = '';
          TS.ji = '';
          TS.Ys = '';
          TS.Js = '';
          TS.Xs = Object.create(null);
          TS.Ks = function (Tw) {
            switch (Tw.src) {
              case TS.Ts:
              case TS.Ls:
                var TE = Tw.response;
                if (/^CAkQ(xzA|C3z|2Q5)/.test(Tw.response)) {
                  TE = PD(Tw.response);
                }
                var Tp = TE.version;
                var Tj = Tw.src === TS.Ts ? TS.resource : Px.resource;
                if (0x2 !== Tp) {
                  throw Error("Unknown asset table format: ".concat(Tp));
                }
                Tj.addAssets(TE.assets);
                break;
              case TS.Is:
                TS.$s(Tw.response);
                break;
              case TS.ji:
                var Tk = T4(Tw.response);
                aL.extend(Tk);
                break;
              case TS.Ys:
                var Tg = Tw.response;
                if (/^CAkQ(xzA|C3z|2Q5)/.test(Tw.response)) {
                  Tg = PD(Tw.response);
                }
                Tp = Tg.version;
                Tj = Px.resource;
                if (0x2 !== Tp) {
                  throw Error("Unknown custom asset table format: ".concat(Tp));
                }
                Tj.addAssets(Tg.assets, TS.Js);
                break;
              case TS.zs:
              case TS.Ws:
              case TS.Us:
              case TS.qs:
              case TS.Fs:
                if (Tw.response) {
                  var TG = URL.createObjectURL(Tw.response);
                  TS.Xs[Tw.src] = TG;
                }
            }
          };
          TS.In = function () {
            if (r.confirm("Error loading game. Press [OK] to refresh or [Cancel] to ignore.")) {
              setTimeout(function () {
                TS.emit("Window.Reload");
              }, 0x1f4);
            }
          };
          TS.ta = function () {
            TS.Qs.onComplete = TS.na;
            TS.Qs.onLoad = TS.Ks;
            TS.Qs.onError = TS.In;
            TS.Is = TS.resource.resolveUrl("shell-res/locale.json");
            TS.qs = TS.ia("shell-res/main_res.png");
            TS.Us = TS.ia("shell-game-res/splash/launch.jpg", true);
            TS.zs = TS.ea();
            var Tw = [{
              'src': TS.qs,
              'type': JH.Blob
            }, {
              'src': TS.Us,
              'type': JH.Blob,
              'optional': true,
              'maxAttemptCount': 0x0
            }, {
              'src': TS.zs,
              'type': JH.Blob,
              'optional': true,
              'maxAttemptCount': 0x0
            }, {
              'src': TS.Is,
              'type': JH.Json
            }];
            TS.Ws = TS.ia("shell-res/footer.png");
            var TE = [TS.Ws];
            if ("port" === vx.getOrientationMode()) {
              TS.Fs = TS.ia("shell-res/copyright.png");
              TE.push(TS.Fs);
            }
            for (var Tp = 0x0; Tp < TE.length; Tp++) {
              Tw.push({
                'src': TE[Tp],
                'type': JH.Blob,
                'maxAttemptCount': 0x2
              });
            }
            if (Px.resource.hasEntry("shell-game-res/appearance/appearance.json")) {
              TS.ji = TS.ia("shell-game-res/appearance/appearance.json", true);
              Tw.push({
                'src': TS.ji,
                'type': JH.Json
              });
              TS.Qs.onComplete = TS.ra;
            }
            TS.Qs.load(Tw);
            TS.oa();
          };
          TS.ra = function () {
            TS.Qs.onComplete = TS.na;
            TS.Qs.onLoad = TS.Ks;
            TS.Qs.onError = TS.In;
            var Tw = [];
            var TE = TS.sa();
            if (TE) {
              Tw.push(TE);
            }
            var Tp = TS.aa();
            if (Tp) {
              Tw.push(Tp);
            }
            if (TS.Ys) {
              Tw.push({
                'src': TS.Ys,
                'type': JH.Json
              });
            }
            TS.Qs.load(Tw);
          };
          TS.na = function () {
            TS.emit("Shell.PWDEnabled");
            TS.ca();
            var Tw = TS.ha(T5);
            var TE = Tw[0x0];
            var Tp = Tw[0x1];
            TS.la = "ShellLoad".concat(Tp.slice(0x0, 0x1 + ~TE));
            setTimeout(function () {
              TS.emitState(TS.la);
              var Tj = TS.Xs;
              for (var Tk in Tj) URL.revokeObjectURL(Tj[Tk]);
            }, 0xc8);
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          this.emitState("ShellLoad");
          var TS;
          var Tw;
          var TE;
          var Tp = [];
          var Tj = vx.getURLSearchParam().get("shell_custom_asset");
          var Tk = vx.getURLSearchParam().get("shell_asset_path");
          this.Ys = Tj && (Tw = (TS = Tj).startsWith(rA.SharedPath), TE = TS.endsWith(".json"), Tw && TE ? TS : '');
          this.Js = Tk && function (Tb) {
            var TQ = Tb.startsWith(rA.SharedPath);
            var Td = Tb.includes("/game-res/");
            return TQ && Td ? Tb : '';
          }(Tk);
          if (this.Ys) {
            if (this.Ys.endsWith(".json")) {
              this.Js = this.Js ? this.Js : this.Ys.substring(0x0, this.Ys.lastIndexOf('/') + 0x1);
            } else {
              this.Ys = '';
              this.Js = '';
            }
          }
          var Tg = this.context.bundleInfo;
          if (/^CAkQ(xzA|C3z|2Q5)/.test(Tg.assets)) {
            var TG = PD(Tg.assets);
            if (Tg.assets) {
              this.resource.addAssets(TG.assets);
            }
          } else if ("string" == typeof Tg.assets) {
            this.Ts = ij(Tg.baseUrl, Tg.assets);
            Tp.push({
              'src': this.Ts,
              'type': JH.Json
            });
          } else if (Tg.assets) {
            this.resource.addAssets(Tg.assets.assets);
          }
          if ("string" == typeof rA.AssetTable) {
            this.Ls = ij(Px.bundleInfo.baseUrl, rA.AssetTable);
            Tp.push({
              'src': this.Ls,
              'type': JH.Json
            });
          } else {
            Px.resource.addAssets(rA.AssetTable.assets);
          }
          if (Tp.length > 0x0) {
            this.Qs.onComplete = this.ta;
            this.Qs.onLoad = this.Ks;
            this.Qs.onError = this.In;
            this.Qs.load(Tp);
          } else {
            this.ta();
          }
        };
        Tm.prototype.oa = function () {
          r.dataLayer.push({
            'event': "wasm_support_ready"
          });
        };
        Tm.prototype.ha = function (TS) {
          return [+!!TS(), "Completed"];
        };
        Tm.prototype.$s = function (TS) {
          for (var Tw in TS) if (TS[Tw]) {
            Pm.extend(TS[Tw], Tw);
          }
        };
        Tm.prototype.ea = function () {
          var TS = aL.v("shell.splash");
          if (!TS) {
            TS = this.ia("shell-game-res/splash/splash.jpg", true);
          }
          return TS;
        };
        Tm.prototype.ca = function () {
          var TS = document.createElement("style");
          TS.id = "shell-css";
          var Tw = '';
          Tw = "body,canvas,div{-webkit-tap-highlight-color:rgba(0,0,0,0);display:block;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}video{height:100%;width:100%}body{-ms-scroll-chaining:none;height:100vh;margin:0;overscroll-behavior:contain;width:100vw}canvas{background-color:transparent}a:active,a:hover,a:link,a:visited{color:#666}p.header{font-size:small}p.footer{font-size:x-small}.game-shell{font-family:PingFang SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;touch-action:none}.screen_compat{height:auto;margin:auto;max-height:780px;min-height:640px;position:absolute;width:360px}.screen_compat_land{height:360px;margin:auto;max-width:780px;min-width:640px;position:absolute;width:auto}.screen_safe_area{height:640px;width:360px;z-index:0}.screen_safe_area,.screen_safe_area_land{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.screen_safe_area_land{height:360px;width:640px}.background_ios11{height:100vmax;position:absolute}.screen_color{background-color:#000}#splash{background-image:url(splash/splash.jpg);background-position:50%;background-size:cover;position:absolute}#background-img{background-image:url(splash/launch.jpg);background-position:50%}#landscape_cover{align-items:center;background-color:#000;flex-direction:column;height:100vh;justify-content:center;left:0;opacity:.85;position:absolute;top:0;width:100%;z-index:1050}#landscape_cover img{margin-bottom:20px;width:10%}#landscape_cover p{color:#fff;font-size:5.5vmin;margin:0;padding:0}#orientation_cover{align-items:center;background-color:#000;flex-direction:column;height:100vh;justify-content:center;left:0;opacity:.85;position:absolute;top:0;width:100%;z-index:1050}#orientation_cover img{margin-bottom:20px;width:10%}#orientation_cover p{color:#fff;font-size:5.5vmin;margin:0;padding:0}.orientation_cover_flex{display:flex}.orientation_cover_none{display:none}.landscape_cover_flex{display:flex}.landscape_cover_none{display:none}.mirror{transform:scaleX(-1)}.direction_rtl{direction:rtl}.rotate_icon_scale_translate{transform:scale(1.8) translateY(-50%)}.rotate_icon_scale_translate_land{transform:scale(1.8) translateY(-50%) rotate(270deg)}.rotate_icon_scale_translate.mirror{transform:scale(-1.8,1.8) translateY(-50%)}#tips-text{margin-top:4px;text-align:center;text-overflow:ellipsis;width:90%}.tips-text-child2-hidden{display:none}.tips-text-child2{margin-left:5px}.tips-text-child2-rtl{margin-right:5px}@media only screen and (orientation:landscape){.background_ios11{height:100vmin}.landscape_cover_show{display:flex}}.splash_hidden{visibility:hidden}.start-button-container-land,.start-button-container-land-pc,.start-button-container-port{align-items:center;display:flex;justify-content:center;left:0;margin:auto;position:absolute;right:0}.start-button-container-port{height:32px;top:481px;width:151.7px}.start-button-container-land,.start-button-container-land-pc{font-size:12px;height:22px;top:271px;width:106px}.start-button{background-color:#30a2d0;border:2px solid rgba(0,0,0,.15);border-radius:8px;text-shadow:0 2px 3px #30a2d0}.start-button-show-land,.start-button-show-land-pc,.start-button-show-port{animation-name:show-bounce}.start-button-show-land,.start-button-show-land-pc{animation-name:show-bounce-land}.start-button-inner{background-image:linear-gradient(180deg,hsla(0,0%,100%,.5),hsla(0,0%,100%,0));background-origin:border-box;border:.87px solid hsla(0,0%,100%,.4);border-radius:6px;bottom:0;left:0;position:absolute;right:0;top:0}.custom-start-button-inner{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:100%}@keyframes show-bounce{0%{transform:scale(0)}20%{transform:scale(1.2)}50%{transform:scale(.98)}to{transform:scale(1)}}@keyframes show-bounce-land{0%{transform:scale(0)}20%{transform:scale(.84)}50%{transform:scale(.68)}to{transform:scale(.7)}}.text-land,.text-land-pc,.text-port{color:#fff;font-size:10.3px;margin:0;padding:0}.text-land,.text-land-pc{transform:scale(.8)}.start-button .text-land,.start-button .text-land-pc,.start-button .text-port{font-size:12px;font-weight:900}.version{bottom:86px;font-size:12px;position:absolute;text-align:center;width:100%}.dark .text-port{color:#000}.animationTipsContainer-land,.animationTipsContainer-land-pc,.animationTipsContainer-port{align-items:center;display:flex;flex-direction:column;height:35px;margin:522px auto 0;position:relative;width:100%}.animationTipsContainer-port{margin-top:522px;z-index:1}.animationTipsContainer-land,.animationTipsContainer-land-pc{margin-top:288px;transform:scale(.8)}.ui_block_page{margin:auto;z-index:1100}.ui_block,.ui_block_page{background-color:#000;bottom:0;left:0;opacity:.6;position:absolute;right:0;top:0}.ui_block{transform:translateZ(0)}@keyframes ui_block_show{0%{opacity:0}to{opacity:.6}}@keyframes ui_block_hide{0%{opacity:.6}to{opacity:0}}.custom_alert .content .btn_content .button,.custom_alert .content .btn_content .custom_button{color:inherit;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.custom_alert{display:block;display:none;height:100%;height:640px;margin:auto;position:absolute;width:inherit;width:360px;z-index:1000}.custom_alert .content{background-color:#fff;border-radius:6px;box-shadow:1px 1px 8.7px #444;position:absolute;text-align:center;width:243px}.custom_alert .content .message,.custom_alert .content .title{font-size:14px;margin-left:5%;margin-right:5%;width:90%}.custom_alert .content .message{white-space:normal}.custom_alert .content .title_padding{padding-bottom:0;padding-top:9.7px}.custom_alert .content .message_padding{padding-bottom:9.7px;padding-top:9.7px}.custom_alert .content .single_content_padding{padding-bottom:9.7px;padding-top:19.3px}.custom_alert .content .line_separator{border-bottom:1px solid #000;opacity:.1;padding-top:8.7px}.custom_alert .content .btn_content_row{display:table;table-layout:fixed;width:100%}.custom_alert .content .btn_content .button{animation:btn_release .1s linear forwards;padding:9.7px 10px 11.3px}.custom_alert .content .btn_content .button:active{animation:btn_press .1s linear forwards}.custom_alert .content .btn_content .custom_button{align-items:center;display:flex;height:32px;justify-content:center}.custom_alert .content .btn_content .row{display:table-cell}.custom_alert .content .btn_content .btn_separator_height{background-color:#000;height:1px;opacity:.1;width:inherit}.custom_alert .content .btn_content .btn_separator_width{background-color:#000;height:inherit;opacity:.1;width:1px}.custom_alert .custom_content{padding:20px}@media screen and (orientation:portrait){.custom_alert{display:block;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}}@media screen and (orientation:landscape){.custom_alert{display:none;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}}.custom_alert_ignore_orientation{display:block;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}@keyframes custom_alert_anim_show{0%{opacity:0}60%{opacity:1;transform:scale(1)}80%{opacity:1;transform:scale(1.12)}to{opacity:1;transform:scale(1)}}@keyframes custom_alert_anim_hide{0%{opacity:1}to{opacity:0}}.custom_alert_show{animation:custom_alert_anim_show .3s linear forwards}@keyframes btn_press{0%{opacity:1}to{opacity:.5}}@keyframes btn_release{0%{opacity:.5}to{opacity:1}}.errorlabel{font-size:10px}.animated_text_wrap{color:#fff;font-size:10px;height:26px;line-height:26px;position:relative;text-align:center;width:100%}.dark .animated_text_wrap{color:#000}.animated_text_wrap_hide{display:none}.animated_text{align-items:center;display:flex;flex-direction:column;height:26px;justify-content:flex-start;line-height:13px;margin:0;opacity:0;position:absolute;top:100%;width:100%}.animated-text-move-to-top-port,.animated-text-reset-to-bottom-port{opacity:0}.animated-text-reset-to-bottom-port{top:26px}.animated-text-move-to-top-port,.animated_text_move_to_center{transition:top 1s,opacity 1s;transition-timing-function:linear}.animated_text_move_to_center{opacity:1;top:0}.animated-text-move-to-top-port{top:-30px}.sprite_main_res{background-image:url(shell-res/main_res.png);background-repeat:no-repeat;background-size:222px 248px;display:inline-block}.ic_360{background-position:-162px -217px;height:21px;width:20px}.ic_arrow_back{background-position:-110px -181px;height:22px;width:22px}.ic_arrow_right{background-position:-211px -95px;height:12px;width:8px}.ic_chrome{background-position:-182px -193px;height:20px;width:20px}.ic_close_white{background-position:-187px -95px;height:22px;width:22px}.ic_dialog_close{background-position:-134px -181px;height:22px;width:22px}.ic_iconic{background-position:-1px -1px;height:178px;width:158px}.ic_ios_share_button{background-position:-184px -215px;height:23px;width:16px}.ic_operator_logo_details{background-position:-68px -223px;height:24px;width:92px}.ic_operator_select{background-position:-187px -119px;height:22px;width:22px}.ic_pg_logo{background-position:-68px -181px;height:40px;width:40px}.ic_pg_logo_small{background-position:-110px -205px;height:12px;width:27px}.ic_qq{background-position:-187px -143px}.ic_qq,.ic_quark{height:22px;width:22px}.ic_quark{background-position:-187px -167px}.ic_rotate_screen{background-position:-161px -1px;height:60px;width:60px}.ic_step_1{background-position:-204px -191px;height:14px;width:14px}.ic_step_2{background-position:-139px -205px;height:14px;width:15px}.ic_step_arrow{background-position:-211px -109px;height:12px;width:7px}.ic_swipeup_arrow{background-position:-161px -63px;height:128px;width:24px}.ic_swipeup_hand{background-position:-1px -181px;height:55px;width:65px}.ic_swipeup_round{background-position:-187px -63px;height:30px;width:30px}.ic_uc{background-position:-158px -193px;height:22px;width:22px}.loading-container-land,.loading-container-land-pc,.loading-container-port{align-items:center;display:flex;flex-direction:column;left:0;position:absolute;right:0}.loading-container-port{top:477px}.loading-container-land,.loading-container-land-pc{top:265px}.progress-bar-container-land,.progress-bar-container-land-pc,.progress-bar-container-port{background-color:initial;height:13px;position:relative;width:212px}.progress-bar-container-land,.progress-bar-container-land-pc{transform:scale(.7)}.progress-bar-background{background-color:#111;border-radius:3.5px;height:100%;position:absolute;width:100%}.progress-bar-outline{border-radius:3.5px;bottom:0;left:0;position:absolute;right:0;top:0;transform:translateZ(0)}.border-inner{border:1.7px solid #272727}.border-outer{border:.85px solid #111}.progress-bar-fill-container{bottom:.87px;left:.87px;position:absolute;right:.87px;top:.87px}.progress-bar-fill{-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#30a2d0;background-size:8.7px 100%;border-radius:3.5px;height:100%;position:absolute;width:0}.stripes{animation-duration:1s;animation-iteration-count:infinite;animation-name:animate-stripes;animation-timing-function:linear;background-image:linear-gradient(-75deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.1) 0,hsla(0,0%,100%,.1) 75%,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0))}.front-highlight{background-image:linear-gradient(90deg,hsla(0,0%,100%,0),#fff);border-radius:0 3.5px 3.5px 0;height:100%;max-width:20px;right:0;width:50%}.front-highlight,.top-highlight{position:absolute;transform:translateZ(0)}.top-highlight{background-color:hsla(0,0%,100%,.2);border-radius:3.5px 3.5px 0 0;height:50%;width:100%}@keyframes animate-stripes{0%{background-position:0 0}to{background-position:34.7px 0}}.custom-progress-bar-container{align-items:center;display:flex;height:40px;justify-content:center;width:240px}.custom-progress-bar-background{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;position:absolute;top:0;width:100%;z-index:3}.custom-progress-bar-fill-container{border-radius:3px;height:24px;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:221px;z-index:2}#npveSplash{z-index:975}.npve_container .npve_bottom_content .npve_bottom_button_title_land,.npve_container .npve_bottom_content .npve_bottom_button_title_port,.npve_container .npve_bottom_content .npve_bottom_land,.npve_container .npve_bottom_content .npve_bottom_port,.npve_container .npve_bottom_content .npve_grid_1,.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc,.npve_container .npve_bottom_content .npve_text_bold_port,.npve_container .npve_bottom_content .npve_text_content_land,.npve_container .npve_bottom_content .npve_text_content_port,.npve_container .npve_bottom_content .npve_text_note_land,.npve_container .npve_bottom_content .npve_text_note_port,.npve_container .npve_bottom_content .npve_text_wrapper_land,.npve_container .npve_bottom_content .npve_text_wrapper_port,.npve_container .npve_middle_content .npve_main_desc_land,.npve_container .npve_middle_content .npve_main_desc_port{transform:scale(.87)}.npve_container .npve_middle_content .npve_continue_desc_land,.npve_container .npve_middle_content .npve_continue_desc_port{transform:scale(.75)}.npve_screen_compact{background-color:#fff;height:640px;margin:auto;position:absolute;transform:translateZ(0);width:360px}.npve_visible{visibility:visible}.npve_container{background-color:#fff;display:flex;flex-direction:column;font-size:12px;height:100%;position:relative;width:100%}.npve_container .npve_top_content{display:flex;justify-content:space-between;margin:26px}.npve_container .npve_top_content .title{color:#000;font-size:16px;line-height:16px;max-width:216.7px;text-align:right}.npve_container .npve_middle_content_port{margin:0 43.3px}.npve_container .npve_middle_content{align-items:center;display:flex;flex-direction:column;justify-content:center}.npve_container .npve_middle_content .npve_iconic_port{display:table;transform:scale(.87)}.npve_container .npve_middle_content .npve_iconic_land{display:table;margin-top:-90px;transform:scale(.62)}.npve_container .npve_middle_content .npve_main_desc_land,.npve_container .npve_middle_content .npve_main_desc_port{color:#000;display:flex;line-height:20px}.npve_container .npve_middle_content .npve_main_desc_port{line-height:26px;margin-top:-16px;min-height:150px;text-align:justify;width:312px}.npve_container .npve_middle_content .npve_main_desc_land{justify-content:center;margin:-25px 0 10px;min-height:50px;text-align:center;width:700px}.npve_container .npve_middle_content .npve_continue_button:hover,.npve_container .npve_middle_content .npve_continue_button_land:hover,.npve_container .npve_middle_content .npve_continue_button_port:hover{cursor:pointer;opacity:.5}.npve_container .npve_middle_content .npve_continue_button,.npve_container .npve_middle_content .npve_continue_button_land,.npve_container .npve_middle_content .npve_continue_button_port{background-color:rgba(81,211,33,.2);border:1px solid #51d321;border-radius:4px;color:#50d221;text-align:center;width:100%}.npve_container .npve_middle_content .npve_continue_button_port{height:43.3px;line-height:43.3px}.npve_container .npve_middle_content .npve_continue_button_land{font-size:13px;height:32px;line-height:32px;width:314px}.npve_container .npve_middle_content .npve_continue_button_active{opacity:.5}.npve_container .npve_middle_content .npve_continue_desc_land,.npve_container .npve_middle_content .npve_continue_desc_port{color:#000;line-height:17.3px;opacity:.3;text-align:center}.npve_container .npve_middle_content .npve_continue_desc_port{margin-top:5px;width:364px}.npve_container .npve_middle_content .npve_continue_desc_land{height:34px;margin-top:8px;width:736px}.npve_container .npve_bottom_content_port{min-height:130px}.npve_container .npve_bottom_content_land{max-height:80px;min-height:60px}.npve_container .npve_bottom_content{bottom:0;display:flex;flex:1;flex-direction:column;left:0;position:absolute;right:0}.npve_container .npve_bottom_content .npve_separate_line_port{background-color:#000;height:1.3px;margin-left:43.3px;margin-right:43.3px;margin-top:10px;opacity:.1}.npve_container .npve_bottom_content .npve_separate_line_land{background-color:#000;height:1.3px;margin-left:20px;margin-right:20px;opacity:.1}.npve_container .npve_bottom_content .npve_bottom_port{display:block}.npve_container .npve_bottom_content .npve_bottom_land{align-items:center;display:flex;justify-content:center;min-height:60px}.npve_container .npve_bottom_content .npve_bottom_button_title_land,.npve_container .npve_bottom_content .npve_bottom_button_title_port,.npve_container .npve_bottom_content .npve_text_wrapper_land,.npve_container .npve_bottom_content .npve_text_wrapper_port{color:#000;flex:1;line-height:14px}.npve_container .npve_bottom_content .npve_bottom_button_title_port{margin-bottom:10px;margin-top:10px;text-align:justify}.npve_container .npve_bottom_content .npve_bottom_button_title_land{display:block;margin-right:30px;max-width:260px;min-width:260px;text-align:center}.npve_container .npve_bottom_content .npve_text_wrapper_port{text-align:justify}.npve_container .npve_bottom_content .npve_text_wrapper_land{align-items:center;display:flex;flex-direction:column;justify-content:center}.npve_container .npve_bottom_content .npve_text_content_land,.npve_container .npve_bottom_content .npve_text_content_port{align-items:center;display:flex}.npve_container .npve_bottom_content .npve_text_content_port{justify-content:left}.npve_container .npve_bottom_content .npve_text_content_land{justify-content:center;width:736px}.npve_container .npve_bottom_content .npve_text_bold_port{font-weight:700;margin:10px 0}.npve_container .npve_bottom_content .npve_text_bold_land{font-weight:700;margin-right:16px;max-width:200px;text-align:center}.npve_container .npve_bottom_content .npve_line_text_port{max-width:130px;text-align:justify}.npve_container .npve_bottom_content .npve_line_text_land{max-width:250px;text-align:justify}.npve_container .npve_bottom_content .npve_line_num{margin-right:12px;min-width:14px;transform:scale(1.2)}.npve_container .npve_bottom_content .npve_line_arrow_land,.npve_container .npve_bottom_content .npve_line_arrow_port{min-width:7px;transform:scale(1.2)}.npve_container .npve_bottom_content .npve_line_arrow_port{margin:0 20px}.npve_container .npve_bottom_content .npve_line_arrow_land{margin:0 16px}.npve_container .npve_bottom_content .npve_text_note_land,.npve_container .npve_bottom_content .npve_text_note_port{line-height:16px;opacity:.3}.npve_container .npve_bottom_content .npve_text_note_port{margin-top:15px;text-align:justify}.npve_container .npve_bottom_content .npve_text_note_land{margin-top:11px;text-align:center;width:736px}.npve_container .npve_bottom_content .npve_grid_1{align-items:center;display:flex;flex:2;justify-content:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content:hover{color:#0f55cc;cursor:pointer}.npve_container .npve_bottom_content .npve_grid_1 .grid_content{align-items:center;color:#000;display:flex;flex:1;flex-direction:column}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row{align-items:center;display:flex;flex-direction:row}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_icon{min-width:20px}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc{display:block;line-height:12px;margin-left:5px;max-width:150px;text-align:left}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_title{text-decoration:underline}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_seperator{height:5px}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_content{opacity:.3}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc_active_color{color:#0f55cc}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text{color:#000;display:flex;flex:1;line-height:10px;opacity:.3;text-align:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_center{justify-content:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_left{justify-content:flex-start}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_right{justify-content:flex-end}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_center{align-items:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_left{align-items:flex-start}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_right{align-items:flex-end}.qpage{background-color:#fff;height:640px;margin:auto;position:absolute;width:360px;z-index:975}.qpage_container{background-color:#fff;display:flex;flex-direction:column;height:100%;text-align:center;width:100%;z-index:950}.qpage_container .qpage_content{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.qpage_container .qpage_content .qpage_boy{transform:scale(.82)}.qpage_container .qpage_content .qpage_title{color:#000;font-size:20px;line-height:20px;position:relative;text-align:center;top:0;width:80%}.qpage_container .qpage_content .qpage_desc{color:#000;font-size:11.3px;line-height:14px;opacity:.3;position:relative;text-align:center;top:8.7px;width:80%}.qpage_container .qpage_content .qpage_button{background-color:rgba(24,17,84,.075);border-radius:2px;color:#000;font-size:10.3px;height:36.3px;line-height:36.3px;margin-top:20px;max-width:303.3px;min-width:156px}.footer-container{display:flex;height:77px}.footer-container,.footer-mask-container-land,.footer-mask-container-port{bottom:0;position:absolute;width:100%}.footer-mask-container-port{display:flex;flex-direction:column;height:229px}.footer-mask-container-land{height:131px}.footer-mask{height:100%;position:absolute;width:100%}.footer-mask-black{background-image:linear-gradient(180deg,rgba(0,0,0,.03),#000)}.footer-mask-color{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#fff)}.footer-container img{height:117px;width:100%}.footer-image-container{display:flex;height:100%;justify-content:center;position:absolute;width:100%;z-index:0}#footer-copyright-image{background-image:url(shell-res/copyright.png);background-position:50%;background-size:cover;height:12px;position:absolute;transform:scale(.6);width:480px}.footer-text-img{transition:.2s}.logo-container{align-items:center;display:flex;flex-direction:row-reverse;position:absolute;right:0}.swipeup_text{bottom:40px;font-size:12px}.swipeup_container,.swipeup_text{color:#fff;left:0;position:absolute;right:0}.swipeup_container{bottom:0;height:270px;margin:auto;top:0;width:224px}.swipeup_slide_container{left:50%;position:absolute;top:29px;transform:scale(1);transform-origin:center top}.swipeup_background{animation:swipeup_background_anim .75s forwards;background-color:#000;border-radius:7px;height:100%;opacity:.8;width:100%}.swipeup_arrow{animation:swipeup_arrow_fade_anim,swipeup_arrow_clip_anim;animation-duration:2.4s,2.4s;animation-iteration-count:infinite,infinite;animation-timing-function:ease,cubic-bezier(.84,0,.16,1);left:-12px;opacity:0;position:absolute}.swipeup_slide{animation:swipeup_slide_anim;animation-duration:2.4s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.84,0,.16,1);position:absolute;top:126px}.swipeup_round{animation:swipeup_round_anim 2.4s infinite;left:-16px;opacity:1;position:absolute;top:-20px}.swipeup_hand{animation:swipeup_hand_anim 2.4s infinite;left:-9px;opacity:1;position:absolute;top:-12px}@keyframes swipeup_background_anim{0%{opacity:0}to{opacity:.8}}@keyframes swipeup_arrow_clip_anim{0%,33%{height:129px}to{height:0}}@keyframes swipeup_arrow_fade_anim{0%,17%{opacity:0}50%,to{opacity:.6}}@keyframes swipeup_slide_anim{0%,33%{transform:translateY(0)}to{transform:translateY(-120px)}}@keyframes swipeup_round_anim{0%{opacity:0}33%,to{opacity:1}}@keyframes swipeup_hand_anim{0%{transform:scale(1)}33%,to{transform:scale(.9)}}#canvas-shadow{background-color:#000;display:block;-webkit-filter:drop-shadow(2px 2px 10px rgba(0,0,0,.5));filter:drop-shadow(2px 2px 10px rgba(0,0,0,.5));height:736px;position:absolute;width:414px}";
          var TE = this.Xs;
          Tw = Tw.replace("shell-res/main_res.png", TE[this.qs]);
          delete TE[this.qs];
          if ("port" === vx.getOrientationMode()) {
            Tw = Tw.replace("shell-res/copyright.png", TE[this.Fs]);
          }
          this.fa(TE[this.Ws]);
          delete TE[this.Ws];
          Tw = (Tw = Tw.replace("splash/launch.jpg", TE[this.Us])).replace("splash/splash.jpg", TE[this.zs]);
          TS.innerHTML = Tw;
          document.head.appendChild(TS);
        };
        Tm.prototype.ia = function (TS, Tw) {
          if (undefined === Tw) {
            Tw = false;
          }
          return Tw ? Px.resource.resolveUrl(TS) : this.resource.resolveUrl(TS);
        };
        Tm.prototype.sa = function () {
          if (aL.v("start_button.enable")) {
            var TS = aL.v("start_button.mode");
            var Tw = aL.v("start_button.image");
            if (TS && Tw && Px.resource.hasEntry(Tw)) {
              return {
                'src': Px.resource.resolveUrl(Tw),
                'type': JH.Image
              };
            }
          }
        };
        Tm.prototype.aa = function () {
          if (aL.v("loading_bar.enable")) {
            var TS = aL.v("loading_bar.mode");
            var Tw = aL.v("loading_bar.background_image");
            if (TS && Tw && Px.resource.hasEntry(Tw)) {
              return {
                'src': Px.resource.resolveUrl(Tw),
                'type': JH.Image
              };
            }
          }
        };
        Tm.prototype.fa = function (TS) {
          this.component.updateState(aE, {
            'state': "init",
            'certBlobUrl': TS
          });
        };
        return Tm;
      }(T3);
      !function (Tq) {
        Tq[Tq.Disabled = 0x0] = "Disabled";
        Tq[Tq.Enabled = 0x1] = "Enabled";
        Tq[Tq.NotSupported = -0x1] = "NotSupported";
      }(eQ || (eQ = {}));
      var T8;
      var T9;
      var TZ;
      var TH;
      var TO = {
        'da': undefined,
        'getWebGLStatus': function () {
          if (undefined === this.da) {
            this.da = function () {
              if (r.WebGLRenderingContext) {
                var Tq = r.document.createElement("canvas");
                var Tm = 0x0;
                for (var TS = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"]; Tm < TS.length; Tm++) {
                  var Tw = TS[Tm];
                  try {
                    var TE = Tq.getContext(Tw);
                    if (TE && "function" == typeof TE.getParameter) {
                      return eQ.Enabled;
                    }
                  } catch (Tp) {}
                }
                return eQ.Disabled;
              }
              return eQ.NotSupported;
            }();
          }
          return this.da;
        }
      };
      !function (Tq) {
        Tq[Tq.WebGLNotSupported = 0x1] = "WebGLNotSupported";
        Tq[Tq.WebGLSupportedButDisabled = 0x2] = "WebGLSupportedButDisabled";
        Tq[Tq.BrowserVersionTooLow = 0x3] = "BrowserVersionTooLow";
        Tq[Tq.BrowserNotInclude = 0x4] = "BrowserNotInclude";
        Tq[Tq.LowSpec = 0x5] = "LowSpec";
        Tq[Tq.NativeBrowserTooLow = 0x6] = "NativeBrowserTooLow";
        Tq[Tq.OSVersionTooLow = 0x7] = "OSVersionTooLow";
        Tq[Tq.NativeWebGLNotSupported = 0x8] = "NativeWebGLNotSupported";
        Tq[Tq.AdblockDetected = 0x9] = "AdblockDetected";
        Tq[Tq.APINotDetected = 0xa] = "APINotDetected";
        Tq[Tq.ES6NotSupported = 0xb] = "ES6NotSupported";
        Tq[Tq.InsecureContext = 0xc] = "InsecureContext";
      }(T8 || (T8 = {}));
      (function (Tq) {
        Tq[Tq.QuitPage = 0x0] = "QuitPage";
        Tq[Tq.Continue = 0x1] = "Continue";
      })(T9 || (T9 = {}));
      (function (Tq) {
        Tq[Tq.Top = 0x1] = "Top";
        Tq[Tq.Middle = 0x2] = "Middle";
      })(TZ || (TZ = {}));
      (function (Tq) {
        Tq[Tq.Auto = 0x0] = "Auto";
        Tq[Tq.Chrome = 0x1] = "Chrome";
        Tq[Tq.QQ = 0x2] = 'QQ';
        Tq[Tq.UC = 0x3] = 'UC';
        Tq[Tq.Quark = 0x4] = "Quark";
      })(TH || (TH = {}));
      var TC;
      var TL;
      var Tx;
      var Tv = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Aa = undefined;
          TS.va = undefined;
          TS.pa = undefined;
          TS.ma = [];
          TS.ba = function () {
            if (TS.Aa) {
              TS.Aa();
            }
          };
          TS._a = function (Tw) {
            var TE = Tw.currentTarget;
            if (TE) {
              TE.classList.add("npve_continue_button_active");
            }
          };
          TS.wa = function (Tw) {
            var TE = Tw.currentTarget;
            if (TE) {
              TE.classList.remove("npve_continue_button_active");
            }
          };
          TS.xa = function (Tw) {
            var TE = Tw.currentTarget;
            if (TE) {
              var Tp = TE.querySelector(".grid_row .grid_desc");
              if (Tp) {
                Tp.classList.add("grid_desc_active_color");
              }
            }
          };
          TS.ya = function (Tw) {
            var TE = Tw.currentTarget;
            if (TE) {
              var Tp = TE.querySelector(".grid_row .grid_desc");
              if (Tp) {
                Tp.classList.remove("grid_desc_active_color");
              }
            }
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {};
        Tm.prototype.onStateChange = function (TS) {
          var Tw = this;
          if (this.rootElement) {
            this.rootElement.classList.remove("npve_dismiss");
            this.rootElement.classList.add("npve_visible");
          } else {
            var TE = this.Ha(TS.reason, TS.onContinue, TS.onDiscontinue);
            this.T = vx.getOrientationMode();
            this.rootElement = this.Sa("npve_visible npve_screen_compact", undefined, "npveSplash");
            var Tp = this.Sa("port" === this.T ? "screen_safe_area" : "screen_safe_area_".concat(this.T));
            var Tj = this.Va();
            var Tk = this.ka();
            var Tg = this.Ea(TE.descText);
            var TG = this.Ca(TE, TS);
            Tj.appendChild(Tk);
            Tj.appendChild(Tg);
            if (TG) {
              Tj.appendChild(TG);
            }
            this.rootElement.appendChild(Tp);
            this.rootElement.appendChild(Tj);
            if (this.pa) {
              r.addEventListener("beforeunload", this.pa);
            }
            this.on("Shell.Scaled", function (Tb) {
              var TQ = Tb.payload;
              if (TQ.adjust) {
                TQ.adjust(Tw.rootElement, "DesignWidthHeight");
              }
            });
          }
          this.emit("Shell.GetScale", undefined, function (Tb) {
            if (!Tb.error) {
              var TQ = Tb.response;
              if (null == TQ ? undefined : TQ.adjust) {
                TQ.adjust(Tw.rootElement, "DesignWidthHeight");
              }
            }
          });
        };
        Tm.prototype.onShow = function () {};
        Tm.prototype.onDestroy = function () {
          for (var TS = 0x0; TS < this.ma.length; TS++) {
            var Tw = document.getElementById("pveBtn_".concat(TS));
            if (Tw) {
              Tw.removeEventListener("click", this.ma[TS]);
            }
            if (Tw) {
              Tw.removeEventListener("touchstart", this.xa);
            }
            if (Tw) {
              Tw.removeEventListener("touchend", this.ya);
            }
          }
          if (this.va) {
            this.va.removeEventListener("click", this.ba);
          }
          if (this.va) {
            this.va.removeEventListener("touchstart", this._a);
          }
          if (this.va) {
            this.va.removeEventListener("touchend", this.wa);
          }
          if (this.pa) {
            r.removeEventListener("beforeunload", this.pa);
          }
          var TE = this.rootElement.parentNode;
          if (TE) {
            TE.removeChild(this.rootElement);
          }
          this.Aa = undefined;
          this.va = undefined;
          this.pa = undefined;
          this.ma = [];
        };
        Tm.prototype.Ha = function (TS, Tw, TE) {
          vx.getURLSearchParam().get("operator_token");
          var Tp = vx.getOSName();
          var Tj = '';
          var Tk = '';
          var Tg = [];
          this.Aa = function () {
            if (Tw) {
              Tw();
            }
          };
          this.pa = function () {
            if (TE) {
              TE();
            }
          };
          if (TS === T8.LowSpec) {
            Tj = Pm.t("GameShell.NpveDeviceNotSupportDesc");
          } else if (TS === T8.OSVersionTooLow) {
            Tj = Pm.t("GameShell.NpveSystemVersionTooLowDesc");
            if (Tp === "Android") {
              Tk = (Tk = Pm.t("GameShell.AndroidUpdateTutorialStep")).replace("<<#1>>", Pm.t("GameShell.PveUpdateTutorial"));
            } else if (Tp === "iOS") {
              Tk = (Tk = Pm.t("GameShell.IosUpdateTutorialStep")).replace("<<#1>>", Pm.t("GameShell.PveUpdateTutorial"));
            }
          } else if (TS === T8.BrowserNotInclude || TS === T8.BrowserVersionTooLow || TS === T8.NativeBrowserTooLow || TS === T8.APINotDetected) {
            Tj = Pm.t("GameShell.NpveBrowserVersionTooLowDesc");
            Tg = this.Ma();
          } else if (TS === T8.NativeWebGLNotSupported || TS === T8.WebGLSupportedButDisabled || TS === T8.WebGLNotSupported) {
            Tj = Pm.t("GameShell.NpveWebGLNotSupportDesc");
            Tg = this.Ma();
            this.Aa = undefined;
          } else if (TS === T8.AdblockDetected) {
            Tj = Pm.t("GameShell.PveAdblockDetectedMessage");
          } else if (TS === T8.ES6NotSupported) {
            Tj = Pm.t("GameShell.NpveBrowserVersionTooLowDesc");
            Tg = this.Ma();
            this.Aa = undefined;
          } else if (TS === T8.InsecureContext) {
            Tj = Pm.t("GameShell.NpveInsecureContextDesc");
            Tg = this.Ma();
          }
          return {
            'descText': Tj,
            'tutorialText': Tk,
            'buttons': Tg
          };
        };
        Tm.prototype.Ma = function () {
          var TS = vx.getURLSearchParam().get("pve_bb") || '0';
          var Tw = [];
          switch (parseInt(TS, 0xa)) {
            case TH.Chrome:
              break;
            case TH.QQ:
              Tw.push({
                'iconClass': "ic_qq",
                'desc': Pm.t("GameShell.PveQQBrowser"),
                'desc1': Pm.t("GameShell.PveQQBrowserDesc"),
                'action': function () {
                  r.open("https://browser.qq.com/");
                }
              });
              break;
            case TH.UC:
              Tw.push({
                'iconClass': "ic_uc",
                'desc': Pm.t("GameShell.PveUCBrowser"),
                'desc1': Pm.t("GameShell.PveUCBrowserDesc"),
                'action': function () {
                  r.open("https://www.uc.cn/");
                }
              });
              break;
            case TH.Quark:
              Tw.push({
                'iconClass': "ic_quark",
                'desc': Pm.t("GameShell.PveQuarkBrowser"),
                'desc1': Pm.t("GameShell.PveQuarkBrowserDesc"),
                'action': function () {
                  r.open("https://myquark.cn/");
                }
              });
              break;
            case TH.Auto:
            default:
              if ('zh' === Pm.locale()) {
                Tw.push({
                  'iconClass': "ic_qq",
                  'desc': Pm.t("GameShell.PveQQBrowser"),
                  'desc1': Pm.t("GameShell.PveQQBrowserDesc"),
                  'action': function () {
                    r.open("https://browser.qq.com/");
                  }
                });
              }
          }
          Tw.push({
            'iconClass': "ic_chrome",
            'desc': Pm.t("GameShell.PveChromeBrowser"),
            'desc1': Pm.t("GameShell.PveChromeBrowserDesc"),
            'action': function () {
              r.open("https://www.google.com/chrome/");
            }
          });
          return Tw;
        };
        Tm.prototype.Va = function () {
          return this.Sa("npve_container");
        };
        Tm.prototype.ka = function () {
          var TS = this.Sa("npve_top_content npve_top_content_".concat(this.T));
          var Tw = this.Sa("sprite_main_res ic_operator_logo_details");
          TS.appendChild(Tw);
          if (this.Ba() === TZ.Top) {
            TS.appendChild(this.ja());
          }
          return TS;
        };
        Tm.prototype.Ea = function (TS) {
          var Tw = this.T;
          var TE = this.Sa("npve_middle_content npve_middle_content_".concat(Tw));
          var Tp = this.Sa("npve_iconic_".concat(Tw));
          var Tj = this.Sa("sprite_main_res ic_iconic");
          var Tk = this.Sa("npve_main_desc_".concat(Tw), ''.concat(Pm.t("GameShell.PveDearClient"), "<br />").concat(TS));
          if (this.Ba() === TZ.Middle) {
            TE.appendChild(this.ja());
            TE.appendChild(this.Ga());
          }
          Tp.appendChild(Tj);
          TE.appendChild(Tp);
          TE.appendChild(Tk);
          if (this.Aa) {
            this.va = this.Pa();
            TE.appendChild(this.va);
            TE.appendChild(this.Za());
          }
          return TE;
        };
        Tm.prototype.Ca = function (TS, Tw) {
          var TE = this.Ra(TS.buttons);
          var Tp = this.Oa(TS.tutorialText);
          if (this.Da(TE, Tp)) {
            var Tj = this.Sa("npve_bottom_content npve_bottom_content_".concat(this.T));
            var Tk = this.Na(TS.buttons.length, Tw);
            if (Tk) {
              Tj.appendChild(Tk);
            }
            if (TE) {
              Tj.appendChild(TE);
            }
            if (Tp) {
              Tj.appendChild(Tp);
            }
            return Tj;
          }
        };
        Tm.prototype.Da = function () {
          return true;
        };
        Tm.prototype.Pa = function () {
          var TS = this.Sa("npve_continue_button_".concat(this.T), Pm.t("GameShell.PveContVisit"));
          TS.addEventListener("click", this.ba);
          TS.addEventListener("touchstart", this._a);
          TS.addEventListener("touchend", this.wa);
          return TS;
        };
        Tm.prototype.Za = function () {
          return this.Sa("npve_continue_desc_".concat(this.T), Pm.t("GameShell.PveContVisitWarn"));
        };
        Tm.prototype.Na = function (TS, Tw) {
          if (TS > 0x0 || Tw.onContinue) {
            return this.Sa("npve_separate_line_".concat(this.T));
          }
        };
        Tm.prototype.Ra = function (TS) {
          var Tw = TS.length;
          if (!(Tw <= 0x0)) {
            var TE = this.T;
            var Tp = this.Sa("npve_bottom_".concat(TE));
            var Tj = this.Sa("npve_bottom_button_title_".concat(TE), Pm.t("GameShell.PveDownloadClientApp"));
            var Tk = this.Sa("npve_grid_1");
            for (var Tg = 0x0; Tg < Tw; Tg++) {
              var TG = TS[Tg];
              var Tb = "grid_item_center";
              if ("port" === this.T) {
                if (0x0 === Tg && Tw > 0x1) {
                  Tb = "grid_item_left";
                } else if (Tg === Tw && Tw > 0x1) {
                  Tb = "grid_item_right";
                }
              }
              var TQ = this.Sa("grid_content ".concat(Tb), undefined, "pveBtn_".concat(Tg));
              var Td = this.Sa("grid_row");
              var I0 = this.Sa("sprite_main_res ".concat(TG.iconClass, " grid_icon"));
              var I1 = this.Sa("grid_desc", undefined, "grid_desc_".concat(Tg));
              var I2 = this.Sa("grid_desc_title", TG.desc);
              var I3 = this.Sa("grid_desc_seperator");
              var I4 = this.Sa("grid_desc_content", TG.desc1);
              if (TG.action) {
                TQ.addEventListener("click", TG.action);
                TQ.addEventListener("touchstart", this.xa);
                TQ.addEventListener("touchend", this.ya);
                this.ma.push(TG.action);
              }
              I1.appendChild(I2);
              I1.appendChild(I3);
              I1.appendChild(I4);
              Td.appendChild(I0);
              Td.appendChild(I1);
              TQ.appendChild(Td);
              Tk.appendChild(TQ);
            }
            Tp.appendChild(Tj);
            Tp.appendChild(Tk);
            return Tp;
          }
        };
        Tm.prototype.Oa = function (TS) {
          if (!(TS.length <= 0x0)) {
            var Tw = this.T;
            var TE = this.Sa("npve_text_wrapper_".concat(Tw));
            var Tp = this.Sa("npve_text_content_".concat(Tw));
            var Tj = TS.split('|');
            var Tk = Tj.shift();
            if (Tk) {
              var Tg = this.Sa("npve_text_bold_".concat(Tw), Tk);
              if ("port" === Tw) {
                TE.appendChild(Tg);
              } else {
                Tp.appendChild(Tg);
              }
            }
            var TG = '';
            for (var Tb = 0x0; Tb < Tj.length; Tb++) {
              var TQ = Tj[Tb].trim();
              if (TQ.startsWith('*')) {
                if (TG.length > 0x0) {
                  TG += "<br />";
                }
                TG += TQ;
              } else {
                if (0x0 !== Tb) {
                  Tp.appendChild(this.Sa("sprite_main_res ic_step_arrow npve_line_arrow_".concat(Tw)));
                }
                Tp.appendChild(this.Sa("sprite_main_res ic_step_".concat(Tb + 0x1, " npve_line_num")));
                Tp.appendChild(this.Sa("npve_line_text_".concat(Tw), TQ));
              }
            }
            TE.appendChild(Tp);
            if (TG.length > 0x0) {
              TE.appendChild(this.Sa("npve_text_note_".concat(Tw), TG));
            }
            return TE;
          }
        };
        Tm.prototype.Ba = function () {
          return TZ.Top;
        };
        Tm.prototype.ja = function () {
          return this.Sa("title", Pm.t("GameShell.PveCheck"));
        };
        Tm.prototype.Ga = function () {
          return this.Sa("npve_separate_line_".concat(this.T));
        };
        Tm.prototype.Sa = function (TS, Tw, TE) {
          var Tp = document.createElement("div");
          if (TS) {
            Tp.className = TS;
          }
          if (Tw) {
            Tp.innerHTML = Tw;
          }
          if (TE) {
            Tp.id = TE;
          }
          return Tp;
        };
        return Tm;
      }(iM);
      var TP = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          return Z3(this, undefined, undefined, function () {
            var TS;
            var Tw;
            return Z4(this, function (TE) {
              switch (TE.label) {
                case 0x0:
                  this.emitState("PveCheck");
                  TS = vx;
                  return [0x4, this.Qa()];
                case 0x1:
                  TS.webpSupported = TE.sent();
                  return "false" === (Tw = vx.getURLSearchParam().get("pve")) || '0' === Tw ? (this.Ta(), [0x2]) : this.La() ? vx.isSecureContext() ? rA.StorageKey && eR(rA.StorageKey.forcePlay, false) ? (this.state.param.reason = eR("shell:compatible_failure_reason"), this.Ta(), [0x2]) : this.Do() ? [0x2] : vx.isIOSStandalone() ? (this.Ta(), [0x2]) : vx.isApp() ? [0x3, 0x3] : [0x4, this.Ia()] : (this.Fa(T8.InsecureContext), [0x2]) : (this.Fa(T8.ES6NotSupported), [0x2]);
                case 0x2:
                  TE.sent();
                  TE.label = 0x3;
                case 0x3:
                  if (vx.isIOS()) {
                    this.Wa();
                  } else if (vx.isAndroid()) {
                    this.za();
                  } else if (vx.isPc()) {
                    this.Ua();
                  } else if (vx.isWindows() || vx.isMac()) {
                    this.qa();
                  } else {
                    this.Ta();
                  }
                  return [0x2];
              }
            });
          });
        };
        Tm.prototype.Qa = function () {
          return new Promise(function (TS) {
            var Tw = false;
            try {
              var TE = document.createElement("canvas");
              Tw = TE.toDataURL("image/webp").startsWith("data:image/webp");
            } catch (Tj) {
              Tw = false;
            }
            if (Tw) {
              TS(Tw);
            } else {
              var Tp = new Image();
              Tp.onload = function () {
                Tw = Tp.width > 0x0 && Tp.height > 0x0;
                TS(Tw);
              };
              Tp.onerror = function () {
                TS(false);
              };
              Tp.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
            }
          });
        };
        Tm.prototype.Ia = function () {
          var TS = this;
          var Tw = this.context.resource.resolveUrl("shell-res/ad/ad_adv_dfp_test.js");
          return new Promise(function (TE) {
            fetch(Tw).then(function () {
              TE();
            })["catch"](function () {
              TS.Fa(T8.AdblockDetected);
            });
          });
        };
        Tm.prototype.La = function () {
          try {
            Function('', '');
            return true;
          } catch (TS) {
            return false;
          }
        };
        Tm.prototype.Wa = function () {
          if (this.Ya()) {
            this.Fa(T8.LowSpec);
          } else {
            var TS = vx.getMinOSVersionInfo();
            if (TS.hasMinOSVersion && TS.foundOS && !TS.isMinOSVersion) {
              this.Fa(T8.OSVersionTooLow);
            } else if ("webkit" === vx.getBrowserType().toLowerCase()) {
              if (vx.isWkWebview() || vx.isCacheStorageSupported()) {
                this.Ta();
              } else {
                this.Fa(T8.BrowserNotInclude);
              }
            } else if (TO.getWebGLStatus() !== eQ.Enabled) {
              this.Fa(T8.WebGLNotSupported);
            } else {
              this.Ta();
            }
          }
        };
        Tm.prototype.za = function () {
          if (this.Ya()) {
            this.Fa(T8.LowSpec);
          } else {
            var TS = vx.getMinOSVersionInfo();
            if (TS.hasMinOSVersion && TS.foundOS && !TS.isMinOSVersion) {
              this.Fa(T8.OSVersionTooLow);
            } else if (TO.getWebGLStatus() !== eQ.Enabled) {
              this.Fa(T8.WebGLNotSupported);
            } else if (vx.isApp()) {
              this.Ta();
            } else if (vx.isBrowserTypeSupported()) {
              var Tw = vx.getWhiteListCompatibleCheckInfo();
              if (Tw.hasWhiteList && Tw.foundBrowser && !Tw.isMinBrowserVersion) {
                this.Fa(T8.BrowserVersionTooLow);
              } else {
                this.Ta();
              }
            } else {
              this.Fa(T8.BrowserNotInclude);
            }
          }
        };
        Tm.prototype.Ua = function () {
          if (TO.getWebGLStatus() !== eQ.Enabled) {
            this.Fa(T8.WebGLNotSupported);
          } else {
            this.Ta();
          }
        };
        Tm.prototype.qa = function () {
          if (TO.getWebGLStatus() !== eQ.Enabled) {
            this.Fa(T8.WebGLNotSupported);
          } else {
            var TS = vx.getWhiteListCompatibleCheckInfo();
            if (vx.isBrowserTypeSupported()) {
              if (TS.hasWhiteList && TS.foundBrowser && !TS.isMinBrowserVersion) {
                this.Fa(T8.BrowserVersionTooLow);
              } else {
                this.Ta();
              }
            } else {
              this.Fa(T8.BrowserNotInclude);
            }
          }
        };
        Tm.prototype.Do = function () {
          this.emit("Alert.Dismiss", undefined, function (TS) {
            if (0x10 !== TS.response || TS.error) {
              e7("GameReady", ev(0x2));
            }
          });
        };
        Tm.prototype.Ya = function () {
          var TS = vx.getDeviceCompatibleTerms();
          if (!TS) {
            return false;
          }
          if (!TS.minMemory) {
            return false;
          }
          if (+TS.minMemory < 0x800) {
            return false;
          }
          if (vx.isIOS()) {
            var Tw = r.devicePixelRatio || 0x1;
            var TE = Math.min(vx.getScreenHeight(), vx.getScreenWidth()) * Tw;
            if (0x4da === TE || 0x2ee === TE) {
              switch (vx.getGPU()) {
                case "Apple A8 GPU":
                  return true;
                case "Apple A9 GPU":
                  if (vx.getOSMajorVersion() <= 0xa) {
                    return true;
                  }
              }
            }
          }
          return !(Math.min(vx.getScreenWidth(), vx.getScreenHeight()) * devicePixelRatio >= 0x2d0) && "Apple A9 GPU" !== vx.getGPU();
        };
        Tm.prototype.Ta = function () {
          this.emitState("PveCheckComplete");
        };
        Tm.prototype.Fa = function (TS) {
          var Tw = this;
          ez("shell:compatible_failure_reason", TS);
          this.state.param.reason = TS;
          this.state.param.reasonString = this.Ja(TS);
          this.component.create(Tv);
          this.component.updateState(Tv, {
            'reason': TS,
            'onContinue': function () {
              var TE;
              Tw.emit("Shell.PWDEnabled");
              Tw.Xa(T9.Continue);
              var Tp = null === (TE = rA.StorageKey) || undefined === TE ? undefined : TE.forcePlay;
              if (Tp && !eR(Tp, false)) {
                ez(Tp, true);
              }
              Tw.component.destroy(Tv);
              Tw.emitState("PveCheckComplete");
            },
            'onDiscontinue': function () {
              Tw.Xa(T9.QuitPage);
            }
          });
          if (!(TS !== T8.ES6NotSupported && TS !== T8.NativeWebGLNotSupported && TS !== T8.WebGLSupportedButDisabled && TS !== T8.WebGLNotSupported && TS !== T8.InsecureContext)) {
            this.Xa();
          }
          this.view.appendTo(Tv, "overlay");
          this.view.show(Tv);
          this.emit("Shell.PWDDisabled");
        };
        Tm.prototype.Ja = function (TS) {
          var Tw;
          switch (TS) {
            case T8.BrowserNotInclude:
              Tw = "(pve - browser not included)";
              break;
            case T8.BrowserVersionTooLow:
              Tw = "(pve - browser version too low)";
              break;
            case T8.WebGLNotSupported:
              Tw = "(pve - webgl not support)";
              break;
            case T8.WebGLSupportedButDisabled:
              Tw = "(pve - webgl supported but disabled)";
              break;
            case T8.NativeBrowserTooLow:
              Tw = "(pve - native browser version too low)";
              break;
            case T8.OSVersionTooLow:
              Tw = "(pve - os version too low)";
              break;
            case T8.NativeWebGLNotSupported:
              Tw = "(pve - native webgl not support)";
              break;
            case T8.AdblockDetected:
              Tw = "(pve - adblock detected)";
              break;
            case T8.APINotDetected:
            case T8.ES6NotSupported:
              Tw = "(pve - api not detected)";
              break;
            case T8.InsecureContext:
              Tw = "(pve - insecure context)";
              break;
            default:
              Tw = '';
          }
          return Tw;
        };
        Tm.prototype.Xa = function (TS) {
          var Tw;
          switch (this.state.param.reason) {
            case T8.BrowserNotInclude:
            case T8.BrowserVersionTooLow:
              Tw = "browser not compatible";
              break;
            case T8.WebGLNotSupported:
              Tw = "webgl not supported";
              break;
            case T8.WebGLSupportedButDisabled:
              Tw = "webgl supported but disabled";
              break;
            case T8.LowSpec:
              Tw = "(pve - spec too low)";
              break;
            case T8.NativeBrowserTooLow:
              Tw = "native browser version too low";
              break;
            case T8.OSVersionTooLow:
              Tw = "os version too low";
              break;
            case T8.NativeWebGLNotSupported:
              Tw = "native webgl not support";
              break;
            case T8.AdblockDetected:
              Tw = "adblock detected";
              break;
            case T8.APINotDetected:
              Tw = "api not detected";
              break;
            case T8.ES6NotSupported:
              Tw = "es6 not supported";
              break;
            case T8.InsecureContext:
              Tw = "insecure context";
              break;
            default:
              Tw = "unknown";
          }
          i3.ga.sendEvent("game_shell", "poor_visit_experience", {
            'reason': Tw,
            'action': TS
          });
        };
        return Tm;
      }(T3);
      var TJ = {};
      var TT = function (Tq) {
        var Tm = TJ[Tq];
        if (Tm) {
          Tm.t = Date.now();
        } else {
          Tm = {
            't': Date.now()
          };
          TJ[Tq] = Tm;
        }
      };
      var TI = function (Tq) {
        var Tm = TJ[Tq];
        if (Tm) {
          var TS = Date.now() - Tm.t;
          delete TJ[Tq];
          return TS;
        }
        return -0x1;
      };
      !function (Tq) {
        Tq.Os = '';
        Tq.Ka = "_CCSettings";
        Tq.$a = "_builtins";
      }(Tx || (Tx = {}));
      var TV;
      var TD = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.tu = 0x0;
          TS.Os = Tx.Os;
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          this.emitState("GameLoad");
          this.nu();
        };
        Tm.prototype.iu = function () {
          var TS;
          var Tw = this;
          var TE = r[Tx.Ka];
          var Tp = r.cc;
          return !(TE && Tp || (TS = TE ? 0x3ec : 0x3eb, Tw.emit("Error.Occurred", {
            'context': "Preload",
            'info': {
              'category': "game_shell",
              'domain': 0x4,
              'code': TS
            },
            'report': true
          }, function () {
            Tw.emit("Window.Reload");
          }), 0x0));
        };
        Tm.prototype.nu = function () {
          var TS = this;
          if (!this.iu()) {
            this.emit("Shell.ChangeProgressText", Pm.t("GameShell.LoadingGame"));
            var Tw = r[Tx.Ka];
            r[Tx.Ka] = undefined;
            var TE = cc[Tx.$a];
            cc[Tx.$a] = undefined;
            var Tp = vx.getURLSearchParam().get("origin") ? ij((v6 || r.location).origin, id(location.pathname)) : '';
            cc.assetManager.init({
              'bundleVers': Z2(Z2({}, Tw.bundleVers), null == TE ? undefined : TE.bundleVers),
              'server': Tp
            });
            var Tj = cc.AssetManager.BuiltinBundleName;
            var Tk = Tj.RESOURCES;
            var Tg = Tj.INTERNAL;
            var TG = Tj.MAIN;
            var Tb = Tj.START_SCENE;
            var TQ = [TE ? ij(id(TE.url), TE.folder, Tg) : Tg, TG];
            if (Tw.hasStartSceneBundle) {
              TQ.push(Tb);
            }
            if (Tw.hasResourcesBundle) {
              TQ.push(Tk);
            }
            var Td = cc.debug.DebugMode.INFO;
            var I0 = cc.debug.DebugMode.NONE;
            var I1 = {
              'id': "GameCanvas",
              'scenes': Tw.scenes,
              'debugMode': Tw.debug ? Td : I0,
              'showFPS': Tw.debug,
              'frameRate': 0x3c,
              'groupList': Tw.groupList,
              'collisionMatrix': Tw.collisionMatrix,
              'renderMode': 0x0,
              'localeHint': Pm.locale()
            };
            i3.ga.sendEvent("game_shell", '');
            TT('');
            cc.assetManager._onProgress = function () {
              if (TS.tu < 0x19) {
                ++TS.tu;
              }
              TS.emit("Shell.UpdateProgress", TS.tu / 0x19);
            };
            var I2 = function (I6) {
              if (I6) {
                TS.emit("Shell.PWDDisabled");
                return void TS.emit("Error.Occurred", {
                  'context': "Preload",
                  'info': {
                    'category': "game_shell",
                    'error': I6,
                    'domain': 0x4,
                    'code': 0x3ee
                  },
                  'report': true
                }, function () {
                  TS.emit("Window.Reload");
                });
              }
              cc.view.resizeWithBrowserSize(true);
              cc.view.enableRetina(true);
              if ("land" === vx.getOrientationMode()) {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
              } else {
                cc.view.setOrientation(cc.macro.ORIENTATION_AUTO);
              }
              var I7 = Tw.launchScene;
              var I8 = TI('');
              i3.ga.sendTiming("game_shell", '', I8);
              i3.ga.sendEvent("game_shell", '');
              TT('');
              cc.assetManager.bundles.find(function (I9) {
                return I9.getSceneInfo(I7);
              }).loadScene(I7, undefined, undefined, function (I9) {
                if (I9) {
                  TS.emit("Shell.PWDDisabled");
                  return void TS.emit("Error.Occurred", {
                    'context': "Preload",
                    'info': {
                      'category': "game_shell",
                      'domain': 0x4,
                      'code': 0x3ee,
                      'error': I9
                    },
                    'report': true
                  }, function () {
                    TS.emit("Window.Reload");
                  });
                }
                TS.eu();
                var IZ = TI('');
                i3.ga.sendTiming("game_shell", '', IZ);
                (function (IH) {
                  if (vx.audioSupported) {
                    var IO = TC = vx.audioContext;
                    if ("running" !== IO.state) {
                      IO.resume();
                    }
                    TL = IO.createBuffer(0x1, 0x1, 0x5622);
                    if (vx.isIOS()) {
                      P3.ScratchAudioBuffer = TL;
                    }
                  }
                  if (IH) {
                    IH();
                  }
                })(function () {
                  cc.assetManager._onProgress = undefined;
                });
                TS.state.param.scene = I7;
                TS.emitState("GameLoadComplete");
              });
            };
            var I3 = 0x0;
            var I4 = function (I6) {
              if (I6) {
                I2(I6);
              }
              if (++I3 === TQ.length + 0x1) {
                try {
                  cc.game.run(I1, I2);
                } catch (I7) {
                  I2(I7);
                }
              }
            };
            cc.assetManager.loadScript(Tw.jsList.map(function (I6) {
              return ij(Tp, "src/", I6);
            }), I4);
            for (var I5 = 0x0; I5 < TQ.length; I5++) {
              cc.assetManager.loadBundle(TQ[I5], I4);
            }
          }
        };
        Tm.prototype.eu = function () {
          this.emit("Shell.EnableUnloadAlert", true);
        };
        return Tm;
      }(T3);
      (function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          this.emitState("GameLoad");
          this.ru();
        };
        Tm.prototype.ru = function () {
          var TS = this;
          var Tw = document.getElementById("background-img");
          if (Tw) {
            Tw.style.height = "100%";
            Tw.style.bottom = '0';
          }
          this.emit("Shell.ChangeProgressText", Pm.t("GameShell.LoadingGame"));
          var TE = r.Ka;
          r.Ka = undefined;
          cc.assetManager.init({
            'importBase': "assets/others/import",
            'nativeBase': "assets/others/native"
          });
          var Tp = cc.AssetManager.BuiltinBundleName;
          var Tj = Tp.RESOURCES;
          var Tk = Tp.INTERNAL;
          var Tg = Tp.MAIN;
          var TG = Tp.START_SCENE;
          var Tb = [Tk, Tg];
          if (TE.hasStartSceneBundle) {
            Tb.push(TG);
          }
          if (TE.hasResourcesBundle) {
            Tb.push(Tj);
          }
          var TQ = document.getElementById("GameCanvas");
          var Td = document.getElementById("opts-debug-mode");
          var I0 = document.getElementById("btn-show-fps");
          var I1 = document.getElementById("input-set-fps");
          var I2 = {
            'id': TQ,
            'renderMode': 0x0,
            'debugMode': parseInt(Td.value, 0xa),
            'showFPS': -0x1 !== Array.prototype.indexOf.call(null == I0 ? undefined : I0.classList, "checked"),
            'frameRate': parseInt(I1.value, 0xa),
            'groupList': TE.groupList,
            'collisionMatrix': TE.collisionMatrix,
            'localeHint': Pm.locale()
          };
          cc.assetManager._onProgress = function (I7, I8) {
            TS.emit("Shell.UpdateProgress", I7 / I8);
          };
          var I3 = function (I7) {
            if (I7) {
              throw I7;
            }
            if (r.updateResolution) {
              r.updateResolution();
            }
            if (!(cc.sys.os === cc.sys.OS_ANDROID && cc.sys.browserType === cc.sys.BROWSER_TYPE_UC)) {
              cc.view.enableRetina(true);
            }
            cc.debug.setDisplayStats(true);
            cc.game.pause();
            cc.assetManager.loadAny({
              'url': "preview-scene.json",
              '__isNative__': false
            }, undefined, undefined, function (I8, I9) {
              if (!I8) {
                var IZ = I9.scene;
                IZ.ae = I9.ae;
                cc.director.runSceneImmediate(IZ, function () {
                  cc.game.resume();
                });
                cc.assetManager._onProgress = undefined;
                TS.emit("Shell.BootStateChanged", "GameLoadComplete");
              }
            });
          };
          var I4 = 0x0;
          var I5 = function (I7) {
            if (I7) {
              I3(I7);
            }
            if (++I4 === Tb.length + 0x1) {
              try {
                cc.game.run(I2, I3);
              } catch (I8) {
                I3(I8);
              }
            }
          };
          cc.assetManager.loadScript(TE.jsList.map(function (I7) {
            return "plugins/" + I7;
          }), I5);
          for (var I6 = 0x0; I6 < Tb.length; I6++) {
            cc.assetManager.loadBundle(Tb[I6], I5);
          }
        };
      })(T3);
      var TA = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Os = "SceneLoad";
          TS.Ns = 0x2;
          TS.ou = function (Tw) {
            if (Tw) {
              TS.su(Tw);
            } else {
              var TE = TI('');
              i3.ga.sendTiming("game_shell", '', TE);
              i3.ga.sendEvent("game_shell", '');
              TT('');
            }
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          this.emitState("SceneLoad");
          this.Os = '';
          this.Ns--;
          i3.ga.sendEvent("game_shell", '');
          TT('');
          if (!cc.director.loadScene(this.state.param.scene, this.ou)) {
            this.su(Error("Load Scene Fail"));
          }
        };
        Tm.prototype.su = function (TS) {
          var Tw = this;
          this.emit("Shell.PWDDisabled");
          this.emit("Error.Occurred", {
            'context': "Preload",
            'info': {
              'category': "game_shell",
              'domain': 0x4,
              'code': 0x3ee,
              'error': TS
            },
            'report': true
          }, function () {
            Tw.emit("Window.Reload");
          });
        };
        return Tm;
      }(T3);
      var TW = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          var TS = this;
          this.emitState("ProjectLoad");
          i3.ga.sendEvent("game_shell", '', undefined, this.state.param.reasonString, this.state.param.firstTimeRunApp ? "Cache Install" : "Cache Update");
          TT('');
          this.emit("Shell.ChangeProgressText", Pm.t("GameShell.Initialization"));
          this.emit("Shell.UpdateProgress", 0x0);
          var Tw = new JL();
          var TE = '';
          var Tp = '';
          var Tj = [];
          if (Px.resource.hasEntry("shell-game-res/locale/locale.json")) {
            Tj.push({
              'src': Tp = Px.resource.resolveUrl("shell-game-res/locale/locale.json"),
              'type': JH.Json
            });
          }
          if (Px.resource.hasEntry("src/settings.js")) {
            Tj.push({
              'src': TE = Px.resource.resolveUrl("src/settings.js"),
              'type': JH.Script
            });
          } else {
            this.Os = "Shell.EnableSleep";
            this.Ns = 0x4;
          }
          if (0x0 !== Tj.length) {
            var Tk = 0x0;
            var Tg = Tj.length;
            var TG = false;
            Tw.onError = function (Tb) {
              TS.emit("Shell.PWDDisabled");
              var TQ = Tb.src.split('?')[0x0];
              var Td = {
                'category': "game_shell",
                'domain': 0x4,
                'code': 0x3ea,
                'messages': [TQ]
              };
              TS.emit("Error.Report", Td);
              if (!TG) {
                TG = true;
                TS.emit("Error.Occurred", {
                  'context': "Preload",
                  'info': Td,
                  'report': false
                }, function () {
                  TS.emit("Window.Reload");
                });
              }
            };
            Tw.onLoad = function (Tb) {
              switch (Tb.src) {
                case TE:
                  var TQ = TI('');
                  i3.ga.sendTiming("game_shell", '', TQ);
                  break;
                case Tp:
                  var Td = Tb.response;
                  for (var I0 in Td) if (Td[I0]) {
                    Pm.extend(Td[I0], I0);
                  }
              }
              TS.emit("Shell.UpdateProgress", ++Tk / Tg);
            };
            Tw.onComplete = function () {
              TS.emitState("ProjectLoadComplete");
            };
            i3.ga.sendEvent("game_shell", '');
            TT('');
            Tw.load(Tj);
          } else {
            this.emitState("ProjectLoadComplete");
          }
        };
        return Tm;
      }(T3);
      var Ty = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Os = '';
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          var TS = this;
          this.emitState("GameReady");
          var Tw = TI('');
          i3.ga.sendTiming("game_shell", '', Tw, this.state.param.firstTimeRunApp ? "Cache Install" : "Cache Update");
          i3.ga.sendEvent("game_shell", '');
          if (this.state.param.showStartButton) {
            this.component.create(aj);
            this.view.append(aj, eY, eD.SafeArea);
            this.component.updateState(aj, {
              'callback': function () {
                TS.component.destroy(aj);
                TS.au();
              }
            });
            this.view.show(aj);
            this.emitState("GameAwaitStart");
          } else {
            this.au();
          }
        };
        Tm.prototype.au = function () {
          this.on("Shell.BootStateChanged", this.uu);
          this.emitState("GameStarted");
        };
        Tm.prototype.uu = function (TS) {
          if ("GameStarted" === TS.payload) {
            this.off("Shell.BootStateChanged", this.uu);
            i3.ga.sendEvent("game_shell", '');
            (function () {
              if (TC && TL) {
                var Tw = TC.createBufferSource();
                Tw.buffer = TL;
                Tw.connect(TC.destination);
                if (undefined === Tw.start) {
                  Tw.noteOn(0x0);
                } else {
                  Tw.start(0x0);
                }
                if ("function" == typeof TC.resume) {
                  TC.resume();
                }
                Tw.onended = function () {
                  Tw.disconnect(0x0);
                  Tw.onended = null;
                  try {
                    Tw.buffer = null;
                  } catch (TE) {}
                  TC = undefined;
                  TL = undefined;
                };
              }
            })();
            cc.game.resume();
            if (i1) {
              i1();
              i1 = null;
            }
          }
        };
        return Tm;
      }(T3);
      var TX = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.cu = [];
          TS.hu = false;
          TS.lu = function (Tw) {
            TS.fu = {};
            for (var TE in Tw) TS.fu[TE] = 0x0;
          };
          TS.du = function (Tw) {
            if (Tw.files) {
              TS.Au(Tw.files);
            }
            if (Tw.files) {
              for (var TE = 0x0; TE < Tw.files.length; TE++) {
                if (TS.vu(Tw.files[TE])) {
                  i3.ga.sendEvent("game_shell", '');
                  TT('');
                }
              }
            }
          };
          TS.Pn = function (Tw) {
            if (TS.vu(Tw.src)) {
              var TE = TI('');
              i3.ga.sendTiming("game_shell", '', TE);
            }
            if (TS.pu(Tw.src)) {
              var Tp = Tw.response;
              for (var Tj in Tp) if (Tp[Tj]) {
                Pm.extend(Tp[Tj], Tj);
              }
            }
          };
          TS['do'] = function (Tw, TE) {
            var Tp = TS.fu;
            if (Tp && undefined !== Tp[Tw.name]) {
              Tp[Tw.name] = TE;
              var Tj = 0x0;
              var Tk = 0x0;
              for (var Tg in Tp) {
                ++Tj;
                Tk += Tp[Tg];
              }
              TS.emit("Shell.UpdateProgress", Tk / Tj);
            }
          };
          TS.gu = function (Tw, TE) {
            if (!TE.optional) {
              var Tp = Tw.filename;
              Tp = Tp.substring(Tp.lastIndexOf('/') + 0x1);
              if (TS.vu(Tp)) {
                TS.mu(Tw.message, Tw.filename, 0x3ef);
              } else {
                TS.mu(Tw.message, Tw.filename, 0x3f0);
              }
            }
          };
          TS.bu = function (Tw) {
            TS.mu(Tw.err, undefined, Tw.errCode);
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype._u = function (TS) {
          var Tw = {
            'onDependencyResolved': this.lu,
            'onPreload': this.du,
            'onLoad': this.Pn,
            'onProgress': this['do'],
            'onComplete': TS,
            'onError': this.bu,
            'onScriptError': this.gu
          };
          var TE = this.state.param.packages;
          this.plugin.load(TE, Tw);
        };
        Tm.prototype.wu = function (TS, Tw) {
          var TE = {
            'onDependencyResolved': this.lu,
            'onPreload': this.du,
            'onLoad': this.Pn,
            'onProgress': this['do'],
            'onComplete': Tw,
            'onError': this.bu,
            'onScriptError': this.gu
          };
          this.plugin.load(TS, TE);
        };
        Tm.prototype.Au = function (TS) {
          for (var Tw = 0x0; Tw < TS.length; Tw++) {
            var TE = TS[Tw].substring(TS[Tw].lastIndexOf('/') + 0x1);
            if (".js" === TE.substring(TE.lastIndexOf('.'))) {
              this.cu.push(TE);
            }
          }
        };
        Tm.prototype.vu = function (TS) {
          return -0x1 !== TS.indexOf("cocos2d-js");
        };
        Tm.prototype.pu = function (TS) {
          return -0x1 !== TS.indexOf("/locale.");
        };
        Tm.prototype.mu = function (TS, Tw, TE) {
          var Tp = this;
          var Tj = {
            'category': "game_shell",
            'domain': 0x4,
            'code': TE,
            'error': TS,
            'messages': Tw ? ["src: " + Tw] : undefined
          };
          this.emit("Error.Report", Tj);
          if (!this.hu) {
            this.hu = true;
            this.emit("Error.Occurred", {
              'context': "Preload",
              'info': Tj,
              'report': false
            }, function () {
              Tp.emit("Window.Reload");
            });
          }
        };
        return Tm;
      }(T3);
      var TK = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.xu = function () {
            TS.emit("Shell.ChangeProgressText", Pm.t("GameShell.Complete"));
            TS.emit("Shell.UpdateProgress", 0x1);
            TS.emit("Shell.ChangeProgressVisible", false);
            setTimeout(function () {
              TS.emitState("LatePluginLoadComplete");
            }, 0x1f4);
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          this.emitState("LatePluginLoad");
          this._u(this.xu);
        };
        return Tm;
      }(TX);
      var Tf = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.yu = function () {
            TS.emitState("DynamicPluginLoadComplete");
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          this.emitState("DynamicPluginLoad");
          if (this.Hu) {
            this.load(this.Hu);
          }
        };
        Tm.prototype.load = function (TS) {
          this.wu(TS, this.yu);
        };
        return Tm;
      }(TX);
      var TN = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.yu = function () {
            TS.emitState("PluginLoadComplete");
          };
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          this.emitState("PluginLoad");
          this.emit("Shell.ChangeProgressText", Pm.t("GameShell.Loading"));
          this.emit("Shell.UpdateProgress", 0x0);
          this.Su();
          this._u(this.yu);
        };
        Tm.prototype.Su = function () {
          var TS = this.state.param.packages;
          var Tw = rA.Plugins;
          var TE = vx.getURLSearchParam().get("plugin");
          if (TE) {
            Tw = Tw.concat.apply(Tw, TE.split(','));
          }
          for (var Tp = 0x0; Tp < Tw.length; Tp++) {
            var Tj = Tw[Tp];
            var Tk = {
              'name': Tj,
              'rawUrl': Tj,
              'baseUrl': ''.concat(rA.SharedPath).concat(Tj)
            };
            TS[Tj] = Tk;
          }
        };
        return Tm;
      }(TX);
      var TU = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          this.emitState("NativeLoad");
          this.Pn();
        };
        Tm.prototype.Pn = function () {
          this.emitState("NativeLoadComplete");
        };
        return Tm;
      }(T3);
      var TF = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          this.emitState("WebWorkerLoad");
          this.Pn();
        };
        Tm.prototype.Pn = function () {
          return Z3(this, undefined, undefined, function () {
            return Z4(this, function (TS) {
              switch (TS.label) {
                case 0x0:
                  return [0x3, 0x2];
                case 0x1:
                  TS.sent();
                  this.emitState("WebWorkerLoadComplete");
                  return [0x2];
                case 0x2:
                  if ("serviceWorker" in navigator) {
                    navigator.serviceWorker.register("/shared/service-worker/sw.js", {
                      'scope': '/'
                    }).then(function () {})["catch"](function () {});
                  }
                  this.emitState("WebWorkerLoadComplete");
                  return [0x2];
              }
            });
          });
        };
        return Tm;
      }(T3);
      var TY = function (Tq) {
        function Tm() {
          return null !== Tq && Tq.apply(this, arguments) || this;
        }
        Z1(Tm, Tq);
        Tm.prototype.onRun = function () {
          this.emitState("Complete");
        };
        return Tm;
      }(T3);
      var Tz = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Vu = TS.ku();
          TS.Eu = {
            'param': {
              'bootState': "Init",
              'packages': {}
            }
          };
          TS.Cu = false;
          return TS;
        }
        Z1(Tm, Tq);
        Tm.prototype.onCreate = function () {
          this.component.create(T2);
          this.component.create(ed);
          this.component.create(T0);
          var TS = this.component.getInstance(T0);
          if (TS) {
            TS.registerEvent("Shell.UpdateProgress");
            TS.registerEvent("Error.Occurred");
            TS.registerEvent("Shell.BootStateChanged");
          }
          this.component.create(aE);
          this.on("Shell.BootStateChanged", this.Mu, "High");
          this.on("Shell.BootStateChanged", this.Bu, "Low");
        };
        Tm.prototype.onStateChange = function (TS) {
          if (Tq.prototype.onStateChange) {
            Tq.prototype.onStateChange.call(this, TS);
          }
          if (!this.Cu) {
            this.Cu = true;
            this.emit("Shell.BootStateChanged", "Init");
          }
        };
        Tm.prototype.onDestroy = function () {
          this.Cu = false;
        };
        Tm.prototype.Mu = function (TS) {
          switch (TS.payload) {
            case "ShellLoadComplete":
              this.ju();
              this.Gu();
              this.Pu();
              this.Zu();
              this.Ru();
              aA(aI, aD, "icon");
              aA(aV, aM, "apple-touch-icon");
              this.Ou();
              this.emit("Shell.PWDUseCustomAlert", true);
              break;
            case "PveCheckComplete":
              this.Du();
              this.Nu();
              break;
            case "ProjectLoadComplete":
              this.Qu();
              this.Tu();
              break;
            case "GameReady":
              this.component.destroy(T0);
              break;
            case "GameStarted":
              this.view.show(ak);
              this.emit("Shell.FocusCanvas");
              this.component.destroy(eB);
              this.component.destroy(eY);
          }
        };
        Tm.prototype.Bu = function (TS) {
          var Tw = TS.payload;
          var TE = this.Vu[Tw];
          if (TE || "Complete" === Tw) {
            if (this.Lu) {
              this.component.destroy(this.Lu);
              this.Lu = undefined;
            }
            if (TE) {
              this.Eu.param.bootState = Tw;
              this.Lu = TE;
              this.component.create(TE);
              this.component.updateState(TE, this.Eu);
            } else if (this.state.complete) {
              this.state.complete();
            }
          }
        };
        Tm.prototype.Gu = function () {
          if (!document.head.querySelector("[rel=\"shortcut icon\"]")) {
            var TS = document.createElement("link");
            TS.rel = "shortcut icon";
            TS.id = "favicon";
            TS.href = this.resource.resolveUrl("shell-res/favicon.ico");
            document.head.appendChild(TS);
          }
        };
        Tm.prototype.Pu = function () {
          var TS;
          var Tw = null === (TS = rA.StorageKey) || undefined === TS ? undefined : TS.firstRunAPP;
          var TE = Tw ? eR(Tw, true) : undefined;
          if (TE && Tw) {
            ez(Tw, false);
          }
          this.Eu.param.firstTimeRunApp = TE;
        };
        Tm.prototype.Ru = function () {
          this.component.create(ey);
        };
        Tm.prototype.Zu = function () {
          this.component.create(e4);
          this.component.create(eK);
          this.component.create(ak);
          this.component.create(eY);
          this.component.create(eB);
          this.component.create(eq);
          this.view.append(eY, eK);
          this.view.append(aE, eY);
          this.component.updateState(aE, {
            'state': "setup"
          });
        };
        Tm.prototype.Iu = function () {
          var TS = this;
          this.component.updateState(aE, {
            'state': "start"
          });
          this.emit("Shell.GetScale", undefined, function (Tw) {
            if (!Tw.error) {
              var TE = Tw.response;
              TS.emit("Shell.Scaled", TE);
            }
          });
        };
        Tm.prototype.Fu = function () {
          var TS = this;
          var Tw = document.getElementById("initial-loader");
          if (Tw) {
            Tw.classList.add("hide-loading");
            setTimeout(function () {
              var TE;
              var Tp;
              if (!(null === (TE = Tw.parentElement) || undefined === TE)) {
                TE.removeChild(Tw);
              }
              var Tj = document.getElementById("loader-style");
              if (!(null === (Tp = null == Tj ? undefined : Tj.parentElement) || undefined === Tp)) {
                Tp.removeChild(Tj);
              }
              TS.Iu();
            }, 0x15e);
          }
        };
        Tm.prototype.ju = function () {
          var TS = this;
          var Tw = Date.now() - rA.BootTime;
          setTimeout(function () {
            TS.Fu();
          }, Tw < 0x708 ? 0x708 - Tw : 0x0);
        };
        Tm.prototype.Ou = function () {
          i3.setStatusBarStyleHandler = function (TS) {
            var Tw = r.app;
            if (Tw) {
              Tw.emit("SetStatusBar", TS);
            }
          };
        };
        Tm.prototype.Qu = function () {
          var TS = this;
          i3.is1959Supported = vx.getIs1959Supported();
          i3.requestGameStartHandler = function (Tw, TE) {
            var Tp = TI('');
            i3.ga.sendTiming("game_shell", '', Tp);
            i1 = TE;
            TS.Eu.param.showStartButton = Tw;
            TS.emit("Shell.ChangeProgressText", Pm.t("GameShell.LoadingResource"));
            TS.emit("Shell.ChangeProgressVisible", true);
            TS.emit("Shell.BootStateChanged", "SceneLoadComplete");
          };
          i3.addPreloadPluginHandler = function (Tw, TE) {
            var Tp = "string" == typeof Tw ? Tw : Tw.name;
            var Tj = "object" == typeof TE ? TE : undefined;
            var Tk = {
              'name': Tp,
              'rawUrl': Tp,
              'baseUrl': ''.concat(rA.SharedPath).concat(Tp)
            };
            Tk.config = Tj;
            Tk.optional = true;
            TS.Eu.param.packages[Tp] = Tk;
          };
          i3.loadPluginHandler = function (Tw) {
            var TE;
            var Tp = {
              'name': Tw,
              'rawUrl': Tw,
              'baseUrl': ''.concat(rA.SharedPath).concat(Tw)
            };
            Tp.optional = true;
            TS.Eu.param.packages[Tw] = Tp;
            var Tj = {
              'name': Tp
            };
            if (!(null === (TE = TS.component.getInstance(Tf)) || undefined === TE)) {
              TE.load(Tj);
            }
          };
          i3.setProgressMessageHandler = function (Tw) {
            TS.emit("Shell.ChangeProgressText", Tw);
          };
          i3.setProgressHandler = function (Tw, TE) {
            var Tp = Tw / TE * 0x1;
            if (isNaN(Tp)) {
              Tp = 0x0;
            }
            TS.emit("Shell.UpdateProgress", Tp);
          };
          i3.setProgressVisibleHandler = function (Tw) {
            TS.emit("Shell.ChangeProgressVisible", Tw);
          };
          i3.enableCanvasTouchPropagation = function (Tw) {
            var TE = cc.internal.inputManager;
            if (TE && TE.allowTouchPropagation) {
              TE.allowTouchPropagation(Tw);
            }
          };
        };
        Tm.prototype.Tu = function () {
          document.title = Pm.t(rA.LocalizedTitleKey);
        };
        Tm.prototype.Du = function () {
          if (vx.webpSupported) {
            Px.resource.setQualifierConfig([undefined, undefined, {
              'png': ["webp", "jpg"],
              'jpg': ["webp"]
            }]);
          }
        };
        Tm.prototype.Nu = function () {
          this.component.create(Tf);
        };
        Tm.prototype.ku = function () {
          return {
            'Init': TF,
            'WebWorkerLoadComplete': TU,
            'NativeLoadComplete': T7,
            'ShellLoadComplete': TP,
            'PveCheckComplete': TN,
            'PluginLoadComplete': TW,
            'ProjectLoadComplete': TD,
            'GameLoadComplete': TA,
            'SceneLoadComplete': TK,
            'LatePluginLoadComplete': Ty,
            'GameStarted': TY
          };
        };
        return Tm;
      }(iD);
      !function (Tq) {
        Tq.Wu = "_config";
        Tq.zu = "_map";
      }(TV || (TV = {}));
      var TR = function (Tq) {
        function Tm() {
          var TS = null !== Tq && Tq.apply(this, arguments) || this;
          TS.Uu = Object.create(null);
          return TS;
        }
        Z1(Tm, Tq);
        Object.defineProperty(Tm.prototype, "bundleVers", {
          'get': function () {
            return this.Uu;
          },
          'set': function (TS) {
            this.Uu = TS;
          },
          'enumerable': false,
          'configurable': true
        });
        Tm.prototype.loadBundle = function (TS, Tw, TE) {
          var Tp = this;
          var Tj = function (Tb, TQ) {
            if (TE) {
              setTimeout(function () {
                TE(Tb, TQ);
              }, 0x0);
            }
          };
          if (cc) {
            var Tk = [];
            var Tg = Array.isArray(TS);
            var TG = function (Tb) {
              var TQ = Tb.shift();
              if (TQ) {
                var Td = cc.assetManager.getBundle(TQ);
                if (Td) {
                  Tk.push(Td);
                  TG(Tb);
                } else {
                  var I0 = Tw.bundleInfo.bundleBaseUrl + TQ;
                  var I1 = {
                    'version': Tp.Uu[TQ]
                  };
                  cc.assetManager.loadBundle(I0, I1, function (I2, I3) {
                    if (I3) {
                      Tk.push(I3);
                      (function (I4, I5) {
                        var I6 = '@'.concat(I4.name, '/');
                        var I7 = I4[TV.Wu].paths[TV.zu];
                        var I8 = {};
                        Object.keys(I7).map(function (I9) {
                          I8[I6 + I9] = '';
                        });
                        I5.resource.addAssets(I8);
                      })(I3, Tw);
                      TG(Tb);
                    } else {
                      if (!I2) {
                        I2 = Error("Cannot find res after loading");
                      }
                      Tj(I2, undefined);
                    }
                  });
                }
              } else {
                Tj(undefined, Tg ? Tk : Tk[0x0]);
              }
            };
            TG(Tg ? TS.slice() : [TS]);
          } else {
            Tj(Error("CocosManager loadBundle - cc not found"), undefined);
          }
        };
        Tm.prototype.getURL = function (TS, Tw) {
          var TE = this.context.getContext(Tw);
          if (!TE) {
            throw Error("Unable to get bundle context");
          }
          return TE.resource.resolveUrl(TS, true);
        };
        Tm.prototype.hasEntry = function (TS) {
          return this.context.resource.hasEntry(TS);
        };
        Tm.prototype.resolveBundleName = function (TS, Tw) {
          var TE = Tw.bundleBaseUrl;
          var Tp = this.Uu[TS];
          if (Tp && TE && TS) {
            if ("string" == typeof Tp) {
              return {
                'index': ij(TE, TS, "index.".concat(Tp, ".js")),
                'config': ij(TE, TS, "config.".concat(Tp, ".json"))
              };
            }
            var Tj = Tp.config;
            var Tk = Tp.index;
            if (Tj && Tk) {
              return {
                'index': ij(TE, TS, "index.".concat(Tk, ".js")),
                'config': ij(TE, TS, "index.".concat(Tj, ".js"))
              };
            }
          }
        };
        return Tm;
      }(Jf);
      var TB = function () {
        function Tq() {}
        Tq.prototype.load = function (Tm) {
          return Z3(this, undefined, undefined, function () {
            return Z4(this, function (TS) {
              switch (TS.label) {
                case 0x0:
                  this.qu();
                  this.Yu();
                  this.Ju();
                  this.Xu();
                  this.Ku();
                  return [0x4, Jd];
                case 0x1:
                  return 0x1 !== TS.sent() ? [0x2] : (this.$u(Tm), [0x4, this.tc.component.create(Tz)]);
                case 0x2:
                  TS.sent();
                  return [0x4, this.nc()];
                case 0x3:
                  TS.sent();
                  return [0x2];
              }
            });
          });
        };
        Tq.prototype.nc = function () {
          var Tm = this;
          return new Promise(function (TS) {
            Tm.tc.component.updateState(Tz, {
              'complete': function () {
                Tm.tc.component.destroy(Tz);
                setTimeout(TS, 0x0);
              }
            });
          });
        };
        Tq.prototype.Ku = function () {
          var Tm;
          var TS = v6 || r.location;
          if (TS !== location) {
            Tm = [TS.origin];
          }
          var Tw = rA.Blobs;
          P2 = {
            'cacheOrigins': Tm,
            'blobRegistry': Tw
          };
        };
        Tq.prototype.qu = function () {
          i3.ga = new i8();
          r.onGAReceiveError = PI;
          if (r.onerror) {
            r.onerror.onFormat = PI;
          }
        };
        Tq.prototype.Yu = function () {
          var Tm = vx.getURLSearchParam().get("language");
          Tm = Tm ? this.ic(Tm) : navigator.language ? this.ic(navigator.language) : 'en';
          Pm.locale(Tm);
        };
        Tq.prototype.Xu = function () {
          i3.Error = eG;
          i3.ClientError = em;
          i3.ServerError = ew;
          i3.NetworkError = eS;
          i3.GameShellError = iA;
          i3.WebSocketError = eE;
        };
        Tq.prototype.ic = function (Tm) {
          var TS = rA.SupportedLanguages;
          var Tw = 'en';
          if (-0x1 !== TS.indexOf(Tm)) {
            Tw = Tm;
          } else {
            for (var TE = 0x0; TE < TS.length; TE++) {
              var Tj = TS[TE];
              if (0x0 === Tm.indexOf(Tj)) {
                Tw = Tj;
                break;
              }
            }
          }
          return Tw;
        };
        Tq.prototype.Ju = function () {
          document.title = rA.Name;
        };
        Tq.prototype.$u = function (Tm) {
          if (!Tm) {
            Tm = {
              'name': undefined,
              'version': undefined,
              'baseUrl': undefined
            };
          }
          if (rA.ShellDir) {
            Tm.baseUrl = rA.SharedPath + rA.ShellDir;
          } else {
            Tm.baseUrl = rA.MainDir;
          }
          var TS = new aT();
          var Tw = {
            'bundle': TS,
            'component': new JN(),
            'event': new JG(),
            'view': new a0(),
            'resource': new a1(),
            'plugin': new aJ(),
            'cocos': new TR()
          };
          !function (I0) {
            Object.assign(iI, I0);
            iO = iI;
          }(Tw);
          var TE = Object.assign({}, Tm);
          var Tp = TS.createBundle(TE);
          for (var Tj in Tw) {
            var Tk = Tw[Tj];
            if (Tk) {
              Tk.onInstantiate(Tp);
            }
          }
          var Tg = Object.assign({}, Tm);
          Tg.name = "Shell";
          var TG;
          var Tb = this.tc = TS.createBundle(Tg);
          JL.context = this.tc;
          i3.context = this.tc;
          e6(this.tc);
          TG = function (I0) {
            Tb.event.emit("Error.Log", {
              'tag': "Deprecated",
              'message': I0
            });
          };
          (function (I0) {
            try {
              I0.Bt();
              I0.jt;
            } catch (I1) {
              return false;
            }
          })(new vy(vN, vU, vF));
          vz = TG || vY;
          var TQ;
          var Td = Object.assign({}, Tm);
          Td.name = "Game";
          Td.baseUrl = rA.GameDir;
          (function (I0) {
            Px = I0;
          })(TS.createBundle(Td));
          TQ = {
            'AbstractComponent': iV,
            'AbstractEventComponent': iD,
            'AbstractViewComponent': iM,
            'AbstractCocosComponent': JJ,
            'AbstractPluginComponent': Jy,
            'CocosComponent': JP,
            'PluginMainComponent': JT,
            'LoadType': JH,
            'Loader': JL
          };
          r.plugin = TQ;
        };
        return Tq;
      }();
      i3.start = function (Tq, Tm, TS) {
        var Tw = function (TE) {
          if (TS) {
            TS(TE);
          } else if (TE) {
            throw TE;
          }
        };
        try {
          (function (TE) {
            if (!TE) {
              TE = {};
            }
            (rA = Object.assign({}, TE)).Name = rA.Name || rA.AppName || "Unnamed";
            rA.Version = rA.Version || rA.AppVersion || "0.0.0";
            rA.AssetTable = rA.AssetTable || {
              'version': 0x2,
              'assets': {}
            };
            rA.AspectRatio = rA.AspectRatio || undefined;
            rA.GameDir = rA.GameDir || '';
            rA.Identifier = rA.Identifier || undefined;
            rA.Index = rA.Index || undefined;
            rA.LocalizedTitleKey = rA.LocalizedTitleKey || "Game.Title";
            rA.MainDir = rA.MainDir || '';
            rA.Orientation = undefined !== rA.Orientation ? rA.Orientation : rV.Portrait;
            rA.SupportXSMaxRatio = +rA.SupportXSMaxRatio;
            rA.ThemeColor = rA.ThemeColor || "#FFFFFF";
            rA.BootTime = rA.BootTime || 0x0;
            if (!rA.SharedPath) {
              rA.SharedPath = "../shared/";
            }
            (function () {
              if (undefined === rA.Plugins) {
                rA.Plugins = [];
              } else {
                var Tp = rA.Plugins;
                if (Tp && "string" == typeof Tp) {
                  Tp = Tp.split(',');
                  for (var Tj = 0x0; Tj < Tp.length; ++Tj) {
                    Tp[Tj] = Tp[Tj].trim();
                  }
                }
                rA.Plugins = Tp;
              }
            })();
            (function () {
              if (rA.CompatibleCondition) {
                rA.Requirements = rA.CompatibleCondition;
              }
              if (undefined === rA.Requirements) {
                rA.Requirements = {
                  'minMemory': 0x400,
                  'whiteList': "chrome-40,chrome webview-40,firefox-44,safari-10,edge-15.15063",
                  'minOSVersion': "iOS-10,Android-5,MacOS-10.10,Windows-7"
                };
              } else {
                var Tp = rA.Requirements;
                if (Tp && "string" == typeof Tp) {
                  var Tj = new URLSearchParams(Tp);
                  Tp = {
                    'minMemory': +Tj.get("minMemory"),
                    'whiteList': Tj.get("whiteList"),
                    'minOSVersion': Tj.get("minOSVersion")
                  };
                }
                rA.Requirements = Tp;
              }
            })();
            (function () {
              if (undefined === rA.SupportedLanguages) {
                rA.SupportedLanguages = ['en'];
              } else {
                var Tp = rA.SupportedLanguages;
                if (Tp && "string" == typeof Tp) {
                  Tp = Tp.split(',');
                  for (var Tj = 0x0; Tj < Tp.length; ++Tj) {
                    Tp[Tj] = Tp[Tj].trim();
                  }
                }
                rA.SupportedLanguages = Tp;
              }
            })();
            (function () {
              if (rA.StorageKey) {
                var Tp = rA.StorageKey;
                if (Tp && "string" == typeof Tp) {
                  Tp = JSON.parse(Tp);
                }
                if (undefined !== Tp.forcePlay) {
                  rA.StorageKey.forcePlay = Tp.forcePlay;
                }
                if (undefined !== Tp.firstRunAPP) {
                  rA.StorageKey.firstRunAPP = Tp.firstRunAPP;
                }
              } else {
                rA.StorageKey = {
                  'forcePlay': "shell:".concat(rA.Name, "_force_play"),
                  'firstRunAPP': "shell/".concat(rA.Name, ":first_time_run_apps")
                };
              }
            })();
            rA = Object.freeze(rA);
          })(Tm);
          new TB().load(Tq).then(Tw, Tw);
        } catch (TE) {
          Tw(TE);
        }
      };
    }();
  }();
}();