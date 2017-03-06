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
  },
  getWrapper: function() {

  	return $('#user_login');//.element(by.xpath("..")); 

  	console.log($(this.element).element(by.xpath("..")));
    return $(this.element).element(by.xpath(".."));
  }
  
});

module.exports = FormElement;
