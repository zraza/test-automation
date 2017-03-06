module.exports = {
  waitForPresence: (element, wait) =>
    browser.wait(protractor.ExpectedConditions.presenceOf(element), wait),

  waitForClass: (element, findClass, wait) =>
    browser.wait(() =>
      element.getAttribute('class').then((klass) =>
        klass.indexOf(findClass) >= 0), wait)
};
