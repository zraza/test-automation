const {baseUrl} = require('../../config/config').config;

module.exports = function() {
  'use strict';

  this.When('I am on "$page" page', (page) =>
    browser.get((page.indexOf('http')===0?'':baseUrl) + page));
};
