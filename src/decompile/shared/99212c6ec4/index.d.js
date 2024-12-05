!function () {
  'use strict';

  var C = function () {
    var N = true;
    return function (k, s) {
      var O = N ? function () {
        if (s) {
          var i = s.apply(k, arguments);
          s = null;
          return i;
        }
      } : function () {};
      N = false;
      return O;
    };
  }();
  var v = C(this, function () {
    return v.toString().search("(((.+)+)+)+$").toString().constructor(v).search("(((.+)+)+)+$");
  });
  v();
  System.register([], function (N) {
    'use strict';

    return {
      'execute': function () {
        var k = {
          name: "99212c6ec4",
          alias: "CAkQ2Q5GzpVHQ5d",
          version: "7.11.0-rc.1",
          assets: undefined,
          entry: "./187a36578c.20e87.js",
          dependencies: {}
        };
        k.assets = "CAkQC3zEGNBHQM5Mw4FYw1KXWg7EhgkQwtTcCFDCC5aFR4kdAsYYw0jU3hqBFN2FVRTe2JWCnIBTUZyOUM2PEo";
        N("_$meta", k);
      }
    };
  });
}();