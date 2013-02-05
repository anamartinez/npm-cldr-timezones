var fs = require('fs'),
    assert = require('assert'),
    cldr = require('./cldr_timezones.js');

exports['it works'] = function() {
  var names = fs.readdirSync('./cldr_timezones/');
  names.forEach(function(filename) {
    var locale = filename.match(/(.*)_cldr_timezones.js/)[1];
    assert.deepEqual(cldr.load(locale), require('./cldr_timezones/' + filename));
  });
};


// if this module is the script being run, then run the tests:
if (module == require.main) {
  var mocha = require('child_process').spawn('./node_modules/.bin/mocha', [ '--colors', '--ui', 'exports', '--reporter', 'spec', __filename ]);
  mocha.stdout.pipe(process.stdout);
  mocha.stderr.pipe(process.stderr);
}
