var showf = require('../');
var test = require('tape');

test('big', function (t) {
    t.equal(showf(       1, 8), '   1.000');
    t.equal(showf(      10, 8), '  10.000');
    t.equal(showf(     100, 8), ' 100.000');
    t.equal(showf(    1000, 8), ' 1000.00');
    t.equal(showf(   10000, 8), ' 10000.0');
    t.equal(showf(  100000, 8), ' 1.00e+5');
    t.equal(showf( 1000000, 8), ' 1.00e+6');
    t.equal(showf(10000000, 8), ' 1.00e+7');
    
    t.equal(showf(1.23456e9, 8), ' 1.23e+9');
    t.equal(showf(2.23456e9, 8), ' 2.23e+9');
    t.equal(showf(3.23456e9, 8), ' 3.23e+9');
    t.equal(showf(4.23456e9, 8), ' 4.23e+9');
    t.equal(showf(5.23456e9, 8), ' 5.23e+9');
    t.equal(showf(6.23456e9, 8), ' 6.23e+9');
    t.equal(showf(7.23456e9, 8), ' 7.23e+9');
    t.equal(showf(8.23456e9, 8), ' 8.23e+9');
    t.equal(showf(9.23456e9, 8), ' 9.23e+9');
    t.equal(showf(10.23456e9, 8), ' 1.0e+10');
    t.equal(showf(1.23456e20, 8), ' 1.2e+20');
    t.equal(showf(1.26456e20, 8), ' 1.3e+20');
    
    t.end();
});

test('negative big', function (t) {
    t.equal(showf(-       1, 7), ' -1.000');
    t.equal(showf(-      10, 7), '-10.000');
    t.equal(showf(-  9.9994, 7), ' -9.999');
    t.equal(showf(-  9.9999, 7), '-10.000');
    t.equal(showf(-     100, 8), '-100.000');
    t.equal(showf(-    999.9, 8), '-999.900');
    t.equal(showf(-    999.9901, 8), '-999.990');
    t.equal(showf(-    999.9904, 8), '-999.990');
    t.equal(showf(-    999.9905, 8), '-999.990');
    t.equal(showf(-    999.99051, 8), '-999.991');
    t.equal(showf(-    999.9906, 8), '-999.991');
    t.equal(showf(-    999.91, 7), '-999.91');
    t.equal(showf(-    999.94, 7), '-999.94');
    t.equal(showf(-    9999.94, 8), '-9999.94');
    t.equal(showf(-    9999.99, 8), '-9999.99');
    t.equal(showf(-    9999.994, 8), '-9999.99');
    t.equal(showf(-    9999.9951, 8), '-10000.0');
    t.equal(showf(-    99999.94, 8), '-99999.9');
    t.equal(showf(-    999999.94, 9), '-999999.9');
    t.equal(showf(     999999.94, 9), ' 999999.9');
    t.equal(showf(-    999.95, 7), '-999.95');
    t.equal(showf(-    999.99, 7), '-999.99');
    t.equal(showf(-    999.994, 7), '-999.99');
    t.equal(showf(     999.994, 7), ' 999.99');
    t.equal(showf(-    499.994, 7), '-499.99');
    t.equal(showf(-    9999.94, 7), '-9999.9');
    t.equal(showf(-    9989.94, 7), '-9989.9');
    t.equal(showf(-    999.995, 7), '-999.99');
    t.equal(showf(-    999.9951, 7), '-1000.0');
    t.equal(showf(-    1000, 7), '-1000.0');
    t.equal(showf(-    1000.4, 7), '-1000.4');
    t.equal(showf(-    1000.9, 7), '-1000.9');
    t.equal(showf(-   10000, 8), '-10000.0');
    t.equal(showf(-  100000, 8), '-1.00e+5');
    t.equal(showf(- 1000000, 8), '-1.00e+6');
    t.equal(showf(-10000000, 8), '-1.00e+7');
    
    t.equal(showf(-1.23456e9, 8), '-1.23e+9');
    t.equal(showf(-1.23456e20, 8), '-1.2e+20');
    t.equal(showf(-1.26456e20, 8), '-1.3e+20');
    
    t.end();
});
