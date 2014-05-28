var test = require('tape');
var ndarray = require('ndarray');
var zeros = require('zeros');
var lu = require('../');
var toA = require('./lib/toa.js');
var round = require('./lib/round.js');

// example problem data from
// http://mathfaculty.fullerton.edu/mathews/n2003/cholesky/CholeskyMod/Links/CholeskyMod_lnk_3.html

var A = ndarray([
    2, 1, 1, 3, 2,
    1, 2, 2, 1, 1,
    1, 2, 9, 1, 5,
    3, 1, 1, 7, 1,
    2, 1, 5, 1, 8
], [ 5, 5 ]);
var L = zeros([ 5, 5 ]);
var U = zeros([ 5, 5 ]);

var expected = {
    L: [
        [ 2, 0, 0, 0, 0 ],
        [ 1, 3/2, 0, 0, 0 ],
        [ 1, 3/2, 7, 0, 0 ],
        [ 3, -1/2, 0, 7/3, 0 ],
        [ 2, 0, 4, -2, 2 ]
    ],
    U: [
        [ 1, 1/2, 1/2, 3/2, 1 ],
        [ 0, 1, 1, -1/3, 0 ],
        [ 0, 0, 1, 0, 4/7 ],
        [ 0, 0, 0, 1, -6/7 ],
        [ 0, 0, 0, 0, 1 ]
    ]
};

test('5x5', function (t) {
    t.ok(lu(A, L, U));
    t.deepEqual(
        round(toA(U), 13),
        round(expected.U, 13),
        'U'
    );
    t.deepEqual(
        round(toA(L), 13),
        round(expected.L, 13),
        'L'
    );
    t.end();
});
