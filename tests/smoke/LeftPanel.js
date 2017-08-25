module.exports = {
  'DSM Global Left Panel Test 1' : function (browser) {
    browser
	.page.login().LoginLaunch()
      	.page.login().Login()
	.page.leftpanel().SystemAdministratorLeftPanelElement()
	.page.leftpanel().SystemAdministratorLeftPanelElementText()
      	.end();
  },
  'DSM Global Left Panel Test 2' : function (browser) {
    browser
        .page.login().LoginLaunch()
        .page.login().Login()
        .page.leftpanel().DomainAdministratorLeftPanelElement()
        .page.leftpanel().DomainAdministratorLeftPanelElementText()
        .end();
  },
  'DSM Global Left Panel Test 3' : function (browser) {
    browser
        .page.login().LoginLaunch()
        .page.login().Login()
        .page.leftpanel().SecurityAdministratorLeftPanelElement()
        .page.leftpanel().SecurityAdministratorLeftPanelElementText()
        .end();
  },
  'DSM Global Left Panel Test 4' : function (browser) {
    browser
        .page.login().LoginLaunch()
        .page.login().Login()
        .page.leftpanel().DomainAndSecurityAdministratorLeftPanelElement()
        .page.leftpanel().DomainAndSecurityAdministratorLeftPanelElementText()
        .end();
  },
  'DSM Global Left Panel Test 5' : function (browser) {
    browser
        .page.login().LoginLaunch()
        .page.login().Login()
        .page.leftpanel().AllAdministratorLeftPanelElement()
        .page.leftpanel().AllAdministratorLeftPanelElementText()
        .end();
  }
};
