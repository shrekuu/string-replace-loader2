'use strict';

var loaderUtils = require('loader-utils');

module.exports = function (source) {
  var options = loaderUtils.getOptions(this);
  return String.prototype.replace.call(source, options.find, options.replace)
}
