var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: true,
    themeName: 'default-blue',
    reportsDirectory: __dirname + '/reports'
});

module.exports = {
    username: {
	admin: 'admin',
	system: 'sysadmin',
	domain: 'domadmin',
	security: 'secadmin',
	domainsecurity: 'domsecadmin',
	all: 'alladmin',
	},
    license: {
	all: '/home/saurabh/vormetric/dsm/lib/license/license_ulimit',
	fs: '/home/saurabh/vormetric/dsm/lib/license/license17q2.txt',
	},
    password: {
	pwd1: 'admin123',
	pwd2: 'Ssl12345#',
	},
    url: 'https://192.168.94.130',
    reporter: reporter.fn
};
