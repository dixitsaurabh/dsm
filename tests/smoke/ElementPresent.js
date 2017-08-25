module.exports = {
  'DSM Login Page Element Validation test' : function (browser) {
    browser
	.page.login().LoginLaunch()
      	.page.login().LoginElement()
	.page.login().Login()
  },
  'DSM Top Navigation Bar Element Validation Test' : function (browser) {
    browser
	.page.topnavigationbar().TopNavigationBarElement()
  },
  'DSM Change Password Element Validation Test' : function (browser) {
    browser
	.page.topnavigationbar().clickchangePassword()	
        .page.changePassword().ChangePasswordElement()
  },
  'DSM Left Panel Element Validation Test' : function (browser) {
    browser
	.page.leftpanel().SystemAdministratorLeftPanelElement()
  },
  'DSM Domain Page Element Validation Test' : function (browser) {
    browser
        .page.domains().ClickDomains()
        .page.domains().DomainsElement()
        .end()
  }
};
