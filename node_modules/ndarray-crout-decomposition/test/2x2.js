var test = require('tape');
var ndarray = require('ndarray');
var zeros = require('zeros');
var lu = require('../');
var toA = require('./lib/toa.js');

test('2x2', function (t) {
    var A = ndarray([ 4, 3, 6, 3 ], [ 2, 2 ]);
    var L = zeros([ 2, 2 ]);
    var U = zeros([ 2, 2 ]);
    
    t.ok(lu(A, L, U));
    t.deepEqual(toA(U), [ [ 1, 1.5 ], [ 0, 1 ] ], 'U');
    t.deepEqual(toA(L), [ [ 4, 0 ], [ 3, -1.5 ] ], 'L');
    t.end();
});
