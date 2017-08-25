module.exports = {
  'DSM Global Top Navigation Bar Test' : function (browser) {
    browser
	.page.login().LoginLaunch()	
      	.page.login().Login()
      	.page.topnavigationbar().TopNavigationBarElement()
      	.page.topnavigationbar().TopNavigationBarElementText()
      	.end();
  }
};
