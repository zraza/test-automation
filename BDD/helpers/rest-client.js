const _ = require('lodash'),
  http = require('request-promise'),
  httpCode = {
    ENOTFOUND: 'Not Found'
  };

module.exports = function() {

  this.httpGet = (uri) =>
    this.makeRequest({ method: 'GET', uri: uri });

  this.getValue = (path) =>
    Promise.resolve(_.get(this.actualResponse, path));

  this.makeRequest = (options) => {
    return http({
      method: options.method,
      uri: options.uri,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true,
      resolveWithFullResponse: true
    }).then((response) => {
      this.actualResponse = response.body;
      this.statusCode = response.statusCode;
    }).catch((response, error) => {
      this.actualResponse = { message: httpCode[response.error.code] };
      this.statusCode = response.error.code;
    });
  }
}
