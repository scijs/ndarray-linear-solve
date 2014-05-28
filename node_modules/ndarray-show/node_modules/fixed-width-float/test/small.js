var showf = require('../');
var test = require('tape');

test('small', function (t) {
    t.equal(showf(   1/10, 7), '  0.100');
    t.equal(showf(  1/100, 7), '  0.010');
    t.equal(showf( 1/1000, 7), ' 1.0e-3');
    t.equal(showf(1/10000, 7), ' 1.0e-4');
    t.equal(showf(1e-5, 7), ' 1.0e-5');
    t.equal(showf(1e-6, 7), ' 1.0e-6');
    t.equal(showf(1e-7, 7), ' 1.0e-7');
    t.equal(showf(5.5e-7, 7), ' 5.5e-7');
    t.equal(showf(5.55e-7, 7), ' 5.6e-7');
    t.equal(showf(9.9e-7, 7), ' 9.9e-7');
    t.equal(showf(9.95e-7, 7), ' 1.0e-6');
    
    t.end();
});
