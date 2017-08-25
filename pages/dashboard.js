module.exports = function (browser) {
 this.DashboardElement = function () {
 browser
	.verify.elementPresent("#pageTitleId")
     return browser;
 }
 this.DashboardElementText = function () {
 browser
        .verify.containsText("#login_loginButton", "Log In")
     return browser;
 }
 this.Dashboard = function () {
 browser
        .verify.elementPresent("#pageTitleId")
     return browser;
 }
};
