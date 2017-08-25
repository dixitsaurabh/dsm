module.exports = function (browser) {
  var dsm = browser.globals;

this.LoginLaunch = function () {
   browser
        .windowMaximize()
        .url(dsm.url)
     return browser;
 }

this.UploadLicenseElement = function () {
   browser
        .verify.elementPresent("#pageTitleId")
        .verify.elementPresent("#uploadLicense")
        .verify.elementPresent("#selectFileId")
        .verify.elementPresent("#uploadId")
     return browser;
 }

this.UploadLicenseElementText = function () {
   browser
        .verify.containsText("#pageTitleId", "Upload License")
        .verify.containsText("#selectFileId", "Select")
        .verify.containsText("#uploadId", "Upload")
     return browser;
 }

this.UploadLicense = function () {
   browser
	.waitForElementVisible('input#licenseFile', 1000)
	.pause(1000)
	.clearValue('#licenseFile')
	.setValue('#licenseFile', dsm.license.fs)
//	.setValue('input#licenseFile', require('path').resolve(__dirname + dsm.license.fs))
	.pause(1000)
        .click('#uploadId').pause(1000)
	.verify.containsText("#message", "License file uploaded")
	.click('#btn_0')
     return browser;
 }
};
