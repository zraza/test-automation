const _ = require('lodash');

function FormElement(element) {
  this.element = $(element);
}

_.extend(FormElement.prototype, {
  getElement: function() {
    return this.element;
  },
  getElementError: function() {
    return $('.error', this.element);
  }
  
});

module.exports = FormElement;
