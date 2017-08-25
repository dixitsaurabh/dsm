module.exports = {
  'DSM Login Page Element Text Validation Test' : function (browser) {
    browser
	.page.login().LoginLaunch()
      	.page.login().LoginElementText()
	.page.login().Login()
  },
  'DSM Top Navigation Bar Element Text Validation Test' : function (browser) {
    browser
	.page.topnavigationbar().TopNavigationBarElementText()
  },
  'DSM Change Password Element Text Validation Test' : function (browser) {
    browser
//	.page.topnavigationbar().clickchangePassword()
//        .page.changePassword().ChangePasswordElementText()
  },
  'DSM Left Panel Element Text Validation Test' : function (browser) {
    browser
	.page.leftpanel().SystemAdministratorLeftPanelElementText()
  },
  'DSM Domains Page Element Text Validation Test' : function (browser) {
    browser
	.page.domains().ClickDomains()
        .page.domains().DomainsElementText()
        .end()
  }
};
