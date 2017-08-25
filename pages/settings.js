module.exports = function (browser) {
  var dsm = browser.globals;

this.LoginLaunch = function () {
   browser
      	.windowMaximize()
      	.url(dsm.url)
   return browser;
 }

this.SettingsElement = function () {
   browser
	.verify.elementPresent("#License")
   return browser;
 }

this.SettingsElementText = function () {
   browser
        .verify.containsText("#License", "License")
   return browser;
  }

this.ClickLicense = function () {
   browser
	.click('#License').pause(1000)	
	.waitForElementVisible('#pageTitleId', 5000)
        .verify.elementPresent("#pageTitleId")
   return browser;
 }
};
