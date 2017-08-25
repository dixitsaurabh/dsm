module.exports = function (browser) {
  var dsm = browser.globals;

this.LoginLaunch = function () {
   browser
      	.windowMaximize()
      	.url(dsm.url)
   return browser;
 }

this.AdminsElement = function () {
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
	.verify.elementPresent("#homeID")
	.verify.elementPresent("#nav_domains")
	.verify.elementPresent("#nav_admins")
	.verify.elementPresent("#nav_settings")
	.verify.elementPresent("#pageTitleId")
	.verify.elementPresent("#domainLabel")
	.verify.elementPresent("#unassignCountId")
	.verify.elementPresent("#pageSubTitleID")
	.verify.elementPresent("#keyTypeSearch")
	.verify.elementPresent("#menu1")
	.verify.elementPresent("#menu2")
	.verify.elementPresent("#menu3")
	.verify.elementPresent("#searchInput")
	.verify.elementPresent("#searchBtn")
	.verify.elementPresent("#addDomainBtn")
	.verify.elementPresent("#deleteDomainBtn")
	.verify.elementPresent("#tableSettingBtn")
	.verify.elementPresent("#selectUnselectAll")
	.verify.elementPresent("#sortName")
	.verify.elementPresent("#sortDescription")
	.verify.elementPresent("#sortType")
	.verify.elementPresent("#sortKmip")
//	.verify.elementPresent("#vorListTablePageLength")
//	.verify.elementPresent("#choose10")
//	.verify.elementPresent("#choose25")
//	.verify.elementPresent("#choose50")
//	.verify.elementPresent("#choose100")
	return browser;
 }

this.AdminsElementText = function () {
   browser
        .verify.containsText("#userDropdown_ChangePassword", "Change Password")
        .verify.containsText("#userDropdown_MyProfile", "My Profile")
        .verify.containsText("#userDropdown_LogOut", "Log Out")
        .verify.containsText("#homeID", "Home")
        .verify.containsText("#nav_domains", "Domains")
        .verify.containsText("#nav_admins", "Admins")
        .verify.containsText("#nav_settings", "Settings")
        .verify.containsText("#pageTitleId", "Domains")
        .verify.containsText("#domainLabel", "Unassigned Domains")
        .verify.containsText("#pageSubTitleID", "All Domains")
        .verify.containsText("#menu1", "All")
        .verify.containsText("#menu2", "Assigned")
        .verify.containsText("#menu3", "Unassigned")
        .verify.containsText("#addDomainBtn", "Add Domain")
      	.verify.containsText("#deleteDomainBtn", "Delete Domain")
        .verify.containsText("#sortName", "Domain Name")
        .verify.containsText("#sortDescription", "Description")
        .verify.containsText("#sortType", "Administrator Type")
        .verify.containsText("#sortKmip", "KMIP Supported")
        .verify.containsText("#choose10", "10")
        .verify.containsText("#choose25", "25")
        .verify.containsText("#choose50", "50")
        .verify.containsText("#choose100", "100")
        .verify.containsText("#jumpPage", "1")
	return browser;
  }
};
