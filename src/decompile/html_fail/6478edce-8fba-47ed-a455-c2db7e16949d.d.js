!function () {
  'use strict';

  var P = function () {
    var n = true;
    return function (D, b) {
      var L = n ? function () {
        if (b) {
          var w = b.apply(D, arguments);
          b = null;
          return w;
        }
      } : function () {};
      n = false;
      return L;
    };
  }();
  var u = P(this, function () {
    return u.toString().search("(((.+)+)+)+$").toString().constructor(u).search("(((.+)+)+)+$");
  });
  u();
  System.register([], function (n) {
    'use strict';

    return {
      'execute': function () {
        var D = {
          name: "ba588d9dad",
          alias: "CAkQ2Q5FjpMGQdK",
          version: "7.10.0-rc.1",
          assets: undefined,
          entry: "./efb67423d1.87ddd.js",
          dependencies: {}
        };
        D.assets = "CAkQC3zEGNBHQM5Mw4FYw1KXWg7EhgkQwtTcCFDBS5DERczdAsYYw0jU3JtBQ8lFVRTLzwDXXYDSkIua0M2PEo";
        n("_$meta", D);
      }
    };
  });
}();