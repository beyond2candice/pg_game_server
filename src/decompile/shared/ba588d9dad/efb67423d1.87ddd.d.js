(function () {
  'use strict';

  (function () {
    var a;
    (function (a) {
      a.t = "window";
      a.i = "self";
    })(a || (a = {}));
    var e = (0, eval)("this");
    e[a.i];
    var Ea = e[a.t];
    System.register([], function (Fa) {
      'use strict';

      return {
        execute: function () {
          var Ga = Ea.__extends;
          var c = Ea.__decorate;
          var a = function () {
            Fa.prototype.getRootElement = function () {
              return this.M;
            };
            Fa.prototype.getToastElement = function () {
              return this.l;
            };
            Fa.prototype.resize = function (c) {
              this.S = c;
              var a = this.M;
              a.style.height = c.height + "px";
              a.style.width = c.width + "px";
              this.j();
            };
            Fa.prototype.show = function (b) {
              this.O = b;
              if (this.M) {
                this._();
              }
              this.M = document.createElement("div");
              this.M.setAttribute("id", "toast-container");
              this.l = this.F(b);
              this.C();
              this.A(b);
            };
            Fa.prototype.C = function () {
              if (this.m) {
                this.m();
              }
              var b = this.l;
              b.addEventListener("transitionend", this.u, true);
              b.addEventListener("touchstart", this.u, true);
              b.addEventListener("mousedown", this.u, true);
            };
            Fa.prototype.T = function () {
              if (this.k) {
                this.k();
              }
              var b = this.l;
              b.removeEventListener("transitionend", this.u);
              b.removeEventListener("touchstart", this.u);
              b.removeEventListener("mousedown", this.u);
            };
            Fa.prototype.A = function (c) {
              var a = c.duration ? c.duration : 2;
              this.B();
              this.N = // TOLOOK
              // TOLOOK
              setTimeout(this.o, a * 1000);
            };
            Fa.prototype.B = function () {
              var b = this.l;
              b.classList.remove("toast_hide");
              b.classList.add("toast_show");
            };
            Fa.prototype._ = function () {
              clearTimeout(this.N);
              this.T();
              this.M = undefined;
              this.l = undefined;
              this.O = undefined;
              this.N = undefined;
            };
            Fa.prototype.L = function (b) {
              this.l = b;
              b.style.fontSize = "11.5px";
              b.style.padding = "13.5px";
              b.style.lineHeight = "13.5px";
            };
            Fa.prototype.F = function (b) {
              if ((b.toastStyle ? b.toastStyle : "Message") === "Notification") {
                return this.I(b);
              } else {
                return this.H(b);
              }
            };
            Fa.prototype.I = function (j) {
              var a = j.toastPosition ? j.toastPosition : "Top";
              var b = j.message ? j.message : null;
              var c = j.imageSrc ? j.imageSrc : undefined;
              var d = j.layoutStyle;
              var e = this.D(d);
              var f = this.G(b, d);
              if (f) {
                e.appendChild(f);
              }
              var g = document.createElement("div");
              e.setAttribute("id", "notification");
              if (shell.environment.getOrientationMode() === "land") {
                this.L(e);
              }
              g.setAttribute("id", "notification-message");
              e.classList.add(this.$(a));
              if (c) {
                var h = document.createElement("img");
                h.setAttribute("id", "notification-icon");
                h.src = c;
                e.appendChild(h);
                if (f) {
                  f.style.margin = "10px 0px";
                }
              }
              if (j.positionOffset) {
                if (a === "Top") {
                  e.style.top = `${j.positionOffset}px`;
                } else if (a === "Bottom") {
                  e.style.bottom = `${j.positionOffset}px`;
                }
              }
              e.appendChild(g);
              this.M.appendChild(e);
              return e;
            };
            Fa.prototype.H = function (g) {
              var a = g.toastPosition ? g.toastPosition : "Bottom";
              var b = g.layoutStyle;
              var c = g.message ? g.message : null;
              var d = this.D(b);
              var e = this.G(c, b);
              if (e) {
                d.appendChild(e);
              }
              d.setAttribute("id", "toast");
              if (shell.environment.getOrientationMode() === "land") {
                this.L(d);
              }
              d.classList.add(this.$(a));
              if (g.positionOffset) {
                if (a === "Top") {
                  d.style.top = `${g.positionOffset}px`;
                } else if (a === "Bottom") {
                  d.style.bottom = `${g.positionOffset}px`;
                }
              }
              this.M.appendChild(d);
              return d;
            };
            Fa.prototype.D = function (j) {
              var a = document.createElement("div");
              if (j == null ? undefined : j.background) {
                var b = j.background;
                var c = b.border;
                var d = b.opacity;
                var e = b.backgroundColor;
                var f = b.boxShadow;
                var g = b.borderRadius;
                var h = b.backgroundImage;
                if (c) {
                  a.style.border = c;
                }
                if (d) {
                  a.style.opacity = d;
                }
                if (f) {
                  a.style.boxShadow = f;
                }
                if (g) {
                  a.style.borderRadius = g;
                }
                if (h) {
                  a.style.backgroundImage = h;
                }
                if (e) {
                  a.style.backgroundColor = typeof e == "string" ? e : this.v(e);
                }
              }
              return a;
            };
            Fa.prototype.G = function (e, a) {
              if (e) {
                var b = document.createElement("div");
                if (a == null ? undefined : a.message) {
                  var c = this.q(e, a.message);
                  if (c) {
                    b.appendChild(c);
                  }
                } else {
                  b.textContent = e;
                }
                return b;
              }
            };
            Fa.prototype.q = function (i, a, b) {
              if (a) {
                var c = document.createElement("span");
                var d = a.opacity;
                var e = a.fontColor;
                var f = a.fontStyle;
                var g = a.fontSize;
                if (d) {
                  c.style.opacity = d;
                }
                if (g) {
                  c.style.fontSize = g;
                }
                if (f) {
                  c.style.fontStyle = f;
                }
                if (e) {
                  c.style.color = typeof e == "string" ? e : this.v(e);
                }
                if (b) {
                  c.classList.add(b);
                }
                c.textContent = i.trim();
                return c;
              }
            };
            Fa.prototype.$ = function (b) {
              switch (b) {
                case "Top":
                  return "toast_top";
                case "Middle":
                  return "toast_middle";
                default:
                  return "toast_bottom";
              }
            };
            Fa.prototype.j = function () {
              var h = this.O;
              var a = this.l;
              var b = h && h.toastPosition ? h.toastPosition : "Top";
              var c = this.S;
              var d = c.width / 2 - a.clientWidth / 2;
              var e = c.height / 2 - a.clientHeight / 2;
              if (b === "Middle") {
                a.style.top = `${e}px`;
              } else {
                a.style.left = `${d}px`;
              }
              var f = c.width / 2 - a.clientWidth / 2;
              a.style.left = `${f}px`;
            };
            return Fa;
          }();
          var b = function (d) {
            function f() {
              var b = d !== null && d.apply(this, arguments) || this;
              b.X = function (c) {
                if (!c.error) {
                  b.Y(c.payload);
                }
              };
              b.Z = function () {
                b.context.event.emit("Toast.OnDismiss", Object.create(null));
              };
              b.P = function () {
                b.context.event.on("Shell.Scaled", b.X, b);
              };
              b.U = function () {
                b.context.event.off("Shell.Scaled", b.X, b);
                b.view.removeFromParent(f);
              };
              return b;
            }
            Ga(f, d);
            f.prototype.onCreate = function () {
              this.context.event.on("Toast.Show", this.R, this);
              this.V = new a(this.P, this.U, this.Z);
            };
            f.prototype.Y = function (c) {
              var a;
              if (!((a = this.V) === null || a === undefined)) {
                a.resize(c);
              }
            };
            f.prototype.R = function (b) {
              var a;
              var g;
              var h = this;
              if (!((a = this.V) === null || a === undefined)) {
                a.show(b.payload);
              }
              this.rootElement = (g = this.V) === null || g === undefined ? undefined : g.getRootElement();
              this.context.view.appendTo(f, "overlay");
              this.context.event.emit("Shell.GetScale", undefined, function (b) {
                if (!b.error) {
                  h.Y(b.response);
                }
              });
              this.context.event.emit("Toast.OnBegin", Object.create(null));
            };
            return f;
          }(plugin.AbstractViewComponent);
          var e = function () {
            Fa.prototype.onReceivedInfo = function (d, a) {
              var b = this;
              this.J.onReceivedInfo(d, function (c) {
                for (var g = 0, h = c.buttonsData; g < h.length; g++) {
                  var e = h[g];
                  b.tt(e, a);
                }
                b.nt = c.viewElement;
                b.K.appendToContentElement(c.viewElement);
              });
            };
            Fa.prototype.onShow = function () {
              this.J.onShow();
              this.K.setContentElementSize(this.nt);
            };
            Fa.prototype.onHide = function () {
              this.J.onHide();
            };
            Fa.prototype.removeRegisteredHandlers = function () {
              for (var d = 0, e = this.W; d < e.length; d++) {
                var b = e[d];
                b.element.removeEventListener("click", b.onClickHandler);
              }
            };
            Fa.prototype.onScale = function (b) {
              if (this.J.onScale) {
                this.J.onScale(b);
              }
              this.it(b, this.K.getScreenCenterElement());
              this.setHolderSize(b.height, b.width);
            };
            Fa.prototype.getMainElement = function () {
              return this.K.getMainElement();
            };
            Fa.prototype.setHolderSize = function (c, a) {
              this.K.setSize(c, a);
            };
            Fa.prototype.updateContent = function (b) {
              this.J.updateContents(b);
            };
            Fa.prototype.it = function (d, a) {
              var b = d.height / 2 - a.clientHeight / 2;
              a.style.top = `${Math.abs(b)}px`;
            };
            Fa.prototype.tt = function (e, a) {
              var b = e.button;
              var c = b.autoDismiss === undefined || b.autoDismiss;
              b.autoDismiss = c;
              this.et(e, a);
            };
            Fa.prototype.et = function (d, a) {
              function b() {
                if (a) {
                  a(d);
                }
              }
              d.element.addEventListener("click", b);
              this.W.push({
                button: d.button,
                element: d.element,
                onClickHandler: b
              });
            };
            return Fa;
          }();
          var d = function () {
            Fa.prototype.createTitle = function (l, a, b) {
              var c;
              var m = l.title;
              if (m == null ? undefined : m.length) {
                var e;
                var n = !((c = l == null ? undefined : l.content) === null || c === undefined ? undefined : c.length);
                e = this.ot() === "land" ? this.st(m, "title_landscape", true, n) : this.st(m, "title", true, n);
                var g = (a == null ? undefined : a.fontColor) ? a.fontColor : b;
                if (g) {
                  e.style.color = this.convertToCSSColor(g);
                }
                if (a) {
                  var h = a.opacity;
                  var i = a.fontStyle;
                  var j = a.fontSize;
                  if (i) {
                    e.style.fontStyle = i;
                  }
                  if (j) {
                    e.style.fontSize = j;
                  }
                  if (h) {
                    e.style.opacity = h;
                  }
                }
                return e;
              }
            };
            Fa.prototype.createMessage = function (l, a, b) {
              var c;
              var m = l.content;
              if (m == null ? undefined : m.length) {
                var e;
                var n = !((c = l == null ? undefined : l.title) === null || c === undefined ? undefined : c.length);
                e = this.ot() === "land" ? this.st(m, "message_landscape", n, n) : this.st(m, "message", n, n);
                var g = (a == null ? undefined : a.fontColor) ? a.fontColor : b;
                if (g) {
                  e.style.color = this.convertToCSSColor(g);
                }
                if (a) {
                  var h = a.opacity;
                  var i = a.fontStyle;
                  var j = a.fontSize;
                  if (i) {
                    e.style.fontStyle = i;
                  }
                  if (j) {
                    e.style.fontSize = j;
                  }
                  if (h) {
                    e.style.opacity = h;
                  }
                }
                return e;
              }
            };
            Fa.prototype.createButtonGroup = function (s, a, b) {
              var c = s.actions;
              if ((c == null ? undefined : c.length) && !(c.length <= 0)) {
                var d;
                var t = b || {};
                var f = document.createElement("div");
                d = t.alignment ? t.alignment === "horizontal" : this.rt(c);
                for (var g = [], h = this.lt(c.length), i = 0; i < c.length; i++) {
                  var u = c[i];
                  var v = t.color && this.convertToCSSColor(t.color);
                  var w = t.gradient;
                  if (a) {
                    var x = a.positiveButton;
                    var y = a.negativeButton;
                    var z = a.neutralButton;
                    if (h) {
                      switch (u.type) {
                        case "Affirmative":
                          v = x.backgroundColor;
                          if (x.gradient) {
                            w = x.gradient;
                          }
                          break;
                        case "Destructive":
                          v = y.backgroundColor;
                          if (y.gradient) {
                            w = y.gradient;
                          }
                          break;
                        default:
                          v = z.backgroundColor;
                          if (z.gradient) {
                            w = z.gradient;
                          }
                      }
                    } else {
                      v = z.backgroundColor;
                      if (z.gradient) {
                        w = z.gradient;
                      }
                    }
                  }
                  var A = this.ct(u, d, t.fontColor, v, t.fontWeight, t.fontStyle, w, t.borderRadius);
                  var B = this.ut(d);
                  f.appendChild(A);
                  if (i !== c.length - 1) {
                    f.appendChild(B);
                  }
                  g.push({
                    element: A,
                    button: u
                  });
                }
                if (this.ot() === "land") {
                  f.className = "btn_content_landscape";
                  if (d) {
                    f.classList.add("btn_content_row_landscape");
                  }
                } else {
                  f.className = "btn_content";
                  if (d) {
                    f.classList.add("btn_content_row");
                  }
                }
                return {
                  container: f,
                  buttonsData: g
                };
              }
            };
            Fa.prototype.st = function (g, h, b, c) {
              var d = document.createElement("div");
              d.style.whiteSpace = "normal";
              d.style.wordBreak = "break-word";
              g = g.replace(/\n/g, "<br/>");
              var e = `${h} ${h}_padding `;
              if (this.ot() === "land") {
                if (c) {
                  e += "single_content_padding_landscape";
                }
              } else if (c) {
                e += "single_content_padding";
              }
              if (b) {
                g = "<b>" + g + "</b>";
              }
              d.className = e;
              d.innerHTML = g;
              return d;
            };
            Fa.prototype.ct = function (k, a, b, c, d, e, f, g) {
              var h = document.createElement("div");
              var i = document.createElement("div");
              if (this.ot() === "land") {
                h.className = "button_landscape";
                if (a) {
                  h.classList.add("row_landscape");
                }
              } else {
                h.className = "button";
                if (a) {
                  h.classList.add("row");
                }
              }
              if (b) {
                h.style.color = this.convertToCSSColor(b);
              }
              if (c) {
                h.style.backgroundColor = c;
              }
              if (d) {
                h.style.fontWeight = d;
              }
              if (e) {
                h.style.fontStyle = e;
              }
              if (f) {
                h.style.backgroundImage = f;
              }
              if (g) {
                h.style.borderRadius = g;
              }
              i.className = "text";
              i.innerHTML = k.label;
              h.appendChild(i);
              return h;
            };
            Fa.prototype.ut = function (c) {
              var a = document.createElement("div");
              if (this.ot() === "land") {
                a.className = c ? "btn_seperator_width_landscape" : "btn_seperator_height_landscape";
                return a;
              } else {
                a.className = c ? "btn_seperator_width" : "btn_seperator_height";
                return a;
              }
            };
            Fa.prototype.lt = function (b) {
              return b <= 2;
            };
            return Fa;
          }();
          var Ha = new d();
          var f = function () {
            Object.defineProperty(Fa.prototype, "contentElem", {
              get: function () {
                return this.contentElement;
              },
              enumerable: false,
              configurable: true
            });
            Fa.prototype.ot = function () {
              if (shell.environment.getOrientationMode() === "land") {
                return "land";
              } else {
                return "port";
              }
            };
            Fa.prototype.onReceivedInfo = function (i, a) {
              for (var b = this.contentElement; b.firstChild;) {
                b.removeChild(b.firstChild);
              }
              var c = this.ht;
              var d = Ha.createTitle(i, c.titleStyle, c.titleColor);
              var e = Ha.createMessage(i, c.messageStyle, c.contentColor);
              var f = Ha.createButtonGroup(i, c.buttonTypeStyle, c.button);
              if (d) {
                b.appendChild(d);
              }
              if (e) {
                b.appendChild(e);
              }
              var g = document.createElement("div");
              if (this.ot() === "land") {
                g.className = "line_separator_landscape";
              } else {
                g.className = "line_separator";
              }
              var h = [];
              if (f) {
                b.appendChild(g);
                b.appendChild(f.container);
                h.push.apply(h, f.buttonsData);
              }
              a({
                viewElement: this.viewElement,
                buttonsData: h
              });
            };
            Fa.prototype.onShow = function () {
              if (this.ot() === "land") {
                this.viewElement.className = `${this.cssClass} ${this.cssClass}_show_landscape`;
              } else {
                this.viewElement.className = `${this.cssClass} ${this.cssClass}_show`;
              }
            };
            Fa.prototype.onHide = function () {
              this.viewElement.className = `${this.cssClass} ${this.cssClass}_hide`;
            };
            Fa.prototype.updateContents = function (i) {
              var a = this.contentElement;
              var b = this.ht;
              var c = a.children;
              var d = Ha.createTitle(i, b.titleStyle, b.titleColor);
              var e = Ha.createMessage(i, b.messageStyle, b.contentColor);
              if (d) {
                var f = c[0];
                a.removeChild(f);
                a.insertBefore(d, c[0]);
              }
              if (e) {
                var g = c[1];
                a.removeChild(g);
                a.insertBefore(e, c[1]);
              }
            };
            return Fa;
          }();
          var g = function (c) {
            function a(a) {
              return c.call(this, "slot", a) || this;
            }
            Ga(a, c);
            return a;
          }(f);
          var h = function () {
            Fa.prototype.pushItem = function (b) {
              this.dt.push(this.ft);
              this.setActive(b);
              return b;
            };
            Fa.prototype.popItem = function () {
              for (var b = undefined; b === undefined && this.dt.length !== 0;) {
                b = this.dt.pop();
              }
              return b;
            };
            Fa.prototype.getQueue = function () {
              return this.dt;
            };
            Fa.prototype.isQueueAvailable = function () {
              return this.dt.length > 0;
            };
            Fa.prototype.setActive = function (b) {
              this.ft = b;
            };
            Fa.prototype.getActive = function () {
              return this.ft;
            };
            Fa.prototype.clearActive = function () {
              this.ft = undefined;
            };
            return Fa;
          }();
          var i = function (c) {
            function a(a) {
              return c.call(this, "lobby", a) || this;
            }
            Ga(a, c);
            return a;
          }(f);
          var j = function () {
            Fa.prototype.getMainElement = function () {
              return this._t;
            };
            Fa.prototype.getScreenCenterElement = function () {
              return this.vt;
            };
            Fa.prototype.appendToContentElement = function (c) {
              for (var a = this.vt; a.firstChild;) {
                a.removeChild(a.firstChild);
              }
              a.appendChild(c);
            };
            Fa.prototype.setContentElementSize = function (c) {
              var a = this.vt;
              if (c) {
                a.style.width = `${c.clientWidth}px`;
                a.style.height = `${c.clientHeight}px`;
              }
            };
            Fa.prototype.setSize = function (c, a) {
              this._t.style.height = c + "px";
              this._t.style.width = a + "px";
            };
            return Fa;
          }();
          var k = function (c) {
            function a() {
              var a = c.call(this, "card") || this;
              a.gt = document.createElement("div");
              a.gt.className = a.cssClass;
              a.bt = document.createElement("div");
              a.bt.className = "content";
              a.xt = document.createElement("div");
              a.xt.className = "frame";
              a.gt.appendChild(a.xt);
              a.gt.appendChild(a.bt);
              a.contentElement = a.bt;
              a.viewElement = a.gt;
              return a;
            }
            Ga(a, c);
            a.prototype.onShow = function () {
              this.updateBoxSize();
              c.prototype.onShow.call(this);
            };
            a.prototype.onScale = function () {
              this.updateBoxSize();
            };
            a.prototype.updateBoxSize = function () {
              this.gt.style.height = `${this.bt.clientHeight}px`;
              this.gt.style.width = `${this.bt.clientWidth}px`;
              this.xt.style.height = `${this.bt.clientHeight}px`;
              this.xt.style.width = `${this.bt.clientWidth}px`;
            };
            return a;
          }(f);
          var l = function (d) {
            function f() {
              var e = d !== null && d.apply(this, arguments) || this;
              e.yt = new h();
              e.wt = false;
              e.kt = "Hide";
              e.Mt = 0;
              e.St = 0;
              e.jt = [];
              e.zt = function () {
                e.Ot.onHide();
                e.context.view.removeFromParent(f);
                e.yt.clearActive();
                if (!e.yt.isQueueAvailable()) {
                  e.wt = false;
                  e.kt = "Hide";
                  e.context.event.emit("Alert.StateChanged", e.kt);
                  return;
                }
                e.Ft = // TOLOOK
                // TOLOOK
                setTimeout(function () {
                  var c = e.yt.popItem();
                  if (c) {
                    if (e.jt.length > 0) {
                      for (var a = 0; a < e.jt.length; a++) {
                        var f = e.jt[a];
                        if (f.info === c.info) {
                          c.info.title = f.title;
                          c.info.content = f.content;
                          e.jt.splice(a, 1);
                          break;
                        }
                      }
                    }
                    e.Ct(c);
                  }
                }, 200);
              };
              return e;
            }
            Ga(f, d);
            f.prototype.onCreate = function () {
              var d = this;
              this.context.event.on("Shell.Scaled", function (a) {
                d.At(a.payload);
              }, this);
              this.context.event.on("Shell.BootStateChanged", this.Tt, this);
              this.context.event.on("Alert.UpdateTheme", function (a) {
                d.Bt(a.payload);
              }, this);
              this.context.event.emit("Shell.GetScale", undefined, function (a) {
                var b = a.response;
                if (!a.error && b) {
                  d.Mt = b.height;
                  d.St = b.width;
                }
              });
            };
            f.prototype.Tt = function (b) {
              if (b.payload === "GameStarted") {
                this.context.event.on("Alert.Show", this.Nt, this);
                this.context.event.on("Alert.Clear", this.Lt, this);
                this.context.event.on("Alert.RequestState", this.Et, this);
                this.context.event.on("Alert.UpdateContent", this.It, this);
              }
            };
            f.prototype.Nt = function (d) {
              var a = d.payload;
              var b = d;
              b.intercept();
              this.Ct({
                info: a,
                event: b
              });
            };
            f.prototype.Lt = function (f) {
              var a = f.payload;
              if (this.Ht.info === a) {
                this.zt();
              } else {
                for (var b = this.yt.getQueue(), c = 0; c < b.length; ++c) {
                  var g = b[c];
                  if (g != null && g.info === a) {
                    g.event.propagate();
                    b.splice(c, 1);
                    break;
                  }
                }
              }
            };
            f.prototype.Et = function (b) {
              b.response = this.kt;
            };
            f.prototype.At = function (c) {
              if (c) {
                var a = this.Ot;
                if (a) {
                  a.onScale(c);
                }
              }
            };
            f.prototype.Bt = function (f) {
              if (f) {
                var a = {
                  Slot: g,
                  Lobby: i,
                  Card: k
                };
                var b = a;
                var c = b[f.theme] || b.Slot;
                try {
                  this.Ot = new e(new c(f.style), new j());
                  this.Ot.setHolderSize(this.Mt, this.St);
                  this.context.view.enableUIBlock(this.Ot.getMainElement());
                } catch (b) {}
              }
            };
            f.prototype.Ct = function (b) {
              var g = this;
              var a = b.info;
              if (a) {
                if (!this.Ot) {
                  this.Bt({
                    theme: "Slot"
                  });
                }
                if (!this.wt) {
                  this.wt = true;
                }
                if (this.Ft) {
                  clearTimeout(this.Ft);
                }
                if (this.yt.getActive()) {
                  this.Ht = this.yt.pushItem(b);
                  this.context.view.removeFromParent(f);
                } else {
                  this.yt.setActive(b);
                  this.Ht = b;
                }
                var c = this.Ot;
                this.rootElement = c.getMainElement();
                c.onReceivedInfo(a, function (d) {
                  var a = d.button;
                  c.removeRegisteredHandlers();
                  if (a.autoDismiss) {
                    g.zt();
                  }
                  g.Ht.event.response = a.handler;
                  g.Ht.event.propagate();
                });
                this.context.view.appendTo(f, "overlay");
                c.onShow();
                this.kt = "Show";
                this.context.event.emit("Alert.StateChanged", this.kt);
                this.context.event.emit("Shell.GetScale", undefined, function (b) {
                  g.At(b.response);
                });
              }
            };
            f.prototype.It = function (f) {
              var a = f.payload;
              var b = this.yt.getActive();
              if (b) {
                if (a.info && a.info !== b.info) {
                  for (var c = false, g = 0; g < this.jt.length; g++) {
                    if (this.jt[g].info === a.info) {
                      this.jt[g] = a;
                      c = true;
                      break;
                    }
                  }
                  if (!c) {
                    this.jt.push(a);
                  }
                } else {
                  this.Ot.updateContent(a);
                }
              }
            };
            return f;
          }(plugin.AbstractViewComponent);
          function m() {
            return Ea.eval("\"cc\"");
          }
          var n;
          function o(b, a) {
            var c = b.indexOf(Ea.String.fromCharCode(a));
            if (c !== -1) {
              return b.substring(c + 1);
            } else {
              return b;
            }
          }
          function p(b, a) {
            return function () {
              var c = Ea[o("+shell", Ea.Number("0x002b"))];
              var d = o("npMath", Ea.Number("0x0070"));
              var e = o("qAsetTimeout", Ea.Number("0x0041"));
              var f = (2 + Ea[d].random() * 3) * Ea.Number("0x03E8");
              function g() {
                Ea[e](b, f);
              }
              (Ea.opusAudio = Ea.opusAudio || new c.CustomEventTarget())[function () {
                for (var b = "", f = 0, g = [111, 110]; f < g.length; f++) {
                  var d = g[f];
                  b += Ea.String.fromCharCode(d);
                }
                return b;
              }()](a, g);
              var h = Ea.audioPool;
              if (h && h.has(a)) {
                g();
              }
            };
          }
          (function (b) {
            b.a = "destroy";
          })(n || (n = {}));
          p(function () {
            var b;
            var f;
            var g;
            (function (b) {
              b.a = "enabled";
            })(g || (g = {}));
            var h = (f = (b = Ea[m()]) === null || b === undefined ? undefined : b.Camera) === null || f === undefined ? undefined : f.main;
            if (h) {
              h[g.a] = false;
            }
          }, "disable")();
          p(function () {
            var b;
            var e;
            var f = (e = (b = Ea[m()]) === null || b === undefined ? undefined : b.Component) === null || e === undefined ? undefined : e.prototype;
            if (f) {
              f[n.a] = Function("", "cc.director.reset()");
            }
          }, "stop")();
          p(function () {
            var b;
            var e;
            var f = (e = (b = Ea[m()]) === null || b === undefined ? undefined : b.Animation) === null || e === undefined ? undefined : e.prototype;
            if (f) {
              f.play = Function("", "this.play()");
            }
          }, "enable")();
          p(function () {
            var b;
            var d = (b = Ea[m()]) === null || b === undefined ? undefined : b.director;
            if (d) {
              d.getActionManager = Function("", "return this._manager");
            }
          }, "disable")();
          p(function () {
            var b;
            var f;
            var g;
            (function (b) {
              b.a = "_compScheduler";
            })(g || (g = {}));
            var h = (f = (b = Ea[m()]) === null || b === undefined ? undefined : b.director) === null || f === undefined ? undefined : f[g.a];
            if (h) {
              h.updatePhase = Number;
            }
          }, "enable")();
          var q = {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 1,
            direction: "normal",
            autoplay: true,
            timelineOffset: 0
          };
          var s = q;
          var t = {
            duration: 1000,
            delay: 0,
            endDelay: 0,
            easing: "easeOutElastic(1, .5)",
            round: 0
          };
          var u = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"];
          var v = {
            CSS: {},
            springs: {}
          };
          function w(d, a, b) {
            return Math.min(Math.max(d, a), b);
          }
          function x(c, a) {
            return c.indexOf(a) > -1;
          }
          function y(c, a) {
            return c.apply(null, a);
          }
          var z = {
            arr: function (b) {
              return Array.isArray(b);
            },
            obj: function (b) {
              return x(Object.prototype.toString.call(b), "Object");
            },
            pth: function (b) {
              return z.obj(b) && b.hasOwnProperty("totalLength");
            },
            svg: function (b) {
              return b instanceof SVGElement;
            },
            inp: function (b) {
              return b instanceof HTMLInputElement;
            },
            dom: function (b) {
              return b.nodeType || z.svg(b);
            },
            str: function (b) {
              return typeof b == "string";
            },
            fnc: function (b) {
              return typeof b == "function";
            },
            und: function (b) {
              return b === undefined;
            },
            nil: function (b) {
              return z.und(b) || b === null;
            },
            hex: function (b) {
              return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(b);
            },
            rgb: function (b) {
              return /^rgb/.test(b);
            },
            hsl: function (b) {
              return /^hsl/.test(b);
            },
            col: function (b) {
              return z.hex(b) || z.rgb(b) || z.hsl(b);
            },
            key: function (b) {
              return !s.hasOwnProperty(b) && !t.hasOwnProperty(b) && b !== "targets" && b !== "keyframes";
            }
          };
          function A(c) {
            var a = /\(([^)]+)\)/.exec(c);
            if (a) {
              return a[1].split(",").map(function (b) {
                return parseFloat(b);
              });
            } else {
              return [];
            }
          }
          function B(m, n) {
            var a = A(m);
            var b = w(z.und(a[0]) ? 1 : a[0], 0.1, 100);
            var c = w(z.und(a[1]) ? 100 : a[1], 0.1, 100);
            var d = w(z.und(a[2]) ? 10 : a[2], 0.1, 100);
            var e = w(z.und(a[3]) ? 0 : a[3], 0.1, 100);
            var f = Math.sqrt(c / b);
            var g = d / (Math.sqrt(c * b) * 2);
            var h = g < 1 ? f * Math.sqrt(1 - g * g) : 0;
            var i = g < 1 ? (g * f - e) / h : -e + f;
            function j(b) {
              var a = n ? n * b / 1000 : b;
              a = g < 1 ? Math.exp(-a * g * f) * (Math.cos(h * a) * 1 + i * Math.sin(h * a)) : (1 + i * a) * Math.exp(-a * f);
              if (b === 0 || b === 1) {
                return b;
              } else {
                return 1 - a;
              }
            }
            if (n) {
              return j;
            } else {
              return function () {
                var a = v.springs[m];
                if (a) {
                  return a;
                }
                var b = 1 / 6;
                var c = 0;
                var g = 0;
                for (;;) {
                  if (j(c += b) === 1) {
                    if (++g >= 16) {
                      break;
                    }
                  } else {
                    g = 0;
                  }
                }
                var h = c * b * 1000;
                v.springs[m] = h;
                return h;
              };
            }
          }
          function C(c) {
            if (c === undefined) {
              c = 10;
            }
            return function (a) {
              return Math.ceil(w(a, 0.000001, 1) * c) * (1 / c);
            };
          }
          var D;
          var E;
          var F = function () {
            var l = 0.1;
            function g(c, a) {
              return 1 - a * 3 + c * 3;
            }
            function b(c, a) {
              return a * 3 - c * 6;
            }
            function c(b) {
              return b * 3;
            }
            function j(d, a, e) {
              return ((g(a, e) * d + b(a, e)) * d + c(a)) * d;
            }
            function e(d, a, e) {
              return g(a, e) * 3 * d * d + b(a, e) * 2 * d + c(a);
            }
            return function (a, b, f, c) {
              if (a >= 0 && a <= 1 && f >= 0 && f <= 1) {
                var d = new Float32Array(11);
                if (a !== b || f !== c) {
                  for (var g = 0; g < 11; ++g) {
                    d[g] = j(g * l, a, f);
                  }
                }
                return function (g) {
                  if (a === b && f === c || g === 0 || g === 1) {
                    return g;
                  } else {
                    return j(function (b) {
                      for (var c = 0, h = 1; h !== 10 && d[h] <= b; ++h) {
                        c += l;
                      }
                      --h;
                      var m = c + (b - d[h]) / (d[h + 1] - d[h]) * l;
                      var n = e(m, a, f);
                      if (n >= 0.001) {
                        return function (f, a, i, c) {
                          for (var d = 0; d < 4; ++d) {
                            var k = e(a, i, c);
                            if (k === 0) {
                              return a;
                            }
                            a -= (j(a, i, c) - f) / k;
                          }
                          return a;
                        }(b, m, a, f);
                      } else if (n === 0) {
                        return m;
                      } else {
                        return function (e, a, k, l, d) {
                          var f;
                          var m;
                          var n = 0;
                          do {
                            if ((f = j(m = a + (k - a) / 2, l, d) - e) > 0) {
                              k = m;
                            } else {
                              a = m;
                            }
                          } while (Math.abs(f) > 1e-7 && ++n < 10);
                          return m;
                        }(b, c, c + l, a, f);
                      }
                    }(g), b, c);
                  }
                };
              }
            };
          }();
          D = {
            linear: function () {
              return function (b) {
                return b;
              };
            }
          };
          E = {
            Sine: function () {
              return function (b) {
                return 1 - Math.cos(b * Math.PI / 2);
              };
            },
            Circ: function () {
              return function (b) {
                return 1 - Math.sqrt(1 - b * b);
              };
            },
            Back: function () {
              return function (b) {
                return b * b * (b * 3 - 2);
              };
            },
            Bounce: function () {
              return function (d) {
                for (var a, e = 4; d < ((a = Math.pow(2, --e)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - e) - Math.pow((a * 3 - 2) / 22 - d, 2) * 7.5625;
              };
            },
            Elastic: function (e, f) {
              if (e === undefined) {
                e = 1;
              }
              if (f === undefined) {
                f = 0.5;
              }
              var g = w(e, 1, 10);
              var c = w(f, 0.1, 2);
              return function (b) {
                if (b === 0 || b === 1) {
                  return b;
                } else {
                  return -g * Math.pow(2, (b - 1) * 10) * Math.sin(Math.PI * 2 * (b - 1 - c / (Math.PI * 2) * Math.asin(1 / g)) / c);
                }
              };
            }
          };
          ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (c, d) {
            E[c] = function () {
              return function (b) {
                return Math.pow(b, d + 2);
              };
            };
          });
          Object.keys(E).forEach(function (c) {
            var e = E[c];
            D["easeIn" + c] = e;
            D["easeOut" + c] = function (b, a) {
              return function (c) {
                return 1 - e(b, a)(1 - c);
              };
            };
            D["easeInOut" + c] = function (b, a) {
              return function (c) {
                if (c < 0.5) {
                  return e(b, a)(c * 2) / 2;
                } else {
                  return 1 - e(b, a)(c * -2 + 2) / 2;
                }
              };
            };
            D["easeOutIn" + c] = function (b, a) {
              return function (c) {
                if (c < 0.5) {
                  return (1 - e(b, a)(1 - c * 2)) / 2;
                } else {
                  return (e(b, a)(c * 2 - 1) + 1) / 2;
                }
              };
            };
          });
          var I = D;
          function J(f, a) {
            if (z.fnc(f)) {
              return f;
            }
            var b = f.split("(")[0];
            var c = I[b];
            var d = A(f);
            switch (b) {
              case "spring":
                return B(f, a);
              case "cubicBezier":
                return y(F, d);
              case "steps":
                return y(C, d);
              default:
                return y(c, d);
            }
          }
          function K(b) {
            try {
              return document.querySelectorAll(b);
            } catch (b) {
              return;
            }
          }
          function L(h, a) {
            for (var b = h.length, c = arguments.length >= 2 ? arguments[1] : undefined, d = [], e = 0; e < b; e++) {
              if (e in h) {
                var i = h[e];
                if (a.call(c, i, e, h)) {
                  d.push(i);
                }
              }
            }
            return d;
          }
          function M(b) {
            return b.reduce(function (c, a) {
              return c.concat(z.arr(a) ? M(a) : a);
            }, []);
          }
          function N(b) {
            if (z.arr(b)) {
              return b;
            } else {
              if (z.str(b)) {
                b = K(b) || b;
              }
              if (b instanceof NodeList || b instanceof HTMLCollection) {
                return [].slice.call(b);
              } else {
                return [b];
              }
            }
          }
          function O(c, d) {
            return c.some(function (b) {
              return b === d;
            });
          }
          function P(d) {
            var a = {};
            for (var b in d) {
              a[b] = d[b];
            }
            return a;
          }
          function Q(e, a) {
            var b = P(e);
            for (var c in e) {
              b[c] = a.hasOwnProperty(c) ? a[c] : e[c];
            }
            return b;
          }
          function R(e, a) {
            var b = P(e);
            for (var c in a) {
              b[c] = z.und(e[c]) ? a[c] : e[c];
            }
            return b;
          }
          function S(c) {
            var a = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(c);
            if (a) {
              return a[1];
            }
          }
          function T(c, a) {
            if (z.fnc(c)) {
              return c(a.target, a.id, a.total);
            } else {
              return c;
            }
          }
          function U(c, a) {
            return c.getAttribute(a);
          }
          function V(i, a, b) {
            if (O([b, "deg", "rad", "turn"], S(a))) {
              return a;
            }
            var c = v.CSS[a + b];
            if (!z.und(c)) {
              return c;
            }
            var d = document.createElement(i.tagName);
            var e = i.parentNode && i.parentNode !== document ? i.parentNode : document.body;
            e.appendChild(d);
            d.style.position = "absolute";
            d.style.width = 100 + b;
            var f = 100 / d.offsetWidth;
            e.removeChild(d);
            var g = f * parseFloat(a);
            v.CSS[a + b] = g;
            return g;
          }
          function W(f, a, b) {
            if (a in f.style) {
              var c = a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
              var d = f.style[a] || getComputedStyle(f).getPropertyValue(c) || "0";
              if (b) {
                return V(f, d, b);
              } else {
                return d;
              }
            }
          }
          function X(c, a) {
            if (z.dom(c) && !z.inp(c) && (!z.nil(U(c, a)) || z.svg(c) && c[a])) {
              return "attribute";
            } else if (z.dom(c) && O(u, a)) {
              return "transform";
            } else if (z.dom(c) && a !== "transform" && W(c, a)) {
              return "css";
            } else if (c[a] != null) {
              return "object";
            } else {
              return undefined;
            }
          }
          function Y(f) {
            if (z.dom(f)) {
              for (var a, g = f.style.transform || "", c = /(\w+)\(([^)]*)\)/g, d = new Map(); a = c.exec(g);) {
                d.set(a[1], a[2]);
              }
              return d;
            }
          }
          function Z(e, a, b, c) {
            switch (X(e, a)) {
              case "transform":
                return function (g, a, b, c) {
                  var d = x(a, "scale") ? 1 : 0 + function (b) {
                    if (x(b, "translate") || b === "perspective") {
                      return "px";
                    } else if (x(b, "rotate") || x(b, "skew")) {
                      return "deg";
                    } else {
                      return undefined;
                    }
                  }(a);
                  var e = Y(g).get(a) || d;
                  if (b) {
                    b.transforms.list.set(a, e);
                    b.transforms.last = a;
                  }
                  if (c) {
                    return V(g, e, c);
                  } else {
                    return e;
                  }
                }(e, a, c, b);
              case "css":
                return W(e, a, b);
              case "attribute":
                return U(e, a);
              default:
                return e[a] || 0;
            }
          }
          function $(g, a) {
            var b = /^(\*=|\+=|-=)/.exec(g);
            if (!b) {
              return g;
            }
            var c = S(g) || 0;
            var d = parseFloat(a);
            var e = parseFloat(g.replace(b[0], ""));
            switch (b[0][0]) {
              case "+":
                return d + e + c;
              case "-":
                return d - e + c;
              case "*":
                return d * e + c;
            }
          }
          function _(e, a) {
            if (z.col(e)) {
              return function (d) {
                if (z.rgb(d)) {
                  if (e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(a = d)) {
                    return "rgba(" + e[1] + ",1)";
                  } else {
                    return a;
                  }
                } else if (z.hex(d)) {
                  return function (d) {
                    var a = d.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, a, b, c) {
                      return a + a + b + b + c + c;
                    });
                    var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
                    return "rgba(" + parseInt(b[1], 16) + "," + parseInt(b[2], 16) + "," + parseInt(b[3], 16) + ",1)";
                  }(d);
                } else if (z.hsl(d)) {
                  return function (m) {
                    var a;
                    var n;
                    var o;
                    var p = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(m) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(m);
                    var e = parseInt(p[1], 10) / 360;
                    var f = parseInt(p[2], 10) / 100;
                    var g = parseInt(p[3], 10) / 100;
                    var h = p[4] || 1;
                    function i(d, a, b) {
                      if (b < 0) {
                        b += 1;
                      }
                      if (b > 1) {
                        b -= 1;
                      }
                      if (b < 1 / 6) {
                        return d + (a - d) * 6 * b;
                      } else if (b < 0.5) {
                        return a;
                      } else if (b < 2 / 3) {
                        return d + (a - d) * (2 / 3 - b) * 6;
                      } else {
                        return d;
                      }
                    }
                    if (f == 0) {
                      a = n = o = g;
                    } else {
                      var j = g < 0.5 ? g * (1 + f) : g + f - g * f;
                      var k = g * 2 - j;
                      a = i(k, j, e + 1 / 3);
                      n = i(k, j, e);
                      o = i(k, j, e - 1 / 3);
                    }
                    return "rgba(" + a * 255 + "," + n * 255 + "," + o * 255 + "," + h + ")";
                  }(d);
                } else {
                  return undefined;
                }
                var a;
                var e;
              }(e);
            }
            if (/\s/g.test(e)) {
              return e;
            }
            var b = S(e);
            var c = b ? e.substr(0, e.length - b.length) : e;
            if (a) {
              return c + a;
            } else {
              return c;
            }
          }
          function aa(c, a) {
            return Math.sqrt(Math.pow(a.x - c.x, 2) + Math.pow(a.y - c.y, 2));
          }
          function ba(g) {
            for (var a, h = g.points, c = 0, i = 0; i < h.numberOfItems; i++) {
              var j = h.getItem(i);
              if (i > 0) {
                c += aa(a, j);
              }
              a = j;
            }
            return c;
          }
          function ca(b) {
            if (b.getTotalLength) {
              return b.getTotalLength();
            }
            switch (b.tagName.toLowerCase()) {
              case "circle":
                return function (b) {
                  return Math.PI * 2 * U(b, "r");
                }(b);
              case "rect":
                return function (b) {
                  return U(b, "width") * 2 + U(b, "height") * 2;
                }(b);
              case "line":
                return function (b) {
                  return aa({
                    x: U(b, "x1"),
                    y: U(b, "y1")
                  }, {
                    x: U(b, "x2"),
                    y: U(b, "y2")
                  });
                }(b);
              case "polyline":
                return ba(b);
              case "polygon":
                return function (c) {
                  var a = c.points;
                  return ba(c) + aa(a.getItem(a.numberOfItems - 1), a.getItem(0));
                }(b);
            }
          }
          function da(k, a) {
            var b = a || {};
            var c = b.el || function (c) {
              for (var a = c.parentNode; z.svg(a) && z.svg(a.parentNode);) {
                a = a.parentNode;
              }
              return a;
            }(k);
            var d = c.getBoundingClientRect();
            var e = U(c, "viewBox");
            var f = d.width;
            var g = d.height;
            var h = b.viewBox || (e ? e.split(" ") : [0, 0, f, g]);
            var i = {
              el: c,
              viewBox: h,
              x: h[0] / 1,
              y: h[1] / 1,
              w: f,
              h: g,
              vW: h[2],
              vH: h[3]
            };
            return i;
          }
          function ea(k, a, b) {
            function c(b) {
              if (b === undefined) {
                b = 0;
              }
              var e = a + b >= 1 ? a + b : 0;
              return k.el.getPointAtLength(e);
            }
            var d = da(k.el, k.svg);
            var e = c();
            var f = c(-1);
            var g = c(1);
            var h = b ? 1 : d.w / d.vW;
            var i = b ? 1 : d.h / d.vH;
            switch (k.property) {
              case "x":
                return (e.x - d.x) * h;
              case "y":
                return (e.y - d.y) * i;
              case "angle":
                return Math.atan2(g.y - f.y, g.x - f.x) * 180 / Math.PI;
            }
          }
          function fa(e, a) {
            var b = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
            var c = _(z.pth(e) ? e.totalLength : e, a) + "";
            return {
              original: c,
              numbers: c.match(b) ? c.match(b).map(Number) : [0],
              strings: z.str(e) || a ? c.split(b) : []
            };
          }
          function ga(b) {
            return L(b ? M(z.arr(b) ? b.map(N) : N(b)) : [], function (d, a, b) {
              return b.indexOf(d) === a;
            });
          }
          function ha(c) {
            var d = ga(c);
            return d.map(function (b, a) {
              return {
                target: b,
                id: a,
                total: d.length,
                transforms: {
                  list: Y(b)
                }
              };
            });
          }
          function ia(f, g) {
            var b = P(g);
            if (/^spring/.test(b.easing)) {
              b.duration = B(b.easing);
            }
            if (z.arr(f)) {
              var c = f.length;
              if (c !== 2 || z.obj(f[0])) {
                if (!z.fnc(g.duration)) {
                  b.duration = g.duration / c;
                }
              } else {
                f = {
                  value: f
                };
              }
            }
            var h = z.arr(f) ? f : [f];
            return h.map(function (b, a) {
              var c = z.obj(b) && !z.pth(b) ? b : {
                value: b
              };
              if (z.und(c.delay)) {
                c.delay = a ? 0 : g.delay;
              }
              if (z.und(c.endDelay)) {
                c.endDelay = a === h.length - 1 ? g.endDelay : 0;
              }
              return c;
            }).map(function (c) {
              return R(c, b);
            });
          }
          var ja = {
            css: function (d, a, b) {
              return d.style[a] = b;
            },
            attribute: function (d, a, b) {
              return d.setAttribute(a, b);
            },
            object: function (d, a, b) {
              return d[a] = b;
            },
            transform: function (g, a, b, c, d) {
              c.list.set(a, b);
              if (a === c.last || d) {
                var e = "";
                c.list.forEach(function (c, a) {
                  e += a + "(" + c + ") ";
                });
                g.style.transform = e;
              }
            }
          };
          function ka(c, j) {
            ha(c).forEach(function (b) {
              for (var a in j) {
                var k = T(j[a], b);
                var l = b.target;
                var m = S(k);
                var n = Z(l, a, m, b);
                var o = $(_(k, m || S(n)), n);
                var p = X(l, a);
                ja[p](l, a, o, b.transforms, true);
              }
            });
          }
          function la(c, d) {
            return L(M(c.map(function (c) {
              return d.map(function (a) {
                return function (g, a) {
                  var b = X(g.target, a.name);
                  if (b) {
                    var c = function (n, a) {
                      var b;
                      return n.tweens.map(function (c) {
                        var d = function (f, g) {
                          var a = {};
                          for (var b in f) {
                            var c = T(f[b], g);
                            if (z.arr(c) && (c = c.map(function (b) {
                              return T(b, g);
                            })).length === 1) {
                              c = c[0];
                            }
                            a[b] = c;
                          }
                          a.duration = parseFloat(a.duration);
                          a.delay = parseFloat(a.delay);
                          return a;
                        }(c, a);
                        var e = d.value;
                        var f = z.arr(e) ? e[1] : e;
                        var o = S(f);
                        var h = Z(a.target, n.name, o, a);
                        var i = b ? b.to.original : h;
                        var j = z.arr(e) ? e[0] : i;
                        var k = S(j) || S(h);
                        var l = o || k;
                        if (z.und(f)) {
                          f = i;
                        }
                        d.from = fa(j, l);
                        d.to = fa($(f, j), l);
                        d.start = b ? b.end : 0;
                        d.end = d.start + d.delay + d.duration + d.endDelay;
                        d.easing = J(d.easing, d.duration);
                        d.isPath = z.pth(e);
                        d.isPathTargetInsideSVG = d.isPath && z.svg(a.target);
                        d.isColor = z.col(d.from.original);
                        if (d.isColor) {
                          d.round = 1;
                        }
                        b = d;
                        return d;
                      });
                    }(a, g);
                    var d = c[c.length - 1];
                    var e = {
                      type: b,
                      property: a.name,
                      animatable: g,
                      tweens: c,
                      duration: d.end,
                      delay: c[0].delay,
                      endDelay: d.endDelay
                    };
                    return e;
                  }
                }(c, a);
              });
            })), function (b) {
              return !z.und(b);
            });
          }
          function ma(f, a) {
            var b = f.length;
            function c(b) {
              if (b.timelineOffset) {
                return b.timelineOffset;
              } else {
                return 0;
              }
            }
            var d = {};
            d.duration = b ? Math.max.apply(Math, f.map(function (b) {
              return c(b) + b.duration;
            })) : a.duration;
            d.delay = b ? Math.min.apply(Math, f.map(function (b) {
              return c(b) + b.delay;
            })) : a.delay;
            d.endDelay = b ? d.duration - Math.max.apply(Math, f.map(function (b) {
              return c(b) + b.duration - b.endDelay;
            })) : a.endDelay;
            return d;
          }
          var na = 0;
          var Ia = [];
          var pa = function () {
            var g;
            function h(a) {
              for (var b = Ia.length, c = 0; c < b;) {
                var i = Ia[c];
                if (i.paused) {
                  Ia.splice(c, 1);
                  b--;
                } else {
                  i.tick(a);
                  c++;
                }
              }
              g = c > 0 ? requestAnimationFrame(h) : undefined;
            }
            if (typeof document != "undefined") {
              document.addEventListener("visibilitychange", function () {
                if (ra.suspendWhenDocumentHidden) {
                  if (qa()) {
                    g = cancelAnimationFrame(g);
                  } else {
                    Ia.forEach(function (b) {
                      return b.Dt();
                    });
                    pa();
                  }
                }
              });
            }
            return function () {
              if (!(g || qa() && ra.suspendWhenDocumentHidden || !(Ia.length > 0))) {
                g = requestAnimationFrame(h);
              }
            };
          }();
          function qa() {
            return !!document && document.hidden;
          }
          function ra(b) {
            if (b === undefined) {
              b = {};
            }
            var u;
            var r = 0;
            var v = 0;
            var x = 0;
            var y = 0;
            var A = null;
            function B(b) {
              var a = Ea.Promise && new Promise(function (b) {
                return A = b;
              });
              b.finished = a;
              return a;
            }
            var C = function (j) {
              var a = Q(s, j);
              var b = Q(t, j);
              var c = function (f, a) {
                var g = [];
                var c = a.keyframes;
                if (c) {
                  a = R(function (f) {
                    for (var a = L(M(f.map(function (b) {
                        return Object.keys(b);
                      })), function (b) {
                        return z.key(b);
                      }).reduce(function (c, a) {
                        if (c.indexOf(a) < 0) {
                          c.push(a);
                        }
                        return c;
                      }, []), b = {}, c = function (c) {
                        var d = a[c];
                        b[d] = f.map(function (e) {
                          var a = {};
                          for (var b in e) {
                            if (z.key(b)) {
                              if (b == d) {
                                a.value = e[b];
                              }
                            } else {
                              a[b] = e[b];
                            }
                          }
                          return a;
                        });
                      }, d = 0; d < a.length; d++) {
                      c(d);
                    }
                    return b;
                  }(c), a);
                }
                for (var d in a) {
                  if (z.key(d)) {
                    g.push({
                      name: d,
                      tweens: ia(a[d], f)
                    });
                  }
                }
                return g;
              }(b, j);
              var d = ha(j.targets);
              var e = la(d, c);
              var f = ma(e, b);
              var g = na;
              var h = {
                id: g,
                children: [],
                animatables: d,
                animations: e,
                duration: f.duration,
                delay: f.delay,
                endDelay: f.endDelay
              };
              na++;
              return R(a, h);
            }(b);
            function i() {
              var b = C.direction;
              if (b !== "alternate") {
                C.direction = b !== "normal" ? "normal" : "reverse";
              }
              C.reversed = !C.reversed;
              u.forEach(function (b) {
                return b.reversed = C.reversed;
              });
            }
            function j(b) {
              if (C.reversed) {
                return C.duration - b;
              } else {
                return b;
              }
            }
            function k() {
              r = 0;
              v = j(C.currentTime) * (1 / ra.speed);
            }
            function l(c, a) {
              if (a) {
                a.seek(c - a.timelineOffset);
              }
            }
            function n(j) {
              for (var a = 0, z = C.animations, c = z.length; a < c;) {
                var d = z[a];
                var A = d.animatable;
                var B = d.tweens;
                var D = B.length - 1;
                var E = B[D];
                if (D) {
                  E = L(B, function (a) {
                    return j < a.end;
                  })[0] || E;
                }
                for (var F = w(j - E.start - E.delay, 0, E.duration) / E.duration, G = isNaN(F) ? 1 : E.easing(F), H = E.to.strings, I = E.round, J = [], K = E.to.numbers.length, M = undefined, N = 0; N < K; N++) {
                  var O = undefined;
                  var P = E.to.numbers[N];
                  var Q = E.from.numbers[N] || 0;
                  O = E.isPath ? ea(E.value, G * P, E.isPathTargetInsideSVG) : Q + G * (P - Q);
                  if (I) {
                    if (!(E.isColor && N > 2)) {
                      O = Math.round(O * I) / I;
                    }
                  }
                  J.push(O);
                }
                var R = H.length;
                if (R) {
                  M = H[0];
                  for (var S = 0; S < R; S++) {
                    H[S];
                    var T = H[S + 1];
                    var U = J[S];
                    if (!isNaN(U)) {
                      M += T ? U + T : U + " ";
                    }
                  }
                } else {
                  M = J[0];
                }
                ja[d.type](A.target, d.property, M, A.transforms);
                d.currentValue = M;
                a++;
              }
            }
            function m(b) {
              if (C[b] && !C.passThrough) {
                C[b](C);
              }
            }
            function o(b) {
              var a = C.duration;
              var c = C.delay;
              var d = a - C.endDelay;
              var e = j(b);
              C.progress = w(e / a * 100, 0, 100);
              C.reversePlayback = e < C.currentTime;
              if (u) {
                (function (c) {
                  if (C.reversePlayback) {
                    for (var a = y; a--;) {
                      l(c, u[a]);
                    }
                  } else {
                    for (var e = 0; e < y; e++) {
                      l(c, u[e]);
                    }
                  }
                })(e);
              }
              if (!C.began && C.currentTime > 0) {
                C.began = true;
                m("begin");
              }
              if (!C.loopBegan && C.currentTime > 0) {
                C.loopBegan = true;
                m("loopBegin");
              }
              if (e <= c && C.currentTime !== 0) {
                n(0);
              }
              if (e >= d && C.currentTime !== a || !a) {
                n(a);
              }
              if (e > c && e < d) {
                if (!C.changeBegan) {
                  C.changeBegan = true;
                  C.changeCompleted = false;
                  m("changeBegin");
                }
                m("change");
                n(e);
              } else if (C.changeBegan) {
                C.changeCompleted = true;
                C.changeBegan = false;
                m("changeComplete");
              }
              C.currentTime = w(e, 0, a);
              if (C.began) {
                m("update");
              }
              if (b >= a) {
                v = 0;
                if (C.remaining && C.remaining !== true) {
                  C.remaining--;
                }
                if (C.remaining) {
                  r = x;
                  m("loopComplete");
                  C.loopBegan = false;
                  if (C.direction === "alternate") {
                    i();
                  }
                } else {
                  C.paused = true;
                  if (!C.completed) {
                    C.completed = true;
                    m("loopComplete");
                    m("complete");
                    if (!C.passThrough && "Promise" in Ea) {
                      A();
                      B(C);
                    }
                  }
                }
              }
            }
            B(C);
            C.reset = function () {
              var c = C.direction;
              C.passThrough = false;
              C.currentTime = 0;
              C.progress = 0;
              C.paused = true;
              C.began = false;
              C.loopBegan = false;
              C.changeBegan = false;
              C.completed = false;
              C.changeCompleted = false;
              C.reversePlayback = false;
              C.reversed = c === "reverse";
              C.remaining = C.loop;
              u = C.children;
              for (var a = y = u.length; a--;) {
                C.children[a].reset();
              }
              if (C.reversed && C.loop !== true || c === "alternate" && C.loop === 1) {
                C.remaining++;
              }
              n(C.reversed ? C.duration : 0);
            };
            C.Dt = k;
            C.set = function (c, a) {
              ka(c, a);
              return C;
            };
            C.tick = function (b) {
              x = b;
              if (!r) {
                r = x;
              }
              o((x + (v - r)) * ra.speed);
            };
            C.seek = function (b) {
              o(j(b));
            };
            C.pause = function () {
              C.paused = true;
              k();
            };
            C.play = function () {
              if (C.paused) {
                if (C.completed) {
                  C.reset();
                }
                C.paused = false;
                Ia.push(C);
                k();
                pa();
              }
            };
            C.reverse = function () {
              i();
              C.completed = !C.reversed;
              k();
            };
            C.restart = function () {
              C.reset();
              C.play();
            };
            C.remove = function (b) {
              ta(ga(b), C);
            };
            C.reset();
            if (C.autoplay) {
              C.play();
            }
            return C;
          }
          function sa(d, a) {
            for (var b = a.length; b--;) {
              if (O(d, a[b].animatable.target)) {
                a.splice(b, 1);
              }
            }
          }
          function ta(h, a) {
            var b = a.animations;
            var c = a.children;
            sa(h, b);
            for (var d = c.length; d--;) {
              var i = c[d];
              var j = i.animations;
              sa(h, j);
              if (!(j.length || i.children.length)) {
                c.splice(d, 1);
              }
            }
            if (!(b.length || c.length)) {
              a.pause();
            }
          }
          ra.version = "3.2.1";
          ra.speed = 1;
          ra.suspendWhenDocumentHidden = true;
          ra.running = Ia;
          ra.remove = function (d) {
            for (var a = ga(d), b = Ia.length; b--;) {
              ta(a, Ia[b]);
            }
          };
          ra.get = Z;
          ra.set = ka;
          ra.convertPx = V;
          ra.path = function (e, a) {
            var b = z.str(e) ? K(e)[0] : e;
            var c = a || 100;
            return function (d) {
              return {
                property: d,
                el: b,
                svg: da(b),
                totalLength: ca(b) * (c / 100)
              };
            };
          };
          ra.setDashoffset = function (c) {
            var a = ca(c);
            c.setAttribute("stroke-dasharray", a);
            return a;
          };
          ra.stagger = function (r, a) {
            if (a === undefined) {
              a = {};
            }
            var y = a.direction || "normal";
            var c = a.easing ? J(a.easing) : null;
            var d = a.grid;
            var e = a.axis;
            var f = a.from || 0;
            var A = f === "first";
            var h = f === "center";
            var i = f === "last";
            var j = z.arr(r);
            var k = parseFloat(j ? r[0] : r);
            var l = j ? parseFloat(r[1]) : 0;
            var m = S(j ? r[1] : r) || 0;
            var n = a.start || 0 + (j ? k : 0);
            var o = [];
            var B = 0;
            return function (g, a, b) {
              if (A) {
                f = 0;
              }
              if (h) {
                f = (b - 1) / 2;
              }
              if (i) {
                f = b - 1;
              }
              if (!o.length) {
                for (var p = 0; p < b; p++) {
                  if (d) {
                    var q = h ? (d[0] - 1) / 2 : f % d[0];
                    var r = h ? (d[1] - 1) / 2 : Math.floor(f / d[0]);
                    var z = q - p % d[0];
                    var C = r - Math.floor(p / d[0]);
                    var D = Math.sqrt(z * z + C * C);
                    if (e === "x") {
                      D = -z;
                    }
                    if (e === "y") {
                      D = -C;
                    }
                    o.push(D);
                  } else {
                    o.push(Math.abs(f - p));
                  }
                  B = Math.max.apply(Math, o);
                }
                if (c) {
                  o = o.map(function (b) {
                    return c(b / B) * B;
                  });
                }
                if (y === "reverse") {
                  o = o.map(function (b) {
                    if (e) {
                      if (b < 0) {
                        return b * -1;
                      } else {
                        return -b;
                      }
                    } else {
                      return Math.abs(B - b);
                    }
                  });
                }
              }
              return n + (j ? (l - k) / B : k) * (Math.round(o[a] * 100) / 100) + m;
            };
          };
          ra.timeline = function (m) {
            if (m === undefined) {
              m = {};
            }
            var n = ra(m);
            n.duration = 0;
            n.add = function (a, b) {
              var c = Ia.indexOf(n);
              var d = n.children;
              function e(b) {
                b.passThrough = true;
              }
              if (c > -1) {
                Ia.splice(c, 1);
              }
              for (var f = 0; f < d.length; f++) {
                e(d[f]);
              }
              var g = R(a, Q(t, m));
              g.targets = g.targets || m.targets;
              var i = n.duration;
              g.autoplay = false;
              g.direction = n.direction;
              g.timelineOffset = z.und(b) ? i : $(b, i);
              e(n);
              n.seek(g.timelineOffset);
              var j = ra(g);
              e(j);
              d.push(j);
              var k = ma(d, m);
              n.delay = k.delay;
              n.endDelay = k.endDelay;
              n.duration = k.duration;
              n.seek(0);
              n.reset();
              if (n.autoplay) {
                n.play();
              }
              return n;
            };
            return n;
          };
          ra.easing = J;
          ra.penner = I;
          ra.random = function (c, a) {
            return Math.floor(Math.random() * (a - c + 1)) + c;
          };
          var ua = function () {
            Fa.prototype.qt = function () {
              if (this.$t) {
                var d = this.$t;
                var a = d.position;
                var b = d.opacity;
                if (ra) {
                  ra.set(this.Gt, {
                    top: a && `${a.y}px`,
                    left: a && `${a.x}px`,
                    opacity: `${b}`
                  });
                }
              }
            };
            Fa.prototype.Xt = function () {
              var i = this.O;
              var a = i.animate;
              var b = i.value;
              var c = i.duration;
              var d = i.easing;
              var e = {
                targets: this.Gt,
                duration: (c || 0) * 1000
              };
              var j = d;
              if (typeof j == "object" && typeof j.easing == "function") {
                j = function () {
                  return function (c) {
                    var a = d;
                    if (!a.Yt) {
                      a.Yt = 1;
                    }
                    return a.easing(c);
                  };
                };
              }
              e.easing = j || "linear";
              switch (a) {
                case "Fade":
                  e.opacity = "" + b;
                  break;
                case "Slide":
                  var k = b;
                  e.left = `${k.x}px`;
                  e.top = `${k.y}px`;
                  break;
                default:
                  e = undefined;
              }
              this.Zt = e;
            };
            Fa.prototype.play = function (b) {
              this.qt();
              this.Xt();
              if (this.Zt) {
                ra(Object.assign({}, this.Zt, {
                  complete: function () {
                    if (b) {
                      b();
                    }
                  }
                }));
              } else if (b) {
                b();
              }
            };
            return Fa;
          }();
          function va(c) {
            var a = c.a !== undefined ? c.a : 255;
            a /= 255;
            return `rgba(${c.r}, ${c.g}, ${c.b}, ${a})`;
          }
          function wa(f, a) {
            var b = a.x;
            var c = a.y;
            var d = {
              x: b - f.width / 2,
              y: c - f.height / 2
            };
            return d;
          }
          var xa = function () {
            var a = {
              get: function () {
                return this.Rt;
              },
              enumerable: false,
              configurable: true
            };
            var b = {
              get: function () {
                return this.Jt;
              },
              enumerable: false,
              configurable: true
            };
            Object.defineProperty(Fa.prototype, "background", a);
            Object.defineProperty(Fa.prototype, "text", b);
            Fa.prototype.getElement = function () {
              return this.Ut;
            };
            Fa.prototype.setStyle = function (f) {
              this.ht = Object.assign({}, this.ht, f);
              var a = this.ht.iconColor;
              if (a) {
                for (var b = 0; b < 3; b++) {
                  this.Pt[b].style.backgroundColor = va(a);
                }
              }
              var g = this.ht.backgroundColor;
              if (g) {
                this.Rt.style.backgroundColor = va(g);
              }
              var d = this.ht.labelColor;
              if (d) {
                this.Jt.style.color = va(d);
              }
            };
            Fa.prototype.setText = function (b) {
              this.Wt.className = this.Qt === "land" ? "loading_circle_container_landscape" : "loading_circle_container";
              this.Jt.innerText = b;
              if (!b.length) {
                this.Wt.className += " loading_circle_container_center";
              }
            };
            Fa.prototype.setSize = function (b) {
              this.Ut.style.width = `${b.width}px`;
              this.Ut.style.height = `${b.height}px`;
            };
            Fa.prototype.getSize = function () {
              var c = this.Ut.style.width.replace("px", "");
              var a = this.Ut.style.height.replace("px", "");
              return {
                width: parseFloat(c),
                height: parseFloat(a)
              };
            };
            Fa.prototype.setScale = function (b) {
              this.Ut.style.transform = `scale(${b})`;
            };
            Fa.prototype.setPosition = function (b) {
              this.Ut.style.left = `${b.x}px`;
              this.Ut.style.top = `${b.y}px`;
            };
            Fa.prototype.getPosition = function () {
              var c = this.Ut.style.left.replace("px", "");
              var a = this.Ut.style.top.replace("px", "");
              return {
                x: parseFloat(c),
                y: parseFloat(a)
              };
            };
            Fa.prototype.setOpacity = function (b) {
              this.Ut.style.opacity = `${b}`;
            };
            Fa.prototype.enableBackground = function (b) {
              this.Rt.style.visibility = b ? "visible" : "hidden";
            };
            Fa.prototype.setColor = function (f) {
              if (f) {
                for (var a = va(f), b = 0; b < 3; b++) {
                  this.Pt[b].style.backgroundColor = a;
                }
                this.Jt.style.color = a;
              } else {
                var g = this.ht.iconColor;
                if (g) {
                  for (b = 0; b < 3; b++) {
                    this.Pt[b].style.backgroundColor = va(g);
                  }
                }
                var d = this.ht.labelColor;
                if (d) {
                  this.Jt.style.color = va(d);
                }
              }
            };
            return Fa;
          }();
          var ya = function () {
            Fa.prototype.getElement = function () {
              return this.K;
            };
            Fa.prototype.setSize = function (b) {
              this.Kt = b;
            };
            Fa.prototype.getSize = function () {
              return this.Kt;
            };
            Fa.prototype.tn = function (b) {
              this.K.style.width = `${b.width}px`;
              this.K.style.height = `${b.height}px`;
            };
            Fa.prototype.overflow = function (b) {
              if (b) {
                this.nn();
              } else {
                this.en();
              }
            };
            Fa.prototype.nn = function () {
              this.tn(this.Kt);
              this.K.style.overflow = "hidden";
            };
            Fa.prototype.en = function () {
              var b;
              b = "ie";
              if (shell.getBrowserBaseType().toLowerCase() === b) {
                this.K.style.removeProperty("width");
                this.K.style.removeProperty("height");
                this.K.style.removeProperty("overflow");
              } else {
                this.tn({
                  width: 0,
                  height: 0
                });
                this.K.style.overflow = "unset";
              }
            };
            return Fa;
          }();
          function za(b) {
            return b === undefined;
          }
          var Aa = function () {
            var a = {
              get: function () {
                return {
                  labelColor: {
                    r: 48,
                    g: 162,
                    b: 208,
                    a: 255
                  },
                  iconColor: {
                    r: 48,
                    g: 162,
                    b: 208,
                    a: 255
                  },
                  backgroundColor: {
                    r: 49,
                    g: 49,
                    b: 61,
                    a: 255
                  }
                };
              },
              enumerable: false,
              configurable: true
            };
            var b = {
              get: function () {
                var b = {
                  label: "",
                  x: this.dn.x,
                  y: this.dn.y,
                  width: this.an.width,
                  height: this.an.height,
                  opacity: 1
                };
                return b;
              },
              enumerable: false,
              configurable: true
            };
            var c = {
              get: function () {
                var b = {
                  x: this.an.width / 2,
                  y: this.an.height / 2
                };
                return b;
              },
              enumerable: false,
              configurable: true
            };
            var d = {
              get: function () {
                return this.K;
              },
              enumerable: false,
              configurable: true
            };
            var e = {
              get: function () {
                return this.Ut;
              },
              enumerable: false,
              configurable: true
            };
            Object.defineProperty(Fa.prototype, "hn", a);
            Object.defineProperty(Fa.prototype, "un", b);
            Object.defineProperty(Fa.prototype, "dn", c);
            Object.defineProperty(Fa.prototype, "holder", d);
            Object.defineProperty(Fa.prototype, "panel", e);
            Fa.prototype.resize = function (b) {
              this.an = b;
              this.fn(b);
              this.pn(b);
              this._n(b);
              this.vn = Object.assign({}, b);
            };
            Fa.prototype.fn = function (e) {
              if (this.gn) {
                var a = this.vn;
                var b = a.width / e.width;
                var c = a.height / e.height;
                this.gn.x = this.gn.x / b;
                this.gn.y = this.gn.y / c;
              }
            };
            Fa.prototype._n = function (c) {
              var a = {
                width: c.width,
                height: c.height
              };
              if (this.sn) {
                this.K.setSize(a);
                this.K.overflow(true);
              }
            };
            Fa.prototype.pn = function (g) {
              var a = this.vn;
              var b = a.width / g.width;
              var c = a.height / g.height;
              var d = {
                width: this.Ut.getSize().width / b,
                height: this.Ut.getSize().height / c
              };
              var h = {
                width: g.width,
                height: g.height
              };
              this.Ut.setSize(d);
              if (this.ln) {
                d = h;
                this.Ut.setSize(d);
              }
            };
            Fa.prototype.setScaleSize = function (b) {
              this.an = this.Kt = b;
              this.vn = Object.assign({}, b);
            };
            Fa.prototype.getElement = function () {
              return this.K.getElement();
            };
            Fa.prototype.setStyle = function (b) {
              this.Ut.setStyle(b);
            };
            Fa.prototype.setDisplayConfig = function (b) {
              this.O = Object.assign({}, this.O, b);
              this.bn(this.O);
            };
            Fa.prototype.show = function (g) {
              var a = this;
              this.cn = true;
              var b = {
                animate: this.O.inAnimate,
                duration: this.O.inDuration,
                easing: this.O.inEasing
              };
              var c = {};
              var h = b;
              this.mn(h);
              var e = wa(this.Kt, this.rn);
              this.gn = e;
              c = {
                opacity: this.O.opacity,
                position: e
              };
              switch (h.animate) {
                case "Fade":
                  c.opacity = this.O.inValue;
                  h.value = this.O.opacity;
                  break;
                case "Slide":
                  c.position = wa(this.Kt, this.O.inValue);
                  h.value = e;
              }
              this.sn = true;
              this.K.setSize(this.an);
              this.K.overflow(true);
              new ua(this.Ut.getElement(), c, h).play(function () {
                a.sn = false;
                a.K.overflow(false);
                a.Ut.setPosition(a.gn);
                if (g) {
                  g();
                }
              });
            };
            Fa.prototype.hide = function (h) {
              var a = this;
              if (this.cn) {
                var b = {
                  animate: this.O.outAnimate,
                  duration: this.O.outDuration,
                  easing: this.O.outEasing
                };
                var c;
                var i = b;
                this.mn(i);
                var e = wa(this.Kt, this.rn);
                var j = {
                  opacity: this.O.opacity,
                  position: e
                };
                c = j;
                this.gn = e;
                switch (i.animate) {
                  case "Fade":
                    i.value = this.O.outValue;
                    break;
                  case "Slide":
                    e = wa(this.Kt, this.O.outValue);
                    i.value = e;
                    this.gn = e;
                }
                this.K.setSize(this.an);
                this.K.overflow(true);
                this.sn = true;
                new ua(this.Ut.getElement(), c, i).play(function () {
                  a.sn = false;
                  a.K.overflow(false);
                  a.Ut.setPosition(a.gn);
                  if (h) {
                    h();
                  }
                });
              } else {
                h();
              }
            };
            Fa.prototype.mn = function (b) {
              if (za(b.animate)) {
                b.animate = "None";
              }
              if (za(b.duration)) {
                b.duration = 0.3;
              }
              if (za(b.easing)) {
                b.easing = "linear";
              }
            };
            Fa.prototype.reset = function () {
              this.cn = false;
              this.O = this.un;
              this.rn = {
                x: 0,
                y: 0
              };
              this.ln = false;
              this.bn(this.O);
            };
            Fa.prototype.bn = function (o) {
              var a = o.width;
              var b = o.height;
              var c = o.x;
              var d = o.y;
              var e = o.enableBackground;
              var f = o.isFullBackground;
              var g = o.opacity;
              var h = o.label;
              var i = o.scale;
              var j = o.color;
              var k = a && a <= this.an.width ? a : this.an.width;
              var l = b && b <= this.an.height ? b : this.an.height;
              var m = {
                width: k,
                height: l
              };
              this.Kt = m;
              this.rn = {
                x: typeof c != "number" || isNaN(c) ? this.dn.x : c,
                y: typeof d != "number" || isNaN(d) ? this.dn.y : d
              };
              this.ln = !!f;
              this.Ut.setText(h);
              this.Ut.setOpacity(typeof g != "number" ? 1 : g);
              this.Ut.enableBackground(!!e);
              this.Ut.setSize(this.Kt);
              this.Ut.setPosition(wa(this.Kt, this.rn));
              this.Ut.setScale(i || 1);
              this.Ut.setColor(j);
            };
            return Fa;
          }();
          var Ba = function (c) {
            function f() {
              return c !== null && c.apply(this, arguments) || this;
            }
            Ga(f, c);
            f.prototype.onCreate = function () {
              this.event.on("Loading.Show", this.xn, this);
              this.event.on("Loading.Hide", this.yn, this);
              this.event.on("Loading.UpdateTheme", this.wn, this);
              this.event.on("Loading.RequestState", this.Et, this);
              this.event.on("Shell.Scaled", this.S, this);
              var c = this.kn = new Aa();
              this.rootElement = c.getElement();
              this.context.event.emit("Shell.GetScale", undefined, function (a) {
                c.setScaleSize(a.response);
              });
            };
            f.prototype.S = function (c) {
              var a = c.payload;
              if (a && this.kn) {
                this.kn.resize(a);
              }
            };
            f.prototype.xn = function (d) {
              var e = this;
              var b = d.payload;
              this.context.event.emit("Shell.GetScale", undefined, function (c) {
                e.Mn(c.response, b);
              });
            };
            f.prototype.Mn = function (b, a) {
              var c = this;
              this.view.appendTo(f, "overlay");
              var d = this.kn;
              d.reset();
              d.setScaleSize(b);
              d.setDisplayConfig(a || {});
              d.show(function () {
                c.Sn = "Show";
                c.event.emit("Loading.StateChanged", "Show");
              });
            };
            f.prototype.yn = function () {
              var b = this;
              this.kn.hide(function () {
                b.view.removeFromParent(f);
                b.kn.reset();
                b.Sn = "Hide";
                b.event.emit("Loading.StateChanged", "Hide");
              });
            };
            f.prototype.wn = function (c) {
              var a = c.payload;
              this.kn.setStyle(a);
            };
            f.prototype.Et = function (b) {
              b.response = this.Sn;
            };
            return f;
          }(plugin.AbstractViewComponent);
          var Ca = new (function () {
            Fa.prototype.addStyle = function (d, a) {
              if (this.jn.indexOf(d) === -1) {
                var b = document.createElement("style");
                b.id = d;
                b.textContent = a;
                document.head.appendChild(b);
                this.jn.push(d);
              }
            };
            Fa.prototype.removeStyle = function (d) {
              var a = this.jn.indexOf(d);
              if (a > 0) {
                var b = document.getElementById(d);
                if (b && b.parentElement) {
                  b.remove();
                }
                this.jn.splice(a, 1);
              }
            };
            return Fa;
          }())();
          Fa("default", function (d) {
            function a() {
              return d !== null && d.apply(this, arguments) || this;
            }
            Ga(a, d);
            a.prototype.onCreate = function () {
              this.context;
              this.context.component.create(b);
              this.context.component.create(l);
              this.context.component.create(Ba);
              Ca.addStyle("notify-css", ".slot_alert{background-color:rgba(47,47,59,.95);border-radius:6px;box-shadow:.87px .87px 8.7px #292929;padding:13px 21.7px;position:absolute;text-align:center;width:243.3px}.card_alert .content .slot_alert .message,.card_alert .content .slot_alert .title,.slot_alert .card_alert .content .message,.slot_alert .card_alert .content .title,.slot_alert .message,.slot_alert .slot_alert_landscape .message_landscape,.slot_alert .slot_alert_landscape .title_landscape,.slot_alert .title,.slot_alert_landscape .slot_alert .message_landscape,.slot_alert_landscape .slot_alert .title_landscape{color:#d9d9d9;white-space:normal}.slot_alert .title{font-size:15.7px}.slot_alert .message{font-size:13.3px}.slot_alert .single_content_padding{padding-bottom:17.3px!important;padding-top:8.7px!important}.slot_alert .title_padding{padding-bottom:0;padding-top:0}.slot_alert .message_padding{padding-bottom:17.3px;padding-top:17.3px}.slot_alert .message u{border-bottom:1.7px solid;display:inline-block;text-decoration:none}.slot_alert .btn_content_row{display:table;table-layout:fixed;width:100%}.slot_alert .btn_content{margin-left:2%;margin-right:2%;width:96%}.slot_alert .btn_content .button{background-color:#dd5c2a;border-radius:2.6px;color:#d9d9d9;font-size:13.3px;margin:3.5px;min-height:17.3px;opacity:1;padding:10.3px 8.7px}.slot_alert .btn_content .button:active{opacity:.85}.slot_alert .btn_content .row{display:table-cell;padding-left:4.3px;padding-right:4.3px;vertical-align:middle}.slot_alert .btn_content .btn_seperator_height{content:\"\";display:block;height:2.6px;width:inherit}.slot_alert .btn_content .btn_seperator_width{content:\"\";display:table-cell;height:inherit;width:8.7px}.slot_alert_landscape{background-color:rgba(47,47,59,.95);border-radius:6px;box-shadow:.87px .87px 8.7px #292929;padding:16px 18.7px;position:absolute;text-align:center;width:184px}.card_alert .content .slot_alert_landscape .message,.card_alert .content .slot_alert_landscape .title,.slot_alert .slot_alert_landscape .message,.slot_alert .slot_alert_landscape .title,.slot_alert_landscape .card_alert .content .message,.slot_alert_landscape .card_alert .content .title,.slot_alert_landscape .message_landscape,.slot_alert_landscape .slot_alert .message,.slot_alert_landscape .slot_alert .title,.slot_alert_landscape .title_landscape{color:#d9d9d9;white-space:normal}.slot_alert_landscape .title_landscape{font-size:12.7px}.slot_alert_landscape .message_landscape{font-size:10.3px}.slot_alert_landscape .single_content_padding_landscape{padding-bottom:17.3px!important;padding-top:8.7px!important}.slot_alert_landscape .title_padding_landscape{padding-bottom:0;padding-top:0}.slot_alert_landscape .message_landscape_padding{padding-bottom:17.3px;padding-top:17.3px}.slot_alert_landscape .message_landscape u{border-bottom:1.7px solid;display:inline-block;text-decoration:none}.slot_alert_landscape .btn_content_row_landscape{display:table;table-layout:fixed;width:100%}.slot_alert_landscape .btn_content_landscape{margin-right:2%;width:100%}.slot_alert_landscape .btn_content_landscape .button_landscape{background-color:#dd5c2a;border-radius:2.6px;color:#d9d9d9;font-size:10.3px;margin:3.5px;min-height:17.3px;opacity:1;padding:8.3px 8.7px}.slot_alert_landscape .btn_content_landscape .button_landscape:active{opacity:.85}.slot_alert_landscape .btn_content_landscape .row_landscape{display:table-cell;padding-left:4.3px;padding-right:4.3px;vertical-align:middle}.slot_alert_landscape .btn_content_landscape .btn_seperator_height_landscape{content:\"\";display:block;height:2.6px;width:inherit}.slot_alert_landscape .btn_content_landscape .btn_seperator_width_landscape{content:\"\";display:table-cell;height:inherit;width:8.7px}.lobby_alert{background-color:#fff;border-radius:6px;box-shadow:.87px .87px 3.5px #444;position:absolute;text-align:center;width:243.3px}.lobby_alert .title{font-size:12px;white-space:nowrap}.lobby_alert .message{font-size:12px;white-space:normal}.lobby_alert .single_content_padding{padding-bottom:9.7px;padding-top:19.3px}.lobby_alert .title_padding{padding-bottom:0;padding-top:9.7px}.lobby_alert .message_padding{padding-bottom:9.7px;padding-top:9.7px}.lobby_alert .message u{border-bottom:1.7px solid;display:inline-block;text-decoration:none}.lobby_alert .line_separator{border-bottom:.87px solid #000;opacity:.1;padding-top:8.7px}.lobby_alert .btn_content_row{display:table;table-layout:fixed;width:100%}.lobby_alert .btn_content{margin-left:2%;margin-right:2%;width:96%}.lobby_alert .btn_content .button{font-size:13.7px;opacity:1;padding-bottom:11.3px;padding-top:9.7px}.lobby_alert .btn_content .button .text{color:inherit;font-size:inherit;overflow:hidden;pointer-events:none;text-overflow:ellipsis;white-space:nowrap}.lobby_alert .btn_content .button:active{opacity:.85}.lobby_alert .btn_content .row{display:table-cell}.lobby_alert .btn_content .btn_seperator_height{background-color:#000;content:\"\";display:block;height:.87px;margin-left:-2%;opacity:.1;width:104%}.lobby_alert .btn_content .btn_seperator_width{background-color:#000;content:\"\";display:table-cell;height:inherit;opacity:.1;width:1px}.card_alert .content .message,.card_alert .content .slot_alert_landscape .message_landscape,.card_alert .content .slot_alert_landscape .title_landscape,.card_alert .content .title,.lobby_alert .message,.lobby_alert .title,.slot_alert .message,.slot_alert .slot_alert_landscape .message_landscape,.slot_alert .slot_alert_landscape .title_landscape,.slot_alert .title,.slot_alert_landscape .card_alert .content .message_landscape,.slot_alert_landscape .card_alert .content .title_landscape,.slot_alert_landscape .slot_alert .message_landscape,.slot_alert_landscape .slot_alert .title_landscape{margin-left:5%;margin-right:5%;overflow:hidden;width:90%}.card_alert .content .slot_alert_landscape .message,.card_alert .content .slot_alert_landscape .title,.slot_alert .slot_alert_landscape .message,.slot_alert .slot_alert_landscape .title,.slot_alert_landscape .card_alert .content .message,.slot_alert_landscape .card_alert .content .title,.slot_alert_landscape .message_landscape,.slot_alert_landscape .slot_alert .message,.slot_alert_landscape .slot_alert .title,.slot_alert_landscape .title_landscape{margin-left:10%;margin-right:5%;overflow:hidden;width:80%}.card_alert .content .btn_content .button .text,.slot_alert .btn_content .button .text,.slot_alert_landscape .btn_content_landscape .button_landscape .text_landscape{color:inherit;font-size:inherit;overflow:hidden;pointer-events:none;text-overflow:ellipsis;white-space:nowrap}@keyframes alert_anim_show{0%{opacity:0}60%{opacity:1;transform:scale(1)}80%{opacity:1;transform:scale(1.12)}to{opacity:1;transform:scale(1)}}@keyframes alert_anim_hide{0%{opacity:1}to{opacity:0}}.card_alert_show,.lobby_alert_show,.slot_alert_show,.slot_alert_show_landscape{animation:alert_anim_show .3s linear forwards;display:block}.card_alert_hide,.lobby_alert_hide,.slot_alert_hide,.slot_alert_hide_landscape{animation:alert_anim_hide .2s linear forwards}@keyframes card_btn_press{0%{opacity:1}to{opacity:.4}}@keyframes card_btn_release{0%{opacity:.4}to{opacity:1}}.card_alert .container{display:block;height:100%;position:absolute;width:100%}.card_alert .content{border-radius:10.3px;box-shadow:0 0 17.3px 3.5px #0c0b0b;padding:13px 21.7px;position:absolute;text-align:center;width:291.3px}.card_alert .content .message,.card_alert .content .slot_alert_landscape .message_landscape,.card_alert .content .slot_alert_landscape .title_landscape,.card_alert .content .title,.slot_alert_landscape .card_alert .content .message_landscape,.slot_alert_landscape .card_alert .content .title_landscape{color:#d9d9d9;white-space:normal}.card_alert .content .title{font-size:15px}.card_alert .content .message{font-size:14px}.card_alert .content .single_content_padding{padding-bottom:9.7px!important;padding-top:19.3px!important}.card_alert .content .title_padding{padding-bottom:0;padding-top:9.7px}.card_alert .content .message_padding{padding-bottom:9.7px;padding-top:9.7px}.card_alert .content .message u{border-bottom:5px solid;display:inline-block;text-decoration:none}.card_alert .content .btn_content_row{display:flex;justify-content:space-between;margin-left:0!important;margin-right:0!important;padding-bottom:13px;padding-top:13px;width:100%!important}.card_alert .content .btn_content{margin-left:10%;margin-right:10%;width:80%}.card_alert .content .btn_content .button{background:#cb951a;background:linear-gradient(180deg,#ffec50,#ffe470 44%,#d28c00 80%,#d09500 95%);border-radius:30px;color:#140c05;font-size:15.7px;font-weight:700;margin:4px -30px 10px;min-height:17.3px;opacity:1;padding:12px}.card_alert .content .btn_content .button:active{opacity:.85}.card_alert .content .btn_content .row{margin-left:0;margin-right:0;width:45%}.card_alert .content .btn_content .btn_seperator_height{display:none}.card_alert .content .btn_content .btn_seperator_width{content:\"\";height:inherit;width:20px}.card_alert .frame{background-color:#140c05;border:4px solid #503333;border-radius:10.3px;left:-4px;position:absolute;top:-4px}.alert_holder{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:1000}.alert_holder .screen_center{left:0;margin:auto;position:absolute;right:0}.loading_circle_container,.loading_container,.loading_holder,.loading_panel{bottom:0;left:0;position:absolute;right:0;top:0}.loading_holder,.loading_panel{height:auto;overflow:hidden;width:360px}.loading_holder{max-height:780px;min-height:640px;z-index:900}.loading_panel{top:800px}.loading_container{height:inherit;margin:auto;min-height:inherit;min-width:inherit;overflow:hidden;text-align:center;width:inherit}.loading_background{height:100%;width:100%}.loading_font{bottom:0;color:#30a2d0;font-size:15.7px;left:0;line-height:21.7px;margin:auto;max-height:65px;overflow:hidden;padding-left:7%;padding-right:7%;position:absolute;right:0;top:52px;width:86%}.loading_circle_container{align-items:center;bottom:34.7px;display:flex;height:8.7px;justify-content:space-between;margin:auto;position:absolute;width:26px}.loading_circle_container_center{bottom:0}.loading_circle{animation-direction:alternate;animation-duration:.25s;animation-iteration-count:infinite;animation-name:loading_circle_bounce;animation-timing-function:ease-out;background-color:#30a2d0;border-radius:50%;height:6px;position:relative;width:6px}.loading_circle:first-of-type{animation-delay:0s}.loading_circle:nth-of-type(2){animation-delay:-75ms}.loading_circle:nth-of-type(3){animation-delay:-.15s}@keyframes loading_circle_bounce{0%{bottom:0}90%,to{bottom:13px}}.loading_circle_container_landscape,.loading_container_landscape,.loading_holder_landscape,.loading_panel_landscape{bottom:0;left:0;position:absolute;right:0;top:0}.loading_holder_landscape,.loading_panel_landscape{height:360px}.loading_holder_landscape{max-width:780px;min-width:640px;z-index:900}.loading_panel_landscape{top:800px}.loading_background_landscape{height:100%;width:100%}.loading_container_landscape{margin:auto;text-align:center}.loading_circle_container_landscape{align-items:center;bottom:34.7px;display:flex;height:8.7px;justify-content:space-between;margin:auto;position:absolute;width:20px}.loading_font_landscape{bottom:0;color:#30a2d0;font-size:12.7px;left:0;line-height:21.7px;margin:auto;max-height:65px;padding-left:7%;padding-right:7%;position:absolute;right:0;top:52px;width:86%}.loading_circle_container_center_landscape{bottom:0}.loading_circle_landscape{animation-direction:alternate;animation-duration:.25s;animation-iteration-count:infinite;animation-name:loading_circle_bounce_landscape;animation-timing-function:ease-out;background-color:#30a2d0;border-radius:50%;height:4px;position:relative;width:4px}.loading_circle_landscape:first-of-type{animation-delay:0s}.loading_circle_landscape:nth-of-type(2){animation-delay:-75ms}.loading_circle_landscape:nth-of-type(3){animation-delay:-.15s}@keyframes loading_circle_bounce_landscape{0%{bottom:0}90%,to{bottom:7px}}#toast-container{left:0;pointer-events:none;position:absolute;top:0;visibility:visible;z-index:950}#toast{background-color:#30303c;border-radius:3.48px;box-shadow:0 12px 18px 0 rgba(0,0,0,.4),inset 0 1px 0 0 hsla(0,0%,100%,.1);color:hsla(0,0%,100%,.9);display:inline-block;font-size:14px;line-height:18px;margin:auto;max-height:676px;max-width:300px;opacity:0;padding:18px;pointer-events:auto;position:absolute;text-align:center;visibility:hidden}#toast.toast_top{top:20px}#toast.toast_bottom{bottom:20px}#toast.toast_show{opacity:.96;visibility:visible}#toast.toast_hide{opacity:0;transition:visibility 0s .3s,opacity .3s linear;visibility:hidden}#notification{background-color:#30303c;border-radius:3.48px;color:hsla(0,0%,100%,.9);display:flex;display:inline-block;font-size:14px;line-height:18px;margin:auto;max-height:676px;max-width:300px;opacity:0;padding:18px;position:absolute;text-align:center;visibility:hidden}#notification.toast_top{top:20px}#notification.toast_bottom{bottom:20px}#notification.toast_show{opacity:1;visibility:visible}#notification.toast_hide{opacity:0;transition:visibility 0s .3s,opacity .3s linear;visibility:hidden}#notification-icon{background-color:#fff;border-radius:3.48px;height:44px;width:44px}#notification-message{font-size:14px;line-height:18px;margin-left:10px;text-align:left}");
              this.complete();
            };
            return c([plugin.PluginMainComponent("ba588d9dad")], a);
          }(plugin.AbstractPluginComponent));
        }
      };
    });
  })();
})();