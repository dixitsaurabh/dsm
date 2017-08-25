module.exports = {
  'DSM Global LogOut Functional Test' : function (browser) {
    browser
	.page.login().LoginLaunch()
      	.page.login().Login()
	.page.topnavigationbar().clickLogOut()
//	.page.login().LoginElementText()
	.end();
  }
};
