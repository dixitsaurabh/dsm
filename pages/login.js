module.exports = function (browser) {
  var dsm = browser.globals;

this.LoginLaunch = function () {
   browser
      	.windowMaximize()
      	.url(dsm.url)
     return browser;
 }

this.LoginElement = function () {
   browser
	.verify.elementPresent("#navbar")
	.verify.elementPresent("#logo")
	.verify.elementPresent("#topNavHelp")
	.verify.elementPresent("#page-section")
	.verify.elementPresent("#bannerId")
	.verify.elementPresent("#logoID")
	.verify.elementPresent("#basic-addon1")
	.verify.elementPresent("#inputName")
	.verify.elementPresent("#basic-addon1")
	.verify.elementPresent("#inputPassword")
	.verify.elementPresent("#isLocalDomainAdmin")
	.verify.elementPresent("#localLabelId")
	.verify.elementPresent("#domainNameInput")
	.verify.elementPresent("#login_loginButton")
	.verify.elementPresent("#support")
     return browser;
 }

this.LoginElementText = function () {
   browser
	.waitForElementVisible('#login_loginButton', 5000)
	.verify.containsText("#logoID", "Vormetric")
	.verify.containsText("#localLabelId", "I administer a restricted domain")
	.verify.containsText("#login_loginButton", "Log In") 
     return browser;
}

this.LocalDomainAdministrator = function () {
   browser
	.click('#isLocalDomainAdmin')
	.waitForElementVisible('#domainNameInput', 5000)
	.verify.elementPresent("#domainNameInput")
   return browser;
}

this.FirstLogin = function() {
   browser
        .verify.elementPresent("#topNavHelp")
        .waitForElementVisible('#login_loginButton', 5000)
        .clearValue('#inputName')
        .clearValue('#inputPassword')
        .setValue('#inputName', dsm.username.admin)
        .setValue('#inputPassword', dsm.password.pwd1)
        .click('#login_loginButton')
        .verify.elementPresent("#userDropdown_LogOut")
     return browser;
 }
 	
this.Login = function() {
   browser
	.verify.elementPresent("#topNavHelp")
      	.waitForElementVisible('#login_loginButton', 5000)
	.clearValue('#inputName')
	.clearValue('#inputPassword')
      	.setValue('#inputName', dsm.username.admin)
	.setValue('#inputPassword', dsm.password.pwd2)
	.click('#login_loginButton')
	.verify.title("Vormetric - DSM")
	.waitForElementVisible('#userDropdown', 5000)
	.verify.containsText("#userDropdown", dsm.username.admin)
	.verify.elementPresent("#userDropdown_LogOut")
     return browser; 
 }

this.MinUsernameLength = function() {
   browser
        .waitForElementVisible('#login_loginButton', 5000)
       	.clearValue('#inputName')
        .clearValue('#inputPassword')
        .setValue('#inputName', 'abcdE')
        .setValue('#inputPassword', 'abcdE')
        .click('#login_loginButton')
        .verify.title("Vormetric - DSM")
        .verify.containsText("#userDropdown", "")
        .verify.elementPresent("#userDropdown_LogOut")
      return browser;
 }

this.NoUsernamePassword = function() {
    browser
       	.clearValue('#inputName')
        .clearValue('#inputPassword')
     	.click('#login_loginButton')
      	.pause(1000)
      	.verify.visible('#loginError')
      	.verify.containsText( '#loginError', 'Unknown username/password' )
      	.verify.valueContains( '#inputName', '' )
      	.verify.valueContains( '#inputPassword', '' )
     return browser;
  }

this.UsernameNoPassword = function() {
    browser
       	.clearValue('#inputName')
        .clearValue('#inputPassword')
      	.setValue( '#inputName', dsm.username.admin)
      	.click('#login_loginButton')
      	.pause(1000)
      	.verify.visible('#loginError')
      	.verify.containsText( '#loginError', 'Unknown username/password' )
      	.verify.valueContains( '#inputName', '' )
      	.verify.valueContains( '#inputPassword', '' )
    return browser;
  }

this.PasswordNoUsername = function() {
    browser
       	.clearValue('#inputName')
        .clearValue('#inputPassword')
      	.setValue( '#inputPassword', dsm.password.pwd2)
      	.click('#login_loginButton')
      	.pause(1000)
      	.verify.visible('#loginError')
      	.verify.containsText( '#loginError', 'Unknown username/password' )
      	.verify.valueContains( '#inputName', '' )
      	.verify.valueContains( '#inputPassword', '' )
    return browser;
  }

this.WrgUsernamePassword = function() {
    browser
       	.clearValue('#inputName')
        .clearValue('#inputPassword')
      	.setValue( '#inputName', 'abcdefg' )
      	.setValue( '#inputPassword', 'Ssl12345#' )
      	.click('#login_loginButton')
      	.pause(1000)
      	.verify.visible('#loginError')
      	.verify.containsText( '#loginError', 'Invalid username/password' )
      	.verify.valueContains( '#inputName', '' )
      	.verify.valueContains( '#inputPassword', '' )
    return browser;
  }

this.LicenseLayOver = function() {
    browser
  	.click('#btn_0')
	.pause(1000)
    return browser;
  }
};
