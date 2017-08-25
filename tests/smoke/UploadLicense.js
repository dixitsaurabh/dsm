module.exports = {
  'DSM Upload License Functional Test' : function (browser) {
    browser
	.page.login().LoginLaunch()
	.page.login().Login()
	.page.leftpanel().ClickSettings()
	.page.settings().ClickLicense()
	.page.uploadLicense().UploadLicense()
	.end();
  }
};
