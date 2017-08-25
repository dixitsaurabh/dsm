module.exports = {
  'DSM First Login Functional Test' : function (browser) {
    browser
	.page.login().LoginLaunch()
	.page.login().FirstLogin()
	.page.changePassword().ChangePasswordFirstLogin()
  },

  'DSM Upload License Functional Test' : function (browser) {
    browser
	.page.leftpanel().ClickSettings()
	.page.settings().ClickUploadLicense()
	.page.uploadLicense().UploadLicense()
	.end();
  }
};
