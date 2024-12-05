!function () {
  'use strict';

  !function () {
    var u = function () {
      var w = true;
      return function (V, m) {
        var s = w ? function () {
          if (m) {
            var a = m.apply(V, arguments);
            m = null;
            return a;
          }
        } : function () {};
        w = false;
        return s;
      };
    }();
    var D;
    !function (w) {
      var V = u(this, function () {
        return V.toString().search("(((.+)+)+)+$").toString().constructor(V).search("(((.+)+)+)+$");
      });
      V();
      w.t = "window";
      w.i = "self";
    }(D || (D = {}));
    var b = (0x0, eval)("this");
    b[D.i];
    var L = b[D.t];
    System.register([], function (w) {
      'use strict';

      return {
        'execute': function () {
          var u3 = L.__extends;
          var u4 = L.__decorate;
          var u5 = function () {
            function Pv(PC, Pp, Px) {
              var Pg = this;
              this.o = function () {
                var Pe = Pg.l;
                Pe.classList.remove("toast_show");
                Pe.classList.add("toast_hide");
              };
              this.u = function () {
                var Pe = Pg.l;
                if (Pe) {
                  Pe.parentNode.removeChild(Pe);
                  if (Pg.p) {
                    Pg.p();
                  }
                  Pg._();
                }
              };
              this.v = function (Pe) {
                return "rgba(".concat(Pe.r, ',').concat(Pe.g, ',').concat(Pe.b, ',').concat(Pe.a, ')');
              };
              this.m = PC;
              this.k = Pp;
              this.p = Px;
            }
            Pv.prototype.getRootElement = function () {
              return this.M;
            };
            Pv.prototype.getToastElement = function () {
              return this.l;
            };
            Pv.prototype.resize = function (PC) {
              this.S = PC;
              var Pp = this.M;
              Pp.style.height = PC.height + 'px';
              Pp.style.width = PC.width + 'px';
              this.j();
            };
            Pv.prototype.show = function (PC) {
              this.O = PC;
              if (this.M) {
                this._();
              }
              this.M = document.createElement("div");
              this.M.setAttribute('id', "toast-container");
              this.l = this.F(PC);
              this.C();
              this.A(PC);
            };
            Pv.prototype.C = function () {
              if (this.m) {
                this.m();
              }
              var PC = this.l;
              PC.addEventListener("transitionend", this.u, true);
              PC.addEventListener("touchstart", this.u, true);
              PC.addEventListener("mousedown", this.u, true);
            };
            Pv.prototype.T = function () {
              if (this.k) {
                this.k();
              }
              var PC = this.l;
              PC.removeEventListener("transitionend", this.u);
              PC.removeEventListener("touchstart", this.u);
              PC.removeEventListener("mousedown", this.u);
            };
            Pv.prototype.A = function (PC) {
              var Pp = PC.duration ? PC.duration : 0x2;
              this.B();
              this.N = setTimeout(this.o, 0x3e8 * Pp);
            };
            Pv.prototype.B = function () {
              var PC = this.l;
              PC.classList.remove("toast_hide");
              PC.classList.add("toast_show");
            };
            Pv.prototype._ = function () {
              clearTimeout(this.N);
              this.T();
              this.M = undefined;
              this.l = undefined;
              this.O = undefined;
              this.N = undefined;
            };
            Pv.prototype.L = function (PC) {
              this.l = PC;
              PC.style.fontSize = "11.5px";
              PC.style.padding = "13.5px";
              PC.style.lineHeight = "13.5px";
            };
            Pv.prototype.F = function (PC) {
              return "Notification" === (PC.toastStyle ? PC.toastStyle : "Message") ? this.I(PC) : this.H(PC);
            };
            Pv.prototype.I = function (PC) {
              var Pp = PC.toastPosition ? PC.toastPosition : "Top";
              var Px = PC.message ? PC.message : null;
              var Pg = PC.imageSrc ? PC.imageSrc : undefined;
              var Pe = PC.layoutStyle;
              var PI = this.D(Pe);
              var PQ = this.G(Px, Pe);
              if (PQ) {
                PI.appendChild(PQ);
              }
              var PR = document.createElement("div");
              PI.setAttribute('id', "notification");
              if ("land" === shell.environment.getOrientationMode()) {
                this.L(PI);
              }
              PR.setAttribute('id', "notification-message");
              PI.classList.add(this.$(Pp));
              if (Pg) {
                var Ph = document.createElement("img");
                Ph.setAttribute('id', "notification-icon");
                Ph.src = Pg;
                PI.appendChild(Ph);
                if (PQ) {
                  PQ.style.margin = "10px 0px";
                }
              }
              if (PC.positionOffset) {
                if ("Top" === Pp) {
                  PI.style.top = ''.concat(PC.positionOffset, 'px');
                } else if ("Bottom" === Pp) {
                  PI.style.bottom = ''.concat(PC.positionOffset, 'px');
                }
              }
              PI.appendChild(PR);
              this.M.appendChild(PI);
              return PI;
            };
            Pv.prototype.H = function (PC) {
              var Pp = PC.toastPosition ? PC.toastPosition : "Bottom";
              var Px = PC.layoutStyle;
              var Pg = PC.message ? PC.message : null;
              var Pe = this.D(Px);
              var PI = this.G(Pg, Px);
              if (PI) {
                Pe.appendChild(PI);
              }
              Pe.setAttribute('id', "toast");
              if ("land" === shell.environment.getOrientationMode()) {
                this.L(Pe);
              }
              Pe.classList.add(this.$(Pp));
              if (PC.positionOffset) {
                if ("Top" === Pp) {
                  Pe.style.top = ''.concat(PC.positionOffset, 'px');
                } else if ("Bottom" === Pp) {
                  Pe.style.bottom = ''.concat(PC.positionOffset, 'px');
                }
              }
              this.M.appendChild(Pe);
              return Pe;
            };
            Pv.prototype.D = function (PC) {
              var Pp = document.createElement("div");
              if (null == PC ? undefined : PC.background) {
                var Px = PC.background;
                var Pg = Px.border;
                var Pe = Px.opacity;
                var PI = Px.backgroundColor;
                var PQ = Px.boxShadow;
                var PR = Px.borderRadius;
                var Ph = Px.backgroundImage;
                if (Pg) {
                  Pp.style.border = Pg;
                }
                if (Pe) {
                  Pp.style.opacity = Pe;
                }
                if (PQ) {
                  Pp.style.boxShadow = PQ;
                }
                if (PR) {
                  Pp.style.borderRadius = PR;
                }
                if (Ph) {
                  Pp.style.backgroundImage = Ph;
                }
                if (PI) {
                  Pp.style.backgroundColor = "string" == typeof PI ? PI : this.v(PI);
                }
              }
              return Pp;
            };
            Pv.prototype.G = function (PC, Pp) {
              if (PC) {
                var Px = document.createElement("div");
                if (null == Pp ? undefined : Pp.message) {
                  var Pg = this.q(PC, Pp.message);
                  if (Pg) {
                    Px.appendChild(Pg);
                  }
                } else {
                  Px.textContent = PC;
                }
                return Px;
              }
            };
            Pv.prototype.q = function (PC, Pp, Px) {
              if (Pp) {
                var Pg = document.createElement("span");
                var Pe = Pp.opacity;
                var PI = Pp.fontColor;
                var PQ = Pp.fontStyle;
                var PR = Pp.fontSize;
                if (Pe) {
                  Pg.style.opacity = Pe;
                }
                if (PR) {
                  Pg.style.fontSize = PR;
                }
                if (PQ) {
                  Pg.style.fontStyle = PQ;
                }
                if (PI) {
                  Pg.style.color = "string" == typeof PI ? PI : this.v(PI);
                }
                if (Px) {
                  Pg.classList.add(Px);
                }
                Pg.textContent = PC.trim();
                return Pg;
              }
            };
            Pv.prototype.$ = function (PC) {
              switch (PC) {
                case "Top":
                  return "toast_top";
                case "Middle":
                  return "toast_middle";
                default:
                  return "toast_bottom";
              }
            };
            Pv.prototype.j = function () {
              var PC = this.O;
              var Pp = this.l;
              var Px = PC && PC.toastPosition ? PC.toastPosition : "Top";
              var Pg = this.S;
              var Pe = Pg.width / 0x2 - Pp.clientWidth / 0x2;
              var PI = Pg.height / 0x2 - Pp.clientHeight / 0x2;
              if ("Middle" === Px) {
                Pp.style.top = ''.concat(PI, 'px');
              } else {
                Pp.style.left = ''.concat(Pe, 'px');
              }
              var PQ = Pg.width / 0x2 - Pp.clientWidth / 0x2;
              Pp.style.left = ''.concat(PQ, 'px');
            };
            return Pv;
          }();
          var u6 = function (Pv) {
            function PC() {
              var Pp = null !== Pv && Pv.apply(this, arguments) || this;
              Pp.X = function (Px) {
                if (!Px.error) {
                  Pp.Y(Px.payload);
                }
              };
              Pp.Z = function () {
                Pp.context.event.emit("Toast.OnDismiss", Object.create(null));
              };
              Pp.P = function () {
                Pp.context.event.on("Shell.Scaled", Pp.X, Pp);
              };
              Pp.U = function () {
                Pp.context.event.off("Shell.Scaled", Pp.X, Pp);
                Pp.view.removeFromParent(PC);
              };
              return Pp;
            }
            u3(PC, Pv);
            PC.prototype.onCreate = function () {
              this.context.event.on("Toast.Show", this.R, this);
              this.V = new u5(this.P, this.U, this.Z);
            };
            PC.prototype.Y = function (Pp) {
              var Px;
              if (!(null === (Px = this.V) || undefined === Px)) {
                Px.resize(Pp);
              }
            };
            PC.prototype.R = function (Pp) {
              var Px;
              var Pg;
              var Pe = this;
              if (!(null === (Px = this.V) || undefined === Px)) {
                Px.show(Pp.payload);
              }
              this.rootElement = null === (Pg = this.V) || undefined === Pg ? undefined : Pg.getRootElement();
              this.context.view.appendTo(PC, "overlay");
              this.context.event.emit("Shell.GetScale", undefined, function (PI) {
                if (!PI.error) {
                  Pe.Y(PI.response);
                }
              });
              this.context.event.emit("Toast.OnBegin", Object.create(null));
            };
            return PC;
          }(plugin.AbstractViewComponent);
          var u7 = function () {
            function Pv(PC, Pp) {
              this.W = [];
              this.J = PC;
              this.K = Pp;
            }
            Pv.prototype.onReceivedInfo = function (PC, Pp) {
              var Px = this;
              this.J.onReceivedInfo(PC, function (Pg) {
                var Pe = 0x0;
                for (var PI = Pg.buttonsData; Pe < PI.length; Pe++) {
                  var PQ = PI[Pe];
                  Px.tt(PQ, Pp);
                }
                Px.nt = Pg.viewElement;
                Px.K.appendToContentElement(Pg.viewElement);
              });
            };
            Pv.prototype.onShow = function () {
              this.J.onShow();
              this.K.setContentElementSize(this.nt);
            };
            Pv.prototype.onHide = function () {
              this.J.onHide();
            };
            Pv.prototype.removeRegisteredHandlers = function () {
              var PC = 0x0;
              for (var Pp = this.W; PC < Pp.length; PC++) {
                var Px = Pp[PC];
                Px.element.removeEventListener("click", Px.onClickHandler);
              }
            };
            Pv.prototype.onScale = function (PC) {
              if (this.J.onScale) {
                this.J.onScale(PC);
              }
              this.it(PC, this.K.getScreenCenterElement());
              this.setHolderSize(PC.height, PC.width);
            };
            Pv.prototype.getMainElement = function () {
              return this.K.getMainElement();
            };
            Pv.prototype.setHolderSize = function (PC, Pp) {
              this.K.setSize(PC, Pp);
            };
            Pv.prototype.updateContent = function (PC) {
              this.J.updateContents(PC);
            };
            Pv.prototype.it = function (PC, Pp) {
              var Px = PC.height / 0x2 - Pp.clientHeight / 0x2;
              Pp.style.top = ''.concat(Math.abs(Px), 'px');
            };
            Pv.prototype.tt = function (PC, Pp) {
              var Px = PC.button;
              var Pg = undefined === Px.autoDismiss || Px.autoDismiss;
              Px.autoDismiss = Pg;
              this.et(PC, Pp);
            };
            Pv.prototype.et = function (PC, Pp) {
              var Px = function () {
                if (Pp) {
                  Pp(PC);
                }
              };
              PC.element.addEventListener("click", Px);
              this.W.push({
                'button': PC.button,
                'element': PC.element,
                'onClickHandler': Px
              });
            };
            return Pv;
          }();
          var u8 = function () {
            function Pv() {
              this.ot = function () {
                return "land" === shell.environment.getOrientationMode() ? "land" : "port";
              };
              this.convertToCSSColor = function (PC) {
                return "rgba(".concat(PC.r, ',').concat(PC.g, ',').concat(PC.b, ',').concat(PC.a, ')');
              };
              this.rt = function (PC) {
                var Pp = PC.length;
                if (0x2 !== Pp) {
                  return false;
                }
                for (var Px = 0x0; Px < Pp; ++Px) {
                  if ((PC[Px].label || '').length > 0xd) {
                    return false;
                  }
                }
                return true;
              };
            }
            Pv.prototype.createTitle = function (PC, Pp, Px) {
              var Pg;
              var Pe = PC.title;
              if (null == Pe ? undefined : Pe.length) {
                var PI;
                var PQ = !(null === (Pg = null == PC ? undefined : PC.content) || undefined === Pg ? undefined : Pg.length);
                PI = "land" === this.ot() ? this.st(Pe, "title_landscape", true, PQ) : this.st(Pe, "title", true, PQ);
                var PR = (null == Pp ? undefined : Pp.fontColor) ? Pp.fontColor : Px;
                if (PR) {
                  PI.style.color = this.convertToCSSColor(PR);
                }
                if (Pp) {
                  var Ph = Pp.opacity;
                  var Pq = Pp.fontStyle;
                  var Pf = Pp.fontSize;
                  if (Pq) {
                    PI.style.fontStyle = Pq;
                  }
                  if (Pf) {
                    PI.style.fontSize = Pf;
                  }
                  if (Ph) {
                    PI.style.opacity = Ph;
                  }
                }
                return PI;
              }
            };
            Pv.prototype.createMessage = function (PC, Pp, Px) {
              var Pg;
              var Pe = PC.content;
              if (null == Pe ? undefined : Pe.length) {
                var PI;
                var PQ = !(null === (Pg = null == PC ? undefined : PC.title) || undefined === Pg ? undefined : Pg.length);
                PI = "land" === this.ot() ? this.st(Pe, "message_landscape", PQ, PQ) : this.st(Pe, "message", PQ, PQ);
                var PR = (null == Pp ? undefined : Pp.fontColor) ? Pp.fontColor : Px;
                if (PR) {
                  PI.style.color = this.convertToCSSColor(PR);
                }
                if (Pp) {
                  var Ph = Pp.opacity;
                  var Pq = Pp.fontStyle;
                  var Pf = Pp.fontSize;
                  if (Pq) {
                    PI.style.fontStyle = Pq;
                  }
                  if (Pf) {
                    PI.style.fontSize = Pf;
                  }
                  if (Ph) {
                    PI.style.opacity = Ph;
                  }
                }
                return PI;
              }
            };
            Pv.prototype.createButtonGroup = function (PC, Pp, Px) {
              var Pg = PC.actions;
              if ((null == Pg ? undefined : Pg.length) && !(Pg.length <= 0x0)) {
                var Pe;
                var PI = Px || {};
                var PQ = document.createElement("div");
                Pe = PI.alignment ? "horizontal" === PI.alignment : this.rt(Pg);
                var PR = [];
                var Ph = this.lt(Pg.length);
                for (var Pq = 0x0; Pq < Pg.length; Pq++) {
                  var Pf = Pg[Pq];
                  var PO = PI.color && this.convertToCSSColor(PI.color);
                  var Py = PI.gradient;
                  if (Pp) {
                    var Pd = Pp.positiveButton;
                    var PB = Pp.negativeButton;
                    var Pz = Pp.neutralButton;
                    if (Ph) {
                      switch (Pf.type) {
                        case "Affirmative":
                          PO = Pd.backgroundColor;
                          if (Pd.gradient) {
                            Py = Pd.gradient;
                          }
                          break;
                        case "Destructive":
                          PO = PB.backgroundColor;
                          if (PB.gradient) {
                            Py = PB.gradient;
                          }
                          break;
                        default:
                          PO = Pz.backgroundColor;
                          if (Pz.gradient) {
                            Py = Pz.gradient;
                          }
                      }
                    } else {
                      PO = Pz.backgroundColor;
                      if (Pz.gradient) {
                        Py = Pz.gradient;
                      }
                    }
                  }
                  var Po = this.ct(Pf, Pe, PI.fontColor, PO, PI.fontWeight, PI.fontStyle, Py, PI.borderRadius);
                  var PH = this.ut(Pe);
                  PQ.appendChild(Po);
                  if (Pq !== Pg.length - 0x1) {
                    PQ.appendChild(PH);
                  }
                  PR.push({
                    'element': Po,
                    'button': Pf
                  });
                }
                if ("land" === this.ot()) {
                  PQ.className = "btn_content_landscape";
                  if (Pe) {
                    PQ.classList.add("btn_content_row_landscape");
                  }
                } else {
                  PQ.className = "btn_content";
                  if (Pe) {
                    PQ.classList.add("btn_content_row");
                  }
                }
                return {
                  'container': PQ,
                  'buttonsData': PR
                };
              }
            };
            Pv.prototype.st = function (PC, Pp, Px, Pg) {
              var Pe = document.createElement("div");
              Pe.style.whiteSpace = "normal";
              Pe.style.wordBreak = "break-word";
              PC = PC.replace(/\n/g, "<br/>");
              var PI = ''.concat(Pp, " ").concat(Pp, "_padding ");
              if ("land" === this.ot()) {
                if (Pg) {
                  PI += "single_content_padding_landscape";
                }
              } else if (Pg) {
                PI += "single_content_padding";
              }
              if (Px) {
                PC = "<b>" + PC + "</b>";
              }
              Pe.className = PI;
              Pe.innerHTML = PC;
              return Pe;
            };
            Pv.prototype.ct = function (PC, Pp, Px, Pg, Pe, PI, PQ, PR) {
              var Ph = document.createElement("div");
              var Pq = document.createElement("div");
              if ("land" === this.ot()) {
                Ph.className = "button_landscape";
                if (Pp) {
                  Ph.classList.add("row_landscape");
                }
              } else {
                Ph.className = "button";
                if (Pp) {
                  Ph.classList.add("row");
                }
              }
              if (Px) {
                Ph.style.color = this.convertToCSSColor(Px);
              }
              if (Pg) {
                Ph.style.backgroundColor = Pg;
              }
              if (Pe) {
                Ph.style.fontWeight = Pe;
              }
              if (PI) {
                Ph.style.fontStyle = PI;
              }
              if (PQ) {
                Ph.style.backgroundImage = PQ;
              }
              if (PR) {
                Ph.style.borderRadius = PR;
              }
              Pq.className = "text";
              Pq.innerHTML = PC.label;
              Ph.appendChild(Pq);
              return Ph;
            };
            Pv.prototype.ut = function (PC) {
              var Pp = document.createElement("div");
              return "land" === this.ot() ? (Pp.className = PC ? "btn_seperator_width_landscape" : "btn_seperator_height_landscape", Pp) : (Pp.className = PC ? "btn_seperator_width" : "btn_seperator_height", Pp);
            };
            Pv.prototype.lt = function (PC) {
              return PC <= 0x2;
            };
            return Pv;
          }();
          var u9 = new u8();
          var uu = function () {
            function Pv(PC, Pp) {
              this.ht = {};
              if ("land" === this.ot()) {
                this.cssClass = ''.concat(PC, "_alert_landscape");
              } else {
                this.cssClass = ''.concat(PC, "_alert");
              }
              if (Pp) {
                this.ht = Pp;
              }
              this.contentElement = document.createElement("div");
              this.contentElement.className = this.cssClass;
              if (this.ht.backgroundStyle) {
                var Px = this.ht.backgroundStyle;
                var Pg = Px.opacity;
                var Pe = Px.backgroundColor;
                var PI = Px.boxShadow;
                var PQ = Px.borderRadius;
                if (Pg) {
                  this.contentElement.style.opacity = Pg;
                }
                if (PI) {
                  this.contentElement.style.boxShadow = PI;
                }
                if (PQ) {
                  this.contentElement.style.borderRadius = PQ;
                }
                if (Pe) {
                  this.contentElement.style.backgroundColor = u9.convertToCSSColor(Pe);
                }
              } else if (this.ht.backgroundColor) {
                this.contentElement.style.backgroundColor = u9.convertToCSSColor(this.ht.backgroundColor);
              }
              this.viewElement = this.contentElement;
            }
            Object.defineProperty(Pv.prototype, "contentElem", {
              'get': function () {
                return this.contentElement;
              },
              'enumerable': false,
              'configurable': true
            });
            Pv.prototype.ot = function () {
              return "land" === shell.environment.getOrientationMode() ? "land" : "port";
            };
            Pv.prototype.onReceivedInfo = function (PC, Pp) {
              for (var Px = this.contentElement; Px.firstChild;) {
                Px.removeChild(Px.firstChild);
              }
              var Pg = this.ht;
              var Pe = u9.createTitle(PC, Pg.titleStyle, Pg.titleColor);
              var PI = u9.createMessage(PC, Pg.messageStyle, Pg.contentColor);
              var PQ = u9.createButtonGroup(PC, Pg.buttonTypeStyle, Pg.button);
              if (Pe) {
                Px.appendChild(Pe);
              }
              if (PI) {
                Px.appendChild(PI);
              }
              var PR = document.createElement("div");
              if ("land" === this.ot()) {
                PR.className = "line_separator_landscape";
              } else {
                PR.className = "line_separator";
              }
              var Ph = [];
              if (PQ) {
                Px.appendChild(PR);
                Px.appendChild(PQ.container);
                Ph.push.apply(Ph, PQ.buttonsData);
              }
              Pp({
                'viewElement': this.viewElement,
                'buttonsData': Ph
              });
            };
            Pv.prototype.onShow = function () {
              if ("land" === this.ot()) {
                this.viewElement.className = ''.concat(this.cssClass, " ").concat(this.cssClass, "_show_landscape");
              } else {
                this.viewElement.className = ''.concat(this.cssClass, " ").concat(this.cssClass, "_show");
              }
            };
            Pv.prototype.onHide = function () {
              this.viewElement.className = ''.concat(this.cssClass, " ").concat(this.cssClass, "_hide");
            };
            Pv.prototype.updateContents = function (PC) {
              var Pp = this.contentElement;
              var Px = this.ht;
              var Pg = Pp.children;
              var Pe = u9.createTitle(PC, Px.titleStyle, Px.titleColor);
              var PI = u9.createMessage(PC, Px.messageStyle, Px.contentColor);
              if (Pe) {
                var PQ = Pg[0x0];
                Pp.removeChild(PQ);
                Pp.insertBefore(Pe, Pg[0x0]);
              }
              if (PI) {
                var PR = Pg[0x1];
                Pp.removeChild(PR);
                Pp.insertBefore(PI, Pg[0x1]);
              }
            };
            return Pv;
          }();
          var uP = function (Pv) {
            function PC(Pp) {
              return Pv.call(this, "slot", Pp) || this;
            }
            u3(PC, Pv);
            return PC;
          }(uu);
          var uU = function () {
            function Pv() {
              this.dt = [];
              this.ft = undefined;
            }
            Pv.prototype.pushItem = function (PC) {
              this.dt.push(this.ft);
              this.setActive(PC);
              return PC;
            };
            Pv.prototype.popItem = function () {
              for (var PC = undefined; undefined === PC && 0x0 !== this.dt.length;) {
                PC = this.dt.pop();
              }
              return PC;
            };
            Pv.prototype.getQueue = function () {
              return this.dt;
            };
            Pv.prototype.isQueueAvailable = function () {
              return this.dt.length > 0x0;
            };
            Pv.prototype.setActive = function (PC) {
              this.ft = PC;
            };
            Pv.prototype.getActive = function () {
              return this.ft;
            };
            Pv.prototype.clearActive = function () {
              this.ft = undefined;
            };
            return Pv;
          }();
          var uF = function (Pv) {
            function PC(Pp) {
              return Pv.call(this, "lobby", Pp) || this;
            }
            u3(PC, Pv);
            return PC;
          }(uu);
          var un = function () {
            function Pv() {
              this._t = document.createElement("div");
              this._t.className = "alert_holder";
              this.vt = document.createElement("div");
              this.vt.className = "screen_center";
              this._t.appendChild(this.vt);
            }
            Pv.prototype.getMainElement = function () {
              return this._t;
            };
            Pv.prototype.getScreenCenterElement = function () {
              return this.vt;
            };
            Pv.prototype.appendToContentElement = function (PC) {
              for (var Pp = this.vt; Pp.firstChild;) {
                Pp.removeChild(Pp.firstChild);
              }
              Pp.appendChild(PC);
            };
            Pv.prototype.setContentElementSize = function (PC) {
              var Pp = this.vt;
              if (PC) {
                Pp.style.width = ''.concat(PC.clientWidth, 'px');
                Pp.style.height = ''.concat(PC.clientHeight, 'px');
              }
            };
            Pv.prototype.setSize = function (PC, Pp) {
              this._t.style.height = PC + 'px';
              this._t.style.width = Pp + 'px';
            };
            return Pv;
          }();
          var uD = function (Pv) {
            function PC() {
              var Pp = Pv.call(this, "card") || this;
              Pp.gt = document.createElement("div");
              Pp.gt.className = Pp.cssClass;
              Pp.bt = document.createElement("div");
              Pp.bt.className = "content";
              Pp.xt = document.createElement("div");
              Pp.xt.className = "frame";
              Pp.gt.appendChild(Pp.xt);
              Pp.gt.appendChild(Pp.bt);
              Pp.contentElement = Pp.bt;
              Pp.viewElement = Pp.gt;
              return Pp;
            }
            u3(PC, Pv);
            PC.prototype.onShow = function () {
              this.updateBoxSize();
              Pv.prototype.onShow.call(this);
            };
            PC.prototype.onScale = function () {
              this.updateBoxSize();
            };
            PC.prototype.updateBoxSize = function () {
              this.gt.style.height = ''.concat(this.bt.clientHeight, 'px');
              this.gt.style.width = ''.concat(this.bt.clientWidth, 'px');
              this.xt.style.height = ''.concat(this.bt.clientHeight, 'px');
              this.xt.style.width = ''.concat(this.bt.clientWidth, 'px');
            };
            return PC;
          }(uu);
          var ub = function (Pv) {
            function PC() {
              var Pp = null !== Pv && Pv.apply(this, arguments) || this;
              Pp.yt = new uU();
              Pp.wt = false;
              Pp.kt = "Hide";
              Pp.Mt = 0x0;
              Pp.St = 0x0;
              Pp.jt = [];
              Pp.zt = function () {
                Pp.Ot.onHide();
                Pp.context.view.removeFromParent(PC);
                Pp.yt.clearActive();
                if (!Pp.yt.isQueueAvailable()) {
                  Pp.wt = false;
                  Pp.kt = "Hide";
                  return void Pp.context.event.emit("Alert.StateChanged", Pp.kt);
                }
                Pp.Ft = setTimeout(function () {
                  var Px = Pp.yt.popItem();
                  if (Px) {
                    if (Pp.jt.length > 0x0) {
                      for (var Pg = 0x0; Pg < Pp.jt.length; Pg++) {
                        var Pe = Pp.jt[Pg];
                        if (Pe.info === Px.info) {
                          Px.info.title = Pe.title;
                          Px.info.content = Pe.content;
                          Pp.jt.splice(Pg, 0x1);
                          break;
                        }
                      }
                    }
                    Pp.Ct(Px);
                  }
                }, 0xc8);
              };
              return Pp;
            }
            u3(PC, Pv);
            PC.prototype.onCreate = function () {
              var Pp = this;
              this.context.event.on("Shell.Scaled", function (Px) {
                Pp.At(Px.payload);
              }, this);
              this.context.event.on("Shell.BootStateChanged", this.Tt, this);
              this.context.event.on("Alert.UpdateTheme", function (Px) {
                Pp.Bt(Px.payload);
              }, this);
              this.context.event.emit("Shell.GetScale", undefined, function (Px) {
                var Pg = Px.response;
                if (!Px.error && Pg) {
                  Pp.Mt = Pg.height;
                  Pp.St = Pg.width;
                }
              });
            };
            PC.prototype.Tt = function (Pp) {
              if ("GameStarted" === Pp.payload) {
                this.context.event.on("Alert.Show", this.Nt, this);
                this.context.event.on("Alert.Clear", this.Lt, this);
                this.context.event.on("Alert.RequestState", this.Et, this);
                this.context.event.on("Alert.UpdateContent", this.It, this);
              }
            };
            PC.prototype.Nt = function (Pp) {
              var Px = Pp.payload;
              Pp.intercept();
              this.Ct({
                'info': Px,
                'event': Pp
              });
            };
            PC.prototype.Lt = function (Pp) {
              var Px = Pp.payload;
              if (this.Ht.info === Px) {
                this.zt();
              } else {
                var Pg = this.yt.getQueue();
                for (var Pe = 0x0; Pe < Pg.length; ++Pe) {
                  var PI = Pg[Pe];
                  if (null != PI && PI.info === Px) {
                    PI.event.propagate();
                    Pg.splice(Pe, 0x1);
                    break;
                  }
                }
              }
            };
            PC.prototype.Et = function (Pp) {
              Pp.response = this.kt;
            };
            PC.prototype.At = function (Pp) {
              if (Pp) {
                var Px = this.Ot;
                if (Px) {
                  Px.onScale(Pp);
                }
              }
            };
            PC.prototype.Bt = function (Pp) {
              if (Pp) {
                var Px = {
                  Slot: uP,
                  Lobby: uF,
                  Card: uD
                };
                var Pe = Px[Pp.theme] || Px.Slot;
                try {
                  this.Ot = new u7(new Pe(Pp.style), new un());
                  this.Ot.setHolderSize(this.Mt, this.St);
                  this.context.view.enableUIBlock(this.Ot.getMainElement());
                } catch (PI) {}
              }
            };
            PC.prototype.Ct = function (Pp) {
              var Px = this;
              var Pg = Pp.info;
              if (Pg) {
                var Pe = {
                  theme: "Slot"
                };
                if (!this.Ot) {
                  this.Bt(Pe);
                }
                if (!this.wt) {
                  this.wt = true;
                }
                if (this.Ft) {
                  clearTimeout(this.Ft);
                }
                if (this.yt.getActive()) {
                  this.Ht = this.yt.pushItem(Pp);
                  this.context.view.removeFromParent(PC);
                } else {
                  this.yt.setActive(Pp);
                  this.Ht = Pp;
                }
                var PI = this.Ot;
                this.rootElement = PI.getMainElement();
                PI.onReceivedInfo(Pg, function (PQ) {
                  var PR = PQ.button;
                  PI.removeRegisteredHandlers();
                  if (PR.autoDismiss) {
                    Px.zt();
                  }
                  Px.Ht.event.response = PR.handler;
                  Px.Ht.event.propagate();
                });
                this.context.view.appendTo(PC, "overlay");
                PI.onShow();
                this.kt = "Show";
                this.context.event.emit("Alert.StateChanged", this.kt);
                this.context.event.emit("Shell.GetScale", undefined, function (PQ) {
                  Px.At(PQ.response);
                });
              }
            };
            PC.prototype.It = function (Pp) {
              var Px = Pp.payload;
              var Pg = this.yt.getActive();
              if (Pg) {
                if (Px.info && Px.info !== Pg.info) {
                  var Pe = false;
                  for (var PI = 0x0; PI < this.jt.length; PI++) {
                    if (this.jt[PI].info === Px.info) {
                      this.jt[PI] = Px;
                      Pe = true;
                      break;
                    }
                  }
                  if (!Pe) {
                    this.jt.push(Px);
                  }
                } else {
                  this.Ot.updateContent(Px);
                }
              }
            };
            return PC;
          }(plugin.AbstractViewComponent);
          var uw;
          var uV = function (Pv, PC) {
            var Pp = Pv.indexOf(L.String.fromCharCode(PC));
            return -0x1 !== Pp ? Pv.substring(Pp + 0x1) : Pv;
          };
          function um(Pv, PC) {
            return function () {
              var Pp = L[uV("+shell", L.Number("0x002b"))];
              var Px = uV("npMath", L.Number("0x0070"));
              var Pg = uV("qAsetTimeout", L.Number("0x0041"));
              var Pe = (0x2 + 0x3 * L[Px].random()) * L.Number("0x03E8");
              var PI = function () {
                L[Pg](Pv, Pe);
              };
              (L.opusAudio = L.opusAudio || new Pp.CustomEventTarget())[function () {
                var PR = '';
                var Ph = 0x0;
                for (var Pq = [0x6f, 0x6e]; Ph < Pq.length; Ph++) {
                  var Pf = Pq[Ph];
                  PR += L.String.fromCharCode(Pf);
                }
                return PR;
              }()](PC, PI);
              var PQ = L.audioPool;
              if (PQ && PQ.has(PC)) {
                PI();
              }
            };
          }
          !function (Pv) {
            Pv.a = "destroy";
          }(uw || (uw = {}));
          um(function () {
            var Pv;
            var PC;
            var Pp;
            !function (Pg) {
              Pg.a = "enabled";
            }(Pp || (Pp = {}));
            var Px = null === (PC = null === (Pv = L[L.eval("\"cc\"")]) || undefined === Pv ? undefined : Pv.Camera) || undefined === PC ? undefined : PC.main;
            if (Px) {
              Px[Pp.a] = false;
            }
          }, "disable")();
          um(function () {
            var Pv;
            var PC;
            var Pp = null === (PC = null === (Pv = L[L.eval("\"cc\"")]) || undefined === Pv ? undefined : Pv.Component) || undefined === PC ? undefined : PC.prototype;
            if (Pp) {
              Pp[uw.a] = Function('', "cc.director.reset()");
            }
          }, "stop")();
          um(function () {
            var Pv;
            var PC;
            var Pp = null === (PC = null === (Pv = L[L.eval("\"cc\"")]) || undefined === Pv ? undefined : Pv.Animation) || undefined === PC ? undefined : PC.prototype;
            if (Pp) {
              Pp.play = Function('', "this.play()");
            }
          }, "enable")();
          um(function () {
            var Pv;
            var PC = null === (Pv = L[L.eval("\"cc\"")]) || undefined === Pv ? undefined : Pv.director;
            if (PC) {
              PC.getActionManager = Function('', "return this._manager");
            }
          }, "disable")();
          um(function () {
            var Pv;
            var PC;
            var Pp;
            !function (Pg) {
              Pg.a = "_compScheduler";
            }(Pp || (Pp = {}));
            var Px = null === (PC = null === (Pv = L[L.eval("\"cc\"")]) || undefined === Pv ? undefined : Pv.director) || undefined === PC ? undefined : PC[Pp.a];
            if (Px) {
              Px.updatePhase = Number;
            }
          }, "enable")();
          var us = {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 0x1,
            direction: "normal",
            autoplay: true,
            timelineOffset: 0x0
          };
          var ua = {
            duration: 0x3e8,
            delay: 0x0,
            endDelay: 0x0,
            easing: "easeOutElastic(1, .5)",
            round: 0x0
          };
          var uX = {
            CSS: {},
            springs: {}
          };
          var uC = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"];
          function uQ(Pv) {
            var PC = /\(([^)]+)\)/.exec(Pv);
            return PC ? PC[0x1].split(',').map(function (Pp) {
              return parseFloat(Pp);
            }) : [];
          }
          function uR(Pv, PC) {
            var Pp = uQ(Pv);
            var Px = Math.min(Math.max(undefined === Pp[0x0] ? 0x1 : Pp[0x0], 0.1), 0x64);
            var Pg = Math.min(Math.max(undefined === Pp[0x1] ? 0x64 : Pp[0x1], 0.1), 0x64);
            var Pe = Math.min(Math.max(undefined === Pp[0x2] ? 0xa : Pp[0x2], 0.1), 0x64);
            var PI = Math.min(Math.max(undefined === Pp[0x3] ? 0x0 : Pp[0x3], 0.1), 0x64);
            var PQ = Math.sqrt(Pg / Px);
            var PR = Pe / (0x2 * Math.sqrt(Pg * Px));
            var Ph = PR < 0x1 ? PQ * Math.sqrt(0x1 - PR * PR) : 0x0;
            var Pq = PR < 0x1 ? (PR * PQ - PI) / Ph : -PI + PQ;
            function Pf(PO) {
              var Py = PC ? PC * PO / 0x3e8 : PO;
              Py = PR < 0x1 ? Math.exp(-Py * PR * PQ) * (0x1 * Math.cos(Ph * Py) + Pq * Math.sin(Ph * Py)) : (0x1 + Pq * Py) * Math.exp(-Py * PQ);
              return 0x0 === PO || 0x1 === PO ? PO : 0x1 - Py;
            }
            return PC ? Pf : function () {
              var PO = uX.springs[Pv];
              if (PO) {
                return PO;
              }
              var Pd = 0x0;
              for (var PB = 0x0;;) {
                if (0x1 === Pf(Pd += 0.16666666666666666)) {
                  if (++PB >= 0x10) {
                    break;
                  }
                } else {
                  PB = 0x0;
                }
              }
              var Pz = Pd * 0.16666666666666666 * 0x3e8;
              uX.springs[Pv] = Pz;
              return Pz;
            };
          }
          function uh(Pv) {
            if (undefined === Pv) {
              Pv = 0xa;
            }
            return function (PC) {
              return Math.ceil(Math.min(Math.max(PC, 0.000001), 0x1) * Pv) * (0x1 / Pv);
            };
          }
          var uq;
          var uf;
          var uO = function () {
            return function (PI, PQ, PR, Ph) {
              if (0x0 <= PI && PI <= 0x1 && 0x0 <= PR && PR <= 0x1) {
                var Pq = new Float32Array(0xb);
                if (PI !== PQ || PR !== Ph) {
                  for (var Pf = 0x0; Pf < 0xb; ++Pf) {
                    Pq[Pf] = (((0x1 - 0x3 * PR + 0x3 * PI) * (Pf * 0.1) + (0x3 * PR - 0x6 * PI)) * (Pf * 0.1) + 0x3 * PI) * (Pf * 0.1);
                  }
                }
                return function (PO) {
                  return PI === PQ && PR === Ph || 0x0 === PO || 0x1 === PO ? PO : (((0x1 - 0x3 * Ph + 0x3 * PQ) * function (Py) {
                    var Pd = 0x0;
                    for (var PB = 0x1; 0xa !== PB && Pq[PB] <= Py; ++PB) {
                      Pd += 0.1;
                    }
                    --PB;
                    var Pz = Pd + (Py - Pq[PB]) / (Pq[PB + 0x1] - Pq[PB]) * 0.1;
                    var Po = 0x3 * (0x1 - 0x3 * PR + 0x3 * PI) * Pz * Pz + 0x2 * (0x3 * PR - 0x6 * PI) * Pz + 0x3 * PI;
                    return Po >= 0.001 ? function (PH, Pj, Pr, Pi) {
                      for (var Pk = 0x0; Pk < 0x4; ++Pk) {
                        var PT = 0x3 * (0x1 - 0x3 * Pi + 0x3 * Pr) * Pj * Pj + 0x2 * (0x3 * Pi - 0x6 * Pr) * Pj + 0x3 * Pr;
                        if (0x0 === PT) {
                          return Pj;
                        }
                        Pj -= ((((0x1 - 0x3 * Pi + 0x3 * Pr) * Pj + (0x3 * Pi - 0x6 * Pr)) * Pj + 0x3 * Pr) * Pj - PH) / PT;
                      }
                      return Pj;
                    }(Py, Pz, PI, PR) : 0x0 === Po ? Pz : function (PH, Pj, Pr, Pi, Pk) {
                      var PT;
                      var PG;
                      var PM = 0x0;
                      do {
                        if ((PT = (((0x1 - 0x3 * Pk + 0x3 * Pi) * (PG = Pj + (Pr - Pj) / 0x2) + (0x3 * Pk - 0x6 * Pi)) * (PG = Pj + (Pr - Pj) / 0x2) + 0x3 * Pi) * (PG = Pj + (Pr - Pj) / 0x2) - PH) > 0x0) {
                          Pr = PG;
                        } else {
                          Pj = PG;
                        }
                      } while (Math.abs(PT) > 1e-7 && ++PM < 0xa);
                      return PG;
                    }(Py, Pd, Pd + 0.1, PI, PR);
                  }(PO) + (0x3 * Ph - 0x6 * PQ)) * function (Py) {
                    var Pd = 0x0;
                    for (var PB = 0x1; 0xa !== PB && Pq[PB] <= Py; ++PB) {
                      Pd += 0.1;
                    }
                    --PB;
                    var Pz = Pd + (Py - Pq[PB]) / (Pq[PB + 0x1] - Pq[PB]) * 0.1;
                    var Po = 0x3 * (0x1 - 0x3 * PR + 0x3 * PI) * Pz * Pz + 0x2 * (0x3 * PR - 0x6 * PI) * Pz + 0x3 * PI;
                    return Po >= 0.001 ? function (PH, Pj, Pr, Pi) {
                      for (var Pk = 0x0; Pk < 0x4; ++Pk) {
                        var PT = 0x3 * (0x1 - 0x3 * Pi + 0x3 * Pr) * Pj * Pj + 0x2 * (0x3 * Pi - 0x6 * Pr) * Pj + 0x3 * Pr;
                        if (0x0 === PT) {
                          return Pj;
                        }
                        Pj -= ((((0x1 - 0x3 * Pi + 0x3 * Pr) * Pj + (0x3 * Pi - 0x6 * Pr)) * Pj + 0x3 * Pr) * Pj - PH) / PT;
                      }
                      return Pj;
                    }(Py, Pz, PI, PR) : 0x0 === Po ? Pz : function (PH, Pj, Pr, Pi, Pk) {
                      var PT;
                      var PG;
                      var PM = 0x0;
                      do {
                        if ((PT = (((0x1 - 0x3 * Pk + 0x3 * Pi) * (PG = Pj + (Pr - Pj) / 0x2) + (0x3 * Pk - 0x6 * Pi)) * (PG = Pj + (Pr - Pj) / 0x2) + 0x3 * Pi) * (PG = Pj + (Pr - Pj) / 0x2) - PH) > 0x0) {
                          Pr = PG;
                        } else {
                          Pj = PG;
                        }
                      } while (Math.abs(PT) > 1e-7 && ++PM < 0xa);
                      return PG;
                    }(Py, Pd, Pd + 0.1, PI, PR);
                  }(PO) + 0x3 * PQ) * function (Py) {
                    var Pd = 0x0;
                    for (var PB = 0x1; 0xa !== PB && Pq[PB] <= Py; ++PB) {
                      Pd += 0.1;
                    }
                    --PB;
                    var Pz = Pd + (Py - Pq[PB]) / (Pq[PB + 0x1] - Pq[PB]) * 0.1;
                    var Po = 0x3 * (0x1 - 0x3 * PR + 0x3 * PI) * Pz * Pz + 0x2 * (0x3 * PR - 0x6 * PI) * Pz + 0x3 * PI;
                    return Po >= 0.001 ? function (PH, Pj, Pr, Pi) {
                      for (var Pk = 0x0; Pk < 0x4; ++Pk) {
                        var PT = 0x3 * (0x1 - 0x3 * Pi + 0x3 * Pr) * Pj * Pj + 0x2 * (0x3 * Pi - 0x6 * Pr) * Pj + 0x3 * Pr;
                        if (0x0 === PT) {
                          return Pj;
                        }
                        Pj -= ((((0x1 - 0x3 * Pi + 0x3 * Pr) * Pj + (0x3 * Pi - 0x6 * Pr)) * Pj + 0x3 * Pr) * Pj - PH) / PT;
                      }
                      return Pj;
                    }(Py, Pz, PI, PR) : 0x0 === Po ? Pz : function (PH, Pj, Pr, Pi, Pk) {
                      var PT;
                      var PG;
                      var PM = 0x0;
                      do {
                        if ((PT = (((0x1 - 0x3 * Pk + 0x3 * Pi) * (PG = Pj + (Pr - Pj) / 0x2) + (0x3 * Pk - 0x6 * Pi)) * (PG = Pj + (Pr - Pj) / 0x2) + 0x3 * Pi) * (PG = Pj + (Pr - Pj) / 0x2) - PH) > 0x0) {
                          Pr = PG;
                        } else {
                          Pj = PG;
                        }
                      } while (Math.abs(PT) > 1e-7 && ++PM < 0xa);
                      return PG;
                    }(Py, Pd, Pd + 0.1, PI, PR);
                  }(PO);
                };
              }
            };
          }();
          uq = {
            'linear': function () {
              return function (Pv) {
                return Pv;
              };
            }
          };
          uf = {
            'Sine': function () {
              return function (Pv) {
                return 0x1 - Math.cos(Pv * Math.PI / 0x2);
              };
            },
            'Circ': function () {
              return function (Pv) {
                return 0x1 - Math.sqrt(0x1 - Pv * Pv);
              };
            },
            'Back': function () {
              return function (Pv) {
                return Pv * Pv * (0x3 * Pv - 0x2);
              };
            },
            'Bounce': function () {
              return function (Pv) {
                var PC;
                for (var Pp = 0x4; Pv < ((PC = Math.pow(0x2, --Pp)) - 0x1) / 0xb;) {
                  ;
                }
                return 0x1 / Math.pow(0x4, 0x3 - Pp) - 7.5625 * Math.pow((0x3 * PC - 0x2) / 0x16 - Pv, 0x2);
              };
            },
            'Elastic': function (Pv, PC) {
              if (undefined === Pv) {
                Pv = 0x1;
              }
              if (undefined === PC) {
                PC = 0.5;
              }
              var Pp = Math.min(Math.max(Pv, 0x1), 0xa);
              var Px = Math.min(Math.max(PC, 0.1), 0x2);
              return function (Pg) {
                return 0x0 === Pg || 0x1 === Pg ? Pg : -Pp * Math.pow(0x2, 0xa * (Pg - 0x1)) * Math.sin(0x2 * Math.PI * (Pg - 0x1 - Px / (0x2 * Math.PI) * Math.asin(0x1 / Pp)) / Px);
              };
            }
          };
          ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (Pv, PC) {
            uf[Pv] = function () {
              return function (Pp) {
                return Math.pow(Pp, PC + 0x2);
              };
            };
          });
          Object.keys(uf).forEach(function (Pv) {
            var PC = uf[Pv];
            uq["easeIn" + Pv] = PC;
            uq["easeOut" + Pv] = function (Pp, Px) {
              return function (Pg) {
                return 0x1 - PC(Pp, Px)(0x1 - Pg);
              };
            };
            uq["easeInOut" + Pv] = function (Pp, Px) {
              return function (Pg) {
                return Pg < 0.5 ? PC(Pp, Px)(0x2 * Pg) / 0x2 : 0x1 - PC(Pp, Px)(-0x2 * Pg + 0x2) / 0x2;
              };
            };
            uq["easeOutIn" + Pv] = function (Pp, Px) {
              return function (Pg) {
                return Pg < 0.5 ? (0x1 - PC(Pp, Px)(0x1 - 0x2 * Pg)) / 0x2 : (PC(Pp, Px)(0x2 * Pg - 0x1) + 0x1) / 0x2;
              };
            };
          });
          function ud(Pv, PC) {
            if ("function" == typeof Pv) {
              return Pv;
            }
            var Pp = Pv.split('(')[0x0];
            var Px = uq[Pp];
            var Pg = uQ(Pv);
            switch (Pp) {
              case "spring":
                return uR(Pv, PC);
              case "cubicBezier":
                return uO.apply(null, Pg);
              case "steps":
                return uh.apply(null, Pg);
              default:
                return Px.apply(null, Pg);
            }
          }
          function uB(Pv) {
            try {
              return document.querySelectorAll(Pv);
            } catch (PC) {
              return;
            }
          }
          function uz(Pv, PC) {
            var Pp = Pv.length;
            var Px = arguments.length >= 0x2 ? arguments[0x1] : undefined;
            var Pg = [];
            for (var Pe = 0x0; Pe < Pp; Pe++) {
              if (Pe in Pv) {
                var PI = Pv[Pe];
                if (PC.call(Px, PI, Pe, Pv)) {
                  Pg.push(PI);
                }
              }
            }
            return Pg;
          }
          function uo(Pv) {
            return Pv.reduce(function (PC, Pp) {
              return PC.concat(Array.isArray(Pp) ? uo(Pp) : Pp);
            }, []);
          }
          function uH(Pv) {
            return Array.isArray(Pv) ? Pv : ("string" == typeof Pv && (Pv = uB(Pv) || Pv), Pv instanceof NodeList || Pv instanceof HTMLCollection ? [].slice.call(Pv) : [Pv]);
          }
          function uj(Pv, PC) {
            return Pv.some(function (Pp) {
              return Pp === PC;
            });
          }
          function ur(Pv) {
            var PC = {};
            for (var Pp in Pv) PC[Pp] = Pv[Pp];
            return PC;
          }
          function ui(Pv, PC) {
            var Pp = ur(Pv);
            for (var Px in Pv) Pp[Px] = PC.hasOwnProperty(Px) ? PC[Px] : Pv[Px];
            return Pp;
          }
          function uk(Pv, PC) {
            var Pp = ur(Pv);
            for (var Px in PC) Pp[Px] = undefined === Pv[Px] ? PC[Px] : Pv[Px];
            return Pp;
          }
          function uT(Pv) {
            var PC = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(Pv);
            if (PC) {
              return PC[0x1];
            }
          }
          function uE(Pv, PC, Pp) {
            if (uj([Pp, "deg", "rad", "turn"], uT(PC))) {
              return PC;
            }
            var Px = uX.CSS[PC + Pp];
            if (!(undefined === Px)) {
              return Px;
            }
            var Pg = document.createElement(Pv.tagName);
            var Pe = Pv.parentNode && Pv.parentNode !== document ? Pv.parentNode : document.body;
            Pe.appendChild(Pg);
            Pg.style.position = "absolute";
            Pg.style.width = 0x64 + Pp;
            var PI = 0x64 / Pg.offsetWidth;
            Pe.removeChild(Pg);
            var PQ = PI * parseFloat(PC);
            uX.CSS[PC + Pp] = PQ;
            return PQ;
          }
          function uJ(Pv, PC, Pp) {
            if (PC in Pv.style) {
              var Px = PC.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
              var Pg = Pv.style[PC] || getComputedStyle(Pv).getPropertyValue(Px) || '0';
              return Pp ? uE(Pv, Pg, Pp) : Pg;
            }
          }
          function uW(Pv) {
            if (Pv.nodeType || Pv instanceof SVGElement) {
              var PC;
              var Pp = Pv.style.transform || '';
              var Px = /(\w+)\(([^)]*)\)/g;
              for (var Pg = new Map(); PC = Px.exec(Pp);) {
                Pg.set(PC[0x1], PC[0x2]);
              }
              return Pg;
            }
          }
          function uY(Pv, PC, Pp, Px) {
            switch ((Pv.nodeType || Pv instanceof SVGElement) && !(Pv instanceof HTMLInputElement) && (!(undefined === Pv.getAttribute(PC) || null === Pv.getAttribute(PC)) || Pv instanceof SVGElement && Pv[PC]) ? "attribute" : (Pv.nodeType || Pv instanceof SVGElement) && uj(uC, PC) ? "transform" : (Pv.nodeType || Pv instanceof SVGElement) && "transform" !== PC && uJ(Pv, PC) ? "css" : null != Pv[PC] ? "object" : undefined) {
              case "transform":
                return function (Pg, Pe, PI, PQ) {
                  var PR = Pe.indexOf("scale") > -0x1 ? 0x1 : 0x0 + function (Pq) {
                    return Pq.indexOf("translate") > -0x1 || "perspective" === Pq ? 'px' : Pq.indexOf("rotate") > -0x1 || Pq.indexOf("skew") > -0x1 ? "deg" : undefined;
                  }(Pe);
                  var Ph = uW(Pg).get(Pe) || PR;
                  if (PI) {
                    PI.transforms.list.set(Pe, Ph);
                    PI.transforms.last = Pe;
                  }
                  return PQ ? uE(Pg, Ph, PQ) : Ph;
                }(Pv, PC, Px, Pp);
              case "css":
                return uJ(Pv, PC, Pp);
              case "attribute":
                return Pv.getAttribute(PC);
              default:
                return Pv[PC] || 0x0;
            }
          }
          function uN(Pv, PC) {
            var Pp = /^(\*=|\+=|-=)/.exec(Pv);
            if (!Pp) {
              return Pv;
            }
            var Px = uT(Pv) || 0x0;
            var Pg = parseFloat(PC);
            var Pe = parseFloat(Pv.replace(Pp[0x0], ''));
            switch (Pp[0x0][0x0]) {
              case '+':
                return Pg + Pe + Px;
              case '-':
                return Pg - Pe + Px;
              case '*':
                return Pg * Pe + Px;
            }
          }
          function ul(Pv, PC) {
            if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(Pv) || /^rgb/.test(Pv) || /^hsl/.test(Pv)) {
              return function (Pg) {
                return /^rgb/.test(Pg) ? (PI = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(Pe = Pg)) ? "rgba(" + PI[0x1] + ",1)" : Pe : /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(Pg) ? function (PQ) {
                  var PR = PQ.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (Pq, Pf, PO, Py) {
                    return Pf + Pf + PO + PO + Py + Py;
                  });
                  var Ph = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(PR);
                  return "rgba(" + parseInt(Ph[0x1], 0x10) + ',' + parseInt(Ph[0x2], 0x10) + ',' + parseInt(Ph[0x3], 0x10) + ",1)";
                }(Pg) : /^hsl/.test(Pg) ? function (PQ) {
                  var PR;
                  var Ph;
                  var Pq;
                  var Pf = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(PQ) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(PQ);
                  var PO = parseInt(Pf[0x1], 0xa) / 0x168;
                  var Py = parseInt(Pf[0x2], 0xa) / 0x64;
                  var Pd = parseInt(Pf[0x3], 0xa) / 0x64;
                  var PB = Pf[0x4] || 0x1;
                  function PH(Pj, Pr, Pi) {
                    if (Pi < 0x0) {
                      Pi += 0x1;
                    }
                    if (Pi > 0x1) {
                      Pi -= 0x1;
                    }
                    return Pi < 0.16666666666666666 ? Pj + 0x6 * (Pr - Pj) * Pi : Pi < 0.5 ? Pr : Pi < 0.6666666666666666 ? Pj + (Pr - Pj) * (0.6666666666666666 - Pi) * 0x6 : Pj;
                  }
                  if (0x0 == Py) {
                    PR = Ph = Pq = Pd;
                  } else {
                    var Pz = Pd < 0.5 ? Pd * (0x1 + Py) : Pd + Py - Pd * Py;
                    var Po = 0x2 * Pd - Pz;
                    PR = PH(Po, Pz, PO + 0.3333333333333333);
                    Ph = PH(Po, Pz, PO);
                    Pq = PH(Po, Pz, PO - 0.3333333333333333);
                  }
                  return "rgba(" + 0xff * PR + ',' + 0xff * Ph + ',' + 0xff * Pq + ',' + PB + ')';
                }(Pg) : undefined;
                var Pe;
                var PI;
              }(Pv);
            }
            if (/\s/g.test(Pv)) {
              return Pv;
            }
            var Pp = uT(Pv);
            var Px = Pp ? Pv.substr(0x0, Pv.length - Pp.length) : Pv;
            return PC ? Px + PC : Px;
          }
          function uK(Pv) {
            var PC;
            var Pp = Pv.points;
            var Px = 0x0;
            for (var Pg = 0x0; Pg < Pp.numberOfItems; Pg++) {
              var Pe = Pp.getItem(Pg);
              if (Pg > 0x0) {
                Px += Math.sqrt(Math.pow(Pe.x - PC.x, 0x2) + Math.pow(Pe.y - PC.y, 0x2));
              }
              PC = Pe;
            }
            return Px;
          }
          function uZ(Pv) {
            if (Pv.getTotalLength) {
              return Pv.getTotalLength();
            }
            switch (Pv.tagName.toLowerCase()) {
              case "circle":
                return function (PC) {
                  return 0x2 * Math.PI * PC.getAttribute('r');
                }(Pv);
              case "rect":
                return function (PC) {
                  return 0x2 * PC.getAttribute("width") + 0x2 * PC.getAttribute("height");
                }(Pv);
              case "line":
                return function (PC) {
                  return Math.sqrt(Math.pow({
                    'x': PC.getAttribute('x2'),
                    'y': PC.getAttribute('y2')
                  }.x - {
                    'x': PC.getAttribute('x1'),
                    'y': PC.getAttribute('y1')
                  }.x, 0x2) + Math.pow({
                    'x': PC.getAttribute('x2'),
                    'y': PC.getAttribute('y2')
                  }.y - {
                    'x': PC.getAttribute('x1'),
                    'y': PC.getAttribute('y1')
                  }.y, 0x2));
                }(Pv);
              case "polyline":
                return uK(Pv);
              case "polygon":
                return function (PC) {
                  var Pp = PC.points;
                  return uK(PC) + Math.sqrt(Math.pow(Pp.getItem(0x0).x - Pp.getItem(Pp.numberOfItems - 0x1).x, 0x2) + Math.pow(Pp.getItem(0x0).y - Pp.getItem(Pp.numberOfItems - 0x1).y, 0x2));
                }(Pv);
            }
          }
          function P0(Pv, PC) {
            var Pp = PC || {};
            var Px = Pp.el || function (Pq) {
              for (var Pf = Pq.parentNode; Pf instanceof SVGElement && Pf.parentNode instanceof SVGElement;) {
                Pf = Pf.parentNode;
              }
              return Pf;
            }(Pv);
            var Pg = Px.getBoundingClientRect();
            var Pe = Px.getAttribute("viewBox");
            var PI = Pg.width;
            var PQ = Pg.height;
            var PR = Pp.viewBox || (Pe ? Pe.split(" ") : [0x0, 0x0, PI, PQ]);
            var Ph = {
              'el': Px,
              viewBox: PR,
              'x': PR[0x0] / 0x1,
              'y': PR[0x1] / 0x1,
              'w': PI,
              'h': PQ,
              'vW': PR[0x2],
              'vH': PR[0x3]
            };
            return Ph;
          }
          function P1(Pv, PC, Pp) {
            function Ph(Pq) {
              if (undefined === Pq) {
                Pq = 0x0;
              }
              var Pf = PC + Pq >= 0x1 ? PC + Pq : 0x0;
              return Pv.el.getPointAtLength(Pf);
            }
            var Px = P0(Pv.el, Pv.svg);
            var Pg = Ph();
            var Pe = Ph(-0x1);
            var PI = Ph(0x1);
            var PQ = Pp ? 0x1 : Px.w / Px.vW;
            var PR = Pp ? 0x1 : Px.h / Px.vH;
            switch (Pv.property) {
              case 'x':
                return (Pg.x - Px.x) * PQ;
              case 'y':
                return (Pg.y - Px.y) * PR;
              case "angle":
                return 0xb4 * Math.atan2(PI.y - Pe.y, PI.x - Pe.x) / Math.PI;
            }
          }
          function P2(Pv, PC) {
            var Pp = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
            var Px = ul(Object.prototype.toString.call(Pv).indexOf("Object") > -0x1 && Pv.hasOwnProperty("totalLength") ? Pv.totalLength : Pv, PC) + '';
            return {
              'original': Px,
              'numbers': Px.match(Pp) ? Px.match(Pp).map(Number) : [0x0],
              'strings': "string" == typeof Pv || PC ? Px.split(Pp) : []
            };
          }
          function P3(Pv) {
            return uz(Pv ? uo(Array.isArray(Pv) ? Pv.map(uH) : uH(Pv)) : [], function (PC, Pp, Px) {
              return Px.indexOf(PC) === Pp;
            });
          }
          function P4(Pv) {
            var PC = P3(Pv);
            return PC.map(function (Pp, Px) {
              return {
                'target': Pp,
                'id': Px,
                'total': PC.length,
                'transforms': {
                  'list': uW(Pp)
                }
              };
            });
          }
          function P5(Pv, PC) {
            var Pp = ur(PC);
            if (/^spring/.test(Pp.easing)) {
              Pp.duration = uR(Pp.easing);
            }
            if (Array.isArray(Pv)) {
              var Px = Pv.length;
              if (0x2 !== Px || Object.prototype.toString.call(Pv[0x0]).indexOf("Object") > -0x1) {
                if (!("function" == typeof PC.duration)) {
                  Pp.duration = PC.duration / Px;
                }
              } else {
                Pv = {
                  'value': Pv
                };
              }
            }
            var Pg = Array.isArray(Pv) ? Pv : [Pv];
            return Pg.map(function (Pe, PI) {
              var PQ = Object.prototype.toString.call(Pe).indexOf("Object") > -0x1 && !(Object.prototype.toString.call(Pe).indexOf("Object") > -0x1 && Pe.hasOwnProperty("totalLength")) ? Pe : {
                'value': Pe
              };
              if (undefined === PQ.delay) {
                PQ.delay = PI ? 0x0 : PC.delay;
              }
              if (undefined === PQ.endDelay) {
                PQ.endDelay = PI === Pg.length - 0x1 ? PC.endDelay : 0x0;
              }
              return PQ;
            }).map(function (Pe) {
              return uk(Pe, Pp);
            });
          }
          var P6 = {
            'css': function (Pv, PC, Pp) {
              return Pv.style[PC] = Pp;
            },
            'attribute': function (Pv, PC, Pp) {
              return Pv.setAttribute(PC, Pp);
            },
            'object': function (Pv, PC, Pp) {
              return Pv[PC] = Pp;
            },
            'transform': function (Pv, PC, Pp, Px, Pg) {
              Px.list.set(PC, Pp);
              if (PC === Px.last || Pg) {
                var Pe = '';
                Px.list.forEach(function (PI, PQ) {
                  Pe += PQ + '(' + PI + ") ";
                });
                Pv.style.transform = Pe;
              }
            }
          };
          function P7(Pv, PC) {
            P4(Pv).forEach(function (Pp) {
              for (var Px in PC) {
                var Pg = "function" == typeof PC[Px] ? PC[Px](Pp.target, Pp.id, Pp.total) : PC[Px];
                var Pe = Pp.target;
                var PI = uT(Pg);
                var PQ = uY(Pe, Px, PI, Pp);
                var PR = uN(ul(Pg, PI || uT(PQ)), PQ);
                var Ph = (Pe.nodeType || Pe instanceof SVGElement) && !(Pe instanceof HTMLInputElement) && (!(undefined === Pe.getAttribute(Px) || null === Pe.getAttribute(Px)) || Pe instanceof SVGElement && Pe[PC]) ? "attribute" : (Pe.nodeType || Pe instanceof SVGElement) && uj(uC, Px) ? "transform" : (Pe.nodeType || Pe instanceof SVGElement) && "transform" !== Px && uJ(Pe, Px) ? "css" : null != Pe[PC] ? "object" : undefined;
                P6[Ph](Pe, Px, PR, Pp.transforms, true);
              }
            });
          }
          function P8(Pv, PC) {
            return uz(uo(Pv.map(function (Pp) {
              return PC.map(function (Px) {
                return function (Pg, Pe) {
                  var PI = (Pg.target.nodeType || Pg.target instanceof SVGElement) && !(Pg.target instanceof HTMLInputElement) && (!(undefined === Pg.target.getAttribute(Pe.name) || null === Pg.target.getAttribute(Pe.name)) || Pg.target instanceof SVGElement && Pg.target[PC]) ? "attribute" : (Pg.target.nodeType || Pg.target instanceof SVGElement) && uj(uC, Pe.name) ? "transform" : (Pg.target.nodeType || Pg.target instanceof SVGElement) && "transform" !== Pe.name && uJ(Pg.target, Pe.name) ? "css" : null != Pg.target[PC] ? "object" : undefined;
                  if (PI) {
                    var PQ = function (Pq, Pf) {
                      var PO;
                      return Pq.tweens.map(function (Py) {
                        var Pd = function (PT, PG) {
                          var PM = {};
                          for (var PE in PT) {
                            var PJ = "function" == typeof PT[PE] ? PT[PE](PG.target, PG.id, PG.total) : PT[PE];
                            if (Array.isArray(PJ) && 0x1 === (PJ = PJ.map(function (PA) {
                              return "function" == typeof PA ? PA(PG.target, PG.id, PG.total) : PA;
                            })).length) {
                              PJ = PJ[0x0];
                            }
                            PM[PE] = PJ;
                          }
                          PM.duration = parseFloat(PM.duration);
                          PM.delay = parseFloat(PM.delay);
                          return PM;
                        }(Py, Pf);
                        var PB = Pd.value;
                        var Pz = Array.isArray(PB) ? PB[0x1] : PB;
                        var Po = uT(Pz);
                        var PH = uY(Pf.target, Pq.name, Po, Pf);
                        var Pj = PO ? PO.to.original : PH;
                        var Pr = Array.isArray(PB) ? PB[0x0] : Pj;
                        var Pi = uT(Pr) || uT(PH);
                        var Pk = Po || Pi;
                        if (undefined === Pz) {
                          Pz = Pj;
                        }
                        Pd.from = P2(Pr, Pk);
                        Pd.to = P2(uN(Pz, Pr), Pk);
                        Pd.start = PO ? PO.end : 0x0;
                        Pd.end = Pd.start + Pd.delay + Pd.duration + Pd.endDelay;
                        Pd.easing = ud(Pd.easing, Pd.duration);
                        Pd.isPath = Object.prototype.toString.call(PB).indexOf("Object") > -0x1 && PB.hasOwnProperty("totalLength");
                        Pd.isPathTargetInsideSVG = Pd.isPath && Pf.target instanceof SVGElement;
                        Pd.isColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(Pd.from.original) || /^rgb/.test(Pd.from.original) || /^hsl/.test(Pd.from.original);
                        if (Pd.isColor) {
                          Pd.round = 0x1;
                        }
                        PO = Pd;
                        return Pd;
                      });
                    }(Pe, Pg);
                    var PR = PQ[PQ.length - 0x1];
                    var Ph = {
                      type: PI,
                      property: Pe.name,
                      animatable: Pg,
                      tweens: PQ,
                      duration: PR.end,
                      delay: PQ[0x0].delay,
                      endDelay: PR.endDelay
                    };
                    return Ph;
                  }
                }(Pp, Px);
              });
            })), function (Pp) {
              return !(undefined === Pp);
            });
          }
          function P9(Pv, PC) {
            var Pp = Pv.length;
            var Pg = {
              duration: Pp ? Math.max.apply(Math, Pv.map(function (Pe) {
                return (Pe.timelineOffset ? Pe.timelineOffset : 0x0) + Pe.duration;
              })) : PC.duration,
              delay: Pp ? Math.min.apply(Math, Pv.map(function (Pe) {
                return (Pe.timelineOffset ? Pe.timelineOffset : 0x0) + Pe.delay;
              })) : PC.delay
            };
            Pg.endDelay = Pp ? Pg.duration - Math.max.apply(Math, Pv.map(function (Pe) {
              return (Pe.timelineOffset ? Pe.timelineOffset : 0x0) + Pe.duration - Pe.endDelay;
            })) : PC.endDelay;
            return Pg;
          }
          var Pu = 0x0;
          var PP = [];
          var PU = function () {
            var Pv;
            function PC(Pp) {
              var Px = PP.length;
              for (var Pg = 0x0; Pg < Px;) {
                var Pe = PP[Pg];
                if (Pe.paused) {
                  PP.splice(Pg, 0x1);
                  Px--;
                } else {
                  Pe.tick(Pp);
                  Pg++;
                }
              }
              Pv = Pg > 0x0 ? requestAnimationFrame(PC) : undefined;
            }
            if ("undefined" != typeof document) {
              document.addEventListener("visibilitychange", function () {
                if (Pn.suspendWhenDocumentHidden) {
                  if (!!document && document.hidden) {
                    Pv = cancelAnimationFrame(Pv);
                  } else {
                    PP.forEach(function (Pp) {
                      return Pp.Dt();
                    });
                    PU();
                  }
                }
              });
            }
            return function () {
              if (!(Pv || !!document && document.hidden && Pn.suspendWhenDocumentHidden || !(PP.length > 0x0))) {
                Pv = requestAnimationFrame(PC);
              }
            };
          }();
          function Pn(Pv) {
            if (undefined === Pv) {
              Pv = {};
            }
            var PC;
            var Pp = 0x0;
            var Px = 0x0;
            var Pg = 0x0;
            var Pe = 0x0;
            var PI = null;
            function PQ(Pz) {
              var Po = L.Promise && new Promise(function (PH) {
                return PI = PH;
              });
              Pz.finished = Po;
              return Po;
            }
            var PR = function (Pz) {
              var Po = ui(us, Pz);
              var PH = ui(ua, Pz);
              var Pj = function (PM, PE) {
                var PJ = [];
                var PA = PE.keyframes;
                if (PA) {
                  PE = uk(function (PY) {
                    var PN = uz(uo(PY.map(function (PZ) {
                      return Object.keys(PZ);
                    })), function (PZ) {
                      return !us.hasOwnProperty(PZ) && !ua.hasOwnProperty(PZ) && "targets" !== PZ && "keyframes" !== PZ;
                    }).reduce(function (PZ, U0) {
                      if (PZ.indexOf(U0) < 0x0) {
                        PZ.push(U0);
                      }
                      return PZ;
                    }, []);
                    var Pl = {};
                    var Pc = function (PZ) {
                      var U0 = PN[PZ];
                      Pl[U0] = PY.map(function (U1) {
                        var U2 = {};
                        for (var U3 in U1) if (!us.hasOwnProperty(U3) && !ua.hasOwnProperty(U3) && "targets" !== U3 && "keyframes" !== U3) {
                          if (U3 == U0) {
                            U2.value = U1[U3];
                          }
                        } else {
                          U2[U3] = U1[U3];
                        }
                        return U2;
                      });
                    };
                    for (var PK = 0x0; PK < PN.length; PK++) {
                      Pc(PK);
                    }
                    return Pl;
                  }(PA), PE);
                }
                for (var PW in PE) if (!us.hasOwnProperty(PW) && !ua.hasOwnProperty(PW) && "targets" !== PW && "keyframes" !== PW) {
                  PJ.push({
                    'name': PW,
                    'tweens': P5(PE[PW], PM)
                  });
                }
                return PJ;
              }(PH, Pz);
              var Pr = P4(Pz.targets);
              var Pi = P8(Pr, Pj);
              var Pk = P9(Pi, PH);
              var PT = Pu;
              var PG = {
                'id': PT,
                children: [],
                animatables: Pr,
                animations: Pi,
                duration: Pk.duration,
                delay: Pk.delay,
                endDelay: Pk.endDelay
              };
              Pu++;
              return uk(Po, PG);
            }(Pv);
            function Ph() {
              var Pz = PR.direction;
              if ("alternate" !== Pz) {
                PR.direction = "normal" !== Pz ? "normal" : "reverse";
              }
              PR.reversed = !PR.reversed;
              PC.forEach(function (Po) {
                return Po.reversed = PR.reversed;
              });
            }
            function Pf() {
              Pp = 0x0;
              Px = (PR.reversed ? PR.duration - PR.currentTime : PR.currentTime) * (0x1 / Pn.speed);
            }
            function PO(Pz, Po) {
              if (Po) {
                Po.seek(Pz - Po.timelineOffset);
              }
            }
            function Py(Pz) {
              var Po = 0x0;
              var PH = PR.animations;
              for (var Pj = PH.length; Po < Pj;) {
                var Pr = PH[Po];
                var Pi = Pr.animatable;
                var Pk = Pr.tweens;
                var PT = Pk.length - 0x1;
                var PG = Pk[PT];
                if (PT) {
                  PG = uz(Pk, function (U4) {
                    return Pz < U4.end;
                  })[0x0] || PG;
                }
                var PM = Math.min(Math.max(Pz - PG.start - PG.delay, 0x0), PG.duration) / PG.duration;
                var PE = isNaN(PM) ? 0x1 : PG.easing(PM);
                var PJ = PG.to.strings;
                var PA = PG.round;
                var PW = [];
                var PY = PG.to.numbers.length;
                var PN = undefined;
                for (var Pl = 0x0; Pl < PY; Pl++) {
                  var Pc = undefined;
                  var PK = PG.to.numbers[Pl];
                  var PZ = PG.from.numbers[Pl] || 0x0;
                  Pc = PG.isPath ? P1(PG.value, PE * PK, PG.isPathTargetInsideSVG) : PZ + PE * (PK - PZ);
                  if (PA) {
                    if (!(PG.isColor && Pl > 0x2)) {
                      Pc = Math.round(Pc * PA) / PA;
                    }
                  }
                  PW.push(Pc);
                }
                var U0 = PJ.length;
                if (U0) {
                  PN = PJ[0x0];
                  for (var U1 = 0x0; U1 < U0; U1++) {
                    PJ[U1];
                    var U2 = PJ[U1 + 0x1];
                    var U3 = PW[U1];
                    if (!isNaN(U3)) {
                      PN += U2 ? U3 + U2 : U3 + " ";
                    }
                  }
                } else {
                  PN = PW[0x0];
                }
                P6[Pr.type](Pi.target, Pr.property, PN, Pi.transforms);
                Pr.currentValue = PN;
                Po++;
              }
            }
            function Pd(Pz) {
              if (PR[Pz] && !PR.passThrough) {
                PR[Pz](PR);
              }
            }
            function PB(Pz) {
              var Po = PR.duration;
              var PH = PR.delay;
              var Pj = Po - PR.endDelay;
              var Pr = PR.reversed ? PR.duration - Pz : Pz;
              PR.progress = Math.min(Math.max(Pr / Po * 0x64, 0x0), 0x64);
              PR.reversePlayback = Pr < PR.currentTime;
              if (PC) {
                (function (Pi) {
                  if (PR.reversePlayback) {
                    for (var Pk = Pe; Pk--;) {
                      PO(Pi, PC[Pk]);
                    }
                  } else {
                    for (var PT = 0x0; PT < Pe; PT++) {
                      PO(Pi, PC[PT]);
                    }
                  }
                })(Pr);
              }
              if (!PR.began && PR.currentTime > 0x0) {
                PR.began = true;
                Pd("begin");
              }
              if (!PR.loopBegan && PR.currentTime > 0x0) {
                PR.loopBegan = true;
                Pd("loopBegin");
              }
              if (Pr <= PH && 0x0 !== PR.currentTime) {
                Py(0x0);
              }
              if (Pr >= Pj && PR.currentTime !== Po || !Po) {
                Py(Po);
              }
              if (Pr > PH && Pr < Pj) {
                if (!PR.changeBegan) {
                  PR.changeBegan = true;
                  PR.changeCompleted = false;
                  Pd("changeBegin");
                }
                Pd("change");
                Py(Pr);
              } else if (PR.changeBegan) {
                PR.changeCompleted = true;
                PR.changeBegan = false;
                Pd("changeComplete");
              }
              PR.currentTime = Math.min(Math.max(Pr, 0x0), Po);
              if (PR.began) {
                Pd("update");
              }
              if (Pz >= Po) {
                Px = 0x0;
                if (PR.remaining && true !== PR.remaining) {
                  PR.remaining--;
                }
                if (PR.remaining) {
                  Pp = Pg;
                  Pd("loopComplete");
                  PR.loopBegan = false;
                  if ("alternate" === PR.direction) {
                    Ph();
                  }
                } else {
                  PR.paused = true;
                  if (!PR.completed) {
                    PR.completed = true;
                    Pd("loopComplete");
                    Pd("complete");
                    if (!PR.passThrough && "Promise" in L) {
                      PI();
                      PQ(PR);
                    }
                  }
                }
              }
            }
            PQ(PR);
            PR.reset = function () {
              var Pz = PR.direction;
              PR.passThrough = false;
              PR.currentTime = 0x0;
              PR.progress = 0x0;
              PR.paused = true;
              PR.began = false;
              PR.loopBegan = false;
              PR.changeBegan = false;
              PR.completed = false;
              PR.changeCompleted = false;
              PR.reversePlayback = false;
              PR.reversed = "reverse" === Pz;
              PR.remaining = PR.loop;
              PC = PR.children;
              for (var Po = Pe = PC.length; Po--;) {
                PR.children[Po].reset();
              }
              if (PR.reversed && true !== PR.loop || "alternate" === Pz && 0x1 === PR.loop) {
                PR.remaining++;
              }
              Py(PR.reversed ? PR.duration : 0x0);
            };
            PR.Dt = Pf;
            PR.set = function (Pz, Po) {
              P7(Pz, Po);
              return PR;
            };
            PR.tick = function (Pz) {
              Pg = Pz;
              if (!Pp) {
                Pp = Pg;
              }
              PB((Pg + (Px - Pp)) * Pn.speed);
            };
            PR.seek = function (Pz) {
              PB(PR.reversed ? PR.duration - Pz : Pz);
            };
            PR.pause = function () {
              PR.paused = true;
              Pf();
            };
            PR.play = function () {
              if (PR.paused) {
                if (PR.completed) {
                  PR.reset();
                }
                PR.paused = false;
                PP.push(PR);
                Pf();
                PU();
              }
            };
            PR.reverse = function () {
              Ph();
              PR.completed = !PR.reversed;
              Pf();
            };
            PR.restart = function () {
              PR.reset();
              PR.play();
            };
            PR.remove = function (Pz) {
              Pb(P3(Pz), PR);
            };
            PR.reset();
            if (PR.autoplay) {
              PR.play();
            }
            return PR;
          }
          function PD(Pv, PC) {
            for (var Pp = PC.length; Pp--;) {
              if (uj(Pv, PC[Pp].animatable.target)) {
                PC.splice(Pp, 0x1);
              }
            }
          }
          function Pb(Pv, PC) {
            var Pp = PC.animations;
            var Px = PC.children;
            PD(Pv, Pp);
            for (var Pg = Px.length; Pg--;) {
              var Pe = Px[Pg];
              var PI = Pe.animations;
              PD(Pv, PI);
              if (!(PI.length || Pe.children.length)) {
                Px.splice(Pg, 0x1);
              }
            }
            if (!(Pp.length || Px.length)) {
              PC.pause();
            }
          }
          Pn.version = "3.2.1";
          Pn.speed = 0x1;
          Pn.suspendWhenDocumentHidden = true;
          Pn.running = PP;
          Pn.remove = function (Pv) {
            var PC = P3(Pv);
            for (var Pp = PP.length; Pp--;) {
              Pb(PC, PP[Pp]);
            }
          };
          Pn.get = uY;
          Pn.set = P7;
          Pn.convertPx = uE;
          Pn.path = function (Pv, PC) {
            var Pp = "string" == typeof Pv ? uB(Pv)[0x0] : Pv;
            var Px = PC || 0x64;
            return function (Pg) {
              return {
                'property': Pg,
                'el': Pp,
                'svg': P0(Pp),
                'totalLength': uZ(Pp) * (Px / 0x64)
              };
            };
          };
          Pn.setDashoffset = function (Pv) {
            var PC = uZ(Pv);
            Pv.setAttribute("stroke-dasharray", PC);
            return PC;
          };
          Pn.stagger = function (Pv, PC) {
            if (undefined === PC) {
              PC = {};
            }
            var Pp = PC.direction || "normal";
            var Px = PC.easing ? ud(PC.easing) : null;
            var Pg = PC.grid;
            var Pe = PC.axis;
            var PI = PC.from || 0x0;
            var PQ = "first" === PI;
            var PR = "center" === PI;
            var Ph = "last" === PI;
            var Pq = Array.isArray(Pv);
            var Pf = parseFloat(Pq ? Pv[0x0] : Pv);
            var PO = Pq ? parseFloat(Pv[0x1]) : 0x0;
            var Py = uT(Pq ? Pv[0x1] : Pv) || 0x0;
            var Pd = PC.start || 0x0 + (Pq ? Pf : 0x0);
            var PB = [];
            var Pz = 0x0;
            return function (Po, PH, Pj) {
              if (PQ) {
                PI = 0x0;
              }
              if (PR) {
                PI = (Pj - 0x1) / 0x2;
              }
              if (Ph) {
                PI = Pj - 0x1;
              }
              if (!PB.length) {
                for (var Pr = 0x0; Pr < Pj; Pr++) {
                  if (Pg) {
                    var Pi = PR ? (Pg[0x0] - 0x1) / 0x2 : PI % Pg[0x0];
                    var Pk = PR ? (Pg[0x1] - 0x1) / 0x2 : Math.floor(PI / Pg[0x0]);
                    var PT = Pi - Pr % Pg[0x0];
                    var PG = Pk - Math.floor(Pr / Pg[0x0]);
                    var PM = Math.sqrt(PT * PT + PG * PG);
                    if ('x' === Pe) {
                      PM = -PT;
                    }
                    if ('y' === Pe) {
                      PM = -PG;
                    }
                    PB.push(PM);
                  } else {
                    PB.push(Math.abs(PI - Pr));
                  }
                  Pz = Math.max.apply(Math, PB);
                }
                if (Px) {
                  PB = PB.map(function (PE) {
                    return Px(PE / Pz) * Pz;
                  });
                }
                if ("reverse" === Pp) {
                  PB = PB.map(function (PE) {
                    return Pe ? PE < 0x0 ? -0x1 * PE : -PE : Math.abs(Pz - PE);
                  });
                }
              }
              return Pd + (Pq ? (PO - Pf) / Pz : Pf) * (Math.round(0x64 * PB[PH]) / 0x64) + Py;
            };
          };
          Pn.timeline = function (Pv) {
            if (undefined === Pv) {
              Pv = {};
            }
            var PC = Pn(Pv);
            PC.duration = 0x0;
            PC.add = function (Pp, Px) {
              var Pg = PP.indexOf(PC);
              var Pe = PC.children;
              function Pf(PO) {
                PO.passThrough = true;
              }
              if (Pg > -0x1) {
                PP.splice(Pg, 0x1);
              }
              for (var PI = 0x0; PI < Pe.length; PI++) {
                Pf(Pe[PI]);
              }
              var PQ = uk(Pp, ui(ua, Pv));
              PQ.targets = PQ.targets || Pv.targets;
              var PR = PC.duration;
              PQ.autoplay = false;
              PQ.direction = PC.direction;
              PQ.timelineOffset = undefined === Px ? PR : uN(Px, PR);
              Pf(PC);
              PC.seek(PQ.timelineOffset);
              var Ph = Pn(PQ);
              Pf(Ph);
              Pe.push(Ph);
              var Pq = P9(Pe, Pv);
              PC.delay = Pq.delay;
              PC.endDelay = Pq.endDelay;
              PC.duration = Pq.duration;
              PC.seek(0x0);
              PC.reset();
              if (PC.autoplay) {
                PC.play();
              }
              return PC;
            };
            return PC;
          };
          Pn.easing = ud;
          Pn.penner = uq;
          Pn.random = function (Pv, PC) {
            return Math.floor(Math.random() * (PC - Pv + 0x1)) + Pv;
          };
          var PL = function () {
            function Pv(PC, Pp, Px) {
              this.O = Px;
              this.Gt = PC;
              this.$t = Pp;
            }
            Pv.prototype.qt = function () {
              if (this.$t) {
                var PC = this.$t;
                var Pp = PC.position;
                var Px = PC.opacity;
                if (Pn) {
                  Pn.set(this.Gt, {
                    'top': Pp && ''.concat(Pp.y, 'px'),
                    'left': Pp && ''.concat(Pp.x, 'px'),
                    'opacity': ''.concat(Px)
                  });
                }
              }
            };
            Pv.prototype.Xt = function () {
              var PC = this.O;
              var Pp = PC.animate;
              var Px = PC.value;
              var Pg = PC.duration;
              var Pe = PC.easing;
              var PI = {
                'targets': this.Gt,
                'duration': 0x3e8 * (Pg || 0x0)
              };
              var PQ = Pe;
              if ("object" == typeof PQ && "function" == typeof PQ.easing) {
                PQ = function () {
                  return function (Ph) {
                    if (!Pe.Yt) {
                      Pe.Yt = 0x1;
                    }
                    return Pe.easing(Ph);
                  };
                };
              }
              PI.easing = PQ || "linear";
              switch (Pp) {
                case "Fade":
                  PI.opacity = '' + Px;
                  break;
                case "Slide":
                  PI.left = ''.concat(Px.x, 'px');
                  PI.top = ''.concat(Px.y, 'px');
                  break;
                default:
                  PI = undefined;
              }
              this.Zt = PI;
            };
            Pv.prototype.play = function (PC) {
              this.qt();
              this.Xt();
              if (this.Zt) {
                Pn(Object.assign({}, this.Zt, {
                  'complete': function () {
                    if (PC) {
                      PC();
                    }
                  }
                }));
              } else if (PC) {
                PC();
              }
            };
            return Pv;
          }();
          var Pw = function (Pv) {
            var PC = undefined !== Pv.a ? Pv.a : 0xff;
            PC /= 0xff;
            return "rgba(".concat(Pv.r, ", ").concat(Pv.g, ", ").concat(Pv.b, ", ").concat(PC, ')');
          };
          var PV = function (Pv, PC) {
            var Pp = PC.x;
            var Px = PC.y;
            var Pg = {
              'x': Pp - Pv.width / 0x2,
              'y': Px - Pv.height / 0x2
            };
            return Pg;
          };
          var Pm = function () {
            function Pv() {
              this.Pt = [];
              this.Qt = shell.environment.getOrientationMode();
              this.Ut = document.createElement("div");
              this.Ut.className = "land" === this.Qt ? "loading_panel_landscape" : "loading_panel";
              this.Rt = document.createElement("div");
              this.Rt.className = "land" === this.Qt ? "loading_background_landscape" : "loading_background";
              this.Vt = document.createElement("div");
              this.Vt.className = "land" === this.Qt ? "loading_container_landscape" : "loading_container";
              this.Wt = document.createElement("div");
              this.Wt.className = "land" === this.Qt ? "loading_circle_container_landscape loading_circle_container_center_landscape" : "loading_circle_container loading_circle_container_center";
              for (var Px = 0x0; Px < 0x3; Px++) {
                var Pg = document.createElement("div");
                Pg.className = "land" === this.Qt ? "loading_circle_landscape" : "loading_circle";
                this.Wt.appendChild(Pg);
                this.Pt.push(Pg);
              }
              this.Jt = document.createElement("div");
              this.Jt.className = "land" === this.Qt ? "loading_font_landscape" : "loading_font";
              this.Vt.appendChild(this.Wt);
              this.Vt.appendChild(this.Jt);
              this.Ut.appendChild(this.Rt);
              this.Ut.appendChild(this.Vt);
              this.ht = {};
            }
            var PC = {
              get: function () {
                return this.Rt;
              },
              enumerable: false,
              configurable: true
            };
            var Pp = {
              get: function () {
                return this.Jt;
              },
              enumerable: false,
              configurable: true
            };
            Object.defineProperty(Pv.prototype, "background", PC);
            Object.defineProperty(Pv.prototype, "text", Pp);
            Pv.prototype.getElement = function () {
              return this.Ut;
            };
            Pv.prototype.setStyle = function (Px) {
              this.ht = Object.assign({}, this.ht, Px);
              var Pg = this.ht.iconColor;
              if (Pg) {
                for (var Pe = 0x0; Pe < 0x3; Pe++) {
                  this.Pt[Pe].style.backgroundColor = Pw(Pg);
                }
              }
              var PI = this.ht.backgroundColor;
              if (PI) {
                this.Rt.style.backgroundColor = Pw(PI);
              }
              var PQ = this.ht.labelColor;
              if (PQ) {
                this.Jt.style.color = Pw(PQ);
              }
            };
            Pv.prototype.setText = function (Px) {
              this.Wt.className = "land" === this.Qt ? "loading_circle_container_landscape" : "loading_circle_container";
              this.Jt.innerText = Px;
              if (!Px.length) {
                this.Wt.className += " loading_circle_container_center";
              }
            };
            Pv.prototype.setSize = function (Px) {
              this.Ut.style.width = ''.concat(Px.width, 'px');
              this.Ut.style.height = ''.concat(Px.height, 'px');
            };
            Pv.prototype.getSize = function () {
              var Px = this.Ut.style.width.replace('px', '');
              var Pg = this.Ut.style.height.replace('px', '');
              return {
                'width': parseFloat(Px),
                'height': parseFloat(Pg)
              };
            };
            Pv.prototype.setScale = function (Px) {
              this.Ut.style.transform = "scale(".concat(Px, ')');
            };
            Pv.prototype.setPosition = function (Px) {
              this.Ut.style.left = ''.concat(Px.x, 'px');
              this.Ut.style.top = ''.concat(Px.y, 'px');
            };
            Pv.prototype.getPosition = function () {
              var Px = this.Ut.style.left.replace('px', '');
              var Pg = this.Ut.style.top.replace('px', '');
              return {
                'x': parseFloat(Px),
                'y': parseFloat(Pg)
              };
            };
            Pv.prototype.setOpacity = function (Px) {
              this.Ut.style.opacity = ''.concat(Px);
            };
            Pv.prototype.enableBackground = function (Px) {
              this.Rt.style.visibility = Px ? "visible" : "hidden";
            };
            Pv.prototype.setColor = function (Px) {
              if (Px) {
                var Pg = Pw(Px);
                for (var Pe = 0x0; Pe < 0x3; Pe++) {
                  this.Pt[Pe].style.backgroundColor = Pg;
                }
                this.Jt.style.color = Pg;
              } else {
                var PI = this.ht.iconColor;
                if (PI) {
                  for (Pe = 0x0; Pe < 0x3; Pe++) {
                    this.Pt[Pe].style.backgroundColor = Pw(PI);
                  }
                }
                var PQ = this.ht.labelColor;
                if (PQ) {
                  this.Jt.style.color = Pw(PQ);
                }
              }
            };
            return Pv;
          }();
          var Ps = function () {
            function Pv() {
              var PC = shell.environment.getOrientationMode();
              this.K = document.createElement("div");
              this.K.className = "land" === PC ? "loading_holder_landscape" : "loading_holder";
            }
            Pv.prototype.getElement = function () {
              return this.K;
            };
            Pv.prototype.setSize = function (PC) {
              this.Kt = PC;
            };
            Pv.prototype.getSize = function () {
              return this.Kt;
            };
            Pv.prototype.tn = function (PC) {
              this.K.style.width = ''.concat(PC.width, 'px');
              this.K.style.height = ''.concat(PC.height, 'px');
            };
            Pv.prototype.overflow = function (PC) {
              if (PC) {
                this.nn();
              } else {
                this.en();
              }
            };
            Pv.prototype.nn = function () {
              this.tn(this.Kt);
              this.K.style.overflow = "hidden";
            };
            Pv.prototype.en = function () {
              var Pp = {
                width: 0x0,
                height: 0x0
              };
              'ie';
              if (shell.getBrowserBaseType().toLowerCase() === 'ie') {
                this.K.style.removeProperty("width");
                this.K.style.removeProperty("height");
                this.K.style.removeProperty("overflow");
              } else {
                this.tn(Pp);
                this.K.style.overflow = "unset";
              }
            };
            return Pv;
          }();
          var PX = function () {
            function Pv() {
              var PI = {
                width: 0x0,
                height: 0x0
              };
              var PQ = {
                width: 0x0,
                height: 0x0
              };
              var PR = {
                'x': 0x0,
                'y': 0x0
              };
              this.K = new Ps();
              this.Ut = new Pm();
              this.an = PI;
              this.Kt = PQ;
              this.rn = PR;
              this.sn = false;
              this.ln = false;
              this.cn = false;
              this.O = this.un;
              this.Ut.setStyle(this.hn);
              this.K.getElement().appendChild(this.Ut.getElement());
            }
            var PC = {
              get: function () {
                var PI = {
                  'r': 0x30,
                  'g': 0xa2,
                  'b': 0xd0,
                  'a': 0xff
                };
                var PQ = {
                  'r': 0x30,
                  'g': 0xa2,
                  'b': 0xd0,
                  'a': 0xff
                };
                var PR = {
                  'r': 0x31,
                  'g': 0x31,
                  'b': 0x3d,
                  'a': 0xff
                };
                var Ph = {
                  labelColor: PI,
                  iconColor: PQ,
                  backgroundColor: PR
                };
                return Ph;
              },
              enumerable: false,
              configurable: true
            };
            var Pp = {
              get: function () {
                var PI = {
                  label: '',
                  'x': this.dn.x,
                  'y': this.dn.y,
                  width: this.an.width,
                  height: this.an.height,
                  opacity: 0x1
                };
                return PI;
              },
              enumerable: false,
              configurable: true
            };
            var Px = {
              get: function () {
                var PI = {
                  'x': this.an.width / 0x2,
                  'y': this.an.height / 0x2
                };
                return PI;
              },
              enumerable: false,
              configurable: true
            };
            var Pg = {
              get: function () {
                return this.K;
              },
              enumerable: false,
              configurable: true
            };
            var Pe = {
              get: function () {
                return this.Ut;
              },
              enumerable: false,
              configurable: true
            };
            Object.defineProperty(Pv.prototype, 'hn', PC);
            Object.defineProperty(Pv.prototype, 'un', Pp);
            Object.defineProperty(Pv.prototype, 'dn', Px);
            Object.defineProperty(Pv.prototype, "holder", Pg);
            Object.defineProperty(Pv.prototype, "panel", Pe);
            Pv.prototype.resize = function (PI) {
              this.an = PI;
              this.fn(PI);
              this.pn(PI);
              this._n(PI);
              this.vn = Object.assign({}, PI);
            };
            Pv.prototype.fn = function (PI) {
              if (this.gn) {
                var PQ = this.vn;
                var PR = PQ.width / PI.width;
                var Ph = PQ.height / PI.height;
                this.gn.x = this.gn.x / PR;
                this.gn.y = this.gn.y / Ph;
              }
            };
            Pv.prototype._n = function (PI) {
              var PQ = {
                width: PI.width,
                height: PI.height
              };
              if (this.sn) {
                this.K.setSize(PQ);
                this.K.overflow(true);
              }
            };
            Pv.prototype.pn = function (PI) {
              var PQ = this.vn;
              var PR = PQ.width / PI.width;
              var Ph = PQ.height / PI.height;
              var Pq = {
                'width': this.Ut.getSize().width / PR,
                'height': this.Ut.getSize().height / Ph
              };
              var Pf = {
                width: PI.width,
                height: PI.height
              };
              this.Ut.setSize(Pq);
              if (this.ln) {
                Pq = Pf;
                this.Ut.setSize(Pq);
              }
            };
            Pv.prototype.setScaleSize = function (PI) {
              this.an = this.Kt = PI;
              this.vn = Object.assign({}, PI);
            };
            Pv.prototype.getElement = function () {
              return this.K.getElement();
            };
            Pv.prototype.setStyle = function (PI) {
              this.Ut.setStyle(PI);
            };
            Pv.prototype.setDisplayConfig = function (PI) {
              this.O = Object.assign({}, this.O, PI);
              this.bn(this.O);
            };
            Pv.prototype.show = function (PI) {
              var PQ = this;
              this.cn = true;
              var PR = {
                animate: this.O.inAnimate,
                duration: this.O.inDuration,
                easing: this.O.inEasing
              };
              var Ph = {};
              this.mn(PR);
              var Pf = PV(this.Kt, this.rn);
              this.gn = Pf;
              Ph = {
                'opacity': this.O.opacity,
                'position': Pf
              };
              switch (PR.animate) {
                case "Fade":
                  Ph.opacity = this.O.inValue;
                  PR.value = this.O.opacity;
                  break;
                case "Slide":
                  Ph.position = PV(this.Kt, this.O.inValue);
                  PR.value = Pf;
              }
              this.sn = true;
              this.K.setSize(this.an);
              this.K.overflow(true);
              new PL(this.Ut.getElement(), Ph, PR).play(function () {
                PQ.sn = false;
                PQ.K.overflow(false);
                PQ.Ut.setPosition(PQ.gn);
                if (PI) {
                  PI();
                }
              });
            };
            Pv.prototype.hide = function (PI) {
              var PQ = this;
              if (this.cn) {
                var PR = {
                  animate: this.O.outAnimate,
                  duration: this.O.outDuration,
                  easing: this.O.outEasing
                };
                this.mn(PR);
                var Pf = PV(this.Kt, this.rn);
                var PO = {
                  opacity: this.O.opacity,
                  position: Pf
                };
                this.gn = Pf;
                switch (PR.animate) {
                  case "Fade":
                    PR.value = this.O.outValue;
                    break;
                  case "Slide":
                    Pf = PV(this.Kt, this.O.outValue);
                    PR.value = Pf;
                    this.gn = Pf;
                }
                this.K.setSize(this.an);
                this.K.overflow(true);
                this.sn = true;
                new PL(this.Ut.getElement(), PO, PR).play(function () {
                  PQ.sn = false;
                  PQ.K.overflow(false);
                  PQ.Ut.setPosition(PQ.gn);
                  if (PI) {
                    PI();
                  }
                });
              } else {
                PI();
              }
            };
            Pv.prototype.mn = function (PI) {
              if (undefined === PI.animate) {
                PI.animate = "None";
              }
              if (undefined === PI.duration) {
                PI.duration = 0.3;
              }
              if (undefined === PI.easing) {
                PI.easing = "linear";
              }
            };
            Pv.prototype.reset = function () {
              var PI = {
                'x': 0x0,
                'y': 0x0
              };
              this.cn = false;
              this.O = this.un;
              this.rn = PI;
              this.ln = false;
              this.bn(this.O);
            };
            Pv.prototype.bn = function (PI) {
              var PQ = PI.width;
              var PR = PI.height;
              var Ph = PI.x;
              var Pq = PI.y;
              var Pf = PI.enableBackground;
              var PO = PI.isFullBackground;
              var Py = PI.opacity;
              var Pd = PI.label;
              var PB = PI.scale;
              var Pz = PI.color;
              var Po = PQ && PQ <= this.an.width ? PQ : this.an.width;
              var PH = PR && PR <= this.an.height ? PR : this.an.height;
              var Pj = {
                width: Po,
                height: PH
              };
              this.Kt = Pj;
              this.rn = {
                'x': "number" != typeof Ph || isNaN(Ph) ? this.dn.x : Ph,
                'y': "number" != typeof Pq || isNaN(Pq) ? this.dn.y : Pq
              };
              this.ln = !!PO;
              this.Ut.setText(Pd);
              this.Ut.setOpacity("number" != typeof Py ? 0x1 : Py);
              this.Ut.enableBackground(!!Pf);
              this.Ut.setSize(this.Kt);
              this.Ut.setPosition(PV(this.Kt, this.rn));
              this.Ut.setScale(PB || 0x1);
              this.Ut.setColor(Pz);
            };
            return Pv;
          }();
          var PS = function (Pv) {
            function PC() {
              return null !== Pv && Pv.apply(this, arguments) || this;
            }
            u3(PC, Pv);
            PC.prototype.onCreate = function () {
              this.event.on("Loading.Show", this.xn, this);
              this.event.on("Loading.Hide", this.yn, this);
              this.event.on("Loading.UpdateTheme", this.wn, this);
              this.event.on("Loading.RequestState", this.Et, this);
              this.event.on("Shell.Scaled", this.S, this);
              var Pp = this.kn = new PX();
              this.rootElement = Pp.getElement();
              this.context.event.emit("Shell.GetScale", undefined, function (Px) {
                Pp.setScaleSize(Px.response);
              });
            };
            PC.prototype.S = function (Pp) {
              var Px = Pp.payload;
              if (Px && this.kn) {
                this.kn.resize(Px);
              }
            };
            PC.prototype.xn = function (Pp) {
              var Px = this;
              var Pg = Pp.payload;
              this.context.event.emit("Shell.GetScale", undefined, function (Pe) {
                Px.Mn(Pe.response, Pg);
              });
            };
            PC.prototype.Mn = function (Pp, Px) {
              var Pg = this;
              this.view.appendTo(PC, "overlay");
              var Pe = this.kn;
              Pe.reset();
              Pe.setScaleSize(Pp);
              Pe.setDisplayConfig(Px || {});
              Pe.show(function () {
                Pg.Sn = "Show";
                Pg.event.emit("Loading.StateChanged", "Show");
              });
            };
            PC.prototype.yn = function () {
              var Pp = this;
              this.kn.hide(function () {
                Pp.view.removeFromParent(PC);
                Pp.kn.reset();
                Pp.Sn = "Hide";
                Pp.event.emit("Loading.StateChanged", "Hide");
              });
            };
            PC.prototype.wn = function (Pp) {
              var Px = Pp.payload;
              this.kn.setStyle(Px);
            };
            PC.prototype.Et = function (Pp) {
              Pp.response = this.Sn;
            };
            return PC;
          }(plugin.AbstractViewComponent);
          var Pt = new (function () {
            function Pv() {
              this.jn = [];
            }
            Pv.prototype.addStyle = function (PC, Pp) {
              if (-0x1 === this.jn.indexOf(PC)) {
                var Px = document.createElement("style");
                Px.id = PC;
                Px.textContent = Pp;
                document.head.appendChild(Px);
                this.jn.push(PC);
              }
            };
            Pv.prototype.removeStyle = function (PC) {
              var Pp = this.jn.indexOf(PC);
              if (Pp > 0x0) {
                var Px = document.getElementById(PC);
                if (Px && Px.parentElement) {
                  Px.remove();
                }
                this.jn.splice(Pp, 0x1);
              }
            };
            return Pv;
          }())();
          w("default", function (Pv) {
            function PC() {
              return null !== Pv && Pv.apply(this, arguments) || this;
            }
            u3(PC, Pv);
            PC.prototype.onCreate = function () {
              this.context;
              this.context.component.create(u6);
              this.context.component.create(ub);
              this.context.component.create(PS);
              Pt.addStyle("notify-css", ".slot_alert{background-color:rgba(47,47,59,.95);border-radius:6px;box-shadow:.87px .87px 8.7px #292929;padding:13px 21.7px;position:absolute;text-align:center;width:243.3px}.card_alert .content .slot_alert .message,.card_alert .content .slot_alert .title,.slot_alert .card_alert .content .message,.slot_alert .card_alert .content .title,.slot_alert .message,.slot_alert .slot_alert_landscape .message_landscape,.slot_alert .slot_alert_landscape .title_landscape,.slot_alert .title,.slot_alert_landscape .slot_alert .message_landscape,.slot_alert_landscape .slot_alert .title_landscape{color:#d9d9d9;white-space:normal}.slot_alert .title{font-size:15.7px}.slot_alert .message{font-size:13.3px}.slot_alert .single_content_padding{padding-bottom:17.3px!important;padding-top:8.7px!important}.slot_alert .title_padding{padding-bottom:0;padding-top:0}.slot_alert .message_padding{padding-bottom:17.3px;padding-top:17.3px}.slot_alert .message u{border-bottom:1.7px solid;display:inline-block;text-decoration:none}.slot_alert .btn_content_row{display:table;table-layout:fixed;width:100%}.slot_alert .btn_content{margin-left:2%;margin-right:2%;width:96%}.slot_alert .btn_content .button{background-color:#dd5c2a;border-radius:2.6px;color:#d9d9d9;font-size:13.3px;margin:3.5px;min-height:17.3px;opacity:1;padding:10.3px 8.7px}.slot_alert .btn_content .button:active{opacity:.85}.slot_alert .btn_content .row{display:table-cell;padding-left:4.3px;padding-right:4.3px;vertical-align:middle}.slot_alert .btn_content .btn_seperator_height{content:\"\";display:block;height:2.6px;width:inherit}.slot_alert .btn_content .btn_seperator_width{content:\"\";display:table-cell;height:inherit;width:8.7px}.slot_alert_landscape{background-color:rgba(47,47,59,.95);border-radius:6px;box-shadow:.87px .87px 8.7px #292929;padding:16px 18.7px;position:absolute;text-align:center;width:184px}.card_alert .content .slot_alert_landscape .message,.card_alert .content .slot_alert_landscape .title,.slot_alert .slot_alert_landscape .message,.slot_alert .slot_alert_landscape .title,.slot_alert_landscape .card_alert .content .message,.slot_alert_landscape .card_alert .content .title,.slot_alert_landscape .message_landscape,.slot_alert_landscape .slot_alert .message,.slot_alert_landscape .slot_alert .title,.slot_alert_landscape .title_landscape{color:#d9d9d9;white-space:normal}.slot_alert_landscape .title_landscape{font-size:12.7px}.slot_alert_landscape .message_landscape{font-size:10.3px}.slot_alert_landscape .single_content_padding_landscape{padding-bottom:17.3px!important;padding-top:8.7px!important}.slot_alert_landscape .title_padding_landscape{padding-bottom:0;padding-top:0}.slot_alert_landscape .message_landscape_padding{padding-bottom:17.3px;padding-top:17.3px}.slot_alert_landscape .message_landscape u{border-bottom:1.7px solid;display:inline-block;text-decoration:none}.slot_alert_landscape .btn_content_row_landscape{display:table;table-layout:fixed;width:100%}.slot_alert_landscape .btn_content_landscape{margin-right:2%;width:100%}.slot_alert_landscape .btn_content_landscape .button_landscape{background-color:#dd5c2a;border-radius:2.6px;color:#d9d9d9;font-size:10.3px;margin:3.5px;min-height:17.3px;opacity:1;padding:8.3px 8.7px}.slot_alert_landscape .btn_content_landscape .button_landscape:active{opacity:.85}.slot_alert_landscape .btn_content_landscape .row_landscape{display:table-cell;padding-left:4.3px;padding-right:4.3px;vertical-align:middle}.slot_alert_landscape .btn_content_landscape .btn_seperator_height_landscape{content:\"\";display:block;height:2.6px;width:inherit}.slot_alert_landscape .btn_content_landscape .btn_seperator_width_landscape{content:\"\";display:table-cell;height:inherit;width:8.7px}.lobby_alert{background-color:#fff;border-radius:6px;box-shadow:.87px .87px 3.5px #444;position:absolute;text-align:center;width:243.3px}.lobby_alert .title{font-size:12px;white-space:nowrap}.lobby_alert .message{font-size:12px;white-space:normal}.lobby_alert .single_content_padding{padding-bottom:9.7px;padding-top:19.3px}.lobby_alert .title_padding{padding-bottom:0;padding-top:9.7px}.lobby_alert .message_padding{padding-bottom:9.7px;padding-top:9.7px}.lobby_alert .message u{border-bottom:1.7px solid;display:inline-block;text-decoration:none}.lobby_alert .line_separator{border-bottom:.87px solid #000;opacity:.1;padding-top:8.7px}.lobby_alert .btn_content_row{display:table;table-layout:fixed;width:100%}.lobby_alert .btn_content{margin-left:2%;margin-right:2%;width:96%}.lobby_alert .btn_content .button{font-size:13.7px;opacity:1;padding-bottom:11.3px;padding-top:9.7px}.lobby_alert .btn_content .button .text{color:inherit;font-size:inherit;overflow:hidden;pointer-events:none;text-overflow:ellipsis;white-space:nowrap}.lobby_alert .btn_content .button:active{opacity:.85}.lobby_alert .btn_content .row{display:table-cell}.lobby_alert .btn_content .btn_seperator_height{background-color:#000;content:\"\";display:block;height:.87px;margin-left:-2%;opacity:.1;width:104%}.lobby_alert .btn_content .btn_seperator_width{background-color:#000;content:\"\";display:table-cell;height:inherit;opacity:.1;width:1px}.card_alert .content .message,.card_alert .content .slot_alert_landscape .message_landscape,.card_alert .content .slot_alert_landscape .title_landscape,.card_alert .content .title,.lobby_alert .message,.lobby_alert .title,.slot_alert .message,.slot_alert .slot_alert_landscape .message_landscape,.slot_alert .slot_alert_landscape .title_landscape,.slot_alert .title,.slot_alert_landscape .card_alert .content .message_landscape,.slot_alert_landscape .card_alert .content .title_landscape,.slot_alert_landscape .slot_alert .message_landscape,.slot_alert_landscape .slot_alert .title_landscape{margin-left:5%;margin-right:5%;overflow:hidden;width:90%}.card_alert .content .slot_alert_landscape .message,.card_alert .content .slot_alert_landscape .title,.slot_alert .slot_alert_landscape .message,.slot_alert .slot_alert_landscape .title,.slot_alert_landscape .card_alert .content .message,.slot_alert_landscape .card_alert .content .title,.slot_alert_landscape .message_landscape,.slot_alert_landscape .slot_alert .message,.slot_alert_landscape .slot_alert .title,.slot_alert_landscape .title_landscape{margin-left:10%;margin-right:5%;overflow:hidden;width:80%}.card_alert .content .btn_content .button .text,.slot_alert .btn_content .button .text,.slot_alert_landscape .btn_content_landscape .button_landscape .text_landscape{color:inherit;font-size:inherit;overflow:hidden;pointer-events:none;text-overflow:ellipsis;white-space:nowrap}@keyframes alert_anim_show{0%{opacity:0}60%{opacity:1;transform:scale(1)}80%{opacity:1;transform:scale(1.12)}to{opacity:1;transform:scale(1)}}@keyframes alert_anim_hide{0%{opacity:1}to{opacity:0}}.card_alert_show,.lobby_alert_show,.slot_alert_show,.slot_alert_show_landscape{animation:alert_anim_show .3s linear forwards;display:block}.card_alert_hide,.lobby_alert_hide,.slot_alert_hide,.slot_alert_hide_landscape{animation:alert_anim_hide .2s linear forwards}@keyframes card_btn_press{0%{opacity:1}to{opacity:.4}}@keyframes card_btn_release{0%{opacity:.4}to{opacity:1}}.card_alert .container{display:block;height:100%;position:absolute;width:100%}.card_alert .content{border-radius:10.3px;box-shadow:0 0 17.3px 3.5px #0c0b0b;padding:13px 21.7px;position:absolute;text-align:center;width:291.3px}.card_alert .content .message,.card_alert .content .slot_alert_landscape .message_landscape,.card_alert .content .slot_alert_landscape .title_landscape,.card_alert .content .title,.slot_alert_landscape .card_alert .content .message_landscape,.slot_alert_landscape .card_alert .content .title_landscape{color:#d9d9d9;white-space:normal}.card_alert .content .title{font-size:15px}.card_alert .content .message{font-size:14px}.card_alert .content .single_content_padding{padding-bottom:9.7px!important;padding-top:19.3px!important}.card_alert .content .title_padding{padding-bottom:0;padding-top:9.7px}.card_alert .content .message_padding{padding-bottom:9.7px;padding-top:9.7px}.card_alert .content .message u{border-bottom:5px solid;display:inline-block;text-decoration:none}.card_alert .content .btn_content_row{display:flex;justify-content:space-between;margin-left:0!important;margin-right:0!important;padding-bottom:13px;padding-top:13px;width:100%!important}.card_alert .content .btn_content{margin-left:10%;margin-right:10%;width:80%}.card_alert .content .btn_content .button{background:#cb951a;background:linear-gradient(180deg,#ffec50,#ffe470 44%,#d28c00 80%,#d09500 95%);border-radius:30px;color:#140c05;font-size:15.7px;font-weight:700;margin:4px -30px 10px;min-height:17.3px;opacity:1;padding:12px}.card_alert .content .btn_content .button:active{opacity:.85}.card_alert .content .btn_content .row{margin-left:0;margin-right:0;width:45%}.card_alert .content .btn_content .btn_seperator_height{display:none}.card_alert .content .btn_content .btn_seperator_width{content:\"\";height:inherit;width:20px}.card_alert .frame{background-color:#140c05;border:4px solid #503333;border-radius:10.3px;left:-4px;position:absolute;top:-4px}.alert_holder{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:1000}.alert_holder .screen_center{left:0;margin:auto;position:absolute;right:0}.loading_circle_container,.loading_container,.loading_holder,.loading_panel{bottom:0;left:0;position:absolute;right:0;top:0}.loading_holder,.loading_panel{height:auto;overflow:hidden;width:360px}.loading_holder{max-height:780px;min-height:640px;z-index:900}.loading_panel{top:800px}.loading_container{height:inherit;margin:auto;min-height:inherit;min-width:inherit;overflow:hidden;text-align:center;width:inherit}.loading_background{height:100%;width:100%}.loading_font{bottom:0;color:#30a2d0;font-size:15.7px;left:0;line-height:21.7px;margin:auto;max-height:65px;overflow:hidden;padding-left:7%;padding-right:7%;position:absolute;right:0;top:52px;width:86%}.loading_circle_container{align-items:center;bottom:34.7px;display:flex;height:8.7px;justify-content:space-between;margin:auto;position:absolute;width:26px}.loading_circle_container_center{bottom:0}.loading_circle{animation-direction:alternate;animation-duration:.25s;animation-iteration-count:infinite;animation-name:loading_circle_bounce;animation-timing-function:ease-out;background-color:#30a2d0;border-radius:50%;height:6px;position:relative;width:6px}.loading_circle:first-of-type{animation-delay:0s}.loading_circle:nth-of-type(2){animation-delay:-75ms}.loading_circle:nth-of-type(3){animation-delay:-.15s}@keyframes loading_circle_bounce{0%{bottom:0}90%,to{bottom:13px}}.loading_circle_container_landscape,.loading_container_landscape,.loading_holder_landscape,.loading_panel_landscape{bottom:0;left:0;position:absolute;right:0;top:0}.loading_holder_landscape,.loading_panel_landscape{height:360px}.loading_holder_landscape{max-width:780px;min-width:640px;z-index:900}.loading_panel_landscape{top:800px}.loading_background_landscape{height:100%;width:100%}.loading_container_landscape{margin:auto;text-align:center}.loading_circle_container_landscape{align-items:center;bottom:34.7px;display:flex;height:8.7px;justify-content:space-between;margin:auto;position:absolute;width:20px}.loading_font_landscape{bottom:0;color:#30a2d0;font-size:12.7px;left:0;line-height:21.7px;margin:auto;max-height:65px;padding-left:7%;padding-right:7%;position:absolute;right:0;top:52px;width:86%}.loading_circle_container_center_landscape{bottom:0}.loading_circle_landscape{animation-direction:alternate;animation-duration:.25s;animation-iteration-count:infinite;animation-name:loading_circle_bounce_landscape;animation-timing-function:ease-out;background-color:#30a2d0;border-radius:50%;height:4px;position:relative;width:4px}.loading_circle_landscape:first-of-type{animation-delay:0s}.loading_circle_landscape:nth-of-type(2){animation-delay:-75ms}.loading_circle_landscape:nth-of-type(3){animation-delay:-.15s}@keyframes loading_circle_bounce_landscape{0%{bottom:0}90%,to{bottom:7px}}#toast-container{left:0;pointer-events:none;position:absolute;top:0;visibility:visible;z-index:950}#toast{background-color:#30303c;border-radius:3.48px;box-shadow:0 12px 18px 0 rgba(0,0,0,.4),inset 0 1px 0 0 hsla(0,0%,100%,.1);color:hsla(0,0%,100%,.9);display:inline-block;font-size:14px;line-height:18px;margin:auto;max-height:676px;max-width:300px;opacity:0;padding:18px;pointer-events:auto;position:absolute;text-align:center;visibility:hidden}#toast.toast_top{top:20px}#toast.toast_bottom{bottom:20px}#toast.toast_show{opacity:.96;visibility:visible}#toast.toast_hide{opacity:0;transition:visibility 0s .3s,opacity .3s linear;visibility:hidden}#notification{background-color:#30303c;border-radius:3.48px;color:hsla(0,0%,100%,.9);display:flex;display:inline-block;font-size:14px;line-height:18px;margin:auto;max-height:676px;max-width:300px;opacity:0;padding:18px;position:absolute;text-align:center;visibility:hidden}#notification.toast_top{top:20px}#notification.toast_bottom{bottom:20px}#notification.toast_show{opacity:1;visibility:visible}#notification.toast_hide{opacity:0;transition:visibility 0s .3s,opacity .3s linear;visibility:hidden}#notification-icon{background-color:#fff;border-radius:3.48px;height:44px;width:44px}#notification-message{font-size:14px;line-height:18px;margin-left:10px;text-align:left}");
              this.complete();
            };
            return u4([plugin.PluginMainComponent("ba588d9dad")], PC);
          }(plugin.AbstractPluginComponent));
        }
      };
    });
  }();
}();