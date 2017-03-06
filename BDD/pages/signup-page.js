const FormElement = require('../components/form-element'),
  _ = require('lodash');

module.exports = function() {
  'use strict';

  _.each({
    'Username': '#user_login',
    'Password': '#user_password'
  }, (id, label) => {
    this[label] = new FormElement(id);

  });
};
