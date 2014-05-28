var showf = require('../');
var test = require('tape');

test('rounding', function (t) {
    t.equal(showf(9.99999e20, 8), ' 1.0e+21');
    t.equal(showf(9.9999e20, 8), ' 1.0e+21');
    t.equal(showf(9.999e20, 8), ' 1.0e+21');
    t.equal(showf(9.99e20, 8), ' 1.0e+21');
    t.equal(showf(9.95e20, 8), ' 1.0e+21');
    t.equal(showf(9.94e20, 8), ' 9.9e+20');
    t.equal(showf(9.949e20, 8), ' 9.9e+20');
    t.equal(showf(9.94999e20, 8), ' 9.9e+20');
    t.equal(showf(9.95001e20, 8), ' 1.0e+21');
    
    t.equal(showf(9.949e20, 7), '  1e+21');
    t.equal(showf(9.949999e20, 7), '  1e+21');
    t.equal(showf(9.950e20, 6), ' 1e+21');
    t.equal(showf(9.950e20, 5), undefined);
    t.equal(showf(-9.950e20, 5), undefined);
    
    t.equal(showf(-9.949e20, 8), '-9.9e+20');
    t.equal(showf(-9.951e20, 8), '-1.0e+21');
    t.equal(showf(-9.949e20, 7), ' -1e+21');
    t.equal(showf(-9.950e20, 7), ' -1e+21');
    t.equal(showf(-9.950e20, 6), '-1e+21');
    
    t.end();
});
