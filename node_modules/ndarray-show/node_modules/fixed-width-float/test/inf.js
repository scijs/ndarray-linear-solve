var showf = require('../');
var test = require('tape');

test('Infinity', function (t) {
    t.equal(showf( Infinity, 0), undefined);
    t.equal(showf(-Infinity, 0), undefined);
    t.equal(showf( Infinity, 1), undefined);
    t.equal(showf(-Infinity, 1), undefined);
    t.equal(showf( Infinity, 2), ' I');
    t.equal(showf(-Infinity, 2), '-I');
    t.equal(showf( Infinity, 3), ' In');
    t.equal(showf(-Infinity, 3), '-In');
    t.equal(showf( Infinity, 4), ' Inf');
    t.equal(showf(-Infinity, 4), '-Inf');
    t.equal(showf( Infinity, 5), '  Inf');
    t.equal(showf(-Infinity, 5), ' -Inf');
    t.equal(showf( Infinity, 6), '   Inf');
    t.equal(showf(-Infinity, 6), '  -Inf');
    t.equal(showf( Infinity, 7), '    Inf');
    t.equal(showf(-Infinity, 7), '   -Inf');
    t.equal(showf( Infinity, 8), '     Inf');
    t.equal(showf(-Infinity, 8), '    -Inf');
    t.equal(showf( Infinity, 9), ' Infinity');
    t.equal(showf(-Infinity, 9), '-Infinity');
    t.equal(showf( Infinity, 10), '  Infinity');
    t.equal(showf(-Infinity, 10), ' -Infinity');
    t.equal(showf( Infinity, 11), '   Infinity');
    t.equal(showf(-Infinity, 11), '  -Infinity');
    t.equal(showf( Infinity, 15), '       Infinity');
    t.equal(showf(-Infinity, 15), '      -Infinity');
    
    t.end();
});
