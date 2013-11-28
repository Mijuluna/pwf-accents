var assert = require('assert');
pwf = require('pwf.js')

describe('sanity', function() {
	it('tests only sanity of js code', function() {
		var mod = null;

		assert.doesNotThrow(function() {
			mod = require('../lib/accents');
		}, 'An error was thrown during mod inclusion.');

		assert.notEqual(null, mod, 'mod was not loaded successfuly. Check if it\'s being exported properly.');
		console.log(mod);
		assert.equal(pwf.status('accents'), true, 'Module was not registered successfully');
		pwf.test_sane = true;
	});
});
