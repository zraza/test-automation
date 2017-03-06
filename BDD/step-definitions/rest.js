const RestClient = require('../helpers/rest-client'),
  restClient = new RestClient(),
  conf = require('../../config/config').config,
  baseUrl = conf.apiBaseUrl;

module.exports = function() {

  this.When('I make a GET request to "$url"', (uri) =>
    restClient.httpGet(baseUrl + uri));

  this.Then('The response property "$path" should be "$expectedValue"', (path, expectedValue) =>
    expect(restClient.getValue(path)).to.eventually.equal(expectedValue));
};
