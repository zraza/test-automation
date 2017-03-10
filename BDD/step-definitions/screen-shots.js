module.exports = function () {
  "use strict";

  this.Then('Full page screen should match the "$page" page', (page) =>
    expect(browser.protractorImageComparison.checkFullPageScreen(page, { timeout: '15000' })).to.eventually.equal(0)
  );

  this.Then('View point should match the "$page" page', (page) =>
    expect(browser.protractorImageComparison.checkScreen(page, { timeout: '15000' })).to.eventually.equal(0)
  );

  this.Then('Element "$element" should match the "$saveElement" element', (element, saveElement,callback) =>{
    console.log($(element).length);
    callback();
    return expect(browser.protractorImageComparison.checkElement($(element), saveElement)).to.eventually.equal(0);
  }
  );
};
