module.exports = function() {
  "use strict";

  this.When('I click link "$lnkTitle"', (lnkTitle) =>
    element(by.linkText(lnkTitle)).click()
  );
};
