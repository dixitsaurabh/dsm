module.exports = function (browser) {
  var dsm = browser.globals;

this.LoginLaunch = function () {
   browser
      	.windowMaximize()
      	.url(dsm.url)
   return browser;
 }

this.DomainsElement = function () {
   browser
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
	.verify.elementPresent("#vorListTablePageLength")
	.verify.elementPresent("#choose10")
	.verify.elementPresent("#choose20")
	.verify.elementPresent("#choose50")
	.verify.elementPresent("#choose100")
	.verify.elementPresent("#choose200")
   return browser;
 }

this.DomainsElementText = function () {
   browser
        .verify.containsText("#pageTitleId", "Domains")
        .verify.containsText("#domainLabel", "Unassigned Domains")
        .verify.containsText("#pageSubTitleID", "All Domains")
	.click('#keyTypeSearch')
	.waitForElementVisible('#menu1', 5000)
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
        .verify.containsText("#choose20", "20")
        .verify.containsText("#choose50", "50")
        .verify.containsText("#choose100", "100")
        .verify.containsText("#choose200", "200")
   return browser;
  }

this.ClickDomains = function () {
   browser
	.click('#nav_domains')
	.click('#nav_domainList')
	.waitForElementVisible('#addDomainBtn', 5000)	
   return browser;
 }
};
