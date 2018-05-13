var minify = require('pg-minify');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var transformed = minify(source, { compress: true });
  var result = "Object.defineProperty(exports, '__esModule', {value: true});\n";
  result += "exports[\"default\"] = " + JSON.stringify(transformed) + ";";
  return result;
}
