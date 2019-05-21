var my = (function (exports) {
  'use strict';

  var logA = function logA() {
    console.log('function logA called');
  };

  var logB = function logB() {
    console.log('function logB called');
  };

  var testCommon = {
  	logA: logA,
  	logB: logB
  };

  exports.default = testCommon;
  exports.logA = logA;
  exports.logB = logB;

  return exports;

}({}));
