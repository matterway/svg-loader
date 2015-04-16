var loaderUtils = require('loader-utils');
var Promise = require('es6-promise').Promise;
var SVGO = require('svgo');
var svgo = new SVGO();

var _optimize = function(data) {
  return new Promise(function(resolve, reject) {
    svgo.optimize(data, function(result) {
      resolve(result.data);
    });
  });
}

var _escape = function(data) {
  return resolve(encodeURIComponent(data));
}

var _generateUri = function(data) {
  return "data:image/svg+xml;charset=utf8," + svgData;
}

module.exports = function(content) {
  this.cacheable();
  var data = content.toString();
  var callback = this.async();
  var query = loaderUtils.parseQuery(this.query);

  return (query.optimize ? _optimize(data) : Promise.resolve(data))
    .then(function(data) {
      return query.escape ? _escape(data) : data
    })
    .then(function(data) {
      return query.uri ? _generateUri(data) : data
    })
    .then(function(data) {
      callback(null, "module.exports = '" + data + "'");
    });
}
