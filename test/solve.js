var test = require('tape');
var solve = require('../');
var ndarray = require('ndarray');
var show = require('ndarray-show');

var A = ndarray([ 2, 1, -1, -3, -1, 2, -2, 1, 2 ], [ 3, 3 ], [ 1, 3 ]);
var expected = [
    [ 2, 3, -1 ],
    [ 7, -3, 10 ],
    [ -35, 19, -42 ]
];
var inputs = [ [ 8, -11, -3 ], [ 1, 2, 3 ], [ -9, 2, 5 ] ];

test('3x3', function (t) {
    t.plan(2 * expected.length);
    
    inputs.forEach(function (b) {
        var x = ndarray(new Float64Array(3))
        t.ok(solve(x, A, ndarray(b)));
        t.deepEqual(show(x), show(expected.shift()));
    });
});
