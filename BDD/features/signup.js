const SignupPage = require('../pages/signup-page'),
  Element = require('../helpers/element'),
  RestClient = require('../helpers/rest-client');


module.exports = function() {
  'use strict';
  const signup = new SignupPage();


  this.When('I enter "$element" as "$txt"', (element, txt) => {
    signup[element].getElement().sendKeys(txt);
  });

  this.Then('I should see "$iconType" icon for "$element"', (iconType, element) => {

    const elementObj = signup[element].getElement(),
      klassName = 'is-autocheck-' + iconType;
    Element.waitForClass(elementObj, klassName, 1000);

    return expect(elementObj.getAttribute('class')).to.eventually.contain(klassName);
  });

  this.Then('I should see error "$errorMessage" for "$element"', (errorMessage, element) => {

    Element.waitForPresence(signup[element].getElementError(), 1000);
    expect(signup[element].getElement().getAttribute('class')).to.eventually.contain('is-autocheck-errored');
    expect(signup[element].getElementError().isPresent()).to.eventually.equal(true);

    return expect(signup[element].getElementError().getText()).to.eventually.equal(errorMessage);
  });

  this.Then('I should NOT see error "$errorMessage" for "$element"', (errorMessage, element) => {

    const elementObj = signup[element].getElement();
    Element.waitForClass(elementObj, 'is-autocheck-successful', 1000);

    expect(elementObj.getAttribute('class')).to.eventually.contain('is-autocheck-successful');
    expect(signup[element].getElementError().isPresent()).to.eventually.equal(false);
  });


};
