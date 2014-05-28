var showf = require('../');
var test = require('tape');

test('around zero', function (t) {
    t.equal(showf(1, 7), '  1.000');
    t.equal(showf(0, 7), '  0.000');
    t.equal(showf(-1, 7), ' -1.000');
    
    t.equal(showf(1, 3), '  1');
    t.equal(showf(-1, 3), ' -1');
    
    t.equal(showf(1, 4), ' 1.0');
    t.equal(showf(-1, 4), '-1.0');
    
    t.equal(showf(1, 14), '      1.000000');
    t.equal(showf(-1, 14), '     -1.000000');
    
    t.equal(showf(1, 2), ' 1');
    t.equal(showf(-1, 2), '-1');
    
    t.equal(showf(100, 2), undefined);
    t.equal(showf(-100, 2), undefined);
    
    t.end();
});
