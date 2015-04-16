var loaderUtils = require("loader-utils");

module.exports = function(content) {
  this.cacheable();
  var svgData = content.toString();
  var query = loaderUtils.parseQuery(this.query);
  if (query.escape) {
    svgData = encodeURIComponent(content.toString());
  }
  if (query.uri) {
    svgData = "data:image/svg+xml;charset=utf8," + svgData;
  }
  svgData = "'" + svgData + "'";
  return "module.exports = " + svgData;
}
module.exports.raw = true;

