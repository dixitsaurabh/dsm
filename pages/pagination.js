module.exports = function (browser) {
  var dsm = browser.globals;

this.LoginLaunch = function () {
   browser
      	.windowMaximize()
      	.url(dsm.url)
   return browser;
 }

this.PaginationElement = function () {
   browser
	.verify.elementPresent("#firstPage")
	.verify.elementPresent("#prevPage")
	.verify.elementPresent("#jumpPage")
	.verify.elementPresent("#nextPage")
	.verify.elementPresent("#lastPage")
   return browser;
 }

this.ClickFirstPage = function () {
   browser
	.waitForElementVisible('#firstPage', 5000)
	.click('#firstPage')
   return browser;
  }

this.ClickPrevPage = function () {
   browser
        .waitForElementVisible('#prevPage', 5000)
        .click('#prevPage')
   return browser;
  }

this.JumpPage = function () {
   browser
        .waitForElementVisible('#jumpPage', 5000)
	.clearValue('#jumpPage')
	.setValue('#jumpPage', 1)
        .click('#jumpPage')
   return browser;
  }

this.ClickNextPage = function () {
   browser
        .waitForElementVisible('#nextPage', 5000)
        .click('#nextPage')
   return browser;
  }

this.ClickLastPage = function () {
   browser
        .waitForElementVisible('#lastPage', 5000)
        .click('#lastPage')
   return browser;
  }
};
