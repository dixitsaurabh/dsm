module.exports = function (browser) {
this.SystemAdministratorLeftPanelElement = function () {
 browser
	.verify.elementPresent("#homeID")
	.verify.elementPresent("#nav_domains")
	.verify.elementPresent("#nav_admins")
//	.verify.elementPresent("#nav_reports")
//	.verify.elementPresent("#nav_logs")
	.verify.elementPresent("#nav_settings")
     return browser;
 }

this.DomainAdministratorLeftPanelElement = function () {
 browser
        .verify.elementPresent("#homeID")
        .verify.elementPresent("#nav_domains")
        .verify.elementPresent("#nav_admins")
//      .verify.elementPresent("#nav_reports")
//      .verify.elementPresent("#nav_logs")
        .verify.elementPresent("#nav_settings")
     return browser;
 }

this.SecurityAdministratorLeftPanelElement = function () {
 browser
        .verify.elementPresent("#homeID")
        .verify.elementPresent("#nav_domains")
        .verify.elementPresent("#nav_admins")
//      .verify.elementPresent("#nav_reports")
//      .verify.elementPresent("#nav_logs")
        .verify.elementPresent("#nav_settings")
     return browser;
 }

this.DomainAndSecurityAdministratorLeftPanelElement = function () {
 browser
        .verify.elementPresent("#homeID")
        .verify.elementPresent("#nav_domains")
        .verify.elementPresent("#nav_admins")
//      .verify.elementPresent("#nav_reports")
//      .verify.elementPresent("#nav_logs")
        .verify.elementPresent("#nav_settings")
     return browser;
 }
this.AllAdministratorLeftPanelElement = function () {
 browser
        .verify.elementPresent("#homeID")
        .verify.elementPresent("#nav_domains")
        .verify.elementPresent("#nav_admins")
//      .verify.elementPresent("#nav_reports")
//      .verify.elementPresent("#nav_logs")
        .verify.elementPresent("#nav_settings")
     return browser;
 }

this.SystemAdministratorLeftPanelElementText = function () {
 browser
        .verify.containsText("#homeID", "Home")
        .verify.containsText("#nav_domains", "Domains")
        .verify.containsText("#nav_admins", "Admins")
//      .verify.containsText("#nav_reports", "Reports")
//      .verify.containsText("#nav_logs", "Logs")
        .verify.containsText("#nav_settings", "Settings")
    return browser;
 }

this.DomainAdministratorLeftPanelElementText = function () {
 browser
	.verify.containsText("#homeID", "Home")
	.verify.containsText("#nav_domains", "Domains")
	.verify.containsText("#nav_admins", "Admins")
//	.verify.containsText("#nav_reports", "Reports")
//	.verify.containsText("#nav_logs", "Logs")
	.verify.containsText("#nav_settings", "Settings")
    return browser;	
 }

this.SecurityAdministratorLeftPanelElementText = function () {
 browser
        .verify.containsText("#homeID", "Home")
        .verify.containsText("#nav_domains", "Domains")
        .verify.containsText("#nav_admins", "Admins")
//      .verify.containsText("#nav_reports", "Reports")
//      .verify.containsText("#nav_logs", "Logs")
        .verify.containsText("#nav_settings", "Settings")
    return browser;
 }

this.DomainAndSecurityAdministratorLeftPanelElementText = function () {
 browser
        .verify.containsText("#homeID", "Home")
        .verify.containsText("#nav_domains", "Domains")
        .verify.containsText("#nav_admins", "Admins")
//      .verify.containsText("#nav_reports", "Reports")
//      .verify.containsText("#nav_logs", "Logs")
        .verify.containsText("#nav_settings", "Settings")
    return browser;
 }

this.AllAdministratorLeftPanelElementText = function () {
 browser
        .verify.containsText("#homeID", "Home")
        .verify.containsText("#nav_domains", "Domains")
        .verify.containsText("#nav_admins", "Admins")
//	.verify.containsText("#nav_reports", "Reports")
//      	.verify.containsText("#nav_logs", "Logs")
        .verify.containsText("#nav_settings", "Settings")
    return browser;
 }

this.ClickDomains = function () {
 browser
        .click('#nav_domains')
    return browser;
 }

this.ClickAdmins = function () {
 browser
        .click('#nav_admins')
    return browser;
 }

this.ClickSettings = function () {
 browser
	.click('#nav_settings')
    return browser;
 }
};
