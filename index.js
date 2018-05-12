var minify = require('pg-minify');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var transformed = minify(source, { compress: true });
  return "module.exports = { __esModule: true, default: " + JSON.stringify(transformed) + " }";
}
module.exports.seperable = true;
