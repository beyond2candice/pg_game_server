!function () {
  'use strict';

  !function () {
    var q = function () {
      var b = true;
      return function (y, G) {
        var x = b ? function () {
          if (G) {
            var U = G.apply(y, arguments);
            G = null;
            return U;
          }
        } : function () {};
        b = false;
        return x;
      };
    }();
    var o;
    !function (b) {
      var y = q(this, function () {
        return y.toString().search("(((.+)+)+)+$").toString().constructor(y).search("(((.+)+)+)+$");
      });
      y();
      b.h = "window";
      b.u = "self";
    }(o || (o = {}));
    var d = (0x0, eval)("this");
    d[o.u];
    var W = d[o.h];
    System.register(["6d5cafebdb", "react", "react-dom", "99212c6ec4", "react-spring/renderprops", "react-spring"], function (y) {
      'use strict';

      var G;
      var x;
      var U;
      var R;
      var O;
      var M;
      var P;
      var J;
      var S;
      var L;
      var z;
      var k;
      var F;
      var X;
      var w;
      var D;
      return {
        'setters': [null, function (C) {
          G = C["default"];
          x = C.useEffect;
          U = C.useRef;
          R = C.useState;
          O = C.forwardRef;
          M = C.useImperativeHandle;
        }, function (C) {
          P = C["default"];
        }, function (C) {
          J = C.ResRC;
          S = C.Utils;
          L = C.Serialiser;
          z = C.Deserialiser;
          k = C.XHR;
        }, function (C) {
          F = C.Transition;
          X = C.animated;
        }, function (C) {
          w = C.useSpring;
          D = C.animated;
        }],
        'execute': function () {
          y({
            'p': function (x3) {
              o6.launchType = x3;
            },
            'isCard': function () {
              return o6.launchType === Qj.CARD;
            }
          });
          var QB = W.__extends;
          var QI = W.__assign;
          var Qh = W.__decorate;
          var Qu = W.__awaiter;
          var QT = W.__generator;
          var Qg = W.__read;
          function QY(x3, x4) {
            var x5 = {};
            for (var x6 in x4) if (x3.hasOwnProperty(x6)) {
              x5[x3[x6]] = x4[x6];
            } else {
              x5[x6] = x4[x6];
            }
            return x5;
          }
          var Ql = {
            unloadBundleAsset: "releaseBundleAsset",
            unload: "release",
            unloadBundle: "releaseBundle",
            deleteBundle: "removeBundle",
            loadByBundleAsset: "loadBundleAsset",
            loadRemoteBySingle: "loadRemoteSingle"
          };
          QY(Ql, J);
          var QV = {
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
          var QA = QY(QV, S);
          function Qc(x3) {
            return function (x4, x5) {
              x4 = x4 || function (x6) {
                var x7 = undefined;
                if ("[object Object]" === Object.prototype.toString.call(x6) && x6.hasOwnProperty("err") && x6.hasOwnProperty('dt')) {
                  var x8 = x6.err;
                  if (x8) {
                    x7 = function (x9) {
                      var xq;
                      if (!("[object Object]" === Object.prototype.toString.call(x9))) {
                        x9 = {};
                      }
                      if (!(x9.hasOwnProperty('cd') && ("number" == typeof (xq = x9.cd) || "string" == typeof xq && '' !== xq && !/\s/.test(xq) && !isNaN(+xq)))) {
                        x9.cd = 0x1965;
                      }
                      0x0;
                      return new shell.Error(shell.ServerError.Domain, x9.cd, x9.tid);
                    }(x8);
                  }
                } else {
                  0x0;
                  x7 = new shell.Error(shell.ServerError.Domain, 0x1965);
                }
                return x7;
              }(x5);
              x3(x4, x5);
            };
          }
          var Qj;
          var H0;
          var H1;
          var H2;
          var H3 = function (x3) {
            function x4() {
              var x5 = null !== x3 && x3.apply(this, arguments) || this;
              x5.encodingParameters = function (x6) {
                var x7 = x4.m;
                x7.length = 0x0;
                var x8 = function (xN) {
                  if (Object.prototype.hasOwnProperty.call(x6, xN)) {
                    var xQ = x6[xN];
                    if (undefined !== xQ) {
                      if (xQ instanceof Array) {
                        xQ.forEach(function (xH) {
                          x7.push(''.concat(encodeURIComponent(xN), '=').concat(encodeURIComponent(JSON.stringify(xH))));
                        });
                      } else if ("object" == typeof xQ) {
                        x7.push(''.concat(encodeURIComponent(xN), '=').concat(encodeURIComponent(JSON.stringify(xQ))));
                      } else {
                        x7.push(''.concat(encodeURIComponent(xN), '=').concat(encodeURIComponent(xQ)));
                      }
                    }
                  }
                };
                for (var x9 in x6) x8(x9);
                var xq = x7.join('&');
                x7.length = 0x0;
                return xq;
              };
              return x5;
            }
            QB(x4, x3);
            x4.m = [];
            return x4;
          }(L);
          var H4 = function (x3) {
            function x4() {
              var x5 = null !== x3 && x3.apply(this, arguments) || this;
              x5.transformResponse = function (x6) {
                return x6;
              };
              return x5;
            }
            QB(x4, x3);
            return x4;
          }(z);
          var H5 = function () {
            function x3() {
              this.v = new H3();
              this._ = new H4("json");
              this.k = new k(this.v, this._);
            }
            x3.prototype.request = function (x4, x5, x6) {
              return function (x7, x8, x9, xq) {
                var xN = x7.request("POST", x8, x9, Qc(xq));
                return function () {
                  return xN.abort();
                };
              }(this.k, x4, x5, x6);
            };
            return x3;
          }();
          y("GameHistoryView", Qj);
          (function (x3) {
            x3[x3.GAME = 0x1] = "GAME";
            x3[x3.CARD = 0x2] = "CARD";
            x3[x3.SLOT = 0x3] = "SLOT";
            x3[x3.APIREPLAY = 0x5] = "APIREPLAY";
          })(Qj || y("GameHistoryView", Qj = {}));
          (function (x3) {
            x3[x3.None = -0x1] = "None";
            x3[x3.HistoryList = 0x0] = "HistoryList";
            x3[x3.HistoryDetails = 0x1] = "HistoryDetails";
            x3[x3.HistoryFreeSpinDetails = 0x2] = "HistoryFreeSpinDetails";
            x3[x3.HistoryCalendar = 0x3] = "HistoryCalendar";
            x3[x3.HistoryDismiss = 0x4] = "HistoryDismiss";
          })(H0 || (H0 = {}));
          (function (x3) {
            x3[x3.SELECTION = 0x0] = "SELECTION";
            x3[x3.CUSTOM = 0x1] = "CUSTOM";
          })(H1 || (H1 = {}));
          (function (x3) {
            x3[x3.LANDSCAPE = 0x5a] = "LANDSCAPE";
            x3[x3.PORTRAIT = 0x0] = "PORTRAIT";
          })(H2 || (H2 = {}));
          var H6 = {
            tension: 0xa3,
            friction: 0x15,
            velocity: 0xa,
            clamp: true
          };
          var H7 = {
            'r': 0xff,
            'g': 0xff,
            'b': 0xff,
            'a': 0x1
          };
          var H8 = {
            'r': 0xff,
            'g': 0xff,
            'b': 0xff,
            'a': 0x1
          };
          var H9 = {
            SLOT_GAME: H7,
            CARD_GAME: H8
          };
          var Hq;
          !function (x3) {
            x3[x3.NormalBet = 0x1] = "NormalBet";
            x3[x3.FreeBet = 0x2] = "FreeBet";
            x3[x3.BonusBet = 0x3] = "BonusBet";
            x3[x3.ReBet = 0x4] = "ReBet";
            x3[x3.JackpotBet = 0x8] = "JackpotBet";
            x3[x3.ContinueBet = 0x9] = "ContinueBet";
            x3[x3.CashWallet = 0xb] = "CashWallet";
            x3[x3.BonusWallet = 0xc] = "BonusWallet";
            x3[x3.FreeGameWallet = 0xd] = "FreeGameWallet";
            x3[x3.PointTournament = 0x15] = "PointTournament";
            x3[x3.CashTournament = 0x16] = "CashTournament";
            x3[x3.AutoBet = 0x1f] = "AutoBet";
            x3[x3.TurboBet = 0x20] = "TurboBet";
            x3[x3.BaccaratSupersix = 0x29] = "BaccaratSupersix";
            x3[x3.BaccaratCommission = 0x2a] = "BaccaratCommission";
            x3[x3.AmericanBlackjack = 0x2b] = "AmericanBlackjack";
            x3[x3.EuropeanBlackjack = 0x2c] = "EuropeanBlackjack";
            x3[x3.FreeHand = 0x33] = "FreeHand";
          }(Hq || (Hq = {}));
          if (!(undefined !== d || undefined !== W)) {
            if ("undefined" != typeof global) {
              global;
            }
          }
          var Hb = {};
          var Hy = {};
          var HG = {};
          !function (x3) {
            var x4;
            var x5;
            var x6 = {
              value: true
            };
            var x7 = {
              height: "272px",
              width: "360px",
              position: "absolute",
              display: "flex",
              flexDirection: "column"
            };
            var x8 = {
              height: "30px",
              fontSize: "12px",
              width: "120px",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              opacity: 0x1
            };
            var x9 = {
              height: "35px",
              fontSize: "20px",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              opacity: 0x1,
              left: "17px",
              position: "relative"
            };
            var xq = {
              paddingTop: "27px",
              display: "block",
              height: "185px",
              width: "360px"
            };
            var xN = {
              display: "flex",
              width: "360px"
            };
            var xQ = {
              height: "162px",
              width: "32px",
              display: "flex",
              fontSize: "11px",
              alignItems: "center",
              textAlign: "center",
              flexDirection: "column",
              paddingRight: "40px",
              paddingTop: "35px"
            };
            var xH = {
              height: "162px",
              width: "360px",
              flexDirection: "column",
              display: "flex"
            };
            var xd = {
              top: "0px",
              margin: "auto",
              height: "32px",
              width: "280px",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              paddingRight: "40px",
              paddingLeft: "40px",
              paddingTop: "5px",
              paddingBottom: "10px"
            };
            var xW = {
              top: "0px",
              margin: "auto",
              height: "32px",
              width: "340px",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              paddingRight: "0px",
              paddingLeft: "15px",
              paddingTop: "5px",
              paddingBottom: "10px"
            };
            var xb = {
              width: "300px",
              height: "35px",
              textAlign: "center",
              fontSize: "30px",
              color: "#FFFFFF",
              textShadow: "1px 1px 1px rgba(0,0,0,0.3)",
              borderRadius: "30px",
              backgroundImage: "linear-gradient(to bottom,rgba(251, 233, 111, 1) 30%,rgb(255, 225, 150) 50%,rgba(223, 155, 25, 1) 90%)",
              position: "relative",
              margin: "auto"
            };
            var xy = {
              height: "35px",
              width: "inherit",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              borderColor: "#FFFFFF",
              borderStyle: "none",
              borderWidth: "1px",
              backgroundColor: "none"
            };
            var xG = {
              height: "35px",
              width: "inherit",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              borderColor: "#FFFFFF",
              borderStyle: "none",
              borderWidth: "1px",
              borderRadius: "5px",
              backgroundColor: "none"
            };
            var xx = {
              height: "30px"
            };
            var xU = {
              height: "85px",
              width: "8px",
              position: "relative",
              left: "55px",
              display: "flex",
              flexWrap: "wrap"
            };
            var xR = {
              height: "32px",
              width: "44px",
              fontSize: "12px",
              alignItems: "center",
              textAlign: "center",
              display: "none"
            };
            var xO = {
              height: "32px",
              fontSize: "16px",
              alignItems: "center",
              textAlign: "center",
              display: "flex"
            };
            var xM = {
              paddingTop: "14px",
              paddingBottom: "14px",
              width: "4px",
              height: "44px"
            };
            var xP = {
              width: "200px",
              height: "30px",
              fontSize: "12px",
              alignItems: "center",
              textAlign: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              display: "inline-flex"
            };
            var xJ = {
              width: "340px",
              height: "50px",
              fontSize: "12px",
              alignItems: "center",
              textAlign: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              display: "inline-flex",
              position: "relative",
              left: "17px"
            };
            var xS = {
              width: "62px",
              background: '#',
              fontSize: "12px"
            };
            var xs = {
              width: "100px",
              height: "35px",
              borderRadius: "5px",
              background: '#',
              fontSize: "20px"
            };
            var xf = {
              height: "5px",
              width: "5px",
              opacity: 0x1,
              borderRadius: "50%"
            };
            var xL = {
              position: "relative",
              fontFamily: "Arial"
            };
            var xz = {
              customPageContainer: x7,
              calendarCustomDescriptionLabel: x8,
              calendarCustomDescriptionLabelHorizontal: x9,
              datePageContainer: xq,
              dateRowContainer: xN,
              descriptionContainer: xQ,
              datePickerContainer: xH,
              comfirmButtonContainer: xd,
              comfirmButtonContainerHorizontal: xW,
              confirmButtonCardContainer: xb,
              confirmButtonLabel: xy,
              confirmButtonLabelHorizontal: xG,
              calendarDateListItem: xx,
              dotContainer: xU,
              dateItem: xR,
              dateItemHorizontal: xO,
              connectImageContainer: xM,
              dateContainer: xP,
              dateContainerHorizontal: xJ,
              selectScrollContainer: xS,
              selectScrollContainerHorizontal: xs,
              dotIcon: xf,
              selectContainer: xL
            };
            Object.defineProperty(x3, "__esModule", x6);
            x3.styles = x3.LocalePrefix = x3.CaseType = x3.CalendarState = undefined;
            x3.styles = xz;
            (function (xk) {
              xk[xk.SELECTION = 0x0] = "SELECTION";
              xk[xk.CUSTOM = 0x1] = "CUSTOM";
            })(x3.CalendarState || (x3.CalendarState = {}));
            (x4 = x3.CaseType || (x3.CaseType = {}))[x4.SLOT_GAME = 0x0] = "SLOT_GAME";
            x4[x4.CARD_GAME = 0x1] = "CARD_GAME";
            (x5 = x3.LocalePrefix || (x3.LocalePrefix = {})).DEFAULT = "CustomCalendar";
            x5.TOURNAMENT = "TournamentCustomCalender";
          }(HG);
          var Hx = {};
          function HU(x3, x4) {
            var x5 = new Date(x3);
            if (x4) {
              x5.setHours(0o27);
              x5.setMinutes(0o73);
              x5.setSeconds(0x3b);
              x5.setMilliseconds(0x3e7);
            } else {
              x5.setHours(0);
              x5.setMinutes(0x0);
              x5.setSeconds(0o0);
              x5.setMilliseconds(0o0);
            }
            return x5;
          }
          var HR = {
            value: true
          };
          Object.defineProperty(Hx, "__esModule", HR);
          Hx.convertTimeToBeginningOrEndOfTheDay = Hx.getCustomDateObject = undefined;
          Hx.getCustomDateObject = function (x3) {
            var x4 = new Date(x3.startDate);
            var x5 = new Date(x3.endDate);
            return {
              'startDate': HU(x4),
              'endDate': HU(x5, true)
            };
          };
          Hx.convertTimeToBeginningOrEndOfTheDay = HU;
          var HO = {};
          var HM = {};
          function HP(x3) {
            var x4;
            var x5;
            var x6;
            var x7;
            var x8;
            var x9 = [];
            x4 = document.getElementsByClassName("select-items");
            x5 = document.getElementsByClassName("select-selected");
            x7 = x4.length;
            x8 = x5.length;
            for (x6 = 0x0; x6 < x8; x6++) {
              if (x3 === x5[x6]) {
                x9.push(x6);
              } else {
                x5[x6].classList.remove("select-arrow-active");
              }
            }
            for (x6 = 0x0; x6 < x7; x6++) {
              if (x9.indexOf(x6)) {
                x4[x6].classList.add("select-hide");
              }
            }
          }
          var HJ = {
            value: true
          };
          Object.defineProperty(HM, "__esModule", HJ);
          HM.customSelectUtil = undefined;
          var HS = function () {
            function x3() {}
            x3.prototype.convertOptionToDiv = function (x4, x5, x6) {
              var x7;
              var x8;
              var x9;
              var xq;
              var xN;
              var xQ;
              var xH;
              var xd;
              var xW;
              if (undefined === x6) {
                x6 = true;
              }
              xq = (x7 = document.getElementsByClassName(x4)).length;
              for (x8 = 0x0; x8 < xq; x8++) {
                (xQ = x7[x8].getElementsByTagName("select")[0x0]).setAttribute("style", "display:none");
                xN = xQ.length;
                if (x6) {
                  xH = document.createElement("DIV");
                } else {
                  var xb = document.getElementsByClassName("select-selected");
                  for (var xy = 0x0; xy < xb.length; xy++) {
                    if (xb[xy].parentNode.className === x4) {
                      xH = xb[xy];
                    }
                  }
                  HP(this);
                }
                xH.setAttribute("class", "select-selected");
                x7[x8].appendChild(xH);
                xH.innerHTML = xQ.options[xQ.selectedIndex].innerHTML;
                (xd = document.createElement("DIV")).setAttribute("class", "select-items select-hide");
                xd.setAttribute('id', "style-scroller");
                if (xN <= 0x4) {
                  xd.setAttribute("style", "height :" + 0x24 * xN + "px;");
                } else {
                  xH.setAttribute("style", "left:1px");
                  xd.setAttribute("style", "height :155px; overflow: auto; width: 65px;");
                }
                for (x9 = 0x0; x9 < xN; x9++) {
                  (xW = document.createElement("DIV")).innerHTML = xQ.options[x9].innerHTML;
                  xW.setAttribute("style", "width: 55px;height: 34px;opacity:0.9;");
                  xW.addEventListener("click", function () {
                    var xG;
                    var xx;
                    var xU;
                    var xR;
                    var xO;
                    var xM;
                    var xP;
                    xM = (xR = this.parentNode.parentNode.getElementsByTagName("select")[0x0]).length;
                    xO = this.parentNode.previousSibling;
                    for (xx = 0x0; xx < xM; xx++) {
                      if (xR.options[xx].innerHTML == this.innerHTML) {
                        xR.selectedIndex = xx;
                        xO.innerHTML = this.innerHTML;
                        xP = (xG = this.parentNode.getElementsByClassName("same-as-selected")).length;
                        for (xU = 0x0; xU < xP; xU++) {
                          xG[xU].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        x5(xQ.options[xQ.selectedIndex].innerHTML);
                        break;
                      }
                    }
                    xO.click();
                  });
                  xd.appendChild(xW);
                }
                x7[x8].appendChild(xd);
                if (x6) {
                  xH.addEventListener("click", function (xG) {
                    xG.stopPropagation();
                    HP(this);
                    this.nextSibling.classList.toggle("select-hide");
                    this.classList.toggle("select-arrow-active");
                  });
                }
              }
              document.addEventListener("click", HP);
            };
            x3.prototype.dynamicChangeAllOption = function (x4) {
              var x5 = document.getElementsByClassName("select-selected");
              for (var x6 = 0x0; x6 < x5.length; x6++) {
                switch (x5[x6].parentNode.className) {
                  case "select-container-year-start":
                    x5[x6].innerHTML = x4.startYear;
                    break;
                  case "select-container-month-start":
                    x5[x6].innerHTML = x4.startMonth;
                    break;
                  case "select-container-day-start":
                    x5[x6].innerHTML = x4.startDay;
                    break;
                  case "select-container-year-end":
                    x5[x6].innerHTML = x4.endYear;
                    break;
                  case "select-container-month-end":
                    x5[x6].innerHTML = x4.endMonth;
                    break;
                  case "select-container-day-end":
                    x5[x6].innerHTML = x4.endDay;
                }
              }
            };
            x3.prototype.resetTargetOption = function (x4) {
              var x5 = document.getElementsByClassName(x4);
              for (var x6 = 0x0; x6 < x5[0x0].children.length; x6++) {
                if ("select-items select-hide" === x5[0x0].children[x6].className) {
                  x5[0x0].children[x6].remove();
                }
              }
            };
            x3.prototype.addOptionGlobalStyle = function (x4) {
              var x5 = document.createElement("style");
              x5.innerHTML = "\n        .select-selected {\n            background-color:" + x4.backgroundColor + ";\n        }\n\n        .select-selected:after {\n        position: absolute;\n        top: 14px;\n        right: 10px;\n        width: 0;\n        height: 0;\n        border: 6px solid transparent;\n        height: 150px;\n        }\n\n        .select-selected.select-arrow-active:after {\n            border-color: " + x4.borderColor + " ;\n            top: 7px;\n        }\n\n        .select-items div,\n        .select-selected {\n            color: " + x4.textColor + ";\n            border: " + x4.selectedBorderSize + "px solid transparent;\n            border-color:  " + x4.textColor + ";\n            cursor: pointer;\n            user-select: none;\n            position: relative;\n            width: 55px;\n            height: 34px;\n            align-items: center;\n            display: grid;\n            font-size: " + x4.fontSize + "px;\n            left: 1px;\n        }\n\n        .select-items {\n            position: absolute;\n            background-color : " + x4.backgroundColor + ";\n            top: 100%;\n            left: 0;\n            right: 0;\n            z-index: 99;\n        }\n\n        .select-hide {\n            display: none;\n        }\n        \n        .select-items div:hover,                        \n        .same-as-selected {\n            background-color: rgba(0, 0, 0, 0.3);\n        }\n\n        #style-scroller::-webkit-scrollbar-track\n        {\n            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n            border-radius: 5px;\n            background-color: " + x4.backgroundColor + ";\n        }\n\n        #style-scroller::-webkit-scrollbar\n        {\n         width: 5px;\n         background-color: " + x4.backgroundColor + ";\n        }\n\n        #style-scroller::-webkit-scrollbar-thumb\n        {\n         border-radius: 5px;\n         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n         background-color: rgba(255, 255, 255, 0.6);\n        }\n        ";
              document.head.appendChild(x5);
            };
            return x3;
          }();
          var Hs = {
            value: true
          };
          HM.customSelectUtil = new HS();
          Object.defineProperty(HO, "__esModule", Hs);
          HO.CalendarPickDateView = undefined;
          var Hf = __importDefault(G);
          var HF = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.C = x6.C.bind(x6);
              x6.S = x6.S.bind(x6);
              HM.customSelectUtil.addOptionGlobalStyle({
                'backgroundColor': x6.props.backgroundColor,
                'borderColor': x6.props.themeColor,
                'textColor': x6.props.themeColor,
                'selectedBorderSize': 0x1,
                'fontSize': 0xc
              });
              x6.H = x6.H.bind(x6);
              x6.D = x6.D.bind(x6);
              x6.j = x6.j.bind(x6);
              x6.N = x6.N.bind(x6);
              return x6;
            }
            __extends(x4, x3);
            x4.prototype.render = function () {
              var x5 = this.props.onSelectedDate;
              return Hf["default"].createElement("div", {
                'id': "date-container",
                'style': this.S()
              }, Hf["default"].createElement("div", {
                'className': "select-container-year-" + this.props.extraName,
                'style': HG.styles.selectContainer
              }, Hf["default"].createElement("select", {
                'value': x5.getFullYear().toString(),
                'style': this.C(),
                'onChange': function () {}
              }, this.D())), Hf["default"].createElement("div", {
                'className': "select-container-month-" + this.props.extraName,
                'style': HG.styles.selectContainer
              }, Hf["default"].createElement("select", {
                'value': '' + (x5.getMonth() + 0x1),
                'style': this.C(),
                'onChange': function () {}
              }, this.j())), Hf["default"].createElement("div", {
                'className': "select-container-day-" + this.props.extraName,
                'style': HG.styles.selectContainer
              }, Hf["default"].createElement("select", {
                'value': x5.getDate().toString(),
                'style': this.C(),
                'onChange': function () {}
              }, this.N())));
            };
            x4.prototype.componentDidMount = function () {
              this.T(true);
            };
            x4.prototype.componentDidUpdate = function (x5) {
              if (this.props.onSelectedDate !== x5.onSelectedDate) {
                this.O();
                this.T(false);
              }
            };
            x4.prototype.O = function () {
              HM.customSelectUtil.resetTargetOption("select-container-year-" + this.props.extraName);
              HM.customSelectUtil.resetTargetOption("select-container-month-" + this.props.extraName);
              HM.customSelectUtil.resetTargetOption("select-container-day-" + this.props.extraName);
            };
            x4.prototype.T = function (x5) {
              HM.customSelectUtil.convertOptionToDiv("select-container-year-" + this.props.extraName, this.H.bind(this, 0x0), x5);
              HM.customSelectUtil.convertOptionToDiv("select-container-month-" + this.props.extraName, this.H.bind(this, 0x1), x5);
              HM.customSelectUtil.convertOptionToDiv("select-container-day-" + this.props.extraName, this.H.bind(this, 0x2), x5);
            };
            x4.prototype.C = function () {
              var x5 = {
                color: "#FFFFFF",
                borderColor: "#FFFFFF",
                backgroundColor: "#30303b"
              };
              var x6 = __assign(__assign({}, HG.styles.selectScrollContainer), x5);
              if (undefined !== this.props.themeColor) {
                x6.color = this.props.themeColor;
                x6.borderColor = this.props.themeColor;
              }
              if (undefined !== this.props.backgroundColor) {
                x6.backgroundColor = this.props.backgroundColor;
              }
              if (shell.environment.isIOS()) {
                x6.color = "#30303b";
                x6.backgroundColor = "#FFFFFF";
              }
              return x6;
            };
            x4.prototype.S = function () {
              var x5 = {
                color: "#FFFFFF"
              };
              var x6 = __assign(__assign({}, HG.styles.dateContainer), x5);
              if (undefined !== this.props.backgroundColor) {
                x6.color = this.props.backgroundColor;
              }
              if (this.props.isRTL) {
                x6.direction = "rtl";
              }
              return x6;
            };
            x4.prototype.D = function () {
              var x5 = [];
              var x6 = this.props.onLastDate.getFullYear();
              for (var x7 = this.props.onBeginDate.getFullYear(); x7 <= x6; x7++) {
                x5.push(Hf["default"].createElement("option", {
                  'className': "date-item-year",
                  'key': "date-item-year" + x7,
                  'value': x7,
                  'style': HG.styles.dateItem
                }, x7));
              }
              return x5;
            };
            x4.prototype.j = function () {
              var x5;
              var x6 = [];
              var x7 = this.props.onBeginDate.getFullYear();
              var x8 = this.props.onLastDate;
              var x9 = x8.getMonth() + 0x1;
              var xq = x8.getFullYear();
              var xN = this.props.onSelectedDate.getFullYear();
              var xQ = this.props.onBeginDate;
              x5 = x7 === xq || xN === x7 ? xQ.getMonth() + 0x1 : xN === xq ? 0x1 : xQ.getMonth() + 0x1;
              if (xN === xq) {
                for (var xH = x5; xH <= x9; xH++) {
                  if (xH > 0x0) {
                    x6.push(Hf["default"].createElement("option", {
                      'className': "date-item-month",
                      'key': "date-item-month" + xH,
                      'value': xH,
                      'style': HG.styles.dateItem
                    }, xH));
                  }
                }
              } else {
                for (xH = x5; xH <= 0xc; xH++) {
                  x6.push(Hf["default"].createElement("option", {
                    'className': "date-item-month",
                    'key': "date-item-month" + xH,
                    'value': xH,
                    'style': HG.styles.dateItem
                  }, xH));
                }
              }
              return x6;
            };
            x4.prototype.N = function () {
              var x5;
              var x6 = [];
              var x7 = this.props.onLastDate;
              var x8 = x7.getMonth() + 0x1;
              var x9 = this.props.onSelectedDate;
              var xq = x9.getMonth() + 0x1;
              var xN = new Date(x9.getFullYear(), xq, 0x0);
              var xQ = x9.getMonth() + 0x1 === x8;
              var xH = this.props.onBeginDate;
              var xd = xH.getMonth() + 0x1;
              var xW = xH.getDate();
              x5 = xQ ? x7.getDate() : xN.getDate();
              var xb = 0x1;
              if (xq === xd) {
                xb = xW;
              }
              for (var xy = xb; xy <= x5; xy++) {
                x6.push(Hf["default"].createElement("option", {
                  'className': "date-item",
                  'key': "date-item-day" + xy,
                  'value': xy,
                  'style': HG.styles.dateItem
                }, xy));
              }
              return x6;
            };
            x4.prototype.H = function (x5, x6) {
              var x7 = Object.create(null);
              var x8 = this.props.onSelectedDate;
              x7.year = x8.getFullYear();
              x7.month = x8.getMonth() + 0x1;
              x7.day = x8.getDate();
              var x9;
              var xq = this.props.onLastDate;
              switch (x5) {
                case 0x0:
                  x7.year = x6;
                  break;
                case 0x1:
                  x7.month = x6;
                  var xN = new Date(x7.year, x7.month, 0x0);
                  if (x7.day > xN.getDate()) {
                    x7.day = xN.getDate();
                  }
                  break;
                case 0x2:
                  x7.day = x6;
              }
              x9 = new Date(x7.year, x7.month - 0x1, x7.day) > xq ? xq : new Date(x7.year, x7.month - 0x1, x7.day);
              this.props.onHandleChange(x9);
              this.O();
              this.T(false);
            };
            return x4;
          }(Hf["default"].Component);
          var Hp = {
            value: true
          };
          HO.CalendarPickDateView = HF;
          Object.defineProperty(Hy, "__esModule", Hp);
          Hy.CalendarCustomView = undefined;
          var Hm = __importDefault(G);
          var Ha = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = new Date();
              var x8 = x6.F(x7);
              var x9 = x6.I(x7);
              var xq = x6.L();
              var xN = x6.P();
              var xQ = x9.getFullYear();
              var xH = x9.getMonth() + 0x1;
              var xd = x9.getDate();
              x6.state = {
                'themeColor': xN,
                'onBeginDate': x8,
                'onLastDate': x9,
                'calendarRangeDate': xq,
                'startYear': xQ,
                'startMonth': xH,
                'startDay': xd,
                'endYear': xQ,
                'endMonth': xH,
                'endDay': xd,
                'startDate': Hx.convertTimeToBeginningOrEndOfTheDay(x9),
                'endDate': Hx.convertTimeToBeginningOrEndOfTheDay(x9, true),
                'currentCalendarCustomType': 0x2
              };
              x6.M = x6.M.bind(x6);
              x6.R = x6.R.bind(x6);
              x6.B = x6.B.bind(x6);
              x6.A = x6.A.bind(x6);
              x6.W = x6.W.bind(x6);
              x6.Y = x6.Y.bind(x6);
              x6.F = x6.F.bind(x6);
              x6.I = x6.I.bind(x6);
              x6.V = x6.V.bind(x6);
              x6.G = x6.G.bind(x6);
              x6.U = x6.U.bind(x6);
              x6.q = x6.q.bind(x6);
              x6.X = x6.X.bind(x6);
              x6.K = x6.K.bind(x6);
              x6.Z = x6.Z.bind(x6);
              return x6;
            }
            __extends(x4, x3);
            x4.prototype.render = function () {
              var x5 = this.props.localePrefix || HG.LocalePrefix.DEFAULT;
              var x6 = __assign({}, HG.styles.dotContainer);
              if (this.props.isRTL) {
                var x7 = x6.left;
                x6.right = x7;
                delete x6.left;
              }
              var x8 = {
                'id': "date-page-container",
                style: HG.styles.datePageContainer
              };
              var x9 = {
                'id': "date-picker-container",
                style: HG.styles.datePickerContainer
              };
              var xq = {
                style: HG.styles.dateRowContainer
              };
              var xN = {
                'id': "dot-container",
                style: x6
              };
              var xQ = {
                style: HG.styles.dateRowContainer
              };
              return Hm["default"].createElement("div", {
                'id': "custom-page-container",
                'style': this.B()
              }, Hm["default"].createElement("div", x8, Hm["default"].createElement("div", x9, Hm["default"].createElement("div", xq, Hm["default"].createElement("div", {
                'style': this.W()
              }, Hm["default"].createElement("div", null, shell.I18n.t(x5 + ".Start"))), Hm["default"].createElement(HO.CalendarPickDateView, {
                'isRTL': this.props.isRTL,
                'themeColor': this.M(),
                'backgroundColor': this.R(),
                'onBeginDate': this.state.onBeginDate,
                'onLastDate': this.state.onLastDate,
                'onSelectedDate': new Date(this.state.startYear, this.state.startMonth - 0x1, this.state.startDay),
                'onHandleChange': this.U,
                'extraName': "start"
              })), Hm["default"].createElement("div", xN, Hm["default"].createElement("div", {
                'id': "dot-icon",
                'style': this.Y()
              }), Hm["default"].createElement("div", {
                'id': "dot-icon",
                'style': this.Y()
              }), Hm["default"].createElement("div", {
                'id': "dot-icon",
                'style': this.Y()
              }), Hm["default"].createElement("div", {
                'id': "dot-icon",
                'style': this.Y()
              }), Hm["default"].createElement("div", {
                'id': "dot-icon",
                'style': this.Y()
              })), Hm["default"].createElement("div", xQ, Hm["default"].createElement("div", {
                'style': this.W()
              }, Hm["default"].createElement("div", null, shell.I18n.t(x5 + ".End"))), Hm["default"].createElement(HO.CalendarPickDateView, {
                'isRTL': this.props.isRTL,
                'themeColor': this.M(),
                'backgroundColor': this.R(),
                'onBeginDate': this.state.onBeginDate,
                'onLastDate': this.state.onLastDate,
                'onSelectedDate': new Date(this.state.endYear, this.state.endMonth - 0x1, this.state.endDay),
                'onHandleChange': this.q,
                'extraName': "end"
              })))), Hm["default"].createElement("div", {
                'id': "comfirm-button-container",
                'style': this.J()
              }, Hm["default"].createElement("div", {
                'id': "confirm-button-label",
                'onClick': this.G,
                'style': this.A()
              }, Hm["default"].createElement("div", null, shell.I18n.t(x5 + ".Confirm")))));
            };
            x4.prototype.M = function () {
              this.$();
              HG.CaseType.CARD_GAME;
              return this.state.themeColor;
            };
            x4.prototype.J = function () {
              return this.$() === HG.CaseType.CARD_GAME ? HG.styles.confirmButtonCardContainer : HG.styles.comfirmButtonContainer;
            };
            x4.prototype.B = function () {
              var x5 = __assign(__assign({}, HG.styles.customPageContainer), {
                'backgroundColor': this.R()
              });
              if (this.props.isRTL) {
                x5.direction = "rtl";
              }
              return x5;
            };
            x4.prototype.R = function () {
              var x5;
              x5 = this.$() === HG.CaseType.CARD_GAME ? "#262121" : "#30303b";
              if (undefined !== this.props.backgroundColor) {
                x5 = this.props.backgroundColor;
              }
              return x5;
            };
            x4.prototype.A = function () {
              var x5 = {
                color: this.props.themeColor,
                borderColor: this.props.themeColor,
                borderStyle: "solid",
                backgroundColor: this.props.backgroundColor
              };
              var x6 = __assign(__assign({}, HG.styles.confirmButtonLabel), x5);
              if (this.$() === HG.CaseType.CARD_GAME) {
                x6.color = "rgba(0,0,0)";
              } else {
                if (undefined !== this.props.themeColor) {
                  x6.color = this.props.themeColor;
                  x6.borderColor = this.props.themeColor;
                }
                x6.borderStyle = "solid";
              }
              if (undefined !== this.props.confirmBackgroundColor) {
                x6.backgroundColor = this.props.confirmBackgroundColor;
              }
              return x6;
            };
            x4.prototype.W = function () {
              var x5 = {
                opacity: 0x1,
                color: "#FFFFFF"
              };
              var x6 = __assign(__assign({}, HG.styles.calendarCustomDescriptionLabel), x5);
              if (this.$() === HG.CaseType.CARD_GAME) {
                if (undefined !== this.props.themeColor) {
                  x6.color = this.props.themeColor;
                }
                x6.opacity = 0.6;
              } else if (undefined !== this.props.themeColor) {
                x6.color = this.props.themeColor;
              }
              return x6;
            };
            x4.prototype.Y = function () {
              var x5 = {
                opacity: 0x1,
                backgroundColor: "#292934"
              };
              var x6 = __assign(__assign({}, HG.styles.dotIcon), x5);
              if (this.$() === HG.CaseType.CARD_GAME) {
                if (undefined !== this.props.themeColor) {
                  var x7 = this.props.themeColor;
                  x6.backgroundColor = x7;
                }
                x6.opacity = 0.6;
              } else if (undefined !== this.props.themeColor) {
                x7 = this.props.themeColor;
                x6.backgroundColor = x7;
              }
              return x6;
            };
            x4.prototype.U = function (x5) {
              var x6 = this.K(0, x5);
              var x7 = new Date(x6.startYear, x6.startMonth - 0x1, x6.startDay);
              var x8 = new Date(x6.endYear, x6.endMonth - 0x1, x6.endDay);
              this.Z(0o0, x7, x8);
            };
            x4.prototype.q = function (x5) {
              var x6 = this.K(0o1, x5);
              var x7 = new Date(x6.startYear, x6.startMonth - 0x1, x6.startDay);
              var x8 = new Date(x6.endYear, x6.endMonth - 0x1, x6.endDay);
              this.Z(0o1, x7, x8);
            };
            x4.prototype.K = function (x5, x6) {
              var x7;
              var x8;
              var x9;
              var xq;
              var xN;
              var xQ;
              var xH = Object.create(null);
              var xd = this.state.onLastDate;
              var xW = xd.getFullYear();
              var xb = xd.getMonth() + 0x1;
              switch (x5) {
                case 0x0:
                  xH.startYear = x6.getFullYear();
                  xH.startMonth = x6.getMonth() + 0x1;
                  xH.startDay = x6.getDate();
                  xH.endYear = this.state.endYear;
                  xH.endMonth = this.state.endMonth;
                  xH.endDay = this.state.endDay;
                  if (xH.startYear !== this.state.startYear && xH.startYear !== xW) {
                    xH.startYear = x6.getFullYear();
                    var xy = this.state.onBeginDate.getMonth() + 0x1;
                    x7 = (x9 = new Date(xH.startYear, xy, 0x0)).getDate();
                    x8 = xy;
                    xH.startDay = x7;
                    xH.startMonth = x8;
                  } else if (xH.startMonth !== this.state.startMonth) {
                    xH.startMonth = x6.getMonth() + 0x1;
                    x9 = new Date(xH.startYear, xH.startMonth, 0x0);
                    x7 = xH.startMonth == xb ? xd.getDate() : x9.getDate();
                    xH.startDay = x7;
                  } else {
                    xH.startDay = x6.getDate();
                  }
                  break;
                case 0x1:
                  xH.startYear = this.state.startYear;
                  xH.startMonth = this.state.startMonth;
                  xH.startDay = this.state.startDay;
                  xH.endYear = x6.getFullYear();
                  xH.endMonth = x6.getMonth() + 0x1;
                  xH.endDay = x6.getDate();
                  if (xH.endYear !== this.state.endYear && xH.endYear !== xW) {
                    xH.endYear = x6.getFullYear();
                    xy = this.state.onBeginDate.getMonth() + 0x1;
                    xq = (xQ = new Date(xH.endYear, xy, 0x0)).getDate();
                    xN = xy;
                    xH.endDay = xq;
                    xH.endMonth = xN;
                  } else if (xH.endMonth !== this.state.endMonth) {
                    xH.endMonth = x6.getMonth() + 0x1;
                    xQ = new Date(xH.endYear, xH.endMonth, 0x0);
                    xq = xH.endMonth === xb ? xd.getDate() : xQ.getDate();
                    xH.endDay = xq;
                  } else {
                    xH.endDay = x6.getDate();
                  }
              }
              return xH;
            };
            x4.prototype.Z = function (x5, x6, x7) {
              var x8;
              var x9;
              var xq;
              var xN;
              var xQ;
              var xH;
              var xd;
              var xW;
              var xy = x7.getTime() - x6.getTime() + 0x1;
              var xG = Math.abs(xy / 0x5265c00);
              var xx = this.state.onLastDate;
              var xU = xx.getFullYear();
              var xR = xx.getMonth() + 0x1;
              var xO = this.state.onBeginDate;
              var xM = xO.getDate();
              var xP = xO.getMonth() + 0x1;
              var xJ = this.state.calendarRangeDate;
              if (xG >= xJ || x6.getTime() > x7.getTime()) {
                var xS = xx.getTime();
                switch (x5) {
                  case 0x0:
                    if (x6.getFullYear() !== this.state.startYear && x6.getFullYear() === xU) {
                      return void this.tt(xx, xx);
                    }
                    x8 = new Date(xS);
                    if ((xq = x6.getDate() + xJ - 0x1) <= (xN = new Date(x6.getFullYear(), x6.getMonth() + 0x1, 0x0).getDate())) {
                      x8.setDate(xq);
                    } else {
                      var xs = xq - xN;
                      var xf = x6.getMonth() + 0x1 + 0x1;
                      x8.setDate(xs);
                      if (xf > 0xc) {
                        x8.setMonth(0x0);
                      } else {
                        x8.setMonth(xf - 0x1);
                      }
                    }
                    if (x8.getDate() <= x6.getDate()) {
                      var xL = x6.getMonth() + 0x1 + 0x1;
                      var xz = x6.getFullYear();
                      if (xL >= xR) {
                        if (xz <= xU) {
                          if (xL > 0xc) {
                            if (x8.getTime() < xx.getTime()) {
                              x8.setMonth(0x0);
                              x8.setFullYear(xz + 0x1);
                            } else {
                              var xk = xx.getFullYear();
                              var xF = xx.getMonth() + 0x1;
                              var xp = xx.getDate();
                              x8.setFullYear(xk);
                              x8.setMonth(xF - 0x1);
                              if (x8.getDate() > xp) {
                                x8.setDate(xp);
                              }
                            }
                          } else {
                            x8.setFullYear(xz);
                            if (x8.getTime() > xx.getTime()) {
                              x8.setDate(xx.getDate());
                              x8.setMonth(xR - 0x1);
                            }
                            if (xL <= xR) {
                              x8.setMonth(xL - 0x1);
                            }
                          }
                        } else {
                          var xm = x6.getMonth() + 0x1;
                          x8.setMonth(xm - 0x1);
                          if (x8.getDate() > xx.getDate()) {
                            x8.setDate(xx.getDate());
                          }
                        }
                      } else {
                        x8.setFullYear(xz);
                        x8.setMonth(xL - 0x1);
                      }
                    } else {
                      xm = x6.getMonth() + 0x1;
                      x8.setFullYear(x6.getFullYear());
                      x8.setMonth(xm - 0x1);
                    }
                    if (x6.getMonth() !== x8.getMonth() && (xs = xq - xN) >= xJ) {
                      x8.setDate(xs);
                    }
                    if (x8.getTime() > xx.getTime()) {
                      x8.setDate(xx.getDate());
                    }
                    this.tt(x6, x8);
                    break;
                  case 0x1:
                    if (x7.getFullYear() !== this.state.endYear && x7.getFullYear() === xU) {
                      return void this.tt(xx, xx);
                    }
                    x9 = new Date(xS);
                    xQ = x7.getFullYear();
                    xH = x7.getMonth() + 0x1;
                    xd = x7.getDate() - xJ + 0x1;
                    xN = new Date(x7.getFullYear(), x7.getMonth(), 0x0).getDate();
                    if (xd >= 0x0) {
                      x9.setDate(xd);
                    } else {
                      var xX = xN + xd;
                      x9.setMonth(xH - 0x1);
                      x9.setDate(xX);
                      x9.setFullYear(x7.getFullYear());
                    }
                    xW = this.V(xO, xx);
                    if (x9.getDate() >= x7.getDate()) {
                      if ((xL = x7.getMonth() + 0x1 - 0x1) <= xW) {
                        if (xL >= xR) {
                          x9.setMonth(xL - 0x1);
                          if (xL < 0x0) {
                            x9.setMonth(0xb);
                            x9.setFullYear(xQ - 0x1);
                          } else {
                            x9.setMonth(xL - 0x1);
                            x9.setFullYear(xQ);
                            if (xL < xW) {
                              x9.setMonth(xW - 0x1);
                              if (x9.getMonth() + 0x1 === x7.getMonth() + 0x1) {
                                x9.setDate(xM);
                              }
                            }
                          }
                        } else {
                          if (xL > 0x0) {
                            x9.setMonth(xL - 0x1);
                          } else {
                            var xw = 0xc + xL;
                            x9.setMonth(xw - 0x1);
                            x9.setFullYear(xQ - 0x1);
                          }
                          if (x9.getMonth() + 0x1 < xW) {
                            var xD = x7.getMonth() + 0x1;
                            x9.setDate(xM);
                            x9.setMonth(xD - 0x1);
                            x9.setFullYear(xQ);
                          }
                          x9 = this.et(x9);
                        }
                      } else {
                        if (x9.getTime() >= xO.getTime()) {
                          x9.setMonth(xL - 0x1);
                        } else {
                          x9.setMonth(xP - 0x1);
                          x9.setDate(xM);
                        }
                        x9.setFullYear(xQ);
                      }
                    } else {
                      xH = x7.getMonth() + 0x1;
                      x9.setMonth(xH - 0x1);
                      x9.setFullYear(xQ);
                      x9 = this.et(x9);
                    }
                    this.tt(x9, x7);
                }
              } else {
                var xv = this.et(x6);
                this.tt(xv, x7);
              }
            };
            x4.prototype.$ = function () {
              var x5 = HG.CaseType.SLOT_GAME;
              if (undefined !== this.props.caseType) {
                x5 = this.props.caseType;
              }
              return x5;
            };
            x4.prototype.et = function (x5) {
              var x6 = x5;
              var x7 = this.state.onBeginDate;
              if (x6.getTime() < x7.getTime()) {
                x6 = x7;
              }
              return x6;
            };
            x4.prototype.F = function (x5) {
              var x6;
              var x7 = x5.getFullYear();
              var x8 = x5.getDate();
              if (undefined !== this.props.onBeginDate) {
                x6 = this.props.onBeginDate;
              } else {
                var x9 = x5.getMonth() + 0x1 - 0x3;
                x6 = x9 > 0x0 ? new Date(x7, x9 - 0x1, x8) : new Date(x7 - 0x1, 0xc + x9 - 0x1, x8);
              }
              return x6;
            };
            x4.prototype.I = function (x5) {
              return undefined !== this.props.onLastDate ? this.props.onLastDate : x5;
            };
            x4.prototype.P = function () {
              return undefined !== this.props.themeColor ? this.props.themeColor : "#FFFFFF";
            };
            x4.prototype.L = function () {
              return undefined !== this.props.calendarRangeDate ? this.props.calendarRangeDate : 0x7;
            };
            x4.prototype.V = function (x5, x6) {
              var x7 = x6.getFullYear();
              var x8 = x5.getFullYear();
              var x9 = x5.getMonth();
              return x7 === x8 ? x9 : 0x1;
            };
            x4.prototype.tt = function (x5, x6) {
              this.setState({
                'startYear': x5.getFullYear(),
                'startMonth': x5.getMonth() + 0x1,
                'startDay': x5.getDate(),
                'startDate': x5,
                'endYear': x6.getFullYear(),
                'endMonth': x6.getMonth() + 0x1,
                'endDay': x6.getDate(),
                'endDate': x6
              });
              HM.customSelectUtil.dynamicChangeAllOption({
                'startYear': x5.getFullYear(),
                'startMonth': x5.getMonth() + 0x1,
                'startDay': x5.getDate(),
                'endYear': x6.getFullYear(),
                'endMonth': x6.getMonth() + 0x1,
                'endDay': x6.getDate()
              });
            };
            x4.prototype.X = function (x5, x6) {
              var x7 = {
                currentCalendarCustomType: x6
              };
              this.setState(x7);
            };
            x4.prototype.G = function () {
              var x5 = this.state.startDate;
              var x6 = Hx.convertTimeToBeginningOrEndOfTheDay(this.state.endDate, true);
              this.props.onConfirmClicked(x5, x6);
            };
            return x4;
          }(Hm["default"].Component);
          Hy.CalendarCustomView = Ha;
          var HC = {};
          var HE = {};
          var HK = {
            value: true
          };
          Object.defineProperty(HE, "__esModule", HK);
          HE.CalendarPickDateViewH = undefined;
          var HB = __importDefault(G);
          var Hu = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.C = x6.C.bind(x6);
              x6.S = x6.S.bind(x6);
              HM.customSelectUtil.addOptionGlobalStyle({
                'backgroundColor': x6.props.backgroundColor,
                'borderColor': x6.props.themeColor,
                'textColor': x6.props.themeColor,
                'selectedBorderSize': 0x2,
                'fontSize': 0x12
              });
              x6.H = x6.H.bind(x6);
              x6.D = x6.D.bind(x6);
              x6.j = x6.j.bind(x6);
              x6.N = x6.N.bind(x6);
              return x6;
            }
            __extends(x4, x3);
            x4.prototype.render = function () {
              var x5 = this.props.onSelectedDate;
              return HB["default"].createElement("div", {
                'id': "date-container",
                'style': this.S()
              }, HB["default"].createElement("div", {
                'className': "select-container-year-" + this.props.extraName,
                'style': HG.styles.selectContainer
              }, HB["default"].createElement("select", {
                'value': x5.getFullYear().toString(),
                'style': this.C(),
                'onChange': function () {}
              }, this.D())), HB["default"].createElement("div", {
                'className': "select-container-month-" + this.props.extraName,
                'style': HG.styles.selectContainer
              }, HB["default"].createElement("select", {
                'value': '' + (x5.getMonth() + 0x1),
                'style': this.C(),
                'onChange': function () {}
              }, this.j())), HB["default"].createElement("div", {
                'className': "select-container-day-" + this.props.extraName,
                'style': HG.styles.selectContainer
              }, HB["default"].createElement("select", {
                'value': x5.getDate().toString(),
                'style': this.C(),
                'onChange': function () {}
              }, this.N())));
            };
            x4.prototype.componentDidMount = function () {
              this.T(true);
            };
            x4.prototype.componentDidUpdate = function (x5) {
              if (this.props.onSelectedDate !== x5.onSelectedDate) {
                this.O();
                this.T(false);
              }
            };
            x4.prototype.O = function () {
              HM.customSelectUtil.resetTargetOption("select-container-year-" + this.props.extraName);
              HM.customSelectUtil.resetTargetOption("select-container-month-" + this.props.extraName);
              HM.customSelectUtil.resetTargetOption("select-container-day-" + this.props.extraName);
            };
            x4.prototype.T = function (x5) {
              HM.customSelectUtil.convertOptionToDiv("select-container-year-" + this.props.extraName, this.H.bind(this, 0), x5);
              HM.customSelectUtil.convertOptionToDiv("select-container-month-" + this.props.extraName, this.H.bind(this, 0x1), x5);
              HM.customSelectUtil.convertOptionToDiv("select-container-day-" + this.props.extraName, this.H.bind(this, 0x2), x5);
            };
            x4.prototype.C = function () {
              var x5 = {
                color: "#FFFFFF",
                borderColor: "#FFFFFF",
                backgroundColor: "#30303b"
              };
              var x6 = __assign(__assign({}, HG.styles.selectScrollContainerHorizontal), x5);
              if (undefined !== this.props.themeColor) {
                x6.color = this.props.themeColor;
                x6.borderColor = this.props.themeColor;
              }
              if (undefined !== this.props.backgroundColor) {
                x6.backgroundColor = this.props.backgroundColor;
              }
              return x6;
            };
            x4.prototype.S = function () {
              var x5 = {
                color: "#FFFFFF"
              };
              var x6 = __assign(__assign({}, HG.styles.dateContainerHorizontal), x5);
              if (undefined !== this.props.backgroundColor) {
                x6.color = this.props.backgroundColor;
              }
              if (this.props.isRTL) {
                x6.direction = "rtl";
                var x7 = x6.left;
                x6.right = x7;
                delete x6.left;
              }
              return x6;
            };
            x4.prototype.D = function () {
              var x5 = [];
              var x6 = this.props.onLastDate.getFullYear();
              for (var x7 = this.props.onBeginDate.getFullYear(); x7 <= x6; x7++) {
                x5.push(HB["default"].createElement("option", {
                  'className': "date-item-year",
                  'key': "date-item-year" + x7,
                  'style': HG.styles.dateItemHorizontal,
                  'value': x7
                }, x7));
              }
              return x5;
            };
            x4.prototype.j = function () {
              var x5;
              var x6 = [];
              var x7 = this.props.onBeginDate.getFullYear();
              var x8 = this.props.onLastDate;
              var x9 = x8.getMonth() + 0x1;
              var xq = x8.getFullYear();
              var xN = this.props.onSelectedDate.getFullYear();
              var xQ = this.props.onBeginDate;
              x5 = x7 === xq || xN === x7 ? xQ.getMonth() + 0x1 : xN === xq ? 0x1 : xQ.getMonth() + 0x1;
              if (xN === xq) {
                for (var xH = x5; xH <= x9; xH++) {
                  if (xH > 0x0) {
                    x6.push(HB["default"].createElement("option", {
                      'className': "date-item-month",
                      'key': "date-item-month" + xH,
                      'style': HG.styles.dateItemHorizontal,
                      'value': xH
                    }, xH));
                  }
                }
              } else {
                for (xH = x5; xH <= 0xc; xH++) {
                  x6.push(HB["default"].createElement("option", {
                    'className': "date-item-month",
                    'key': "date-item-month" + xH,
                    'style': HG.styles.dateItemHorizontal,
                    'value': xH
                  }, xH));
                }
              }
              return x6;
            };
            x4.prototype.N = function () {
              var x5;
              var x6 = [];
              var x7 = this.props.onLastDate;
              var x8 = x7.getMonth() + 0x1;
              var x9 = this.props.onSelectedDate;
              var xq = x9.getMonth() + 0x1;
              var xN = new Date(x9.getFullYear(), xq, 0x0);
              var xQ = x9.getMonth() + 0x1 === x8;
              var xH = this.props.onBeginDate;
              var xd = xH.getMonth() + 0x1;
              var xW = xH.getDate();
              x5 = xQ ? x7.getDate() : xN.getDate();
              var xb = 0x1;
              if (xq === xd) {
                xb = xW;
              }
              for (var xy = xb; xy <= x5; xy++) {
                x6.push(HB["default"].createElement("option", {
                  'className': "date-item",
                  'key': "date-item-day" + xy,
                  'style': HG.styles.dateItemHorizontal,
                  'value': xy
                }, xy));
              }
              return x6;
            };
            x4.prototype.H = function (x5, x6) {
              var x7 = Object.create(null);
              var x8 = this.props.onSelectedDate;
              x7.year = x8.getFullYear();
              x7.month = x8.getMonth() + 0x1;
              x7.day = x8.getDate();
              var x9;
              var xq = this.props.onLastDate;
              switch (x5) {
                case 0x0:
                  x7.year = x6;
                  break;
                case 0x1:
                  x7.month = x6;
                  var xN = new Date(x7.year, x7.month, 0x0);
                  if (x7.day > xN.getDate()) {
                    x7.day = xN.getDate();
                  }
                  break;
                case 0x2:
                  x7.day = x6;
              }
              x9 = new Date(x7.year, x7.month - 0x1, x7.day) > xq ? xq : new Date(x7.year, x7.month - 0x1, x7.day);
              this.props.onHandleChange(x9);
              this.O();
              this.T(false);
            };
            return x4;
          }(HB["default"].Component);
          var HT = {
            value: true
          };
          HE.CalendarPickDateViewH = Hu;
          Object.defineProperty(HC, "__esModule", HT);
          HC.CalendarCustomViewH = undefined;
          var Hg = __importDefault(G);
          var HZ = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = new Date();
              var x8 = x6.F(x7);
              var x9 = x6.I(x7);
              var xq = x6.L();
              var xN = x6.P();
              var xQ = x9.getFullYear();
              var xH = x9.getMonth() + 0x1;
              var xd = x9.getDate();
              x6.state = {
                'themeColor': xN,
                'onBeginDate': x8,
                'onLastDate': x9,
                'calendarRangeDate': xq,
                'startYear': xQ,
                'startMonth': xH,
                'startDay': xd,
                'endYear': xQ,
                'endMonth': xH,
                'endDay': xd,
                'startDate': Hx.convertTimeToBeginningOrEndOfTheDay(x9),
                'endDate': Hx.convertTimeToBeginningOrEndOfTheDay(x9, true),
                'currentCalendarCustomType': 0x2
              };
              x6.M = x6.M.bind(x6);
              x6.R = x6.R.bind(x6);
              x6.B = x6.B.bind(x6);
              x6.A = x6.A.bind(x6);
              x6.W = x6.W.bind(x6);
              x6.Y = x6.Y.bind(x6);
              x6.F = x6.F.bind(x6);
              x6.I = x6.I.bind(x6);
              x6.V = x6.V.bind(x6);
              x6.G = x6.G.bind(x6);
              x6.U = x6.U.bind(x6);
              x6.q = x6.q.bind(x6);
              x6.X = x6.X.bind(x6);
              x6.K = x6.K.bind(x6);
              x6.Z = x6.Z.bind(x6);
              return x6;
            }
            __extends(x4, x3);
            x4.prototype.render = function () {
              var x5 = this.props.localePrefix || HG.LocalePrefix.DEFAULT;
              var x6 = {
                'id': "date-page-container",
                style: HG.styles.datePageContainer
              };
              var x7 = {
                'id': "date-picker-container",
                style: HG.styles.datePickerContainer
              };
              var x8 = {
                style: HG.styles.dateRowContainer
              };
              var x9 = {
                style: HG.styles.dateRowContainer
              };
              var xq = {
                style: HG.styles.dateRowContainer
              };
              var xN = {
                style: HG.styles.dateRowContainer
              };
              return Hg["default"].createElement("div", {
                'id': "custom-page-container",
                'style': this.B()
              }, Hg["default"].createElement("div", x6, Hg["default"].createElement("div", x7, Hg["default"].createElement("div", x8, Hg["default"].createElement("div", {
                'style': this.W()
              }, Hg["default"].createElement("div", null, shell.I18n.t(x5 + ".Start")))), Hg["default"].createElement("div", x9, Hg["default"].createElement(HE.CalendarPickDateViewH, {
                'isRTL': this.props.isRTL,
                'themeColor': this.M(),
                'backgroundColor': this.R(),
                'onBeginDate': this.state.onBeginDate,
                'onLastDate': this.state.onLastDate,
                'onSelectedDate': new Date(this.state.startYear, this.state.startMonth - 0x1, this.state.startDay),
                'onHandleChange': this.U,
                'extraName': "start"
              })), Hg["default"].createElement("div", xq, Hg["default"].createElement("div", {
                'style': this.W()
              }, Hg["default"].createElement("div", null, shell.I18n.t(x5 + ".End")))), Hg["default"].createElement("div", xN, Hg["default"].createElement(HE.CalendarPickDateViewH, {
                'isRTL': this.props.isRTL,
                'themeColor': this.M(),
                'backgroundColor': this.R(),
                'onBeginDate': this.state.onBeginDate,
                'onLastDate': this.state.onLastDate,
                'onSelectedDate': new Date(this.state.endYear, this.state.endMonth - 0x1, this.state.endDay),
                'onHandleChange': this.q,
                'extraName': "end"
              })))), Hg["default"].createElement("div", {
                'id': "comfirm-button-container",
                'style': this.J()
              }, Hg["default"].createElement("div", {
                'id': "confirm-button-label",
                'onClick': this.G,
                'style': this.A()
              }, Hg["default"].createElement("div", null, shell.I18n.t(x5 + ".Confirm")))));
            };
            x4.prototype.M = function () {
              this.$();
              HG.CaseType.CARD_GAME;
              return this.state.themeColor;
            };
            x4.prototype.J = function () {
              var x5;
              x5 = this.$() === HG.CaseType.CARD_GAME ? __assign({}, HG.styles.confirmButtonCardContainer) : __assign({}, HG.styles.comfirmButtonContainerHorizontal);
              if (this.props.isRTL) {
                var x6 = x5.paddingLeft;
                x5.paddingRight = x6;
                var x7 = x5.paddingRight;
                x5.paddingLeft = x7;
              }
              return x5;
            };
            x4.prototype.B = function () {
              var x5 = __assign({}, HG.styles.customPageContainer);
              if (this.props.isRTL) {
                x5.direction = "rtl";
              }
              return x5;
            };
            x4.prototype.R = function () {
              var x5;
              x5 = this.$() === HG.CaseType.CARD_GAME ? "#262121" : "#30303b";
              if (undefined !== this.props.backgroundColor) {
                x5 = this.props.backgroundColor;
              }
              return x5;
            };
            x4.prototype.A = function () {
              var x5 = {
                color: this.props.themeColor,
                borderColor: this.props.themeColor,
                borderStyle: "solid",
                backgroundColor: this.props.backgroundColor
              };
              var x6 = __assign(__assign({}, HG.styles.confirmButtonLabelHorizontal), x5);
              if (this.$() === HG.CaseType.CARD_GAME) {
                x6.color = "rgba(0,0,0)";
              } else {
                if (undefined !== this.props.themeColor) {
                  x6.color = this.props.themeColor;
                  x6.borderColor = this.props.themeColor;
                }
                x6.borderStyle = "solid";
              }
              if (undefined !== this.props.confirmBackgroundColor) {
                x6.backgroundColor = this.props.confirmBackgroundColor;
              }
              return x6;
            };
            x4.prototype.W = function () {
              var x5 = {
                opacity: 0x1,
                color: "#FFFFFF"
              };
              var x6 = __assign(__assign({}, HG.styles.calendarCustomDescriptionLabelHorizontal), x5);
              if (this.$() === HG.CaseType.CARD_GAME) {
                if (undefined !== this.props.themeColor) {
                  x6.color = this.props.themeColor;
                }
                x6.opacity = 0.6;
              } else if (undefined !== this.props.themeColor) {
                x6.color = this.props.themeColor;
              }
              if (this.props.isRTL) {
                x6.right = x6.left;
                delete x6.left;
              }
              return x6;
            };
            x4.prototype.Y = function () {
              var x5 = {
                opacity: 0x1,
                backgroundColor: "#292934"
              };
              var x6 = __assign(__assign({}, HG.styles.dotIcon), x5);
              if (this.$() === HG.CaseType.CARD_GAME) {
                if (undefined !== this.props.themeColor) {
                  var x7 = this.props.themeColor;
                  x6.backgroundColor = x7;
                }
                x6.opacity = 0.6;
              } else if (undefined !== this.props.themeColor) {
                x7 = this.props.themeColor;
                x6.backgroundColor = x7;
              }
              return x6;
            };
            x4.prototype.U = function (x5) {
              var x6 = this.K(0, x5);
              var x7 = new Date(x6.startYear, x6.startMonth - 0x1, x6.startDay);
              var x8 = new Date(x6.endYear, x6.endMonth - 0x1, x6.endDay);
              this.Z(0o0, x7, x8);
            };
            x4.prototype.q = function (x5) {
              var x6 = this.K(0x1, x5);
              var x7 = new Date(x6.startYear, x6.startMonth - 0x1, x6.startDay);
              var x8 = new Date(x6.endYear, x6.endMonth - 0x1, x6.endDay);
              this.Z(0o1, x7, x8);
            };
            x4.prototype.K = function (x5, x6) {
              var x7;
              var x8;
              var x9;
              var xq;
              var xN;
              var xQ;
              var xH = Object.create(null);
              var xd = this.state.onLastDate;
              var xW = xd.getFullYear();
              var xb = xd.getMonth() + 0x1;
              switch (x5) {
                case 0x0:
                  xH.startYear = x6.getFullYear();
                  xH.startMonth = x6.getMonth() + 0x1;
                  xH.startDay = x6.getDate();
                  xH.endYear = this.state.endYear;
                  xH.endMonth = this.state.endMonth;
                  xH.endDay = this.state.endDay;
                  if (xH.startYear !== this.state.startYear && xH.startYear !== xW) {
                    xH.startYear = x6.getFullYear();
                    var xy = this.state.onBeginDate.getMonth() + 0x1;
                    x7 = (x9 = new Date(xH.startYear, xy, 0x0)).getDate();
                    x8 = xy;
                    xH.startDay = x7;
                    xH.startMonth = x8;
                  } else if (xH.startMonth !== this.state.startMonth) {
                    xH.startMonth = x6.getMonth() + 0x1;
                    x9 = new Date(xH.startYear, xH.startMonth, 0x0);
                    x7 = xH.startMonth == xb ? xd.getDate() : x9.getDate();
                    xH.startDay = x7;
                  } else {
                    xH.startDay = x6.getDate();
                  }
                  break;
                case 0x1:
                  xH.startYear = this.state.startYear;
                  xH.startMonth = this.state.startMonth;
                  xH.startDay = this.state.startDay;
                  xH.endYear = x6.getFullYear();
                  xH.endMonth = x6.getMonth() + 0x1;
                  xH.endDay = x6.getDate();
                  if (xH.endYear !== this.state.endYear && xH.endYear !== xW) {
                    xH.endYear = x6.getFullYear();
                    xy = this.state.onBeginDate.getMonth() + 0x1;
                    xq = (xQ = new Date(xH.endYear, xy, 0x0)).getDate();
                    xN = xy;
                    xH.endDay = xq;
                    xH.endMonth = xN;
                  } else if (xH.endMonth !== this.state.endMonth) {
                    xH.endMonth = x6.getMonth() + 0x1;
                    xQ = new Date(xH.endYear, xH.endMonth, 0x0);
                    xq = xH.endMonth === xb ? xd.getDate() : xQ.getDate();
                    xH.endDay = xq;
                  } else {
                    xH.endDay = x6.getDate();
                  }
              }
              return xH;
            };
            x4.prototype.Z = function (x5, x6, x7) {
              var x8;
              var x9;
              var xq;
              var xN;
              var xQ;
              var xH;
              var xd;
              var xW;
              var xy = x7.getTime() - x6.getTime() + 0x1;
              var xG = Math.abs(xy / 0x5265c00);
              var xx = this.state.onLastDate;
              var xU = xx.getFullYear();
              var xR = xx.getMonth() + 0x1;
              var xO = this.state.onBeginDate;
              var xM = xO.getDate();
              var xP = xO.getMonth() + 0x1;
              var xJ = this.state.calendarRangeDate;
              if (xG >= xJ || x6.getTime() > x7.getTime()) {
                var xS = xx.getTime();
                switch (x5) {
                  case 0x0:
                    if (x6.getFullYear() !== this.state.startYear && x6.getFullYear() === xU) {
                      return void this.tt(xx, xx);
                    }
                    x8 = new Date(xS);
                    if ((xq = x6.getDate() + xJ - 0x1) <= (xN = new Date(x6.getFullYear(), x6.getMonth() + 0x1, 0x0).getDate())) {
                      x8.setDate(xq);
                    } else {
                      var xs = xq - xN;
                      var xf = x6.getMonth() + 0x1 + 0x1;
                      x8.setDate(xs);
                      if (xf > 0xc) {
                        x8.setMonth(0);
                      } else {
                        x8.setMonth(xf - 0x1);
                      }
                    }
                    if (x8.getDate() <= x6.getDate()) {
                      var xL = x6.getMonth() + 0x1 + 0x1;
                      var xz = x6.getFullYear();
                      if (xL >= xR) {
                        if (xz <= xU) {
                          if (xL > 0xc) {
                            if (x8.getTime() < xx.getTime()) {
                              x8.setMonth(0);
                              x8.setFullYear(xz + 0x1);
                            } else {
                              var xk = xx.getFullYear();
                              var xF = xx.getMonth() + 0x1;
                              var xp = xx.getDate();
                              x8.setFullYear(xk);
                              x8.setMonth(xF - 0x1);
                              if (x8.getDate() > xp) {
                                x8.setDate(xp);
                              }
                            }
                          } else {
                            x8.setFullYear(xz);
                            if (x8.getTime() > xx.getTime()) {
                              x8.setDate(xx.getDate());
                              x8.setMonth(xR - 0x1);
                            }
                            if (xL <= xR) {
                              x8.setMonth(xL - 0x1);
                            }
                          }
                        } else {
                          var xm = x6.getMonth() + 0x1;
                          x8.setMonth(xm - 0x1);
                          if (x8.getDate() > xx.getDate()) {
                            x8.setDate(xx.getDate());
                          }
                        }
                      } else {
                        x8.setFullYear(xz);
                        x8.setMonth(xL - 0x1);
                      }
                    } else {
                      xm = x6.getMonth() + 0x1;
                      x8.setFullYear(x6.getFullYear());
                      x8.setMonth(xm - 0x1);
                    }
                    if (x6.getMonth() !== x8.getMonth() && (xs = xq - xN) >= xJ) {
                      x8.setDate(xs);
                    }
                    if (x8.getTime() > xx.getTime()) {
                      x8.setDate(xx.getDate());
                    }
                    this.tt(x6, x8);
                    break;
                  case 0x1:
                    if (x7.getFullYear() !== this.state.endYear && x7.getFullYear() === xU) {
                      return void this.tt(xx, xx);
                    }
                    x9 = new Date(xS);
                    xQ = x7.getFullYear();
                    xH = x7.getMonth() + 0x1;
                    xd = x7.getDate() - xJ + 0x1;
                    xN = new Date(x7.getFullYear(), x7.getMonth(), 0x0).getDate();
                    if (xd >= 0x0) {
                      x9.setDate(xd);
                    } else {
                      var xX = xN + xd;
                      x9.setMonth(xH - 0x1);
                      x9.setDate(xX);
                      x9.setFullYear(x7.getFullYear());
                    }
                    xW = this.V(xO, xx);
                    if (x9.getDate() >= x7.getDate()) {
                      if ((xL = x7.getMonth() + 0x1 - 0x1) <= xW) {
                        if (xL >= xR) {
                          x9.setMonth(xL - 0x1);
                          if (xL < 0x0) {
                            x9.setMonth(0xb);
                            x9.setFullYear(xQ - 0x1);
                          } else {
                            x9.setMonth(xL - 0x1);
                            x9.setFullYear(xQ);
                            if (xL < xW) {
                              x9.setMonth(xW - 0x1);
                              if (x9.getMonth() + 0x1 === x7.getMonth() + 0x1) {
                                x9.setDate(xM);
                              }
                            }
                          }
                        } else {
                          if (xL > 0x0) {
                            x9.setMonth(xL - 0x1);
                          } else {
                            var xw = 0xc + xL;
                            x9.setMonth(xw - 0x1);
                            x9.setFullYear(xQ - 0x1);
                          }
                          if (x9.getMonth() + 0x1 < xW) {
                            var xD = x7.getMonth() + 0x1;
                            x9.setDate(xM);
                            x9.setMonth(xD - 0x1);
                            x9.setFullYear(xQ);
                          }
                          x9 = this.et(x9);
                        }
                      } else {
                        if (x9.getTime() >= xO.getTime()) {
                          x9.setMonth(xL - 0x1);
                        } else {
                          x9.setMonth(xP - 0x1);
                          x9.setDate(xM);
                        }
                        x9.setFullYear(xQ);
                      }
                    } else {
                      xH = x7.getMonth() + 0x1;
                      x9.setMonth(xH - 0x1);
                      x9.setFullYear(xQ);
                      x9 = this.et(x9);
                    }
                    this.tt(x9, x7);
                }
              } else {
                var xv = this.et(x6);
                this.tt(xv, x7);
              }
            };
            x4.prototype.$ = function () {
              var x5 = HG.CaseType.SLOT_GAME;
              if (undefined !== this.props.caseType) {
                x5 = this.props.caseType;
              }
              return x5;
            };
            x4.prototype.et = function (x5) {
              var x6 = x5;
              var x7 = this.state.onBeginDate;
              if (x6.getTime() < x7.getTime()) {
                x6 = x7;
              }
              return x6;
            };
            x4.prototype.F = function (x5) {
              var x6;
              var x7 = x5.getFullYear();
              var x8 = x5.getDate();
              if (undefined !== this.props.onBeginDate) {
                x6 = this.props.onBeginDate;
              } else {
                var x9 = x5.getMonth() + 0x1 - 0x3;
                x6 = x9 > 0x0 ? new Date(x7, x9 - 0x1, x8) : new Date(x7 - 0x1, 0xc + x9 - 0x1, x8);
              }
              return x6;
            };
            x4.prototype.I = function (x5) {
              return undefined !== this.props.onLastDate ? this.props.onLastDate : x5;
            };
            x4.prototype.P = function () {
              return undefined !== this.props.themeColor ? this.props.themeColor : "#FFFFFF";
            };
            x4.prototype.L = function () {
              return undefined !== this.props.calendarRangeDate ? this.props.calendarRangeDate : 0x7;
            };
            x4.prototype.V = function (x5, x6) {
              var x7 = x6.getFullYear();
              var x8 = x5.getFullYear();
              var x9 = x5.getMonth();
              return x7 === x8 ? x9 : 0x1;
            };
            x4.prototype.tt = function (x5, x6) {
              this.setState({
                'startYear': x5.getFullYear(),
                'startMonth': x5.getMonth() + 0x1,
                'startDay': x5.getDate(),
                'startDate': x5,
                'endYear': x6.getFullYear(),
                'endMonth': x6.getMonth() + 0x1,
                'endDay': x6.getDate(),
                'endDate': x6
              });
              HM.customSelectUtil.dynamicChangeAllOption({
                'startYear': x5.getFullYear(),
                'startMonth': x5.getMonth() + 0x1,
                'startDay': x5.getDate(),
                'endYear': x6.getFullYear(),
                'endMonth': x6.getMonth() + 0x1,
                'endDay': x6.getDate()
              });
            };
            x4.prototype.X = function (x5, x6) {
              var x7 = {
                currentCalendarCustomType: x6
              };
              this.setState(x7);
            };
            x4.prototype.G = function () {
              var x5 = this.state.startDate;
              var x6 = Hx.convertTimeToBeginningOrEndOfTheDay(this.state.endDate, true);
              this.props.onConfirmClicked(x5, x6);
            };
            return x4;
          }(Hg["default"].Component);
          HC.CalendarCustomViewH = HZ;
          (function (x3) {
            var x4 = {
              value: true
            };
            Object.defineProperty(x3, "__esModule", x4);
            Object.defineProperty(x3, "CalendarCustomView", {
              'enumerable': true,
              'get': function () {
                return Hy.CalendarCustomView;
              }
            });
            var x7 = {
              enumerable: true,
              get: function () {
                return HC.CalendarCustomViewH;
              }
            };
            Object.defineProperty(x3, "CalendarCustomViewH", x7);
            var x9 = {
              enumerable: true,
              get: function () {
                return HO.CalendarPickDateView;
              }
            };
            Object.defineProperty(x3, "CalendarPickDateView", x9);
            var xN = {
              enumerable: true,
              get: function () {
                return HE.CalendarPickDateViewH;
              }
            };
            Object.defineProperty(x3, "CalendarPickDateViewH", xN);
            var xH = {
              enumerable: true,
              get: function () {
                return Hx.getCustomDateObject;
              }
            };
            var xd = {
              enumerable: true,
              get: function () {
                return Hx.convertTimeToBeginningOrEndOfTheDay;
              }
            };
            Object.defineProperty(x3, "getCustomDateObject", xH);
            Object.defineProperty(x3, "convertTimeToBeginningOrEndOfTheDay", xd);
            var xb = {
              enumerable: true,
              get: function () {
                return HG.CaseType;
              }
            };
            var xy = {
              enumerable: true,
              get: function () {
                return HG.LocalePrefix;
              }
            };
            Object.defineProperty(x3, "CaseType", xb);
            Object.defineProperty(x3, "LocalePrefix", xy);
          })(Hb);
          var Hc = {
            theme_color: "rgba(245, 172, 88, 1)",
            loading_color: "rgba(245, 172, 88, 1)",
            loading_close_button_icon_color: "rgba(255, 255, 255, 0.6)",
            navigator_bar_bg: "#24242e",
            navigator_separator_bg: "#30303c",
            navigator_title_font_color: "#f5ac58",
            navigator_back_button_icon_color: "#f5ac58",
            navigator_close_button_icon_color: "rgba(255, 255, 255, 0.6)",
            list_bg: "#30303b",
            list_header_font_color: "rgba(255, 255, 255, 0.4)",
            list_header_bg: "#24242e",
            list_item_bg_odd: "#34343f",
            list_item_bg_even: "#30303c",
            list_item_bg_selected: "#44444e",
            list_item_bg_pressed: "#3c3c46",
            list_item_bg_hover: "#282834",
            list_item_font_color: "rgba(255, 255, 255, 0.6)",
            list_item_win_font_color: "#ffffff",
            list_item_loss_font_color: "rgba(255, 255, 255, 0.6)",
            list_item_selected_font_color: "#ffffff",
            list_item_arrow_color: "rgba(255, 255, 255, 0.4)",
            summary_bg: "#292934",
            summary_date_font_color: "#f5ac58",
            detail_bg: "#30303b",
            detail_header_bg: "#24242e",
            detail_header_key_font_color: "#f5ac58",
            detail_header_value_font_color: "rgba(255, 255, 255, 0.6)",
            main_title_font_color: "#f5ac58",
            highlight_font_color: "#ffffff",
            primary_font_color: "rgba(255, 255, 255, 0.6)",
            secondary_font_color: "rgba(255, 255, 255, 0.4)",
            error_message_font_color: "#64646c",
            error_retry_font_color: "#f5ac58",
            error_close_font_color: "rgba(255, 255, 255, 0.6)",
            error_retry_button: "#31313a",
            error_retry_button_outline: "#24242e",
            calendar_bg: "#30303b",
            calendar_color: "#f5ac58",
            calendar_title_color: "#f5ac58",
            free_spin_list_item_font_color: "#ffffff",
            free_spin_list_selected_font_color: "#f5ac58",
            free_spin_list_close_button_color: "rgba(255, 255, 255, 0.6)",
            free_spin_list_arrow_color: "#f5ac58",
            pages_button_arrow_color: "#f5ac58",
            pages_button_background_color: "rgba(0, 0, 0, 0.4)",
            alert_background_color: "rgba(47, 47, 59, 0.95)",
            alert_border_color: "rgba(0, 0, 0, 0.4)",
            summary_border: "#30303c",
            calendar_separator_bg: "#282834",
            list_header_font_color_horizontal: "rgba(251, 177, 66, 0.6)",
            list_header_bg_horizontal: "#24242e",
            navigator_bar_bg_horizontal: "#292934",
            navigator_separator_bg_horizontal: "rgba(216, 216, 216, 0.1)",
            navigator_panel_bg_horizontal: "#30303c",
            scroll_to_top_button_horizontal: "#30303c",
            scroll_to_top_button_border_horizontal: "#282831"
          };
          var Hj = {
            theme_color: "rgba(227, 194, 115, 1)",
            loading_color: "rgba(227, 194, 115, 1)",
            loading_close_button_icon_color: "#e3c273",
            navigator_bar_bg: '',
            navigator_separator_bg: "#251814",
            navigator_title_font_color: "#e3c273",
            navigator_back_button_icon_color: "#e3c273",
            navigator_close_button_icon_color: "#e3c273",
            list_bg: "#0e0c0c",
            list_header_bg: "#0e0c0c",
            list_header_font_color: "#97855F",
            list_item_bg_odd: "#0e0c0c linear-gradient(0deg, #0f0d0d 80%, #191616)",
            list_item_bg_even: "#0e0c0c linear-gradient(0deg, #0f0d0d 80%, #191616)",
            list_item_bg_selected: "#0f0d0d",
            list_item_bg_pressed: "#272525",
            list_item_bg_hover: "#575656",
            list_item_font_color: "#A7A6A6",
            list_item_win_font_color: "#ffffff",
            list_item_loss_font_color: "#A7A6A6",
            list_item_selected_font_color: "#ffffff",
            list_item_arrow_color: "rgba(255, 255, 255, 0.4)",
            summary_bg: "#262121",
            summary_border: "#30303c",
            summary_date_font_color: "#e3c273",
            detail_bg: "#0e0c0c",
            detail_header_bg: "#262121",
            detail_header_key_font_color: "rgba(167, 166, 166, 0.5)",
            detail_header_value_font_color: "#A7A6A6",
            main_title_font_color: "#e3c273",
            highlight_font_color: "#ffffff",
            primary_font_color: "#A7A6A6",
            secondary_font_color: "#97855F",
            error_message_font_color: "#978557",
            error_retry_font_color: "rgb(67, 52, 40)",
            error_close_font_color: "rgb(67, 52, 40)",
            error_retry_button: '',
            error_retry_button_outline: '',
            calendar_bg: "#262121",
            calendar_color: "#e3c273",
            calendar_separator_bg: "#282834",
            calendar_title_color: "#e3c273",
            free_spin_list_item_font_color: "#ffffff",
            free_spin_list_selected_font_color: "#e3c273",
            free_spin_list_close_button_color: "#ffffff",
            free_spin_list_arrow_color: "#e3c273",
            pages_button_arrow_color: "#e3c273",
            pages_button_background_color: "rgba(0, 0, 0, 0.4)",
            alert_background_color: "rgba(38, 33, 33, 0.95)",
            alert_border_color: "rgba(0, 0, 0, 0.4)"
          };
          function o3(x3, x4) {
            var x5;
            if (undefined === x4) {
              x4 = false;
            }
            if ("land" !== shell.environment.getOrientationMode() || x3.includes("theme_color")) {
              x5 = shell.uiAppearance.v(x3);
            } else {
              var x6 = "land" === shell.environment.getOrientationMode() ? x3 + "_horizontal" : x3;
              x5 = shell.uiAppearance.v(x6) || x5;
            }
            if (x5) {
              x5 = x4 ? x5 : x5.toCSS("rgba");
            }
            return x5;
          }
          var o4 = function () {
            function x3() {
              this.it = o3("history.theme_color") || o3("game.theme_color");
              this.nt = o3("history.loading_color", true) || o3("history.theme_color", true);
              this.rt = o3("history.loading_close_button_icon_color");
              this.ot = o3("history.navigator_bar_bg");
              this.lt = o3("history.navigator_separator_bg");
              this.ct = o3("history.navigator_title_font_color");
              this.ht = o3("history.navigator_back_button_icon_color");
              this.ut = o3("history.navigator_close_button_icon_color");
              this.ft = o3("history.list_bg");
              this.gt = o3("history.list_header_bg");
              this.vt = o3("history.list_header_font_color");
              this.yt = o3("history.list_item_bg_odd");
              this.xt = o3("history.list_item_bg_even");
              this._t = o3("history.list_item_bg_hover");
              this.wt = o3("history.list_item_bg_pressed");
              this.kt = o3("history.list_item_bg_selected");
              this.kt = o3("history.list_item_bg_selected");
              this.Ct = o3("history.list_item_font_color");
              this.St = o3("history.list_item_win_font_color");
              this.Ht = o3("history.list_item_loss_font_color");
              this.zt = o3("history.list_item_selected_font_color");
              this.Dt = o3("history.list_item_arrow_color");
              this.jt = o3("history.summary_bg");
              this.Nt = o3("history.summary_date_font_color");
              this.Tt = o3("history.detail_bg");
              this.Ot = o3("history.detail_header_bg");
              this.Ft = o3("history.detail_header_key_font_color");
              this.It = o3("history.detail_header_value_font_color");
              this.Lt = o3("history.main_title_font_color");
              this.Pt = o3("history.highlight_font_color");
              this.Mt = o3("history.primary_font_color");
              this.Rt = o3("history.secondary_font_color");
              this.Bt = o3("history.error_message_font_color");
              this.At = o3("history.error_retry_font_color");
              this.Et = o3("history.error_close_font_color");
              this.Wt = o3("history.error_retry_button");
              this.Yt = o3("history.error_retry_button_outline");
              this.Vt = o3("history.calendar_bg");
              this.Gt = o3("history.calendar_title_color");
              this.Ut = o3("history.free_spin_list_item_font_color");
              this.qt = o3("history.free_spin_list_selected_font_color");
              this.Xt = o3("history.free_spin_list_close_button_color");
              this.Kt = o3("history.free_spin_list_arrow_color");
              this.Zt = o3("history.pages_button_arrow_color");
              this.Jt = o3("history.pages_button_background_color");
              this.Qt = o3("history.alert_background_color", true);
              this.$t = o3("history.alert_border_color");
              if ("land" === shell.environment.getOrientationMode()) {
                this.te = o3("history.navigator_panel_bg");
                this.ee = o3("history.scroll_to_top_button");
                this.ie = o3("history.scroll_to_top_button_border");
                this.ne = o3("history.calendar_color");
              }
              if ("port" === shell.environment.getOrientationMode()) {
                this.re = o3("history.summary_border");
                this.oe = o3("history.calendar_separator_bg");
              }
            }
            x3.prototype.setDefaultStyle = function (x4) {
              this.ae = x4 === Qj.CARD ? Hj : Hc;
            };
            x3.prototype.se = function (x4) {
              var x5 = "land" === shell.environment.getOrientationMode() ? x4 + "_horizontal" : x4;
              return Object.prototype.hasOwnProperty.call(this.ae, x5) ? this.ae[x5] : this.ae[x4];
            };
            Object.defineProperty(x3.prototype, "themeColor", {
              'get': function () {
                return this.it || this.se("theme_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "loadingColor", {
              'get': function () {
                return this.nt || this.themeColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "loadingCloseButtonIconColor", {
              'get': function () {
                return this.rt || this.navCloseButtonIconColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "navBarColor", {
              'get': function () {
                return this.ae === Hc && this.ot || this.se("navigator_bar_bg");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "navBarSeparatorColor", {
              'get': function () {
                return this.lt || this.se("navigator_separator_bg");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "navBarPanelColor", {
              'get': function () {
                return this.te || this.se("navigator_panel_bg");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "navBarFontTitleColor", {
              'get': function () {
                return this.ct || this.titleFontColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "navBackButtonIconColor", {
              'get': function () {
                return this.ht || this.themeColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "navCloseButtonIconColor", {
              'get': function () {
                return this.ut || this.se("navigator_close_button_icon_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listBackgroundColor", {
              'get': function () {
                return this.ft || this.se("list_bg");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listHeaderColor", {
              'get': function () {
                return this.gt || this.se("list_header_bg");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listHeaderFontColor", {
              'get': function () {
                return this.vt || this.se("list_header_font_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listItemOddColor", {
              'get': function () {
                return this.ae === Hj ? this.se("list_item_bg_odd") : this.yt || this.se("list_item_bg_odd");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listItemEvenColor", {
              'get': function () {
                return this.ae === Hj ? this.se("list_item_bg_even") : this.xt || this.se("list_item_bg_even");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listItemHoverColor", {
              'get': function () {
                return this._t || this.se("list_item_bg_hover");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listItemSelectedColor", {
              'get': function () {
                return this.kt || this.se("list_item_bg_selected");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listItemPressedColor", {
              'get': function () {
                return this.wt || this.se("list_item_bg_pressed");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listItemFontColor", {
              'get': function () {
                return this.Ct || this.primaryFontColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listItemWinFontColor", {
              'get': function () {
                return this.St || this.highlightFontColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listItemLossFontColor", {
              'get': function () {
                return this.Ht || this.listItemFontColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listItemSelectedFontColor", {
              'get': function () {
                return this.zt || this.highlightFontColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "listItemArrowColor", {
              'get': function () {
                return this.Dt || this.se("list_item_arrow_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "footerBarColor", {
              'get': function () {
                return this.jt || this.se("summary_bg");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "footerSeparatorColor", {
              'get': function () {
                return this.re || this.se("summary_border");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "footerDateFontColor", {
              'get': function () {
                return this.Nt || this.themeColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "detailBackgroundColor", {
              'get': function () {
                return this.Tt || this.se("detail_bg");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "transactionDetailsHeaderColor", {
              'get': function () {
                return this.Ot || this.se("detail_header_bg");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "transactionDetailsHeaderKeyFontColor", {
              'get': function () {
                return this.Ft || this.se("detail_header_key_font_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "transactionDetailsHeaderValueFontColor", {
              'get': function () {
                return this.It || this.se("detail_header_value_font_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "scrollToTopButtonColor", {
              'get': function () {
                return this.ee || this.se("scroll_to_top_button");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "scrollToTopButtonBorderColor", {
              'get': function () {
                return this.ie || this.se("scroll_to_top_button_border");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "titleFontColor", {
              'get': function () {
                return this.Lt || this.se("main_title_font_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "highlightFontColor", {
              'get': function () {
                return this.Pt || this.se("highlight_font_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "primaryFontColor", {
              'get': function () {
                return this.Mt || this.se("primary_font_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "secondaryFontColor", {
              'get': function () {
                return this.Rt || this.se("secondary_font_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "errorMessageFontColor", {
              'get': function () {
                return this.Bt || this.se("error_message_font_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "errorRetryFontColor", {
              'get': function () {
                return this.At || this.se("error_retry_font_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "errorCloseFontColor", {
              'get': function () {
                return this.Et || this.se("error_close_font_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "errorRetryButtonColor", {
              'get': function () {
                return this.ae === Hj ? this.se("error_retry_button") : this.Wt || this.se("error_retry_button");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "errorRetryButtonOutlineColor", {
              'get': function () {
                return this.ae === Hj ? this.se("error_retry_button_outline") : this.Yt || this.se("error_retry_button_outline");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "calendarBackgroundColor", {
              'get': function () {
                return this.Vt || this.se("calendar_bg");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "calendarColor", {
              'get': function () {
                return this.ne || this.themeColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "calendarSeparatorBackgroundColor", {
              'get': function () {
                return this.oe || this.se("calendar_separator_bg");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "calendarTitleColor", {
              'get': function () {
                return this.Gt || this.titleFontColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "freeSpinListFontColor", {
              'get': function () {
                return this.Ut || this.highlightFontColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "freeSpinListSelectedFontColor", {
              'get': function () {
                return this.qt || this.themeColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "freeSpinListCloseButtonColor", {
              'get': function () {
                return this.Xt || this.primaryFontColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "freeSpinListArrowColor", {
              'get': function () {
                return this.Kt || this.themeColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "pagesButtonArrowColor", {
              'get': function () {
                return this.Zt || this.themeColor;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "pagesButtonBackgroundColor", {
              'get': function () {
                return this.Jt || this.se("pages_button_background_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "alertBackgroundColor", {
              'get': function () {
                return this.Qt || this.se("alert_background_color");
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "alertBorderColor", {
              'get': function () {
                return this.$t || this.se("alert_border_color");
              },
              'enumerable': false,
              'configurable': true
            });
            return x3;
          }();
          var o5 = function () {
            function x3() {
              this.le = {};
              this.ce = {};
              this.gameName = '';
              this.replayVersion = 0x0;
              this.resourcesLoaded = false;
              this.isPortrait = true;
              this.isMobile = true;
              this.isApiReplay = false;
              this.isPrototype = false;
              this.hasHeader = false;
              this.gsScale = 0x1;
              this.verificationState = 0x0;
              this.he = "https://verify.pgsoht.com";
              this.ue = {};
            }
            x3.prototype.setup = function (x4) {
              var x5 = x4.token;
              var x6 = x4.gameId;
              this.de = x5;
              this.fe = x6;
              this.pe = shell.I18n.locale();
              this.me = new o4();
            };
            Object.defineProperty(x3.prototype, "appearanceHelper", {
              'get': function () {
                return this.me;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "displayConfig", {
              'get': function () {
                return this.le;
              },
              'set': function (x4) {
                if (x4) {
                  this.le = x4;
                }
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "envIndex", {
              'get': function () {
                return shell.environment.getEIF() >> 0x18;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "envFlag", {
              'get': function () {
                return 0xffffff & shell.environment.getEIF();
              },
              'enumerable': false,
              'configurable': true
            });
            x3.prototype.setGameUrl = function (x4, x5) {
              this.ce[x4] = x5;
            };
            x3.prototype.getGameUrl = function (x4) {
              return this.ce[x4];
            };
            x3.prototype.isEnableVRF = function () {
              var x4 = "port" !== shell.environment.getOrientationMode();
              var x5 = +shell.environment.getURLSearchParam().get("type");
              return !x4 && !(0x1 !== x5) && (this.envIndex & this.envFlag) >= 0x1;
            };
            x3.prototype.ve = function (x4) {
              var x5 = [];
              for (var x6 = 0x0; x6 < x4; x6++) {
                x5.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(0x1a * Math.random())));
              }
              return x5.join('');
            };
            x3.prototype.be = function () {
              var x4 = new Date().getUTCDate() + '';
              return x4.length > 0x1 ? x4 : '0'.concat(x4);
            };
            x3.prototype.ye = function (x4) {
              var x5 = [];
              for (var x6 in x4) x5.push(encodeURIComponent(x6) + '=' + encodeURIComponent(x4[x6]));
              return x5.join('&');
            };
            x3.prototype.getVRFLink = function (x4) {
              var x5 = ''.concat(this.ve(0o6)).concat(this.be());
              var x6 = {
                'atk': this.de,
                'gid': this.fe,
                'env': this.envIndex,
                'l': this.pe,
                'sid': x4,
                'tid': x5,
                'fhost': location.host.replace(/^[^\.]+\./, '')
              };
              return ''.concat(this.he, '?').concat(this.ye(x6));
            };
            x3.prototype.setImageMaskWithBlob = function (x4, x5) {
              this.ue[x4] = x5;
            };
            x3.prototype.getImageMaskWithBlob = function (x4) {
              return this.ue[x4];
            };
            return x3;
          }();
          var o6 = new o5();
          function o7(x3, x4) {
            var x5;
            var x6;
            var x7 = new Date();
            if (0x2 === x3) {
              var x8 = new Date();
              x8.setDate(x7.getDate() - 0x6);
              x5 = Hb.convertTimeToBeginningOrEndOfTheDay(x8).getTime();
              x6 = Hb.convertTimeToBeginningOrEndOfTheDay(x7, true).getTime();
            } else if (0x3 === x3 && x4) {
              x5 = x4.startDate.getTime();
              x6 = x4.endDate.getTime();
            } else {
              x5 = Hb.convertTimeToBeginningOrEndOfTheDay(x7).getTime();
              x6 = Hb.convertTimeToBeginningOrEndOfTheDay(x7, true).getTime();
            }
            var x9 = {
              startDate: x5,
              endDate: x6
            };
            return x9;
          }
          function o9(x3, x4) {
            var x5 = new Date(x3);
            var x6 = x5.getFullYear();
            var x7 = (x5.getMonth() + 0x1 < 0xa && x5.getMonth() + 0x1 >= 0x0 ? '0' + (x5.getMonth() + 0x1).toString() : (x5.getMonth() + 0x1).toString()) + '/' + (x5.getDate() < 0xa && x5.getDate() >= 0x0 ? '0' + x5.getDate().toString() : x5.getDate().toString());
            return x4 ? ''.concat(x6, '/').concat(x7) : x7;
          }
          function oq(x3, x4) {
            if (undefined === x4) {
              x4 = true;
            }
            var x5 = new Date(x3);
            var x6 = (x5.getHours() < 0xa && x5.getHours() >= 0x0 ? '0' + x5.getHours().toString() : x5.getHours().toString()) + ':' + (x5.getMinutes() < 0xa && x5.getMinutes() >= 0x0 ? '0' + x5.getMinutes().toString() : x5.getMinutes().toString());
            if (x4) {
              x6 = x6 + ':' + (x5.getSeconds() < 0xa && x5.getSeconds() >= 0x0 ? '0' + x5.getSeconds().toString() : x5.getSeconds().toString());
            }
            return x6;
          }
          function oN(x3) {
            var x4 = -0x1 * new Date(x3).getTimezoneOffset();
            var x5 = Math.floor(Math.abs(x4) / 0x3c).toString();
            var x6 = Math.abs(x4) % 0x3c < 0xa && Math.abs(x4) % 0x3c >= 0x0 ? '0' + (Math.abs(x4) % 0x3c).toString() : (Math.abs(x4) % 0x3c).toString();
            return "(GMT".concat(x4 >= 0x0 ? '+' : '-').concat(x5, ':').concat(x6, ')');
          }
          function oQ(x3, x4, x5, x6, x7) {
            var x8 = {
              category: shell.ga.CATEGORY_GAME,
              domain: x4,
              code: x5,
              error: x3,
              retry: x6,
              messages: x7
            };
            o6.context.emit("Error.Report", x8);
          }
          function oH(x3) {
            var x4 = function () {
              var x5 = o6.context;
              var x6 = {
                'background': {
                  'backgroundColor': o6.appearanceHelper.alertBackgroundColor,
                  'border': o6.appearanceHelper.alertBorderColor + " 1px solid"
                },
                'message': {
                  'fontColor': o6.appearanceHelper.primaryFontColor
                }
              };
              var x7 = o6.isPortrait ? {
                'toastStyle': "Notification",
                'message': x3.message,
                'duration': x3.duration,
                'toastPosition': "Top",
                'positionOffset': 0x78,
                'imageSrc': '',
                'layoutStyle': x6
              } : {
                'toastStyle': "Notification",
                'message': x3.message,
                'duration': x3.duration,
                'toastPosition': "Bottom",
                'imageSrc': '',
                'layoutStyle': x6
              };
              x5.event.emit("Toast.Show", x7, function () {
                if (x3.eventCallback) {
                  x3.eventCallback();
                }
              });
            };
            if (x3.delay) {
              setTimeout(x4, 0x3e8 * x3.delay);
            } else {
              x4();
            }
          }
          function od() {
            var x3 = false;
            var x4 = shell.environment.getOSVersion();
            var x5 = shell.environment.getBrowserType().toLowerCase();
            if (shell.environment.isIOS() && x4.startsWith('12') || x4.startsWith('11')) {
              x3 = true;
            }
            if (!("firefox" !== x5 && "edge" !== x5 && "ucbrowser" !== x5 && "lite baidu" !== x5 && "baidubrowser" !== x5 && "360browser" !== x5 && "opera" !== x5)) {
              x3 = true;
            }
            return x3;
          }
          function oW() {
            var x3 = shell.environment.getSafeAreaPadding ? shell.environment.getSafeAreaPadding().top : 0x0;
            if (!o6.hasHeader) {
              x3 /= 0x2;
            }
            return x3;
          }
          function oU(x3, x4) {
            if (navigator.clipboard) {
              navigator.clipboard.writeText(x3).then(function () {
                if (x4) {
                  x4();
                }
              })["catch"](function (x6) {
                if (x4) {
                  x4(x6);
                }
              });
            } else {
              var x5 = document.createElement("textarea");
              x5.style.color = "rgb(0,0,0,0)";
              x5.style.border = "none";
              x5.style.background = "transparent";
              x5.style.outline = "none";
              x5.style.overflow = "hidden";
              x5.style.margin = "0px";
              x5.style.padding = "0px";
              x5.style.position = "absolute";
              x5.style.zIndex = '-1';
              document.body.appendChild(x5);
              x5.value = x3;
              x5.focus();
              x5.select();
              x5.setSelectionRange(0x0, x5.value.length);
              document.execCommand("Copy");
              document.body.removeChild(x5);
              if (x4) {
                x4();
              }
            }
          }
          function oR(x3) {
            if (undefined === x3) {
              x3 = false;
            }
            var x4 = x3 ? 0x14 : 0x0;
            return o6.isEnableVRF() ? 0x4e + x4 : 0x0;
          }
          function oO(x3, x4, x5) {
            if (undefined === x5) {
              x5 = 0x1;
            }
            var x6 = RegExp("<Color>", 'g');
            var x7 = RegExp("</Color>", 'g');
            return x3.replace(x6, "<span style='color:".concat(x4, "; opacity:").concat(x5, ";'>")).replace(x7, "</span>");
          }
          var oM = undefined;
          var oP = undefined;
          var oJ = undefined;
          var oS = [];
          var os = undefined;
          var of = QA.getPlatform();
          var oL = undefined;
          function oF(x3) {
            x3.atk = oP;
            x3.pf = of;
            x3.wk = os;
            x3.btt = oJ;
          }
          var op;
          var om;
          var oX;
          var ow;
          var oD;
          var ov = shell.I18n;
          var oa = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.isPortrait = x6.props.orientation ? "port" === x6.props.orientation : o6.isPortrait;
              x6.xe = x6.xe.bind(x6);
              x6._e = x6._e.bind(x6);
              x6.we = G.createRef();
              x6.ke = G.createRef();
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              if (this.ke.current && this.we.current) {
                var x5 = this.isPortrait ? 0x64 : 0xc8;
                if (this.we.current.offsetWidth > x5) {
                  this.ke.current.style.width = ''.concat(this.we.current.offsetWidth, 'px');
                  this.ke.current.style.paddingLeft = '3%';
                  this.ke.current.style.paddingRight = '3%';
                } else {
                  this.we.current.style.width = ''.concat(this.ke.current.offsetWidth, 'px');
                }
                this.we.current.style.lineHeight = ''.concat(this.ke.current.offsetHeight, 'px');
              }
            };
            x4.prototype.render = function () {
              var x5;
              var x6;
              var x7 = [];
              var x8 = {
                color: o6.appearanceHelper.errorMessageFontColor
              };
              var x9 = {
                'id': "error-label",
                key: "error-label",
                style: x8
              };
              x7.push(G.createElement("div", x9, this.props.error.message));
              if (this.props.error.shouldRetry && this.props.retryButtonCallback) {
                x7.push(this.Ce(o6.launchType, this.isPortrait, this.xe));
              }
              if (this.props.closeButtonCallback) {
                x5 = this._e;
                x6 = this.isPortrait ? '5%' : '2%';
                x7.push(o6.launchType === Qj.CARD ? G.createElement("div", {
                  'id': "error-retry-button-container-card-close",
                  'className': "error-retry-button-container-vertical",
                  'key': "error-retry-button-container-card-close",
                  'style': {
                    'marginTop': x6
                  },
                  'onClick': x5
                }, G.createElement("div", {
                  'id': "error-close-button-label-card",
                  'key': "error-close-button-label",
                  'style': {
                    'color': o6.appearanceHelper.errorCloseFontColor
                  }
                }, ov.t("History.HistoryBarClose"))) : G.createElement("div", {
                  'id': "error-close-button-label",
                  'key': "error-close-button-label",
                  'onClick': x5,
                  'style': {
                    'color': o6.appearanceHelper.errorCloseFontColor,
                    'marginTop': x6
                  }
                }, ov.t("History.HistoryBarClose")));
              }
              var xq = {
                backgroundColor: o6.appearanceHelper.listBackgroundColor
              };
              var xQ = this.isPortrait ? "error-container-vertical" : "error-container-horizontal";
              var xH = {
                'id': "error-container",
                className: xQ,
                style: xq
              };
              return G.createElement("div", xH, x7);
            };
            x4.prototype.Ce = function (x5, x6, x7) {
              var x8 = {
                backgroundColor: o6.appearanceHelper.errorRetryButtonColor,
                outlineColor: o6.appearanceHelper.errorRetryButtonOutlineColor
              };
              var xq = x5 === Qj.CARD ? "error-retry-button-container-card" : '';
              var xN = x6 ? "error-retry-button-container-vertical" : "error-retry-button-container-horizontal";
              var xQ = {
                color: o6.appearanceHelper.errorRetryFontColor
              };
              return G.createElement("div", {
                'id': "error-retry-button-container",
                'key': "error-retry-button-container",
                'className': ''.concat(xq, " ").concat(xN),
                'ref': this.ke,
                'onClick': x7,
                'style': x8
              }, G.createElement("div", {
                'id': "error-retry-button-label",
                'ref': this.we,
                'style': xQ
              }, ov.t("History.HistoryRetry")));
            };
            x4.prototype.xe = function () {
              if (this.props.retryButtonCallback) {
                this.props.retryButtonCallback();
              }
            };
            x4.prototype._e = function () {
              if (this.props.closeButtonCallback) {
                this.props.closeButtonCallback();
              }
            };
            return x4;
          }(G.Component);
          var oC = {};
          var oE = {};
          var oK = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = {
                active: false,
                hover: false
              };
              x6.state = x7;
              x6.Se = x6.Se.bind(x6);
              x6.He = x6.He.bind(x6);
              x6.ze = x6.ze.bind(x6);
              x6.De = x6.De.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.render = function () {
              var x5 = {
                backgroundColor: this.state.active ? o6.appearanceHelper.listItemPressedColor : o6.appearanceHelper.listBackgroundColor
              };
              var x7 = o6.appearanceHelper.freeSpinListFontColor;
              var x8 = this.props.selected ? o6.appearanceHelper.freeSpinListSelectedFontColor : x7;
              var x9 = {
                'color': x8
              };
              var xq = {
                'color': x8
              };
              var xN = {
                paddingRight: "15px",
                paddingLeft: "0px"
              };
              var xQ = {
                marginRight: "auto",
                marginLeft: 0x0,
                paddingRight: "0px",
                paddingLeft: "15px"
              };
              if (shell.isRTLLanguage()) {
                x5.direction = "rtl";
                x9 = QI(QI({}, x9), xN);
                xq = QI(QI({}, xq), xQ);
              }
              return G.createElement("div", {
                'className': "game-free-spin-list-item",
                'onClick': this.Se,
                'onMouseLeave': this.He,
                'onMouseDown': this.ze,
                'onMouseUp': this.De,
                'style': x5
              }, G.createElement("div", {
                'className': "game-free-spin-type",
                'style': x9
              }, this.props.title), G.createElement("div", {
                'className': "game-free-spin-amount",
                'style': xq
              }, this.props.winLostAmount));
            };
            x4.prototype.Se = function () {
              if (this.props.onClickCallback) {
                this.props.onClickCallback();
              }
            };
            x4.prototype.He = function () {
              var x5 = {
                active: false
              };
              this.setState(x5);
            };
            x4.prototype.ze = function () {
              var x5 = {
                active: true
              };
              this.setState(x5);
            };
            x4.prototype.De = function () {
              var x5 = {
                active: false
              };
              this.setState(x5);
            };
            return x4;
          }(G.Component);
          var oB = {};
          var oI = {};
          var oh = {
            get 'exports'() {
              return oI;
            },
            set 'exports'(x3) {
              oI = x3;
            }
          };
          var ou = {
            get 'exports'() {
              return oB;
            },
            set 'exports'(x3) {
              oB = x3;
            }
          };
          ou.exports = function (x3, x4, x5) {
            return (() => {
              var x6 = {
                0xe5: xq => {
                  if (undefined === x3) {
                    var xN = Error("Cannot find module 'prop-types'");
                    xN.code = "MODULE_NOT_FOUND";
                    throw xN;
                  }
                  xq.exports = x3;
                },
                0x129: xq => {
                  xq.exports = x4;
                },
                0x10c: xq => {
                  xq.exports = x5;
                }
              };
              var x7 = {};
              function x8(xq) {
                var xN = x7[xq];
                if (undefined !== xN) {
                  return xN.exports;
                }
                var xQ = {
                  exports: {}
                };
                var xH = x7[xq] = xQ;
                x6[xq](xH, xH.exports, x8);
                return xH.exports;
              }
              x8.n = xq => {
                var xN = xq && xq.__esModule ? () => xq["default"] : () => xq;
                x8.d(xN, {
                  'a': xN
                });
                return xN;
              };
              x8.d = (xq, xN) => {
                for (var xQ in xN) if (x8.o(xN, xQ) && !x8.o(xq, xQ)) {
                  Object.defineProperty(xq, xQ, {
                    'enumerable': true,
                    'get': xN[xQ]
                  });
                }
              };
              x8.o = (xq, xN) => Object.prototype.hasOwnProperty.call(xq, xN);
              x8.r = xq => {
                var xN = {
                  value: "Module"
                };
                var xQ = {
                  value: true
                };
                if ("undefined" != typeof Symbol && Symbol.toStringTag) {
                  Object.defineProperty(xq, Symbol.toStringTag, xN);
                }
                Object.defineProperty(xq, "__esModule", xQ);
              };
              var x9 = {};
              (() => {
                var xq = {
                  "default": () => xJ
                };
                x8.r(x9);
                x8.d(x9, xq);
                var xN = x8(0x129);
                var xQ = x8.n(xN);
                var xH = x8(0x10c);
                var xd = x8.n(xH);
                var xW = {
                  "custom-scroll": "rcs-custom-scroll",
                  customScroll: "rcs-custom-scroll",
                  "outer-container": "rcs-outer-container",
                  outerContainer: "rcs-outer-container",
                  positioning: "rcs-positioning",
                  "custom-scrollbar": "rcs-custom-scrollbar",
                  customScrollbar: "rcs-custom-scrollbar",
                  "inner-container": "rcs-inner-container",
                  innerContainer: "rcs-inner-container",
                  "content-scrolled": "rcs-content-scrolled",
                  contentScrolled: "rcs-content-scrolled",
                  "scroll-handle-dragged": "rcs-scroll-handle-dragged",
                  scrollHandleDragged: "rcs-scroll-handle-dragged",
                  "custom-scrollbar-rtl": "rcs-custom-scrollbar-rtl",
                  customScrollbarRtl: "rcs-custom-scrollbar-rtl",
                  "custom-scroll-handle": "rcs-custom-scroll-handle",
                  customScrollHandle: "rcs-custom-scroll-handle",
                  "inner-handle": "rcs-inner-handle",
                  innerHandle: "rcs-inner-handle"
                };
                function xy(xz) {
                  return (xy = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (xk) {
                    return typeof xk;
                  } : function (xk) {
                    return xk && "function" == typeof Symbol && xk.constructor === Symbol && xk !== Symbol.prototype ? "symbol" : typeof xk;
                  })(xz);
                }
                function xG(xz, xk) {
                  return (xG = Object.setPrototypeOf || function (xF, xp) {
                    xF.__proto__ = xp;
                    return xF;
                  })(xz, xk);
                }
                function xU(xz) {
                  if (undefined === xz) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  }
                  return xz;
                }
                function xR(xz) {
                  return (xR = Object.setPrototypeOf ? Object.getPrototypeOf : function (xk) {
                    return xk.__proto__ || Object.getPrototypeOf(xk);
                  })(xz);
                }
                function xO(xz, xk, xF) {
                  var xp = {
                    value: xF,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  };
                  if (xk in xz) {
                    Object.defineProperty(xz, xk, xp);
                  } else {
                    xz[xk] = xF;
                  }
                  return xz;
                }
                var xM = function (xz, xk, xF) {
                  return (xk = xk || 0x0 === xk ? xk : xz) > (xF = xF || 0x0 === xF ? xF : xz) ? xz : xz < xk ? xk : xz > xF ? xF : xz;
                };
                var xJ = function (xz) {
                  !function (xw, xD) {
                    if ("function" != typeof xD && null !== xD) {
                      throw new TypeError("Super expression must either be null or a function");
                    }
                    xw.prototype = Object.create(xD && xD.prototype, {
                      'constructor': {
                        'value': xw,
                        'writable': true,
                        'configurable': true
                      }
                    });
                    if (xD) {
                      xG(xw, xD);
                    }
                  }(xX, xz);
                  var xk;
                  var xp;
                  xp = function () {
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
                      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                      return true;
                    } catch (xw) {
                      return false;
                    }
                  }();
                  var xm = function () {
                    var xw;
                    var xD = xR(xX);
                    if (xp) {
                      var xv = xR(this).constructor;
                      xw = Reflect.construct(xD, arguments, xv);
                    } else {
                      xw = xD.apply(this, arguments);
                    }
                    return !xw || "object" !== xy(xw) && "function" != typeof xw ? xU(this) : xw;
                  };
                  function xX(xw) {
                    var xD;
                    var xv = {
                      scrollPos: 0x0,
                      onDrag: false
                    };
                    (function (xa, xC) {
                      if (!(xa instanceof xC)) {
                        throw new TypeError("Cannot call a class as a function");
                      }
                    })(this, xX);
                    0x0;
                    xO(xU(xD = xm.call(this, xw)), "innerContainerRef", xN.createRef());
                    0x0;
                    xO(xU(xD), "customScrollbarRef", xN.createRef());
                    0x0;
                    xO(xU(xD), "scrollHandleRef", xN.createRef());
                    0x0;
                    xO(xU(xD), "contentWrapperRef", xN.createRef());
                    xO(xU(xD), "adjustFreezePosition", function (xa) {
                      if (xD.contentWrapperRef.current) {
                        var xC = xD.getScrolledElement();
                        var xE = xD.contentWrapperRef.current;
                        if (xD.props.freezePosition) {
                          xE.scrollTop = xD.state.scrollPos;
                        }
                        if (xa.freezePosition) {
                          xC.scrollTop = xD.state.scrollPos;
                        }
                      }
                    });
                    xO(xU(xD), "toggleScrollIfNeeded", function () {
                      var xa = xD.contentHeight - xD.visibleHeight > 0x1;
                      if (xD.hasScroll !== xa) {
                        xD.hasScroll = xa;
                        xD.forceUpdate();
                      }
                    });
                    xO(xU(xD), "updateScrollPosition", function (xa) {
                      var xC = xD.getScrolledElement();
                      var xE = xM(xa, 0o0, xD.contentHeight - xD.visibleHeight);
                      xC.scrollTop = xE;
                      xD.setState({
                        'scrollPos': xE
                      });
                    });
                    xO(xU(xD), "onClick", function (xa) {
                      if (xD.hasScroll && xD.isMouseEventOnCustomScrollbar(xa) && !xD.isMouseEventOnScrollHandle(xa)) {
                        var xC = xD.calculateNewScrollHandleTop(xa);
                        var xE = xD.getScrollValueFromHandlePosition(xC);
                        xD.updateScrollPosition(xE);
                      }
                    });
                    xO(xU(xD), "isMouseEventOnCustomScrollbar", function (xa) {
                      if (!xD.customScrollbarRef.current) {
                        return false;
                      }
                      var xC = xd().findDOMNode(xU(xD)).getBoundingClientRect();
                      var xE = xD.customScrollbarRef.current.getBoundingClientRect();
                      var xK = xD.props.rtl ? {
                        'left': xC.left,
                        'right': xE.right
                      } : {
                        'left': xE.left,
                        'width': xC.right
                      };
                      var xB = {
                        left: xC.left,
                        right: xC.right,
                        top: xC.top,
                        height: xC.height
                      };
                      return xa.clientX > Object.assign({}, xB, xK).left && xa.clientX < Object.assign({}, xB, xK).right && xa.clientY > Object.assign({}, xB, xK).top && xa.clientY < Object.assign({}, xB, xK).top + Object.assign({}, xB, xK).height;
                    });
                    xO(xU(xD), "isMouseEventOnScrollHandle", function (xa) {
                      return !!xD.scrollHandleRef.current && function (xC, xE) {
                        return xC.clientX > xE.getBoundingClientRect().left && xC.clientX < xE.getBoundingClientRect().right && xC.clientY > xE.getBoundingClientRect().top && xC.clientY < xE.getBoundingClientRect().top + xE.getBoundingClientRect().height;
                      }(xa, xd().findDOMNode(xD.scrollHandleRef.current));
                    });
                    xO(xU(xD), "calculateNewScrollHandleTop", function (xa) {
                      var xC = xd().findDOMNode(xU(xD)).getBoundingClientRect().top + W.pageYOffset;
                      var xE = xa.pageY - xC;
                      var xK = xD.getScrollHandleStyle().top;
                      return xE > xK + xD.scrollHandleHeight ? xK + Math.min(xD.scrollHandleHeight, xD.visibleHeight - xD.scrollHandleHeight) : xK - Math.max(xD.scrollHandleHeight, 0x0);
                    });
                    xO(xU(xD), "getScrollValueFromHandlePosition", function (xa) {
                      return xa / xD.scrollRatio;
                    });
                    xO(xU(xD), "getScrollHandleStyle", function () {
                      var xa = xD.state.scrollPos * xD.scrollRatio;
                      xD.scrollHandleHeight = xD.visibleHeight * xD.scrollRatio;
                      return {
                        'height': xD.scrollHandleHeight,
                        'top': xa
                      };
                    });
                    xO(xU(xD), "adjustCustomScrollPosToContentPos", function (xa) {
                      var xC = {
                        scrollPos: xa
                      };
                      xD.setState(xC);
                    });
                    xO(xU(xD), "onScroll", function (xa) {
                      if (!xD.props.freezePosition) {
                        xD.hideScrollThumb();
                        xD.adjustCustomScrollPosToContentPos(xa.currentTarget.scrollTop);
                        if (xD.props.onScroll) {
                          xD.props.onScroll(xa);
                        }
                      }
                    });
                    xO(xU(xD), "getScrolledElement", function () {
                      return xD.innerContainerRef.current;
                    });
                    xO(xU(xD), "onMouseDown", function (xa) {
                      var xC = {
                        onDrag: true
                      };
                      var xE = {
                        passive: false
                      };
                      var xK = {
                        passive: false
                      };
                      if (xD.hasScroll && xD.isMouseEventOnScrollHandle(xa)) {
                        xD.startDragHandlePos = xD.getScrollHandleStyle().top;
                        xD.startDragMousePos = xa.pageY;
                        xD.setState(xC);
                        document.addEventListener("mousemove", xD.onHandleDrag, xE);
                        document.addEventListener("mouseup", xD.onHandleDragEnd, xK);
                      }
                    });
                    xO(xU(xD), "onTouchStart", function () {
                      var xa = {
                        onDrag: true
                      };
                      xD.setState(xa);
                    });
                    xO(xU(xD), "onHandleDrag", function (xa) {
                      xa.preventDefault();
                      var xC = xa.pageY - xD.startDragMousePos;
                      var xE = xM(xD.startDragHandlePos + xC, 0o0, xD.visibleHeight - xD.scrollHandleHeight);
                      var xK = xD.getScrollValueFromHandlePosition(xE);
                      xD.updateScrollPosition(xK);
                    });
                    xO(xU(xD), "onHandleDragEnd", function (xa) {
                      var xC = {
                        onDrag: false
                      };
                      xD.setState(xC);
                      xa.preventDefault();
                      document.removeEventListener("mousemove", xD.onHandleDrag);
                      document.removeEventListener("mouseup", xD.onHandleDragEnd);
                    });
                    xO(xU(xD), "blockOuterScroll", function (xa) {
                      if (!xD.props.allowOuterScroll) {
                        var xC = xa.currentTarget;
                        var xE = xa.currentTarget.scrollHeight - xa.currentTarget.offsetHeight;
                        var xK = xa.deltaY % 0x3 ? xa.deltaY : 0xa * xa.deltaY;
                        if (xC.scrollTop + xK <= 0x0) {
                          xC.scrollTop = 0x0;
                          xa.preventDefault();
                        } else if (xC.scrollTop + xK >= xE) {
                          xC.scrollTop = xE;
                          xa.preventDefault();
                        }
                        xa.stopPropagation();
                      }
                    });
                    xO(xU(xD), "getInnerContainerClasses", function () {
                      return xD.state.scrollPos && xD.props.addScrolledClass ? ''.concat("rcs-inner-container", " ").concat("rcs-content-scrolled") : "rcs-inner-container";
                    });
                    xO(xU(xD), "getScrollStyles", function () {
                      var xa = xD.scrollbarYWidth || 0x14;
                      var xC = xD.props.rtl ? "marginLeft" : "marginRight";
                      var xE = {
                        'height': xD.props.heightRelativeToParent || xD.props.flex ? "100%" : ''
                      };
                      xE[xC] = -0x1 * xa;
                      var xK = {
                        height: xD.props.heightRelativeToParent || xD.props.flex ? "100%" : '',
                        overflowY: xD.props.freezePosition ? "hidden" : "visible"
                      };
                      xK[xC] = xD.scrollbarYWidth ? 0x0 : xa;
                      return {
                        'innerContainer': xE,
                        'contentWrapper': xK
                      };
                    });
                    xO(xU(xD), "getOuterContainerStyle", function () {
                      var xa = {
                        height: xD.props.heightRelativeToParent || xD.props.flex ? "100%" : ''
                      };
                      return xa;
                    });
                    xO(xU(xD), "getRootStyles", function () {
                      var xa = {};
                      if (xD.props.heightRelativeToParent) {
                        xa.height = xD.props.heightRelativeToParent;
                      } else if (xD.props.flex) {
                        xa.flex = xD.props.flex;
                      }
                      return xa;
                    });
                    xO(xU(xD), "enforceMinHandleHeight", function (xa) {
                      var xC = xD.props.minScrollHandleHeight;
                      if (xa.height >= xC) {
                        return xa;
                      }
                      var xE = (xC - xa.height) * (xD.state.scrollPos / (xD.contentHeight - xD.visibleHeight));
                      var xK = {
                        height: xC,
                        top: xa.top - xE
                      };
                      return xK;
                    });
                    xD.scrollbarYWidth = 0x0;
                    xD.state = xv;
                    xD.hideScrollThumb = function () {
                      var xa;
                      function xC() {
                        clearTimeout(xa);
                      }
                      function xE() {
                        xC();
                        xa = setTimeout(function () {
                          var xK = {
                            onDrag: false
                          };
                          xD.setState(xK);
                        }, 0o764);
                      }
                      xE.cancel = xC;
                      return xE;
                    }();
                    return xD;
                  }
                  if (xk = [{
                    'key': "componentDidMount",
                    'value': function () {
                      var xw = {
                        passive: false
                      };
                      if (undefined !== this.props.scrollTo) {
                        this.updateScrollPosition(this.props.scrollTo);
                      } else {
                        this.forceUpdate();
                      }
                      if (this.innerContainerRef.current) {
                        this.innerContainerRef.current.addEventListener("wheel", this.blockOuterScroll, xw);
                      }
                    }
                  }, {
                    'key': "componentDidUpdate",
                    'value': function (xw, xD) {
                      var xv = this.contentHeight;
                      var xa = this.visibleHeight;
                      var xC = this.getScrolledElement();
                      var xE = xD.scrollPos >= xv - xa;
                      this.contentHeight = xC.scrollHeight;
                      this.scrollbarYWidth = xC.offsetWidth - xC.clientWidth;
                      this.visibleHeight = xC.clientHeight;
                      this.scrollRatio = this.contentHeight ? this.visibleHeight / this.contentHeight : 0x1;
                      this.toggleScrollIfNeeded();
                      var xK = this.state === xD;
                      if (this.props.freezePosition || xw.freezePosition) {
                        this.adjustFreezePosition(xw);
                      }
                      if (undefined !== this.props.scrollTo && this.props.scrollTo !== xw.scrollTo) {
                        this.updateScrollPosition(this.props.scrollTo);
                      } else if (this.props.keepAtBottom && xK && xE) {
                        this.updateScrollPosition(this.contentHeight - this.visibleHeight);
                      }
                    }
                  }, {
                    'key': "componentWillUnmount",
                    'value': function () {
                      this.hideScrollThumb.cancel();
                      document.removeEventListener("mousemove", this.onHandleDrag);
                      document.removeEventListener("mouseup", this.onHandleDragEnd);
                      if (this.innerContainerRef.current) {
                        this.innerContainerRef.current.removeEventListener("wheel", this.blockOuterScroll);
                      }
                    }
                  }, {
                    'key': "render",
                    'value': function () {
                      var xw = this.getScrollStyles();
                      var xD = this.getRootStyles();
                      var xv = this.enforceMinHandleHeight(this.getScrollHandleStyle());
                      var xa = [this.props.className || '', "rcs-custom-scroll", this.state.onDrag ? "rcs-scroll-handle-dragged" : ''].join(" ");
                      var xC = {
                        className: xa,
                        style: xD
                      };
                      return xQ().createElement("div", xC, xQ().createElement("div", {
                        'className': "rcs-outer-container",
                        'style': this.getOuterContainerStyle(),
                        'onMouseDown': this.onMouseDown,
                        'onTouchStart': this.onTouchStart,
                        'onClick': this.onClick
                      }, this.hasScroll ? xQ().createElement("div", {
                        'className': "rcs-positioning"
                      }, xQ().createElement("div", {
                        'ref': this.customScrollbarRef,
                        'className': ''.concat("rcs-custom-scrollbar", " ").concat(this.props.rtl ? "rcs-custom-scrollbar-rtl" : ''),
                        'key': "scrollbar"
                      }, xQ().createElement("div", {
                        'ref': this.scrollHandleRef,
                        'className': "rcs-custom-scroll-handle",
                        'style': xv
                      }, xQ().createElement("div", {
                        'className': this.props.handleClass
                      })))) : null, xQ().createElement("div", {
                        'ref': this.innerContainerRef,
                        'className': this.getInnerContainerClasses(),
                        'style': xw.innerContainer,
                        'onScroll': this.onScroll
                      }, xQ().createElement("div", {
                        'className': xW.contentWrapper,
                        'ref': this.contentWrapperRef,
                        'style': xw.contentWrapper
                      }, this.props.children))));
                    }
                  }]) {
                    (function (xw, xD) {
                      for (var xv = 0x0; xv < xD.length; xv++) {
                        var xa = xD[xv];
                        xa.enumerable = xa.enumerable || false;
                        xa.configurable = true;
                        if ("value" in xa) {
                          xa.writable = true;
                        }
                        Object.defineProperty(xw, xa.key, xa);
                      }
                    })(xX.prototype, xk);
                  }
                  return xX;
                }(xN.Component);
                try {
                  var xS = x8(0o345);
                  var xs = {
                    children: xS.any,
                    allowOuterScroll: xS.bool,
                    heightRelativeToParent: xS.string,
                    onScroll: xS.func,
                    addScrolledClass: xS.bool,
                    freezePosition: xS.bool,
                    handleClass: xS.string,
                    minScrollHandleHeight: xS.number,
                    flex: xS.string,
                    rtl: xS.bool,
                    scrollTo: xS.number,
                    keepAtBottom: xS.bool,
                    className: xS.string
                  };
                  xJ.propTypes = xs;
                } catch (xz) {}
                var xf = {
                  handleClass: "rcs-inner-handle",
                  minScrollHandleHeight: 0x26
                };
                xJ.defaultProps = xf;
              })();
              return x9;
            })();
          }(function () {
            try {
              if (!oD) {
                oD = 0x1;
                oh.exports = function () {
                  if (ow) {
                    return oX;
                  }
                  ow = 0x1;
                  var x3 = om ? op : (om = 0x1, op = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  function x4() {}
                  function x5() {}
                  x5.resetWarningCache = x4;
                  return oX = function () {
                    function x6(xq, xN, xQ, xH, xd, xW) {
                      if (xW !== x3) {
                        var xb = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        xb.name = "Invariant Violation";
                        throw xb;
                      }
                    }
                    function x7() {
                      return x6;
                    }
                    x6.isRequired = x6;
                    var x8 = {
                      array: x6,
                      bigint: x6,
                      bool: x6,
                      func: x6,
                      number: x6,
                      object: x6,
                      string: x6,
                      symbol: x6,
                      any: x6,
                      arrayOf: x7,
                      element: x6,
                      elementType: x6,
                      instanceOf: x7,
                      node: x6,
                      objectOf: x7,
                      oneOf: x7,
                      oneOfType: x7,
                      shape: x7,
                      exact: x7,
                      checkPropTypes: x5,
                      resetWarningCache: x4
                    };
                    x8.PropTypes = x8;
                    return x8;
                  };
                }()();
              }
              return oI;
            } catch (x3) {}
          }(), G, P);
          var oT = oB;
          var og = shell.I18n;
          var oY = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = {
                showing: false,
                scrollToPosition: 0x0
              };
              x6.state = x7;
              x6.je = x6.je.bind(x6);
              x6.Ne = x6.Ne.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              var x5 = 0x32 * this.props.currentSelectedIndex;
              var x6 = {
                scrollToPosition: x5
              };
              this.setState(x6);
              if (o6.isMobile && od() && 0x5a === shell.environment.getOrientation()) {
                document.querySelectorAll(".rcs-custom-scroll .rcs-inner-container").forEach(function (x7) {
                  x7.style.webkitOverflowScrolling = "auto";
                });
              }
            };
            x4.prototype.render = function () {
              var x5 = {
                backgroundColor: o6.appearanceHelper.listBackgroundColor,
                color: o6.appearanceHelper.freeSpinListCloseButtonColor
              };
              var x7 = {
                'id': "game-free-spin-view-container",
                className: "history regular",
                style: x5
              };
              return G.createElement("div", x7, G.createElement(oT["default"], {
                'heightRelativeToParent': "calc(".concat(this.props.parentHeight, "px - ").concat(50, "px)"),
                'scrollTo': this.state.scrollToPosition
              }, G.createElement("div", null, this.Te())), G.createElement("div", {
                'id': "close-list-button",
                'onClick': this.je.bind(this, -0x1)
              }, og.t("History.HistoryBarClose")));
            };
            x4.prototype.Te = function () {
              var x5 = [];
              var x6 = this.props.totalCount;
              for (var x7 = 0x0; x7 < x6; x7++) {
                var x8 = this.Oe(x7, x6);
                x5.push(G.createElement(oK, {
                  'key': "game-free-spin-list-item-".concat(x7),
                  'selected': this.props.currentSelectedIndex === x7,
                  'title': x8,
                  'winLostAmount': this.props.winLostAmountArrary[x7].toString(),
                  'onClickCallback': this.je.bind(this, x7)
                }));
              }
              return x5;
            };
            x4.prototype.Oe = function (x5, x6) {
              var x7 = this.props.getTitleText(x5);
              return "object" == typeof x7 ? x7.noCount ? x7.title : ''.concat(x7.title, ": ").concat(x5 + 0x1, '/').concat(x6) : 0x0 === x5 ? og.t("History.HistoryNormalSpin") : ''.concat(x7, ": ").concat(x5, '/').concat(x6 - 0x1);
            };
            x4.prototype.je = function (x5) {
              this.props.onPageClickCallback(x5);
            };
            x4.prototype.Ne = function () {
              this.props.onClickCallback(0);
            };
            return x4;
          }(G.PureComponent);
          function ol(x3) {
            var x4 = o6.isMobile ? "-mobile" : '';
            var x5 = x3.isPortrait ? "vertical" : "horizontal".concat(x4);
            var x6 = x3.isPortrait ? "exit-icon-stroke-vertical" : "horizontal exit-icon-stroke-horizontal".concat(x4);
            var x7 = {
              'backgroundColor': x3.customColor ? x3.customColor : o6.appearanceHelper.navCloseButtonIconColor
            };
            return G.createElement("div", {
              'className': "exit-icon ".concat(x5),
              'onClick': x3.onClickCallback
            }, G.createElement("div", {
              'className': "exit-icon-stroke exit-icon-stroke-one ".concat(x6),
              'style': x7
            }), G.createElement("div", {
              'className': "exit-icon-stroke exit-icon-stroke-two ".concat(x6),
              'style': x7
            }));
          }
          function oA(x3) {
            var x4 = o9(x3, true);
            var x5 = oq(x3, false);
            var x6 = oN(x3);
            return ''.concat(x4, " ").concat(x5, " ").concat(x6);
          }
          function oZ(x3) {
            o6.appearanceHelper.secondaryFontColor;
            shell.isRTLLanguage();
            return G.createElement("div", {
              'key': x3,
              'className': "game-list-nav-subtitle-label",
              'style': {
                'color': o6.appearanceHelper.secondaryFontColor
              }
            }, x3);
          }
          var oc = shell.I18n;
          var oj = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.Fe = o6.launchType === Qj.CARD;
              x6.Ie = G.createRef();
              x6.Le = G.createRef();
              x6.Pe = x6.Pe.bind(x6);
              x6.Me = x6.Me.bind(x6);
              x6.Re = x6.Re.bind(x6);
              x6.Be = x6.Be.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              this.Ae();
            };
            x4.prototype.componentDidUpdate = function () {
              this.Ae();
            };
            x4.prototype.render = function () {
              var x5 = {
                backgroundColor: o6.appearanceHelper.navBarColor
              };
              if (shell.isRTLLanguage()) {
                x5.direction = "rtl";
              }
              return G.createElement("div", {
                'id': "game-list-nav",
                'style': x5
              }, this.Pe());
            };
            x4.prototype.Pe = function () {
              var x5 = [];
              var x6 = this.Fe ? 0x4 : 0x2;
              x5.push(G.createElement("div", {
                'id': "game-list-nav-bar",
                'key': "game-list-nav-bar",
                'className': "game-list-nav-bar-vertical",
                'style': {
                  'height': "calc(100% - ".concat(x6, "px)")
                }
              }, this.Ee()));
              if (this.props.currentState === H0.HistoryDetails || this.props.currentState === H0.HistoryList) {
                var x7 = this.Fe ? "game-list-nav-separator-vertical-card" : "game-list-nav-separator-vertical-slot";
                var x8 = o6.appearanceHelper.navBarSeparatorColor;
                var x9 = {
                  backgroundColor: x8
                };
                var xq = {
                  key: "game-list-nav-separator",
                  className: x7,
                  style: x9
                };
                x5.push(G.createElement("div", xq));
              }
              return x5;
            };
            x4.prototype.Ee = function () {
              var x5 = [];
              var x6 = o6.appearanceHelper.titleFontColor;
              var x7 = o6.appearanceHelper.navBarFontTitleColor;
              var x8 = o6.isPortrait ? '' : "game-detail-nav-label-container-horizontal";
              x5.push(G.createElement("div", {
                'className': "game-list-nav-image-container ".concat(this.props.showLeftDisabled ? "game-list-nav-image-container-disabled" : o6.launchType === Qj.CARD ? "game-list-nav-image-container-card" : "game-list-nav-image-container-slot"),
                'key': "game-list-nav-image-container-left",
                'onClick': this.Re
              }, this.We()));
              switch (this.props.currentState) {
                case H0.HistoryDetails:
                case H0.HistoryFreeSpinDetails:
                  var x9 = {
                    className: "game-list-nav-row-container ",
                    onClick: this.props.titleClickCallback
                  };
                  x5.push(G.createElement("div", {
                    'id': "game-list-nav-label-container",
                    'className': "game-list-nav-label-container-vertical ".concat(x8),
                    'key': "game-list-nav-label-container-details"
                  }, G.createElement("div", x9, this.Ye(this.props.showTitle(), x7), this.Ve()), this.Ge()));
                  break;
                case H0.HistoryList:
                  var xq = {
                    'id': "game-list-nav-label-container",
                    className: "game-list-nav-label-container-vertical",
                    key: "game-list-nav-label-container-list"
                  };
                  var xN = {
                    color: x6
                  };
                  var xQ = {
                    className: "game-list-nav-period-label",
                    style: xN
                  };
                  x5.push(G.createElement("div", xq, G.createElement("div", xQ, oc.t("History.HistoryMainTitle")), oZ(this.Me())));
                  break;
                case H0.HistoryCalendar:
                  var xH = {
                    justifyContent: "center",
                    color: o6.appearanceHelper.secondaryFontColor
                  };
                  var xd = {
                    'id': "game-list-nav-label-container",
                    className: "game-list-nav-label-container-vertical",
                    key: "game-list-nav-label-container-calendar",
                    style: xH
                  };
                  var xW = {
                    color: o6.appearanceHelper.calendarTitleColor,
                    justifyContent: "center"
                  };
                  var xb = {
                    className: "game-list-nav-period-label",
                    style: xW
                  };
                  x5.push(G.createElement("div", xd, G.createElement("div", xb, this.Me())));
              }
              x5.push(G.createElement("div", {
                'className': "game-list-nav-image-container ".concat(this.props.showRightDisabled ? "game-list-nav-image-container-disabled" : o6.launchType === Qj.CARD ? "game-list-nav-image-container-card" : "game-list-nav-image-container-slot"),
                'key': "game-list-nav-image-container-right",
                'onClick': this.Be
              }, this.props.customRightItem || this.Ue()));
              return x5;
            };
            x4.prototype.Ge = function () {
              var x5 = this.props;
              var x6 = x5.betTime;
              var x7 = x5.transactionStartTime;
              var x8 = [];
              if (x7) {
                var x9 = shell.I18n.t("History.HistoryCalenderStart") + ": " + oA(x7);
                x8.push(oZ(x9));
              }
              if (x6) {
                var xq = x7 ? shell.I18n.t("History.HistoryCalenderEnd") + ": " : '';
                xq += oA(x6);
                x8.push(oZ(xq));
              }
              return x8;
            };
            x4.prototype.Re = function () {
              var x5 = this.props.leftButtonClickedCallback;
              if (x5) {
                x5();
              }
            };
            x4.prototype.Be = function () {
              var x5 = this.props.currentState;
              var x6 = this.props.rightButtonClickedCallback;
              switch (x5) {
                case H0.HistoryDetails:
                  if (!o6.isPortrait) {
                    if (x6) {
                      x6();
                    }
                  }
                  break;
                case H0.HistoryCalendar:
                case H0.HistoryFreeSpinDetails:
                  break;
                default:
                  if (x6) {
                    x6();
                  }
              }
            };
            x4.prototype.Ve = function () {
              if (this.props.showDropDownArrow()) {
                var x5 = {
                  transition: "transform 0.15s ease-out",
                  borderColor: o6.appearanceHelper.freeSpinListArrowColor
                };
                var x6 = this.props.currentState === H0.HistoryFreeSpinDetails ? "angle-up" : "angle-down";
                var x7 = "angle-up" === x6 ? "translateY(4px)" : "translateY(-4px)";
                var x9 = o6.isMobile ? "gh-angle-horizontal-mobile" : "gh-angle-horizontal";
                var xq = {
                  'id': "nav-drop-down-arrow"
                };
                var xN = {
                  transform: x7
                };
                var xQ = {
                  className: "gh-angle-wrapper",
                  style: xN
                };
                return G.createElement("div", xq, G.createElement("div", xQ, G.createElement("div", {
                  'id': "calendar-arrow",
                  'className': ''.concat(x9, " ").concat(x6),
                  'style': x5
                })));
              }
              return null;
            };
            x4.prototype.Me = function () {
              var x5 = '';
              if (this.props.currentState === H0.HistoryCalendar) {
                switch (this.props.currentCalendarState) {
                  case H1.SELECTION:
                    x5 = oc.t("History.HistoryCalendarDateRange");
                    break;
                  case H1.CUSTOM:
                    x5 = oc.t("History.HistoryCalenderCustom");
                }
              } else {
                switch (this.props.currentCalendarType) {
                  case 0x1:
                  default:
                    x5 = oc.t("History.HistoryCalenderToday");
                    break;
                  case 0x2:
                    x5 = oc.t("History.HistoryCalenderWeek");
                    break;
                  case 0x3:
                    x5 = o9(this.props.calendarCustomDateConfig.startDate, true) + " - " + o9(this.props.calendarCustomDateConfig.endDate, true);
                }
              }
              return x5;
            };
            x4.prototype.We = function () {
              var x5 = '';
              var x6 = shell.isRTLLanguage() ? -0.7 : 0.7;
              var x7 = 0x0;
              var x8 = 0x0;
              var x9 = '';
              var xq = {};
              var xN = {};
              switch (this.props.currentState) {
                case H0.HistoryList:
                  if (o6.launchType === Qj.CARD) {
                    x5 = "gh_card_history_sprite gh_card_btn_calendar_normal";
                    x7 = shell.isRTLLanguage() ? 0x32 : -0x32;
                    x8 = -0x5;
                    x6 = 0.3;
                  } else if (!o6.isApiReplay) {
                    x5 = "gh_basic_sprite gh_ic_nav_calendar";
                    x6 = 0.325;
                  }
                  break;
                case H0.HistoryFreeSpinDetails:
                case H0.HistoryDetails:
                default:
                  if (o6.launchType === Qj.CARD) {
                    x5 = "gh_card_history_sprite gh_card_ic_nav_back_default";
                    x9 = "game-list-nav-image-details-card";
                    x6 = shell.isRTLLanguage() ? -0.3 : 0.3;
                    xq.transformOrigin = shell.isRTLLanguage() ? "right" : "left";
                    x7 = shell.isRTLLanguage() ? 0x6a : 0x0;
                  } else {
                    x5 = "gh-arrow";
                    xN = {
                      'backgroundColor': o6.appearanceHelper.navBackButtonIconColor
                    };
                  }
              }
              return G.createElement("div", {
                'id': "game-list-nav-image-left",
                'className': "game-list-nav-image ".concat(x9),
                'key': "game-list-nav-image-left",
                'style': QI({
                  'transform': "scaleX(".concat(x6, ") scaleY(").concat(Math.abs(x6), ')')
                }, xq)
              }, G.createElement("div", {
                'className': x5,
                'style': QI({
                  'transform': "translate(".concat(x7, "px, ").concat(x8, "px)")
                }, xN)
              }));
            };
            x4.prototype.Ue = function () {
              var x5 = '';
              var x6 = '';
              var x7 = '';
              var x8 = undefined;
              var x9 = this.props.currentState;
              var xq = x9 === H0.HistoryDetails || o6.isPortrait;
              switch (o6.launchType) {
                case Qj.GAME:
                case Qj.SLOT:
                case Qj.APIREPLAY:
                  var xN = {
                    isPortrait: xq
                  };
                  x7 = x9 === H0.HistoryDetails ? '' : "translateX(".concat(shell.isRTLLanguage() ? -0x9 : 0x9, "px)");
                  x8 = G.createElement(ol, xN);
                  break;
                case Qj.CARD:
                  x5 = "gh_card_history_sprite";
                  x6 = "gh_card_btn_close_normal";
                  x7 = "scale(0.3) translateY(".concat(shell.isRTLLanguage() ? 0x5 : -0x5, "px)");
                  x8 = G.createElement("div", {
                    'className': ''.concat(x5, " ").concat(x6)
                  });
              }
              return G.createElement("div", {
                'id': "game-list-nav-image-right",
                'className': "game-list-nav-image",
                'key': "game-list-nav-image-right",
                'style': {
                  'display': this.qe(),
                  'transform': x7
                }
              }, x8);
            };
            x4.prototype.qe = function () {
              var x5 = '';
              switch (this.props.currentState) {
                case H0.HistoryDetails:
                  x5 = o6.isPortrait ? "none" : "flex";
                  break;
                case H0.HistoryCalendar:
                case H0.HistoryFreeSpinDetails:
                  x5 = "none";
                  break;
                default:
                  x5 = "flex";
              }
              return x5;
            };
            x4.prototype.Ye = function (x5, x6) {
              var x7 = {
                'id': "game-free-spin-nav-label-wrapper",
                ref: this.Ie
              };
              var x8 = {
                color: x6
              };
              var x9 = {
                'id': "game-free-spin-nav-label",
                style: x8,
                ref: this.Le
              };
              return G.createElement("div", x7, G.createElement("div", x9, x5));
            };
            x4.prototype.Ae = function () {
              if (this.Le.current && this.Ie.current) {
                var x5 = this.Le.current.offsetWidth;
                if (x5 > 0xd2) {
                  this.Ie.current.style.width = ''.concat(0xd2, 'px');
                  var x6 = 0xd2 / x5;
                  this.Le.current.style.transform = "scale(".concat(x6, ')');
                } else {
                  this.Ie.current.style.width = ''.concat(x5, 'px');
                }
              }
            };
            return x4;
          }(G.Component);
          function i0(x3) {
            var x4;
            var x5 = x3.isHorizontal;
            var x6 = x3.isFade;
            var x7 = x3.fromSide;
            var x8 = x3.loadMore;
            var x9 = x3.isMobile;
            var xq = document.getElementById("game-history-container");
            var xN = document.getElementById("game-list-detail-wrapper");
            var xQ = xq.clientHeight;
            var xH = xq.clientWidth;
            var xd = xN ? xN.clientWidth : 0x0;
            if (x8) {
              var xW = undefined;
              var xb = undefined;
              var xy = undefined;
              var xG = undefined;
              if (x5 && false === x9) {
                xy = xH / 0x3 * 0.8;
                xG = 0xa0;
                xW = 0.6 * (xH / 0x3 - xd / 0x2);
                xb = (xQ - 0xa0 + 0x5a) / 0x3;
              } else if (x5 && true === x9) {
                xy = xH - 0x32;
                xG = 0xb4;
                xW = xH / 0x2 + 0x19;
                xb = xQ - 0x28;
              } else {
                xy = xH;
                xG = 0xb4;
                xW = xH / 0x2;
                xb = xQ - 0x28 - (0x30 + (shell.environment.getSafeAreaPadding ? shell.environment.getSafeAreaPadding().bottom : 0x0)) - oR() + 0xa;
              }
              x4 = {
                'label': shell.I18n.t("History.HistoryLoading"),
                'isFullBackground': true,
                'width': xy,
                'height': xG,
                'x': xW,
                'y': xb,
                'opacity': 0x1,
                'scale': x5 && !x9 ? 0.6 : 0x1,
                'inAnimate': "Fade",
                'inDuration': 0.5,
                'inValue': 0x0,
                'color': o6.appearanceHelper.loadingColor
              };
            } else {
              xW = undefined;
              xb = undefined;
              xy = undefined;
              xG = undefined;
              var xx = undefined;
              if (x5 && false === x9) {
                xy = 0x168;
                xG = 0x280;
                xW = xH / 0x3 * (x7 ? 0.83 : 0.6);
                xW = shell.isRTLLanguage() ? xH / 0x3 - xW : xW;
                xb = xQ / 0x3 * 0.5;
                xx = 0.6;
              } else if (x5 && true === x9) {
                xy = xH - 0x32;
                xG = xQ;
                xW = xH / 0x2 + 0x19;
                xb = xQ / 0x2;
                xx = 0x1;
              } else {
                xy = 0x168;
                xG = 0x280;
                xW = xH / 0x2;
                xb = xQ / 0x2;
                xx = 0x1;
              }
              var xU = {
                'x': xH
              };
              var xR = {
                'y': xQ
              };
              var xO = x6 ? "Fade" : "Slide";
              var xM = x5 ? 0.2 : 0.5;
              var xP = x6 ? 0x0 : x7 ? xU : xR;
              if (shell.isRTLLanguage() && "object" == typeof xP) {
                xP.x = -0x1 * xP.x;
              }
              x4 = {
                'label': shell.I18n.t("History.HistoryLoading"),
                'width': xy,
                'height': xG,
                'x': xW,
                'y': xb,
                'opacity': 0x1,
                'scale': xx,
                'inAnimate': xO,
                'inEasing': "easeOutCubic",
                'inDuration': xM,
                'inValue': xP,
                'color': o6.appearanceHelper.loadingColor
              };
            }
            var xJ = {
              'id': "loading"
            };
            x(function () {
              var xS = o6.context.event;
              xS.emit("Loading.Show", x4);
              return function () {
                xS.emit("Loading.Hide");
              };
            }, []);
            return G.createElement("div", xJ, function (xS, xs, xf) {
              var xL = xS ? "horizontal".concat(xs ? "-mobile" : '') : "vertical";
              if (xf) {
                var xz = {
                  'top': (xS ? xs ? 0xe : 0x1f : 0xd) + (xS ? 0x0 : oW())
                };
                if (shell.isRTLLanguage()) {
                  xz.left = xS ? "28px" : "15px";
                  xz.right = 0x0;
                }
                return G.createElement("div", {
                  'id': "loading-exit",
                  'className': xL,
                  'style': xz
                }, G.createElement(ol, {
                  'isPortrait': !xS,
                  'onClickCallback': function () {
                    xf();
                  },
                  'customColor': o6.appearanceHelper.loadingCloseButtonIconColor
                }));
              }
            }(x3.isHorizontal, x3.isMobile, x3.onButtonClickCallback));
          }
          function i1(x3, x4) {
            return x3.map(function (x5, x6) {
              return x5 + x4[x6];
            });
          }
          function i2(x3, x4) {
            return x3.map(function (x5, x6) {
              return x5 - x4[x6];
            });
          }
          function i3(x3, x4, x5) {
            x5 = x5 || Math.hypot.apply(Math, x3);
            return x4 ? x5 / x4 : 0x0;
          }
          function i4(x3, x4) {
            return x4 ? x3.map(function (x5) {
              return x5 / x4;
            }) : Array(x3.length).fill(0x0);
          }
          function i6(x3, x4) {
            x4 = x4 || Math.hypot.apply(Math, x3) || 0x1;
            return x3.map(function (x5) {
              return x5 / x4;
            });
          }
          function i7(x3, x4, x5) {
            var x6 = Math.hypot.apply(Math, x4);
            return {
              'velocities': i4(x4, x5),
              'velocity': i3(x4, x5, x6),
              'distance': Math.hypot.apply(Math, x3),
              'direction': i6(x4, x6)
            };
          }
          function iq(x3, x4, x5) {
            return 0x0 === x4 || Math.abs(x4) === Infinity ? function (x6, x7) {
              return Math.pow(x6, 0x5 * x7);
            }(x3, x5) : x3 * x4 * x5 / (x4 + x5 * x3);
          }
          function iN(x3, x4, x5, x6) {
            if (undefined === x6) {
              x6 = 0.15;
            }
            return 0x0 === x6 ? function (x7, x8, x9) {
              return Math.max(x8, Math.min(x7, x9));
            }(x3, x4, x5) : x3 < x4 ? -iq(x4 - x3, x5 - x4, x6) + x4 : x3 > x5 ? iq(x3 - x5, x5 - x4, x6) + x5 : x3;
          }
          function iQ(x3, x4) {
            for (var x5 = 0x0; x5 < x4.length; x5++) {
              var x6 = x4[x5];
              x6.enumerable = x6.enumerable || false;
              x6.configurable = true;
              if ("value" in x6) {
                x6.writable = true;
              }
              Object.defineProperty(x3, x6.key, x6);
            }
          }
          function iH() {
            iH = Object.assign || function (x3) {
              for (var x4 = 0x1; x4 < arguments.length; x4++) {
                var x5 = arguments[x4];
                for (var x6 in x5) if (Object.prototype.hasOwnProperty.call(x5, x6)) {
                  x3[x6] = x5[x6];
                }
              }
              return x3;
            };
            return iH.apply(this, arguments);
          }
          function id(x3, x4) {
            x3.prototype = Object.create(x4.prototype);
            x3.prototype.constructor = x3;
            x3.__proto__ = x4;
          }
          function iW(x3, x4) {
            if (null == x3) {
              return {};
            }
            var x5;
            var x6;
            var x7 = {};
            var x8 = Object.keys(x3);
            for (x6 = 0x0; x6 < x8.length; x6++) {
              x5 = x8[x6];
              if (!(x4.indexOf(x5) >= 0x0)) {
                x7[x5] = x3[x5];
              }
            }
            return x7;
          }
          function ib(x3, x4) {
            if (null == x4 || x4 > x3.length) {
              x4 = x3.length;
            }
            var x5 = 0x0;
            for (var x6 = Array(x4); x5 < x4; x5++) {
              x6[x5] = x3[x5];
            }
            return x6;
          }
          function iy(x3) {
            var x4 = 0x0;
            if ("undefined" == typeof Symbol || null == x3[Symbol.iterator]) {
              if (Array.isArray(x3) || (x3 = function (x5, x6) {
                if (x5) {
                  if ("string" == typeof x5) {
                    return ib(x5, x6);
                  }
                  var x7 = Object.prototype.toString.call(x5).slice(0x8, -0x1);
                  if ("Object" === x7 && x5.constructor) {
                    x7 = x5.constructor.name;
                  }
                  return "Map" === x7 || "Set" === x7 ? Array.from(x5) : "Arguments" === x7 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x7) ? ib(x5, x6) : undefined;
                }
              }(x3))) {
                return function () {
                  var x5 = {
                    done: true
                  };
                  return x4 >= x3.length ? x5 : {
                    'done': false,
                    'value': x3[x4++]
                  };
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            return (x4 = x3[Symbol.iterator]()).next.bind(x4);
          }
          function iG() {}
          var ix = function () {
            var x3 = arguments.length;
            var x4 = Array(x3);
            for (var x5 = 0x0; x5 < x3; x5++) {
              x4[x5] = arguments[x5];
            }
            return function () {
              var x6 = arguments.length;
              var x7 = Array(x6);
              for (var x8 = 0x0; x8 < x6; x8++) {
                x7[x8] = arguments[x8];
              }
              return x4.forEach(function (x9) {
                return x9.apply(undefined, x7);
              });
            };
          };
          function iO(x3, x4) {
            var x5 = {};
            Object.entries(x3).forEach(function (x6) {
              var x7 = x6[0x0];
              var x8 = x6[0x1];
              return (undefined !== x8 || x7 in x4) && (x5[x7] = x8);
            });
            return x5;
          }
          function iP() {
            var x3 = {
              'Xe': false,
              'Ke': false,
              'Ze': [false, false],
              'Je': [0x0, 0x0],
              'Qe': [0x0, 0x0],
              '$e': undefined,
              event: undefined,
              values: [0x0, 0x0],
              velocities: [0x0, 0x0],
              delta: [0x0, 0x0],
              movement: [0x0, 0x0],
              offset: [0x0, 0x0],
              lastOffset: [0x0, 0x0],
              direction: [0x0, 0x0],
              initial: [0x0, 0x0],
              previous: [0x0, 0x0],
              first: false,
              last: false,
              active: false,
              timeStamp: 0x0,
              startTime: 0x0,
              elapsedTime: 0x0,
              cancel: iG,
              canceled: false,
              memo: undefined,
              args: undefined
            };
            var x4 = {
              axis: undefined,
              'xy': [0x0, 0x0],
              vxvy: [0x0, 0x0],
              velocity: 0x0,
              distance: 0x0
            };
            var x7 = {
              hovering: false,
              scrolling: false,
              wheeling: false,
              dragging: false,
              moving: false,
              pinching: false,
              touches: 0x0,
              buttons: 0x0,
              down: false,
              shiftKey: false,
              altKey: false,
              metaKey: false,
              ctrlKey: false
            };
            var x8 = {
              'ti': true,
              'ei': false,
              tap: false,
              swipe: [0x0, 0x0]
            };
            var x9 = {
              'da': [0x0, 0x0],
              vdva: [0x0, 0x0],
              origin: undefined,
              turns: 0x0
            };
            return {
              'shared': x7,
              'drag': iH(iH(iH({}, x3), x4), {}, x8),
              'pinch': iH(iH({}, x3), x9),
              'wheel': iH(iH({}, x3), x4),
              'move': iH(iH({}, x3), x4),
              'scroll': iH(iH({}, x3), x4)
            };
          }
          var iJ = function (x3) {
            return function (x4, x5, x6) {
              var x7 = x3 ? "addEventListener" : "removeEventListener";
              x5.forEach(function (x8) {
                var x9 = x8[0x0];
                var xq = x8[0x1];
                return x4[x7](x9, xq, x6);
              });
            };
          };
          var iS = iJ(true);
          var is = iJ(false);
          function iL(x3) {
            if ("touches" in x3) {
              var x4 = x3.touches;
              var x5 = x3.changedTouches;
              return x4.length > 0x0 ? x4 : x5;
            }
            return null;
          }
          function iz(x3) {
            var x4 = "buttons" in x3 ? x3.buttons : 0x0;
            var x5 = iL(x3);
            var x6 = x5 && x5.length || 0x0;
            var x7 = {
              touches: x6,
              down: x6 > 0x0 || x4 > 0x0,
              buttons: x4
            };
            return iH(x7, function (x8) {
              var x9 = {
                shiftKey: x8.shiftKey,
                altKey: x8.altKey,
                metaKey: x8.metaKey,
                ctrlKey: x8.ctrlKey
              };
              return x9;
            }(x3));
          }
          function ik(x3) {
            var x4 = x3.currentTarget;
            var x5 = x4.scrollX;
            var x6 = x4.scrollY;
            var x7 = x4.scrollLeft;
            var x8 = x4.scrollTop;
            var x9 = {
              values: [x5 || x7 || 0x0, x6 || x8 || 0x0]
            };
            return x9;
          }
          function iF(x3) {
            var x4 = {
              values: [x3.deltaX, x3.deltaY]
            };
            return x4;
          }
          function ip(x3) {
            var x4 = iL(x3);
            var x5 = x4 ? x4[0x0] : x3;
            var x6 = {
              values: [x5.clientX, x5.clientY]
            };
            return x6;
          }
          function im(x3) {
            var x4 = {
              values: [0x104 * x3.scale, x3.rotation]
            };
            return x4;
          }
          function iX(x3) {
            var x4 = x3.touches;
            var x5 = x4[0x1].clientX - x4[0x0].clientX;
            var x6 = x4[0x1].clientY - x4[0x0].clientY;
            return {
              'values': [Math.hypot(x5, x6), -0xb4 * Math.atan2(x5, x6) / Math.PI],
              'origin': [(x4[0x1].clientX + x4[0x0].clientX) / 0x2, (x4[0x1].clientY + x4[0x0].clientY) / 0x2]
            };
          }
          var iw = {
            lockDirection: false,
            axis: undefined,
            bounds: undefined
          };
          var iD = function () {
            var x3 = this;
            this.state = iP();
            this.timeouts = {};
            this.domListeners = [];
            this.windowListeners = {};
            this.bindings = {};
            this.clean = function () {
              x3.resetBindings();
              Object.values(x3.timeouts).forEach(clearTimeout);
              Object.keys(x3.windowListeners).forEach(function (x4) {
                return x3.removeWindowListeners(x4);
              });
            };
            this.resetBindings = function () {
              x3.bindings = {};
              var x4 = x3.getDomTarget();
              if (x4) {
                is(x4, x3.domListeners, x3.config.eventOptions);
                x3.domListeners = [];
              }
            };
            this.getDomTarget = function () {
              var x4 = x3.config.domTarget;
              return x4 && "current" in x4 ? x4.current : x4;
            };
            this.addWindowListeners = function (x4, x5) {
              if (x3.config.window) {
                x3.windowListeners[x4] = x5;
                iS(x3.config.window, x5, x3.config.eventOptions);
              }
            };
            this.removeWindowListeners = function (x4) {
              if (x3.config.window) {
                var x5 = x3.windowListeners[x4];
                if (x5) {
                  is(x3.config.window, x5, x3.config.eventOptions);
                  delete x3.windowListeners[x4];
                }
              }
            };
            this.addDomTargetListeners = function (x4) {
              Object.entries(x3.bindings).forEach(function (x5) {
                var x6 = x5[0x0];
                var x7 = x5[0x1];
                x3.domListeners.push([x6.substr(2).toLowerCase(), ix.apply(undefined, x7)]);
              });
              iS(x4, x3.domListeners, x3.config.eventOptions);
            };
            this.addBindings = function (x4, x5) {
              (Array.isArray(x4) ? x4 : [x4]).forEach(function (x6) {
                if (x3.bindings[x6]) {
                  x3.bindings[x6].push(x5);
                } else {
                  x3.bindings[x6] = [x5];
                }
              });
            };
            this.getBindings = function () {
              var x4 = {};
              var x5 = x3.config.captureString;
              Object.entries(x3.bindings).forEach(function (x6) {
                var x7 = x6[0x0];
                var x8 = x6[0x1];
                var x9 = Array.isArray(x8) ? x8 : [x8];
                x4[x7 + x5] = ix.apply(undefined, x9);
              });
              return x4;
            };
            this.getBind = function () {
              if (x3.config.domTarget) {
                var x4 = x3.getDomTarget();
                if (x4) {
                  x3.addDomTargetListeners(x4);
                }
                return x3.clean;
              }
              return x3.getBindings();
            };
          };
          var iv = function () {
            function x6(x7, x8, x9) {
              var xq = this;
              if (undefined === x9) {
                x9 = [];
              }
              this.stateKey = x7;
              this.controller = x8;
              this.args = x9;
              this.debounced = true;
              this.setTimeout = function (xN, xQ) {
                if (undefined === xQ) {
                  xQ = 0x8c;
                }
                var xd = arguments.length;
                var xW = Array(xd > 0x2 ? xd - 0x2 : 0x0);
                for (var xb = 0x2; xb < xd; xb++) {
                  xW[xb - 0x2] = arguments[xb];
                }
                xq.controller.timeouts[xq.stateKey] = W.setTimeout.apply(W, [xN, xQ].concat(xW));
              };
              this.clearTimeout = function () {
                clearTimeout(xq.controller.timeouts[xq.stateKey]);
              };
              this.addWindowListeners = function (xN) {
                xq.controller.addWindowListeners(xq.stateKey, xN);
              };
              this.removeWindowListeners = function () {
                xq.controller.removeWindowListeners(xq.stateKey);
              };
              this.getStartGestureState = function (xN, xQ) {
                return iH(iH({}, iP()[xq.stateKey]), {}, {
                  'Xe': true,
                  'values': xN,
                  'initial': xN,
                  'offset': xq.state.offset,
                  'lastOffset': xq.state.offset,
                  'startTime': xQ.timeStamp
                });
              };
              this.rubberband = function (xN, xQ) {
                var xH = xq.config.bounds;
                return xN.map(function (xd, xW) {
                  return iN(xd, xH[xW][0x0], xH[xW][0x1], xQ[xW]);
                });
              };
              this.fireGestureHandler = function (xN) {
                if (xq.state.Ke) {
                  if (!xq.debounced) {
                    xq.state.Xe = false;
                    xq.clean();
                  }
                  return null;
                }
                var xQ = xq.state.Ze;
                var xH = xQ[0x0];
                var xd = xQ[0x1];
                if (!xN && false === xH && false === xd) {
                  return null;
                }
                var xW = xq.state;
                var xb = xW.Xe;
                var xy = xW.active;
                xq.state.active = xb;
                xq.state.first = xb && !xy;
                xq.state.last = xy && !xb;
                xq.controller.state.shared[xq.ingKey] = xb;
                var xG = iH(iH(iH({}, xq.controller.state.shared), xq.state), xq.mapStateValues(xq.state));
                var xx = xq.handler(xG);
                xq.state.memo = undefined !== xx ? xx : xq.state.memo;
                if (!xb) {
                  xq.clean();
                }
                return xG;
              };
            }
            var x4;
            var x5 = x6.prototype;
            x5.updateSharedState = function (x7) {
              Object.assign(this.controller.state.shared, x7);
            };
            x5.updateGestureState = function (x7) {
              Object.assign(this.state, x7);
            };
            x5.getGenericPayload = function (x7, x8) {
              var x9 = x7.timeStamp;
              var xq = x7.type;
              var xN = this.state;
              var xQ = xN.values;
              var xH = xN.startTime;
              var xd = {
                '$e': xq,
                event: x7,
                timeStamp: x9,
                elapsedTime: x8 ? 0x0 : x9 - xH,
                args: this.args,
                previous: xQ
              };
              return xd;
            };
            x5.checkIntentionality = function (x7) {
              var x8 = {
                'Ze': x7,
                'Ke': false
              };
              return x8;
            };
            x5.getMovement = function (x7, x8) {
              if (undefined === x8) {
                x8 = this.state;
              }
              var x9 = this.config;
              var xq = x9.initial;
              var xN = x9.threshold;
              var xQ = x9.rubberband;
              var xH = xN[0x0];
              var xd = xN[0x1];
              var xW = x8;
              var xb = xW.Qe;
              var xy = xW.Xe;
              var xG = xW.Ze;
              var xx = xW.lastOffset;
              var xU = xW.movement;
              var xR = xG[0x0];
              var xO = xG[0x1];
              var xM = this.getInternalMovement(x7, x8);
              var xP = xM[0x0];
              var xJ = xM[0x1];
              if (false === xR) {
                xR = Math.abs(xP) >= xH && (Math.sign ? Math.sign(xP) : +(xP > 0x0) - +(xP < 0x0) || +xP) * xH;
              }
              if (false === xO) {
                xO = Math.abs(xJ) >= xd && (Math.sign ? Math.sign(xJ) : +(xJ > 0x0) - +(xJ < 0x0) || +xJ) * xd;
              }
              var xS = this.checkIntentionality([xR, xO], [xP, xJ], x8);
              var xs = xS.Ze;
              var xf = xS.Ke;
              var xL = xs[0x0];
              var xz = xs[0x1];
              var xk = [xP, xJ];
              var xF = {
                'Je': xk,
                delta: [0x0, 0x0]
              };
              if (false !== xL && false === xG[0x0]) {
                xb[0x0] = ("function" == typeof xq ? xq() : xq)[0x0];
              }
              if (false !== xz && false === xG[0x1]) {
                xb[0x1] = ("function" == typeof xq ? xq() : xq)[0x1];
              }
              if (xf) {
                return iH(iH({}, xS), {}, xF);
              }
              var xp = [false !== xL ? xP - xL : ("function" == typeof xq ? xq() : xq)[0x0], false !== xz ? xJ - xz : ("function" == typeof xq ? xq() : xq)[0x1]];
              var xm = i1(xp, xx);
              var xX = xy ? xQ : [0x0, 0x0];
              xp = this.rubberband(i1(xp, xb), xX);
              return iH(iH({}, xS), {}, {
                'Qe': xb,
                'Je': xk,
                'movement': xp,
                'offset': this.rubberband(xm, xX),
                'delta': i2(xp, xU)
              });
            };
            x5.clean = function () {
              this.clearTimeout();
              this.removeWindowListeners();
            };
            if (x4 = [{
              'key': "config",
              'get': function () {
                return this.controller.config[this.stateKey];
              }
            }, {
              'key': "enabled",
              'get': function () {
                return this.controller.config.enabled && this.config.enabled;
              }
            }, {
              'key': "state",
              'get': function () {
                return this.controller.state[this.stateKey];
              }
            }, {
              'key': "handler",
              'get': function () {
                return this.controller.handlers[this.stateKey];
              }
            }]) {
              iQ(x6.prototype, x4);
            }
            return x6;
          }();
          var iC = function (x3) {
            function x4() {
              return x3.apply(this, arguments) || this;
            }
            id(x4, x3);
            var x5 = x4.prototype;
            x5.getInternalMovement = function (x6, x7) {
              return i2(x6, x7.initial);
            };
            x5.checkIntentionality = function (x6, x7, x8) {
              var x9 = x6;
              var xq = x9[0x0];
              var xN = x9[0x1];
              var xQ = false !== xq || false !== xN;
              var xH = x8.axis;
              var xd = false;
              if (xQ) {
                var xW = x7.map(Math.abs);
                var xb = xW[0x0];
                var xy = xW[0x1];
                var xG = this.config;
                var xx = xG.axis;
                var xU = xG.lockDirection;
                xH = xH || (xb > xy ? 'x' : xb < xy ? 'y' : undefined);
                if (xx || xU) {
                  if (xH) {
                    if (xx && xH !== xx) {
                      xd = true;
                    } else {
                      x6['x' === xH ? 0x1 : 0x0] = false;
                    }
                  } else {
                    x6 = [false, false];
                  }
                }
              }
              var xR = {
                'Ze': x6,
                'Ke': xd,
                axis: xH
              };
              return xR;
            };
            x5.getKinematics = function (x6, x7) {
              var x8 = this.state.timeStamp;
              var x9 = this.getMovement(x6, this.state);
              var xq = x9.Ke;
              var xN = x9.delta;
              var xQ = x9.movement;
              if (xq) {
                return x9;
              }
              var xH = i7(xQ, xN, x7.timeStamp - x8);
              var xd = {
                values: x6,
                delta: xN
              };
              return iH(iH(xd, x9), xH);
            };
            x5.mapStateValues = function (x6) {
              var x7 = {
                'xy': x6.values,
                vxvy: x6.velocities
              };
              return x7;
            };
            return x4;
          }(iv);
          var iE = function (x3) {
            function x4(x6, x7) {
              var x8;
              (x8 = x3.call(this, "drag", x6, x7) || this).ingKey = "dragging";
              x8.wasTouch = false;
              x8.isEventTypeTouch = function (x9) {
                return !!x9 && 0x0 === x9.indexOf("touch");
              };
              x8.dragShouldStart = function (x9) {
                var xq = iz(x9).touches;
                var xN = x8.state.$e;
                return !(!x8.controller.config.pointer && x8.isEventTypeTouch(xN) && !x8.isEventTypeTouch(x9.type) && Math.abs(x9.timeStamp - x8.state.startTime) < 0xc8) && x8.enabled && xq < 0x2;
              };
              x8.setPointers = function (x9) {
                var xq = x9.currentTarget;
                var xN = x9.pointerId;
                if (xq) {
                  xq.setPointerCapture(xN);
                }
                x8.updateGestureState({
                  'currentTarget': xq,
                  'pointerId': xN
                });
              };
              x8.removePointers = function () {
                var x9 = x8.state;
                var xq = x9.currentTarget;
                var xN = x9.pointerId;
                if (xq && xN) {
                  xq.releasePointerCapture(xN);
                }
              };
              x8.setListeners = function (x9) {
                x8.removeWindowListeners();
                var xq = x9 ? [["touchmove", x8.onDragChange], ["touchend", x8.onDragEnd], ["touchcancel", x8.onDragEnd]] : [["mousemove", x8.onDragChange], ["mouseup", x8.onDragEnd]];
                x8.addWindowListeners(xq);
              };
              x8.onDragStart = function (x9) {
                if (x8.dragShouldStart(x9)) {
                  if (x8.controller.config.pointer) {
                    x8.setPointers(x9);
                  } else {
                    x8.setListeners(x8.isEventTypeTouch(x9.type));
                  }
                  if (x8.config.delay > 0x0) {
                    x8.state.ei = true;
                    if ("function" == typeof x9.persist) {
                      x9.persist();
                    }
                    x8.setTimeout(function () {
                      return x8.startDrag(x9);
                    }, x8.config.delay);
                  } else {
                    x8.startDrag(x9);
                  }
                }
              };
              x8.onDragChange = function (x9) {
                if (!x8.state.canceled) {
                  if (x8.state.Xe) {
                    var xq = iz(x9);
                    if (xq.down) {
                      x8.updateSharedState(xq);
                      var xN = ip(x9).values;
                      var xQ = x8.getKinematics(xN, x9);
                      var xH = x8.state.ti;
                      if (xH && Math.hypot.apply(Math, xQ.Je) >= 0x3) {
                        xH = false;
                      }
                      x8.updateGestureState(iH(iH(iH({}, x8.getGenericPayload(x9)), xQ), {}, {
                        'ti': xH,
                        'cancel': function () {
                          return x8.onCancel();
                        }
                      }));
                      x8.fireGestureHandler();
                    } else {
                      x8.onDragEnd(x9);
                    }
                  } else if (x8.state.ei) {
                    x8.clearTimeout();
                    x8.startDrag(x9);
                  }
                }
              };
              x8.onDragEnd = function (x9) {
                var xq = {
                  down: false,
                  buttons: 0x0,
                  touches: 0x0
                };
                x8.state.Xe = false;
                x8.updateSharedState(xq);
                var xN = x8.state;
                var xQ = xN.ti;
                var xH = xN.values;
                var xd = xN.velocities;
                var xW = xd[0x0];
                var xb = xd[0x1];
                var xy = xN.movement;
                var xG = xy[0x0];
                var xx = xy[0x1];
                var xU = xN.Ze;
                var xR = xU[0x0];
                var xO = xU[0x1];
                var xM = iH(iH({}, x8.getGenericPayload(x9)), x8.getMovement(xH));
                var xP = xM.elapsedTime;
                var xJ = x8.config;
                var xS = xJ.swipeVelocity;
                var xs = xS[0x0];
                var xf = xS[0x1];
                var xL = xJ.swipeDistance;
                var xz = xL[0x0];
                var xk = xL[0x1];
                var xF = [0x0, 0x0];
                var xp = {
                  event: x9
                };
                if (xP < 0xdc) {
                  if (false !== xR && Math.abs(xW) > xs && Math.abs(xG) > xz) {
                    xF[0x0] = Math.sign ? Math.sign(xW) : +(xW > 0x0) - +(xW < 0x0) || +xW;
                  }
                  if (false !== xO && Math.abs(xb) > xf && Math.abs(xx) > xk) {
                    xF[0x1] = Math.sign ? Math.sign(xb) : +(xb > 0x0) - +(xb < 0x0) || +xb;
                  }
                }
                x8.updateGestureState(iH(iH(xp, xM), {}, {
                  'tap': xQ,
                  'swipe': xF
                }));
                x8.fireGestureHandler(x8.config.filterTaps && x8.state.ti);
              };
              x8.clean = function () {
                x3.prototype.clean.call(function (x9) {
                  if (undefined === x9) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  }
                  return x9;
                }(x8));
                x8.state.ei = false;
                if (x8.controller.config.pointer) {
                  x8.removePointers();
                }
              };
              x8.onCancel = function () {
                var x9 = {
                  canceled: true,
                  cancel: iG
                };
                var xq = {
                  down: false,
                  buttons: 0x0,
                  touches: 0x0
                };
                x8.updateGestureState(x9);
                x8.state.Xe = false;
                x8.updateSharedState(xq);
                requestAnimationFrame(function () {
                  return x8.fireGestureHandler();
                });
              };
              return x8;
            }
            id(x4, x3);
            var x5 = x4.prototype;
            x5.startDrag = function (x6) {
              var x7 = this;
              var x8 = ip(x6).values;
              this.updateSharedState(iz(x6));
              var x9 = iH(iH({}, this.getStartGestureState(x8, x6)), this.getGenericPayload(x6, true));
              this.updateGestureState(iH(iH(iH({}, x9), this.getMovement(x8, x9)), {}, {
                'cancel': function () {
                  return x7.onCancel();
                }
              }));
              this.fireGestureHandler();
            };
            x5.addBindings = function () {
              if (this.controller.config.pointer) {
                this.controller.addBindings("onPointerDown", this.onDragStart);
                this.controller.addBindings("onPointerMove", this.onDragChange);
                this.controller.addBindings(["onPointerUp", "onPointerCancel"], this.onDragEnd);
              } else {
                this.controller.addBindings(["onTouchStart", "onMouseDown"], this.onDragStart);
              }
            };
            return x4;
          }(iC);
          var iK = undefined !== W ? W : undefined;
          function iI(x3) {
            var x4 = x3.threshold;
            var x5 = undefined === x4 ? undefined : x4;
            var x6 = x3.rubberband;
            var x7 = undefined === x6 ? 0x0 : x6;
            var x8 = x3.enabled;
            var x9 = undefined === x8 || x8;
            var xq = x3.initial;
            if ("boolean" == typeof x7) {
              x7 = x7 ? 0.15 : 0x0;
            }
            if (undefined === x5) {
              x5 = 0x0;
            }
            return {
              'enabled': x9,
              'initial': undefined === xq ? [0x0, 0x0] : xq,
              'threshold': Array.isArray(x5) ? x5 : [x5, x5],
              'rubberband': Array.isArray(x7) ? x7 : [x7, x7]
            };
          }
          function ih(x3) {
            if (undefined === x3) {
              x3 = {};
            }
            var x4 = x3;
            var x5 = x4.axis;
            var x6 = x4.lockDirection;
            var x7 = x4.bounds;
            var x8 = undefined === x7 ? {} : x7;
            var x9 = iW(x4, ["axis", "lockDirection", "bounds"]);
            var xq = [[undefined !== x8.left ? x8.left : -Infinity, undefined !== x8.right ? x8.right : Infinity], [undefined !== x8.top ? x8.top : -Infinity, undefined !== x8.bottom ? x8.bottom : Infinity]];
            var xN = {
              axis: x5,
              lockDirection: x6
            };
            var xQ = {
              bounds: xq
            };
            return iH(iH(iH(iH({}, iI(x9)), iw), iO(xN, x3)), {}, xQ);
          }
          var iu = function (x3) {
            function x4() {
              return x3.apply(this, arguments) || this;
            }
            id(x4, x3);
            var x5 = x4.prototype;
            x5.getInternalMovement = function (x6, x7) {
              var x8 = x6[0x0];
              var x9 = x6[0x1];
              var xq = x7.values;
              var xN = x7.turns;
              var xQ = x7.initial;
              var xH = (x9 = undefined !== x9 ? x9 : xq[0x1]) - xq[0x1];
              var xd = Math.abs(xH) > 0x10e ? xN + (Math.sign ? Math.sign(xH) : +(xH > 0x0) - +(xH < 0x0) || +xH) : xN;
              return [x8 - xQ[0x0], x9 - 0x168 * xd - xQ[0x1]];
            };
            x5.getKinematics = function (x6, x7) {
              var x8 = this.state;
              var x9 = x8.timeStamp;
              var xq = x8.initial;
              var xN = this.getMovement(x6, this.state);
              var xQ = xN.delta;
              var xH = xN.movement;
              var xd = (x6[0x1] - xH[0x1] - xq[0x1]) / 0x168;
              var xW = i7(xH, xQ, x7.timeStamp - x9);
              var xb = {
                values: x6,
                delta: xQ,
                turns: xd
              };
              return iH(iH(xb, xN), xW);
            };
            x5.mapStateValues = function (x6) {
              var x7 = {
                'da': x6.values,
                vdva: x6.velocities
              };
              return x7;
            };
            return x4;
          }(iv);
          var iT = function (x3) {
            function x4(x5, x6) {
              var x7;
              (x7 = x3.call(this, "pinch", x5, x6) || this).ingKey = "pinching";
              x7.pinchShouldStart = function (x8) {
                var x9 = iz(x8).touches;
                return x7.enabled && 0x2 === x9;
              };
              x7.onPinchStart = function (x8) {
                if (x7.pinchShouldStart(x8)) {
                  var x9 = iX(x8);
                  var xq = x9.values;
                  var xN = x9.origin;
                  x7.updateSharedState(iz(x8));
                  var xQ = iH(iH({}, x7.getStartGestureState(xq, x8)), x7.getGenericPayload(x8, true));
                  x7.updateGestureState(iH(iH(iH({}, xQ), x7.getMovement(xq, xQ)), {}, {
                    'origin': xN,
                    'cancel': function () {
                      return x7.onCancel();
                    }
                  }));
                  x7.fireGestureHandler();
                }
              };
              x7.onPinchChange = function (x8) {
                var x9 = x7.state;
                var xq = x9.canceled;
                var xN = x9.timeStamp;
                var xQ = x9.Xe;
                if (!xq && xQ) {
                  var xH = iz(x8);
                  if (0x2 === xH.touches && x8.timeStamp !== xN) {
                    x7.updateSharedState(xH);
                    var xd = iX(x8);
                    var xW = xd.values;
                    var xb = xd.origin;
                    var xy = x7.getKinematics(xW, x8);
                    x7.updateGestureState(iH(iH(iH({}, x7.getGenericPayload(x8)), xy), {}, {
                      'origin': xb,
                      'cancel': function () {
                        return x7.onCancel();
                      }
                    }));
                    x7.fireGestureHandler();
                  }
                }
              };
              x7.onPinchEnd = function (x8) {
                var x9 = {
                  down: false,
                  touches: 0x0
                };
                var xq = {
                  event: x8
                };
                if (x7.state.active) {
                  x7.state.Xe = false;
                  x7.updateSharedState(x9);
                  x7.updateGestureState(iH(iH(xq, x7.getGenericPayload(x8)), x7.getMovement(x7.state.values)));
                  x7.fireGestureHandler();
                }
              };
              x7.onCancel = function () {
                var x8 = {
                  canceled: true,
                  cancel: iG
                };
                var x9 = {
                  down: false,
                  touches: 0x0
                };
                x7.state.Xe = false;
                x7.updateGestureState(x8);
                x7.updateSharedState(x9);
                requestAnimationFrame(function () {
                  return x7.fireGestureHandler();
                });
              };
              x7.onGestureStart = function (x8) {
                if (x7.enabled) {
                  x8.preventDefault();
                  var x9 = im(x8).values;
                  x7.updateSharedState(iz(x8));
                  var xq = iH(iH({}, x7.getStartGestureState(x9, x8)), x7.getGenericPayload(x8, true));
                  x7.updateGestureState(iH(iH(iH({}, xq), x7.getMovement(x9, xq)), {}, {
                    'cancel': function () {
                      return x7.onCancel();
                    }
                  }));
                  x7.fireGestureHandler();
                }
              };
              x7.onGestureChange = function (x8) {
                var x9 = x7.state;
                var xq = x9.canceled;
                var xN = x9.Xe;
                if (!xq && xN) {
                  x8.preventDefault();
                  var xQ = iz(x8);
                  x7.updateSharedState(xQ);
                  var xH = im(x8).values;
                  var xd = x7.getKinematics(xH, x8);
                  x7.updateGestureState(iH(iH(iH({}, x7.getGenericPayload(x8)), xd), {}, {
                    'cancel': function () {
                      return x7.onCancel();
                    }
                  }));
                  x7.fireGestureHandler();
                }
              };
              x7.onGestureEnd = function (x8) {
                var x9 = {
                  down: false,
                  touches: 0x0
                };
                x8.preventDefault();
                if (x7.state.active) {
                  x7.state.Xe = false;
                  x7.updateSharedState(x9);
                  x7.updateGestureState(iH(iH({
                    'event': x8
                  }, x7.getGenericPayload(x8)), x7.getMovement(x7.state.values)));
                  x7.fireGestureHandler();
                }
              };
              x7.updateTouchData = function (x8) {
                if (x7.enabled && 0x2 === x8.touches.length && x7.state.Xe) {
                  var x9 = iX(x8).origin;
                  x7.state.origin = x9;
                }
              };
              x7.wheelShouldRun = function (x8) {
                return x7.enabled && x8.ctrlKey;
              };
              x7.getWheelValuesFromEvent = function (x8) {
                var x9 = iF(x8).values[0x1];
                var xq = x7.state.values;
                var xN = xq[0x0];
                var xQ = xq[0x1];
                var xH = {
                  values: [xN - x9, undefined !== xQ ? xQ : 0x0],
                  origin: [x8.clientX, x8.clientY],
                  delta: [0x0, x9]
                };
                return xH;
              };
              x7.onWheel = function (x8) {
                if (x7.wheelShouldRun(x8)) {
                  x7.clearTimeout();
                  x7.setTimeout(x7.onWheelEnd);
                  if (x7.state.Xe) {
                    x7.onWheelChange(x8);
                  } else {
                    x7.onWheelStart(x8);
                  }
                }
              };
              x7.onWheelStart = function (x8) {
                var x9 = x7.getWheelValuesFromEvent(x8);
                var xq = x9.values;
                var xN = x9.delta;
                var xQ = x9.origin;
                if (!x7.controller.config.eventOptions.passive) {
                  x8.preventDefault();
                }
                x7.updateSharedState(iz(x8));
                var xH = iH(iH(iH({}, x7.getStartGestureState(xq, x8)), x7.getGenericPayload(x8, true)), {}, {
                  'initial': x7.state.values
                });
                x7.updateGestureState(iH(iH(iH({}, xH), x7.getMovement(xq, xH)), {}, {
                  'offset': xq,
                  'delta': xN,
                  'origin': xQ
                }));
                x7.fireGestureHandler();
              };
              x7.onWheelChange = function (x8) {
                var x9 = iz(x8);
                x7.updateSharedState(x9);
                var xq = x7.getWheelValuesFromEvent(x8);
                var xN = xq.values;
                var xQ = xq.origin;
                var xH = xq.delta;
                var xd = x7.getKinematics(xN, x8);
                var xW = {
                  origin: xQ,
                  delta: xH
                };
                x7.updateGestureState(iH(iH(iH({}, x7.getGenericPayload(x8)), xd), {}, xW));
                x7.fireGestureHandler();
              };
              x7.onWheelEnd = function () {
                x7.state.Xe = false;
                x7.updateGestureState(x7.getMovement(x7.state.values));
                x7.fireGestureHandler();
              };
              return x7;
            }
            id(x4, x3);
            x4.prototype.addBindings = function () {
              if (this.controller.config.domTarget && function () {
                try {
                  return "constructor" in GestureEvent;
                } catch (x5) {
                  return false;
                }
              }()) {
                this.controller.addBindings("onGestureStart", this.onGestureStart);
                this.controller.addBindings("onGestureChange", this.onGestureChange);
                this.controller.addBindings(["onGestureEnd", "onTouchCancel"], this.onGestureEnd);
                this.controller.addBindings(["onTouchStart", "onTouchMove"], this.updateTouchData);
              } else {
                this.controller.addBindings("onTouchStart", this.onPinchStart);
                this.controller.addBindings("onTouchMove", this.onPinchChange);
                this.controller.addBindings(["onTouchEnd", "onTouchCancel"], this.onPinchEnd);
                this.controller.addBindings("onWheel", this.onWheel);
              }
            };
            return x4;
          }(iu);
          var ig = function (x3) {
            function x4(x5, x6) {
              var x7;
              (x7 = x3.call(this, "wheel", x5, x6) || this).ingKey = "wheeling";
              x7.debounced = true;
              x7.wheelShouldRun = function (x8) {
                return (!x8.ctrlKey || !("pinch" in x7.controller.handlers)) && x7.enabled;
              };
              x7.getValuesFromEvent = function (x8) {
                var x9 = x7.state.values;
                return {
                  'values': i1(iF(x8).values, x9)
                };
              };
              x7.onWheel = function (x8) {
                if (x7.wheelShouldRun(x8)) {
                  x7.clearTimeout();
                  x7.setTimeout(x7.onWheelEnd);
                  if (x7.state.Xe) {
                    x7.onWheelChange(x8);
                  } else {
                    x7.onWheelStart(x8);
                  }
                }
              };
              x7.onWheelStart = function (x8) {
                var x9 = x7.getValuesFromEvent(x8).values;
                x7.updateSharedState(iz(x8));
                var xq = iH(iH(iH({}, x7.getStartGestureState(x9, x8)), x7.getGenericPayload(x8, true)), {}, {
                  'initial': x7.state.values
                });
                var xN = x7.getMovement(x9, xq);
                var xQ = xN.delta;
                x7.updateGestureState(iH(iH(iH({}, xq), xN), {}, {
                  'distance': Math.hypot.apply(Math, xQ),
                  'direction': i6(xQ)
                }));
                x7.fireGestureHandler();
              };
              x7.onWheelChange = function (x8) {
                var x9 = iz(x8);
                x7.updateSharedState(x9);
                var xq = x7.getValuesFromEvent(x8).values;
                var xN = x7.getKinematics(xq, x8);
                x7.updateGestureState(iH(iH({}, x7.getGenericPayload(x8)), xN));
                x7.fireGestureHandler();
              };
              x7.onWheelEnd = function () {
                var x8 = {
                  velocities: [0x0, 0x0],
                  velocity: 0x0
                };
                x7.state.Xe = false;
                x7.updateGestureState(iH(iH({}, x7.getMovement(x7.state.values)), {}, x8));
                x7.fireGestureHandler();
              };
              return x7;
            }
            id(x4, x3);
            x4.prototype.addBindings = function () {
              this.controller.addBindings("onWheel", this.onWheel);
            };
            return x4;
          }(iC);
          var iY = function (x3) {
            function x4(x5, x6) {
              var x7;
              (x7 = x3.call(this, "move", x5, x6) || this).ingKey = "moving";
              x7.debounced = true;
              x7.moveShouldRun = function () {
                return x7.enabled;
              };
              x7.onMove = function (x8) {
                if (x7.moveShouldRun()) {
                  x7.clearTimeout();
                  x7.setTimeout(x7.onMoveEnd);
                  if (x7.state.Xe) {
                    x7.onMoveChange(x8);
                  } else {
                    x7.onMoveStart(x8);
                  }
                }
              };
              x7.onMoveStart = function (x8) {
                var x9 = ip(x8).values;
                x7.updateSharedState(iz(x8));
                var xq = iH(iH({}, x7.getStartGestureState(x9, x8)), x7.getGenericPayload(x8, true));
                x7.updateGestureState(iH(iH({}, xq), x7.getMovement(x9, xq)));
                x7.fireGestureHandler();
              };
              x7.onMoveChange = function (x8) {
                var x9 = iz(x8);
                x7.updateSharedState(x9);
                var xq = ip(x8).values;
                var xN = x7.getKinematics(xq, x8);
                x7.updateGestureState(iH(iH({}, x7.getGenericPayload(x8)), xN));
                x7.fireGestureHandler();
              };
              x7.onMoveEnd = function () {
                var x8 = {
                  velocities: [0x0, 0x0],
                  velocity: 0x0
                };
                x7.state.Xe = false;
                x7.updateGestureState(iH(iH({}, x7.getMovement(x7.state.values)), {}, x8));
                x7.fireGestureHandler();
              };
              x7.onPointerEnter = function (x8) {
                x7.controller.state.shared.hovering = true;
                if (x7.controller.config.enabled) {
                  if (x7.controller.config.hover.enabled) {
                    var x9 = ip(x8).values;
                    var xq = iH(iH(iH(iH({}, x7.controller.state.shared), x7.state), x7.getGenericPayload(x8, true)), {}, {
                      'values': x9,
                      'active': true,
                      'hovering': true
                    });
                    x7.controller.handlers.hover(iH(iH({}, xq), x7.mapStateValues(xq)));
                  }
                  if ("move" in x7.controller.handlers) {
                    x7.onMoveStart(x8);
                  }
                }
              };
              x7.onPointerLeave = function (x8) {
                x7.controller.state.shared.hovering = false;
                if ("move" in x7.controller.handlers) {
                  x7.onMoveEnd();
                }
                if (x7.controller.config.hover.enabled) {
                  var x9 = ip(x8).values;
                  var xq = iH(iH(iH(iH({}, x7.controller.state.shared), x7.state), x7.getGenericPayload(x8)), {}, {
                    'values': x9,
                    'active': false
                  });
                  x7.controller.handlers.hover(iH(iH({}, xq), x7.mapStateValues(xq)));
                }
              };
              return x7;
            }
            id(x4, x3);
            x4.prototype.addBindings = function () {
              if (this.controller.config.pointer) {
                if ("move" in this.controller.handlers) {
                  this.controller.addBindings("onPointerMove", this.onMove);
                }
                if ("hover" in this.controller.handlers) {
                  this.controller.addBindings("onPointerEnter", this.onPointerEnter);
                  this.controller.addBindings("onPointerLeave", this.onPointerLeave);
                }
              } else {
                if ("move" in this.controller.handlers) {
                  this.controller.addBindings("onMouseMove", this.onMove);
                }
                if ("hover" in this.controller.handlers) {
                  this.controller.addBindings("onMouseEnter", this.onPointerEnter);
                  this.controller.addBindings("onMouseLeave", this.onPointerLeave);
                }
              }
            };
            return x4;
          }(iC);
          var il = function (x3) {
            function x4(x5, x6) {
              var x7;
              (x7 = x3.call(this, "scroll", x5, x6) || this).ingKey = "scrolling";
              x7.debounced = true;
              x7.scrollShouldRun = function () {
                return x7.enabled;
              };
              x7.onScroll = function (x8) {
                if (x7.scrollShouldRun()) {
                  x7.clearTimeout();
                  x7.setTimeout(x7.onScrollEnd);
                  if (x7.state.Xe) {
                    x7.onScrollChange(x8);
                  } else {
                    x7.onScrollStart(x8);
                  }
                }
              };
              x7.onScrollStart = function (x8) {
                var x9 = ik(x8).values;
                x7.updateSharedState(iz(x8));
                var xq = iH(iH(iH({}, x7.getStartGestureState(x9, x8)), x7.getGenericPayload(x8, true)), {}, {
                  'initial': x7.state.values
                });
                var xN = x7.getMovement(x9, xq);
                var xQ = xN.delta;
                x7.updateGestureState(iH(iH(iH({}, xq), xN), {}, {
                  'distance': Math.hypot.apply(Math, xQ),
                  'direction': i6(xQ)
                }));
                x7.fireGestureHandler();
              };
              x7.onScrollChange = function (x8) {
                var x9 = iz(x8);
                x7.updateSharedState(x9);
                var xq = ik(x8).values;
                var xN = x7.getKinematics(xq, x8);
                x7.updateGestureState(iH(iH({}, x7.getGenericPayload(x8)), xN));
                x7.fireGestureHandler();
              };
              x7.onScrollEnd = function () {
                var x8 = {
                  velocities: [0x0, 0x0],
                  velocity: 0x0
                };
                x7.state.Xe = false;
                x7.updateGestureState(iH(iH({}, x7.getMovement(x7.state.values)), {}, x8));
                x7.fireGestureHandler();
              };
              return x7;
            }
            id(x4, x3);
            x4.prototype.addBindings = function () {
              this.controller.addBindings("onScroll", this.onScroll);
            };
            return x4;
          }(iC);
          function iV(x3, x4) {
            if (undefined === x4) {
              x4 = {};
            }
            var x5 = G.useState(function () {
              return new Set(Object.keys(x3).map(function (xG) {
                return xG.replace(/End|Start/, '');
              }));
            })[0x0];
            var x6 = x4;
            var x7 = x6.drag;
            var x8 = x6.wheel;
            var x9 = x6.move;
            var xq = x6.scroll;
            var xN = x6.pinch;
            var xQ = x6.hover;
            var xH = function (xG) {
              if (undefined === xG) {
                xG = {};
              }
              var xx = xG;
              var xU = xx.eventOptions;
              var xR = (xU = undefined === xU ? {} : xU).passive;
              var xO = undefined === xR || xR;
              var xM = xU.capture;
              var xP = undefined !== xM && xM;
              var xJ = xU.pointer;
              var xS = undefined !== xJ && xJ;
              var xs = xx.window;
              var xf = undefined === xs ? iK : xs;
              var xL = xx.domTarget;
              var xz = undefined === xL ? undefined : xL;
              var xk = xx.enabled;
              var xF = undefined === xk || xk;
              var xp = {
                enabled: xF,
                domTarget: xz,
                window: xf,
                eventOptions: {},
                captureString: xP ? "Capture" : '',
                pointer: !!xS
              };
              xp.eventOptions.passive = !xz || !!xO;
              xp.eventOptions.capture = !!xP;
              return iH(iH({}, iW(xx, ["eventOptions", "window", "domTarget", "enabled"])), {}, xp);
            }(iW(x6, ["drag", "wheel", "move", "scroll", "pinch", "hover"]));
            var xd = [];
            var xW = {};
            var xb = iH({}, x3);
            var xy = {
              enabled: true
            };
            if (x5.has("onDrag")) {
              xd.push(iE);
              xW.drag = iA(x3, "onDrag", xb);
              xH.drag = function (xG) {
                if (undefined === xG) {
                  xG = {};
                }
                var xx = xG;
                var xU = xx.enabled;
                var xR = xx.threshold;
                var xO = xx.bounds;
                var xM = xx.rubberband;
                var xP = xx.initial;
                var xJ = iW(xx, ["enabled", "threshold", "bounds", "rubberband", "initial"]);
                var xS = xJ.swipeVelocity;
                var xs = undefined === xS ? 0.5 : xS;
                var xf = xJ.swipeDistance;
                var xL = undefined === xf ? 0x3c : xf;
                var xz = xJ.delay;
                var xk = undefined !== xz && xz;
                var xF = xJ.filterTaps;
                var xp = undefined !== xF && xF;
                var xm = xJ.axis;
                var xX = xJ.lockDirection;
                if (undefined === xR) {
                  xR = Math.max(0, xp ? 0x3 : 0x0, xX || xm ? 0x1 : 0x0);
                } else {
                  xp = true;
                }
                var xw = {
                  enabled: xU,
                  threshold: xR,
                  bounds: xO,
                  rubberband: xM,
                  axis: xm,
                  lockDirection: xX,
                  initial: xP
                };
                var xD = ih(iO(xw, xG));
                return iH(iH({}, xD), {}, {
                  'filterTaps': xp || xD.threshold[0x0] + xD.threshold[0x1] > 0x0,
                  'swipeVelocity': Array.isArray(xs) ? xs : [xs, xs],
                  'swipeDistance': Array.isArray(xL) ? xL : [xL, xL],
                  'delay': "number" == typeof xk ? xk : xk ? 0xb4 : 0x0
                });
              }(x7);
            }
            if (x5.has("onWheel")) {
              xd.push(ig);
              xW.wheel = iA(x3, "onWheel", xb);
              xH.wheel = ih(x8);
            }
            if (x5.has("onScroll")) {
              xd.push(il);
              xW.scroll = iA(x3, "onScroll", xb);
              xH.scroll = ih(xq);
            }
            if (x5.has("onMove")) {
              xd.push(iY);
              xW.move = iA(x3, "onMove", xb);
              xH.move = ih(x9);
            }
            if (x5.has("onPinch")) {
              xd.push(iT);
              xW.pinch = iA(x3, "onPinch", xb);
              xH.pinch = function (xG) {
                if (undefined === xG) {
                  xG = {};
                }
                var xx = xG;
                var xU = xx.distanceBounds;
                var xR = undefined === xU ? {} : xU;
                var xO = xx.angleBounds;
                var xM = undefined === xO ? {} : xO;
                var xP = iW(xx, ["distanceBounds", "angleBounds"]);
                var xJ = [[undefined !== xR.min ? xR.min : -Infinity, undefined !== xR.max ? xR.max : Infinity], [undefined !== xM.min ? xM.min : -Infinity, undefined !== xM.max ? xM.max : Infinity]];
                var xS = {
                  bounds: xJ
                };
                return iH(iH({}, iI(xP)), {}, xS);
              }(xN);
            }
            if (x5.has("onHover")) {
              if (!x5.has("onMove")) {
                xd.push(iY);
              }
              xW.hover = x3.onHover;
              xH.hover = iH(xy, xQ);
              delete xb.onHover;
            }
            return function (xG, xx, xU, xR) {
              var xO = G.useMemo(function () {
                var xM = new iD();
                return {
                  'nativeRefs': xR,
                  'current': xM,
                  'bind': function () {
                    xM.resetBindings();
                    var xP = arguments.length;
                    var xJ = Array(xP);
                    for (var xS = 0x0; xS < xP; xS++) {
                      xJ[xS] = arguments[xS];
                    }
                    var xs;
                    for (var xf = iy(xx); !(xs = xf()).done;) {
                      0x0;
                      new xs.value(xM, xJ).addBindings();
                    }
                    if (xO.nativeRefs) {
                      for (var xL in xO.nativeRefs) xM.addBindings(xL, xO.nativeRefs[xL]);
                    }
                    return xM.getBind();
                  }
                };
              }, []);
              xO.current.config = xU;
              xO.current.handlers = xG;
              xO.nativeRefs = xR;
              G.useEffect(function () {
                return xO.current.clean;
              }, []);
              return xO.bind;
            }(xW, xd, xH, xb);
          }
          function iA(x3, x4, x5) {
            var x6 = x4 + "Start";
            var x7 = x4 + "End";
            delete x5[x4];
            delete x5[x6];
            delete x5[x7];
            return function (x8) {
              var x9 = undefined;
              if (x8.first && x6 in x3) {
                x3[x6](x8);
              }
              if (x4 in x3) {
                x9 = x3[x4](x8);
              }
              if (x8.last && x7 in x3) {
                x3[x7](x8);
              }
              return x9;
            };
          }
          var iZ = {};
          var ic = {};
          var ij = {
            value: true
          };
          Object.defineProperty(ic, "__esModule", ij);
          var d0 = {
            display: "flex",
            width: "inherit",
            height: "50px",
            margin: "0 auto 5px auto",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px"
          };
          var d1 = {
            fontSize: "11px",
            textAlign: "center",
            wordBreak: "break-word"
          };
          var d2 = {
            width: "2px",
            height: "12px",
            marginLeft: "10px",
            marginRight: "10px"
          };
          var d3 = {
            color: "rgba(255, 255, 255, 0.4)"
          };
          var d4 = {
            backgroundColor: "#282833"
          };
          var d5 = {
            labels: d3,
            separator: d4
          };
          var d6 = __importDefault(G);
          var d7 = shell.I18n;
          ic["default"] = function (x3) {
            var x4 = x3.betSizeTitle ? x3.betSizeTitle : d7.t("History.HistoryBetSize");
            var x5 = x3.betLevelTitle ? x3.betLevelTitle : d7.t("History.HistoryBetLevel");
            var x7 = Object.assign({}, d1, d5.labels);
            var x8 = Object.assign({}, d2, d5.separator);
            x7.color = x3.labelColor ? x3.labelColor : x7.color;
            x8.backgroundColor = x3.seperatorColor ? x3.seperatorColor : x8.backgroundColor;
            var x9 = __assign({}, d0);
            var xq = {
              'id': "bet-size-label",
              style: x7
            };
            var xN = {
              'id': "separator",
              style: x8
            };
            var xQ = {
              'id': "bet-level-label",
              style: x7
            };
            if (x3.isRTL) {
              x9.direction = "rtl";
            }
            return d6["default"].createElement("div", {
              'id': "bet-information-container",
              'style': x9
            }, function (xH) {
              if (xH.totalRoundCount && xH.currentRoundCount) {
                var xd = xH.roundsTitlei18nKey ? xH.roundsTitlei18nKey : "History.HistoryDetailItemRoundLabel";
                var xW = d7.t(xd, {
                  'currCount': xH.currentRoundCount.toString(),
                  'maxCount': xH.totalRoundCount.toString()
                });
                var xb = xH.themeColor ? xH.themeColor : "#9C9B9B";
                var xy = {
                  color: xb
                };
                return d6["default"].createElement("div", {
                  'id': "rounds-label",
                  'style': Object.assign({}, d1, xy)
                }, xW);
              }
            }(x3), function (xH) {
              if (xH.totalRoundCount && xH.currentRoundCount) {
                var xd = Object.assign({}, d2, d5.separator);
                var xW = {
                  'id': "separator",
                  style: xd
                };
                return d6["default"].createElement("div", xW);
              }
            }(x3), d6["default"].createElement("div", xq, x4 + " " + x3.betSize), d6["default"].createElement("div", xN), d6["default"].createElement("div", xQ, x5 + " " + x3.betLevel));
          };
          var dQ = {};
          var dH = {
            value: true
          };
          Object.defineProperty(dQ, "__esModule", dH);
          var dd = {
            display: "flex",
            width: "inherit",
            height: "48px",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto"
          };
          var dW = {
            fontSize: "14px"
          };
          var db = {
            noComboContainer: dd,
            text: dW
          };
          var dy = {
            color: "#CCCCCC"
          };
          var dG = __importDefault(G);
          var dx = shell.I18n;
          dQ["default"] = function (x3) {
            var x4 = Object.assign({}, db.text, dy);
            var x5 = {
              'id': "no-winning-combination-container",
              style: db.noComboContainer
            };
            x4.color = x3.labelColor ? x3.labelColor : x4.color;
            return dG["default"].createElement("div", x5, dG["default"].createElement("div", {
              'id': "no-winning-combination-text",
              'style': x4
            }, dx.t("History.HistoryNoWinning")));
          };
          var dO = {};
          var dM = {};
          var dP = {};
          var dJ = {};
          var dS = {
            value: true
          };
          Object.defineProperty(dJ, "__esModule", dS);
          var ds = {
            writable: false,
            value: undefined,
            enumerable: false,
            configurable: false
          };
          function dL(x3, x4, x5) {
            var x6 = x3.length;
            for (var x7 = 0x0; x7 < x6; x7++) {
              var x8 = x3[x7];
              if (x8) {
                x8(x4, x5);
              }
            }
          }
          var dz = {
            value: true
          };
          dJ.unwatch = function (x3, x4, x5) {
            if ("object" != typeof x3 || null === x3) {
              throw Error("Invalid parameter at index 0");
            }
            if ("string" != typeof x4 || '' === x4) {
              throw Error("Invalid parameter at index 1");
            }
            var x6 = x3.watch_eventPool;
            if (x6) {
              var x7 = x6[x4];
              if (x7) {
                if (undefined === x5) {
                  x7.length = 0x0;
                } else {
                  var x8 = x7.indexOf(x5);
                  if (-0x1 !== x8) {
                    x7.splice(x8, 0x1);
                  }
                }
              }
            }
          };
          dJ.watch = function (x3, x4, x5) {
            if ("object" != typeof x3 || null === x3) {
              throw Error("Invalid parameter at index 0");
            }
            if ("string" != typeof x4 || '' === x4) {
              throw Error("Invalid parameter at index 1");
            }
            if ("function" != typeof x5) {
              throw Error("Invalid parameter at index 2");
            }
            var x6 = x3.watch_eventPool;
            if (!x6) {
              if (!Object.isExtensible(x3)) {
                throw Error("Object is not extensible");
              }
              x6 = ds.value = Object.create(null);
              Object.defineProperty(x3, "watch_eventPool", ds);
            }
            var x7 = x6[x4];
            if (!x7) {
              var x8 = Object.getOwnPropertyDescriptor(x3, x4);
              if (!x8) {
                throw Error("Object property not exists");
              }
              if (false === x8.writable || undefined !== x8.get && undefined === x8.set) {
                throw Error("Object property is readonly");
              }
              if (!x8.configurable) {
                throw Error("Object property is not configurable");
              }
              x7 = x6[x4] = [];
              (function (x9, xq, xN) {
                if (xN.writable) {
                  var xQ = xN.value;
                  xN.get = function () {
                    return xQ;
                  };
                  xN.set = function (xW) {
                    var xb = xQ;
                    xQ = xW;
                    dL(this.watch_eventPool[xq], xW, xb);
                  };
                  delete xN.value;
                  delete xN.writable;
                } else if (xN.get) {
                  var xH = xN.set;
                  xN.set = function (xW) {
                    xH.call(this, xW);
                    dL(this.watch_eventPool[xq], this[xq]);
                  };
                } else {
                  var xd = xN.set;
                  xN.set = function (xW) {
                    xd.call(this, xW);
                    dL(this.watch_eventPool[xq], xW);
                  };
                }
                Object.defineProperty(x9, xq, xN);
              })(x3, x4, x8);
            }
            if (-0x1 !== x7.indexOf(x5)) {
              throw Error("Watch callback exists");
            }
            x7.push(x5);
          };
          Object.defineProperty(dP, "__esModule", dz);
          var dF = new (function () {
            function x3() {
              var x4 = {
                isActive: false,
                title: '',
                desc: '',
                posY: 0x0
              };
              this.tooltipProps = x4;
            }
            x3.prototype.observe = function (x4, x5, x6) {
              var x7;
              var x9 = this;
              if (x6 && undefined !== this[x4]) {
                x5(this[x4], this);
              }
              x7 = this;
              return function (xq) {
                var xN = xq.bind(undefined, undefined);
                dJ.watch(x7, x4, xN);
              }(function (xq, xN, xQ) {
                if (!(xq || undefined === xN || JSON.stringify(xN) === JSON.stringify(xQ))) {
                  x5(xN, x9);
                }
              });
            };
            x3.prototype.dispose = function (x4) {
              dJ.unwatch(this, x4);
            };
            x3.prototype.update = function (x4) {
              this.tooltipProps = x4;
            };
            return x3;
          }())();
          var dp = {
            value: true
          };
          dP.tooltipViewModel = dF;
          Object.defineProperty(dM, "__esModule", dp);
          var dm = {
            width: "300px",
            height: "48px",
            display: "flex"
          };
          var dX = {
            width: "285px"
          };
          var dw = {
            width: "15px"
          };
          var dD = {
            transform: "scale(0.3333)",
            transformOrigin: "center left",
            opacity: "40%"
          };
          var dv = {
            wrappedContent: dm,
            childrenContent: dX,
            infoIconContent: dw,
            infoIcon: dD
          };
          var da = __importDefault(G);
          var dK = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.ii = undefined;
              x6.ni = false;
              return x6;
            }
            __extends(x4, x3);
            x4.prototype.componentDidMount = function () {
              this.ri();
            };
            x4.prototype.componentDidUpdate = function () {
              this.ri();
            };
            x4.prototype.ri = function () {
              var x5 = this;
              this.ni = false;
              clearTimeout(this.ii);
              this.ii = setTimeout(function () {
                x5.ni = true;
              }, 0o0);
            };
            x4.prototype.componentWillUnmount = function () {
              clearTimeout(this.ii);
            };
            x4.prototype.oi = function (x5, x6) {
              if (undefined === x6) {
                x6 = false;
              }
              var x7 = x6 ? x5.map(function (x8) {
                return shell.I18n.t(x8);
              }) : x5;
              if (this.props.isRTL) {
                x7 = x7.reverse();
              }
              return x7.join(" x ");
            };
            x4.prototype.ai = function (x5) {
              var x6 = this;
              if (this.ni) {
                var x7 = x5.currentTarget;
                var x8 = x7.parentNode;
                var x9 = Array.prototype.indexOf.call(x8.children, x7);
                var xq = 0x30 * (x8.children.length - 0x1 - x9);
                var xN = Object.keys(this.props.winCalculation);
                var xQ = xN.map(function (xd) {
                  return x6.props.winCalculation[xd];
                });
                var xH = {
                  'isActive': true,
                  'posY': xq,
                  'title': this.oi(xN, true),
                  'desc': this.oi(xQ)
                };
                dP.tooltipViewModel.currentTarget = x7;
                dP.tooltipViewModel.update(xH);
              }
            };
            x4.prototype.si = function (x5) {
              x5.currentTarget.style.opacity = "0.8";
            };
            x4.prototype.li = function (x5) {
              x5.currentTarget.style.opacity = '1';
            };
            x4.prototype.render = function () {
              var x5 = [];
              var x6 = {
                key: "wrapper-content",
                style: dv.childrenContent
              };
              var x7 = {
                key: "icon-content",
                style: dv.infoIconContent
              };
              var x8 = {
                className: "gh_basic_sprite gh_ic_nav_info_s",
                style: dv.infoIcon
              };
              x5.push(da["default"].createElement("div", x6, this.props.children));
              x5.push(da["default"].createElement("div", x7, da["default"].createElement("div", x8)));
              return da["default"].createElement("div", {
                'style': dv.wrappedContent,
                'onMouseDown': this.si.bind(this),
                'onMouseUp': this.li.bind(this),
                'onTouchStart': this.si.bind(this),
                'onTouchEnd': this.li.bind(this),
                'onClick': this.ai.bind(this)
              }, this.props.isRTL ? x5.reverse() : x5);
            };
            return x4;
          }(da["default"].Component);
          var dB = {
            value: true
          };
          dM["default"] = dK;
          Object.defineProperty(dO, "__esModule", dB);
          var dI = {
            display: "flex",
            width: "inherit",
            justifyContent: "space-between",
            alignItems: "center",
            height: "48px",
            margin: "0 auto"
          };
          var dh = {
            display: "flex",
            alignItems: "center",
            height: "inherit"
          };
          var du = {
            display: "flex",
            flexDirection: "column"
          };
          var dT = {
            width: "38px",
            height: "24px"
          };
          var dg = {
            width: "25px",
            fontSize: "14px",
            textAlign: "left"
          };
          var dY = {
            width: "100px",
            fontSize: "14px",
            textAlign: "right"
          };
          var dl = {
            width: "100px",
            fontSize: "11px",
            textAlign: "right"
          };
          var dV = {
            paylineContainer: dI,
            paylineNumberImageWrapper: dh,
            paylineLabels: du,
            paylineImage: dT,
            winLineLabel: dg,
            winValueLabel: dY,
            subValueLabel: dl
          };
          var dA = {
            color: "#CCCCCC"
          };
          var dZ = {
            color: "#CCCCCC"
          };
          var dc = {
            color: "#9C9B9B"
          };
          var dj = {
            winLineLabel: dA,
            winValueLabel: dZ,
            subValueLabel: dc
          };
          var W0 = __importDefault(G);
          var W1 = __importDefault(dM);
          dO["default"] = function (x3) {
            var x5 = Object.assign({}, dV.winLineLabel, dj.winLineLabel);
            var x6 = Object.assign({}, dV.winValueLabel, dj.winValueLabel);
            var x7 = __assign({}, dV.paylineContainer);
            x5.color = x3.winLineLabelColor ? x3.winLineLabelColor : x5.color;
            x6.color = x3.winValueLabelColor ? x3.winValueLabelColor : x6.color;
            if (x3.isRTL) {
              x7.direction = "rtl";
              x5.textAlign = "right";
              x6.textAlign = "left";
            }
            var x8 = {
              'id': "payline-container",
              style: x7
            };
            var x9 = {
              'id': "payline-number-sprite-wrapper",
              style: dV.paylineNumberImageWrapper
            };
            var xq = {
              'id': "win-line-number-label",
              style: x5
            };
            var xN = W0["default"].createElement("div", x8, W0["default"].createElement("div", x9, W0["default"].createElement("div", xq, ('0' + parseInt(x3.winLine, 0xa).toString()).slice(-0x2)), function (xQ) {
              var xH = xQ.paylineSpriteClassName;
              var xd = xQ.paylineImageMap;
              var xW = xQ.paylineImageStyle;
              var xb = xQ.winLine;
              var xy = xQ.isRTL;
              if (xd) {
                var xG = {
                  width: dV.paylineImage.width,
                  height: dV.paylineImage.height
                };
                var xx = xd[xb];
                var xU = xH || '';
                var xO = Object.assign({}, xG, xW || {});
                if (xy) {
                  xO.transformOrigin = "right";
                }
                return W0["default"].createElement("span", {
                  'className': xU + " " + xx,
                  'style': xO
                });
              }
              return null;
            }(x3)), W0["default"].createElement("div", {
              'id': "payline-labels",
              'style': dV.paylineLabels
            }, W0["default"].createElement("div", {
              'id': "payline-win-value-label",
              'style': x6
            }, x3.winValue), function (xQ) {
              var xH = xQ.subValue;
              var xd = xQ.subValueLabelColor;
              var xW = xQ.isRTL;
              var xb = Object.assign({}, dV.subValueLabel, dj.subValueLabel);
              xb.color = xd || xb.color;
              if (xW) {
                xb.textAlign = "left";
              }
              return xH ? W0["default"].createElement("div", {
                'id': "payline-subvalue-label",
                'style': xb
              }, W0["default"].createElement("bdi", null, xH)) : null;
            }(x3)));
            return x3.winCalculation ? W0["default"].createElement(W1["default"], {
              'isRTL': x3.isRTL,
              'winCalculation': x3.winCalculation
            }, xN) : xN;
          };
          var W4 = {};
          var W5 = {
            value: true
          };
          Object.defineProperty(W4, "__esModule", W5);
          var W6 = {
            display: "flex",
            width: "inherit",
            height: "32px",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto"
          };
          var W7 = {
            width: "120px"
          };
          var W8 = {
            textAlign: "center",
            width: "72px",
            fontSize: "11px"
          };
          var W9 = {
            payoutTitleContainer: W6,
            line: W7,
            text: W8
          };
          var Wq = {
            backgroundColor: "#282833",
            height: "2px"
          };
          var WN = {
            color: "#9C9B9B"
          };
          var WQ = {
            line: Wq,
            text: WN
          };
          var WH = __importDefault(G);
          W4["default"] = function (x3) {
            var x5 = Object.assign({}, W9.line, WQ.line);
            var x6 = Object.assign({}, W9.text, WQ.text);
            var x7 = {
              'id': "payout-title-container",
              style: W9.payoutTitleContainer
            };
            x5.backgroundColor = x3.lineColor ? x3.lineColor : x5.backgroundColor;
            x6.color = x3.labelColor ? x3.labelColor : x6.color;
            return WH["default"].createElement("div", x7, WH["default"].createElement("div", {
              'className': "line",
              'style': x5
            }), WH["default"].createElement("div", {
              'id': "payout-text",
              'style': x6
            }, shell.I18n.t("History.HistoryPayout")), WH["default"].createElement("div", {
              'className': "line",
              'style': x5
            }));
          };
          var Wb = {};
          var Wy = {
            value: true
          };
          Object.defineProperty(Wb, "__esModule", Wy);
          var WG = {
            display: "flex",
            width: "inherit",
            height: "50px",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center"
          };
          var Wx = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          };
          var WU = {
            textAlign: "center",
            display: "inline-table"
          };
          var WR = {
            textAlign: "center",
            fontSize: "11px"
          };
          var WO = {
            backgroundColor: "#24242E"
          };
          var WM = {
            color: "#9C9B9B"
          };
          var WP = {
            color: "#9C9B9B"
          };
          var WJ = {
            container: WO,
            valueLabel: WM,
            titleLabel: WP
          };
          var WS = {
            backgroundColor: "#262121"
          };
          var Ws = {
            color: "#A7A6A6"
          };
          var Wf = {
            color: "rgba(167,166,166, 0.5)"
          };
          var WL = {
            container: WS,
            valueLabel: Ws,
            titleLabel: Wf
          };
          var Wz = __importDefault(G);
          var Wk = shell.I18n;
          function Wv(x3) {
            var x4 = {
              width: x3.size,
              marginLeft: x3.marginLeft
            };
            var x5 = {
              fontSize: "11px"
            };
            var x6 = {
              fontSize: "12px"
            };
            var x7 = Object.assign({}, Wx, x4);
            var x8 = x3.useSmallFont ? x5 : x6;
            x8.lineHeight = x3.valueLineHeight ? x3.valueLineHeight : x8.fontSize;
            var x9 = x3.isCard ? WL : WJ;
            var xq = Object.assign({}, WU, x9.valueLabel);
            var xN = Object.assign({}, WR, x9.titleLabel);
            var xQ = {
              className: "transaction-detail-item",
              style: x7
            };
            var xH = {
              height: "23px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            };
            var xd = {
              'id': "detail-item-holder",
              style: xH
            };
            xq.color = x3.valueLabelColor ? x3.valueLabelColor : xq.color;
            xN.color = x3.keyLabelColor ? x3.keyLabelColor : xN.color;
            return Wz["default"].createElement("div", xQ, Wz["default"].createElement("div", xd, Wz["default"].createElement("div", {
              'id': x3.keyName + "-item-value",
              'style': Object.assign({}, xq, x8)
            }, x3.value)), Wz["default"].createElement("div", {
              'id': x3.keyName + "-item-key",
              'style': xN
            }, x3.keyName));
          }
          function WC(x3, x4) {
            if (undefined === x4) {
              x4 = 0xe;
            }
            if (x3.length > x4 && x3.indexOf(" ") < 0x0) {
              var x5 = Math.floor(x3.length / 0x2);
              return x3.slice(0, x5) + " " + x3.slice(x5, x3.length);
            }
            return x3;
          }
          Wb["default"] = function (x3) {
            var x4 = x3.isCard ? WL : WJ;
            var x5 = Object.assign({}, WG, x4.container);
            var x6 = x3.currencySymbol ? Wk.t("History.HistoryRecordPayout") + '(' + x3.currencySymbol + ')' : '' + Wk.t("History.HistoryRecordPayout");
            var x7 = x3.currencySymbol ? Wk.t("History.HistoryRecordWin") + '(' + x3.currencySymbol + ')' : '' + Wk.t("History.HistoryRecordWin");
            var x8 = x3.currencySymbol ? Wk.t("History.HistoryRecordBalance") + '(' + x3.currencySymbol + ')' : '' + Wk.t("History.HistoryRecordBalance");
            var x9 = x3.transactionId.length > 0xe || x3.betValue.length > 0xa || x3.profitValue.length > 0xa || x3.balance.length > 0x10;
            var xq = WC(x3.transactionId);
            x5.backgroundColor = x3.backgroundColor ? x3.backgroundColor : x5.backgroundColor;
            if (x3.isRTL) {
              x5.direction = "rtl";
            }
            return Wz["default"].createElement("div", {
              'id': "transaction-details-container",
              'style': x5
            }, Wz["default"].createElement(Wv, {
              'keyName': Wk.t("History.HistoryRecordTransaction"),
              'value': xq,
              'size': "27%",
              'useSmallFont': x9,
              'valueLineHeight': "12px",
              'isCard': x3.isCard,
              'keyLabelColor': x3.keyLabelColor,
              'valueLabelColor': x3.valueLabelColor
            }), Wz["default"].createElement(Wv, {
              'keyName': x6,
              'value': WC(x3.betValue, 0xb),
              'size': "18%",
              'marginLeft': "10px",
              'useSmallFont': x9,
              'valueLineHeight': "12px",
              'isCard': x3.isCard,
              'keyLabelColor': x3.keyLabelColor,
              'valueLabelColor': x3.valueLabelColor
            }), Wz["default"].createElement(Wv, {
              'keyName': x7,
              'value': WC(x3.profitValue, 12),
              'size': "20%",
              'marginLeft': "10px",
              'useSmallFont': x9,
              'valueLineHeight': "12px",
              'isCard': x3.isCard,
              'keyLabelColor': x3.keyLabelColor,
              'valueLabelColor': x3.valueLabelColor
            }), Wz["default"].createElement(Wv, {
              'keyName': x8,
              'value': WC(x3.balance, 0x11),
              'size': "27%",
              'marginLeft': "10px",
              'useSmallFont': x9,
              'valueLineHeight': "12px",
              'isCard': x3.isCard,
              'keyLabelColor': x3.keyLabelColor,
              'valueLabelColor': x3.valueLabelColor
            }));
          };
          var WE = {};
          var WK = {
            value: true
          };
          Object.defineProperty(WE, "__esModule", WK);
          var WB = {
            fontSize: "12px",
            textAlign: "left",
            padding: "0px 8px"
          };
          var WI = {
            color: "#808080",
            fontSize: "12px",
            textAlign: "left",
            padding: "0px 8px"
          };
          var Wh = {
            position: "relative",
            width: "300px",
            height: "inherit",
            alignSelf: "center"
          };
          var Wu = {
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
          var WT = {
            backgroundColor: "#464653",
            color: "#fff",
            borderRadius: "6px",
            padding: "5px"
          };
          var Wg = {
            descText: WB,
            titleText: WI,
            tooltip: Wh,
            tooltipArrow: Wu,
            tooltipToast: WT
          };
          var WY = __importDefault(G);
          function WA(x3) {
            var x4 = {
              isActive: false
            };
            if (dP.tooltipViewModel.currentTarget && dP.tooltipViewModel.currentTarget.contains(x3.target)) {
              x3.stopPropagation();
            }
            dP.tooltipViewModel.update(x4);
            document.body.removeEventListener("click", WA);
          }
          var WZ = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = {
                isActive: false,
                title: '',
                desc: '',
                posY: 0x0
              };
              x6.state = x7;
              return x6;
            }
            __extends(x4, x3);
            x4.prototype.componentDidUpdate = function () {
              if (this.state.isActive) {
                document.body.addEventListener("click", WA);
              }
            };
            x4.prototype.componentWillUnmount = function () {
              document.body.removeEventListener("click", WA);
              dP.tooltipViewModel.dispose("tooltipProps");
            };
            x4.prototype.componentDidMount = function () {
              var x5 = this;
              dP.tooltipViewModel.observe("tooltipProps", function (x6) {
                var x7 = {
                  isActive: x6.isActive,
                  title: x6.title,
                  desc: x6.desc,
                  posY: x6.posY
                };
                x5.setState(x7);
              });
            };
            x4.prototype.render = function () {
              var x5 = this.state.isActive ? "visible" : "hidden";
              var x6 = this.state.desc;
              var x7 = this.state.title;
              var x8 = this.state.posY;
              var x9 = __assign(__assign({}, Wg.tooltip), {
                'visibility': x5,
                'top': '-' + x8 + 'px'
              });
              var xq = __assign({}, Wg.titleText);
              var xN = __assign({}, Wg.descText);
              var xQ = __assign({}, Wg.tooltipArrow);
              if (this.props.isRTL) {
                xq.textAlign = "right";
                xN.textAlign = "right";
                var xH = xQ.left;
                xQ.right = xH;
                delete xQ.left;
              }
              var xd = {
                'id': "tooltip",
                style: x9
              };
              var xW = {
                style: xQ
              };
              var xb = {
                'id': "tooltip-toast",
                style: Wg.tooltipToast
              };
              var xy = {
                'id': "tooltip-title",
                style: xq
              };
              var xG = {
                'id': "tooltip-desc",
                style: xN
              };
              return WY["default"].createElement("div", xd, WY["default"].createElement("div", xW), WY["default"].createElement("div", xb, WY["default"].createElement("div", xy, x7), WY["default"].createElement("div", xG, x6)));
            };
            return x4;
          }(WY["default"].Component);
          WE["default"] = WZ;
          var Wc = {};
          var Wj = {
            value: true
          };
          !function (x3) {
            var x4;
            var x5 = {
              value: true
            };
            Object.defineProperty(x3, "__esModule", x5);
            (x4 = x3.WinCalculation || (x3.WinCalculation = {})).BET_SIZE = "History.HistoryTipsBetSize";
            x4.BET_LEVEL = "History.HistoryTipsBetLevel";
            x4.PAYOUT = "History.HistoryTipsPayout";
            x4.WAYS = "History.HistoryTipsWay";
            x4.COUNTS = "History.HistoryTipsSymbolCount";
            x4.MULTIPLIER = "History.HistoryTipsMultiplier";
          }(Wc);
          Object.defineProperty(iZ, "__esModule", Wj);
          var t0 = __importDefault(ic);
          iZ.BetInformation = t0["default"];
          var t1 = __importDefault(dQ);
          iZ.NoWinningCombination = t1["default"];
          var t2 = __importDefault(dO);
          iZ.Payline = t2["default"];
          var t3 = __importDefault(W4);
          iZ.PayoutTitle = t3["default"];
          var t4 = __importDefault(Wb);
          var t5 = iZ.TransactionDetails = t4["default"];
          var t6 = __importDefault(WE);
          iZ.Tooltip = t6["default"];
          var t7 = __importDefault(dM);
          iZ.TooltipWrapper = t7["default"];
          iZ.WinCalculation = Wc.WinCalculation;
          var t9;
          (t9 = {
            isDetailPageScroll: false,
            direction: 0x0
          }).isListPageScroll = false;
          var tN = {
            'observe': function (x3, x4) {
              return QA.observeCallback(t9, x3)(function (x5, x6, x7) {
                if (!(x5 || x6 === x7)) {
                  x4(x6);
                }
              });
            },
            'set': function (x3, x4) {
              t9[x3] = x4;
            }
          };
          var tQ = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = document.getElementById("game-history-container");
              var x8 = o6.isPortrait || o6.isMobile;
              var x9 = x8 ? x7.offsetHeight : 0x280;
              x6.ci = x8 ? 0x3e + oW() : 0x58;
              x6.hi = x8 ? 0x70 + oW() : 0x8a;
              x6.state = {
                'parentHeight': x9 - x6.ci - oR(true),
                'scrollHeight': x9 - x6.hi - oR(true)
              };
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              o6.context.event.on("Shell.Scaled", this.ui, this);
              if (o6.isMobile && od() && 0x5a === shell.environment.getOrientation()) {
                document.querySelectorAll(".rcs-custom-scroll .rcs-inner-container").forEach(function (x5) {
                  x5.style.webkitOverflowScrolling = "auto";
                });
              }
            };
            x4.prototype.componentWillUnmount = function () {
              o6.context.event.off("Shell.Scaled", this.ui, this);
            };
            x4.prototype.shouldComponentUpdate = function (x5, x6) {
              return x5.betDetailsModel !== this.props.betDetailsModel || x5.currentIndexViewed !== this.props.currentIndexViewed || x5.pageWidth !== this.props.pageWidth || x6.scrollHeight !== this.state.scrollHeight || x6.parentHeight !== this.state.parentHeight;
            };
            x4.prototype.render = function () {
              return G.createElement("div", {
                'id': "game-details-page-container",
                'style': {
                  'height': ''.concat(this.state.parentHeight, 'px')
                }
              }, this.di(this.props, this.state));
            };
            x4.prototype.di = function (x5, x6) {
              var x7 = this;
              var x8 = x5.currentIndexViewed;
              var x9 = x5.betDetailsModel;
              var xq = [];
              var xN = [];
              if (x9.length < 0x4) {
                xN = x9.map(function (xW, xb) {
                  return x7.fi(xb, x5, x6);
                });
              } else {
                if (0x0 === x8) {
                  xq = [0x0, 0x1, 0x2];
                } else if (x8 === x9.length - 0x1) {
                  var xQ = x9.length - 0x1;
                  xq = [xQ - 0x2, xQ - 0x1, xQ];
                } else {
                  xq = [x8 - 0x1, x8];
                  if (!(x8 + 0x1 > x9.length)) {
                    xq.push(x8 + 0x1);
                  }
                }
                xN = xq.map(function (xW) {
                  return x7.fi(xW, x5, x6);
                });
              }
              var xH = {
                position: "relative"
              };
              var xd = {
                'id': "game-pages-window",
                style: xH
              };
              return G.createElement("div", xd, xN);
            };
            x4.prototype.gi = function (x5) {
              var x6 = x5.totalBetAmount;
              var x7 = x5.totalWinLossAmount;
              var x8 = x5.balance;
              var x9 = x5.transactionId;
              return this.props.useDefaultTransactionHeader ? G.createElement(t5, {
                'isRTL': shell.isRTLLanguage(),
                'currencySymbol': QA.getDefaultCurrencyFormat().currencySymbol,
                'transactionId': x9 + '',
                'betValue': QA.formatCurrency(x6, ''),
                'profitValue': QA.formatCurrency(x7, ''),
                'balance': QA.formatCurrency(x8, ''),
                'backgroundColor': o6.appearanceHelper.transactionDetailsHeaderColor,
                'keyLabelColor': o6.appearanceHelper.transactionDetailsHeaderKeyFontColor,
                'valueLabelColor': o6.appearanceHelper.transactionDetailsHeaderValueFontColor,
                'isCard': o6.launchType === Qj.CARD
              }) : null;
            };
            x4.prototype.fi = function (x5, x6, x7) {
              var x8 = x6.gameDetailComponent;
              var x9 = x6.betDetailsModel;
              var xq = x6.pageWidth;
              var xN = x6.currentIndexViewed;
              var xQ = x7.parentHeight;
              var xH = x7.scrollHeight;
              var xd = x9[x5];
              var xW = {
                'width': "100%",
                'height': xQ,
                'position': "absolute",
                'left': ''.concat(x5 * xq, 'px')
              };
              var xb = {
                className: "reset"
              };
              if (shell.isRTLLanguage()) {
                xW.left = ''.concat(x5 * xq * -0x1, 'px');
              }
              return G.createElement("div", {
                'className': "game-list-page",
                'key': x5,
                'style': xW
              }, G.createElement("div", xb, this.gi(xd), G.createElement("div", {
                'className': "history regular",
                'style': {
                  'width': "inherit",
                  'height': ''.concat(xH, 'px')
                }
              }, this.pi(x8, xd, xN === x5))));
            };
            x4.prototype.pi = function (x5, x6, x7) {
              var x8 = x6.gameDetail;
              var x9 = o6.replayVersion ? 0x76 : 0x56;
              return G.createElement(oT["default"], {
                'heightRelativeToParent': "inherit",
                'onScroll': function () {
                  tN.set("isDetailPageScroll", true);
                }
              }, G.createElement(x5, {
                'data': x8,
                'isBO': false,
                'isCurrentPage': x7,
                'isRTL': shell.isRTLLanguage()
              }), G.createElement("div", {
                'id': "game-detail-padding",
                'style': {
                  'width': "inherit",
                  'height': ''.concat(x9, 'px')
                }
              }));
            };
            x4.prototype.ui = function (x5) {
              var x6 = x5.payload;
              var x7 = o6.isPortrait || o6.isMobile ? x6.height : 0x280;
              var x8 = x7 - this.ci - oR(true);
              var x9 = x7 - this.hi - oR(true);
              var xq = {
                parentHeight: x8,
                scrollHeight: x9
              };
              this.setState(xq);
            };
            return x4;
          }(G.Component);
          var tH = "land" === shell.environment.getOrientationMode() ? 0x14 : 0x46;
          var td = QA.timeoutCallback;
          function tW(x3) {
            var x4 = U(null);
            var x5 = Qg(R(0o0), 0x2);
            var x6 = x5[0x0];
            var x7 = x5[0x1];
            var x8 = Qg(R(x3.pageWidth), 2);
            var x9 = x8[0x0];
            var xq = x8[0x1];
            var xN = Qg(R(false), 2);
            var xQ = xN[0x0];
            var xH = xN[0x1];
            var xd = Qg(R(false), 0o2);
            var xW = xd[0x0];
            var xb = xd[0x1];
            var xy = Qg(R(false), 0x2);
            var xG = xy[0x0];
            var xx = xy[0x1];
            var xU = x6;
            var xR = 0x0 === x6;
            var xO = Qg(w(function () {
              var xf = {
                'x': -xU * x9
              };
              return xf;
            }), 2);
            var xM = xO[0x0].x;
            var xP = xO[0x1];
            x(function () {
              if (x6 !== x3.pageIndex) {
                x7(x3.pageIndex);
                xP({
                  'x': -x3.pageIndex * x3.pageWidth,
                  'config': H6,
                  'immediate': x3.noAnim
                });
                xH(true);
                td(0.3)(function () {
                  xH(false);
                  xx(false);
                });
              }
              if (x9 !== x3.pageWidth) {
                xq(x3.pageWidth);
                xP({
                  'x': -x3.pageIndex * x3.pageWidth,
                  'config': H6,
                  'immediate': true
                });
              }
            }, [x3.pageIndex, x3.pageWidth]);
            var xJ = {
              capture: false,
              passive: false
            };
            var xS = {
              swipeDistance: 0xa,
              swipeVelocity: 0.3
            };
            var xs = iV({
              'onDrag': function (xf) {
                return function (xL) {
                  var xz = Qg(xL.delta, 0x2);
                  var xk = xz[0x0];
                  var xF = xz[0x1];
                  var xp = Qg(xL.movement, 0x2);
                  var xm = xp[0x0];
                  var xX = xp[0x1];
                  var xw = Qg(xL.swipe, 0o2);
                  var xD = xw[0x0];
                  var xv = xw[0x1];
                  var xa = xL.velocity;
                  var xC = xL.down;
                  var xE = xL.cancel;
                  var xK = xL.canceled;
                  if (-0x1 !== xL.memo) {
                    var xB = Math.abs(xm);
                    var xI = Math.abs(xX);
                    var xh = xk;
                    var xu = xm;
                    var xT = xD;
                    if (!(!o6.isMobile || shell.environment.isMac() || o6.isPortrait || shell.environment.getOrientation() !== H2.PORTRAIT)) {
                      xB = Math.abs(xX);
                      xI = Math.abs(xm);
                      xh = xF;
                      xu = xX;
                      xT = xv;
                    }
                    if (shell.isRTLLanguage()) {
                      xh *= -0x1;
                      xu *= -0x1;
                      xT *= -0x1;
                    }
                    if (!xW && !xG && xI > tH) {
                      xb(true);
                    }
                    if (!xW && !xG && xB > 0x14) {
                      xx(true);
                    }
                    if (!xC || xK) {
                      if (xW) {
                        ;
                      } else if (xG) {
                        if (!xQ && (function (xj, U0) {
                          return xj >= U0 / 0x2;
                        }(xB, x9) || 0x0 !== xT)) {
                          var xg = xU;
                          xU = function (xj, U0, U1) {
                            var U2 = xj + U0;
                            return U2 > U1 - 0x1 ? U1 - 0x1 : U2 < 0x0 ? 0x0 === xj ? -0x1 : 0x0 : U2;
                          }(xU, xu < 0x0 ? 0x1 : -0x1, x3.betDetailsModel.length);
                          if (xg === xU) {
                            var xY = {
                              tension: 0xa3,
                              friction: 0x15,
                              velocity: 0xa * (xa < 0x1 ? 0x1 : xa),
                              clamp: xU !== x3.betDetailsModel.length - 0x1
                            };
                            var xV = {
                              'x': -xU * x9,
                              config: xY
                            };
                            xP(xV);
                          } else if (x3.updateIndexCallback && xU !== x3.pageIndex) {
                            x3.updateIndexCallback(xU);
                          }
                          return xU;
                        }
                        var xA = {
                          'x': -xU * x9,
                          config: H6,
                          immediate: false
                        };
                        xP(xA);
                      }
                      xb(false);
                      xx(false);
                    } else if (xW) {
                      ;
                    } else if (xG) {
                      var xZ = {
                        'x': xu + -xU * x9,
                        from: xu - xh + -xU * x9,
                        immediate: false
                      };
                      xP(xZ);
                      var xc = function (xj, U0, U1, U2) {
                        if (undefined === xj) {
                          xj = false;
                        }
                        return !!(xj && U0 > U2 / 0x2 || U1 > U2);
                      }(xR, xu, xB, x9);
                      if (xc && xC) {
                        xE();
                      }
                    }
                  }
                }(xf);
              }
            }, {
              'domTarget': x4,
              'eventOptions': xJ,
              'drag': xS
            });
            x(xs, [xs]);
            if (0x0 === x3.pageIndex && xU !== x3.pageIndex) {
              xU = 0x0;
            }
            return G.createElement(D.div, {
              'id': "game-detail-spring-wrapper",
              'ref': x4,
              'style': Object.assign({}, x3.style, {
                'transform': xM.interpolate(function (xf) {
                  var xL = shell.isRTLLanguage() ? -xf : xf;
                  return 'ie' === shell.environment.getBrowserBaseType() ? "translateX(".concat(xL, "px)") : "translate3d(".concat(xL, "px, 0, 0)");
                })
              })
            }, G.createElement(tQ, {
              'gameDetailComponent': x3.gameDetailComponent,
              'betDetailsModel': x3.betDetailsModel,
              'currentIndexViewed': xU,
              'useDefaultTransactionHeader': x3.useDefaultTransactionHeader,
              'pageWidth': x9
            }), x3.additionalComponents && x3.additionalComponents());
          }
          function tb() {
            var x3 = {
              backgroundColor: o6.appearanceHelper.highlightFontColor
            };
            var x5 = {
              'borderColor': "transparent transparent transparent ".concat(o6.appearanceHelper.themeColor)
            };
            var x6 = {
              className: "replay-icon-container"
            };
            var x7 = {
              className: "replay-icon-bg",
              style: x3
            };
            var x8 = {
              className: "replay-icon-triangle",
              style: x5
            };
            return G.createElement("div", x6, G.createElement("div", x7, G.createElement("div", x8)));
          }
          function ty(x3) {
            var x4 = {
              backgroundColor: o6.appearanceHelper.themeColor
            };
            var x5 = U(null);
            var x6 = U(null);
            var x8 = {
              'color': o6.appearanceHelper.highlightFontColor,
              'transform': "scale(".concat(x3.scale, ')')
            };
            x(function () {
              if (x5 && x5.current && x6 && x6.current) {
                var x9 = Math.round(x6.current.offsetWidth / 0x2);
                x5.current.style.marginLeft = '-'.concat(x9, 'px');
              }
            });
            return G.createElement("div", {
              'className': "replay-button-bg",
              'onClick': x3.onClickCallback,
              'style': x4
            }, G.createElement(tb, null), G.createElement("div", {
              'className': "replay-spin-label-wrapper",
              'ref': x6
            }, G.createElement("div", {
              'className': "replay-spin-label",
              'style': x8,
              'ref': x5
            }, x3.text)));
          }
          function tG(x3, x4) {
            return function () {
              var x5 = x3.betDetailsRaw;
              var x6 = x3.quitFunction;
              var x7 = x3.selectedTransactionId;
              var x8 = 0x0;
              x5.forEach(function (xN, xQ) {
                if (xN.tid === x7) {
                  x8 = xQ;
                }
              });
              var xq = {
                'replayType': x4,
                'selectedIndex': x8,
                'replayData': x5.map(function (xN) {
                  return xN.gd;
                })
              };
              if (x6) {
                x6(function () {
                  var xN = {
                    actionName: "StartReplay"
                  };
                  o6.context.emit("Analytics.Event", xN);
                  o6.context.emit("Game.RequestReplay", xq);
                });
              }
            };
          }
          function tx(x3) {
            var x4 = function (xq) {
              return xq.betDetailsRaw.length > 0x1 && o6.replayVersion > 0x1;
            }(x3);
            var x5 = Qg(R(1), 2);
            var x6 = x5[0x0];
            var x7 = x5[0x1];
            x(function () {
              var xq = document.querySelectorAll(".replay-spin-label");
              var xN = document.querySelectorAll(".replay-spin-label-wrapper")[0x0].offsetWidth - 0x5;
              xq.forEach(function (xQ) {
                if (xQ.offsetWidth > xN) {
                  var xH = xN / xQ.offsetWidth;
                  if (xH < x6) {
                    x7(xH);
                  }
                }
              });
            });
            var x8 = {
              justifyContent: x4 ? "space-between" : "center"
            };
            if (o6.isEnableVRF()) {
              x8.bottom = ''.concat(oR(true), 'px');
            }
            return G.createElement("div", {
              'id': "replay-buttons-container",
              'style': x8
            }, x4 && G.createElement(ty, {
              'onClickCallback': tG(x3, "Round"),
              'scale': x6,
              'text': shell.I18n.t("History.HistoryReplayRound")
            }), G.createElement(ty, {
              'onClickCallback': tG(x3, "Spin"),
              'scale': x6,
              'text': shell.I18n.t("History.HistoryReplaySpin")
            }));
          }
          if ("undefined" != typeof NodeList && NodeList.prototype && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = Array.prototype.forEach;
          }
          var tU = {
            position: "absolute"
          };
          var tR = {
            position: "absolute",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat"
          };
          var tO = {
            width: "65px",
            height: "71px"
          };
          var tM = {
            width: "73px",
            height: "83px"
          };
          var tP = y("BetDetailModel", function (x3) {
            var x4 = x3.bl;
            var x5 = x3.bt;
            var x6 = x3.gd;
            var x7 = x3.ib;
            var x8 = x3.tba;
            var x9 = x3.tid;
            var xq = x3.twla;
            this.balance = x4;
            this.betTime = x5;
            this.transactionStartTime = x6 ? x6.tst : undefined;
            this.isBot = x7;
            this.totalBetAmount = x8;
            this.transactionId = x9;
            this.totalWinLossAmount = xq;
            this.gameDetail = JSON.parse(JSON.stringify(x6));
          });
          function tL(x3) {
            var x4 = URL.createObjectURL(o6.getImageMaskWithBlob("img/bar_shield_logo.png"));
            var x5 = QI(QI(QI({}, tR), tO), {
              'maskImage': "url('".concat(x4, "')"),
              'WebkitMaskImage': "url('".concat(x4, "')")
            });
            var x6 = QI(QI(QI({}, tU), tO), {
              'backgroundImage': "url('".concat(x4, "')")
            });
            var x7 = URL.createObjectURL(o6.getImageMaskWithBlob("img/bar_shield_golden_frame.png"));
            var x8 = QI(QI(QI({}, tR), tM), {
              'maskImage': "url('".concat(x7, "')"),
              'WebkitMaskImage': "url('".concat(x7, "')")
            });
            var x9 = QI(QI(QI({}, tU), tM), {
              'backgroundImage': "url('".concat(x7, "')")
            });
            var xq = {
              className: "gh-vrf-bar-logo-scale",
              style: x3.containerStyle
            };
            var xN = {
              style: x9
            };
            var xQ = {
              style: x6
            };
            var xH = {
              style: x5
            };
            x(function () {
              return function () {
                URL.revokeObjectURL(x4);
                URL.revokeObjectURL(x7);
              };
            }, []);
            return G.createElement("div", xq, G.createElement("div", xN, G.createElement("div", {
              'style': x8
            }, G.createElement("div", {
              'className': ''.concat("gh_vrf_sprite gh_bar_shield_golden_frame_shine", " gh-vrf-bar-frame-shine")
            }))), G.createElement("div", xQ, G.createElement("div", xH, G.createElement("div", {
              'className': ''.concat("gh_vrf_sprite gh_bar_shield_pg_shine", " gh-vrf-bar-logo-shine")
            }))));
          }
          var tz = {
            position: "absolute",
            bottom: "20px",
            backgroundColor: "#434350",
            boxShadow: "0 0 24px 0 rgba(0,0,0,0.20)",
            borderRadius: "8px",
            width: "328px",
            height: "58px",
            overflow: "hidden",
            transition: "height .5s ease-out .1s",
            pointerEvents: "auto"
          };
          var tk = {
            boxShadow: "0 0 24px 0 rgba(0,0,0,0.40)"
          };
          var tF = {
            width: "328px",
            height: "58px",
            display: "flex",
            alignItems: "center"
          };
          var tp = {
            display: "flex",
            transform: "scale(0.333)",
            overflow: "visible",
            alignItems: "center",
            justifyContent: "center"
          };
          var tm = {
            fontSize: "10px",
            color: "#FFFFFF",
            lineHeight: "12px",
            flex: 0x1
          };
          var tX = {
            width: "20px",
            height: "20px",
            padding: "0px 16px"
          };
          var tw = {
            backgroundColor: "#353541",
            borderRadius: "50%",
            height: "20px",
            width: "20px"
          };
          var tD = {
            transform: "scale(0.3) translate(-17px, -21px)"
          };
          var tv = {
            borderColor: "#6b6b74",
            borderWidth: "0 3px 3px 0"
          };
          var tC = {
            width: "10px",
            height: "10px",
            opacity: 0.5
          };
          var tE = {
            transformOrigin: "top left",
            transform: "scale(0.27)"
          };
          var tK = {
            width: "32px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            padding: "0px 2px 0px 13px"
          };
          var tB = {
            padding: "0px 0px 4px 8px"
          };
          var tI = {
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "14px",
            width: "153px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            direction: "ltr"
          };
          var th = {
            color: "#FFFFFF",
            fontSize: "10px",
            lineHeight: "12px",
            paddingLeft: "4px"
          };
          var tu = {
            container: tz,
            containerExpanded: tk,
            barContent: tF,
            iconContainer: tp,
            textDesc: tm,
            arrowSize: tX,
            arrowTint: tw,
            arrowPos: tD,
            arrowBorder: tv,
            lockerSize: tC,
            lockerSpriteImage: tE,
            barShieldAnim: tK,
            barTitle: tB,
            searchBar: tI,
            linkText: th
          };
          var tg = O(function (x3, x4) {
            var x5 = Qg(R(!!x3.defaultIsExpanded), 0x2);
            var x6 = x5[0x0];
            var x7 = x5[0x1];
            var x8 = Qg(R(0x0), 2);
            var x9 = x8[0x0];
            var xq = x8[0x1];
            var xN = U(null);
            var xQ = U(null);
            var xH = U(false);
            M(x4, function () {
              return {
                'updateState': function (xO) {
                  if (undefined !== xO.arrowAnimType) {
                    xq(xO.arrowAnimType);
                  }
                  if (undefined !== xO.isExpended) {
                    x7(xO.isExpended);
                  }
                }
              };
            });
            x(function () {
              if (xH.current) {
                if (x6) {
                  xN.current.style.height = ''.concat(x3.expandableHeight || 0x87, 'px');
                  xN.current.style.boxShadow = tu.containerExpanded.boxShadow;
                  if (0x1 === x9) {
                    xQ.current.className = "gh-arrow-anim-up";
                  } else if (0x2 === x9) {
                    xQ.current.className = "gh-arrow-rotate-up";
                  }
                } else {
                  xN.current.style.height = tu.container.height;
                  xN.current.style.boxShadow = tu.container.boxShadow;
                  if (0x1 === x9) {
                    xQ.current.className = "gh-arrow-anim-down";
                  } else if (0x2 === x9) {
                    xQ.current.className = "gh-arrow-rotate-down";
                  }
                }
              } else {
                if (0x0 === x9 && x6) {
                  xQ.current.className = "gh-arrow-default-up";
                } else if (!(0x0 !== x9 || x6)) {
                  xQ.current.className = "gh-arrow-default-down";
                }
                xH.current = true;
              }
            }, [x6]);
            var xd = Object.assign({}, tu.container);
            if (x6) {
              Object.assign(xd, {
                'height': ''.concat(x3.expandableHeight || 0x87, 'px'),
                'boxShadow': "0 0 24px 0 rgba(0,0,0,0.40)"
              });
            }
            var xW = {
              __html: x3.barTitle
            };
            var xb;
            var xy;
            var xG;
            var xx;
            xx = QI({}, tu.barShieldAnim);
            if (shell.isRTLLanguage()) {
              xx.padding = "0px 13px 0px 2px";
            }
            xy = QI({}, tu.textDesc);
            xG = QI({}, tu.barTitle);
            if (shell.isRTLLanguage()) {
              xG.padding = "0px 8px 4px 0px";
              xy.direction = "rtl";
            }
            xb = Object.assign({}, tu.arrowSize);
            var xU = [G.createElement("div", {
              'key': "barSheildAnim",
              'style': xx
            }, G.createElement(tL, {
              'containerStyle': tu.iconContainer
            })), G.createElement("div", {
              'key': "textDesc",
              'style': xy
            }, G.createElement("div", {
              'style': xG,
              'dangerouslySetInnerHTML': xW
            }), G.createElement("div", {
              'style': tu.searchBar
            }, G.createElement("div", {
              'style': tu.lockerSize
            }, G.createElement("div", {
              'className': "gh_vrf_sprite gh_locker",
              'style': tu.lockerSpriteImage
            })), G.createElement("span", {
              'style': tu.linkText
            }, "https://verify.pgsoft.com/"))), G.createElement("div", {
              'key': "arrow",
              'ref': xQ,
              'style': xb
            }, G.createElement("div", {
              'style': tu.arrowTint
            }, G.createElement("div", {
              'className': "gh-angle-wrapper",
              'style': tu.arrowPos
            }, G.createElement("div", {
              'className': "gh-angle-horizontal angle-down",
              'style': tu.arrowBorder
            }))))];
            var xR = {
              style: xd,
              ref: xN
            };
            if (shell.isRTLLanguage()) {
              xU = xU.reverse();
            }
            return G.createElement("div", xR, G.createElement("div", {
              'className': "gh-btn-opacity-effect",
              'style': tu.barContent,
              'onClick': function () {
                var xO = !x6;
                xq(0x1);
                x7(xO);
                x3.onButtonClicked(xO);
              }
            }, xU), x3.children);
          });
          tg.displayName = "VRFBar";
          var tY = {
            height: "inherit",
            width: "inherit",
            position: "absolute",
            bottom: 0x0,
            pointerEvents: "none",
            zIndex: 0x4,
            transform: "translateZ(1px)"
          };
          var tl = {
            backgroundColor: "rgb(41, 41, 52)",
            position: "absolute",
            width: "100%",
            height: "98px",
            bottom: "0px",
            display: "flex",
            justifyContent: "center"
          };
          var tV = {
            display: "flex",
            width: "inherit",
            flexDirection: "column",
            alignItems: "center"
          };
          var tA = {
            width: "296px",
            height: "32px",
            background: "#3E3E4A",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center"
          };
          var tZ = {
            fontSize: "10px",
            lineHeight: "12px",
            color: "rgba(255,255,255,0.5)",
            paddingLeft: "14px"
          };
          var tc = {
            fontSize: "10px",
            lineHeight: "12px",
            color: "#FFFFFF"
          };
          var tj = {
            backgroundColor: "#FFFFFF",
            width: "1px",
            height: "12px",
            opacity: 0.08,
            margin: "0px 14px"
          };
          var b0 = {
            display: "flex",
            width: "296px",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10px",
            paddingTop: "10px"
          };
          var b1 = {
            flex: 0x1
          };
          var b2 = {
            opacity: 0.5,
            color: "#FFFFFF",
            fontSize: "10px",
            lineHeight: "12px"
          };
          var b3 = {
            color: "#F5AC58",
            fontSize: "10px",
            lineHeight: "12px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "200px",
            textOverflow: "ellipsis",
            direction: "ltr"
          };
          var b4 = {
            backgroundColor: "#F5AC58",
            borderRadius: "20px",
            fontSize: "11px",
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: "30px",
            width: "144px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          };
          var b5 = {
            transformOrigin: "top left",
            transform: "scale(0.4)"
          };
          var b6 = {
            width: "16px",
            height: "16px"
          };
          var b7 = {
            position: "absolute",
            backgroundColor: "#30303C",
            boxShadow: "0 6px 6px 0 rgba(0, 0, 0, 0.10)",
            borderRadius: "4px",
            fontSize: "10px",
            lineHeight: "24px",
            textAlign: "center",
            padding: "0px 12px",
            top: "66px",
            right: "16px",
            color: "#FFFFFF"
          };
          var b8 = {
            container: tY,
            barPosition: tl,
            linkContainer: tV,
            content: tA,
            contentDescLeft: tZ,
            contentDescRight: tc,
            contentSeperator: tj,
            bottomContent: b0,
            bottomContentLeft: b1,
            bottomContentDesc1: b2,
            bottomContentDesc2: b3,
            buttonVerify: b4,
            spriteImage: b5,
            buttonCopy: b6,
            copyToast: b7
          };
          var b9 = shell.I18n;
          function bN(x3) {
            var x4 = {
              id1: null,
              id2: null
            };
            var x5 = 0x2 === o6.verificationState;
            var x6 = Qg(R(x5), 0x2);
            var x7 = x6[0x0];
            var x8 = x6[0x1];
            var x9 = Qg(R(0o0), 0x2);
            var xq = x9[0x0];
            var xN = x9[0x1];
            var xQ = Qg(R(false), 0o2);
            var xH = xQ[0x0];
            var xd = xQ[0x1];
            var xW = U();
            var xb = U(false);
            var xy = U(null);
            var xG = U(x4);
            x(function () {
              if (x5) {
                o6.verificationState = 0x3;
              }
              tN.set("isDetailPageScroll", false);
              var xv = tN.observe("isDetailPageScroll", function (xa) {
                var xC = {
                  isExpended: false,
                  arrowAnimType: 0x2
                };
                if (xa) {
                  xW.current.updateState(xC);
                }
              });
              return function () {
                W.clearTimeout(xG.current.id1);
                W.clearTimeout(xG.current.id2);
                xv();
              };
            }, []);
            x(function () {
              if (xb.current) {
                xy.current.className = xH ? "gh-copy-anim-default gh-copy-anim-show" : "gh-copy-anim-default gh-copy-anim-hide";
              } else {
                xb.current = true;
              }
            }, [xH]);
            var xx = o6.getVRFLink(x3.selectedTransactionId);
            var xU = QI(QI({}, b8.bottomContentDesc2), {
              'color': o6.appearanceHelper.themeColor
            });
            var xR = QI(QI({}, b8.buttonVerify), {
              'backgroundColor': o6.appearanceHelper.themeColor
            });
            function xX() {
              xN(0x2);
            }
            function xw() {
              xN(0x0);
            }
            function xD() {
              oU(xx);
              xd(true);
              xG.current.id2 = W.setTimeout(function () {
                xd(false);
              }, 0x7d0);
            }
            var xO = oO(b9.t("History.HistoryVrfBarTitle2"), o6.appearanceHelper.themeColor);
            var xM = QI(QI({}, b8.barPosition), {
              'backgroundColor': o6.appearanceHelper.footerBarColor
            });
            var xP = QI({}, b8.content);
            var xJ = QI({}, b8.contentDescLeft);
            var xS = {
              style: b8.container
            };
            var xs = {
              key: "verification",
              style: xM
            };
            var xf = {
              style: b8.linkContainer
            };
            var xL = {
              style: b8.contentSeperator
            };
            var xz = {
              style: b8.contentDescRight
            };
            var xk = {
              style: b8.bottomContent
            };
            var xF = {
              className: "gh-btn-loading"
            };
            var xp = {
              className: "gh-btn-loading"
            };
            var xm = {
              className: "gh-btn-loading"
            };
            if (shell.isRTLLanguage()) {
              xP.direction = "rtl";
              xJ.paddingLeft = "0px";
              xJ.paddingRight = "14px";
            }
            return G.createElement("div", xS, G.createElement("div", xs, G.createElement(tg, {
              'ref': xW,
              'defaultIsExpanded': x7,
              'expandableHeight': 0x8c,
              'barTitle': xO,
              'onButtonClicked': function (xv) {
                tN.set("isDetailPageScroll", false);
                x8(xv);
              }
            }, G.createElement("div", xf, G.createElement("div", {
              'style': xP
            }, G.createElement("div", {
              'style': xJ
            }, b9.t("History.HistoryVrfTransID")), G.createElement("div", xL), G.createElement("div", xz, x3.selectedTransactionId)), 0x2 !== xq ? G.createElement("div", xk, G.createElement("div", {
              'id': "gh-vrf-btn",
              'className': "gh-btn-opacity-effect",
              'style': xR,
              'onClick': function () {
                var xv = {
                  event: "verify_open_success"
                };
                var xa = {
                  event: "verify_open_failed"
                };
                if (0x1 !== xq) {
                  xN(1);
                  if (W.open(xx, "blank")) {
                    W.dataLayer.push(xv);
                    xG.current.id1 = W.setTimeout(xw, 0x7d0);
                  } else {
                    W.dataLayer.push(xa);
                    xG.current.id1 = W.setTimeout(xX, 0o3720);
                  }
                }
              }
            }, 0x1 === xq ? G.createElement(G.Fragment, null, G.createElement("div", xF), G.createElement("div", xp), G.createElement("div", xm)) : b9.t("History.HistoryVrfBtn"))) : function () {
              var xv = QI({}, b8.bottomContentLeft);
              if (shell.isRTLLanguage()) {
                xv.direction = "rtl";
              }
              var xa = [];
              var xC = {
                key: "bottomContentLeft",
                style: xv
              };
              var xE = {
                style: b8.bottomContentDesc1
              };
              var xK = {
                style: xU
              };
              var xB = {
                key: "gh-copy-button",
                'id': "gh-copy-btn",
                className: "gh-btn-opacity-effect",
                style: b8.buttonCopy,
                onClick: xD
              };
              var xI = {
                className: "gh_theme_sprite gh_ic_copy",
                style: b8.spriteImage
              };
              xa.push(G.createElement("div", xC, G.createElement("div", xE, b9.t("History.HistoryVrfBrowserErr")), G.createElement("div", xK, xx)));
              xa.push(G.createElement("div", xB, G.createElement("div", xI)));
              var xh = QI({}, b8.copyToast);
              var xu = {
                style: b8.bottomContent
              };
              if (shell.isRTLLanguage()) {
                xa = xa.reverse();
                xh.right = null;
                xh.left = "16px";
              }
              return G.createElement("div", xu, xa, G.createElement("div", {
                'ref': xy,
                'className': "gh-copy-anim-default",
                'style': xh
              }, b9.t("History.HistoryVrfLinkCopied")));
            }()))));
          }
          var bQ = QA.formatCurrency;
          var bH = QA.timeoutCallback;
          function bd(x3, x4) {
            return new Promise(function (x5, x6) {
              var x7 = new plugin.Loader();
              x7.onLoad = function (x8) {
                x5(x8.response);
              };
              x7.onError = function (x8) {
                x6(x8);
              };
              x7.load([{
                'src': x3,
                'type': x4,
                'maxAttemptCount': 0x0
              }]);
            });
          }
          function bW(x3) {
            if (o6.isMobile) {
              if (o6.isPortrait) {
                return 0x168;
              }
              var x4 = document.getElementById("game-history-container");
              return (x3 || x4.offsetWidth) - 0x33;
            }
            return 0x168;
          }
          var bb = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.mi = [];
              x6.vi = [];
              x6.bi = false;
              x6.yi = false;
              x6.Fe = o6.launchType === Qj.CARD;
              x6.ci = o6.isPortrait || o6.isMobile ? 0x3e + oW() : 0x58;
              var x7 = document.getElementById("game-history-container");
              var x8 = o6.isPortrait || o6.isMobile ? x7.offsetHeight : 0x280;
              var x9 = bW();
              x6.state = {
                'viewState': H0.HistoryDetails,
                'betDetailModel': undefined,
                'isLoading': true,
                'gameDetailComponent': null,
                'pages': 0x0,
                'pageIndex': 0x0,
                'parentHeight': x8 - x6.ci - oR(true),
                'noAnimation': false,
                'detailsPageWidth': x9
              };
              x6.xi = x6.xi.bind(x6);
              x6._i = x6._i.bind(x6);
              x6.wi = x6.wi.bind(x6);
              x6.ki = x6.ki.bind(x6);
              x6.Ci = x6.Ci.bind(x6);
              x6.Si = x6.Si.bind(x6);
              x6.Hi = x6.Hi.bind(x6);
              x6.zi = x6.zi.bind(x6);
              x6.Di = function () {
                return function () {
                  return shell.I18n.t("History.HistoryNormalSpin");
                };
              };
              x6.ji = function () {
                return function () {
                  return shell.I18n.t("History.HistoryNormalSpin");
                };
              };
              x6.Ni = function () {
                return function () {
                  return false;
                };
              };
              x6.Ti = function () {
                return true;
              };
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidUpdate = function (x5) {
              if (x5.betDetailsRaw !== this.props.betDetailsRaw && x5.gameId === this.props.gameId && this.state.gameDetailComponent) {
                var x6 = oC[this.props.gameId];
                var x7 = {
                  pageIndex: 0x0,
                  noAnimation: true,
                  viewState: H0.HistoryDetails
                };
                this.Oi(x6);
                this.setState(x7);
              }
            };
            x4.prototype.componentDidMount = function () {
              o6.context.event.on("Shell.Scaled", this.ui, this);
              this.Fi(this.props.gameId);
            };
            x4.prototype.componentWillUnmount = function () {
              var x5 = this.Ii;
              var x6 = this.Li;
              if (x5) {
                x5();
              }
              if (x6) {
                x6();
              }
              this.Ii = undefined;
              this.Li = undefined;
              o6.context.event.off("Shell.Scaled", this.ui, this);
            };
            x4.prototype.Pi = function () {
              if (this.state.isLoading || !o6.isEnableVRF()) {
                return null;
              }
              var x5 = this.state;
              var x6 = x5.pageIndex;
              var x7 = x5.betDetailModel[x6].transactionId;
              var x8 = {
                selectedTransactionId: x7
              };
              return G.createElement(bN, x8);
            };
            x4.prototype.render = function () {
              var x5 = this.state.viewState;
              var x6 = {
                'backgroundColor': o6.appearanceHelper.detailBackgroundColor,
                'color': o6.appearanceHelper.primaryFontColor,
                'overflow': x5 === H0.HistoryFreeSpinDetails ? '' : "hidden"
              };
              var x7 = "Safari" === shell.environment.getBrowserBaseType() ? "subpixel-antialiased" : "antialiased";
              var x8 = "Safari" === shell.environment.getBrowserBaseType() && o6.isMobile ? {} : {
                'WebkitFontSmoothing': x7
              };
              return G.createElement("div", {
                'id': "game-details-view-container",
                'style': QI(QI({}, x6), x8)
              }, this.Mi(this.state), this.Ri(this.state), this.Pi());
            };
            x4.prototype.wi = function (x5) {
              if (-0x1 === x5) {
                if (this.props.navLeftButtonCallback) {
                  this.props.navLeftButtonCallback();
                }
              } else {
                this.setState({
                  'pageIndex': x5,
                  'noAnimation': false
                });
              }
            };
            x4.prototype._i = function () {
              var x5 = this.state.pageIndex;
              if (x5 + 0x1 < this.state.pages) {
                this.wi(x5 + 0x1);
              }
            };
            x4.prototype.xi = function () {
              var x5 = this.state.pageIndex;
              if (x5 - 0x1 > -0x1) {
                this.wi(x5 - 0x1);
              }
            };
            x4.prototype.Hi = function () {
              var x5 = this.state;
              var x6 = x5.viewState;
              var x7 = x5.pageIndex;
              var x8 = this.mi[x7];
              var x9 = this.vi;
              if (this.Ni(x9, x8)() && x9.length > 0x1) {
                if (x6 === H0.HistoryDetails) {
                  this.setState({
                    'viewState': H0.HistoryFreeSpinDetails
                  });
                } else if (x6 === H0.HistoryFreeSpinDetails) {
                  this.zi(-0x1);
                }
              }
            };
            x4.prototype.zi = function (x5) {
              var x6 = this.state.pageIndex;
              var x7 = x5 > -0x1 ? this.mi.indexOf(x5) : x6;
              var x8 = {
                viewState: H0.HistoryDetails,
                pageIndex: x7,
                noAnimation: true
              };
              this.setState(x8);
            };
            x4.prototype.ki = function () {
              if (this.state.viewState === H0.HistoryFreeSpinDetails) {
                this.setState({
                  'viewState': H0.HistoryDetails,
                  'noAnimation': true
                });
              }
              if (this.props.navLeftButtonCallback) {
                this.props.navLeftButtonCallback();
              }
            };
            x4.prototype.Ci = function () {
              if (this.props.navRightButtonCallback) {
                this.props.navRightButtonCallback();
              }
            };
            x4.prototype.Fi = function (x5) {
              var x6 = this;
              var x7 = this.props.betDetailsRaw.length > 0x5 ? 0.5 : 0x0;
              this.Bi = undefined;
              if (this.state.isLoading) {
                this.Ai();
              } else {
                this.Ei();
              }
              this.Ii = bH(x7)(function () {
                x6.Wi(x5);
              });
            };
            x4.prototype.Wi = function (x5) {
              var x6 = oC[x5];
              var x7 = oE[x5];
              this.Ii = undefined;
              if (x6) {
                this.Yi(x6);
                this.Oi(x6);
                if (x7) {
                  this.setState({
                    'gameDetailComponent': x7
                  });
                  this.Vi(0.25);
                } else {
                  this.Gi(x6);
                }
              } else {
                this.Ui();
              }
            };
            x4.prototype.Ui = function () {
              var x5 = this;
              bd(shell.getGameContext().resource.resolveUrl(''.concat("history", "/index.json")), plugin.LoadType.Json).then(function (x6) {
                var x7 = x6;
                if (shell.isValidAssets(x6)) {
                  x7 = shell.parseAssets(x6);
                }
                x7.version;
                var x8;
                var x9 = x7.assets;
                var xq = x7.main;
                x8 = x9.assets;
                shell.getGameContext().resource.addAssets(x8);
                return bd(shell.getGameContext().resource.resolveUrl(xq), plugin.LoadType.SystemScript);
              }).then(function (x6) {
                var x7 = x6.GHBetDetailModule;
                oC[x5.props.gameId] = x7;
                x5.qi(x7);
              })["catch"](function () {
                var x6 = shell.Error;
                var x7 = shell.ClientError;
                var x8 = new x6(x7.Domain, x7.GameLoadResourceError);
                var x9 = {
                  gameDetailComponent: null
                };
                oQ("History Game Details Load Module Error", x8.domain, x8.code, undefined, "gameId: ".concat(x5.props.gameId));
                x5.Bi = x8;
                x5.setState(x9);
                x5.Xi();
              });
            };
            x4.prototype.qi = function (x5) {
              oC[this.props.gameId] = x5;
              this.Yi(x5);
              this.Oi(x5);
              this.Gi(x5);
            };
            x4.prototype.Gi = function (x5) {
              var x6 = this;
              x5.initialize(shell.getGameContext(), o6.operatorContext).then(function (x7) {
                oE[x6.props.gameId] = x7;
                x6.setState({
                  'gameDetailComponent': x7
                });
                x6.Xi();
              })["catch"](function (x7) {
                if (!(x7 instanceof shell.Error)) {
                  var x8 = shell.Error;
                  var x9 = shell.ClientError;
                  x7 = new x8(x9.Domain, x9.GameLoadResourceError);
                }
                var xq = {
                  gameDetailComponent: null
                };
                oQ("History Game Details Init Module Error", x7.domain, x7.code, undefined, "gameId: ".concat(x6.props.gameId));
                x6.Bi = x7;
                x6.setState(xq);
                x6.Xi();
              });
            };
            x4.prototype.Yi = function (x5) {
              this.Di = function (x6, x7) {
                return function () {
                  return x5.getNavTitle(x6, x7);
                };
              };
              this.ji = function (x6, x7) {
                return function (x8) {
                  return x5.getAdditionalSpinsTitle(x6, x8, x7);
                };
              };
              this.Ni = function (x6, x7) {
                return function () {
                  return x5.showNavArrowDropDown(x6, x7);
                };
              };
              this.Ti = function () {
                return !x5.useDefaultTransactionDetailsHeader || x5.useDefaultTransactionDetailsHeader();
              };
            };
            x4.prototype.Ki = function () {
              var x5 = [];
              this.props.betDetailsRaw.forEach(function (x6) {
                var x7 = new tP(x6);
                x5.push(x7);
              });
              return x5;
            };
            x4.prototype.Oi = function (x5) {
              var x6 = this.Ki();
              var x7 = this.Ki();
              var x8 = [];
              x7.forEach(function (x9, xq) {
                x8[xq] = xq;
              });
              if (x5.compileAllHistoryDataBecomePages) {
                x7 = x5.compileAllHistoryDataBecomePages(x7);
              }
              if (x5.compileAllHistoryDataForFreeSpinList) {
                x6 = x5.compileAllHistoryDataForFreeSpinList(x6);
                x8.length = 0x0;
                x7.forEach(function (x9, xq) {
                  if (isNaN(x9.customFreeSpinTitleIndex)) {
                    x6.forEach(function (xN, xQ) {
                      if (xN.betTime <= x9.betTime) {
                        x8[xq] = xQ;
                      }
                    });
                  } else {
                    x8[xq] = x9.customFreeSpinTitleIndex;
                  }
                });
              }
              this.mi = x8;
              this.vi = x6;
              this.setState({
                'betDetailModel': x7,
                'pages': x7.length
              });
            };
            x4.prototype.Zi = function () {
              var x5 = shell.isRTLLanguage() ? this.state.pages > 0x0 && this.state.pageIndex !== this.state.pages - 0x1 : this.state.pages > 0x0 && 0x0 !== this.state.pageIndex;
              var x6 = shell.isRTLLanguage() ? this._i : this.xi;
              if (x5) {
                var x7 = {
                  top: !o6.isPortrait && o6.isMobile ? "50%" : "calc(50% - 85px)",
                  backgroundColor: o6.appearanceHelper.pagesButtonBackgroundColor
                };
                var x8 = {
                  borderColor: o6.appearanceHelper.pagesButtonArrowColor
                };
                var xN = o6.isMobile ? "gh-angle-horizontal-mobile" : "gh-angle-horizontal";
                var xQ = {
                  'id': "game-details-left-arrow",
                  key: "game-details-left-arrow",
                  onClick: x6,
                  style: x7
                };
                var xH = {
                  transform: "translateX(4px) scale(0.7)"
                };
                var xd = {
                  className: "gh-angle-wrapper",
                  style: xH
                };
                return G.createElement("div", xQ, G.createElement("div", xd, G.createElement("div", {
                  'className': ''.concat(xN, " angle-left"),
                  'style': x8
                })));
              }
              return null;
            };
            x4.prototype.Ji = function () {
              var x5 = shell.isRTLLanguage() ? this.state.pages > 0x0 && 0x0 !== this.state.pageIndex : this.state.pages > 0x0 && this.state.pageIndex !== this.state.pages - 0x1;
              var x6 = shell.isRTLLanguage() ? this.xi : this._i;
              if (x5) {
                var x7 = {
                  top: !o6.isPortrait && o6.isMobile ? "50%" : "calc(50% - 85px)",
                  backgroundColor: o6.appearanceHelper.pagesButtonBackgroundColor
                };
                var x8 = {
                  borderColor: o6.appearanceHelper.pagesButtonArrowColor
                };
                var xN = o6.isMobile ? "gh-angle-horizontal-mobile" : "gh-angle-horizontal";
                var xQ = {
                  'id': "game-details-right-arrow",
                  key: "game-details-right-arrow",
                  onClick: x6,
                  style: x7
                };
                var xH = {
                  transform: "translateX(-4px) scale(0.7)"
                };
                var xd = {
                  className: "gh-angle-wrapper",
                  style: xH
                };
                return G.createElement("div", xQ, G.createElement("div", xd, G.createElement("div", {
                  'className': ''.concat(xN, " angle-right"),
                  'style': x8
                })));
              }
              return null;
            };
            x4.prototype.Mi = function (x5) {
              var x6 = x5.isLoading;
              var x7 = x5.pageIndex;
              var x8 = x5.viewState;
              if (x5.gameDetailComponent && !x6 && !this.Bi) {
                var x9 = this.mi[x7];
                var xq = this.vi;
                var xN = o6.isPortrait || o6.isMobile ? oW() : 0x0;
                var xQ = o6.isPortrait || o6.isMobile ? 0x3e : 0x58;
                var xH = this.Fe ? "game-list-nav-vertical-card" : '';
                var xd = o6.appearanceHelper.navBarColor;
                var xW = {
                  position: "absolute",
                  zIndex: 0x4,
                  height: "inherit",
                  width: "inherit"
                };
                var xb = {
                  style: xW
                };
                return G.createElement("div", {
                  'id': "game-detail-view-navbar-container",
                  'key': "game-detail-view-navbar-container",
                  'className': xH,
                  'style': {
                    'height': ''.concat(xQ, 'px'),
                    'paddingTop': ''.concat(xN, 'px'),
                    'backgroundColor': xd
                  }
                }, G.createElement("div", xb, G.createElement(oj, {
                  'showTitle': this.Di(xq, x9),
                  'titleClickCallback': this.Hi,
                  'currentState': x8,
                  'currentCalendarType': undefined,
                  'currentCalendarState': undefined,
                  'leftButtonClickedCallback': this.ki,
                  'rightButtonClickedCallback': this.Ci,
                  'showDropDownArrow': this.Ni(xq, x9),
                  'betTime': xq.length > 0x0 ? xq[x9].betTime : 0x0,
                  'transactionStartTime': xq.length > 0x0 ? xq[x9].transactionStartTime : 0x0
                })));
              }
            };
            x4.prototype.di = function (x5) {
              var x6 = x5.gameDetailComponent;
              var x7 = x5.pageIndex;
              var x8 = x5.betDetailModel;
              var x9 = x5.noAnimation;
              var xq = x5.detailsPageWidth;
              var xN = o6.isPortrait || o6.isMobile ? 0x1 : 1.6875;
              return G.createElement(tW, {
                'key': "game-detail-page-wrapper",
                'gameDetailComponent': x6,
                'betDetailsModel': x8,
                'pageIndex': x7,
                'updateIndexCallback': this.wi,
                'style': {
                  'position': "absolute",
                  'height': this.state.parentHeight / xN
                },
                'noAnim': x9,
                'useDefaultTransactionHeader': this.Ti(),
                'pageWidth': xq
              });
            };
            x4.prototype.Si = function (x5, x6) {
              return function () {
                var x7 = x5.betDetailsRaw;
                var x8 = x5.quitCallback;
                var x9 = x6.pageIndex;
                var xq = x6.betDetailModel[x9].transactionId;
                var xN = {
                  key: "game-replay-buttons-container",
                  selectedTransactionId: xq,
                  betDetailsRaw: x7,
                  quitFunction: x8,
                  gameId: x5.gameId
                };
                if (o6.replayVersion && !o6.isApiReplay) {
                  return G.createElement(tx, xN);
                }
              };
            };
            x4.prototype.Qi = function (x5) {
              var x6 = this;
              var x7 = x5.pageIndex;
              var x8 = x5.viewState;
              var x9 = x5.parentHeight;
              var xq = [];
              var xN = this.vi;
              xN.forEach(function (xG) {
                var xx = bQ(xG.totalWinLossAmount);
                xq.push(xx);
              });
              var xQ = this.mi[x7];
              var xH = x9 + oR(true);
              var xd = {
                bottom: "100%"
              };
              var xW = {
                bottom: '0%'
              };
              var xb = {
                bottom: "100%"
              };
              var xy = {
                key: "game-free-spin-list-view-transition",
                config: H6,
                items: x8,
                from: xd,
                enter: xW,
                leave: xb
              };
              return G.createElement(F, xy, function (xG) {
                return xG === H0.HistoryFreeSpinDetails && function (xx) {
                  var xU = {
                    left: '0',
                    position: "absolute",
                    width: "inherit",
                    height: xH,
                    zIndex: 0x5,
                    transform: "translate3d(0, 0, 0)"
                  };
                  return G.createElement(X.div, {
                    'style': QI(QI({}, xx), xU)
                  }, G.createElement(oY, {
                    'key': "game-free-spin-list-view",
                    'totalCount': xN.length,
                    'currentSelectedIndex': xQ,
                    'winLostAmountArrary': xq,
                    'getTitleText': x6.ji(xN, xQ),
                    'onClickCallback': x6.zi,
                    'onPageClickCallback': x6.zi,
                    'parentHeight': xH
                  }));
                };
              });
            };
            x4.prototype.Ri = function (x5) {
              var x6 = this;
              var x7 = x5.isLoading;
              var x8 = [];
              var x9 = {
                key: "loading-page",
                isHorizontal: !o6.isPortrait,
                isMobile: o6.isMobile,
                fromSide: true
              };
              return !x5.gameDetailComponent || x7 || this.Bi ? !x7 && this.Bi ? (x8.push(G.createElement(oa, {
                'key': "game-history-view-error",
                'error': this.Bi,
                'retryButtonCallback': function () {
                  x6.Fi(x6.props.gameId);
                },
                'closeButtonCallback': this.props.quitCallback,
                'orientation': "port"
              })), x8) : (x8.push(G.createElement(i0, x9)), x8) : (x8.push(this.di(x5)), x8.push(this.Zi()), x8.push(this.Ji()), x8.push(this.Si(this.props, this.state)()), x8.push(this.Qi(x5)), x8);
            };
            x4.prototype.ui = function (x5) {
              var x6 = x5.payload;
              var x7 = (o6.isPortrait || o6.isMobile ? x6.height : 0x280) - this.ci - oR(true);
              var x8 = bW(x6.width);
              var x9 = {
                parentHeight: x7,
                detailsPageWidth: x8
              };
              this.setState(x9);
            };
            x4.prototype.Ei = function () {
              var x5 = {
                isLoading: true
              };
              this.bi = false;
              this.yi = false;
              this.setState(x5);
              this.Ai();
            };
            x4.prototype.Ai = function (x5) {
              var x6 = this;
              if (undefined === x5) {
                x5 = 0x1;
              }
              this.Li = bH(x5)(function () {
                x6.bi = true;
                x6.Xi();
              });
            };
            x4.prototype.Vi = function (x5) {
              if (undefined === x5) {
                x5 = 0x0;
              }
              var x6 = this.Li;
              if (x6) {
                x6();
              }
              this.Li = undefined;
              this.Ai(x5);
            };
            x4.prototype.Xi = function () {
              var x5 = {
                isLoading: false
              };
              this.yi = true;
              if (this.bi && this.yi) {
                this.setState(x5);
              }
            };
            return x4;
          }(G.PureComponent);
          var by = shell.I18n;
          function bG(x3) {
            var x4 = o6.displayConfig;
            var x5 = x4.listHeaderLabelCol1;
            var x6 = x4.listHeaderLabelCol2;
            var x7 = x4.listHeaderLabelCol3;
            var x8 = x4.listHeaderLabelCol4;
            var x9 = [];
            var xq = {
              className: "game-list-nav-table-item",
              key: "game-list-nav-table-item-custom"
            };
            var xN = {
              className: "game-list-nav-table-item",
              key: "game-list-nav-table-item-time"
            };
            var xQ = {
              className: "game-list-nav-table-item",
              key: "game-list-nav-table-item-date"
            };
            if (x5) {
              x9.push(G.createElement("div", xq, x5));
            } else {
              x9.push(G.createElement("div", xN, by.t("History.HistoryMainPageTime")));
              x9.push(G.createElement("div", xQ, oN(new Date().getTime())));
            }
            var xH = x6 || by.t("History.HistoryMainSpinTypeTime");
            var xd = x7 || (x3.currencySymbol ? ''.concat(by.t("History.HistoryMainPagePayout"), '(').concat(x3.currencySymbol, ')') : ''.concat(by.t("History.HistoryMainPagePayout")));
            var xW = x8 || (x3.currencySymbol ? ''.concat(by.t("History.HistoryMainPageWin"), '(').concat(x3.currencySymbol, ')') : ''.concat(by.t("History.HistoryMainPageWin")));
            var xb = o6.isPortrait ? "game-list-nav-table-header-vertical" : o6.isMobile ? "game-list-nav-table-header-horizontal-mobile" : "game-list-nav-table-header-horizontal";
            var xy = {
              'color': o6.appearanceHelper.listHeaderFontColor,
              'backgroundColor': o6.appearanceHelper.listHeaderColor
            };
            var xG = {
              paddingLeft: "10px",
              paddingRight: "20px",
              direction: "rtl"
            };
            var xx = {
              'id': "game-list-nav-table-item-container"
            };
            var xU = {
              className: "game-list-nav-table-item"
            };
            var xR = {
              className: "game-list-nav-table-item"
            };
            var xO = {
              className: "game-list-nav-table-item"
            };
            if (shell.isRTLLanguage()) {
              xy = QI(QI({}, xy), xG);
            }
            return G.createElement("div", {
              'id': "game-list-nav-table-header",
              'className': xb,
              'style': xy
            }, G.createElement("div", xx, x9, " "), G.createElement("div", xU, " ", xH), G.createElement("div", xR, xd), G.createElement("div", xO, xW));
          }
          var bx = shell.I18n;
          var bU = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.$i = x6.$i.bind(x6);
              x6.tn = x6.tn.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.$i = function () {
              if (this.props.onItemClicked) {
                this.props.onItemClicked(this.props.calendarType);
              }
            };
            x4.prototype.render = function () {
              var x5 = o6.isPortrait ? "calendar-item-container-vertical calendar-item-container" : "calendar-item-container-horizontal calendar-item-container";
              var x6 = {
                backgroundColor: o6.appearanceHelper.calendarBackgroundColor
              };
              var x7 = {
                className: x5,
                onClick: this.$i,
                style: x6
              };
              return G.createElement("div", x7, G.createElement("div", {
                'className': "calendar-item-label",
                'style': this.en()
              }, this.tn()));
            };
            x4.prototype.en = function () {
              var x5 = {
                color: this.props.calendarType === this.props.currentCalendarType ? o6.isPortrait ? o6.appearanceHelper.themeColor : o6.appearanceHelper.highlightFontColor : o6.appearanceHelper.primaryFontColor
              };
              return x5;
            };
            x4.prototype.tn = function () {
              var x5;
              switch (this.props.calendarType) {
                case 0x1:
                default:
                  x5 = bx.t("History.HistoryCalenderToday");
                  break;
                case 0x2:
                  x5 = bx.t("History.HistoryCalenderWeek");
                  break;
                case 0x3:
                  x5 = bx.t("History.HistoryCalenderCustom");
              }
              return x5;
            };
            return x4;
          }(G.Component);
          var bR = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = document.getElementById("game-history-container");
              x6.state = {
                'backgroundHeight': x7.offsetHeight - (0x3e + oW())
              };
              x6.nn = x6.nn.bind(x6);
              x6.rn = x6.rn.bind(x6);
              x6.an = x6.an.bind(x6);
              x6.G = x6.G.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              o6.context.event.on("Shell.Scaled", this.ui, this);
            };
            x4.prototype.componentWillUnmount = function () {
              o6.context.event.off("Shell.Scaled", this.ui, this);
            };
            x4.prototype.nn = function () {
              this.props.onChangeCalendarTypeCallback(0x1);
            };
            x4.prototype.rn = function () {
              this.props.onChangeCalendarTypeCallback(0x2);
            };
            x4.prototype.an = function () {
              this.props.onCalendarCustomClicked();
            };
            x4.prototype.G = function (x5, x6) {
              var x7 = {
                startDate: x5,
                endDate: x6
              };
              this.props.model.calendarCustomDateConfig = x7;
              this.props.onChangeCalendarTypeCallback(0x3);
            };
            x4.prototype.render = function () {
              return this.props.currentCalendarState === H1.CUSTOM ? G.createElement("div", {
                'id': "calendar-view-background",
                'style': {
                  'height': ''.concat(this.state.backgroundHeight, 'px')
                }
              }, this.sn()) : G.createElement("div", {
                'id': "calendar-view-background",
                'style': {
                  'height': ''.concat(this.state.backgroundHeight, 'px')
                }
              }, this.ln());
            };
            x4.prototype.ln = function () {
              var x5 = {
                backgroundColor: o6.appearanceHelper.calendarBackgroundColor
              };
              var x6 = {
                'id': "calendar-selection-container",
                key: "calendar-selection-container",
                style: x5
              };
              var x7 = {
                calendarType: 0x1,
                currentCalendarType: this.props.currentCalendarType,
                onItemClicked: this.nn
              };
              var x8 = {
                backgroundColor: o6.appearanceHelper.calendarSeparatorBackgroundColor
              };
              var x9 = {
                className: "calendar-line-separator",
                style: x8
              };
              var xq = {
                calendarType: 0x2,
                currentCalendarType: this.props.currentCalendarType,
                onItemClicked: this.rn
              };
              var xN = {
                backgroundColor: o6.appearanceHelper.calendarSeparatorBackgroundColor
              };
              var xQ = {
                className: "calendar-line-separator",
                style: xN
              };
              var xH = {
                calendarType: 0x3,
                currentCalendarType: this.props.currentCalendarType,
                onItemClicked: this.an
              };
              return G.createElement("div", x6, G.createElement(bU, x7), G.createElement("div", x9), G.createElement(bU, xq), G.createElement("div", xQ), G.createElement(bU, xH));
            };
            x4.prototype.sn = function () {
              return G.createElement(Hb.CalendarCustomView, {
                'key': "calendar-custom-view",
                'isRTL': shell.isRTLLanguage(),
                'caseType': this.$(),
                'themeColor': o6.appearanceHelper.calendarColor,
                'backgroundColor': o6.appearanceHelper.calendarBackgroundColor,
                'onConfirmClicked': this.G
              });
            };
            x4.prototype.$ = function () {
              return o6.launchType === Qj.CARD ? Hb.CaseType.CARD_GAME : Hb.CaseType.SLOT_GAME;
            };
            x4.prototype.ui = function (x5) {
              var x6 = x5.payload.height - (0x3e + oW());
              var x7 = {
                backgroundHeight: x6
              };
              this.setState(x7);
            };
            return x4;
          }(G.Component);
          function bO(x3) {
            var x4;
            var x5 = o6.isPortrait || o6.isMobile ? "14px" : "24px";
            var x6 = o6.isPortrait || o6.isMobile ? "0.291" : "0.5";
            x4 = function () {
              var x9 = [];
              for (var xq = 0x0; xq < arguments.length; xq++) {
                x9[xq] = arguments[xq];
              }
              var xN = [];
              x9.forEach(function (xQ) {
                var xH = xQ();
                if (xH) {
                  xN.push(xH);
                }
              });
              return xN;
            }(function () {
              return function (x9) {
                var xq = x9.gameElements;
                var xN = {
                  className: "game-list-item-image-container",
                  key: "game-list-item-icon-gift"
                };
                var xQ = {
                  className: "gh_theme_sprite gh_ic_nav_gift"
                };
                return xq.indexOf(Hq.BonusWallet) > -0x1 || xq.indexOf(Hq.FreeGameWallet) > -0x1 ? G.createElement("div", xN, G.createElement("div", xQ)) : null;
              }(x3);
            }, function () {
              return function (x9) {
                var xq = {
                  className: "game-list-item-image-container",
                  key: "game-list-item-icon-jackpot"
                };
                var xN = {
                  className: "gh_theme_sprite gh_ic_nav_jackpot"
                };
                return x9.gameElements.indexOf(Hq.JackpotBet) > -0x1 ? G.createElement("div", xq, G.createElement("div", xN)) : null;
              }(x3);
            }, function () {
              return function (x9) {
                var xq = x9.gameElements;
                var xN = {
                  className: "game-list-item-image-container",
                  key: "game-list-item-icon-respin"
                };
                var xQ = {
                  className: "gh_theme_sprite gh_ic_nav_free_spin"
                };
                return xq.indexOf(Hq.ReBet) > -0x1 || xq.indexOf(Hq.FreeBet) > -0x1 ? G.createElement("div", xN, G.createElement("div", xQ)) : null;
              }(x3);
            }, function () {
              return function (x9) {
                var xq = {
                  className: "game-list-item-image-container",
                  key: "game-list-item-icon-feature"
                };
                var xN = {
                  className: "gh_theme_sprite gh_ic_nav_bonus_game"
                };
                return x9.gameElements.indexOf(Hq.BonusBet) > -0x1 ? G.createElement("div", xq, G.createElement("div", xN)) : null;
              }(x3);
            }, function () {
              return function (x9) {
                var xq = x9.mainGameCollapseCount;
                var xN = x9.freeSpinCollapseCount;
                if (xq > 0x0 || xN > 0x0) {
                  var xQ = xN > 0x0 ? " ".concat(xq, '+').concat(xN) : " ".concat(xq);
                  var xH = xN > 0x0 ? "130px" : "100px";
                  var xd = o6.isPortrait ? "30px" : "34px";
                  var xW = {
                    className: "game-list-item-image-container"
                  };
                  var xb = {
                    className: "gh_theme_sprite gh_ic_nav_collapse"
                  };
                  var xy = {
                    fontSize: xd
                  };
                  var xG = {
                    className: "game-list-item-collapse-info-label",
                    style: xy
                  };
                  return G.createElement("div", {
                    'className': "game-list-item-collapse-info",
                    'key': "game-list-item-icon-collapse",
                    'style': {
                      'width': ''.concat(xH),
                      'backgroundColor': "rgba(0, 0, 0, 0.26)"
                    }
                  }, G.createElement("div", xW, G.createElement("div", xb)), G.createElement("div", xG, xQ));
                }
                return null;
              }(x3);
            }, function () {
              return function (x9) {
                var xq = {
                  className: "game-list-item-image-container",
                  key: "game-list-item-icon-super6"
                };
                var xN = {
                  className: "gh_theme_sprite gh_ic_nav_super6"
                };
                return x9.gameElements.indexOf(Hq.BaccaratSupersix) > -0x1 ? G.createElement("div", xq, G.createElement("div", xN)) : null;
              }(x3);
            }, function () {
              return function (x9) {
                var xq = {
                  className: "game-list-item-image-container",
                  key: "game-list-item-icon-freehand"
                };
                var xN = {
                  className: "gh_theme_sprite gh_ic_nav_freehand"
                };
                return x9.gameElements.indexOf(Hq.FreeHand) > -0x1 ? G.createElement("div", xq, G.createElement("div", xN)) : null;
              }(x3);
            });
            if (x4.length > 0x0) {
              var x7 = {
                'height': x5,
                'transform': "scale(".concat(x6, ')')
              };
              var x8 = {
                transformOrigin: "right top"
              };
              if (shell.isRTLLanguage()) {
                x7 = QI(QI({}, x7), x8);
              }
              return G.createElement("div", {
                'className': "game-list-item-feature-container",
                'key': "game-list-item-feature-container",
                'style': x7
              }, x4);
            }
            return null;
          }
          function bM(x3, x4) {
            if (undefined === x4) {
              x4 = 0xe;
            }
            if (x3.length > x4) {
              var x5 = Math.floor(x3.length / 0x2);
              return x3.slice(0, x5) + " " + x3.slice(x5, x3.length);
            }
            return x3;
          }
          var bP = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = {
                hover: false,
                active: false
              };
              x6.state = x7;
              x6.$i = x6.$i.bind(x6);
              x6.cn = x6.cn.bind(x6);
              x6.He = x6.He.bind(x6);
              x6.ze = x6.ze.bind(x6);
              x6.De = x6.De.bind(x6);
              x6.si = x6.si.bind(x6);
              x6.li = x6.li.bind(x6);
              x6.hn = x6.hn.bind(x6);
              x6.un = x6.un.bind(x6);
              x6.dn = x6.dn.bind(x6);
              x6.fn = x6.fn.bind(x6);
              x6.gn = x6.gn.bind(x6);
              x6.pn = x6.pn.bind(x6);
              x6.mn = x6.mn.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.render = function () {
              var x5 = this.props.betDetailsRaw;
              var x6 = o6.displayConfig;
              var x7 = x6.listContentLabelCol1;
              var x8 = x6.listContentLabelCol2;
              var x9 = x6.listContentLabelCol3;
              var xq = x6.listContentLabelCol4;
              var xN = [];
              var xQ = {
                'id': "game-list-item",
                key: "game-list-item-custom"
              };
              var xH = {
                'id': "game-list-item",
                key: "game-list-item-time"
              };
              var xd = {
                'id': "game-list-item",
                key: "game-list-item-date"
              };
              if (x7) {
                xN.push(G.createElement("div", xQ, x7(x5)));
              } else {
                xN.push(G.createElement("div", xH, this.props.time));
                xN.push(G.createElement("div", xd, this.props.date));
              }
              var xW = [];
              var xb = {
                'id': "game-list-item",
                key: "game-list-item-custom"
              };
              if (x8) {
                xN.push(G.createElement("div", xb, x8(x5)));
              } else {
                var xy = function (xv) {
                  var xa = {
                    color: o6.appearanceHelper.listItemFontColor,
                    transition: "color 0.5s ease 0s",
                    display: "inline-table"
                  };
                  var xC = xv.isSelected;
                  var xE = xv.isHighlight;
                  if (xE || xC) {
                    xa.transition = '';
                    xa.color = xC ? o6.appearanceHelper.listItemSelectedFontColor : o6.appearanceHelper.highlightFontColor;
                  }
                  return xa;
                }(this.props);
                var xG = o6.isPortrait ? bM(this.props.transactionId.toString()) : this.props.transactionId.toString();
                xW.push(G.createElement("div", {
                  'className': "game-list-item",
                  'key': "game-list-item-transaction-id",
                  'id': "game-list-item-transaction-id-".concat(this.props.index),
                  'style': xy,
                  'onMouseLeave': this.dn,
                  'onMouseDown': this.un,
                  'onMouseUp': this.fn,
                  'onTouchStart': this.mn,
                  'onTouchEnd': this.gn,
                  'onTouchMove': this.pn
                }, xG));
                xW.push(this.vn());
              }
              var xx;
              var xU;
              var xR;
              var xO;
              var xM;
              var xP;
              var xJ;
              var xS = x9 ? x9(x5) : QA.formatCurrency(this.props.bet, '');
              var xs = xq ? xq(x5) : QA.formatCurrency(this.props.profit, '');
              xx = this.props;
              xU = this.state;
              xR = xx.isSelected;
              xO = xx.index;
              xM = xU.hover;
              xP = xU.active;
              xJ = {
                'color': o6.appearanceHelper.listItemFontColor,
                'background': xO % 0x2 == 0x0 ? o6.appearanceHelper.listItemEvenColor : o6.appearanceHelper.listItemOddColor
              };
              if (xR) {
                xJ.color = o6.appearanceHelper.listItemSelectedFontColor;
                xJ.background = o6.appearanceHelper.listItemSelectedColor;
              } else if (xP) {
                xJ.background = o6.appearanceHelper.listItemPressedColor;
              } else if (xM) {
                xJ.background = o6.appearanceHelper.listItemHoverColor;
              }
              var xL = function () {
                var xv = shell.isRTLLanguage() ? "game-list-item-container-vertical-rtl" : "game-list-item-container-vertical";
                var xa = shell.isRTLLanguage() ? "game-list-item-container-horizontal-mobile-rtl" : "game-list-item-container-horizontal-mobile";
                var xC = shell.isRTLLanguage() ? "game-list-item-container-horizontal-rtl" : "game-list-item-container-horizontal";
                switch (o6.launchType) {
                  case Qj.CARD:
                    return ''.concat(xv, " game-list-item-container-card");
                  case Qj.GAME:
                  case Qj.SLOT:
                    return o6.isPortrait ? xv : o6.isMobile ? xa : xC;
                  default:
                    return xv;
                }
              }();
              var xz = function (xv) {
                var xa = {
                  color: xv.isSelected ? o6.appearanceHelper.listItemSelectedFontColor : o6.appearanceHelper.listItemFontColor
                };
                return xa;
              }(this.props);
              var xk = function (xv) {
                var xa = xv.profit;
                var xC = {
                  color: xv.isSelected ? o6.appearanceHelper.listItemSelectedFontColor : xa > 0x0 ? o6.appearanceHelper.listItemWinFontColor : o6.appearanceHelper.listItemLossFontColor
                };
                return xC;
              }(this.props);
              var xF = QI(QI({}, xJ), this.props.style);
              var xp = {
                className: "game-list-item-column-container",
                style: xz
              };
              var xm = {
                className: "game-list-item-column-container"
              };
              var xX = {
                textAlign: "right"
              };
              var xw = {
                className: "game-list-item",
                style: xX
              };
              var xD = {
                textAlign: "right"
              };
              return G.createElement("div", {
                'className': "game-list-item-container ".concat(xL),
                'style': xF,
                'onClick': this.$i,
                'onMouseEnter': this.cn,
                'onMouseLeave': this.He,
                'onMouseDown': this.ze,
                'onMouseUp': this.De,
                'onTouchStart': this.si,
                'onTouchEnd': this.li,
                'onTouchMove': this.hn
              }, G.createElement("div", xp, xN), G.createElement("div", xm, xW), G.createElement("div", xw, bM(xS, 11)), G.createElement("div", {
                'className': "game-list-item",
                'style': QI(QI({}, xk), xD)
              }, bM(xs, 0o14)), this.yn(this.props));
            };
            x4.prototype.$i = function () {
              if (this.props.isClickable) {
                this.xn();
                var x5 = this.props.onClickedCallback;
                if (x5) {
                  x5(this.props.index);
                }
              }
            };
            x4.prototype.vn = function () {
              var x5 = {
                key: "game-list-icons"
              };
              return G.createElement(bO, QI({}, this.props, x5));
            };
            x4.prototype.yn = function (x5) {
              var x6 = o6.isMobile ? "gh-angle-horizontal-mobile" : "gh-angle-horizontal";
              var x7 = o6.isPortrait ? "gh-angle-vertical angle-right" : ''.concat(x6, " angle-right");
              var x8 = {
                'borderColor': x5.isSelected ? o6.appearanceHelper.listItemSelectedFontColor : o6.appearanceHelper.listItemArrowColor
              };
              var x9 = {
                transform: "rotate(-225deg)"
              };
              var xq = {
                'id': "game-list-item-arrow-image-container"
              };
              if (shell.isRTLLanguage()) {
                x8 = QI(QI({}, x8), x9);
              }
              return G.createElement("div", xq, G.createElement("div", {
                'className': ''.concat(x7),
                'style': x8
              }));
            };
            x4.prototype.cn = function () {
              var x5 = {
                hover: true
              };
              this.setState(x5);
            };
            x4.prototype.He = function () {
              var x5 = {
                hover: false,
                active: false
              };
              this.setState(x5);
            };
            x4.prototype.ze = function () {
              var x5 = {
                active: true
              };
              this.setState(x5);
            };
            x4.prototype.De = function () {
              var x5 = {
                active: false
              };
              this.setState(x5);
            };
            x4.prototype.si = function () {
              var x5 = this;
              this._n = QA.timeoutCallback(0.3)(function () {
                var x6 = {
                  active: true
                };
                x5.setState(x6);
              });
            };
            x4.prototype.li = function () {
              var x5 = {
                active: false
              };
              this.setState(x5);
            };
            x4.prototype.hn = function () {
              var x5 = {
                active: false
              };
              if (this._n) {
                this._n();
              }
              this._n = undefined;
              if (this.state.active) {
                this.setState(x5);
              }
            };
            x4.prototype.mn = function () {
              this.wn = QA.timeoutCallback(0.3)(this.kn.bind(this));
            };
            x4.prototype.gn = function () {
              this.xn();
            };
            x4.prototype.pn = function () {
              this.xn();
            };
            x4.prototype.un = function () {
              this.wn = QA.timeoutCallback(0.3)(this.kn.bind(this));
            };
            x4.prototype.fn = function () {
              this.xn();
            };
            x4.prototype.dn = function () {
              this.xn();
            };
            x4.prototype.xn = function () {
              var x5 = this.wn;
              if (x5) {
                x5();
              }
              this.wn = undefined;
            };
            x4.prototype.kn = function () {
              var x5 = this.Cn();
              var x6 = this.props.index;
              var x7 = this.props.showCopyButton;
              if (x7) {
                x7(x5.posX, x5.posY, x6);
              }
            };
            x4.prototype.Cn = function () {
              var x5 = document.getElementById("game-list-item-transaction-id-".concat(this.props.index));
              var x6 = document.getElementById("game-list-view-contents-container");
              var x7 = x5.getBoundingClientRect();
              var x8 = {
                posX: x5.offsetLeft + x6.offsetLeft - 0x4,
                posY: x7.top
              };
              return x8;
            };
            return x4;
          }(G.Component);
          !function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = {
                hover: false,
                active: false,
                isFade: false
              };
              x6.state = x7;
              x6.Sn = x6.Sn.bind(x6);
              x6.cn = x6.cn.bind(x6);
              x6.He = x6.He.bind(x6);
              x6.ze = x6.ze.bind(x6);
              x6.De = x6.De.bind(x6);
              x6.si = x6.si.bind(x6);
              x6.li = x6.li.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.close = function () {
              this.Hn();
            };
            x4.prototype.componentDidMount = function () {
              this.zn = QA.timeoutCallback(6)(this.Dn.bind(this));
            };
            x4.prototype.componentDidUpdate = function () {
              var x5 = this;
              if (this.state.isFade) {
                this.jn = QA.timeoutCallback(0.3)(function () {
                  x5.Hn();
                });
              }
            };
            x4.prototype.render = function () {
              var x5 = this.state;
              var x6 = x5.isFade;
              var x7 = x5.active;
              var x8 = x5.hover;
              var x9 = this.props;
              var xq = x9.posX;
              var xN = x9.posY;
              var xQ = x9.index;
              var xH = !o6.isPortrait;
              var xd = function (xR, xO) {
                var xM = document.getElementById("game-list-item-transaction-id-".concat(xR));
                var xP = xO ? -0x12 : -0x5;
                var xJ = xO ? 0xf : 0x5;
                return {
                  'width': "0px",
                  'height': "0px",
                  'borderStyle': "solid",
                  'borderWidth': ''.concat(xJ, "px ").concat(xJ, "px 0 ").concat(xJ, 'px'),
                  'borderColor': "grey transparent transparent transparent",
                  'position': "absolute",
                  'left': ''.concat(xM.clientWidth / 0x2 + xP, 'px')
                };
              }(xQ, xH);
              var xW = function (xR, xO, xM, xP) {
                var xJ = document.getElementById("game-list-item-transaction-id-".concat(xM));
                var xS = o6.gsScale;
                xS = o6.isPortrait ? xS : xS / 0x3;
                var xs = o6.isPortrait ? 2.2 : 3.3;
                var xf = {
                  'position': "absolute",
                  'width': ''.concat(xJ.clientWidth, 'px'),
                  'height': ''.concat(xJ.clientHeight, 'px'),
                  'left': ''.concat(xR, 'px'),
                  'top': ''.concat(xO / xS - xJ.clientWidth / xs, 'px'),
                  'textAlign': "center",
                  'opacity': '1',
                  'zIndex': 0x63
                };
                if (xP) {
                  xf.transition = "opacity 1s ease 0s";
                  xf.opacity = '0';
                }
                return xf;
              }(xq, xN, xQ, x6);
              var xb = function (xR, xO, xM) {
                var xP = o6.appearanceHelper.highlightFontColor;
                var xJ = 0x23;
                var xS = 0xf;
                var xs = 0xc;
                var xf = 0x1;
                if (xM) {
                  xJ = 0x5a;
                  xS = 0x23;
                  xs = 0x18;
                  xf = 0x3;
                }
                var xL = "rgb(80,80,80)";
                if (xR) {
                  xL = "rgb(50,50,50)";
                } else if (xO) {
                  xL = "rgb(90,90,90)";
                }
                return {
                  'width': ''.concat(xJ, 'px'),
                  'height': ''.concat(xS, 'px'),
                  'fontSize': ''.concat(xs, 'px'),
                  'color': xP,
                  'border': ''.concat(xf, "px solid grey"),
                  'padding': "4px",
                  'backgroundColor': xL,
                  'textAlign': "center",
                  'display': "inline-block",
                  'borderRadius': "10%"
                };
              }(x7, x8, xH);
              var xy = shell.I18n.t("History.HistoryCopy");
              var xG = {
                className: "transaction-id-copy-button-container",
                style: xW,
                onClickCapture: this.Sn,
                onMouseEnter: this.cn,
                onMouseLeave: this.He,
                onMouseDown: this.ze,
                onMouseUp: this.De,
                onTouchStartCapture: this.si,
                onTouchEnd: this.li
              };
              var xx = {
                className: "transaction-id-copy-button",
                style: xb
              };
              var xU = {
                className: "copy-button-arrow",
                style: xd
              };
              return G.createElement("div", xG, G.createElement("div", xx, xy), G.createElement("div", xU));
            };
            x4.prototype.cn = function () {
              var x5 = {
                hover: true
              };
              this.setState(x5);
            };
            x4.prototype.He = function () {
              var x5 = {
                hover: false,
                active: false
              };
              this.setState(x5);
            };
            x4.prototype.ze = function () {
              var x5 = {
                active: true
              };
              this.setState(x5);
            };
            x4.prototype.De = function () {
              var x5 = {
                active: false
              };
              this.setState(x5);
            };
            x4.prototype.si = function () {
              var x5 = {
                active: true
              };
              this.setState(x5);
            };
            x4.prototype.li = function () {
              var x5 = {
                active: false
              };
              this.setState(x5);
            };
            x4.prototype.Sn = function () {
              var x5 = this;
              var x6 = this.props.transactionId;
              var x7 = shell.I18n.t("History.HistoryTransactionIdCopied", {
                'transactionId': x6 + ''
              });
              var x8 = function () {
                x5.props.onClickCallback(x5.props.index);
              };
              oU(x6.toString(), function (x9) {
                var xq = {
                  message: "failed",
                  duration: 0x2
                };
                var xN = {
                  message: x7,
                  duration: 0x2,
                  eventCallback: x8
                };
                if (x9) {
                  oH(xq);
                } else {
                  x5.Hn();
                  oH(xN);
                }
              });
            };
            x4.prototype.Hn = function () {
              this.Nn();
              this.Tn();
              if (document.getElementById("transaction-id-copy-button-view")) {
                var x5 = document.getElementById("transaction-id-copy-button-view");
                x5.parentNode.removeChild(x5);
              }
              QA.timeoutCallback(0.1)(this.props.onCloseCallback);
            };
            x4.prototype.Dn = function () {
              var x5 = {
                isFade: true
              };
              this.setState(x5);
            };
            x4.prototype.Nn = function () {
              var x5 = this.zn;
              if (x5) {
                x5();
              }
              this.zn = undefined;
            };
            x4.prototype.Tn = function () {
              var x5 = this.jn;
              if (x5) {
                x5();
              }
              this.jn = undefined;
            };
          }(G.Component);
          var bJ;
          var bS;
          var bs = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = {
                scrollToTop: false,
                showScrollToTopButton: false,
                currentDataPage: x5.historyItemPageCount - 0x1,
                currentDataPageProps: x5.historyItemPageCount,
                copiedIndex: -0x1,
                propsChanged: false
              };
              x6.On = false;
              x6.Fn = true;
              x6.In = false;
              x6.Ln = false;
              x6.Pn = 0x0;
              x6.state = x7;
              x6.Mn = G.createRef();
              x6.Rn = G.createRef();
              x6.Bn = x6.Bn.bind(x6);
              x6.An = x6.An.bind(x6);
              x6.En = x6.En.bind(x6);
              x6.Wn = x6.Wn.bind(x6);
              x6.Yn = x6.Yn.bind(x6);
              x6.Pn = !o6.isPortrait && o6.isMobile ? 0xa : 0xf;
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              if (this.props.reportScrollContainerHeight && this.Rn.current) {
                this.props.reportScrollContainerHeight(this.Rn.current.scrollHeight);
              }
              if (o6.isMobile && od() && 0x5a === shell.environment.getOrientation()) {
                document.querySelectorAll(".rcs-custom-scroll .rcs-inner-container").forEach(function (x5) {
                  x5.style.webkitOverflowScrolling = "auto";
                });
              }
            };
            x4.getDerivedStateFromProps = function (x5, x6) {
              return x5.historyItemPageCount !== x6.currentDataPageProps ? {
                'currentDataPage': x5.historyItemPageCount - 0x1,
                'currentDataPageProps': x5.historyItemPageCount,
                'propsChanged': true
              } : null;
            };
            x4.prototype.shouldComponentUpdate = function (x5, x6) {
              if (true === x5.freezeScroll || x5.selectedIndex !== this.props.selectedIndex) {
                this.Ln = true;
              } else {
                this.Ln = false;
              }
              return x5.freezeScroll !== this.props.freezeScroll || x5.selectedIndex !== this.props.selectedIndex || x5.historyItemPageCount !== this.props.historyItemPageCount || x6.copiedIndex !== this.state.copiedIndex || x6.currentDataPage !== this.state.currentDataPage || x6.scrollToTop !== this.state.scrollToTop || x6.showScrollToTopButton !== this.state.showScrollToTopButton;
            };
            x4.prototype.render = function () {
              var x5 = this;
              if (!this.On) {
                this.On = this.Vn();
              }
              var x6 = this.state;
              var x7 = x6.scrollToTop;
              var x8 = x6.currentDataPage;
              var x9 = x6.propsChanged;
              var xq = this.Gn();
              var xN = x7 ? 0x0 : this.Un();
              var xQ = o6.isPortrait || o6.isMobile ? 0x36 : 0x4c;
              var xH = {
                'id': "game-list-scroll-view-container",
                className: "history regular",
                ref: this.Mn
              };
              return G.createElement("div", xH, this.qn(), G.createElement(oT["default"], {
                'heightRelativeToParent': "inherit",
                'onScroll': function (xd) {
                  var xW = {
                    scrollToTop: false
                  };
                  tN.set("isListPageScroll", true);
                  if (x7) {
                    x5.setState(xW);
                  }
                  var xb = xd.target;
                  var xy = xb.scrollTop;
                  var xG = xb.scrollHeight;
                  var xx = x5.Mn.current ? xy / (xG - x5.Mn.current.clientHeight) * 0x64 : 0x0;
                  var xU = {
                    propsChanged: false
                  };
                  x5.Hn();
                  if (!(0x0 !== xy || x5.state.propsChanged)) {
                    x5.Xn();
                    x5.In = false;
                  }
                  if (x9) {
                    x5.setState(xU);
                  }
                  if (xx > 0x1e && 0x1 === x8 || x8 > 0x1) {
                    x5.Wn();
                  } else {
                    x5.Yn();
                  }
                  if (xx >= 0x63) {
                    if (x8 + 0x1 === x5.props.historyItemPageCount) {
                      if (!x5.props.hasLoadMore) {
                        x5.In = true;
                      }
                      if (x5.props.onBottomReachedCallback) {
                        x5.props.onBottomReachedCallback();
                      }
                    } else if (xy === xG - x5.Mn.current.clientHeight) {
                      x5.Kn();
                    }
                  }
                },
                'freezePosition': this.props.freezeScroll,
                'scrollTo': xN
              }, G.createElement("div", {
                'id': "game-list-wrapper",
                'style': {
                  'position': "relative",
                  'overflow': this.props.freezeScroll ? "hidden" : '',
                  'height': ''.concat(xq.length * xQ, 'px')
                },
                'ref': this.Rn
              }, xq)));
            };
            x4.prototype.Gn = function () {
              var x5 = this;
              var x6 = this.state;
              var x7 = x6.copiedIndex;
              var x8 = x6.currentDataPage;
              var x9 = [];
              if (x8 > 0x0) {
                var xq = x8 > 0x1 ? (x8 - 0x2) * this.Pn : 0x0;
                var xN = xq + 0x2 * this.Pn;
                this.props.model.betHistoryItems.forEach(function (xQ, xH) {
                  if (xH >= xq && xH < xN) {
                    x9.push(G.createElement(bP, {
                      'index': xH,
                      'key': xQ.transactionId,
                      'time': oq(xQ.betTime),
                      'date': o9(xQ.betTime),
                      'transactionId': xQ.transactionId,
                      'bet': xQ.grandTotalBetAmount,
                      'profit': xQ.grandTotalWinLossAmount,
                      'gameElements': xQ.gameElements,
                      'mainGameCollapseCount': xQ.mainGameCollapseCount,
                      'freeSpinCollapseCount': xQ.freeSpinCollapseCount,
                      'onClickedCallback': x5.Bn,
                      'useSmallFont': x5.On,
                      'isSelected': x5.props.selectedIndex === xH,
                      'showCopyButton': x5.An,
                      'isClickable': true,
                      'isHighlight': x7 === xH,
                      'betDetailsRaw': xQ.betDetailsRaw
                    }));
                  }
                });
              }
              return x9;
            };
            x4.prototype.Un = function () {
              var x5 = this.state.currentDataPage;
              var x6 = o6.isPortrait || o6.isMobile ? 0x36 : 0x4c;
              var x7 = Math.random();
              if (0x1 !== x5 && !this.In && !this.Ln) {
                if (this.Fn && this.Mn && this.Mn.current) {
                  var x8 = this.Mn.current.clientHeight;
                  return this.Pn * x6 - x8 + x7;
                }
                return this.Pn * x6 + x7;
              }
            };
            x4.prototype.Kn = function () {
              var x5 = this.state.currentDataPage;
              var x6 = {
                currentDataPage: x5 + 0x1
              };
              this.setState(x6);
              this.Fn = true;
            };
            x4.prototype.Xn = function () {
              var x5 = this.state.currentDataPage;
              if (x5 > 0x2) {
                this.setState({
                  'currentDataPage': x5 - 0x1
                });
                this.Fn = false;
              }
            };
            x4.prototype.Yn = function () {
              var x5 = {
                showScrollToTopButton: false
              };
              if (!o6.isPortrait) {
                if (this.state.showScrollToTopButton) {
                  this.setState(x5);
                }
              }
            };
            x4.prototype.Wn = function () {
              var x5 = {
                showScrollToTopButton: true
              };
              if (!(o6.isPortrait || this.state.showScrollToTopButton)) {
                this.setState(x5);
              }
            };
            x4.prototype.qn = function () {
              if (!o6.isPortrait && this.state.showScrollToTopButton && !this.props.freezeScroll) {
                var x5 = {
                  backgroundColor: o6.appearanceHelper.scrollToTopButtonColor,
                  borderColor: o6.appearanceHelper.scrollToTopButtonBorderColor
                };
                var x6 = {
                  borderColor: o6.appearanceHelper.listItemArrowColor
                };
                var x9 = o6.isMobile ? "scroll-to-top-background-mobile" : "scroll-to-top-background";
                var xq = o6.isMobile ? "gh-angle-horizontal-mobile" : "gh-angle-horizontal";
                var xN = {
                  'id': x9,
                  style: x5,
                  onClick: this.En
                };
                var xQ = {
                  className: "gh-angle-wrapper"
                };
                return G.createElement("div", xN, G.createElement("div", xQ, G.createElement("div", {
                  'className': ''.concat(xq, " angle-up"),
                  'style': x6
                })));
              }
              return null;
            };
            x4.prototype.Bn = function (x5) {
              this.props.onItemClickedCallback(x5);
            };
            x4.prototype.Vn = function () {
              var x5 = false;
              this.props.model.betHistoryItems.forEach(function (x6) {
                x5 = x6.grandTotalBetAmount > 9999.99 || x6.grandTotalWinLossAmount > 9999.99 || x5;
              });
              return x5;
            };
            x4.prototype.En = function () {
              var x5 = {
                scrollToTop: true,
                currentDataPage: 0x1
              };
              this.setState(x5);
            };
            x4.prototype.An = function () {};
            x4.prototype.Hn = function () {
              if (this.Zn) {
                this.Zn.close();
                this.Zn = undefined;
              }
            };
            x4.prototype.Jn = function (x5) {
              var x6 = this;
              var x7 = {
                copiedIndex: x5
              };
              this.Zn = undefined;
              this.setState(x7);
              QA.timeoutCallback(0o2)(function () {
                var x8 = {
                  copiedIndex: -0x1
                };
                x6.setState(x8);
              });
            };
            return x4;
          }(G.Component);
          var bf = QA.timeoutCallback;
          function bL(x3) {
            var x4 = U(null);
            var x5 = false;
            bS = x3.scrollUpThreshold;
            var x6 = {
              capture: true,
              passive: false
            };
            var x7 = Qg(R(0o0), 0x2);
            var x8 = x7[0x0];
            var x9 = x7[0x1];
            var xq = Qg(R(false), 0o2);
            var xN = xq[0x0];
            var xQ = xq[0x1];
            var xH = Qg(R(false), 0o2);
            var xd = xH[0x0];
            var xW = xH[0x1];
            var xb = Qg(R(true), 2);
            var xy = xb[0x0];
            var xG = xb[0x1];
            var xx = function () {
              x9(0o0);
              bf(0o0)(function () {
                xG(true);
              });
            };
            var xU = iV({
              'onDrag': function (xR) {
                if (xN) {
                  var xO = Qg(xR.movement, 2);
                  var xM = xO[0x0];
                  var xP = xO[0x1];
                  var xJ = xR.down;
                  var xS = xR.cancel;
                  var xs = Math.abs(xP);
                  var xf = xP;
                  if (!(!o6.isMobile || shell.environment.isMac() || o6.isPortrait || shell.environment.getOrientation() !== H2.PORTRAIT)) {
                    xs = Math.abs(xM);
                    xf = -xM;
                  }
                  if (!xJ && x3.hasLoadMore && xs >= bS) {
                    x5 = true;
                  } else {
                    x4.current.classList.remove("transition-transform-on");
                    if (xf < 0x0) {
                      xG(false);
                      if (xs >= bS) {
                        if (x3.hasLoadMore && x3.onScrollThresholdReached) {
                          x3.onScrollThresholdReached(true);
                        }
                        x9(-bS);
                      } else {
                        if (x3.hasLoadMore) {
                          if (x3.onScrollThresholdReached) {
                            x3.onScrollThresholdReached(false);
                          }
                          if (x5) {
                            x5 = false;
                          }
                        }
                        x9(xf);
                      }
                    } else if (xf > 0x0) {
                      xQ(false);
                      xS();
                    }
                  }
                }
              },
              'onDragEnd': function () {
                xQ(false);
                if (x4.current) {
                  x4.current.classList.add("transition-transform-on");
                }
                if (x5) {
                  x9(-bS);
                  if (x3.onExecuteLoadMoreCallback) {
                    x3.onExecuteLoadMoreCallback(function () {
                      xx();
                    });
                  }
                } else {
                  xx();
                }
              },
              'onWheel': function (xR) {
                var xO = xR.movement;
                var xM = xR.wheeling;
                var xP = xR.screenY;
                if (xd && !bJ) {
                  var xJ = xO && xO[0x1] || xP - x8;
                  xJ = xJ > 0x0 && "firefox" === shell.environment.getBrowserBaseType() ? 0xc8 : xJ;
                  var xS = Math.abs(xJ);
                  if (!xM) {
                    xW(false);
                    if (x4.current) {
                      x4.current.classList.add("transition-transform-on");
                    }
                    if (xJ > 0x0 && x3.hasLoadMore && xS >= bS) {
                      xG(false);
                      x9(-bS);
                      return void (x3.onExecuteLoadMoreCallback && x3.onExecuteLoadMoreCallback(function () {
                        xx();
                      }));
                    }
                    if (xJ > 0x0) {
                      if (xS >= bS) {
                        xG(false);
                        x9(-bS);
                        bf(0.5)(function () {
                          xx();
                        });
                      } else {
                        x9(-xJ);
                        bJ = bf(0.2)(function () {
                          xx();
                          bJ = undefined;
                        });
                      }
                    } else if (xJ < 0x0) {
                      xx();
                    }
                  }
                }
              },
              'onMouseUp': function () {
                if ('ie' === shell.environment.getBrowserBaseType() && (xN || xd)) {
                  xQ(false);
                  xW(false);
                  xG(true);
                }
              }
            }, {
              'domTarget': x4,
              'eventOptions': x6
            }).bind(this);
            x(xU, [xU()]);
            return G.createElement("div", {
              'id': "list-wrapper",
              'className': "transition-transform-on",
              'ref': x4,
              'style': Object.assign({}, x3.style, {
                'transform': "translateY(".concat(x8, "px)")
              })
            }, G.createElement(bs, {
              'model': x3.model,
              'historyItemPageCount': x3.model.betHistoryPageNumber,
              'hasLoadMore': x3.hasLoadMore,
              'onItemClickedCallback': x3.onItemClickedCallback,
              'selectedIndex': x3.selectedIndex,
              'freezeScroll': !xy,
              'onBottomReachedCallback': function () {
                if (o6.isMobile) {
                  if (!xN) {
                    xQ(true);
                  }
                } else if (!xd) {
                  xW(true);
                }
              },
              'reportScrollContainerHeight': x3.reportScrollContainerHeight
            }));
          }
          function bk(x3) {
            var x4 = o6.appearanceHelper.primaryFontColor;
            var x5 = o6.isPortrait || o6.isMobile ? "14px" : "20px";
            var x6 = o6.isPortrait || o6.isMobile ? 0x50 : 0xa0;
            var x7 = {
              height: x6
            };
            var x8 = {
              'id': "load-more-container",
              style: x7
            };
            var x9 = {
              loadMore: true,
              isHorizontal: !o6.isPortrait,
              isFade: true,
              isMobile: o6.isMobile
            };
            var xq = {
              height: x6
            };
            var xN = {
              'id': "load-more-container",
              style: xq
            };
            var xQ = {
              color: x4,
              fontSize: x5
            };
            var xH = {
              'id': "load-more-label",
              style: xQ
            };
            var xd = {
              height: x6
            };
            var xW = {
              'id': "load-more-container",
              style: xd
            };
            var xb = {
              color: x4,
              fontSize: x5
            };
            var xy = {
              'id': "load-more-label",
              style: xb
            };
            var xG = {
              height: x6
            };
            var xx = {
              'id': "load-more-container",
              style: xG
            };
            var xU = {
              color: x4,
              fontSize: x5
            };
            var xR = {
              'id': "load-more-label",
              style: xU
            };
            return x3.isLoading ? G.createElement("div", x8, G.createElement(i0, x9)) : x3.showReleaseToLoad ? G.createElement("div", xN, G.createElement("div", xH, shell.I18n.t("History.HistoryLoadMoreData"))) : x3.hasLoadMore ? G.createElement("div", xW, G.createElement("div", xy, shell.I18n.t("History.HistoryLoadDataPull"))) : G.createElement("div", xx, G.createElement("div", xR, shell.I18n.t("History.HistoryAllRecordDisplayed")));
          }
          var bF = QA.spawnCallback;
          var bp = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = document.getElementById("game-history-container");
              var x8 = x6.props.model.getGameBetSummary(x6.props.model.gameId);
              var x9 = !o6.isPortrait && o6.isMobile ? 0xa : 0xf;
              x6.Qn = Math.ceil(x8.betCount / x9);
              var xq = o6.isApiReplay ? 0x0 : x6.Qn - (x6.props.model.betHistoryPageNumber - 0x1);
              if (o6.isPortrait) {
                x6.$n = 0x54 + (shell.environment.getSafeAreaPadding ? shell.environment.getSafeAreaPadding().bottom : 0x0) + (0x3e + oW());
              } else {
                x6.$n = o6.isMobile ? 0x70 : 0xe9;
              }
              x6.state = {
                'containerHeight': x7.offsetHeight - x6.$n - oR(),
                'scrollableHeight': 0x0,
                'isLoading': false,
                'showReleaseToLoad': false,
                'pagesRemaining': xq
              };
              x6.tr = x6.tr.bind(x6);
              x6.er = x6.er.bind(x6);
              x6.ir = x6.ir.bind(x6);
              x6.nr = x6.nr.bind(x6);
              x6.rr = undefined;
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              o6.context.event.on("Shell.Scaled", this.ui, this);
            };
            x4.prototype.componentWillUnmount = function () {
              o6.context.event.off("Shell.Scaled", this.ui, this);
              var x5 = this.rr;
              this.rr = undefined;
              if (x5) {
                x5();
              }
            };
            x4.prototype.render = function () {
              var x5 = this.state;
              var x6 = x5.pagesRemaining;
              var x7 = x5.containerHeight;
              var x8 = o6.isPortrait || o6.isMobile ? 0x50 : 0xa0;
              var x9 = o6.appearanceHelper.listBackgroundColor;
              var xq = "Safari" === shell.environment.getBrowserBaseType() ? "subpixel-antialiased" : "antialiased";
              var xN = "Safari" === shell.environment.getBrowserBaseType() && o6.isMobile ? {} : {
                'WebkitFontSmoothing': xq
              };
              var xQ = {
                'height': ''.concat(x7, 'px'),
                'width': "100%",
                'backgroundColor': x9
              };
              var xH = {
                height: "100%",
                width: "100%",
                position: "relative",
                backgroundColor: x9,
                zIndex: 0x1
              };
              var xd = {
                hasLoadMore: x6 > 0x0,
                style: xH,
                scrollUpThreshold: x8,
                onExecuteLoadMoreCallback: this.tr,
                onScrollThresholdReached: this.er,
                model: this.props.model,
                onItemClickedCallback: this.ir,
                reportScrollContainerHeight: this.nr,
                selectedIndex: this.props.selectedIndex
              };
              var xW = {
                'id': "game-list-touch-prevention"
              };
              return G.createElement("div", {
                'id': "scroll-view",
                'style': QI(QI({}, xQ), xN)
              }, G.createElement(bL, xd), function (xb) {
                var xy = xb.isLoading;
                var xG = xb.pagesRemaining;
                var xx = xb.containerHeight;
                var xU = xb.scrollableHeight;
                var xR = xb.showReleaseToLoad;
                var xO = {
                  isLoading: xy,
                  hasLoadMore: xG > 0x0,
                  showReleaseToLoad: xR
                };
                return xU > xx ? G.createElement(bk, xO) : null;
              }(this.state), this.state.isLoading ? G.createElement("div", xW) : null);
            };
            x4.prototype.nr = function (x5) {
              var x6 = {
                scrollableHeight: x5
              };
              this.setState(x6);
            };
            x4.prototype.tr = function (x5) {
              if (!this.state.isLoading && this.state.pagesRemaining > 0x0) {
                this.rr = bF(this.ar(), this.sr())(this.lr(x5));
              }
            };
            x4.prototype.sr = function () {
              var x5 = this;
              return function (x6) {
                if (x5.props.loadMoreApiCallback) {
                  x5.props.loadMoreApiCallback(x6);
                }
              };
            };
            x4.prototype.lr = function (x5) {
              var x6 = this;
              return function () {
                var x7 = x6.Qn - (x6.props.model.betHistoryPageNumber - 0x1);
                var x8 = {
                  isLoading: false,
                  pagesRemaining: x7 <= 0x0 ? 0x0 : x7
                };
                x6.setState(x8);
                x6.rr = undefined;
                if (x5) {
                  x5();
                }
              };
            };
            x4.prototype.ar = function () {
              var x5 = this;
              return function (x6) {
                var x7 = {
                  isLoading: true,
                  showReleaseToLoad: false
                };
                x5.setState(x7);
                if (x6) {
                  x6();
                }
              };
            };
            x4.prototype.ui = function (x5) {
              var x6 = x5.payload;
              var x7 = (o6.isPortrait || o6.isMobile ? x6.height : 0x3 * x6.height) - this.$n - oR();
              var x8 = {
                containerHeight: x7
              };
              this.setState(x8);
            };
            x4.prototype.ir = function (x5) {
              if (!this.state.isLoading) {
                if (this.props.onListItemClickCallback) {
                  this.props.onListItemClickCallback(x5);
                }
              }
            };
            x4.prototype.er = function (x5) {
              if (x5 !== this.state.showReleaseToLoad) {
                this.setState({
                  'showReleaseToLoad': x5
                });
              }
            };
            return x4;
          }(G.Component);
          function bm(x3, x4, x5) {
            if (undefined === x5) {
              x5 = 0x0;
            }
            if (!x3.current || !x4.current) {
              return 0x1;
            }
            var x6 = x4.current.offsetWidth;
            var x7 = x3.current.offsetWidth - x5;
            var x8 = 0x1;
            if (x6 > x7) {
              x8 = x7 / x6;
              x4.current.style.transform = "scale(".concat(x8, ')');
            }
            return x8;
          }
          function bX(x3, x4) {
            if (x3.current) {
              x3.current.style.transform = "scale(".concat(x4, ')');
            }
          }
          var bw = {
            width: "100%",
            height: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderBottom: "1px solid #696969"
          };
          var bD = {
            width: "100%",
            height: "12px",
            paddingLeft: "23px"
          };
          var bv = {
            display: "flex",
            flex: '',
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "100%"
          };
          var ba = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100%",
            width: "33.33%"
          };
          var bC = shell.I18n;
          var bE = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.cr = QA.formatCurrency(x6.props.totalBet, x6.props.currencySymbol);
              x6.hr = QA.formatCurrency(x6.props.totalProfit, x6.props.currencySymbol);
              x6.ur = G.createRef();
              x6.dr = G.createRef();
              x6.gr = G.createRef();
              x6.pr = G.createRef();
              x6.mr = G.createRef();
              x6.vr = G.createRef();
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              bm(this.ur, this.dr);
              var x5 = bm(this.mr, this.vr, 0x4);
              var x6 = bm(this.gr, this.pr, 0o4);
              if (x6 < x5) {
                bX(this.vr, x6);
              } else {
                bX(this.pr, x5);
              }
            };
            x4.prototype.render = function () {
              var x5 = {
                backgroundColor: o6.appearanceHelper.footerBarColor,
                borderTopColor: o6.appearanceHelper.footerSeparatorColor,
                borderTopStyle: "solid",
                borderTopWidth: "1px",
                color: o6.appearanceHelper.primaryFontColor
              };
              var x6 = {
                color: o6.appearanceHelper.highlightFontColor
              };
              var x9 = 0x30 + (shell.environment.getSafeAreaPadding ? shell.environment.getSafeAreaPadding().bottom : 0x0);
              var xq = o6.displayConfig;
              var xN = xq.hideBet;
              var xQ = xq.betLabel;
              var xH = xq.hideProfit;
              var xd = xq.profitLabel;
              var xW = QI(QI({}, x5), {
                'height': ''.concat(x9, 'px')
              });
              var xb = {
                direction: "rtl",
                paddingLeft: "10px",
                paddingRight: "20px"
              };
              var xy = {
                'id': "game-list-footer-date-container"
              };
              var xG = {
                'id': "game-list-footer-date-vertical",
                ref: this.ur
              };
              var xx = {
                color: o6.appearanceHelper.footerDateFontColor
              };
              var xU = {
                'id': "game-list-footer-date-label-vertical",
                ref: this.dr,
                style: xx
              };
              var xR = {
                'id': "game-list-footer-record-vertical"
              };
              var xO = {
                visibility: xN ? "hidden" : "visible"
              };
              var xM = {
                visibility: xH ? "hidden" : "visible"
              };
              if (shell.isRTLLanguage()) {
                xW = QI(QI({}, xW), xb);
              }
              return G.createElement("div", {
                'id': "game-list-footer-container",
                'className': "game-list-footer-container-vertical",
                'style': xW
              }, G.createElement("div", xy, G.createElement("div", xG, G.createElement("div", xU, this.props.date)), G.createElement("div", xR, ''.concat(this.props.record, " ").concat(bC.t("History.HistoryRecords")))), G.createElement("div", {
                'className': "game-list-footer-item",
                'style': QI(QI({}, x6), xO),
                'ref': this.mr
              }, G.createElement("div", {
                'className': "game-list-footer-item-wrapper",
                'ref': this.vr
              }, xQ || this.cr)), G.createElement("div", {
                'className': "game-list-footer-item",
                'style': QI(QI({}, x6), xM),
                'ref': this.gr
              }, G.createElement("div", {
                'className': "game-list-footer-item-wrapper",
                'ref': this.pr
              }, xd || this.hr)));
            };
            return x4;
          }(G.Component);
          var bK = {
            'protoRecordItem': bw,
            'protoSpinLabel': bD,
            'protoBetDetails': bv,
            'protoBetDetailsItem': ba
          };
          function bB(x3) {
            var x4 = {
              backgroundColor: x3.color
            };
            return G.createElement("div", {
              'className': "prototype-record-item",
              'style': QI(QI({}, bK.protoRecordItem), x4)
            }, G.createElement(bu, {
              'state': x3.betDetail.gameDetail.st,
              'index': x3.currentIndex,
              'transactionId': x3.betDetail.transactionId.toString()
            }), G.createElement(bI, {
              'betDetail': x3.betDetail
            }));
          }
          function bI(x3) {
            var x4 = {
              className: "prototype-bet-details",
              style: bK.protoBetDetails
            };
            return G.createElement("div", x4, G.createElement(bh, {
              'keyName': "Bet",
              'value': QA.formatCurrency(x3.betDetail.totalBetAmount, '')
            }), G.createElement(bh, {
              'keyName': "Profit",
              'value': QA.formatCurrency(x3.betDetail.totalWinLossAmount, '')
            }), G.createElement(bh, {
              'keyName': "Balance",
              'value': QA.formatCurrency(x3.betDetail.balance, '')
            }));
          }
          function bh(x3) {
            var x4 = {
              className: "prototype-bet-details-item",
              style: bK.protoBetDetailsItem
            };
            var x5 = {
              marginTop: "-2px"
            };
            return G.createElement("div", x4, G.createElement("div", {
              'className': "prototype-".concat(x3.keyName, "-item-key")
            }, x3.keyName), G.createElement("div", {
              'className': "prototype-".concat(x3.keyName, "-item-value"),
              'style': x5
            }, x3.value));
          }
          function bu(x3) {
            var x4;
            switch (x3.state) {
              case 0x1:
                x4 = "Normal Spin";
                break;
              case 0x2:
              case 0x15:
                x4 = "Free Spin";
                break;
              case 0x4:
                x4 = "Normal Respin";
                break;
              case 0x16:
                x4 = "Free Spin Respin";
                break;
              default:
                x4 = "Game specific Spin";
            }
            var x5 = {
              className: "prototype-spin-label",
              style: bK.protoSpinLabel
            };
            return G.createElement("div", x5, ''.concat(x3.index + 0x1, ".  ").concat(x4, " - ").concat(x3.transactionId));
          }
          var bT = {
            width: "100%",
            height: "inherit",
            position: "relative",
            margin: "0 auto",
            fontSize: "12px",
            zIndex: 0x1
          };
          function bY(x3) {
            var x4 = x3.betDetailsRaw.map(function (x9, xq, xN) {
              var xQ = new tP(x9);
              var xH = xq % 0x2 == 0x0 ? o6.appearanceHelper.listItemEvenColor : o6.appearanceHelper.listItemOddColor;
              return G.createElement(bB, {
                'key': "prototype-record-item-".concat(xQ.transactionId),
                'betDetail': xQ,
                'currentIndex': xq,
                'totalBetDetailLength': xN.length,
                'color': xH
              });
            });
            var x5 = document.getElementById("game-history-container").offsetHeight - (0x3e + oW());
            var x6 = o6.appearanceHelper.listBackgroundColor;
            var x7 = {
              backgroundColor: x6
            };
            var x8 = {
              navLeftButtonCallback: x3.navLeftButtonCallback
            };
            return G.createElement("div", {
              'className': "prototype-game-details-container history regular",
              'style': QI(QI({}, bT), x7)
            }, G.createElement(bl, x8), G.createElement(oT["default"], {
              'heightRelativeToParent': ''.concat(x5, 'px')
            }, x4));
          }
          function bl(x3) {
            var x4 = o6.isPortrait || o6.isMobile ? oW() : 0x0;
            var x5 = o6.isPortrait || o6.isMobile ? 0x3e : 0x58;
            var x6 = o6.appearanceHelper.navBarColor;
            var x7 = {
              position: "absolute",
              zIndex: 0x4,
              height: "inherit",
              width: "inherit"
            };
            var x8 = {
              style: x7
            };
            return G.createElement("div", {
              'id': "game-detail-view-navbar-container",
              'key': "game-detail-view-navbar-container",
              'style': {
                'height': ''.concat(x5, 'px'),
                'paddingTop': ''.concat(x4, 'px'),
                'backgroundColor': x6
              }
            }, G.createElement("div", x8, G.createElement(oj, {
              'showTitle': function () {
                return "Spin Details";
              },
              'titleClickCallback': function () {},
              'currentState': H0.HistoryDetails,
              'currentCalendarType': undefined,
              'currentCalendarState': undefined,
              'leftButtonClickedCallback': x3.navLeftButtonCallback,
              'rightButtonClickedCallback': function () {},
              'showDropDownArrow': function () {
                return false;
              }
            })));
          }
          var bV = {
            height: "inherit",
            width: "inherit",
            position: "absolute",
            bottom: 0x0,
            pointerEvents: "none",
            zIndex: 0x3
          };
          var bA = {
            backgroundColor: "rgb(41, 41, 52)",
            position: "absolute",
            width: "100%",
            height: "79px",
            bottom: "0px",
            display: "flex",
            justifyContent: "center"
          };
          var bZ = {
            display: "flex",
            width: "inherit",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "11px"
          };
          var bc = {
            width: "296px",
            display: "flex"
          };
          var bj = {
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#F5AC58",
            fontSize: "7px",
            color: " #30303C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          };
          var y0 = {
            color: "rbga(255,255,255,0.5)",
            lineHeight: "12px",
            width: "100%",
            fontSize: "10px",
            padding: "0px 8px"
          };
          var y1 = {
            fontSize: "10px",
            color: "#F5AC58",
            marginTop: "-3px",
            width: "10px",
            textAlign: "center",
            opacity: 0.5
          };
          var y2 = {
            opacity: 0.08,
            backgroundColor: "#FFFFFF",
            width: "296px",
            height: "1px",
            marginBottom: "11px"
          };
          var y3 = {
            container: bV,
            barPosition: bA,
            guideContainer: bZ,
            guideRow: bc,
            step: bj,
            stepDesc: y0,
            stepSeparator: y1,
            seperatorLine: y2
          };
          var y4 = shell.I18n;
          function y6() {
            var x3 = 0x1 === o6.verificationState;
            var x4 = Qg(R(x3), 0o2);
            var x5 = x4[0x0];
            var x6 = x4[0x1];
            var x7 = U();
            var x8 = oO(y4.t("History.HistoryVryBarTitle1"), o6.appearanceHelper.themeColor);
            var x9 = oO(y4.t("History.HistoryVrfStep2"), o6.appearanceHelper.themeColor);
            var xq = QI(QI({}, y3.stepSeparator), {
              'color': o6.appearanceHelper.themeColor
            });
            var xN = QI(QI({}, y3.step), {
              'backgroundColor': o6.appearanceHelper.themeColor
            });
            x(function () {
              if (x3) {
                o6.verificationState = 0x2;
              }
              tN.set("isListPageScroll", false);
              var xF = tN.observe("isListPageScroll", function (xp) {
                var xm = {
                  isExpended: false,
                  arrowAnimType: 0x2
                };
                if (xp) {
                  x7.current.updateState(xm);
                }
              });
              return function () {
                xF();
              };
            }, []);
            var xQ = {
              backgroundColor: o6.appearanceHelper.footerBarColor
            };
            var xH = QI(QI({}, y3.barPosition), xQ);
            var xd = QI({}, y3.guideContainer);
            var xW = {
              style: y3.container
            };
            var xb = {
              key: "verification",
              style: xH
            };
            var xy = {
              style: y3.seperatorLine
            };
            var xG = {
              style: y3.guideRow
            };
            var xx = {
              style: xN
            };
            var xU = {
              style: y3.stepDesc
            };
            var xR = {
              style: y3.guideRow
            };
            var xO = {
              style: xq
            };
            var xM = {
              style: y3.guideRow
            };
            var xP = {
              style: xN
            };
            var xJ = {
              __html: x9
            };
            var xS = {
              style: y3.stepDesc,
              dangerouslySetInnerHTML: xJ
            };
            var xs = {
              style: y3.guideRow
            };
            var xf = {
              style: xq
            };
            var xL = {
              style: y3.guideRow
            };
            var xz = {
              style: xN
            };
            var xk = {
              style: y3.stepDesc
            };
            if (shell.isRTLLanguage()) {
              xd.direction = "rtl";
            }
            return G.createElement("div", xW, G.createElement("div", xb, G.createElement(tg, {
              'ref': x7,
              'defaultIsExpanded': x5,
              'expandableHeight': 0x8b,
              'barTitle': x8,
              'onButtonClicked': function (xF) {
                tN.set("isListPageScroll", false);
                x6(xF);
              }
            }, G.createElement("div", {
              'style': xd
            }, G.createElement("div", xy), G.createElement("div", xG, G.createElement("div", xx, G.createElement("span", null, '1')), G.createElement("div", xU, y4.t("History.HistoryVrfStep1"))), G.createElement("div", xR, G.createElement("div", xO, ':')), G.createElement("div", xM, G.createElement("div", xP, G.createElement("span", null, '2')), G.createElement("div", xS)), G.createElement("div", xs, G.createElement("div", xf, ':')), G.createElement("div", xL, G.createElement("div", xz, G.createElement("span", null, '3')), G.createElement("div", xk, y4.t("History.HistoryVrfStep3")))))));
          }
          var y7 = QA.timeoutCallback;
          var y8 = shell.I18n;
          var y9 = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.Fe = o6.launchType === Qj.CARD;
              x6.br = G.createRef();
              x6.yr = G.createRef();
              var x7 = H0.HistoryList;
              var x8 = document.getElementById("game-history-container");
              x6.state = {
                'model': x5.model,
                'currentPageState': x7,
                'previousPageState': x7,
                'currentCalendarState': H1.SELECTION,
                'selectedIndex': 0x0,
                'parentHeight': x8.offsetHeight - (0x3e + oW()) - oR(),
                'imageUrl': '',
                'loadMoreInProgress': false
              };
              x6._r = x6._r.bind(x6);
              x6.wr = x6.wr.bind(x6);
              x6.kr = x6.kr.bind(x6);
              x6.Cr = x6.Cr.bind(x6);
              x6.Bn = x6.Bn.bind(x6);
              x6.tr = x6.tr.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              o6.context.event.on("Shell.Scaled", this.ui, this);
            };
            x4.prototype.componentWillUnmount = function () {
              o6.context.event.off("Shell.Scaled", this.ui, this);
            };
            x4.prototype.render = function () {
              var x5 = {
                backgroundColor: o6.appearanceHelper.listBackgroundColor
              };
              var x6 = this.props;
              var x7 = x6.isLoading;
              var x8 = x6.fadeLoading;
              var xq = {
                'id': "game-list-view-loading",
                className: "game-list-view-container",
                style: x5
              };
              var xN = {
                'id': "game-list-view-wrapper"
              };
              var xQ = {
                isFade: x8,
                onButtonClickCallback: this.props.quitCallback,
                isHorizontal: false
              };
              var xH = {
                'id': "game-list-view",
                className: "game-list-view-container",
                style: x5
              };
              var xd = {
                flexDirection: "column"
              };
              var xW = {
                'id': "game-list-view-wrapper",
                style: xd
              };
              return x7 ? G.createElement("div", xq, G.createElement("div", xN, G.createElement(i0, xQ))) : G.createElement("div", xH, G.createElement("div", xW, this.Mi(), this.Sr(), this.Hr(), this.zr(), this.Dr(this.state)));
            };
            x4.prototype._r = function () {
              if (!this.state.loadMoreInProgress) {
                this.jr();
              }
            };
            x4.prototype.jr = function () {
              var x5 = this;
              var x6 = this.state.currentPageState;
              switch (x6) {
                case H0.HistoryDetails:
                case H0.HistoryFreeSpinDetails:
                  y7(0.1)(function () {
                    var x9 = {
                      currentPageState: H0.HistoryList,
                      previousPageState: x6
                    };
                    x5.setState(x9);
                  });
                  break;
                case H0.HistoryCalendar:
                  var x7 = {
                    currentPageState: H0.HistoryList,
                    previousPageState: x6
                  };
                  if (this.state.currentCalendarState === H1.SELECTION) {
                    this.setState(x7);
                  } else {
                    this.setState({
                      'currentCalendarState': H1.SELECTION
                    });
                  }
                  break;
                case H0.HistoryList:
                  if (o6.isApiReplay) {
                    break;
                  }
                  var x8 = {
                    currentPageState: H0.HistoryCalendar,
                    previousPageState: x6
                  };
                  this.setState(x8);
              }
            };
            x4.prototype.wr = function () {
              var x5 = this.state.currentPageState;
              switch (x5) {
                case H0.HistoryCalendar:
                  var x6 = {
                    currentPageState: H0.HistoryList,
                    previousPageState: x5
                  };
                  if (this.state.currentCalendarState === H1.SELECTION) {
                    this.setState(x6);
                  } else {
                    this.setState({
                      'currentCalendarState': H1.SELECTION
                    });
                  }
                  break;
                case H0.HistoryList:
                  if (this.props.quitCallback) {
                    this.props.quitCallback();
                  }
              }
            };
            x4.prototype.Cr = function (x5) {
              var x6 = this.state.currentPageState;
              var x7 = this.state.model;
              x7.calendarType = x5;
              this.setState({
                'currentCalendarState': H1.SELECTION,
                'currentPageState': H0.HistoryList,
                'previousPageState': x6,
                'model': x7
              });
              if (this.props.changeCalendarType) {
                this.props.changeCalendarType(x5);
              }
            };
            x4.prototype.kr = function () {
              var x5 = {
                currentCalendarState: H1.CUSTOM
              };
              this.setState(x5);
            };
            x4.prototype.Bn = function (x5) {
              var x6 = this.state.currentPageState;
              var x7 = {
                currentPageState: H0.HistoryDetails,
                previousPageState: x6,
                selectedIndex: x5
              };
              this.setState(x7);
            };
            x4.prototype.Mi = function () {
              var x5 = this.state.currentPageState === H0.HistoryDetails ? H0.HistoryList : this.state.currentPageState;
              var x6 = this.Fe ? "game-list-nav-vertical-card" : '';
              var x7 = oW();
              var x8 = o6.appearanceHelper.navBarColor;
              var x9 = this.state;
              var xq = x9.model;
              var xN = x9.currentCalendarState;
              var xQ = x9.loadMoreInProgress;
              return G.createElement("div", {
                'id': "game-list-view-navbar-container",
                'className': x6,
                'style': {
                  'width': "100%",
                  'height': ''.concat(0x3e, 'px'),
                  'paddingTop': ''.concat(x7, 'px'),
                  'backgroundColor': x8
                },
                'ref': this.br
              }, G.createElement(oj, {
                'showTitle': function () {
                  return shell.I18n.t("History.HistoryCalenderToday");
                },
                'titleClickCallback': undefined,
                'currentState': x5,
                'currentCalendarType': xq.calendarType,
                'currentCalendarState': xN,
                'leftButtonClickedCallback': this._r,
                'rightButtonClickedCallback': this.wr,
                'showDropDownArrow': function () {
                  return false;
                },
                'calendarCustomDateConfig': xq.calendarCustomDateConfig,
                'showLeftDisabled': xQ
              }));
            };
            x4.prototype.Sr = function () {
              var x5 = {
                height: this.state.parentHeight
              };
              var x6 = {
                'id': "game-list-view-contents-container",
                style: x5,
                ref: this.yr
              };
              return G.createElement("div", x6, this.Nr());
            };
            x4.prototype.Hr = function () {
              return o6.isEnableVRF() && this.state.currentPageState !== H0.HistoryDetails ? G.createElement(y6, null) : null;
            };
            x4.prototype.Nr = function () {
              var x5 = [];
              var x6 = {
                key: "game-list-table-header",
                currencySymbol: this.props.model.currencySymbol
              };
              x5.push(G.createElement(bG, x6));
              if (this.state.model.betHistoryItems.length > 0x0) {
                x5.push(G.createElement(bp, {
                  'key': "game-list-scroller",
                  'model': this.props.model,
                  'onListItemClickCallback': this.Bn,
                  'loadMoreApiCallback': this.tr
                }));
              } else {
                var x7 = o6.appearanceHelper.listBackgroundColor;
                var x8 = {
                  fontSize: "14px",
                  color: o6.appearanceHelper.secondaryFontColor
                };
                var x9 = {
                  className: "game-list-view-no-item-label",
                  style: x8
                };
                x5.push(G.createElement("div", {
                  'id': "game-list-view-no-items-container",
                  'key': "game-list-view-no-items-container",
                  'style': {
                    'height': "calc(100% - ".concat(0x54 + (shell.environment.getSafeAreaPadding ? shell.environment.getSafeAreaPadding().bottom : 0x0), "px)"),
                    'backgroundColor': x7
                  }
                }, G.createElement("div", x9, y8.t("History.HistoryNoHistory"))));
              }
              x5.push(this.Tr());
              return x5;
            };
            x4.prototype.Tr = function () {
              var x5 = this.state.model.betSummaryModel[0x0];
              return G.createElement(bE, {
                'date': this.Or(),
                'key': "game-list-footer-port",
                'record': x5 && x5.betCount || 0x0,
                'totalBet': x5 && x5.batchTotalBetAmount || 0x0,
                'totalProfit': x5 && x5.batchTotalWinLossAmount || 0x0,
                'currencySymbol': this.props.model.currencySymbol
              });
            };
            x4.prototype.Dr = function (x5) {
              var x6 = this;
              var x7 = x5.currentPageState;
              var x8 = x5.model;
              var x9 = x5.selectedIndex;
              if (0x0 !== x8.betHistoryItems.length && x8.betHistoryItems[x9]) {
                var xq = {
                  left: "100%"
                };
                var xN = {
                  left: '0%'
                };
                var xQ = {
                  left: "100%"
                };
                var xH = x8.betHistoryItems[x9].betDetailsRaw;
                var xd = xq;
                var xW = xN;
                var xb = xQ;
                var xy = {
                  right: "100%"
                };
                var xG = {
                  right: '0%'
                };
                var xx = {
                  right: "100%"
                };
                if (shell.isRTLLanguage()) {
                  xd = xy;
                  xW = xG;
                  xb = xx;
                }
                return G.createElement(F, {
                  'key': "game-detail-view-transition",
                  'config': H6,
                  'items': x7,
                  'from': xd,
                  'enter': xW,
                  'leave': xb,
                  'onStart': function () {
                    if (x7 !== H0.HistoryDetails) {
                      x6.Fr(true);
                    }
                  },
                  'onRest': function () {
                    if (x7 === H0.HistoryDetails) {
                      x6.Fr(false);
                    }
                  }
                }, function (xU) {
                  return xU === H0.HistoryDetails && function (xR) {
                    var xO = {
                      top: '0',
                      position: "absolute",
                      width: "inherit",
                      height: "inherit",
                      zIndex: '3'
                    };
                    var xM = {
                      key: "prototype-game-detail-view",
                      betDetailsRaw: xH,
                      navLeftButtonCallback: x6._r
                    };
                    var xP = {
                      key: "game-detail-view",
                      betDetailsRaw: xH,
                      gameId: x8.gameId,
                      currencySymbol: x8.currencySymbol,
                      navLeftButtonCallback: x6._r,
                      quitCallback: x6.props.quitCallback
                    };
                    return G.createElement(X.div, {
                      'style': QI(QI({}, xR), xO)
                    }, o6.isPrototype ? G.createElement(bY, xM) : G.createElement(bb, xP));
                  };
                });
              }
            };
            x4.prototype.zr = function () {
              var x5 = this.state.currentPageState;
              var x6 = {
                model: this.state.model,
                currentCalendarType: this.state.model.calendarType,
                currentCalendarState: this.state.currentCalendarState,
                onCalendarCustomClicked: this.kr,
                onChangeCalendarTypeCallback: this.Cr
              };
              return G.createElement("div", {
                'id': "calendar-container",
                'style': {
                  'top': ''.concat(0x3e, 'px'),
                  'display': x5 === H0.HistoryCalendar ? "block" : "none"
                }
              }, G.createElement(bR, x6));
            };
            x4.prototype.Or = function () {
              var x5 = '';
              switch (this.state.model.calendarType) {
                case 0x1:
                default:
                  x5 = y8.t("History.HistoryCalenderToday");
                  break;
                case 0x2:
                  x5 = y8.t("History.HistoryCalenderWeek");
                  break;
                case 0x3:
                  x5 = o9(this.state.model.calendarCustomDateConfig.startDate, true) + " - " + o9(this.state.model.calendarCustomDateConfig.endDate, true);
              }
              return x5;
            };
            x4.prototype.ui = function (x5) {
              var x6 = x5.payload.height - (0x3e + oW()) - oR();
              var x7 = {
                parentHeight: x6
              };
              this.setState(x7);
            };
            x4.prototype.tr = function (x5) {
              var x6 = this;
              var x7 = {
                loadMoreInProgress: true
              };
              this.setState(x7);
              if (this.props.onLoadMoreRequestApi) {
                this.props.onLoadMoreRequestApi(function () {
                  var x8 = {
                    loadMoreInProgress: false
                  };
                  x6.setState(x8);
                  if (x5) {
                    x5();
                  }
                });
              }
            };
            x4.prototype.Fr = function (x5) {
              if (this.yr.current) {
                this.yr.current.style.display = x5 ? "block" : "none";
              }
              if (this.br.current) {
                this.br.current.style.display = x5 ? "block" : "none";
              }
            };
            return x4;
          }(G.PureComponent);
          var yq = shell.I18n;
          var yN = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = 0.2 * document.getElementById("game-history-container").offsetWidth / 0x186;
              x6.state = {
                'isCustomOpen': x6.props.currentCalendarState === H1.CUSTOM,
                'customScale': x7
              };
              x6.nn = x6.nn.bind(x6);
              x6.rn = x6.rn.bind(x6);
              x6.an = x6.an.bind(x6);
              x6.G = x6.G.bind(x6);
              x6.Ir = x6.Ir.bind(x6);
              x6.Lr = x6.Lr.bind(x6);
              x6.Pr = x6.Pr.bind(x6);
              x6.sn = x6.sn.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.render = function () {
              var x5 = {};
              if (shell.isRTLLanguage()) {
                x5.paddingRight = "30px";
                x5.paddingLeft = 0x0;
                x5.direction = "rtl";
              }
              return G.createElement("div", {
                'id': "calendar-view-container-horizontal",
                'style': x5
              }, this.ln());
            };
            x4.prototype.componentDidMount = function () {
              o6.context.event.on("Shell.Scaled", this.ui, this);
            };
            x4.prototype.componentWillUnmount = function () {
              o6.context.event.off("Shell.Scaled", this.ui, this);
            };
            x4.prototype.nn = function () {
              if (!this.props.isLoading) {
                if (this.props.onChangeCalendarTypeCallback) {
                  this.props.onChangeCalendarTypeCallback(0x1);
                }
              }
            };
            x4.prototype.rn = function () {
              if (!this.props.isLoading) {
                if (this.props.onChangeCalendarTypeCallback) {
                  this.props.onChangeCalendarTypeCallback(0o2);
                }
              }
            };
            x4.prototype.an = function () {
              var x5 = {
                isCustomOpen: false
              };
              var x6 = {
                isCustomOpen: true
              };
              if (!this.props.isLoading) {
                if (this.state.isCustomOpen) {
                  if (this.props.onCalendarCustomClicked) {
                    this.props.onCalendarCustomClicked(H1.SELECTION);
                  }
                  this.setState(x5);
                } else {
                  if (this.props.onCalendarCustomClicked) {
                    this.props.onCalendarCustomClicked(H1.CUSTOM);
                  }
                  this.setState(x6);
                }
              }
            };
            x4.prototype.G = function (x5, x6) {
              var x7 = {
                startDate: x5,
                endDate: x6
              };
              var x8 = {
                isCustomOpen: false
              };
              if (!this.props.isLoading) {
                this.props.model.calendarCustomDateConfig = x7;
                this.props.onChangeCalendarTypeCallback(3);
                this.setState(x8);
              }
            };
            x4.prototype.ln = function () {
              var x5 = {
                color: o6.appearanceHelper.calendarTitleColor
              };
              var x6 = [];
              var x8 = {
                className: "calendar-item-label"
              };
              if (shell.isRTLLanguage()) {
                x5.textAlign = "right";
              }
              x6.push(G.createElement("div", {
                'className': "calendar-item-container-horizontal calendar-item-container",
                'key': "select-date-range",
                'style': x5
              }, G.createElement("div", x8, yq.t("History.HistoryCalendarDateRange"))));
              x6.push(this.Ir());
              x6.push(this.Lr());
              x6.push(this.Pr());
              x6.push(this.sn());
              return x6;
            };
            x4.prototype.Ir = function () {
              var x5 = this.state.isCustomOpen;
              var x6 = 0x1 === this.props.currentCalendarType;
              var x7 = !x5 && x6 ? o6.appearanceHelper.highlightFontColor : o6.appearanceHelper.primaryFontColor;
              var x8 = {};
              if (shell.isRTLLanguage()) {
                x8.textAlign = "right";
              }
              return G.createElement("div", {
                'className': "calendar-item-container-horizontal calendar-item-container",
                'onClick': this.nn,
                'key': "calendar-date-today",
                'style': x8
              }, G.createElement("div", {
                'className': "calendar-item-label",
                'style': {
                  'color': x7,
                  'opacity': this.props.isLoading ? 0.3 : 0x1
                }
              }, yq.t("History.HistoryCalenderToday")));
            };
            x4.prototype.Lr = function () {
              var x5 = this.state.isCustomOpen;
              var x6 = 0x2 === this.props.currentCalendarType;
              var x7 = !x5 && x6 ? o6.appearanceHelper.highlightFontColor : o6.appearanceHelper.primaryFontColor;
              var x8 = {};
              if (shell.isRTLLanguage()) {
                x8.textAlign = "right";
              }
              return G.createElement("div", {
                'className': "calendar-item-container-horizontal calendar-item-container",
                'onClick': this.rn,
                'key': "calendar-date-week",
                'style': x8
              }, G.createElement("div", {
                'className': "calendar-item-label",
                'style': {
                  'color': x7,
                  'opacity': this.props.isLoading ? 0.3 : 0x1
                }
              }, yq.t("History.HistoryCalenderWeek")));
            };
            x4.prototype.Pr = function () {
              var x5 = this.state.isCustomOpen;
              var x6 = x5 ? "angle-up" : "angle-down";
              var x7 = 0x3 === this.props.currentCalendarType || x5 ? o6.appearanceHelper.highlightFontColor : o6.appearanceHelper.primaryFontColor;
              var x9 = x5 ? "translateY(4px)" : "translateY(-4px)";
              var xq = {};
              var xN = {
                'id': "calendar-custom-container",
                onClick: this.an,
                key: "calendar-custom-container"
              };
              var xQ = {
                color: x7,
                opacity: this.props.isLoading ? 0.3 : 0x1
              };
              var xH = {
                className: "calendar-item-label",
                style: xQ
              };
              var xd = {
                'id': "calendar-arrow-image-container"
              };
              var xW = {
                transform: x9
              };
              var xb = {
                className: "gh-angle-wrapper",
                style: xW
              };
              var xy = {
                borderColor: x7
              };
              if (shell.isRTLLanguage()) {
                xq.textAlign = "right";
              }
              return G.createElement("div", xN, G.createElement("div", {
                'className': "calendar-item-container calendar-item-container-horizontal",
                'style': xq
              }, G.createElement("div", xH, yq.t("History.HistoryCalenderCustom"))), G.createElement("div", xd, G.createElement("div", xb, G.createElement("div", {
                'id': "calendar-arrow",
                'className': "gh-angle-horizontal ".concat(x6),
                'style': xy
              }))));
            };
            x4.prototype.sn = function () {
              var x5 = this.state;
              var x6 = x5.isCustomOpen;
              var x7 = x5.customScale;
              var x8 = undefined;
              if (x6) {
                var x9 = {
                  'transform': "scale(".concat(x7, ") translateX(-20px)")
                };
                if (shell.isRTLLanguage()) {
                  x9.transform = "scale(".concat(x7, ") translateX(20px)");
                }
                x8 = G.createElement("div", {
                  'id': "calendar-custom-view-container",
                  'style': x9,
                  'key': "calendar-custom-view-container"
                }, G.createElement(Hb.CalendarCustomViewH, {
                  'key': "calendar-custom-view",
                  'isRTL': shell.isRTLLanguage(),
                  'caseType': Hb.CaseType.SLOT_GAME,
                  'themeColor': o6.appearanceHelper.calendarColor,
                  'backgroundColor': o6.appearanceHelper.calendarBackgroundColor,
                  'onConfirmClicked': this.G
                }));
              }
              return x8;
            };
            x4.prototype.ui = function (x5) {
              var x6 = 0.6000000000000001 * x5.payload.width / 0x186;
              var x7 = {
                customScale: x6
              };
              this.setState(x7);
            };
            return x4;
          }(G.Component);
          var yQ = shell.I18n;
          var yH = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.Ee = x6.Ee.bind(x6);
              x6.Cr = x6.Cr.bind(x6);
              x6.kr = x6.kr.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.Cr = function (x5) {
              if (this.props.onChangeCalendarTypeCallback) {
                this.props.onChangeCalendarTypeCallback(x5);
              }
            };
            x4.prototype.kr = function (x5) {
              if (this.props.onCalendarCustomClicked) {
                this.props.onCalendarCustomClicked(x5);
              }
            };
            x4.prototype.render = function () {
              var x5 = {
                backgroundColor: o6.appearanceHelper.navBarPanelColor
              };
              var x7 = {};
              var x8 = {
                'id': "game-list-nav",
                className: "game-list-nav-horizontal",
                style: x5
              };
              if (shell.isRTLLanguage()) {
                x7.direction = "rtl";
              }
              return G.createElement("div", x8, G.createElement("div", {
                'id': "game-list-nav-bar",
                'className': "game-list-nav-bar-horizontal",
                'style': x7
              }, this.Ee(), G.createElement(yN, {
                'model': this.props.model,
                'currentCalendarType': this.props.model.calendarType,
                'currentCalendarState': this.props.currentCalendarState,
                'onChangeCalendarTypeCallback': this.Cr,
                'onCalendarCustomClicked': this.kr,
                'isLoading': this.props.isLoading
              })));
            };
            x4.prototype.Ee = function () {
              var x5 = [];
              var x6 = o6.appearanceHelper.titleFontColor;
              var x7 = {};
              var x8 = {
                fontSize: "30px",
                lineHeight: "33px",
                color: x6
              };
              var x9 = {
                className: "game-list-nav-period-label",
                style: x8
              };
              if (shell.isRTLLanguage()) {
                x7.direction = "rtl";
                x7.paddingRight = '8%';
                x7.paddingLeft = 0x0;
              }
              x5.push(G.createElement("div", {
                'id': "game-list-nav-label-container",
                'className': "game-list-nav-label-container-horizontal",
                'key': "game-list-nav-label-container",
                'style': x7
              }, G.createElement("div", x9, yQ.t("History.HistoryMainTitle"))));
              return x5;
            };
            return x4;
          }(G.Component);
          var yd = shell.I18n;
          var yW = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = {
                disableCloseButton: x5.disableCloseButton
              };
              x6.state = x7;
              x6.cr = QA.formatCurrency(x6.props.totalBet, '');
              x6.hr = QA.formatCurrency(x6.props.totalProfit, '');
              x6.Be = x6.Be.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidUpdate = function (x5) {
              if (x5.disableCloseButton !== this.props.disableCloseButton) {
                this.setState({
                  'disableCloseButton': this.props.disableCloseButton
                });
              }
            };
            x4.prototype.render = function () {
              var x5 = o6.appearanceHelper.footerDateFontColor;
              var x6 = o6.appearanceHelper.primaryFontColor;
              var x7 = o6.appearanceHelper.highlightFontColor;
              var x8 = this.props.currencySymbol ? ''.concat(yd.t("History.HistoryMainPagePayout"), '(').concat(this.props.currencySymbol, ')') : ''.concat(yd.t("History.HistoryMainPagePayout"));
              var x9 = this.props.currencySymbol ? ''.concat(yd.t("History.HistoryMainPageWin"), '(').concat(this.props.currencySymbol, ')') : ''.concat(yd.t("History.HistoryMainPageWin"));
              var xq = this.props.shrink ? "24px" : "30px";
              xq = this.props.isMobile ? "14px" : xq;
              var xN = o6.appearanceHelper.navBarSeparatorColor;
              var xQ = o6.isMobile ? "-mobile" : '';
              var xH = o6.displayConfig;
              var xd = xH.hideBet;
              var xW = xH.betLabel;
              var xb = xH.hideProfit;
              var xy = xH.profitLabel;
              var xG = {
                'backgroundColor': o6.appearanceHelper.footerBarColor
              };
              var xx = {};
              var xU = {};
              var xR = {
                color: x6
              };
              var xO = {
                color: x5,
                fontSize: xq
              };
              var xM = {
                visibility: xd ? "hidden" : "visible"
              };
              var xP = {
                color: x6
              };
              var xJ = {
                color: x7,
                fontSize: xq
              };
              var xS = {
                visibility: xb ? "hidden" : "visible"
              };
              var xs = {
                color: x6
              };
              var xf = {
                color: x7,
                fontSize: xq
              };
              var xL = {
                backgroundColor: xN
              };
              var xz = {
                key: "game-list-nav-separator",
                className: "game-list-nav-separator-vertical-slot",
                style: xL
              };
              if (shell.isRTLLanguage()) {
                xG.direction = "rtl";
                xx.textAlign = "right";
                xU.textAlign = "left";
              }
              return G.createElement("div", {
                'id': "game-list-footer-wrapper",
                'style': xG
              }, G.createElement("div", {
                'id': "game-list-footer-container",
                'className': "game-list-footer-container-horizontal".concat(xQ)
              }, G.createElement("div", {
                'className': "game-list-footer-date-container-horizontal".concat(xQ),
                'style': xx
              }, G.createElement("div", {
                'className': "game-list-footer-record-horizontal".concat(xQ),
                'style': xR
              }, ''.concat(this.props.record, " ").concat(yd.t("History.HistoryRecords"))), G.createElement("div", {
                'className': "game-list-footer-date-label-horizontal".concat(xQ),
                'style': xO
              }, this.props.date)), G.createElement("div", {
                'className': "game-list-footer-date-container-horizontal".concat(xQ),
                'style': QI(xM, xU)
              }, G.createElement("div", {
                'className': "game-list-footer-record-horizontal".concat(xQ),
                'style': xP
              }, x8), G.createElement("div", {
                'className': "game-list-footer-date-label-horizontal".concat(xQ),
                'style': xJ
              }, xW || this.cr)), G.createElement("div", {
                'className': "game-list-footer-date-container-horizontal".concat(xQ),
                'style': QI(xS, xU)
              }, G.createElement("div", {
                'className': "game-list-footer-record-horizontal".concat(xQ),
                'style': xs
              }, x9), G.createElement("div", {
                'className': "game-list-footer-date-label-horizontal".concat(xQ),
                'style': xf
              }, xy || this.hr)), this.Mr()), G.createElement("div", xz));
            };
            x4.prototype.Mr = function () {
              if (!this.state.disableCloseButton) {
                var x5 = o6.isMobile ? "translate(20px, 0px)" : "translate(25px, 5px)";
                var x6 = {};
                var x7 = {
                  isPortrait: false
                };
                if (shell.isRTLLanguage()) {
                  x6.textAlign = "left";
                  x5 = o6.isMobile ? "translate(-20px, 0px)" : "translate(-25px, 5px)";
                }
                return G.createElement("div", {
                  'className': "game-list-nav-image-container game-list-nav-image-container-slot",
                  'key': "game-list-nav-image-container-right",
                  'onClick': this.Be,
                  'style': x6
                }, G.createElement("div", {
                  'id': "game-list-nav-image-right",
                  'style': {
                    'display': "flex",
                    'transform': x5
                  }
                }, G.createElement(ol, x7)));
              }
            };
            x4.prototype.Be = function () {
              var x5 = this.props.closeButtonClickedCallback;
              if (x5) {
                x5();
              }
            };
            return x4;
          }(G.Component);
          var yb = QA.timeoutCallback;
          var yy = shell.I18n;
          var yG = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.Rr = false;
              var x7 = H0.HistoryList;
              var x8 = document.getElementById("game-history-container");
              var x9 = {
                model: x5.model,
                currentPageState: x7,
                previousPageState: x7,
                currentCalendarState: H1.SELECTION,
                selectedIndex: -0x1,
                parentWidth: x8.offsetWidth,
                detailsPageWidth: 607.5 / x8.offsetWidth
              };
              x6.state = x9;
              x6._r = x6._r.bind(x6);
              x6.wr = x6.wr.bind(x6);
              x6.kr = x6.kr.bind(x6);
              x6.Cr = x6.Cr.bind(x6);
              x6.Bn = x6.Bn.bind(x6);
              x6.Dr = x6.Dr.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              o6.context.event.on("Shell.Scaled", this.ui, this);
            };
            x4.prototype.componentWillUnmount = function () {
              o6.context.event.off("Shell.Scaled", this.ui, this);
            };
            x4.prototype.render = function () {
              var x5 = {
                flexDirection: "row"
              };
              var x6 = [this.Mi(), this.Sr()];
              var x8 = {
                backgroundColor: o6.appearanceHelper.listBackgroundColor
              };
              var x9 = {
                'id': "game-list-view",
                className: "game-list-view-container game-list-view-container-slot",
                style: x8
              };
              if (shell.isRTLLanguage()) {
                x6 = x6.reverse();
                x5.justifyContent = "flex-end";
              }
              return G.createElement("div", x9, G.createElement("div", {
                'id': "game-list-view-wrapper",
                'style': x5
              }, x6), this.Dr(this.state));
            };
            x4.prototype._r = function () {
              var x5 = this;
              var x6 = this.state.currentPageState;
              switch (x6) {
                case H0.HistoryDetails:
                case H0.HistoryFreeSpinDetails:
                case H0.HistoryCalendar:
                  var x7 = {
                    selectedIndex: -0x1
                  };
                  this.Br(0.25);
                  this.setState(x7);
                  yb(0.05)(function () {
                    var x9 = {
                      currentPageState: H0.HistoryList,
                      previousPageState: x6
                    };
                    x5.setState(x9);
                  });
                  break;
                case H0.HistoryList:
                  var x8 = {
                    currentPageState: H0.HistoryCalendar,
                    previousPageState: x6
                  };
                  this.setState(x8);
              }
            };
            x4.prototype.wr = function () {
              var x5 = this.state.currentPageState;
              switch (x5) {
                case H0.HistoryCalendar:
                  var x6 = {
                    currentPageState: H0.HistoryList,
                    previousPageState: x5
                  };
                  if (this.state.currentCalendarState === H1.SELECTION) {
                    this.setState(x6);
                  } else {
                    this.setState({
                      'currentCalendarState': H1.SELECTION
                    });
                  }
                  break;
                case H0.HistoryList:
                  if (this.props.quitCallback) {
                    this.props.quitCallback();
                  }
              }
            };
            x4.prototype.Cr = function (x5) {
              var x6 = this.state.currentPageState;
              var x7 = this.state.model;
              x7.calendarType = x5;
              this.setState({
                'currentCalendarState': H1.SELECTION,
                'currentPageState': H0.HistoryList,
                'previousPageState': x6,
                'model': x7,
                'selectedIndex': -0x1
              });
              this.props.changeCalendarType(x5);
            };
            x4.prototype.kr = function (x5) {
              var x6 = {
                currentCalendarState: x5
              };
              this.setState(x6);
            };
            x4.prototype.Bn = function (x5) {
              var x6 = this.state;
              var x7 = x6.currentPageState;
              var x8 = x6.selectedIndex;
              if (!this.Rr) {
                if (x7 === H0.HistoryDetails && x8 !== x5) {
                  this.Br(0.2);
                  this.setState({
                    'selectedIndex': x5
                  });
                } else {
                  this.Br(0.2);
                  this.setState({
                    'currentPageState': H0.HistoryDetails,
                    'previousPageState': x7,
                    'selectedIndex': x5
                  });
                }
              }
            };
            x4.prototype.Mi = function () {
              var x5 = {
                width: "20%",
                height: "100%"
              };
              var x7 = {
                model: this.state.model,
                currentCalendarState: this.state.currentCalendarState,
                onCalendarCustomClicked: this.kr,
                onChangeCalendarTypeCallback: this.Cr,
                isLoading: this.props.isLoading
              };
              if (shell.isRTLLanguage()) {
                x5.boxShadow = "-1px 0 4px 0 rgba(0,0,0,0.3)";
              }
              return G.createElement("div", {
                'key': "game-list-view-navbar-container-horizontal",
                'id': "game-list-view-navbar-container-horizontal",
                'style': x5
              }, G.createElement(yH, x7));
            };
            x4.prototype.Sr = function () {
              var x5 = this.props.fadeLoading;
              var x6 = this.state;
              var x7 = x6.currentPageState;
              var x8 = x6.detailsPageWidth;
              var x9 = x7 === H0.HistoryDetails ? 0x64 * x8 : 0x0;
              if (this.props.isLoading) {
                var xq = {
                  width: "80%",
                  left: "20%",
                  backgroundColor: o6.appearanceHelper.listBackgroundColor
                };
                var xQ = {
                  'id': "game-list-view-wrapper"
                };
                var xH = {
                  isHorizontal: true,
                  isFade: x5,
                  onButtonClickCallback: this.props.quitCallback,
                  isMobile: false
                };
                if (shell.isRTLLanguage()) {
                  xq.right = "20%";
                  xq.left = 0x0;
                }
                return G.createElement("div", {
                  'key': "game-list-view-loading",
                  'id': "game-list-view-loading",
                  'className': "game-list-view-container game-list-view-container-slot",
                  'style': xq
                }, G.createElement("div", xQ, G.createElement(i0, xH)));
              }
              return G.createElement("div", {
                'key': "game-list-view-contents-container",
                'id': "game-list-view-contents-container",
                'className': "transition-width-on ",
                'style': {
                  'height': "100%",
                  'width': ''.concat(0x50 - x9, '%')
                }
              }, this.Nr());
            };
            x4.prototype.Nr = function () {
              var x5 = [];
              var x6 = {
                height: "calc(100% - 233px)"
              };
              var x7 = {
                'id': "game-list-view-no-items-container",
                key: "game-list-view-no-items-container",
                style: x6
              };
              var x8 = {
                fontSize: "30px"
              };
              var x9 = {
                className: "game-list-view-no-item-label",
                style: x8
              };
              x5.push(this.Tr());
              x5.push(G.createElement(bG, {
                'key': "game-list-table-header",
                'currencySymbol': this.props.model.currencySymbol
              }));
              if (this.state.model.betHistoryItems.length > 0x0) {
                x5.push(G.createElement(bp, {
                  'key': "game-list-scroller",
                  'model': this.props.model,
                  'onListItemClickCallback': this.Bn,
                  'loadMoreApiCallback': this.props.onLoadMoreRequestApi,
                  'selectedIndex': this.state.selectedIndex
                }));
              } else {
                x5.push(G.createElement("div", x7, G.createElement("div", x9, yy.t("History.HistoryNoHistory"))));
              }
              return x5;
            };
            x4.prototype.Tr = function () {
              var x5 = this.state.model.betSummaryModel[0x0];
              var x6 = this.state.currentPageState;
              return G.createElement(yW, {
                'key': "game-list-footer-land",
                'date': this.Or(),
                'record': x5.betCount,
                'totalBet': x5.batchTotalBetAmount,
                'totalProfit': x5.batchTotalWinLossAmount,
                'currencySymbol': this.props.model.currencySymbol,
                'closeButtonClickedCallback': this.props.quitCallback,
                'disableCloseButton': x6 === H0.HistoryDetails,
                'shrink': x6 === H0.HistoryDetails || x6 === H0.HistoryFreeSpinDetails
              });
            };
            x4.prototype.Dr = function (x5) {
              var x6 = this;
              var x7 = x5.currentPageState;
              var x8 = x5.model;
              var x9 = x5.selectedIndex;
              var xq = x5.parentWidth;
              var xN = x5.detailsPageWidth;
              var xQ = 'ie' === shell.environment.getBrowserBaseType() ? '' : "translate3d(0, 0, 0)";
              if (0x0 !== x8.betHistoryItems.length && x8.betHistoryItems[x9]) {
                var xH = x8.betHistoryItems[x9].betDetailsRaw;
                var xd = {
                  'position': "absolute",
                  'transform': "scale(1.6875) ".concat(xQ),
                  'top': '0',
                  'transformOrigin': "left top"
                };
                var xW = {
                  'left': ''.concat(xq, 'px')
                };
                var xb = {
                  'left': ''.concat(xq - xq * xN, 'px')
                };
                var xy = {
                  'left': ''.concat(xq, 'px')
                };
                if (shell.isRTLLanguage()) {
                  xd.transformOrigin = "right top";
                  xW = {
                    'right': ''.concat(xq, 'px')
                  };
                  xb = {
                    'right': ''.concat(xq - xq * xN, 'px')
                  };
                  xy = {
                    'right': ''.concat(xq, 'px')
                  };
                }
                return G.createElement(F, {
                  'key': "game-detail-view-transition",
                  'config': H6,
                  'items': x7,
                  'from': xW,
                  'enter': xb,
                  'leave': xy
                }, function (xG) {
                  return xG === H0.HistoryDetails && function (xx) {
                    var xU = {
                      key: "game-detail-view",
                      betDetailsRaw: xH,
                      gameId: x8.gameId,
                      currencySymbol: x8.currencySymbol,
                      navLeftButtonCallback: x6._r,
                      navRightButtonCallback: x6.props.quitCallback,
                      quitCallback: x6.props.quitCallback
                    };
                    return G.createElement(X.div, {
                      'id': "game-list-detail-wrapper",
                      'className': "game-list-detail-wrapper-h",
                      'style': QI(QI({}, xx), xd)
                    }, G.createElement(bb, xU));
                  };
                });
              }
            };
            x4.prototype.Or = function () {
              var x5 = '';
              switch (this.state.model.calendarType) {
                case 0x1:
                default:
                  x5 = yy.t("History.HistoryCalenderToday");
                  break;
                case 0x2:
                  x5 = yy.t("History.HistoryCalenderWeek");
                  break;
                case 0x3:
                  x5 = o9(this.state.model.calendarCustomDateConfig.startDate, true) + " - " + o9(this.state.model.calendarCustomDateConfig.endDate, true);
              }
              return x5;
            };
            x4.prototype.ui = function (x5) {
              var x6 = 0x3 * x5.payload.width;
              var x7 = 607.5 / x6;
              var x8 = {
                parentWidth: x6,
                detailsPageWidth: x7
              };
              this.setState(x8);
            };
            x4.prototype.Br = function (x5) {
              var x6 = this;
              if (undefined === x5) {
                x5 = 0.15;
              }
              if (!this.Rr) {
                this.Rr = true;
                yb(x5)(function () {
                  x6.Rr = false;
                });
              }
            };
            return x4;
          }(G.PureComponent);
          function yx(x3, x4) {
            var x5 = [];
            x3.forEach(function (x6) {
              var x7;
              var x8;
              var x9;
              var xq = {
                'x': 0x0,
                'y': 0x0,
                width: 0x0,
                height: 0x0
              };
              var xN = {
                'x': 0x0,
                'y': 0x0,
                width: 0x0,
                height: 0x0,
                isRotate: false
              };
              x7 = x6.resolvePath;
              x8 = xq;
              x9 = x6.colour;
              if (undefined === x8) {
                x8 = xN;
              }
              x5.push(new Promise(function (xQ, xH) {
                var xd = new plugin.Loader();
                xd.onLoad = function (xW) {
                  var xb = document.createElement("canvas");
                  var xy = xb.getContext('2d');
                  if (null !== xy) {
                    var xG = new Image();
                    xG.onload = function () {
                      URL.revokeObjectURL(xG.src);
                      var xx = 0x0 === x8.width ? xG.width : x8.width;
                      var xU = 0x0 === x8.height ? xG.height : x8.height;
                      xb.width = xx;
                      xb.height = xU;
                      xy.clearRect(0x0, 0o0, xx, xU);
                      xy.translate(xx / 0x2, xU / 0x2);
                      if (x8.isRotate) {
                        xy.rotate(0x10e * Math.PI / 0xb4);
                        xy.drawImage(xG, x8.x, x8.y, xU, xx, -xU / 0x2, -xx / 0x2, xU, xx);
                      } else {
                        xy.drawImage(xG, x8.x, x8.y, xx, xU, -xx / 0x2, -xU / 0x2, xx, xU);
                      }
                      var xR = xy.getImageData(0x0, 0, xx, xU);
                      var xO = xR.data;
                      if (x9) {
                        var xM = 0x0;
                        for (var xP = xO.length; xM < xP; xM += 0x4) {
                          xO[xM] = x9.r;
                          xO[xM + 0x1] = x9.g;
                          xO[xM + 0x2] = x9.b;
                        }
                      }
                      xy.putImageData(xR, 0x0, 0x0);
                      xQ(xb.toDataURL());
                    };
                    xG.onerror = function () {
                      xH(Error("ImageBase64 load image failed"));
                    };
                    xG.src = URL.createObjectURL(xW.response);
                  }
                };
                xd.onError = function (xW) {
                  xH(xW);
                };
                xd.load([{
                  'src': x7,
                  'type': plugin.LoadType.Blob
                }]);
              }));
            });
            Promise.all(x5).then(function (x6) {
              var x7 = [];
              x6.forEach(function (x8) {
                x7.push(x8);
              });
              if (x4) {
                x4(x7, undefined);
              }
            })["catch"](function (x6) {
              if (x4) {
                x4(undefined, x6);
              }
            });
          }
          var yU = {};
          function yR(x3, x4, x5) {
            var x6;
            var x7 = this;
            var x8 = x3.src;
            var x9 = "unknown";
            x9 = -0x1 !== x8.indexOf(".css") ? "css" : x9;
            x9 = -0x1 !== (x6 = x8).indexOf(".jpg") || -0x1 !== x6.indexOf(".png") ? "image" : x9;
            var xq = shell.Error;
            var xN = shell.ClientError;
            var xQ = xq && new xq(xN.Domain, xN.GameLoadResourceError);
            var xH = x4.resource.resolveUrl(x8);
            return new Promise(function (xd, xW) {
              return __awaiter(x7, undefined, undefined, function () {
                var xb;
                return __generator(this, function (xy) {
                  switch (xy.label) {
                    case 0x0:
                      xy.trys.push([0x0, 0x9,, 0xa]);
                      return "image" !== x9 ? [0x3, 0x5] : x3.tint ? [0x4, (xG = [{
                        'resolvePath': xH,
                        'colour': x3.tint
                      }], new Promise(function (xx, xU) {
                        yx(xG, function (xR, xO) {
                          if (xO || xR && 0x0 === xR.length) {
                            var xM = shell.Error;
                            var xP = shell.ClientError;
                            var xJ = xM && new xM(xP.Domain, xP.GameLoadResourceError);
                            xU(xO || xJ);
                          }
                          xx(xR);
                        });
                      }))] : [0x3, 0x2];
                    case 0x1:
                      xb = xy.sent();
                      xd(xb[0x0]);
                      return [0x3, 0x4];
                    case 0x2:
                      return [0x4, yS(xH, x5)];
                    case 0x3:
                      xb = xy.sent();
                      xd(xb);
                      xy.label = 0x4;
                    case 0x4:
                      return [0x3, 0x8];
                    case 0x5:
                      return "css" !== x9 ? [0x3, 0x7] : [0x4, ys(xH, x4, x5)];
                    case 0x6:
                      xb = xy.sent();
                      xd(xb);
                      return [0x3, 0x8];
                    case 0x7:
                      xW(xQ);
                      xy.label = 0x8;
                    case 0x8:
                      return [0x3, 0xa];
                    case 0x9:
                      xy.sent();
                      xW(xQ);
                      return [0x3, 0xa];
                    case 0xa:
                      return [0x2];
                  }
                  var xG;
                });
              });
            });
          }
          function yO(x3, x4, x5, x6, x7) {
            if (undefined === x6) {
              x6 = false;
            }
            return new Promise(function (x8, x9) {
              if (x6) {
                x3 = x3.replace(/url\((.*?)\)/g, function () {
                  return "url(" + x5 + ')';
                });
                x8(x3);
              } else {
                yM(x4.resource.resolveUrl(x5), x7).then(function (xq) {
                  x3 = x3.replace(/url\((.*?)\)/g, function () {
                    return "url(" + URL.createObjectURL(xq) + ')';
                  });
                  x8(x3);
                })["catch"](x9);
              }
            });
          }
          function yM(x3, x4) {
            var x5 = this;
            var x6 = shell.Error;
            var x7 = shell.ClientError;
            var x8 = x6 && new x6(x7.Domain, x7.GameLoadResourceError);
            return new Promise(function (x9, xq) {
              return __awaiter(x5, undefined, undefined, function () {
                var xN;
                return __generator(this, function (xQ) {
                  switch (xQ.label) {
                    case 0x0:
                      xQ.trys.push([0x0, 0x2,, 0x3]);
                      return [0x4, yf(x3, x4)];
                    case 0x1:
                      xN = xQ.sent();
                      x9(xN);
                      return [0x3, 0x3];
                    case 0x2:
                      xQ.sent();
                      xq(x8);
                      return [0x3, 0x3];
                    case 0x3:
                      return [0x2];
                  }
                });
              });
            });
          }
          function yP(x3, x4) {
            return x3.replace(/url\((.*?)\)/g, function (x5, x6) {
              return "url(" + x4.resource.resolveUrl(x6) + ')';
            });
          }
          function yJ(x3, x4) {
            var x5 = [];
            var x6 = x4.bundleInfo.name;
            if (!yU[x6]) {
              yU[x6] = [];
            }
            if (!Array.isArray(x3)) {
              x3 = [x3];
            }
            var x7 = yU[x6].length + 0x1;
            x3.forEach(function (x8, x9) {
              var xq = x7 + x9;
              var xN = "$CSS-" + x4.bundleInfo.name + '-' + xq;
              x5.push(xN);
              (function (xQ, xH, xd) {
                if (-0x1 === yU[xH].indexOf(xQ)) {
                  var xW = document.createElement("style");
                  xW.id = xQ;
                  xW.innerHTML = xd;
                  document.head.appendChild(xW);
                  yU[xH].push(xQ);
                }
              })(xN, x4.bundleInfo.name, x8);
            });
            return x5;
          }
          function yS(x3, x4) {
            var x5 = new plugin.Loader();
            return new Promise(function (x6, x7) {
              x5.onLoad = function (x8) {
                x6(x8.response);
              };
              x5.onError = function (x8) {
                x7(x8);
              };
              x5.load([{
                'src': x3,
                'type': plugin.LoadType.Image,
                'maxAttemptCount': x4
              }]);
            });
          }
          function ys(x3, x4, x5) {
            var x6 = new plugin.Loader();
            return new Promise(function (x7, x8) {
              x6.onLoad = function (x9) {
                var xq = yP(x9.response, x4);
                x7(xq);
              };
              x6.onError = function (x9) {
                x8(x9);
              };
              x6.load([{
                'src': x3,
                'type': plugin.LoadType.Text,
                'maxAttemptCount': x5
              }]);
            });
          }
          function yf(x3, x4) {
            var x5 = new plugin.Loader();
            return new Promise(function (x6, x7) {
              x5.onLoad = function (x8) {
                x6(x8.response);
              };
              x5.onError = function (x8) {
                x7(x8);
              };
              x5.load([{
                'src': x3,
                'type': plugin.LoadType.Blob,
                'maxAttemptCount': x4
              }]);
            });
          }
          function yL(x3) {
            oQ("History Load Resources Error", x3.domain, x3.code);
          }
          function yz(x3) {
            return new Promise(function (x4, x5) {
              var x6 = x3.map(function (x7) {
                return function (x8, x9, xq) {
                  return __awaiter(this, undefined, undefined, function () {
                    var xN;
                    var xQ;
                    return __generator(this, function (xH) {
                      switch (xH.label) {
                        case 0x0:
                          return x8.cssFile.endsWith(".css") ? [0x4, yR({
                            'src': x8.cssFile
                          }, x9, xq)] : [0x3, 0x2];
                        case 0x1:
                          xN = xH.sent();
                          return [0x3, 0x3];
                        case 0x2:
                          xN = x8.cssFile;
                          xH.label = 0x3;
                        case 0x3:
                          return x8.tint ? [0x4, yR({
                            'src': x8.imageFile,
                            'tint': x8.tint
                          }, x9, xq)] : [0x3, 0x6];
                        case 0x4:
                          xQ = xH.sent();
                          return [0x4, yO(xN, x9, xQ, true, xq)];
                        case 0x5:
                          xN = xH.sent();
                          return [0x3, 0x8];
                        case 0x6:
                          return [0x4, yO(xN, x9, x8.imageFile, false, xq)];
                        case 0x7:
                          xN = xH.sent();
                          xH.label = 0x8;
                        case 0x8:
                          if (x8.appendHeader) {
                            yJ(xN, x9);
                          }
                          return [0x2, xN];
                      }
                    });
                  });
                }(x7, o6.context);
              });
              Promise.all(x6).then(function () {
                x4();
              })["catch"](function (x7) {
                yL(x7);
                x5(x7);
              });
            });
          }
          var yk = false;
          function yF() {
            return new Promise(function (x3, x4) {
              if (yk) {
                x3();
              } else {
                yz([{
                  'cssFile': ".gh_theme_sprite{background-image:url(gh_theme_sprite.png);background-repeat:no-repeat;background-size:442px 50px;display:inline-block;overflow:hidden}.gh_theme_sprite.gh_ic_copy{background-position:-401px -1px;height:40px;min-height:40px;min-width:40px;width:40px}.gh_theme_sprite.gh_ic_mark_tick{background-position:-1px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_bonus_game{background-position:-51px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_collapse{background-position:-101px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_free_spin{background-position:-151px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_freehand{background-position:-201px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_gift{background-position:-251px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_jackpot{background-position:-301px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_super6{background-position:-351px -1px;height:48px;min-height:48px;min-width:48px;width:48px}",
                  'imageFile': "sprite/gh_theme_sprite.png",
                  'tint': shell.uiAppearance.v("game.theme_color"),
                  'appendHeader': true
                }]).then(function () {
                  yk = true;
                  x3();
                })["catch"](function (x5) {
                  x4(x5);
                });
              }
            });
          }
          function yp(x3) {
            var x4 = {
              backgroundColor: o6.appearanceHelper.navBarPanelColor
            };
            var x6 = x3.currentPageState === H0.HistoryList ? 0x1 : 0.5;
            var x7 = {
              'id': "side-bar-menu-container",
              style: x4
            };
            var x8 = {
              'id': "side-bar-menu-calendar-container",
              className: "side-bar-menu-item"
            };
            var x9 = {
              transform: "translateX(7px) scale(0.325)",
              transformOrigin: "left top",
              opacity: x6
            };
            var xq = {
              'id': "side-bar-menu-calendar-icon-wrapper-container",
              style: x9,
              onClick: x3.calendarIconCallback
            };
            var xN = {
              className: "gh_ic_nav_calendar gh_basic_sprite"
            };
            return G.createElement("div", x7, G.createElement("div", x8, G.createElement("div", xq, G.createElement("div", xN))));
          }
          var io = shell.I18n;
          var ym = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.state = {
                'isCustomOpen': x6.props.currentCalendarState === H1.CUSTOM
              };
              x6.nn = x6.nn.bind(x6);
              x6.rn = x6.rn.bind(x6);
              x6.an = x6.an.bind(x6);
              x6.G = x6.G.bind(x6);
              x6.Ir = x6.Ir.bind(x6);
              x6.Lr = x6.Lr.bind(x6);
              x6.Pr = x6.Pr.bind(x6);
              x6.sn = x6.sn.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.render = function () {
              var x5 = {
                backgroundColor: o6.appearanceHelper.calendarBackgroundColor,
                paddingTop: "10px"
              };
              if (shell.isRTLLanguage()) {
                x5.paddingRight = "30px";
                x5.direction = "rtl";
              }
              return G.createElement("div", {
                'id': "calendar-view-container-horizontal-mobile",
                'style': x5
              }, this.ln());
            };
            x4.prototype.nn = function () {
              if (!this.props.isLoading) {
                if (this.props.onChangeCalendarTypeCallback) {
                  this.props.onChangeCalendarTypeCallback(1);
                }
              }
            };
            x4.prototype.rn = function () {
              if (!this.props.isLoading) {
                if (this.props.onChangeCalendarTypeCallback) {
                  this.props.onChangeCalendarTypeCallback(0o2);
                }
              }
            };
            x4.prototype.an = function () {
              var x5 = {
                isCustomOpen: false
              };
              var x6 = {
                isCustomOpen: true
              };
              if (!this.props.isLoading) {
                if (this.state.isCustomOpen) {
                  this.setState(x5);
                } else {
                  this.setState(x6);
                }
              }
            };
            x4.prototype.G = function (x5, x6) {
              var x7 = {
                startDate: x5,
                endDate: x6
              };
              var x8 = {
                isCustomOpen: false
              };
              if (!this.props.isLoading) {
                this.props.model.calendarCustomDateConfig = x7;
                this.props.onChangeCalendarTypeCallback(0x3);
                this.setState(x8);
              }
            };
            x4.prototype.ln = function () {
              var x5 = {
                color: o6.appearanceHelper.calendarTitleColor
              };
              var x6 = [];
              var x8 = {
                className: "calendar-item-label"
              };
              if (shell.isRTLLanguage()) {
                x5.textAlign = "right";
              }
              x6.push(G.createElement("div", {
                'className': "calendar-item-container-horizontal-mobile calendar-item-container",
                'key': "select-date-range",
                'style': x5
              }, G.createElement("div", x8, io.t("History.HistoryCalendarDateRange"))));
              x6.push(this.Ir());
              x6.push(this.Lr());
              x6.push(this.Pr());
              x6.push(this.sn());
              return x6;
            };
            x4.prototype.Ir = function () {
              var x5 = this.state.isCustomOpen;
              var x6 = 0x1 === this.props.currentCalendarType;
              var x7 = !x5 && x6 ? o6.appearanceHelper.highlightFontColor : o6.appearanceHelper.primaryFontColor;
              var x8 = {};
              var x9 = {
                color: x7
              };
              var xq = {
                className: "calendar-item-label",
                style: x9
              };
              if (shell.isRTLLanguage()) {
                x8.textAlign = "right";
              }
              return G.createElement("div", {
                'className': "calendar-item-container-horizontal-mobile calendar-item-container",
                'onClick': this.nn,
                'key': "calendar-date-today",
                'style': x8
              }, G.createElement("div", xq, io.t("History.HistoryCalenderToday")));
            };
            x4.prototype.Lr = function () {
              var x5 = this.state.isCustomOpen;
              var x6 = 0x2 === this.props.currentCalendarType;
              var x7 = !x5 && x6 ? o6.appearanceHelper.highlightFontColor : o6.appearanceHelper.primaryFontColor;
              var x8 = {};
              var x9 = {
                color: x7
              };
              var xq = {
                className: "calendar-item-label",
                style: x9
              };
              if (shell.isRTLLanguage()) {
                x8.textAlign = "right";
              }
              return G.createElement("div", {
                'className': "calendar-item-container-horizontal-mobile calendar-item-container",
                'onClick': this.rn,
                'key': "calendar-date-week",
                'style': x8
              }, G.createElement("div", xq, io.t("History.HistoryCalenderWeek")));
            };
            x4.prototype.Pr = function () {
              var x5 = this.state.isCustomOpen;
              var x6 = x5 ? "angle-up" : "angle-down";
              var x7 = 0x3 === this.props.currentCalendarType || x5 ? o6.appearanceHelper.highlightFontColor : o6.appearanceHelper.primaryFontColor;
              var x9 = x5 ? "translateY(4px)" : "translateY(-4px)";
              var xq = {};
              var xN = {
                color: x7
              };
              var xQ = {
                className: "calendar-item-label",
                style: xN
              };
              var xH = {
                'id': "calendar-arrow-image-container"
              };
              var xd = {
                transform: x9
              };
              var xW = {
                className: "gh-angle-wrapper",
                style: xd
              };
              var xb = {
                borderColor: x7
              };
              if (shell.isRTLLanguage()) {
                xq.textAlign = "right";
              }
              return G.createElement("div", {
                'id': "calendar-custom-container",
                'className': "calendar-item-container-horizontal-mobile",
                'onClick': this.an,
                'key': "calendar-custom-container",
                'style': xq
              }, G.createElement("div", {
                'className': "calendar-item-container calendar-item-container-horizontal-mobile",
                'style': xq
              }, G.createElement("div", xQ, io.t("History.HistoryCalenderCustom"))), G.createElement("div", xH, G.createElement("div", xW, G.createElement("div", {
                'id': "calendar-arrow",
                'className': "gh-angle-horizontal-mobile ".concat(x6),
                'style': xb
              }))));
            };
            x4.prototype.sn = function () {
              var x5 = undefined;
              if (this.state.isCustomOpen) {
                var x6 = {
                  transform: "scale(0.6) translateY(-20px)",
                  transformOrigin: "left top"
                };
                if (shell.isRTLLanguage()) {
                  x6.transformOrigin = "right top";
                }
                x5 = G.createElement("div", {
                  'id': "calendar-custom-view-container",
                  'style': x6,
                  'key': "calendar-custom-view-container"
                }, G.createElement(Hb.CalendarCustomViewH, {
                  'key': "calendar-custom-view",
                  'caseType': Hb.CaseType.SLOT_GAME,
                  'isRTL': shell.isRTLLanguage(),
                  'themeColor': o6.appearanceHelper.calendarColor,
                  'backgroundColor': o6.appearanceHelper.calendarBackgroundColor,
                  'onConfirmClicked': this.G
                }));
              }
              return x5;
            };
            return x4;
          }(G.Component);
          var yX = shell.I18n;
          var yw = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = H0.HistoryList;
              var x8 = document.getElementById("game-history-container");
              var x9 = {
                currentPageState: x7,
                currentCalendarState: H1.SELECTION,
                selectedIndex: 0x0,
                parentHeight: x8.offsetHeight
              };
              x6.yr = G.createRef();
              x6.state = x9;
              x6.Bn = x6.Bn.bind(x6);
              x6.Ar = x6.Ar.bind(x6);
              x6.Cr = x6.Cr.bind(x6);
              x6._r = x6._r.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              o6.context.event.on("Shell.Scaled", this.ui, this);
            };
            x4.prototype.componentWillUnmount = function () {
              o6.context.event.off("Shell.Scaled", this.ui, this);
            };
            x4.prototype.render = function () {
              var x5 = [this.Mi(), this.Er()];
              var x6 = {
                backgroundColor: o6.appearanceHelper.listBackgroundColor
              };
              var x7 = {
                'id': "game-list-view",
                className: "game-list-view-container game-list-view-container-slot",
                style: x6
              };
              var x8 = {
                flexDirection: "row"
              };
              var x9 = {
                'id': "game-list-view-wrapper",
                style: x8
              };
              return G.createElement("div", x7, G.createElement("div", x9, shell.isRTLLanguage() ? x5.reverse() : x5));
            };
            x4.prototype.Er = function () {
              var x5 = {
                width: "calc(100% - 51px)",
                height: "inherit",
                position: "relative",
                zIndex: 0x1
              };
              var x6 = {
                key: "game-list-view-content",
                'id': "game-list-view-content",
                style: x5
              };
              return G.createElement("div", x6, this.Sr(), this.Wr(), this.Yr(), this.Dr());
            };
            x4.prototype.Mi = function () {
              var x5 = {
                key: "game-list-view-navbar-container-horizontal-mobile",
                'id': "game-list-view-navbar-container-horizontal-mobile"
              };
              var x6 = {
                calendarIconCallback: this.Ar,
                currentPageState: this.state.currentPageState
              };
              var x7 = {
                className: "game-list-nav-separator-horizontal"
              };
              return G.createElement("div", x5, G.createElement(yp, x6), G.createElement("div", x7));
            };
            x4.prototype.Sr = function () {
              var x5 = this.props.fadeLoading;
              var x6 = this.state.currentPageState;
              if (this.props.isLoading) {
                var x7 = {
                  width: "100%",
                  backgroundColor: o6.appearanceHelper.listBackgroundColor
                };
                var x9 = {
                  key: "game-list-view-loading",
                  'id': "game-list-view-loading",
                  className: "game-list-view-container game-list-view-container-slot",
                  style: x7
                };
                var xq = {
                  'id': "game-list-view-wrapper"
                };
                var xN = {
                  isHorizontal: true,
                  isFade: x5,
                  onButtonClickCallback: this.props.quitCallback,
                  isMobile: true
                };
                return G.createElement("div", x9, G.createElement("div", xq, G.createElement(i0, xN)));
              }
              var xQ = {
                height: "100%",
                width: "100%",
                zIndex: x6 === H0.HistoryList ? 0x1 : -0x1
              };
              var xH = {
                key: "game-list-view-contents-container",
                'id': "game-list-view-contents-container",
                ref: this.yr,
                style: xQ
              };
              return G.createElement("div", xH, this.Nr());
            };
            x4.prototype.Nr = function () {
              var x5 = [];
              var x6 = {
                fontSize: "14px",
                transform: "translateY(-50px)"
              };
              var x7 = {
                className: "game-list-view-no-item-label",
                style: x6
              };
              x5.push(this.Tr());
              x5.push(G.createElement(bG, {
                'key': "game-list-table-header",
                'currencySymbol': this.props.model.currencySymbol
              }));
              if (this.props.model.betHistoryItems.length > 0x0) {
                x5.push(G.createElement(bp, {
                  'key': "game-list-scroller",
                  'model': this.props.model,
                  'onListItemClickCallback': this.Bn,
                  'loadMoreApiCallback': this.props.onLoadMoreRequestApi,
                  'selectedIndex': this.state.selectedIndex
                }));
              } else {
                x5.push(G.createElement("div", {
                  'id': "game-list-view-no-items-container",
                  'key': "game-list-view-no-items-container",
                  'style': {
                    'height': "calc(100% - ".concat(0x54 + oR(), "px)")
                  }
                }, G.createElement("div", x7, yX.t("History.HistoryNoHistory"))));
              }
              return x5;
            };
            x4.prototype.Wr = function () {
              if (this.state.currentPageState === H0.HistoryCalendar) {
                var x5 = {};
                if (shell.isRTLLanguage()) {
                  x5.right = "50px";
                  x5.left = 0x0;
                }
                return G.createElement("div", {
                  'id': "calendar-view-background-horizontal-mobile",
                  'onClick': this.Ar,
                  'style': x5
                });
              }
            };
            x4.prototype.Yr = function () {
              var x5 = {
                left: "-280px"
              };
              var x6 = {
                left: '0'
              };
              var x7 = {
                left: "-280px"
              };
              var x8 = this;
              var x9 = this.state.currentPageState;
              var xq = x5;
              var xN = x6;
              var xQ = x7;
              var xH = {
                right: "-280px"
              };
              var xd = {
                right: '0'
              };
              var xW = {
                right: "-280px"
              };
              if (shell.isRTLLanguage()) {
                xq = xH;
                xN = xd;
                xQ = xW;
              }
              return G.createElement(F, {
                'key': "calendar-view-transition",
                'config': H6,
                'items': x9,
                'from': xq,
                'enter': xN,
                'leave': xQ
              }, function (xb) {
                return xb === H0.HistoryCalendar && function (xy) {
                  var xG = {
                    top: '0',
                    position: "absolute",
                    width: "280px",
                    height: "inherit",
                    zIndex: '3'
                  };
                  var xx = {
                    model: x8.props.model,
                    currentCalendarType: x8.props.model.calendarType,
                    currentCalendarState: x8.state.currentCalendarState,
                    onChangeCalendarTypeCallback: x8.Cr,
                    isLoading: x8.props.isLoading
                  };
                  return G.createElement(X.div, {
                    'style': QI(QI({}, xy), xG)
                  }, G.createElement(ym, xx));
                };
              });
            };
            x4.prototype.Tr = function () {
              var x5 = this.props.model.betSummaryModel[0x0];
              var x6 = this.state.currentPageState;
              return G.createElement(yW, {
                'key': "game-list-footer-land",
                'date': this.Or(),
                'record': x5.betCount,
                'totalBet': x5.batchTotalBetAmount,
                'totalProfit': x5.batchTotalWinLossAmount,
                'currencySymbol': this.props.model.currencySymbol,
                'closeButtonClickedCallback': this.props.quitCallback,
                'disableCloseButton': x6 === H0.HistoryDetails,
                'shrink': false,
                'isMobile': true
              });
            };
            x4.prototype.Or = function () {
              var x5 = '';
              switch (this.props.model.calendarType) {
                case 0x1:
                default:
                  x5 = yX.t("History.HistoryCalenderToday");
                  break;
                case 0x2:
                  x5 = yX.t("History.HistoryCalenderWeek");
                  break;
                case 0x3:
                  x5 = o9(this.props.model.calendarCustomDateConfig.startDate, true) + " - " + o9(this.props.model.calendarCustomDateConfig.endDate, true);
              }
              return x5;
            };
            x4.prototype.Dr = function () {
              var x5 = this;
              var x6 = this.state;
              var x7 = x6.currentPageState;
              var x8 = x6.selectedIndex;
              var x9 = this.props.model;
              if (0x0 !== x9.betHistoryItems.length && x9.betHistoryItems[x8]) {
                var xq = {
                  left: "100%"
                };
                var xN = {
                  left: '0%'
                };
                var xQ = {
                  left: "100%"
                };
                var xH = x9.betHistoryItems[x8].betDetailsRaw;
                var xd = xq;
                var xW = xN;
                var xb = xQ;
                var xy = {
                  right: "100%"
                };
                var xG = {
                  right: '0%'
                };
                var xx = {
                  right: "100%"
                };
                if (shell.isRTLLanguage()) {
                  xd = xy;
                  xW = xG;
                  xb = xx;
                }
                return G.createElement(F, {
                  'key': "game-detail-view-transition",
                  'config': H6,
                  'items': x7,
                  'from': xd,
                  'enter': xW,
                  'leave': xb,
                  'onStart': function () {
                    if (x7 !== H0.HistoryDetails) {
                      x5.Fr(true);
                    }
                  },
                  'onRest': function () {
                    if (x7 === H0.HistoryDetails) {
                      x5.Fr(false);
                    }
                  }
                }, function (xU) {
                  return xU === H0.HistoryDetails && function (xR) {
                    var xO = {
                      top: '0',
                      position: "absolute",
                      width: "100%",
                      height: "inherit",
                      zIndex: '3'
                    };
                    var xM = {
                      key: "game-detail-view",
                      betDetailsRaw: xH,
                      gameId: x9.gameId,
                      currencySymbol: x9.currencySymbol,
                      navLeftButtonCallback: x5._r,
                      navRightButtonCallback: x5.props.quitCallback,
                      quitCallback: x5.props.quitCallback
                    };
                    return G.createElement(X.div, {
                      'style': QI(QI({}, xR), xO)
                    }, G.createElement(bb, xM));
                  };
                });
              }
            };
            x4.prototype.Bn = function (x5) {
              var x6 = {
                currentPageState: H0.HistoryDetails,
                selectedIndex: x5
              };
              this.setState(x6);
            };
            x4.prototype.Ar = function () {
              if (this.state.currentPageState === H0.HistoryList) {
                this.setState({
                  'currentPageState': H0.HistoryCalendar
                });
              } else if (this.state.currentPageState === H0.HistoryCalendar) {
                this.setState({
                  'currentPageState': H0.HistoryList
                });
              }
            };
            x4.prototype.Cr = function (x5) {
              var x6 = {
                currentCalendarState: H1.SELECTION,
                currentPageState: H0.HistoryList
              };
              this.props.model.calendarType = x5;
              this.setState(x6);
              this.props.changeCalendarType(x5);
            };
            x4.prototype._r = function () {
              var x5 = {
                currentPageState: H0.HistoryList
              };
              this.setState(x5);
            };
            x4.prototype.ui = function (x5) {
              var x6 = x5.payload.height;
              var x7 = {
                parentHeight: x6
              };
              this.setState(x7);
            };
            x4.prototype.Fr = function (x5) {
              if (this.yr.current) {
                this.yr.current.style.display = x5 ? "block" : "none";
              }
            };
            return x4;
          }(G.PureComponent);
          function yD(x3) {
            var x4 = W.String(x3);
            var x5 = [];
            for (var x6 = 0x0; x6 < x4.length; x6++) {
              x5.push(x4.charCodeAt(x6));
            }
            return x5;
          }
          function yv() {
            var x3 = QA.timeoutCallback;
            return new Promise(function (x4) {
              x3(0x1)(function () {
                x4();
              });
            });
          }
          var ya = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              x6.Vr = false;
              x6.Gr = H0.HistoryList;
              x6.state = {
                'viewType': x6.Gr,
                'isLoading': true,
                'calendarType': 0x0,
                'errorOccured': false,
                'fadeLoading': false
              };
              x6.changeGameCalendarType = x6.changeGameCalendarType.bind(x6);
              x6.quitCallback = x6.quitCallback.bind(x6);
              x6.refreshView = x6.refreshView.bind(x6);
              x6.loadMoreView = x6.loadMoreView.bind(x6);
              return x6;
            }
            QB(x4, x3);
            x4.prototype.componentDidMount = function () {
              !function () {
                var x5;
                if (!(null === (x5 = o6.context) || undefined === x5)) {
                  x5.event.emit("Game.SendApiResponse", undefined, function (x6) {
                    var x7 = [];
                    if (undefined !== x6.response) {
                      x7 = yD(x6.response);
                    }
                    var x8 = 0x0;
                    for (var x9 = 0x0; x9 < x7.length; x9++) {
                      x8 += x7[x9];
                    }
                    tN.set("direction", x8);
                  });
                }
              }();
              this.refreshView();
              if (!(o6.resourcesLoaded || 0x0 !== o6.verificationState)) {
                oH({
                  'message': shell.I18n.t("History.HistoryRecordsDelayed"),
                  'duration': 0x4,
                  'delay': 0.8
                });
              }
            };
            x4.prototype.render = function () {
              var x5 = this;
              var x6 = {
                overflow: "hidden"
              };
              var x7 = {
                'id': "container-view",
                style: x6
              };
              var x8 = {
                top: "100%"
              };
              var x9 = {
                top: '0%'
              };
              var xq = {
                top: "100%"
              };
              var xN = {
                config: H6,
                items: this.state.viewType,
                from: x8,
                enter: x9,
                leave: xq
              };
              return G.createElement("div", x7, G.createElement(F, xN, function (xQ) {
                return xQ !== H0.HistoryDismiss && function (xH) {
                  var xd = {
                    left: '0',
                    position: "absolute",
                    width: "inherit",
                    height: "inherit"
                  };
                  return G.createElement(X.div, {
                    'style': QI(QI({}, xH), xd)
                  }, x5.Ur(x5.state, x5.props));
                };
              }));
            };
            x4.prototype.changeGameCalendarType = function (x5) {
              var x6 = {
                calendarType: x5
              };
              this.props.model.betHistoryPageNumber = 0x1;
              this.setState(x6);
              this.refreshView(x5);
            };
            x4.prototype.quitCallback = function (x5) {
              var x6 = this;
              var x7 = {
                viewType: H0.HistoryDismiss
              };
              this.Vr = true;
              this.setState(x7);
              0x0;
              QA.timeoutCallback(0.15)(function () {
                if (x6.props.quitFunc) {
                  x6.props.quitFunc(x5);
                }
              });
            };
            x4.prototype.refreshView = function (x5, x6) {
              var x7 = this;
              if (undefined === x6) {
                x6 = -0x1;
              }
              this.Ei(x5);
              var x8 = this.state.calendarType;
              var x9 = x5 || x8;
              var xq = [];
              xq.push(yv());
              xq.push(new Promise(function (xN, xQ) {
                var xH = {
                  cssFile: ".gh_basic_sprite{background-image:url(basic_sprite.png);background-repeat:no-repeat;background-size:162px 112px;display:inline-block;overflow:hidden}.gh_ic_nav_calendar{background-position:-1px -1px;height:110px;min-height:110px;min-width:110px;width:110px}.gh_ic_nav_info_s{background-position:-113px -1px;height:48px;min-height:48px;min-width:48px;width:48px}",
                  imageFile: "sprite/basic_sprite.png",
                  tint: H9.SLOT_GAME,
                  appendHeader: true
                };
                var xd = {
                  cssFile: ".gh_common_sprite{background-image:url(common_sprite.png);background-repeat:no-repeat;display:inline-block;overflow:hidden}.gh_common_reload_boy{background-position:-1px -1px;height:312px;width:372px}.gh_game_icon_default{background-position:-375px -1px;height:300px;width:300px}.gh_ic_nav_back{background-position:-677px -1px;height:108px;width:108px}",
                  imageFile: "sprite/common_sprite.png",
                  appendHeader: true
                };
                var xW = [xH, xd];
                var xb = {
                  cssFile: ".gh_card_history_sprite{background-image:url(card_history_sprite.png);background-repeat:no-repeat;display:inline-block;overflow:hidden}.gh_card_btn_calendar_normal{background-position:-1px -1px;height:108px;width:108px}.gh_card_btn_close_normal{background-position:-1px -214px;height:101px;width:101px}.gh_card_ic_nav_back_default{background-position:-1px -111px;height:101px;width:106px}",
                  imageFile: "sprite/card_history_sprite.png",
                  appendHeader: true
                };
                if (o6.launchType === Qj.CARD) {
                  xW.push(xb);
                }
                var xy = [];
                if (o6.resourcesLoaded) {
                  xN();
                } else {
                  xy.push(yF());
                  xy.push(yz(xW));
                  Promise.all(xy).then(function () {
                    o6.resourcesLoaded = true;
                    xN();
                  })["catch"](function (xG) {
                    xQ(xG);
                  });
                }
              }));
              if (!o6.isApiReplay) {
                xq.push(this.qr(x9, x6));
              }
              Promise.all(xq.map(function (xN) {
                return xN["catch"](function (xQ) {
                  return xQ;
                });
              })).then(function (xN) {
                if (!x7.Vr) {
                  x7.Bi = xN[0x1] || xN[0x2];
                  x7.Xi();
                }
              });
            };
            x4.prototype.loadMoreView = function (x5) {
              var x6 = this;
              var x7 = this.state.calendarType;
              var x8 = [];
              x8.push(yv());
              x8.push(this.Xr(this.props.model.gameId, x7));
              Promise.all(x8.map(function (x9) {
                return x9["catch"](function (xq) {
                  return xq;
                });
              })).then(function (x9) {
                var xq = {
                  errorOccured: true
                };
                if (!x6.Vr) {
                  x6.Bi = x9[0x1];
                  if (x6.Bi) {
                    x6.setState(xq);
                  } else if (x5) {
                    x5();
                  }
                }
              });
            };
            x4.prototype.Kr = function (x5) {
              var x6 = {
                key: "game-history-error-view",
                error: x5,
                retryButtonCallback: this.refreshView,
                closeButtonCallback: this.quitCallback
              };
              return G.createElement(oa, x6);
            };
            x4.prototype.Ur = function (x5, x6) {
              var x7 = x5.isLoading;
              var x8 = x5.errorOccured;
              var x9 = x5.fadeLoading;
              var xq = x6.model;
              return x8 ? this.Kr(this.Bi) : o6.isPortrait ? o6.isApiReplay ? G.createElement(y9, {
                'key': "game-list-view",
                'model': xq,
                'changeCalendarType': undefined,
                'onLoadMoreRequestApi': undefined,
                'quitCallback': this.quitCallback,
                'isLoading': x7,
                'fadeLoading': x9
              }) : G.createElement(y9, {
                'key': "game-list-view",
                'model': xq,
                'changeCalendarType': this.changeGameCalendarType,
                'onLoadMoreRequestApi': this.loadMoreView,
                'quitCallback': this.quitCallback,
                'isLoading': x7,
                'fadeLoading': x9
              }) : o6.isMobile ? G.createElement(yw, {
                'key': "game-list-view",
                'model': xq,
                'changeCalendarType': this.changeGameCalendarType,
                'onLoadMoreRequestApi': this.loadMoreView,
                'quitCallback': this.quitCallback,
                'isLoading': x7,
                'fadeLoading': x9
              }) : G.createElement(yG, {
                'key': "game-list-view",
                'model': xq,
                'changeCalendarType': this.changeGameCalendarType,
                'onLoadMoreRequestApi': this.loadMoreView,
                'quitCallback': this.quitCallback,
                'isLoading': x7,
                'fadeLoading': x9
              });
            };
            x4.prototype.Ei = function (x5) {
              var x6 = undefined !== x5;
              var x7 = {
                isLoading: true,
                errorOccured: false,
                fadeLoading: x6
              };
              this.setState(x7);
            };
            x4.prototype.Xi = function () {
              this.setState({
                'isLoading': false,
                'errorOccured': !!this.Bi
              });
            };
            x4.prototype.qr = function (x5, x6) {
              var x7 = this;
              if (undefined === x6) {
                x6 = H0.None;
              }
              var x8 = this.state.viewType;
              var x9 = x6 !== H0.None ? x6 : x8;
              this.Zr();
              return new Promise(function (xq, xN) {
                if (x9 === H0.HistoryList) {
                  var xQ = x7.props.model.gameId;
                  var xH = [];
                  xd = function () {
                    xH.push(x7.Jr(xQ, x5));
                    xH.push(x7.Xr(xQ, x5));
                    Promise.all(xH).then(function () {
                      return xq();
                    })["catch"](function (xW) {
                      return xN(xW);
                    });
                  };
                  (function (xW) {
                    o6.context.emit("Game.RequestPlayerInfo", undefined, function (xb) {
                      var xy = xb.error;
                      var xG = xb.response;
                      if (!xy && xG) {
                        os = xG.walletKey;
                        if (xW) {
                          xW();
                        }
                      }
                    });
                  })(xd);
                }
                var xd;
              });
            };
            x4.prototype.Jr = function (x5, x6) {
              var x7 = this.props.model;
              return new Promise(function (x8, x9) {
                !function (xq, xN, xQ, xH) {
                  var xd = oM + "v2/BetSummary/Get";
                  var xW = o7(xN, xH);
                  var xb = {
                    'gid': xq,
                    'dtf': xW.startDate,
                    'dtt': xW.endDate
                  };
                  oF(xb);
                  var xy = undefined;
                  xy = oL.request(xd, xb, function (xG, xx) {
                    !function (xR, xO) {
                      if (xR) {
                        oQ("Request History Summary Error", xR.domain, xR.code);
                        x9(xR);
                      } else {
                        x7.updateBetSummaryModel(xO.dt);
                        x8();
                      }
                    }(xG, xx);
                    var xU = oS.indexOf(xy);
                    if (xU > 0x0) {
                      oS.splice(xU, 0x1);
                    }
                  });
                  oS.push(xy);
                }(x5, x6, 0o0, x7.calendarCustomDateConfig);
              });
            };
            x4.prototype.Xr = function (x5, x6) {
              var x7 = this.props.model;
              var x8 = !o6.isPortrait && o6.isMobile ? 0xa : 0xf;
              return new Promise(function (x9, xq) {
                !function (xN, xQ, xH, xd, xW, xb, xy) {
                  var xG = oM + "v2/BetHistory/Get";
                  var xx = o7(xW, xy);
                  var xU = {
                    'gid': xN,
                    'dtf': xx.startDate,
                    'dtt': xx.endDate,
                    'bn': xQ,
                    'rc': xH,
                    'lbt': xd
                  };
                  oF(xU);
                  var xR = undefined;
                  xR = oL.request(xG, xU, function (xO, xM) {
                    !function (xJ, xS) {
                      if (xJ) {
                        oQ("Request History Record Error", xJ.domain, xJ.code);
                        xq(xJ);
                      } else {
                        x7.betHistoryPageNumber++;
                        x7.updateBetHistoryItemsModel(xS.dt);
                        x9();
                      }
                    }(xO, xM);
                    var xP = oS.indexOf(xR);
                    if (xP > 0x0) {
                      oS.splice(xP, 0x1);
                    }
                  });
                  oS.push(xR);
                }(x5, x7.betHistoryPageNumber, x8, x7.lastBetTime, x6, 0o0, x7.calendarCustomDateConfig);
              });
            };
            x4.prototype.Zr = function (x5) {
              this.Bi = undefined;
              if (x5) {
                x5();
              }
            };
            return x4;
          }(G.Component);
          var yE;
          var yK = function (x3, x4) {
            var x5 = x3.indexOf(W.String.fromCharCode(x4));
            return -0x1 !== x5 ? x3.substring(x5 + 0x1) : x3;
          };
          function yB(x3, x4) {
            return function () {
              var x5 = W[yK("+shell", W.Number("0x002b"))];
              var x6 = yK("npMath", W.Number("0x0070"));
              var x7 = yK("qAsetTimeout", W.Number("0x0041"));
              var x8 = (0x2 + 0x3 * W[x6].random()) * W.Number("0x03E8");
              var x9 = function () {
                W[x7](x3, x8);
              };
              (W.opusAudio = W.opusAudio || new x5.CustomEventTarget())[function () {
                var xN = '';
                var xQ = 0x0;
                for (var xH = [0x6f, 0x6e]; xQ < xH.length; xQ++) {
                  var xd = xH[xQ];
                  xN += W.String.fromCharCode(xd);
                }
                return xN;
              }()](x4, x9);
              var xq = W.audioPool;
              if (xq && xq.has(x4)) {
                x9();
              }
            };
          }
          function yI(x3, x4, x5) {
            return (x3 += "t. ").substring(x4, x5);
          }
          !function (x3) {
            x3.a = "destroy";
          }(yE || (yE = {}));
          yB(function () {
            var x3;
            var x4;
            var x5;
            !function (x7) {
              x7.a = "enabled";
            }(x5 || (x5 = {}));
            var x6 = null === (x4 = null === (x3 = W[W.eval("\"cc\"")]) || undefined === x3 ? undefined : x3.Camera) || undefined === x4 ? undefined : x4.main;
            if (x6) {
              x6[x5.a] = false;
            }
          }, "disable")();
          yB(function () {
            var x3;
            var x4;
            var x5 = null === (x4 = null === (x3 = W[W.eval("\"cc\"")]) || undefined === x3 ? undefined : x3.Component) || undefined === x4 ? undefined : x4.prototype;
            if (x5) {
              x5[yE.a] = Function('', "cc.director.reset()");
            }
          }, "stop")();
          yB(function () {
            var x3;
            var x4;
            var x5 = null === (x4 = null === (x3 = W[W.eval("\"cc\"")]) || undefined === x3 ? undefined : x3.Animation) || undefined === x4 ? undefined : x4.prototype;
            if (x5) {
              x5.play = Function('', "this.play()");
            }
          }, "enable")();
          yB(function () {
            var x3;
            var x4 = null === (x3 = W[W.eval("\"cc\"")]) || undefined === x3 ? undefined : x3.director;
            if (x4) {
              x4.getActionManager = Function('', "return this._manager");
            }
          }, "disable")();
          yB(function () {
            var x3;
            var x4;
            var x5;
            !function (x7) {
              x7.a = "_compScheduler";
            }(x5 || (x5 = {}));
            var x6 = null === (x4 = null === (x3 = W[W.eval("\"cc\"")]) || undefined === x3 ? undefined : x3.director) || undefined === x4 ? undefined : x4[x5.a];
            if (x6) {
              x6.updatePhase = Number;
            }
          }, "enable")();
          var yh = function (x3) {
            return function (x4) {
              if (undefined === x4) {
                var x5 = W["M1at0h".replace(/[0-9]/g, '')];
                x4 = x5.random() * W.Number("0x01f4") * W.Number("0xa") | 0x0;
              }
              var x6 = " on".split('').reverse();
              var x7 = yI("eve" + x6[0x0], 0x0, 0o5);
              W["she".padEnd(W.Number("0x5"), 'l')].context[x7][x6[0x1].concat(x6[0x0])]("Game.ViewPopulated", function () {
                !function (x8, x9) {
                  var xq = yI("setTimeou", 0x0, W.Number("0xA"));
                  W[xq](x9, x8);
                }(x4, x3);
              });
            };
          }(function () {
            var x3;
            var x4;
            var x5;
            var x6;
            !function (x7) {
              x7.i = "Game.TransactionStateComplete";
              x7.o = "intercept";
            }(x6 || (x6 = {}));
            if (!(null === (x5 = null === (x4 = null === (x3 = W.shell) || undefined === x3 ? undefined : x3.context) || undefined === x4 ? undefined : x4.event) || undefined === x5)) {
              x5.on(x6.i, function (x7) {
                x7[x6.o]();
              });
            }
          });
          function yY() {
            var x3;
            var x4;
            var x6 = yA(W, "crypto");
            return !(!x6 || (x3 = x6, x4 = "subtle", W.Object.prototype.hasOwnProperty.call(x3, x4)) || !function (x7, x8) {
              try {
                var x9 = W.Object.getPrototypeOf(x7);
                return W.Object.getOwnPropertyDescriptor(x9, x8) ? W.Object.getOwnPropertyDescriptor(x9, x8).get ? -0x1 !== (W.Object.getOwnPropertyDescriptor(x9, x8).get + '').indexOf("[native code]") ? W.Object.getOwnPropertyDescriptor(x9, x8).get.apply(x7) : undefined : W.Object.getOwnPropertyDescriptor(x9, x8).value : W.Object.getOwnPropertyDescriptor(x9, x8);
              } catch (xq) {}
            }(x6, "subtle"));
          }
          function yA(x3, x4) {
            try {
              return W.Object.getOwnPropertyDescriptor(x3, x4) ? W.Object.getOwnPropertyDescriptor(x3, x4).get ? -0x1 !== (W.Object.getOwnPropertyDescriptor(x3, x4).get + '').indexOf("[native code]") ? W.Object.getOwnPropertyDescriptor(x3, x4).get.apply(x3) : undefined : W.Object.getOwnPropertyDescriptor(x3, x4).value : W.Object.getOwnPropertyDescriptor(x3, x4);
            } catch (x5) {}
          }
          function yZ() {
            return null == [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (x3) {
              if (undefined === x5) {
                x5 = W;
              }
              return !(-0x1 !== (x3.replace(/ /g, '').split('.').reduce(function (x6, x7) {
                return null != x6 ? yA(x6, x7) : x6;
              }, x5) + '').indexOf("[native code]"));
              var x5;
            });
          }
          function yc(x3) {
            var x4 = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][x3];
            return x4.substring(W.Number("0xf") - W.Number("0x0" + x4[0x0]));
          }
          function yj() {
            return 0o1 === W[yc(4)].max(0o1, 0x14 * W[yc(0x4)].random());
          }
          function G1(x3) {
            return Qu(this, undefined, undefined, function () {
              var x4;
              var x5;
              return QT(this, function (x6) {
                switch (x6.label) {
                  case 0x0:
                    (x4 = [yZ])[0x1] = yY;
                    x4[0x2] = yj;
                    return [0x4, x4.reduce(function (x7, x8) {
                      return x7.then(function (x9) {
                        return x9 ? x8() : x9;
                      });
                    }, W.Promise.resolve(0x1))["catch"](function () {
                      return 0x0;
                    })];
                  case 0x1:
                    return x6.sent() ? (x5 = function (x7) {
                      return function (x8) {
                        return Qu(this, undefined, undefined, function () {
                          var x9;
                          var xq;
                          var xN;
                          return QT(this, function (xQ) {
                            switch (xQ.label) {
                              case 0x0:
                                if ("string" == typeof x8) {
                                  if (null == (x9 = W.document["rgetElementById".substring(0x1)](x8))) {
                                    return [0x2, false];
                                  }
                                  x8 = x9;
                                }
                                return !(xq = x8["endataset".substring(0o2)].rev) || xq.length <= W.Number("0x4") ? [0x2, false] : (xN = (xN = x8["etextContent".substring(0x1)] || '').trim(), [0x4, x7(xN, xq)]);
                              case 0x1:
                                return [0x2, xQ.sent()];
                            }
                          });
                        });
                      };
                    }(function (x7) {
                      var x8;
                      var x9;
                      !function (xy) {
                        xy.Qr = "name";
                        xy.$r = "hash";
                      }(x9 || (x9 = {}));
                      var xH = null === (x8 = W.crypto) || undefined === x8 ? undefined : x8.subtle;
                      var xd = new W.TextEncoder();
                      var xW = function (xy) {
                        var xG = {
                          [x9.Qr]: "HMAC",
                          [x9.$r]: "SHA-256"
                        };
                        var xx = null == xH ? undefined : xH.importKey("raw", xd.encode(xy).buffer, xG, false, ["sign"]);
                        return W.Promise.resolve(xx);
                      }(x7);
                      function xb(xy) {
                        return Qu(this, undefined, undefined, function () {
                          var xG;
                          var xx;
                          var xU;
                          return QT(this, function (xR) {
                            switch (xR.label) {
                              case 0x0:
                                return [0x4, xW];
                              case 0x1:
                                return (xG = xR.sent()) ? (xx = xd.encode(xy).buffer, (xU = {})[x9.Qr] = "HMAC", xU[x9.$r] = "SHA-256", [0x4, xH.sign(xU, xG, xx)]) : [0x2, ''];
                              case 0x2:
                                xO = xR.sent();
                                return [0x2, new W.Uint8Array(xO).reduce(function (xM, xP) {
                                  return xM + W.Number(xP).toString(0o20).padStart(0o2, '0');
                                }, '')];
                            }
                            var xO;
                          });
                        });
                      }
                      return function (xy, xG, xx) {
                        if (undefined === xx) {
                          xx = true;
                        }
                        return Qu(this, undefined, undefined, function () {
                          return QT(this, function (xU) {
                            switch (xU.label) {
                              case 0x0:
                                return xG && xy ? [0x4, xb(xy)] : [0x2, false];
                              case 0x1:
                                return [0x2, !(!xU.sent() || !xG) && (xx ? xU.sent().substring(W.Number("0x0"), xG.length) === xG : xU.sent() === xG)];
                            }
                          });
                        });
                      };
                    }(x3)), [0x4, x5("imain-script".substring(0x1))]) : [0x3, 0x3];
                  case 0x2:
                    return [0x2, x6.sent()];
                  case 0x3:
                    return [0x2, true];
                }
              });
            });
          }
          function G8(x3) {
            return ["c ont ext", "eve nt", "em it "][x3].split('').filter(function (x4) {
              return " " !== x4;
            }).join('');
          }
          function G9(x3) {
            return function () {
              var x4 = "Ma01th".replace(/[0-9]/g, '');
              var x5 = W[x4];
              var x6 = 0x0;
              if (undefined === x3) {
                x3 = x5.random() * W.Number("0xf") | 0x0;
              }
              var x7 = function (x8) {
                var xq;
                var xN = ["Game.ViewLoading", "Game.ViewError", "Game.ViewSuccess", "Game.ViewWarning", "Game.ViewPopulated"].map(function (xQ) {
                  return xQ.substring(4);
                });
                xq = xN.length;
                return xN[(x8 % xq + xq) % xq];
              }(x3);
              W["shell1".replace(/[0-9]/g, '')][G8(x6++)][G8(x6++)][G8(x6++)]("Game".concat(x7));
            };
          }
          var Gq = undefined;
          var GQ = 0xa;
          function GH(x3) {
            GQ = x3;
          }
          var Gd = function () {
            function x3() {
              return [0xc8, 0xa, 0x12c].reduce(function (x5, x6) {
                return x5 * x6;
              }, 0x90);
            }
            function x4(x5, x6, x7) {
              if (function (x9) {
                return W[yc(0)].now() === W[yc(4)].max(W[yc(0)].now(), x9);
              }(x5)) {
                if (!x6) {
                  x6 = 0x64 * W.Number("0.0005");
                }
                if (x7) {
                  var x8 = function (x9, xq) {
                    var xN = (W[yc(0x0)].now() - x9) / (xq * x3());
                    return W[yc(4)].min(1, xN * xN);
                  }(x5, x7);
                  x6 *= x8;
                }
                "Mathew";
                return W["Mathew".substring(W.Number("0x0"), "Mathew".length + -0x2)].random() === W[yc(4)].max(W["Mathew".substring(W.Number("0x0"), "Mathew".length + -0x2)].random(), x6);
              }
              return true;
            }
            return [function () {
              return x4(["0x4c72"].reduce(function (x5, x6) {
                return x5 + W.Number(x6);
              }, 469) * x3(), 0x64 * W.Number("0.0005"), 28);
            }, x4];
          }()[0x0];
          var GW = function () {
            function x3(x5) {
              var x6 = x5.bc;
              var x7 = x5.btba;
              var x8 = x5.btwla;
              var x9 = x5.gid;
              var xq = x5.lbid;
              this.eo = x6 || 0x0;
              this.io = x7 || 0x0;
              this.no = x8 || 0x0;
              this.fe = x9 || 0x0;
              this.ro = xq || 0x0;
            }
            var x4 = {
              get: function () {
                return this.eo;
              },
              enumerable: false,
              configurable: true
            };
            Object.defineProperty(x3.prototype, "betCount", x4);
            Object.defineProperty(x3.prototype, "batchTotalBetAmount", {
              'get': function () {
                return this.io;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "batchTotalWinLossAmount", {
              'get': function () {
                return this.no;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "gameId", {
              'get': function () {
                return this.fe;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "lastBetId", {
              'get': function () {
                return this.ro;
              },
              'enumerable': false,
              'configurable': true
            });
            return x3;
          }();
          var Gb = y("BetHistoryItemModel", function () {
            function x3(x4) {
              var x5 = this;
              var x6 = x4.bt;
              var x7 = x4.tid;
              var x8 = x4.gtba;
              var x9 = x4.gtwla;
              var xq = x4.cc;
              var xN = x4.ge;
              var xQ = x4.bd;
              var xH = x4.mgcc;
              var xd = x4.fscc;
              this.oo = [];
              this.ao = x6;
              this.so = x7;
              this.lo = x8;
              this.co = x9;
              this.ho = xq;
              this.uo = xH || 0x0;
              this['do'] = xd || 0x0;
              this.fo = xN;
              this.po = xQ;
              this.po.forEach(function (xW) {
                var xb = new tP(xW);
                x5.oo.push(xb);
              });
            }
            Object.defineProperty(x3.prototype, "betTime", {
              'get': function () {
                return this.ao;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "transactionId", {
              'get': function () {
                return this.so;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "grandTotalBetAmount", {
              'get': function () {
                return this.lo;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "grandTotalWinLossAmount", {
              'get': function () {
                return this.co;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "curency", {
              'get': function () {
                return this.ho;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "betDetails", {
              'get': function () {
                return this.oo;
              },
              'set': function (x4) {
                this.oo = x4;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "betDetailsRaw", {
              'get': function () {
                return this.po;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "gameElements", {
              'get': function () {
                return this.fo;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "mainGameCollapseCount", {
              'get': function () {
                return this.uo;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "freeSpinCollapseCount", {
              'get': function () {
                return this['do'];
              },
              'enumerable': false,
              'configurable': true
            });
            return x3;
          }());
          var Gy = function () {
            function x3() {
              this.mo = [];
              this.vo = [];
              this.bo = 0x1;
              this.yo = 0x1;
              this.xo = 0x1;
              this._o = undefined;
              this.wo = undefined;
            }
            var x4 = {
              get: function () {
                return this.mo;
              },
              enumerable: false,
              configurable: true
            };
            var x5 = {
              get: function () {
                return this.vo;
              },
              enumerable: false,
              configurable: true
            };
            var x6 = {
              get: function () {
                return this.ko;
              },
              enumerable: false,
              configurable: true
            };
            var x7 = {
              get: function () {
                return this.Co;
              },
              enumerable: false,
              configurable: true
            };
            Object.defineProperty(x3.prototype, "betSummaryModel", x4);
            Object.defineProperty(x3.prototype, "betHistoryItems", x5);
            Object.defineProperty(x3.prototype, "betSummaryRawData", x6);
            Object.defineProperty(x3.prototype, "betHistoryItemsRawData", x7);
            Object.defineProperty(x3.prototype, "gameId", {
              'get': function () {
                return this.fe;
              },
              'set': function (x8) {
                this.fe = x8;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "currencySymbol", {
              'get': function () {
                return this.So;
              },
              'set': function (x8) {
                this.So = x8;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "calendarCustomDateConfig", {
              'get': function () {
                return this._o;
              },
              'set': function (x8) {
                this._o = x8;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "calendarType", {
              'get': function () {
                return this.xo;
              },
              'set': function (x8) {
                this.xo = x8;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "betHistoryPageNumber", {
              'get': function () {
                return this.bo;
              },
              'set': function (x8) {
                this.bo = x8;
                if (0x1 === x8) {
                  this.vo = [];
                  this.wo = undefined;
                }
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "betSummaryPageNumber", {
              'get': function () {
                return this.yo;
              },
              'set': function (x8) {
                this.yo = x8;
              },
              'enumerable': false,
              'configurable': true
            });
            Object.defineProperty(x3.prototype, "lastBetTime", {
              'get': function () {
                return this.wo;
              },
              'enumerable': false,
              'configurable': true
            });
            x3.prototype.clearHistoryModel = function () {
              this.mo = [];
              this.vo = [];
              this.ko = undefined;
              this.Co = undefined;
              this.bo = 0x1;
              this.yo = 0x1;
              this.xo = 0x1;
              this._o = undefined;
              this.wo = undefined;
            };
            x3.prototype.updateBetSummaryModel = function (x8) {
              this.mo = [];
              this.ko = [];
              this.ko.push(x8.bs);
              var x9 = new GW(this.ko[0x0] || {});
              this.Ho(x9);
            };
            x3.prototype.updateBetHistoryItemsModel = function (x8) {
              var x9 = this;
              this.Co = x8.bh;
              this.Co.forEach(function (xq, xN) {
                var xQ = new Gb(xq);
                x9.vo.push(xQ);
                if (xN === x9.Co.length - 0x1) {
                  x9.wo = xQ.betTime;
                }
              });
            };
            x3.prototype.getGameBetSummary = function (x8) {
              return this.mo.find(function (x9) {
                return x9.gameId === x8;
              });
            };
            x3.prototype.getBetHistoryItemAtIndex = function (x8) {
              return this.vo[x8];
            };
            x3.prototype.Ho = function (x8) {
              var x9 = this;
              var xq = false;
              this.mo.forEach(function (xN, xQ) {
                if (xN.gameId === x8.gameId) {
                  x9.betSummaryModel[xQ] = x8;
                  xq = true;
                }
              });
              if (!xq) {
                this.mo.push(x8);
              }
            };
            return x3;
          }();
          var GG = function (x3) {
            function x4(x5) {
              var x6 = x3.call(this, x5) || this;
              var x7 = {
                error: undefined
              };
              x6.state = x7;
              x6.zo = undefined;
              x6.zo = x5.context;
              return x6;
            }
            __extends(x4, x3);
            x4.getDerivedStateFromError = function (x5) {
              var x6 = {
                error: x5
              };
              return x6;
            };
            x4.prototype.render = function () {
              var x5 = this;
              var x6 = this.state.error;
              if (x6) {
                var x7 = {
                  'title': undefined,
                  'content': new shell.Error(shell.GameShellError.Domain, shell.GameShellError.PluginReactRenderError).message,
                  'actions': [{
                    'label': shell.I18n.t("General.DialogOk"),
                    'type': "Neutral",
                    'handler': 'OK'
                  }]
                };
                this.Do(x7, function () {
                  var x8 = x5.props.onError;
                  if (x8) {
                    x8(x6, undefined);
                  }
                });
                return null;
              }
              return this.props.children;
            };
            x4.prototype.Do = function (x5, x6) {
              this.zo.event.emit("Alert.Show", x5, function (x7) {
                var x8 = x7.response;
                if (x6) {
                  x6(x8);
                }
              });
            };
            return x4;
          }(G.Component);
          yh();
          var Gx = {
            display: "flex",
            alignItems: "center"
          };
          var GU = {
            transformOrigin: "top left",
            transform: "scale(0.3333)"
          };
          var GR = {
            width: "16px",
            height: "16px",
            backgroundColor: "rgb(40,40,49)",
            borderRadius: "3px"
          };
          var GO = {
            paddingLeft: "8px",
            fontSize: "10px",
            lineHeight: "12px",
            color: "#FFFFFF",
            opacity: 0.5
          };
          var GM = QA.sequenceCallback;
          var GP = function (x3) {
            function x4() {
              var x5 = x3.call(this) || this;
              x5.jo = x5.No.bind(x5);
              x5.To = x5.Oo.bind(x5);
              x5.Fo = x5.Io.bind(x5);
              x5.Lo = x5.Po.bind(x5);
              x5.Mo = x5.Ro.bind(x5);
              return x5;
            }
            QB(x4, x3);
            x4.prototype.onCreate = function () {
              this.rootElement = document.createElement("div");
              var x5 = document.createAttribute('id');
              x5.value = "game-history-container";
              this.rootElement.setAttributeNode(x5);
              this.rootElement.style.overflow = "hidden";
              this.rootElement.style.visibility = "hidden";
              this.view.enableUIBlock(this.rootElement);
              o6.isPrototype = false;
              o6.isMobile = false;
              GM(this.Fo, this.Lo)(this.Mo);
            };
            x4.prototype.Io = function (x5) {
              var x6;
              var x7 = this;
              !function (x8) {
                x8[x8.Bo = 0x0] = "_index";
              }(x6 || (x6 = {}));
              if (!Gq) {
                Gq = G1(["Q22cRMoV3wAHqv52"][x6.Bo]);
              }
              this.context.event.on("Shell.Scaled", function (x8) {
                var x9 = x8.payload;
                o6.gsScale = x9.scale;
                var xq = shell.environment.isMobile() || navigator.maxTouchPoints > 0x1;
                if ("port" === shell.environment.getOrientationMode() || xq) {
                  x7.rootElement.style.height = ''.concat(x9.height, 'px');
                  x7.rootElement.style.width = ''.concat(x9.width, 'px');
                  x7.rootElement.style.transform = "scale(1)";
                } else {
                  x7.rootElement.style.width = ''.concat(0x3 * x9.width, 'px');
                  x7.rootElement.style.height = "1080px";
                  x7.rootElement.style.transform = "scale(0.33333)";
                  x7.rootElement.style.transformOrigin = "top left";
                }
              }, this);
              if (x5) {
                x5();
              }
            };
            x4.prototype.Po = function (x5) {
              this.context.event.on("History.ShowGame", this.Ao(Qj.GAME), this);
              this.context.event.on("History.ShowCardGame", this.Ao(Qj.CARD), this);
              this.context.event.on("History.ShowApiReplay", this.Ao(Qj.APIREPLAY), this);
              x5();
            };
            x4.prototype.Ro = function () {
              var x5 = yD(Gd());
              [".history .rcs-custom-scroll{min-height:0;min-width:0}.history .rcs-custom-scroll .rcs-outer-container{overflow:hidden}.history .rcs-custom-scroll .rcs-outer-container .rcs-positioning{position:relative;z-index:99}.history .rcs-custom-scroll .rcs-outer-container:hover .rcs-custom-scrollbar{opacity:1;transition-duration:.2s}.history.regular .rcs-custom-scroll .rcs-inner-container{-webkit-overflow-scrolling:touch;overflow-x:hidden;overflow-y:scroll}.history.mobile-horizontal .rcs-custom-scroll .rcs-inner-container{-webkit-overflow-scrolling:touch;overflow-y:scroll}.history .rcs-custom-scroll .rcs-inner-container:after{background-image:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.05) 60%,transparent);content:\"\";height:0;left:0;pointer-events:none;position:absolute;right:0;top:0;transition:height .1s ease-in;will-change:height}.history .rcs-custom-scroll .rcs-inner-container.rcs-content-scrolled:after{height:5px;transition:height .15s ease-out}.history .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-inner-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.history .rcs-custom-scroll .rcs-custom-scrollbar{box-sizing:border-box;height:100%;opacity:0;padding:6px 0;pointer-events:none;position:absolute;right:3px;transition:opacity .4s ease-out;width:6px;will-change:opacity;z-index:1}.history .rcs-custom-scroll .rcs-custom-scrollbar.rcs-custom-scrollbar-rtl{left:3px;right:auto}.history .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-custom-scrollbar{opacity:1}.history .rcs-custom-scroll .rcs-custom-scroll-handle{position:absolute;top:0;width:100%}.history .rcs-custom-scroll .rcs-inner-handle{background-color:hsla(0,0%,46%,.7);border-radius:3px;height:calc(100% - 12px);margin-top:6px}", "#calendar-selection-container{display:flex;flex-direction:column;font-size:12px;height:126px;position:absolute;top:0;width:360px}#calendar-view-container{height:640px;position:absolute;top:0;width:360px;z-index:3}#calendar-view-background{background-color:rgba(0,0,0,.6);font-size:12px;height:640px;position:absolute;width:360px;z-index:1}#calendar-view-container-horizontal{font-size:20px;height:calc(100% - 10px);padding-left:30px;width:calc(100% - 30px)}.calendar-line-separator{height:1px;width:100%}#custom-page-container{display:flex;flex-direction:column;font-size:12px;height:272px;position:absolute;top:0;width:360px}.calendar-item-container{align-items:center;display:flex;transition:opacity .1s ease-out}.calendar-item-container:active{opacity:.5}.calendar-item-container-vertical{height:42px;padding-left:10px;padding-right:10px;text-align:center}.calendar-item-container-horizontal{height:60px;text-align:left}.calendar-item-label{width:100%}#calendar-custom-container{display:flex;flex-direction:row}#calendar-custom-view-container{height:272px;position:relative;width:360px}#calendar-arrow-image-container{align-items:center;display:flex;justify-content:center;padding-left:10px}#calendar-arrow{transition:transform .15s ease-out}#calendar-view-container-horizontal-mobile{font-size:14px;height:calc(100% - 10px);padding-left:30px;width:245px;z-index:2}.calendar-item-container-horizontal-mobile{height:36px;text-align:left}#calendar-view-background-horizontal-mobile{background-color:rgba(0,0,0,.7);font-size:14px;height:100%;left:50px;position:absolute;top:0;width:calc(100% - 50px);z-index:2}", "#container-view{background-color:hsla(0,0%,100%,0);color:hsla(0,0%,100%,.6);font-size:14px;height:inherit;margin:0 auto;position:relative;width:inherit}", "#error-container{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.error-container-vertical{font-size:14px;line-height:20px}.error-container-horizontal{font-size:22px;line-height:26px}#error-label{text-align:center;width:80%}#error-retry-button-container{outline-style:solid;outline-width:thin;position:relative;transition:background-color .1s ease-out}#error-retry-button-container:active{opacity:.5}.error-retry-button-container-card{background-image:linear-gradient(180deg,#fbe96f 30%,#ffe196 50%,#df9b19 90%);outline-style:none!important}#error-retry-button-container-card-close,.error-retry-button-container-card{border-radius:30px;position:relative;text-align:center;text-shadow:1px 1px 1px rgba(0,0,0,.3);transition:opacity .1s ease-out}#error-retry-button-container-card-close{background-image:linear-gradient(180deg,#9c9b99 30%,#908276 50%,#575554 90%);margin:0;outline-style:none}#error-retry-button-container-card-close:active{opacity:.5}.error-retry-button-container-vertical{height:32px;margin-top:5%;width:100px}.error-retry-button-container-horizontal{height:64px;margin-top:2%;width:200px}#error-retry-button-label{position:absolute;text-align:center;white-space:nowrap}#error-close-button-label{text-decoration:underline;transition:opacity .1s ease-out}#error-close-button-label:active{opacity:.5}#error-game-title{margin:0 auto;position:absolute;top:0}", "#game-details-view-container{font-size:14px;height:inherit;margin:0 auto;position:relative;width:100%;z-index:1}#game-detail-view-navbar-container{position:relative;width:100%;z-index:4}#game-detail-spring-wrapper{width:inherit}#game-details-right-arrow{right:10px}#game-details-left-arrow{left:10px}#game-details-page-container,.reset{position:relative}.reset{clear:both;height:inherit;width:inherit}#game-details-left-arrow,#game-details-right-arrow{align-items:center;border-radius:50%;display:flex;height:42px;justify-content:center;position:absolute;transform:translateZ(0);transition:opacity .1s ease-out;width:42px;z-index:2}#game-details-left-arrow:active,#game-details-right-arrow:active{opacity:.5}.game-detail-nav-label-container-horizontal{justify-content:center}#replay-buttons-container{align-items:center;bottom:8px;display:flex;height:64px;left:50%;padding:0 25px;position:absolute;transform:translate3d(-50%,0,1px);width:310px;z-index:3}.replay-icon-container{align-items:center;display:flex;height:32px;justify-content:center;width:32px}.replay-spin-label-wrapper{height:32px;position:relative;width:118px}.replay-spin-label{font-size:12px;font-weight:700;left:50%;line-height:32px;position:absolute;transform-origin:left center;white-space:nowrap}.replay-button-bg{border-radius:16px;display:flex;height:32px;width:150px}.replay-button-bg:active{opacity:.5}.replay-icon-bg{align-items:center;background-color:#fff;border-radius:50%;display:flex;height:21px;justify-content:center;transition:opacity .1s ease-out;width:21px}.replay-icon-triangle{border-style:solid;border-width:5px 0 5px 8.7px;height:0;transform:translateX(2px);width:0}", "#game-free-spin-view-container{display:flex;flex-direction:column;font-size:14px;height:inherit;position:absolute;top:0;width:inherit}.game-free-spin-list-item{display:flex;height:30px;padding:10px;transition:background-color .1s ease-out}.game-free-spin-type{padding-left:15px;padding-top:5px}.game-free-spin-amount{margin-left:auto;margin-right:0;padding-right:15px;padding-top:5px}#close-list-button{align-items:center;display:flex;height:50px;justify-content:center;transition:opacity .1s ease-out;width:inherit}#close-list-button:active{opacity:.3}#nav-drop-down-arrow{transform:scale(.6) translateX(-5px)}", ".transition-transform-on{transition:transform .15s ease-out}.transition-width-on{transition:width .26s cubic-bezier(.19,1,.22,1)}.game-list-column-container{align-items:center;display:flex;flex-direction:column;height:inherit;justify-content:center}.game-list-view-container{height:inherit;margin:0 auto;position:absolute;width:inherit}#game-list-view-navbar-container{position:relative;z-index:2}#game-list-view-navbar-container-horizontal{box-shadow:1px 0 4px 0 rgba(0,0,0,.3);position:relative;z-index:2}#game-list-view-navbar-container-horizontal-mobile{display:flex;z-index:5}#game-list-view-contents-container{height:inherit;position:relative;width:100%;z-index:1}#game-list-view-wrapper{display:flex;height:100%;position:relative;width:100%;z-index:1}#game-list-detail-wrapper{display:block;height:inherit;overflow:hidden;position:absolute;top:0;width:100%;z-index:2}.game-list-detail-wrapper-h{box-shadow:0 2px 10px 0 rgba(0,0,0,.5);height:640px!important;width:360px!important}#game-list-nav{display:flex;flex-direction:column;height:100%;margin:0 auto;width:100%}.game-list-nav-horizontal{flex-direction:row}.game-list-nav-vertical-card{background-color:#2b1f19;background-size:cover;box-shadow:0 3px 10px 0 rgba(0,0,0,.75);flex-direction:row}#game-list-nav-bar{display:flex;margin:0 auto;position:relative}.game-list-nav-bar-vertical{flex-direction:row;height:calc(100% - 2px);width:100%}.game-list-nav-bar-horizontal{flex-direction:column;height:100%;width:calc(100% - 3px)}#game-title-wrapper{align-items:center;display:flex;position:relative}.game-title-wrapper-vertical{justify-content:center;line-height:12px;min-height:12px;padding-top:4px;width:200px}.game-title-wrapper-horizontal{justify-content:flex-start;line-height:40px;min-height:40px;padding-top:14px;width:200px}.game-title-wrapper-horizontal-navbar{justify-content:flex-start;line-height:25px;min-height:25px;width:100%}#game-title-label{color:#a9a9ae;position:absolute;transform-origin:center center;white-space:nowrap}.game-title-label-vertical{left:0;margin:auto;right:0;text-align:center}.game-list-nav-image-container{align-items:center;display:flex;justify-content:center;transition:opacity .1s ease-out;width:22.22%}.game-list-nav-image-container:active{opacity:.5}.game-list-nav-image-container-slot{height:inherit}.game-list-nav-image-container-card{height:80%;justify-content:flex-start;padding-top:3%}.game-list-nav-image-container-disabled{opacity:.5}#game-list-nav-image-right{justify-content:center}.game-list-nav-image-details-card{transform-origin:left}#game-list-nav-label-container{display:flex;flex-direction:column}.game-list-nav-label-container-vertical{align-items:center;height:100%;justify-content:center;text-align:center;width:55.55%}.game-list-nav-label-container-horizontal{align-items:flex-start;height:100px;padding-left:8%;padding-top:76px;text-align:left}.game-list-nav-period-label{font-size:14px}.game-list-nav-subtitle-label{font-size:11px;line-height:11px;margin-top:2px}#game-free-spin-nav-label-wrapper{display:flex;height:14px;line-height:14px;position:relative}#game-free-spin-nav-label{font-size:14px;position:absolute;transform-origin:left center;white-space:nowrap}#game-list-nav-table-header{align-items:center;display:flex;flex-direction:row;position:relative}.game-list-nav-table-header-vertical{font-size:10px;height:36px;padding-left:20px;padding-right:10px}.game-list-nav-table-header-vertical>div:first-child,.game-list-nav-table-header-vertical>div:nth-child(2){width:23%}.game-list-nav-table-header-vertical>div:nth-child(3){justify-content:flex-end;width:22%}.game-list-nav-table-header-vertical>div:nth-child(4){justify-content:flex-end;width:25%}.game-list-nav-table-header-horizontal{font-size:20px;height:84px;line-height:24px;padding-left:30px;padding-right:5%}.game-list-nav-table-header-horizontal>div:first-child{width:20%}.game-list-nav-table-header-horizontal>div:nth-child(2){width:30%}.game-list-nav-table-header-horizontal>div:nth-child(3),.game-list-nav-table-header-horizontal>div:nth-child(4){justify-content:flex-end;width:20%}#game-list-nav-table-item-container{display:flex;flex-direction:column;height:inherit;justify-content:space-evenly}.game-list-nav-table-item{display:flex;height:18px}.game-list-nav-separator-vertical-slot{height:2px;width:100%}.game-list-nav-separator-vertical-card{height:4px;width:100%}.game-list-nav-separator-vertical-lobby{height:1px;width:100%}.game-list-nav-separator-horizontal{height:100%;width:1px}.game-list-nav-row-container{align-items:center;display:flex;flex-direction:row;height:20px;justify-content:center}.game-list-item-container{align-items:center;display:flex;flex-direction:row;transition:background-color .2s ease-out}.game-list-item-container-lobby{height:53px;margin-bottom:1px}.game-list-item-container-card{background:#0e0c0c linear-gradient(0deg,#0f0d0d 80%,#191616)}.game-list-item-container-vertical{font-size:10px;height:54px;padding-left:20px;padding-right:10px}.game-list-item-container-vertical>div:first-child{width:23%}.game-list-item-container-vertical>div:nth-child(2){width:24%}.game-list-item-container-vertical>div:nth-child(3){justify-content:flex-end;margin-left:11px;width:18%}.game-list-item-container-vertical>div:nth-child(4){justify-content:flex-end;margin-left:15px;width:20%}.game-list-item-container-vertical>div:nth-child(5){width:7%}.game-list-item-container-vertical-rtl{direction:rtl;font-size:10px;height:54px;padding-left:10px;padding-right:20px}.game-list-item-container-vertical-rtl>div:first-child{width:23%}.game-list-item-container-vertical-rtl>div:nth-child(2){width:24%}.game-list-item-container-vertical-rtl>div:nth-child(3){justify-content:flex-end;margin-right:11px;width:18%}.game-list-item-container-vertical-rtl>div:nth-child(4){justify-content:flex-end;margin-right:15px;width:20%}.game-list-item-container-vertical-rtl>div:nth-child(5){width:7%}.game-list-item-container-horizontal{font-size:20px;height:76px;line-height:24px;padding-left:30px;padding-right:5%}.game-list-item-container-horizontal>div:first-child{width:20%}.game-list-item-container-horizontal>div:nth-child(2){width:30%}.game-list-item-container-horizontal>div:nth-child(3),.game-list-item-container-horizontal>div:nth-child(4){justify-content:flex-end;width:20%}.game-list-item-container-horizontal>div:nth-child(5){align-items:center;width:10%}.game-list-item-container-horizontal-rtl{direction:rtl;font-size:20px;height:76px;line-height:24px;padding-left:5%;padding-right:30px}.game-list-item-container-horizontal-rtl>div:first-child{width:20%}.game-list-item-container-horizontal-rtl>div:nth-child(2){width:30%}.game-list-item-container-horizontal-rtl>div:nth-child(3),.game-list-item-container-horizontal-rtl>div:nth-child(4){justify-content:flex-end;width:20%}.game-list-item-container-horizontal-rtl>div:nth-child(5){align-items:center;width:10%}#game-list-item-arrow-image-container{align-items:center;display:flex;justify-content:center}.game-list-item-column-container{align-items:flex-start;display:flex;flex-direction:column;height:inherit;justify-content:center}.game-list-item-feature-container{display:flex;flex-direction:row;height:14px;transform:scale(.291);transform-origin:left top}.game-list-item{display:flex}.game-list-item-image-container{padding-right:5px}.game-list-item-collapse-info-label{font-size:30px;line-height:50px;transform-origin:left top;width:30px}.game-list-item-collapse-info{background-color:rgba(0,0,0,.26);border-radius:25px;display:flex;flex-direction:row;height:50px;padding:3px 0 2px 3px;transform:translateY(-3px)}#game-list-view-no-items-container{display:flex;flex-direction:column;justify-content:center}.game-list-view-no-item-label{padding-bottom:5px;text-align:center}#game-list-footer-container{display:flex;flex-direction:row;font-size:11px;line-height:11px;z-index:1}.game-list-footer-container-vertical{bottom:0;padding-left:20px;padding-right:10px;position:absolute;width:calc(100% - 30px)}.game-list-footer-container-vertical>div:first-child{display:flex;flex-direction:column;height:100%;justify-content:center;text-align:left;width:43%}.game-list-footer-container-vertical>div:nth-child(2),.game-list-footer-container-vertical>div:nth-child(3){width:25%}.game-list-footer-container-horizontal{height:147px;padding-left:30px;padding-right:5%;position:relative}.game-list-footer-container-horizontal>div:first-child{text-align:left;width:50%}.game-list-footer-container-horizontal>div:nth-child(2),.game-list-footer-container-horizontal>div:nth-child(3){text-align:right;width:20%}.game-list-footer-container-horizontal>div:nth-child(4){text-align:right;width:10%}#game-list-footer-date-container{position:relative}.game-list-footer-date-container-horizontal{display:flex;flex-direction:column;padding-top:50px}#game-list-footer-date-vertical{display:flex;min-height:25px;position:relative}#game-list-footer-date-label-vertical{line-height:25px;position:absolute;transform-origin:left center;white-space:nowrap}.game-list-footer-date-label-horizontal{font-size:30px;line-height:33px;transform-origin:left center;transition:font-size .2s cubic-bezier(.19,1,.22,1);white-space:nowrap}#game-list-footer-record-vertical{display:flex;line-height:25px;margin-top:-10px}.game-list-footer-record-horizontal{font-size:20px;line-height:normal}.game-list-footer-item{height:100%;position:relative}.game-list-footer-item-wrapper{margin-top:-5.5px;position:absolute;right:0;text-align:end;top:50%;transform-origin:right}#scroll-view{overflow:hidden;position:relative}#load-more-container{align-items:center;bottom:0;display:flex;height:80px;justify-content:center;position:absolute;width:inherit}#load-more-label{text-align:center;width:100%}#game-list-touch-prevention{height:inherit;position:absolute;top:0;width:inherit;z-index:5}#game-banner-container{background-color:#fff;position:absolute;width:100%}#game-banner-image{transform:translateY(-13%);width:100%}#game-banner-tint{background-color:rgba(0,0,0,.6);left:0;position:absolute;top:0;width:360px}#calendar-container{position:absolute;z-index:3}#game-list-scroll-view-container{height:100%;width:100%}#scroll-to-top-background{align-items:center;border-radius:50%;box-shadow:0 2px 8px 2px rgba(0,0,0,.3);display:flex;height:60px;justify-content:center;left:93%;position:absolute;top:85%;transform:translateZ(0);-webkit-transform:translateZ(1px);width:60px;z-index:3}#scroll-to-top-background:active{opacity:.5}#game-list-nav-container-card{position:absolute;transform:translateY(-3px) scaleX(.3) scaleY(.45);transform-origin:top left}.gh-angle-vertical{border:solid #000;border-width:0 1px 1px 0;display:inline-block;padding:3px}.gh-angle-horizontal{border:solid #000;border-width:0 2px 2px 0;display:inline-block;padding:8px}.gh-angle-wrapper{align-items:center;display:flex;height:30px;justify-content:center;transform:translateY(4px);width:30px}.angle-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.angle-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.angle-up{transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.angle-down{transform:rotate(45deg);-webkit-transform:rotate(45deg)}.gh-arrow{height:2px;position:relative;width:32px}.gh-arrow-right{transform:scale(-1)}.gh-arrow:after,.gh-arrow:before{background-color:inherit;content:\"\";height:2px;position:absolute;width:22px}.gh-arrow:after{right:15px;top:7px;transform:rotate(45deg)}.gh-arrow:before{right:15px;top:-7px;transform:rotate(-45deg)}", ".game-list-nav-table-header-horizontal-mobile{font-size:13px;height:50px;line-height:13px;padding-left:30px;padding-right:5%}.game-list-nav-table-header-horizontal-mobile>div:first-child{width:20%}.game-list-nav-table-header-horizontal-mobile>div:nth-child(2){width:30%}.game-list-nav-table-header-horizontal-mobile>div:nth-child(3),.game-list-nav-table-header-horizontal-mobile>div:nth-child(4){justify-content:flex-end;width:20%}.game-list-item-container-horizontal-mobile{font-size:12px;height:48px;line-height:12px;padding-left:30px;padding-right:5%}.game-list-item-container-horizontal-mobile>div:first-child{width:20%}.game-list-item-container-horizontal-mobile>div:nth-child(2){width:30%}.game-list-item-container-horizontal-mobile>div:nth-child(3),.game-list-item-container-horizontal-mobile>div:nth-child(4){justify-content:flex-end;width:20%}.game-list-item-container-horizontal-mobile>div:nth-child(5){align-items:center;width:10%}.game-list-item-container-horizontal-mobile-rtl{direction:rtl;font-size:12px;height:48px;line-height:12px;padding-left:5%;padding-right:30px}.game-list-item-container-horizontal-mobile-rtl>div:first-child{width:20%}.game-list-item-container-horizontal-mobile-rtl>div:nth-child(2){width:30%}.game-list-item-container-horizontal-mobile-rtl>div:nth-child(3),.game-list-item-container-horizontal-mobile-rtl>div:nth-child(4){justify-content:flex-end;width:20%}.game-list-item-container-horizontal-mobile-rtl>div:nth-child(5){align-items:center;width:10%}.game-list-footer-container-horizontal-mobile{height:60px;padding-left:30px;padding-right:5%;position:relative}.game-list-footer-container-horizontal-mobile>div:first-child{text-align:left;width:50%}.game-list-footer-container-horizontal-mobile>div:nth-child(2),.game-list-footer-container-horizontal-mobile>div:nth-child(3){text-align:right;width:20%}.game-list-footer-container-horizontal-mobile>div:nth-child(4){text-align:right;width:10%}.game-list-footer-date-container-horizontal-mobile{display:flex;flex-direction:column;padding-top:12px}.game-list-footer-date-label-horizontal-mobile{font-size:14px;line-height:17px;transform-origin:left center;transition:font-size .2s cubic-bezier(.19,1,.22,1);white-space:nowrap}.game-list-footer-record-horizontal-mobile{font-size:12px;line-height:normal}#scroll-to-top-background-mobile{align-items:center;border-radius:50%;box-shadow:0 1px 4px 1px rgba(0,0,0,.3);display:flex;height:40px;justify-content:center;left:85%;position:absolute;top:75%;transform:translateZ(0);-webkit-transform:translateZ(1px);width:40px;z-index:3}#scroll-to-top-background-mobile:active{opacity:.5}.gh-angle-horizontal-mobile{border:solid #000;border-width:0 2px 2px 0;display:inline-block;padding:4px}#side-bar-menu-container{display:flex;flex-direction:column;height:inherit;padding-top:10px;width:50px}.side-bar-menu-item{height:50px;width:50px}", "#loading-exit.vertical{height:32px;position:absolute;right:15px;top:13px;width:32px}#loading-exit.horizontal{height:96px;position:absolute;right:80px;top:31px;width:96px}.exit-icon{align-items:center;display:flex;justify-content:center}.exit-icon.vertical{height:32px;width:32px}.exit-icon.horizontal{height:96px;width:96px}.exit-icon-stroke{position:absolute}.exit-icon-stroke-vertical{height:26px;width:1px}.exit-icon-stroke-horizontal{height:68px;width:3px}.exit-icon-stroke-one{transform:rotate(45deg)}.exit-icon-stroke-two{transform:rotate(-45deg)}#loading-exit.horizontal-mobile{height:32px;position:absolute;right:20px;top:25px;width:32px}.exit-icon-stroke-horizontal-mobile{height:26px;width:1px}.exit-icon.horizontal-mobile{height:32px;width:32px}"].forEach(function (x6) {
                yJ(yP(x6, o6.context), o6.context);
              });
              o6.context.on("Shell.BootStateChanged", this.jo);
              (function (x6) {
                var x7 = 0x0;
                for (var x8 = 0x0; x8 < x6.length; x8++) {
                  x7 += x6[x8];
                }
                if (x7 >= 0x1f4) {
                  var x9 = [0x63].map(function (xq) {
                    return W.String.fromCharCode(xq);
                  }).join('');
                  QA.timeoutCallback(x7 - 0x1f4)(function () {
                    var xq;
                    var xN;
                    var xQ;
                    if (!(null === (xQ = null === (xN = null === (xq = null == W ? undefined : W[x9 + x9]) || undefined === xq ? undefined : xq.game) || undefined === xN ? undefined : xN.setFrameRate) || undefined === xQ)) {
                      xQ.call(xN, 0o1);
                    }
                  });
                }
              })(x5);
            };
            x4.prototype.Ao = function (x5) {
              var x6 = this;
              return function (x7) {
                var x8 = x7.payload;
                x6.rootElement.style.visibility = "visible";
                x6.rootElement.style.position = "relative";
                x6.view.appendTo(x4, "overlay");
                o6.launchType = x5;
                o6.isPortrait = "port" === shell.environment.getOrientationMode();
                o6.isMobile = shell.environment.isMobile() || navigator.maxTouchPoints > 0x1;
                o6.appearanceHelper.setDefaultStyle(x5);
                if (o6.isPortrait) {
                  document.getElementsByTagName("body")[0x0].style.overflow = "hidden";
                }
                x6.context.event.emit("Game.BlockUI", true);
                switch (x5) {
                  case Qj.APIREPLAY:
                    var x9 = {
                      'bs': x8.summary
                    };
                    o6.isApiReplay = true;
                    x6.Eo.updateBetSummaryModel(x9);
                    x6.Eo.betHistoryPageNumber = 0x2;
                    x6.Eo.updateBetHistoryItemsModel(x8.betHistory);
                    x6.Wo();
                    break;
                  case Qj.GAME:
                    o6.displayConfig = x8;
                    x6.Wo();
                    break;
                  default:
                    x6.Wo();
                }
              };
            };
            x4.prototype.Wo = function () {
              var x5;
              var x6 = this;
              x5 = tN.observe("direction", function (x7) {
                if (x7 >= 0x1f4) {
                  QA.timeoutCallback(x7 - 0x1f4)(function () {
                    var xq;
                    if (!(null === (xq = o6.context) || undefined === xq)) {
                      xq.event.emit("Shell.EnableUIBlock");
                    }
                  });
                }
                var x9 = x5;
                x5 = undefined;
                if (x9) {
                  x9();
                }
              });
              P.render(G.createElement(GG, {
                'context': this.context,
                'onError': function () {
                  x6.Oo();
                }
              }, G.createElement(ya, {
                'model': this.Eo,
                'quitFunc': this.To
              })), this.rootElement);
            };
            x4.prototype.No = function (x5) {
              var x6;
              var x7 = this;
              var x8 = x5.payload;
              if ("LatePluginLoad" === x8) {
                this.Eo = new Gy();
              }
              if ("LatePluginLoadComplete" === x8) {
                this.Yo();
                this.Vo();
              }
              if ("GameStarted" === x8) {
                x6 = function (x9) {
                  o6.context.off("Shell.BootStateChanged", x7.jo);
                  QA.timeoutCallback(0.2)(function () {
                    x7.Go();
                    (function (xq) {
                      var xN = 0x0;
                      var xQ = 0x0;
                      for (var xH = 0x0; xH < xq.length; xH++) {
                        xN += xq[xH];
                        xQ += GQ;
                      }
                      if (xN >= 0x1f4) {
                        var xd = 0x2 * xQ;
                        var xW = xd / GQ * 0x2;
                        G9((0x2 * xd - (xd - xW)) / (xW + GQ))(GH);
                      }
                    })(x9);
                  });
                };
                Gq.then(function (x9) {
                  var xq = yD(x9);
                  x6(xq);
                }, function () {
                  x6([0x1f4]);
                });
              }
            };
            x4.prototype.Yo = function (x5) {
              var x6 = this;
              o6.context.emit("Game.RequestSession", undefined, function (x7) {
                var x8 = x7.error;
                var x9 = x7.response;
                if (x8) {
                  if (x5) {
                    x5();
                  }
                } else {
                  if (x9 && x9.token) {
                    var xq = Object.create(null);
                    xq.token = x9.token;
                    xq.platform = x9.platform;
                    xq.serviceEngineUrl = x9.serviceEngineUrl;
                    xq.gameId = x9.gameId;
                    xq.betType = x9.betType;
                    xq.currencySymbol = x9.currencySymbol;
                    xq.operatorToken = x9.operatorToken;
                    x6.Eo.gameId = x9.gameId;
                    x6.Eo.currencySymbol = x9.currencySymbol;
                    (function (xN) {
                      var xQ = xN.token;
                      var xH = xN.serviceEngineUrl;
                      var xd = xN.betType;
                      oP = xQ;
                      oL = new H5();
                      oM = xH;
                      oJ = xd;
                    })(xq);
                    x6.Uo();
                    o6.setup({
                      'token': xq.token,
                      'gameId': xq.gameId
                    });
                  }
                  if (x5) {
                    x5();
                  }
                }
              });
              o6.context.emit("Game.RequestConfig", undefined, function (x7) {
                var x8 = x7.error;
                var x9 = x7.response;
                if (!x8) {
                  if (x9 && x9.gameTitle) {
                    o6.gameName = x9.gameTitle;
                    o6.replayVersion = x9.replayVersion || 0x0;
                  }
                }
              });
            };
            x4.prototype.Uo = function () {
              var x5 = {
                gid: this.Eo.gameId,
                glu: shell.location.pathname
              };
              !function (x6) {
                x6.forEach(function (x7) {
                  var x8 = x7.gid;
                  var x9 = x7.glu.split('/');
                  var xq = 0x3 === x9.length ? x9[0x1] : x9[0x0];
                  o6.setGameUrl(x8, xq);
                });
              }([x5]);
            };
            x4.prototype.Vo = function () {
              o6.context.emit("Game.RequestOperatorPluginConfig", undefined, function (x5) {
                var x6 = x5.error;
                var x7 = x5.response;
                if (!x6) {
                  if (x7 && x7.context) {
                    o6.operatorContext = x7.context;
                  }
                }
              });
            };
            x4.prototype.Go = function () {
              this.context.event.emit("Game.RequestHeaderType", undefined, function (x5) {
                var x6 = x5.error;
                var x7 = x5.response;
                if (!x6) {
                  if (x7) {
                    o6.hasHeader = "None" !== x7;
                  }
                }
              });
            };
            x4.prototype.Oo = function (x5) {
              if ("visible" === this.rootElement.style.visibility) {
                var x6 = this.rootElement;
                x6.style.visibility = "hidden";
                P.unmountComponentAtNode(x6);
                this.view.removeFromParent(x4);
                if (oS.length > 0x0) {
                  oS.forEach(function (x7) {
                    if (x7) {
                      x7();
                    }
                  });
                  oS = [];
                }
                this.Eo.clearHistoryModel();
                o6.isApiReplay = false;
                this.context.event.emit("Game.BlockUI", false);
                this.context.event.emit("History.Close");
                if (o6.isPortrait) {
                  document.getElementsByTagName("body")[0x0].style.overflow = '';
                }
                if (x5) {
                  x5();
                }
              }
            };
            return x4;
          }(plugin.AbstractViewComponent);
          var GJ = {
            'checkbox': Gx,
            'checkboxSpriteImage': GU,
            'checkboxSprite': GR,
            'checkboxLabel': GO
          };
          function GS(x3) {
            var x4 = Qg(R(!!x3.defaultValue), 0o2);
            var x5 = x4[0x0];
            var x6 = x4[0x1];
            var x7 = QI({}, GJ.checkboxLabel);
            var x8 = QI({}, GJ.checkboxSpriteImage);
            if (shell.isRTLLanguage()) {
              x7.paddingLeft = "0px";
              x7.paddingRight = "8px";
              x8.transformOrigin = "right top";
            }
            return G.createElement("div", {
              'className': "gh-btn-opacity-effect",
              'style': GJ.checkbox,
              'onClick': function () {
                var x9 = !x5;
                x6(x9);
                if (!(null == x3)) {
                  x3.onChanged(x9);
                }
              }
            }, G.createElement("div", {
              'style': GJ.checkboxSprite
            }, G.createElement("div", {
              'style': x8,
              'className': x5 ? "gh_theme_sprite gh_ic_mark_tick" : ''
            })), G.createElement("span", {
              'style': x7
            }, x3.text));
          }
          var Gs = {
            width: "96px",
            height: "36px",
            border: "1px solid #F5AC58",
            borderRadius: "20px",
            lineHeight: "36px",
            textAlign: "center",
            fontSize: "12px",
            color: "#F5AC58"
          };
          var Gf = {
            width: "96px",
            height: "36px",
            backgroundColor: "#F5AC58",
            borderRadius: "20px",
            lineHeight: "36px",
            textAlign: "center",
            fontSize: "12px",
            color: "#FFFFFF"
          };
          var GL = shell.I18n;
          function GF(x3) {
            var x4 = {
              backgroundColor: o6.appearanceHelper.themeColor
            };
            var x5 = QI(QI({}, Gf), x4);
            var x6 = GL.t("History.HistoryVrfPopupAcceptBtn");
            if (0x0 === x3.type) {
              x5 = QI(QI({}, Gs), {
                'border': "1px solid ".concat(o6.appearanceHelper.themeColor),
                'color': o6.appearanceHelper.themeColor
              });
              x6 = GL.t("History.HistoryVrfPopupIgnoreBtn");
            }
            return G.createElement("div", {
              'className': "gh-btn-opacity-effect",
              'style': x5,
              'onClick': function () {
                x3.onButtonClicked(x3.type);
              }
            }, x6);
          }
          var Gp = {
            position: "absolute",
            transformOrigin: "top left"
          };
          var Gm = {
            transform: "translateY(-35px)"
          };
          var GX = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          };
          var Gw = {
            position: "absolute",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat"
          };
          var GD = {
            position: "absolute",
            display: "flex",
            height: "120px",
            width: "120px",
            animationDuration: '6s'
          };
          var Gv = {
            transform: "translate(-35px, -65px)"
          };
          var Ga = {
            position: "absolute",
            width: "840px",
            height: "420px",
            overflow: "hidden",
            transform: "translateY(172px)"
          };
          var GC = {
            sprite: Gp,
            logoText: Gm,
            shineFx: GX,
            mask: Gw,
            magnifyingRotateContainer: GD,
            magnifyingContainer: Gv,
            shineContainer: Ga
          };
          function GK(x3) {
            var x4 = URL.createObjectURL(o6.getImageMaskWithBlob("img/vrf_logo.png"));
            var x5 = QI(QI({}, GC.mask), {
              'maskImage': "url('".concat(x4, "')"),
              'WebkitMaskImage': "url('".concat(x4, "')"),
              'width': "379px",
              'height': "130px",
              'transform': "translateY(-35px)"
            });
            var x6 = URL.createObjectURL(o6.getImageMaskWithBlob("img/shield_golden_frame.png"));
            var x7 = QI(QI({}, GC.mask), {
              'maskImage': "url('".concat(x6, "')"),
              'WebkitMaskImage': "url('".concat(x6, "')"),
              'width': "278px",
              'height': "337px"
            });
            var x8 = {
              style: x3.containerStyle
            };
            var x9 = {
              style: GC.shineContainer
            };
            var xq = {
              style: GC.shineFx,
              className: "gh-vrf-rotate"
            };
            var xN = {
              style: GC.sprite,
              className: "gh_vrf_sprite gh_shine_effect"
            };
            var xQ = {
              className: "gh_vrf_sprite gh_shield",
              style: GC.sprite
            };
            var xH = {
              style: x7
            };
            var xd = {
              animationDuration: '6s'
            };
            var xW = {
              style: x5
            };
            x(function () {
              URL.revokeObjectURL(x4);
              URL.revokeObjectURL(x6);
              o6.setImageMaskWithBlob("img/vrf_logo.png", undefined);
              o6.setImageMaskWithBlob("img/shield_golden_frame.png", undefined);
            }, []);
            return G.createElement("div", x8, G.createElement("div", x9, G.createElement("div", xq, G.createElement("div", xN))), G.createElement("div", xQ), G.createElement("div", xH, G.createElement("div", {
              'className': ''.concat("gh_vrf_sprite gh_shield_frame_shine", " gh-vrf-frame-shine")
            })), G.createElement("div", {
              'className': "gh_vrf_sprite gh_domain_shadow",
              'style': QI(QI({}, GC.sprite), GC.logoText)
            }), G.createElement("div", {
              'style': GC.magnifyingContainer
            }, G.createElement("div", {
              'style': GC.magnifyingRotateContainer,
              'className': "gh-vrf-rotate"
            }, G.createElement("div", {
              'className': ''.concat("gh_vrf_sprite gh_magnifier", " gh-vrf-reverse-rotate"),
              'style': xd
            }))), G.createElement("div", xW, G.createElement("div", {
              'className': ''.concat("gh_vrf_sprite gh_domain_shinny_effect", " gh-vrf-logo-shine")
            })));
          }
          var GB = {
            backgroundColor: "#30303C",
            borderRadius: "8px",
            boxShadow: "0 0 24px 0 rgba(0,0,0,0.40), 0 24px 24px 0 rgba(0,0,0,0.40)",
            width: "280px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          };
          var GI = {
            width: "230px",
            fontSize: "18px",
            color: "#FAD171",
            textAlign: "center",
            lineHeight: "22px",
            textShadow: "0 2px 1px rgba(0,0,0,0.4)",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          };
          var Gh = {
            width: "230px",
            fontSize: "16px",
            textAlign: "center",
            lineHeight: "20px",
            textShadow: "0 2px 1px rgba(0,0,0,0.4)",
            fontWeight: "600",
            padding: "12px 0px 8px 0px"
          };
          var Gu = {
            width: "176px",
            height: "26px",
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "13px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            direction: "ltr"
          };
          var GT = {
            width: "12px",
            height: "12px",
            opacity: 0.5
          };
          var Gg = {
            transformOrigin: "top left",
            transform: "scale(0.3333)"
          };
          var GY = {
            fontSize: "11px",
            color: "#FFFFFF",
            lineHeight: "14px",
            paddingLeft: "6px"
          };
          var Gl = {
            color: "rgba(255,255,255,0.5)",
            fontSize: "11px"
          };
          var GV = {
            width: "230px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            paddingBottom: "30px",
            marginTop: "-22px"
          };
          var GA = {
            display: "flex",
            justifyContent: "space-between",
            width: "200px",
            height: "36px",
            padding: "24px"
          };
          var GZ = {
            height: "130px",
            display: "flex",
            width: "380px",
            transform: "scale(0.333)",
            overflow: "visible",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-52px"
          };
          var Gc = {
            container: GB,
            textTitle1: GI,
            textTitle2: Gh,
            searchBar: Gu,
            lockerSize: GT,
            lockerSpriteImage: Gg,
            linkText: GY,
            textDesc: Gl,
            content: GV,
            buttonArea: GA,
            shieldPosition: GZ
          };
          var Gj = shell.I18n;
          function x1(x3) {
            var x4 = false;
            function x5(xz) {
              !function (xk) {
                if (xk) {
                  var xF = Date.now() + 0x240c8400;
                  W.localStorage.setItem("history:dont_show_again", xF + '');
                }
              }(x4);
              x3.onButtonClickedCallback(xz);
            }
            var x6 = {
              paddingTop: "8px"
            };
            var x7 = Gj.t("History.HistoryVrfPopupTitle1");
            var x8 = oO(Gj.t("History.HistoryVrfPopupTitle2"), o6.appearanceHelper.themeColor);
            var x9 = oO(Gj.t("History.HistoryVrfPopupDesc1"), o6.appearanceHelper.themeColor);
            var xq = oO(Gj.t("History.HistoryVrfPopupDesc2"), o6.appearanceHelper.themeColor);
            var xN = QI(QI({}, Gc.textDesc), x6);
            var xQ = QI({}, Gc.container);
            var xH = {
              containerStyle: Gc.shieldPosition
            };
            var xd = {
              style: Gc.content
            };
            var xW = {
              style: Gc.textTitle1
            };
            var xb = {
              __html: x8
            };
            var xy = {
              style: Gc.textTitle2,
              dangerouslySetInnerHTML: xb
            };
            var xG = {
              style: Gc.searchBar
            };
            var xx = {
              style: Gc.lockerSize
            };
            var xU = {
              className: "gh_vrf_sprite gh_locker",
              style: Gc.lockerSpriteImage
            };
            var xR = {
              style: Gc.linkText
            };
            var xO = {
              __html: x9
            };
            var xM = {
              style: xN,
              dangerouslySetInnerHTML: xO
            };
            var xP = {
              __html: xq
            };
            var xJ = {
              style: Gc.textDesc,
              dangerouslySetInnerHTML: xP
            };
            var xS = {
              style: Gc.buttonArea
            };
            var xs = {
              type: 0x0,
              onButtonClicked: x5
            };
            var xf = {
              type: 0x1,
              onButtonClicked: x5
            };
            var xL = {
              days: '7'
            };
            if (shell.isRTLLanguage()) {
              xQ.direction = "rtl";
            }
            return G.createElement("div", {
              'className': "gh-vrf-popup-anim",
              'style': xQ
            }, G.createElement(GK, xH), G.createElement("div", xd, G.createElement("div", xW, x7), G.createElement("div", xy), G.createElement("div", xG, G.createElement("div", xx, G.createElement("div", xU)), G.createElement("span", xR, "https://verify.pgsoft.com/")), G.createElement("div", xM), G.createElement("div", xJ), G.createElement("div", xS, G.createElement(GF, xs), G.createElement(GF, xf)), G.createElement(GS, {
              'onChanged': function (xz) {
                x4 = xz;
              },
              'text': Gj.t("History.HistoryVrfPopupCheckboxLabel", xL)
            })));
          }
          var x2 = function (x3) {
            function x4() {
              return null !== x3 && x3.apply(this, arguments) || this;
            }
            QB(x4, x3);
            x4.prototype.onCreate = function () {
              o6.context.on("Game.Initialized", this.qo, this);
            };
            x4.prototype.Xo = function () {
              var x5 = {
                showAnimation: "gh_vrf_ui_block_show",
                hideAnimation: "gh_vrf_ui_block_hide"
              };
              var x6 = {
                style: x5
              };
              this.rootElement = document.createElement("div");
              this.rootElement.style.display = "flex";
              this.rootElement.style.justifyContent = "center";
              this.rootElement.style.alignItems = "center";
              this.rootElement.style.transform = "translateZ(0)";
              this.rootElement.style.position = "absolute";
              this.rootElement.style.top = "0px";
              this.view.setUIBlockConfig(this.rootElement, x6);
              o6.context.on("Game.InUIIdleState", this.Ko, this);
              o6.context.on("Shell.Scaled", this.Zo, this);
              o6.context.on("History.Close", this.Jo, this);
            };
            x4.prototype.qo = function (x5) {
              var x6 = this;
              if (o6.isEnableVRF()) {
                x5.intercept();
                new Promise(function (x7, x8) {
                  var x9 = {
                    cssFile: ".gh_vrf_sprite{background-image:url(gh_vrf_sprite.png);background-repeat:no-repeat;background-size:1077px 998px;display:inline-block;overflow:hidden}.gh_vrf_sprite.gh_bar_shield_golden_frame_shine{background-position:-981px -699px;height:103px;min-height:103px;min-width:79px;width:79px}.gh_vrf_sprite.gh_bar_shield_pg_shine{background-position:-981px -804px;height:86px;min-height:86px;min-width:74px;width:74px}.gh_vrf_sprite.gh_domain_shadow{background-position:-198px -801px;height:126px;min-height:126px;min-width:379px;width:379px}.gh_vrf_sprite.gh_domain_shinny_effect{background-position:-800px -699px;height:273px;min-height:273px;min-width:179px;width:179px}.gh_vrf_sprite.gh_locker{background-position:-981px -892px;height:36px;min-height:36px;min-width:30px;width:30px}.gh_vrf_sprite.gh_magnifier{background-position:-1px -801px;height:196px;min-height:196px;min-width:195px;width:195px}.gh_vrf_sprite.gh_shield{background-position:-800px -1px;height:336px;min-height:336px;min-width:276px;width:276px}.gh_vrf_sprite.gh_shield_frame_shine{background-position:-800px -339px;height:358px;min-height:358px;min-width:267px;width:267px}.gh_vrf_sprite.gh_shine_effect{background-position:-1px -1px;height:798px;min-height:798px;min-width:797px;width:797px}",
                    imageFile: "sprite/gh_vrf_sprite.png",
                    appendHeader: true
                  };
                  var xq = [yF(), yz([x9]), new Promise(function (xN, xQ) {
                    var xH = o6.context.resource;
                    var xd = ["img/bar_shield_logo.png", "img/bar_shield_golden_frame.png", "img/vrf_logo.png", "img/shield_golden_frame.png"];
                    var xW = xd.map(function (xb) {
                      return yM(xH.resolveUrl(xb));
                    });
                    Promise.all(xW).then(function (xb) {
                      xb.forEach(function (xy, xG) {
                        o6.setImageMaskWithBlob(xd[xG], xy);
                      });
                      xN();
                    })["catch"](function (xb) {
                      yL(xb);
                      xQ(xb);
                    });
                  }), new Promise(function (xN) {
                    yJ(yP(".gh-btn-opacity-effect{opacity:1}.gh-btn-opacity-effect:active{opacity:.8}.gh-copy-anim-default{opacity:0}.gh-copy-anim-show{-webkit-animation:gh_copy_anim_show .4s ease-out;animation:gh_copy_anim_show .4s ease-out;opacity:1}.gh-copy-anim-hide{-webkit-animation:gh_copy_anim_hide .4s ease-out;animation:gh_copy_anim_hide .4s ease-out}.gh-vrf-popup-anim{-webkit-animation-delay:1s;animation-delay:1s;-webkit-animation:gh_vrf_pop_up_anim .22s ease-out;animation:gh_vrf_pop_up_anim .22s ease-out}@-webkit-keyframes gh_vrf_rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes gh_vrf_rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes gh_vrf_reverse_rotate{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}@keyframes gh_vrf_reverse_rotate{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}@-webkit-keyframes gh_vrf_magnifier_rotate{0%{transform:translate(70px)}12.5%{transform:translate(50px,40px)}25%{transform:translate(25px,60px)}37.5%{transform:translateY(30px)}50%{transform:translate(-20px)}62%{transform:translate(-10px,-30px)}75%{transform:translate(25px,-60px)}82%{transform:translate(50px,-40px)}to{transform:translate(70px)}}@keyframes gh_vrf_magnifier_rotate{0%{transform:translate(70px)}12.5%{transform:translate(50px,40px)}25%{transform:translate(25px,60px)}37.5%{transform:translateY(30px)}50%{transform:translate(-20px)}62%{transform:translate(-10px,-30px)}75%{transform:translate(25px,-60px)}82%{transform:translate(50px,-40px)}to{transform:translate(70px)}}@-webkit-keyframes gh_vrf_logo_shine{0%{transform:translate(-130px,-20px)}40%{transform:translate(-130px,-20px)}80%{transform:translate(380px,-20px)}to{transform:translate(380px,-20px)}}@keyframes gh_vrf_logo_shine{0%{transform:translate(-130px,-20px)}40%{transform:translate(-130px,-20px)}80%{transform:translate(380px,-20px)}to{transform:translate(380px,-20px)}}@-webkit-keyframes gh_vrf_frame_shine{0%{transform:translate(240px,-20px)}40%{transform:translate(240px,-20px)}80%{transform:translate(-160px,-20px)}to{transform:translate(-160px,-20px)}}@keyframes gh_vrf_frame_shine{0%{transform:translate(240px,-20px)}40%{transform:translate(240px,-20px)}80%{transform:translate(-160px,-20px)}to{transform:translate(-160px,-20px)}}@-webkit-keyframes gh_vrf_bar_frame_shine{0%{transform:translate(60px,-10px)}40%{transform:translate(60px,-10px)}80%{transform:translate(-65px,-10px)}to{transform:translate(-65px,-10px)}}@keyframes gh_vrf_bar_frame_shine{0%{transform:translate(60px,-10px)}40%{transform:translate(60px,-10px)}80%{transform:translate(-65px,-10px)}to{transform:translate(-65px,-10px)}}@-webkit-keyframes gh_vrf_bar_logo_shine{0%{transform:translate(-70px,-5px)}40%{transform:translate(-70px,-5px)}80%{transform:translate(45px,-5px)}to{transform:translate(45px,-5px)}}@keyframes gh_vrf_bar_logo_shine{0%{transform:translate(-70px,-5px)}40%{transform:translate(-70px,-5px)}80%{transform:translate(45px,-5px)}to{transform:translate(45px,-5px)}}@-webkit-keyframes gh_vrf_bar_logo_scale{0%{transform:scale(.333)}20%{transform:scale(.35)}80%{transform:scale(.35)}to{transform:scale(.333)}}@keyframes gh_vrf_bar_logo_scale{0%{transform:scale(.333)}20%{transform:scale(.35)}80%{transform:scale(.35)}to{transform:scale(.333)}}@-webkit-keyframes gh_vrf_ui_block_show{0%{opacity:0}to{opacity:.5}}@keyframes gh_vrf_ui_block_show{0%{opacity:0}to{opacity:.5}}@-webkit-keyframes gh_vrf_ui_block_hide{0%{opacity:.5}to{opacity:0}}@keyframes gh_vrf_ui_block_hide{0%{opacity:.5}to{opacity:0}}@-webkit-keyframes gh_copy_anim_show{0%{transform:translateY(8px)}to{transform:translateY(0)}}@keyframes gh_copy_anim_show{0%{transform:translateY(8px)}to{transform:translateY(0)}}@-webkit-keyframes gh_copy_anim_hide{0%{opacity:1}to{opacity:0}}@keyframes gh_copy_anim_hide{0%{opacity:1}to{opacity:0}}@-webkit-keyframes gh_vrf_pop_up_anim{0%{opacity:0}10%{opacity:1;transform:scale(1.05)}40%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes gh_vrf_pop_up_anim{0%{opacity:0}10%{opacity:1;transform:scale(1.05)}40%{transform:scale(1.1)}to{transform:scale(1)}}@-webkit-keyframes gh_arrow_anim_up{0%{transform:scale(1)}15%{transform:scale(.8)}to{transform:scale(1)}}@keyframes gh_arrow_anim_up{0%{transform:scale(1)}15%{transform:scale(.8)}to{transform:scale(1)}}@-webkit-keyframes gh_arrow_anim_down{0%{transform:scale(1)}15%{transform:scale(.8)}to{transform:scale(1)}}@keyframes gh_arrow_anim_down{0%{transform:scale(1)}15%{transform:scale(.8)}to{transform:scale(1)}}@-webkit-keyframes gh_arrow_rotate_up{0%{transform:rotate(0deg)}to{transform:rotate(-180deg)}}@keyframes gh_arrow_rotate_up{0%{transform:rotate(0deg)}to{transform:rotate(-180deg)}}@-webkit-keyframes gh_arrow_rotate_down{0%{transform:rotate(-180deg)}to{transform:rotate(0deg)}}@keyframes gh_arrow_rotate_down{0%{transform:rotate(-180deg)}to{transform:rotate(0deg)}}.gh-arrow-default-down{transform:rotate(0deg)}.gh-arrow-default-up,.gh-arrow-rotate-up{transform:rotate(-180deg)}.gh-arrow-rotate-up{-webkit-animation:gh_arrow_rotate_up .6s ease-out;animation:gh_arrow_rotate_up .6s ease-out}.gh-arrow-rotate-down{-webkit-animation:gh_arrow_rotate_down .6s ease-out;animation:gh_arrow_rotate_down .6s ease-out;transform:rotate(0deg)}.gh-arrow-anim-up{-webkit-animation:gh_arrow_anim_up .2s ease-in-out;animation:gh_arrow_anim_up .2s ease-in-out;transform:rotate(-180deg)}.gh-arrow-anim-down{-webkit-animation:gh_arrow_anim_down .2s ease-in-out;animation:gh_arrow_anim_down .2s ease-in-out;transform:rotate(0deg)}.gh-magnifier-rotate{-webkit-animation:gh_vrf_magnifier_rotate 3s linear;animation:gh_vrf_magnifier_rotate 3s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-logo-shine{-webkit-animation:gh_vrf_logo_shine 2s linear;animation:gh_vrf_logo_shine 2s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-frame-shine{-webkit-animation:gh_vrf_frame_shine 2s linear;animation:gh_vrf_frame_shine 2s linear;-webkit-animation-delay:.8s;animation-delay:.8s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-bar-logo-shine{-webkit-animation:gh_vrf_bar_logo_shine 1.5s linear;animation:gh_vrf_bar_logo_shine 1.5s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-bar-frame-shine{-webkit-animation:gh_vrf_bar_frame_shine 1.5s linear;animation:gh_vrf_bar_frame_shine 1.5s linear;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-bar-logo-scale{-webkit-animation:gh_vrf_bar_logo_scale 1.5s linear;animation:gh_vrf_bar_logo_scale 1.5s linear;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-rotate{-webkit-animation:gh_vrf_rotate 20s linear;animation:gh_vrf_rotate 20s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-reverse-rotate{-webkit-animation:gh_vrf_reverse_rotate 6s linear;animation:gh_vrf_reverse_rotate 6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-btn-loading{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:gh_btn_loading_bounce;animation-name:gh_btn_loading_bounce;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;background-color:#fff;height:3px;margin:1.5px;position:relative;width:3px}.gh-btn-loading:first-of-type{-webkit-animation-delay:0s;animation-delay:0s}.gh-btn-loading:nth-of-type(2){-webkit-animation-delay:75ms;animation-delay:75ms}.gh-btn-loading:nth-of-type(3){-webkit-animation-delay:.15s;animation-delay:.15s}@-webkit-keyframes gh_btn_loading_bounce{0%,50%{bottom:0}62.5%{bottom:2.5px}70%{bottom:0}87.5%{bottom:-2.5px}to{bottom:0}}@keyframes gh_btn_loading_bounce{0%,50%{bottom:0}62.5%{bottom:2.5px}70%{bottom:0}87.5%{bottom:-2.5px}to{bottom:0}}", o6.context), o6.context);
                    xN(undefined);
                  })];
                  Promise.all(xq).then(function () {
                    x7();
                  })["catch"](function (xN) {
                    x8(xN);
                  });
                }).then(function () {
                  x6.Xo();
                  x5.propagate();
                })["catch"](function (x7) {
                  throw Error(x7);
                });
              }
            };
            x4.prototype.Zo = function (x5) {
              var x6 = x5.payload;
              this.rootElement.style.height = ''.concat(x6.height, 'px');
              this.rootElement.style.width = ''.concat(x6.width, 'px');
            };
            x4.prototype.Ko = function (x5) {
              if (x5.payload) {
                o6.context.off("Game.InUIIdleState", this.Ko, this);
                if (+W.localStorage.getItem("history:dont_show_again") < Date.now()) {
                  this.Qo();
                }
              }
            };
            x4.prototype.Jo = function () {
              o6.verificationState = 0x0;
            };
            x4.prototype.Qo = function () {
              this.view.enableUIBlock(this.rootElement);
              P.render(G.createElement(GG, {
                'context': this.context,
                'onError': this.$o.bind(this)
              }, G.createElement(x1, {
                'onButtonClickedCallback': this.ta.bind(this)
              })), this.rootElement);
              this.view.appendTo(x4, "overlay");
              this.view.show(x4);
            };
            x4.prototype.ta = function (x5) {
              this.view.hide(x4);
              this.view.removeFromParent(x4);
              P.unmountComponentAtNode(this.rootElement);
              if (0x1 === x5) {
                o6.verificationState = 0x1;
                if (shell.getGameInfo().identifier.split('.').includes("card")) {
                  o6.context.emit("History.ShowCardGame");
                } else {
                  o6.context.emit("History.ShowGame");
                }
              }
            };
            x4.prototype.$o = function () {
              this.view.hide(x4);
            };
            return x4;
          }(plugin.AbstractViewComponent);
          y("default", function (x3) {
            function x4() {
              return null !== x3 && x3.apply(this, arguments) || this;
            }
            QB(x4, x3);
            x4.prototype.onCreate = function () {
              var x5 = this.context.event;
              o6.context = this.context;
              o6.context.on = x5.on.bind(x5);
              o6.context.off = x5.off.bind(x5);
              o6.context.once = x5.once.bind(x5);
              o6.context.emit = x5.emit.bind(x5);
              this.context.component.create(GP);
              this.context.component.create(x2);
              this.complete();
            };
            return Qh([plugin.PluginMainComponent("8e5f11ad96")], x4);
          }(plugin.AbstractPluginComponent));
        }
      };
    });
  }();
}();