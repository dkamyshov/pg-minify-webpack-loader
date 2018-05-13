var minify = require('pg-minify');
var loaderUtils = require('loader-utils');

function getOptions(loaderContext) {
  var options = {
    module: 'es6',
    compress: true
  };

  var passedOptions = loaderUtils.getOptions(loaderContext);

  if (passedOptions) {
    if (typeof passedOptions.module === 'string') {
      options.module = passedOptions.module;
    }

    if (typeof passedOptions.compress === 'boolean') {
      options.compress = passedOptions.compress;
    }
  }

  return options;
}

module.exports = function (source) {
  this.cacheable && this.cacheable();

  var options = getOptions(this);

  var transformed = options.compress ? minify(source, { compress: true }) : source;
  var result = "";

  switch (options.module) {
    case 'commonjs':
      result += "module.exports = " + JSON.stringify(transformed) + ";";
      break;

    case 'es6':
    default:
      result += "Object.defineProperty(exports, \"__esModule\", {value: true});\n";
      result += "exports[\"default\"] = " + JSON.stringify(transformed) + ";";
      break;
  }

  return result;
}
