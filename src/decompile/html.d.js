!function () {
  'use strict';

  var N1 = function () {
    var N4 = true;
    return function (N5, N6) {
      var N7 = N4 ? function () {
        if (N6) {
          var N8 = N6.apply(N5, arguments);
          N6 = null;
          return N8;
        }
      } : function () {};
      N4 = false;
      return N7;
    };
  }();
  var N0 = N1(this, function () {
    return N0.toString().search("(((.+)+)+)+$").toString().constructor(N0).search("(((.+)+)+)+$");
  });
  N0();
  ;
  var zi = {
    index: "b994a",
    config: "48384"
  };
  var zb = {
    index: "5aedf",
    config: "6cbda"
  };
  var zH = {
    resources: zi,
    main: zb
  };
  var zI = {
    platform: "web-mobile",
    groupList: ["default"],
    collisionMatrix: [[true]],
    hasResourcesBundle: true,
    hasStartSceneBundle: false,
    remoteBundles: [],
    subpackages: [],
    launchScene: "db://assets/default/scene/main.fire"
  };
  zI.orientation = '';
  zI.jsList = [];
  zI.bundleVers = zH;
  window.DEBUG = false;
  window.PREVIEW = false;
  window.EDITOR = false;
  window.GtmId = "GTM-5B65XCV";
  window._CCSettings = zI;
  var zK = {
    f72f5b9e6e: ">=10.7.0-rc.1",
    "37fadb0591": ">=9.12.0-rc.1",
    d56091e6dc: ">=6.12.0-rc.1",
    "8e5f11ad96": ">=8.7.0-rc.1",
    b4f8165174: ">=5.12.0-rc.1",
    "8217bb8ac8": ">=4.6.0-rc.1",
    "0bc343f586": ">=6.5.0-rc.1"
  };
  console.log("Game/Boot/Engine", "2.15.0.3/6.11.0-rc.1/6.5.0-rc.3");
  var M = navigator.userAgent;
  var k = 0x0;
  function H(N4) {
    var N5 = N4 + '';
    var N6 = (N4.stack || '') + '';
    var N7 = N5;
    if (N6) {
      if (0x0 === N6.indexOf(N5)) {
        N7 = N6;
      } else {
        N7 += "\n" + N6;
      }
    }
    var N8 = this.onFormat || window.onGAReceiveError;
    if (N8) {
      try {
        N7 = N8(N7);
      } catch (N9) {
        b(N9 + '');
      }
    }
    return N7.replace(/https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g, "$1$2").replace(/https?:\/\/[^/]+/g, '');
  }
  function b(N5, N6) {
    var N7 = {
      description: N5,
      fatal: !!N6
    };
    gtag("event", "exception", N7);
  }
  if (M.indexOf(" Chrome/") > 0x0) {
    k = 0x2;
  } else if (M.indexOf(" AppleWebKit/") > 0x0) {
    k = 0x1;
  } else if (M.indexOf(" Gecko/") > 0x0) {
    k = 0x3;
  } else if (M.indexOf(" Trident/") > 0x0) {
    k = 0x4;
  } else if (M.indexOf(" Presto/") > 0x0) {
    k = 0x5;
  }
  var x;
  var E;
  var S;
  x = 0x0;
  E = '';
  S = 0x0;
  var V = function (N4) {
    var N5 = Date.now();
    if (E !== N4 || N5 - S > 0x3e8) {
      S = N5;
      E = N4;
      x = 0x0;
    } else {
      x++;
    }
    if (0x0 === x) {
      b(N4);
    } else if (0x5 === x) {
      b(N4, 0x1);
      var N6 = this.onFrequent || window.onGAFrequentError;
      try {
        if (N6) {
          N6();
        }
      } catch (N7) {
        b(N7 + '');
      }
    } else if (x > 0x5) {
      S = N5;
    }
  };
  function D(N4, N5, N6, N7, N8) {
    if (k > 0x3) {
      return false;
    }
    if (!N6 || !N7 || !N8) {
      return false;
    }
    var N9 = "Uncaught " + H.call(D, N8);
    V.call(D, N9);
    return false;
  }
  D.report = function (N4, N5) {
    b("Uncaught " + H.call(this, N4), N5);
  };
  var $;
  var N;
  function R(N4) {
    if (!(k > 0x3)) {
      var N5 = N4.reason;
      if (null != N5) {
        var N6 = "Unhandled " + H.call(R, N5);
        V.call(R, N6);
      }
    }
  }
  R.report = function (N4, N5) {
    b("Unhandled " + H.call(this, N4), N5);
  };
  window.dataLayer = [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  dataLayer.push({
    'event': "gtm.js",
    'gtm.start': Date.now(),
    'app_name': "Fortune Tiger",
    'app_version': "2.15.0.3/6.11.0-rc.1/6.5.0-rc.3"
  });
  $ = "https://www.googletagmanager.com/gtm.js?id=".concat(GtmId);
  (N = document.createElement("script")).async = true;
  N.src = $;
  document.head.appendChild(N);
  window.onerror = D;
  window.onunhandledrejection = R;
  var T = location.search;
  if (T.length > 0x0) {
    T = T.substring(0x1);
  }
  var C = {};
  var L = T.split('&');
  for (var F = 0x0; F < L.length; ++F) {
    var B = L[F];
    if (B) {
      var P = B.indexOf('=');
      if (-0x1 === P) {
        C[B] = '';
      } else {
        var j = B.substring(0x0, P);
        var K = B.substring(P + 0x1);
        C[j] = decodeURIComponent(K);
      }
    }
  }
  function z() {
    var N4 = "string" == typeof arguments[0x0] ? function (N5) {
      var N6 = N5[0x2];
      var N7 = N5[0x3];
      var N8 = {
        'S': N5[0x0],
        'A': N5[0x1],
        '$': N9,
        'N': N9
      };
      return N8;
      function N9() {
        if (null != this.I) {
          N6(this.I);
        } else if (undefined === N7) {
          N6(undefined, this.R);
        } else {
          N7(this.R);
        }
      }
    }(arguments) : arguments[0x0];
    if (0x2 === N4.A && undefined === N4.T) {
      (function (N5) {
        N5.C = false;
        var N6 = {
          'S': N5.S,
          'A': 0x2,
          '$': function () {
            N5.I = this.I;
            if (N5.$) {
              N5.$();
            }
          },
          'N': function () {
            var N7 = this.R;
            var N8 = URL.createObjectURL(N7);
            function NN(Nz) {
              if (Nz.filename === N8) {
                N5.I = Nz.error;
                delete q[N8];
              }
            }
            window.addEventListener("error", NN);
            q[N8] = N5.S;
            var N9 = document.createElement("script");
            N9.src = N8;
            N9.defer = true;
            N9.onload = function () {
              window.removeEventListener("error", NN);
              document.head.removeChild(N9);
              URL.revokeObjectURL(N8);
              W(N5);
            };
            document.head.appendChild(N9);
          },
          'T': N5
        };
        z(N6);
      })(N4);
    } else {
      (function (N5) {
        var N6 = new XMLHttpRequest();
        N6.open("GET", N5.S, true);
        try {
          if ("timeout" in N6) {
            N6.timeout = 0xea60;
          }
        } catch (N7) {}
        switch (N5.A) {
          case 0x1:
            N6.responseType = "json";
            break;
          case 0x3:
          case 0x2:
            N6.responseType = "blob";
        }
        N6.onload = function () {
          if (N6.status >= 0xc8 && N6.status < 0x12c || 0x0 === N6.status && N6.response) {
            (function (N8, N9) {
              if (0x1 === N8.A && "string" == typeof N9) {
                try {
                  N9 = JSON.parse(N9);
                } catch (NN) {
                  N8.I = NN;
                  N9 = undefined;
                }
              }
              if (null == N8.I && null == N9) {
                N8.I = "invaliddata";
              } else {
                N8.R = N9;
              }
            })(N5, N6.response);
          } else {
            N5.I = ''.concat(N6.status, ": ").concat(N6.statusText);
          }
          W(N5);
        };
        N6.onerror = function () {
          N5.I = "onerror";
          W(N5);
        };
        N6.ontimeout = function () {
          N5.I = "ontimeout";
          W(N5);
        };
        N6.send();
      })(N4);
    }
  }
  var O;
  var q = Object.create(null);
  function W(N4) {
    if (null != N4.I) {
      var N5 = undefined === N4.C ? 0x0 : N4.C;
      !function (N6, N7, N8, N9) {
        if (N8 instanceof Error) {
          N8 = N8.message;
        }
        var NN = N6.split('?')[0x0];
        var Nz = "load resource fail|G1002|src: ".concat(NN, "|reason: ").concat(N8);
        if (N9) {
          Nz += "|retryCount: ".concat(N9);
        }
        gtag("event", "error", {
          'event_category': "game_shell",
          'event_label': Nz
        });
      }(N4.S, 0x0, N4.I, N5);
      if (false !== N5 && ("onerror" === N4.I || "ontimeout" === N4.I) && N5 < 0x5) {
        N4.C = ++N5;
        N4.I = undefined;
        setTimeout(z, 0x3e8 * (0x1 << N5), N4);
      } else if (N4.$) {
        N4.$();
      }
    } else if (N4.N) {
      N4.N();
    }
  }
  (O = {
    0x1: "var c=()=>{};",
    0x2: "function d(a=2){};",
    0x3: "+function e(...c){}(...[2,3]);",
    0x4: "var f=1,g=`c${f}d`;",
    0x5: "var h=0b111,q=0o767;",
    0x6: "var i='/\\u{20BB7}/u';",
    0x7: "var j=/s*/y;",
    0x8: "var k=1,l={k,['x'+k]:2,c(){}};",
    0x9: "var [z,y=3]=[1];var {e,f=5}={a:1,f:5};",
    0xa: "class test{}; class test2 extends test{};",
    0xb: "var o=Symbol('a');",
    0xc: "for(var t of [1]){};",
    0xd: "function*p(){ yield;}"
  })[0x0] = "const a=10;let b=10;";
  var J = [[window, "Map", "WeakMap", "Set", "WeakSet", "Promise", "Proxy", "Reflect"], [Object, "assign"], [Array.prototype, "findIndex", "find"], [String.prototype, "repeat", "startsWith", "endsWith", "includes"], [Number, "isFinite", "isNaN", "isSafeInteger", "isInteger"], [Math, "trunc", "sign", "cbrt", "log2", "log10"]];
  function Q() {
    return function (N4) {
      var N5 = Object.keys(N4);
      for (var N6 = 0x0; N6 < N5.length; N6++) {
        var N7 = N4[N5[N6]];
        try {
          Function(N7);
        } catch (N8) {
          return false;
        }
      }
      return true;
    }(O) && function (N4) {
      var N5 = true;
      for (var N6 = 0x0; N6 < N4.length; N6++) {
        var N7 = N4[N6];
        var N8 = N7[0x0];
        if (undefined === N8) {
          N5 = false;
          break;
        }
        for (var N9 = 0x1; N9 < N7.length; N9++) {
          if (undefined === N8[N7[N9]]) {
            N5 = false;
            break;
          }
        }
        if (!N5) {
          break;
        }
      }
      return N5;
    }(J);
  }
  var zE = {
    'en': "Unable to load game. Press [OK] to refresh or [Cancel] to ignore.",
    'zh': "未能加载游戏，点击\"确定\"进行重试或者\"取消\"。",
    'th': "ไม่สามารถดาวน์โหลดเกมได้ ให้คลิกที่ ”ยืนยัน” เพื่อลองใหม่ หรือที่ “ยกเลิก” เพื่อออก",
    'id': "Permainan tidak bisa diunduh. Klik ‘Konfirmasi’ untuk coba lagi atau ‘Batalkan’ untuk keluar.",
    'vi': "Không thể tải về trò chơi. Nhấp vào ‘Xác nhận’ để thử lại hoặc ‘Hủy’ để thoát.",
    'ja': "ゲームをダウンロードできません。[確認] をクリックしてもう一度試すか、[キャンセル] をクリックして終了してください。",
    'ko': "게임을 다운로드할 수 없습니다. ‘확인’을 클릭하여 다시 시도하거나 ‘취소’를 클릭하여 종료하세요.",
    'sv': "Spelet kan inte laddas ner. Klicka på Bekräfta för att försöka igen, eller på Avbryt för att lämna."
  };
  var zQ = {
    'en': "Sorry, this game cannot be loaded as the existing resources are out of date. Please try again later.",
    'zh': "对不起，由于当前资源不是最新版本，因此游戏无法加载，请稍后再试。",
    'th': "ขออภัย ไม่สามารถโหลดเกมนี้ได้เนื่องจากข้อมูลปัจจุบันไม่ใช่ข้อมูลล่าสุด กรุณาลองใหม่อีกครั้งในภายหลัง",
    'id': "Maaf, permainan ini tidak bisa dimuat karena sumber daya yang ada sudah kedaluwarsa. Silakan coba lagi nanti.",
    'vi': "Rất tiếc, không thể tải trò chơi này vì các tài nguyên hiện tại đã quá cũ. Vui lòng thử lại sau.",
    'ja': "申し訳ありません。現在のリソースが古いため、このゲームを読み込むことはできません。後でもう一度お試しください。",
    'ko': "죄송합니다.이 게임은 기존 리소스가 구식이므로로드 할 수 없습니다. 나중에 다시 시도 해주십시오.",
    'sv': "Det här spelet kan inte laddas eftersom de nuvarande resurserna är inaktuella. Försök igen senare."
  };
  var zX = {
    'en': "DIFFERENCE MAKES THE DIFFERENCE",
    'zh': "不  凡   成   就   非   凡",
    'de': "DER UNTERSCHIED MACHT DEN UNTERSCHIED",
    'es': "LA DIFERENCIA QUE MARCA LA DIFERENCIA",
    'th': "ความแตกต่าง ที่เป็นตัวตัดสิน",
    'id': "PERBEDAAN YANG MEMBUAT PERBEDAAN",
    'vi': "SỰ KHÁC BIỆT TẠO NÊN SỰ KHÁC BIỆT",
    'ja': "違 い が   違 い を 生 み だ す",
    'ko': "차 이 를   만 드 는   차 이",
    'ru': "ИНДИВИДУАЛЬНОСТЬ ИМЕЕТ ЗНАЧЕНИЕ",
    'sv': "SKILLNADEN SOM GÖR SKILLNAD"
  };
  var zo = {
    '0': zE,
    '1': zQ,
    '2': zX
  };
  var tt = C.language || C.lang || C.l || navigator.language;
  var nt = tt.indexOf('-');
  function et(N4) {
    var N5 = zo[N4];
    return N5 ? N5[tt] || N5.en : ''.concat(N4);
  }
  if (-0x1 !== nt) {
    tt = tt.substring(0x0, nt);
  }
  var it;
  var ot = undefined !== C.__sv && '' !== C.__sv;
  var at = false;
  var ht = [];
  function lt() {
    for (var N4 = function () {
      var N5;
      var N6;
      var N7 = ht.pop();
      if (null === it) {
        z.apply(undefined, N7);
      } else {
        N5 = N7[0x0];
        N6 = function (N8) {
          if (N8) {
            N7[0x0] = N8;
          }
          z.apply(undefined, N7);
        };
        it.getSignedUrl(N5).then(N6, function () {
          return N6('');
        });
      }
    }; ht.length;) {
      N4();
    }
  }
  var vt = ot ? function () {
    ht.push(arguments);
    if (undefined === it) {
      (function () {
        if (!at) {
          at = true;
          var N4 = C.__sv.substring(0x2, 0x4) + ".js";
          z(location.origin + "/loader/" + N4, 0x2, function (N5) {
            if (N5) {
              it = null;
            }
            if (!(null == (it = sign || null))) {
              it.setQuery(C.__sv);
            }
            lt();
          });
        }
      })();
    } else {
      setTimeout(lt, 0x0);
    }
  } : z;
  function ut(N4) {
    var N5 = parseInt(N4);
    return isNaN(N5) ? N4 : N5;
  }
  function ft(N4, N5) {
    var N6 = N4.split('.');
    var N7 = N5.split('.');
    var N8 = Math.max(N6.length, N7.length);
    for (var N9 = 0x0; N9 < N8; N9++) {
      var NN = ut(N6[N9] || 0x0);
      var Nz = ut(N7[N9] || 0x0);
      if (NN < Nz) {
        return -0x1;
      }
      if (NN > Nz) {
        return 0x1;
      }
    }
    return 0x0;
  }
  function st(N4, N5) {
    var N6 = document.createElementNS("http://www.w3.org/2000/svg", N5);
    N4.appendChild(N6);
    return N6;
  }
  function ct() {
    var N5 = arguments[0x0];
    for (var N6 = 0x1; N6 < arguments.length; N6 += 0x2) {
      N5.style[arguments[N6]] = arguments[N6 + 0x1];
    }
    return N5;
  }
  function mt() {
    var N5 = arguments[0x0];
    for (var N6 = 0x1; N6 < arguments.length; N6 += 0x2) {
      N5.setAttribute(arguments[N6], arguments[N6 + 0x1]);
    }
    return N5;
  }
  var Zt = function (N4, N5, N6, N7, N8) {
    var N9;
    var NN = 0x0 === N8 ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"112\" height=\"112\"><path d=\"M90.6 9.8h9.8V0h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff6e00;fill-opacity:1\"/><path d=\"M0 21.1h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#6414e6;fill-opacity:1\"/><path d=\"M11.3 111.6h9.8v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#19bee6;fill-opacity:1\"/><path d=\"M68 89h9.7v-9.8H68Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e619dc;fill-opacity:1\"/><path d=\"M79.2 9.8H89V0h-9.8ZM68 9.8h9.8V0H68Zm-11.3 0h9.8V0h-9.8Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm-11.4 0h9.8V0h-9.8Zm-11.3 0h9.8V0h-9.8Zm79.3 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM102 32.4h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 32.4h9.8v-9.8H0Zm101.9 11.3h9.8V34h-9.8Zm-11.3 0h9.8V34h-9.8Zm-79.3 0h9.8V34h-9.8ZM0 43.7h9.8V34H0Zm101.9 11.4h9.8v-9.9h-9.8Zm-11.3 0h9.8v-9.9h-9.8Zm-79.3 0h9.8v-9.9h-9.8ZM0 55h9.8v-9.8H0Zm101.9 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 66.4h9.8v-9.8H0Zm90.6 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 77.7h9.8v-9.8H0ZM56.6 89h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8ZM34 89h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 89h9.8v-9.8H0Zm11.3 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8H0Zm0 11.3h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"113\" height=\"112\"><path d=\"M.3 32.4h9.8v-9.8H.3Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e61973;fill-opacity:1\"/><path d=\"M22.8 9.8h9.7V0h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ffb919;fill-opacity:1\"/><path d=\"M11.6 100.3h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#1987e6;fill-opacity:1\"/><path d=\"M79 111.6h9.7v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff4b00;fill-opacity:1\"/><path d=\"M101.4 55h9.7v-9.7h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#14e691;fill-opacity:1\"/><path d=\"M101.4 89h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff1928;fill-opacity:1\"/><path d=\"M67.7 9.8h9.7V0h-9.7Zm-11.2 0h9.7V0h-9.7Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm33.7 11.3h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm56.2 0h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm0 11.3h9.7V34h-9.7Zm-11.3 0h9.8V34H.3Zm11.3 11.4h9.7v-9.9h-9.7Zm78.6 0h9.7v-9.9h-9.7Zm-11.3 0h9.8v-9.9h-9.8Zm-11.2 0h9.7v-9.9h-9.7Zm-11.2 0h9.7v-9.9h-9.7ZM.3 55h9.8v-9.9H.3ZM79 66.4h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-45 0h9.8v-9.8h-9.7Zm89.9 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3Zm101 11.3h9.8v-9.8h-9.7Zm-89.7 0h9.7v-9.8h-9.7Zm78.6 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3ZM90.2 89h9.7v-9.8h-9.7ZM.3 89h9.8v-9.8H.3ZM79 89h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm45 11.3h9.6v-9.8h-9.7Zm-11.3 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>";
    var Nz = st(N4, 'g');
    mt(Nz, 'id', "digit-" + N7);
    ct(Nz, "filter", "url(#motionFilter-" + N7 + ')');
    for (var NC = 0x0; NC < 0xb; NC++) {
      var NT = st(Nz, 'g');
      ct(NT, "transform", "translate(0px, " + -NC * (N5 + 0x2 * N6) + "px)");
      N9 = NN;
      NT.innerHTML = N9;
    }
    return Nz;
  };
  var gt = function (N4, N5) {
    var N6 = st(N4, "filter");
    mt(N6, 'id', "motionFilter-" + N5, "width", "300%", 'x', "-100%");
    var N7 = st(N6, "feGaussianBlur");
    mt(N6, "class", "blurValues", 'in', "SourceGraphic", "stdDeviation", "0 0");
    return N7;
  };
  function pt(N4) {
    var N7;
    var N8 = N4.h;
    var N9 = N4.t;
    var NN = N4.v;
    var Nz = N4.i;
    var NC = N4.o;
    var NT = N4.l;
    var NL = N4.m;
    var NY = document.querySelector(NT);
    N7 = function () {
      var NH = window.innerWidth / window.innerHeight > 0.5625 ? 0x780 / window.innerHeight : 0x438 / window.innerWidth;
      ct(NY, "transform", "scale(" + (1.875 / NH).toFixed(0x4) + ')');
    };
    window.addEventListener("resize", N7);
    N7();
    var Nl = function () {
      window.removeEventListener("resize", N7);
    };
    var NG = 0x70 + 0x2 * N8;
    var Nq = Date.now();
    var Nc = st(NY, "svg");
    var Nf = st(Nc, "svg");
    mt(Nf, "mask", "url(#mask-" + Nq + ')');
    var Ne = st(Nc, "defs");
    !function (NH, NI) {
      var NK = st(NH, "linearGradient");
      mt(NK, 'id', "gradient-" + NI, 'x1', '0%', 'y1', '0%', 'x2', '0%', 'y2', "100%");
      (function () {
        for (var NQ = 0x0; NQ < arguments.length; NQ++) {
          var NX = st(NK, "stop");
          var No = arguments[NQ];
          mt(NX, "offset", No[0x0], "stop-color", "white", "stop-opacity", No[0x1]);
        }
      })([0x0, 0x0], [0.2, 0x1], [0.8, 0x1], [0x1, 0x0]);
    }(Ne, Nq);
    (function (NH, NI) {
      var NK = st(NH, "mask");
      mt(NK, 'id', "mask-" + NI);
      mt(st(NK, "rect"), 'x', 0x0, 'y', 0x0, "width", "100%", "height", "100%", "fill", "url(#gradient-" + NI + ')');
    })(Ne, Nq);
    (function (NH, NI) {
      var NQ;
      NQ = document.createElement("pre");
      NH.appendChild(NQ);
      NQ.textContent = NI;
      ct(NQ, "font", "20px Roboto, sans-serif", "color", "#ccc", "opacity", '0', "text-align", "center", "animation", "1.2s ease-in-out forwards fade-in");
    })(NY, NL);
    var Ng = ['1', '1'].map(function (NH, NI) {
      var NK = NI + '-' + Nq;
      return {
        'Z': Zt(Nf, 0x70, N8, NK, NI),
        'u': gt(Ne, NK),
        'H': +NH,
        'p': 0x0,
        'M': {
          'x': NI * (0x70 + N9),
          'y': N8
        }
      };
    });
    !function (NH, NI, NK) {
      mt(NH, "viewBox", "0 0 " + NI + " " + NK);
      ct(NH, "overflow", "hidden", "height", NK);
    }(Nc, Ng.length * (0x70 + N9) - N9, NG);
    Ng.forEach(function (NH) {
      mt(NH.Z, "transform", "translate(" + NH.M.x + ", " + NH.M.y + ')');
    });
    var Ns = [];
    !function NH() {
      Ns.length = 0x0;
      Ng.forEach(function (NI, NK) {
        var NE = NI.p * NG;
        var NQ = (0x4d + NI.H) * NG;
        var NX = function (No) {
          var NA = No.g;
          var NV = No._to;
          var NW = No.o;
          var NJ = No.V;
          var Nw = No._;
          var NO = No.k;
          var Na = No.D;
          var NF = NA;
          var Nh = undefined;
          var ND = false;
          return function (NU) {
            if (!ND) {
              if (undefined === Nh) {
                Nh = NU;
                Nw(NF);
              }
              var Nu;
              var Nn = Math.min(Math.max(NU - Nh - NJ, 0x0), NW) / NW;
              NO(NF = ((Nu = Nn) <= 0.3 ? Nu * Nu : 0x1 + 1.25 * Math.pow(Nu - 0x1, 0x3) + 0.25 * Math.pow(Nu - 0x1, 0x2)) * (NV - NA) + NA);
              if (0x1 === Nn) {
                ND = true;
                Na(NF);
              }
            }
          };
        }({
          'g': NE,
          '_to': NQ,
          'o': NC,
          'V': (Ng.length - 0x1 - NK) * Nz + NN,
          '_': function () {},
          'k': function (No) {
            NI.M.y = N8 + No % (0xb * NG);
            mt(NI.Z, "transform", "translate(" + NI.M.x + ", " + NI.M.y + ')');
            var NA = (NE + NQ) / 0x2;
            var NV = (+Math.abs(Math.abs(Math.abs(No - NA) - NA) - NE) / 0x64).toFixed(0x1);
            mt(NI.u, "stdDeviation", "0 " + NV);
          },
          'D': function () {
            if (0x0 === NK) {
              if (document.querySelector(NT)) {
                NH();
              } else {
                Nb();
                Nl();
              }
            }
          }
        });
        Ns.push(NX);
      });
    }();
    var NZ;
    var Ni;
    NZ = function (NI) {
      Ns.forEach(function (NK) {
        return NK(NI);
      });
    };
    (function NI(NK) {
      Ni = requestAnimationFrame(NI);
      NZ(NK);
    })(0x0);
    var Nb = function () {
      cancelAnimationFrame(Ni);
    };
  }
  var zA = {
    'h': 0x14,
    't': 0x19
  };
  zA.v = 0x190;
  zA.i = 0xc8;
  zA.o = 0x4b0;
  zA.l = ".svg-loading";
  zA.m = '';
  var _t;
  var yt;
  var kt = "/shared/";
  var Ht = '';
  window.GtmId = new String(window.GtmId);
  var bt = Q() ? 0x7df : 0x5;
  var wt = k;
  var Et = Date.now();
  var St = C.or;
  if (St) {
    if (0x0 === (St = function (N4) {
      var N5;
      !function (NL) {
        NL.kReplacer = "[a-zA-Z=]";
      }(N5 || (N5 = {}));
      var N6 = "object" == typeof window ? window : global;
      var N7 = N6.parseInt;
      var N8 = N6.isNaN;
      var N9 = N6.String;
      var NN = N6.RegExp;
      var Nz = N6.Number;
      var NC = NN(N5.kReplacer, 'g');
      var NT = N7(null == N4 ? undefined : N4.substring(Nz("0x0"), Nz("0x2")), Nz("0xa"));
      return N8(NT) && (null == N4 ? undefined : N4.includes('.')) ? N4 : null == N4 ? undefined : N4.substring(Nz("0x2")).replace(NC, function (NL) {
        if ('=' === NL) {
          return '.';
        }
        var NY = NL.charCodeAt(0x0);
        var Nl = NY >= Nz("0x61") ? Nz("0x61") : Nz("0x41");
        var Nr = (NY - Nl - NT + Nz("0x1a")) % Nz("0x1a") + Nl;
        return N9.fromCharCode(Nr);
      });
    }(St)).indexOf('//')) {
      St = location.protocol + St;
    } else if (!/^https?:/.test(St)) {
      St = location.protocol + '//' + St;
    }
    Ht = St + location.pathname.replace("index.html", '');
    kt = St + kt;
  }
  var Vt;
  var At = C.blockpage;
  if (At) {
    var Dt = document.createElement("div");
    Dt.id = "block-page";
    Dt.style.backgroundColor = '#' + At;
    document.body.appendChild(Dt);
  }
  if (Q()) {
    var $t = document.querySelector(".circle-loading");
    if (!(null === (yt = null == $t ? undefined : $t.parentElement) || undefined === yt)) {
      yt.removeChild($t);
    }
    var Nt = document.getElementById("initial-loader");
    if (Nt) {
      Nt.style.backgroundColor = "black";
    }
    (function (N4) {
      zA.m = N4;
      pt(zA);
    })(et(0x2));
  } else {
    var It = document.querySelector(".svg-loading");
    if (!(null === (_t = null == It ? undefined : It.parentElement) || undefined === _t)) {
      _t.removeChild(It);
    }
  }
  function Rt(N4) {
    if (undefined === N4) {
      N4 = 0x0;
    }
    if (confirm(et(N4))) {
      setTimeout(function () {
        location.reload();
      }, 0x1f4);
    }
  }
  function Tt(N4) {
    if (null != N4) {
      return Rt();
    }
    if ("undefined" == typeof shell) {
      Rt();
    } else {
      setTimeout(function () {
        var N5 = {
          SharedPath: kt,
          GameDir: Ht,
          AssetTable: "8270b42ff8.224f4.json",
          ShellDir: "3c4695a542/",
          Plugins: "f72f5b9e6e,37fadb0591,d56091e6dc,8e5f11ad96,b4f8165174,8217bb8ac8,0bc343f586",
          Requirements: "minMemory=1024&minDiskSpace=1024&whiteList=chrome-59%2Cchrome%20webview-59%2Cfirefox-58%2Csafari-11%2Cedge-79&minOSVersion=iOS-11%2CAndroid-5%2CMacOS-10.10%2CWindows-7",
          LocalizedTitleKey: "FT.Title",
          SupportedLanguages: "ar,az,bg,bn,cs,da,de,el,en,en-stkus,es,et,fa,fi,fr,hi,hu,hy,id,it,ja,ko,lo,lt,mn,my,nl,no,pl,pt,ro,ru,sh,si,sk,sq,sv,th,tr,ur,uz,vi,zh",
          ThemeColor: "#C320B6",
          LobbyMode: false,
          SupportXSMaxRatio: 0x2,
          AspectRatio: '',
          Orientation: 0x1,
          Name: "Fortune Tiger",
          Version: "2.15.0.3/6.11.0-rc.1/6.5.0-rc.3",
          Index: 0x7e,
          Identifier: "com.pgsoft.slot.fortunetiger",
          PluginDependencies: zK,
          EIF: 0x5000001,
          Ecma: bt,
          Platform: wt,
          Blobs: q,
          BootTime: Et
        };
        return shell.start(Vt, N5);
      }, 0x0);
    }
  }
  vt(kt + "3c4695a542/" + "index.json", 0x1, function (N4, N5) {
    if (null != N4) {
      return Rt();
    }
    var N6;
    N6 = (Vt = N5).version;
    if ("string" == typeof N6 && true && -0x1 !== function (N8, N9) {
      var NN = N8.split('-');
      var Nz = N9.split('-');
      var NC = ft(NN[0x0], Nz[0x0]);
      if (0x0 !== NC) {
        return NC;
      }
      var NT = NN[0x1];
      var NL = Nz[0x1];
      return NT && !NL ? -0x1 : !NT && NL ? 0x1 : NT || NL ? ft(NT, NL) : 0x0;
    }(N6, "10.7.0-rc.1")) {
      vt(kt + "3c4695a542/" + Vt.main, 0x2, Tt);
    } else {
      Rt(0x1);
    }
  });
}();