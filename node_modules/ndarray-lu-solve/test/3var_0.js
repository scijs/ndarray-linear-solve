var test = require('tape');
var solve = require('../');
var crout = require('ndarray-crout-decomposition');
var ndarray = require('ndarray');
var zeros = require('zeros');

var A = ndarray(
    [ 2, 1, -1, 8, -3, -1, 2, -11, -2, 1, 2, -3 ],
    [ 4, 3 ], [ 1, 4 ]
);
var L = zeros([ 3, 3 ]);
var U = zeros([ 3, 3 ]);

test('3-variable system', function (t) {
    crout(A.hi(3,3), L, U);
    
    var X = new Float64Array(3);
    var Y = new Float64Array(3);
    var solution = solve(L, U, A.lo(3,0).pick(0), X, Y);
    
    t.equal(X, solution);
    t.deepEqual([].slice.call(X), [ 2, 3, -1 ]);
    t.end();
});
