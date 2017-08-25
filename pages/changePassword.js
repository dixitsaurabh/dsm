module.exports = function (browser) {
  var dsm = browser.globals;

this.LoginLaunch = function () {
   browser
        .windowMaximize()
        .url(dsm.url)
     return browser;
 }

this.ChangePasswordElement = function () {
   browser
        .verify.elementPresent("#pageTitleId")
        .verify.elementPresent("#changeBtn")
        .verify.elementPresent("#cancelBtn")
        .verify.elementPresent("#currentPassword")
        .verify.elementPresent("#newPassword")
        .verify.elementPresent("#confirmNewPassword")
     return browser;
 }

this.ChangePasswordElementText = function () {
   browser
        .verify.containsText("#pageTitleId", "Change Password")
        .verify.containsText("#changeBtn", "Change")
        .verify.containsText("#cancelBtn", "Cancel")
     return browser;
 }

this.ChangePasswordFirstLogin = function () {
   browser
	.clearValue('#currentPassword')
	.clearValue('#newPassword')
	.clearValue('#confirmNewPassword')
        .setValue('#currentPassword', 'admin123' )
	.setValue('#newPassword', 'Ssl12345#')
	.setValue('#confirmNewPassword', 'Ssl12345#')
	.click('#changeBtn')
	.pause(1000)
     return browser;
 }
};
