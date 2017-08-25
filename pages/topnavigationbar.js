module.exports = function (browser) {
  var dsm = browser.globals;

this.LoginLaunch = function () {
   browser
        .windowMaximize()
        .url(dsm.url)
     return browser;
 }

this.TopNavigationBarElement = function () {
 browser
	.verify.elementPresent("#navbar")
	.verify.elementPresent("#logo")
 	.verify.elementPresent("#userDropdown")
 	.verify.elementPresent("#userDropdown_ChangePassword")
 	.verify.elementPresent("#userDropdown_MyProfile")
	.verify.elementPresent("#userDropdown_LogOut")
	.verify.elementPresent("#topNavHelp")
	.verify.elementPresent("#topNavNotifications")
	.verify.elementPresent("#getNotification")
     return browser;
 }
 
this.TopNavigationBarElementText = function () {
 browser
	.verify.containsText("#userDropdown", dsm.username.admin)
	.click('#userDropdown')
        .waitForElementVisible('#userDropdown_ChangePassword', 5000)
	.verify.containsText("#userDropdown_ChangePassword", "Change Password")
	.verify.containsText("#userDropdown_MyProfile", "My Profile")
	.verify.containsText("#userDropdown_LogOut", "Log Out")
     return browser;
 }

this.clickchangePassword = function () {
 browser
	.click('#userDropdown')
        .waitForElementVisible('#userDropdown_ChangePassword', 5000)
        .click('#userDropdown_ChangePassword')
     return browser;
 }

this.clickMyProfile = function () {
 browser
        .click('#userDropdown_MyProfile')
     return browser;
 }

this.clickLogOut = function () {
 browser
	//.click('#userDropdown')
        //.waitForElementVisible('#userDropdown_LogOut', 5000)
        .click('#userDropdown_LogOut')
     return browser;
 }
};
