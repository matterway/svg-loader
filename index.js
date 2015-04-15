module.exports = function(content) {
  this.cacheable();
  return "module.exports = 'data:image/svg+xml;charset=utf8," + encodeURIComponent(content.toString()) + "'";
}
module.exports.raw = true;

