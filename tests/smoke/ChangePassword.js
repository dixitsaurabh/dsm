module.exports = {
  'DSM Global Admin Change Password Functional Test' : function (browser) {
    browser
	.page.login().LoginLaunch()
	.page.login().Login()
   	.page.topnavigationbar().clickchangePassword()
// Add verify for password change button
	.end();
  }
};
