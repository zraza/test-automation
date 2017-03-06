const conf = require('../../config/config').config,
  baseUrl = conf.baseUrl;

module.exports = function() {
  'use strict';

  this.When('I am on "$page" page', (page) =>
    browser.get(baseUrl + page));
};
