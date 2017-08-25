module.exports = {
  'DSM Global Login Functional Test' : function (browser) {
    browser
	.page.login().LoginLaunch()
      	.page.login().Login()
//	.page.login().LicenseLayOver()
	.end();
  },
  'DSM Global Username Functional Test' : function (browser) {
    browser
	.page.login().LoginLaunch()
//	.page.login().LocalDomainAdministrator()
//    	.page.login().NoUsernamePassword()
//	.page.login().UsernameNoPassword() 
	.page.login().MinUsernameLength()
//	.page.login().PasswordNoUsername()
	.page.login().WrgUsernamePassword() 
	.end();
  }
};
